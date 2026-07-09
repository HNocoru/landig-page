import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full py-10 px-6 text-center">
      <p className="text-sm text-on-surface-variant">
        Oriéntate+ · Pantalla de referencia ·{" "}
        <Link href="/" className="text-primary hover:underline">
          Volver a la landing
        </Link>
      </p>
    </footer>
  );
}