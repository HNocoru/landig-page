"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Landing" },
  { href: "/registro", label: "Registro" },
  { href: "/panel", label: "Panel orientador" },
  { href: "/expediente/1", label: "Expediente" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-6 max-w-7xl mx-auto h-20">
        <Link href="/" className="font-bold text-primary flex items-center gap-2 text-lg">
          <span className="material-symbols-outlined">explore</span>
          Oriéntate+
        </Link>

        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.split("/").slice(0, 2).join("/"));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-full transition-colors hover:bg-surface-container-low/50",
                  active
                    ? "text-primary font-bold bg-surface-container-low"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}