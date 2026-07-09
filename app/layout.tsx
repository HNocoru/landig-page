import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Oriéntate+ | Orientación vocacional acompañada de principio a fin",
  description:
    "Oriéntate+ es la plataforma que le da al orientador de tu preparatoria las herramientas para diagnosticar, dar seguimiento y acompañar a cada alumno de último grado en su decisión de carrera, con juegos, chatbot con IA y Machine Learning.",
  keywords: [
    "orientación vocacional",
    "preparatoria",
    "carrera universitaria",
    "chatbot vocacional",
    "Chiapas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased bg-background text-on-surface`}>
        {children}
      </body>
    </html>
  );
}