#!/usr/bin/env python3
"""
Project Context Dumper
Genera un documento Markdown optimizado para LLMs.

Compatible con:
- Next.js
- React
- TypeScript
- Vite
- Node.js

No depende del shell (Fish/Bash/Zsh).
"""

from pathlib import Path
from datetime import datetime
import argparse
import subprocess
import platform
import json
import os

ROOT = Path.cwd()

IGNORE_DIRS = {
    ".git",
    ".next",
    "node_modules",
    "dist",
    "build",
    "coverage",
    ".turbo",
    ".vercel",
    ".idea",
    ".vscode",
    "__pycache__",
}

TEXT_EXTENSIONS = {
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".mjs",
    ".cjs",
    ".css",
    ".scss",
    ".sass",
    ".html",
    ".json",
    ".md",
    ".txt",
    ".yml",
    ".yaml",
    ".toml",
    ".env",
    ".gitignore",
}

CONFIG_PRIORITY = [
    "package.json",
    "tsconfig.json",
    "next.config.js",
    "next.config.ts",
    "next.config.mjs",
    "tailwind.config.js",
    "tailwind.config.ts",
    "tailwind.config.cjs",
    "postcss.config.js",
    "postcss.config.mjs",
    "components.json",
    "README.md",
]

SOURCE_DIRS = [
    "app",
    "pages",
    "src",
    "components",
    "hooks",
    "lib",
    "utils",
    "styles",
    "public",
]

parser = argparse.ArgumentParser()
parser.add_argument(
    "--output",
    default="PROJECT_CONTEXT.md",
    help="Archivo de salida",
)
args = parser.parse_args()

OUT = Path(args.output)

###########################################################################

def run(cmd):
    try:
        return subprocess.check_output(
            cmd,
            stderr=subprocess.DEVNULL,
            text=True,
        ).strip()
    except Exception:
        return "N/A"

###########################################################################

def tree(path, prefix=""):
    entries = sorted(
        [
            p
            for p in path.iterdir()
            if p.name not in IGNORE_DIRS
        ],
        key=lambda p: (p.is_file(), p.name.lower()),
    )

    lines = []

    for i, p in enumerate(entries):
        last = i == len(entries) - 1
        connector = "└── " if last else "├── "

        lines.append(prefix + connector + p.name)

        if p.is_dir():
            ext = "    " if last else "│   "
            lines.extend(tree(p, prefix + ext))

    return lines

###########################################################################

def language(path):
    ext = path.suffix.lower()

    return {
        ".ts":"ts",
        ".tsx":"tsx",
        ".js":"javascript",
        ".jsx":"jsx",
        ".json":"json",
        ".css":"css",
        ".scss":"scss",
        ".md":"markdown",
        ".html":"html",
        ".yml":"yaml",
        ".yaml":"yaml",
        ".toml":"toml",
    }.get(ext,"text")

###########################################################################

stats = {
    "files":0,
    "lines":0,
    "bytes":0,
}

files = []

###########################################################################

for folder in SOURCE_DIRS:

    d = ROOT / folder

    if not d.exists():
        continue

    for f in d.rglob("*"):

        if f.is_dir():
            continue

        if any(part in IGNORE_DIRS for part in f.parts):
            continue

        if f.suffix.lower() not in TEXT_EXTENSIONS:
            continue

        files.append(f)

###########################################################################

for cfg in CONFIG_PRIORITY:

    f = ROOT / cfg

    if f.exists():
        files.append(f)

###########################################################################

files = sorted(
    set(files),
    key=lambda p: str(p)
)

###########################################################################

with OUT.open("w", encoding="utf8") as md:

    md.write("# PROJECT CONTEXT\n\n")

    md.write("## Información\n\n")

    md.write(f"- Fecha: {datetime.now()}\n")
    md.write(f"- Sistema: {platform.platform()}\n")
    md.write(f"- Python: {platform.python_version()}\n")
    md.write(f"- Node: {run(['node','-v'])}\n")
    md.write(f"- npm: {run(['npm','-v'])}\n")
    md.write(f"- pnpm: {run(['pnpm','-v'])}\n")
    md.write(f"- Git branch: {run(['git','branch','--show-current'])}\n\n")

    md.write("---\n\n")

    md.write("# Estructura\n\n")

    md.write("```text\n")
    md.write(ROOT.name+"\n")

    for l in tree(ROOT):
        md.write(l+"\n")

    md.write("```\n\n")

    md.write("---\n\n")

    md.write("# Índice\n\n")

    for f in files:
        md.write(f"- `{f.relative_to(ROOT)}`\n")

    md.write("\n---\n\n")

    for f in files:

        rel = f.relative_to(ROOT)

        try:
            text = f.read_text(
                encoding="utf8",
                errors="ignore",
            )

        except:
            continue

        stats["files"] += 1
        stats["lines"] += text.count("\n")
        stats["bytes"] += f.stat().st_size

        md.write(f"# Archivo: {rel}\n\n")

        md.write("| Campo | Valor |\n")
        md.write("|------|------|\n")
        md.write(f"| Lenguaje | {language(f)} |\n")
        md.write(f"| Tamaño | {round(f.stat().st_size/1024,2)} KB |\n")
        md.write(f"| Líneas | {text.count(chr(10))+1} |\n\n")

        md.write(f"```{language(f)}\n")
        md.write(text)
        md.write("\n```\n\n")

        md.write("---\n\n")

    md.write("# Estadísticas\n\n")

    md.write(f"- Archivos: {stats['files']}\n")
    md.write(f"- Líneas: {stats['lines']}\n")
    md.write(f"- Tamaño: {round(stats['bytes']/1024/1024,2)} MB\n")

print(f"\nGenerado: {OUT}\n")