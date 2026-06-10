'use client'

import { useEffect, useRef } from 'react'
import {
  Brain,
  CheckCircle2,
  Compass,
  MapPin,
  Shield,
  Smartphone,
  Sparkles,
} from 'lucide-react'

const highlights = [
  {
    icon: Brain,
    title: 'Orientación en tiempo real',
    desc: 'La app analiza tus respuestas y te muestra recomendaciones inmediatas.',
    color: 'text-primary',
  },
  {
    icon: MapPin,
    title: 'Universidades cercanas',
    desc: 'Descubre opciones reales según tu región y tus posibilidades.',
    color: 'text-accent',
  },
  {
    icon: CheckCircle2,
    title: 'Resultados claros',
    desc: 'Entiende por qué una carrera encaja mejor con tu perfil.',
    color: 'text-green-400',
  },
  {
    icon: Sparkles,
    title: 'Experiencia simple',
    desc: 'Todo está diseñado para que navegar sea claro, rápido y útil.',
    color: 'text-yellow-400',
  },
]

function MobileApp() {
  return (
    <div className="relative mx-auto w-64 animate-float" style={{ animationDelay: '0.5s' }}>
      <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-border/60 bg-background shadow-2xl">
        <div className="absolute left-1/2 top-0 z-20 flex h-5 w-24 -translate-x-1/2 items-center justify-center rounded-b-2xl bg-background">
          <div className="h-2 w-2 rounded-full bg-border/60" />
        </div>

        <div className="min-h-130 space-y-3 px-3 pb-4 pt-8">
          <div className="flex items-center justify-between px-1 text-xs text-muted-foreground">
            <span className="font-mono">9:41</span>
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-primary" />
              <span>Oriantate+</span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 p-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/20">
              <Compass className="h-3.5 w-3.5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Tu orientación</p>
              <p className="text-[10px] text-primary">Compatibilidad 92%</p>
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-secondary/50 p-3">
            <p className="mb-2 text-xs text-muted-foreground">Recomendación principal</p>
            <div className="rounded-xl border border-primary/20 bg-background/70 p-3">
              <p className="text-sm font-semibold text-foreground">Ingeniería en Software</p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">Alta afinidad con diseño, tecnología y resolución de problemas.</p>
            </div>
          </div>

          <div className="space-y-2">
            {[
              'Universidades cercanas',
              'Programas con alta empleabilidad',
              'Ruta de formación clara',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg border border-border/30 bg-background/70 px-2.5 py-2 text-[10px] text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 text-green-400" />
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/10 p-3">
            <p className="mb-1 text-xs font-semibold text-primary">Sugerencia de IA</p>
            <p className="text-[10px] leading-relaxed text-muted-foreground">Tu perfil combina creatividad, análisis y contexto regional, por eso esta carrera encaja mejor para ti.</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-primary/20 opacity-50" />
    </div>
  )
}

export function MobileShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="app" ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32" aria-labelledby="app-heading">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-1/2 h-96 w-96 translate-x-1/2 -translate-y-1/2 orb bg-primary/8" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1.5 font-mono text-xs text-primary">
            <Smartphone className="h-3 w-3" />
            Aplicación móvil
          </div>

          <h2 id="app-heading" className="reveal text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Tu orientación disponible en cualquier momento
          </h2>

          <p className="reveal mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            La experiencia de Oriantate+ está diseñada para acompañarte con recomendaciones claras y útiles desde tu celular.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal order-2 flex justify-center lg:order-1 lg:justify-end">
            <MobileApp />
          </div>

          <div className="order-1 space-y-5 lg:order-2">
            {highlights.map((item, index) => (
              <div key={item.title} className="reveal flex gap-4 group" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background/70 transition-colors group-hover:border-primary/40">
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}