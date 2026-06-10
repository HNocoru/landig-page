'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Compass, ExternalLink, Github, GraduationCap, Shield, Sparkles, Telescope } from 'lucide-react'

const futureItems = [
  {
    icon: Compass,
    title: 'Orientación contextual',
    desc: 'Conectamos intereses, entorno y metas para mostrar opciones más reales y útiles.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  {
    icon: GraduationCap,
    title: 'Rutas claras',
    desc: 'Cada recomendación incluye caminos académicos, universidades y razones de compatibilidad.',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
  {
    icon: Sparkles,
    title: 'IA explicable',
    desc: 'La plataforma muestra por qué una opción encaja mejor, no solo qué sugiere.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
  {
    icon: Telescope,
    title: 'Escalabilidad futura',
    desc: 'El producto puede crecer hacia más instituciones, más regiones y más experiencias personalizadas.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
]

function FutureVisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="vision" ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32" aria-labelledby="vision-heading">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-1/2 h-96 w-96 translate-x-1/2 -translate-y-1/2 orb bg-accent/6" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background/70 px-3 py-1.5 font-mono text-xs text-accent">
            <Telescope className="h-3 w-3" />
            Hoja de ruta y visión
          </div>
          <h2 id="vision-heading" className="reveal text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Una guía más humana para decidir el futuro
          </h2>
          <p className="reveal mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Oriantate+ nace para convertir la incertidumbre vocacional en una experiencia comprensible, cercana y útil.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {futureItems.map((item, i) => (
            <div key={item.title} className="reveal rounded-2xl border border-border/40 bg-background/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border/60" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${item.border} ${item.bg}`}>
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta" ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32" aria-labelledby="cta-heading">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-75 w-175 -translate-x-1/2 -translate-y-1/2 orb bg-primary/10" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="reveal mb-10">
          <div className="relative inline-flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10" />
            <div className="absolute inset-2 rounded-full border border-primary/30 bg-primary/5" />
            <Shield className="relative z-10 h-8 w-8 text-primary" />
          </div>
        </div>

        <h2 id="cta-heading" className="reveal mb-6 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          Descubre una carrera que encaje mejor contigo
        </h2>

        <p className="reveal mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Oriantate+ ayuda a los estudiantes a tomar decisiones más seguras, más claras y mejor informadas sobre su futuro académico y profesional.
        </p>

        <div className="reveal flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 neon-glow-btn">
            Comenzar
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-8 py-3.5 text-base font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50">
            <ExternalLink className="h-4 w-4" />
            Ver proyecto
          </a>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { label: 'Sin tarjeta de crédito' },
            { label: 'Diseñado para estudiantes' },
            { label: 'Orientación basada en contexto' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <div className="h-1 w-1 rounded-full bg-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 py-12" role="contentinfo">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Oriantate<span className="text-primary">+</span></span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Una experiencia de orientación vocacional impulsada por IA, geolocalización y contexto educativo.
            </p>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/40 bg-background/70 px-3 py-1.5 text-xs text-muted-foreground">
              Proyecto de investigación académica — 2025
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Tecnologías</h3>
            <ul className="space-y-2" role="list">
              {['Flutter', 'Supabase', 'Python', 'Machine Learning', 'Geolocalización', 'Datos SEP'].map((tech) => (
                <li key={tech} className="cursor-default text-sm text-muted-foreground transition-colors hover:text-foreground">{tech}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Proyecto</h3>
            <ul className="space-y-2" role="list">
              {[
                { label: 'Documentación', href: '#' },
                { label: 'Repositorio GitHub', href: '#', icon: Github },
                { label: 'Contacto', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.icon && <link.icon className="h-3.5 w-3.5" />}
                    {link.label}
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border/30 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">&copy; 2025 Oriantate+. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="font-mono">v1.0.0-alpha</span>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              <span>Orientación inteligente</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function FutureCTAFooter() {
  return (
    <>
      <FutureVisionSection />
      <CTASection />
      <Footer />
    </>
  )
} 