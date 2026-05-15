'use client'

import { useState, useEffect } from 'react'
import { Shield, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Problema', href: '#problem' },
  { label: 'Solución', href: '#solution' },
  { label: 'Características', href: '#features' },
  { label: 'Tecnología', href: '#technology' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-border/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Inicio de Sentinel AI">
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors" />
            <Shield className="w-5 h-5 text-primary relative z-10" />
          </div>
          <span className="text-foreground font-semibold tracking-tight text-base">
            Sentinel<span className="text-primary"> AI</span>
          </span>
        </a>

        {/* Enlaces de escritorio */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Botón principal */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#cta"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Detecta phishing con IA en tu móvil
          </a>
          <a
            href="#cta"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 neon-glow-btn"
          >
            Probar Demo
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-border/30">
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground"
            >
              Probar Demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}