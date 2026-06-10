'use client'

import { useEffect, useRef } from 'react'
import {
  Compass,
  GraduationCap,
  MapPin,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'

const flowSteps = [
  {
    icon: Compass,
    title: 'Historia de la estudiante',
    desc: 'Una alumna responde una experiencia interactiva que revela sus intereses, fortalezas y estilo de aprendizaje.',
  },
  {
    icon: MapPin,
    title: 'Contexto real',
    desc: 'El sistema analiza su ubicación, su entorno familiar y las universidades disponibles cerca de ella.',
  },
  {
    icon: Sparkles,
    title: 'IA predictiva',
    desc: 'Oriantate+ combina Machine Learning y datos oficiales para identificar las carreras con mayor afinidad.',
  },
  {
    icon: GraduationCap,
    title: 'Recomendación clara',
    desc: 'Recibe una ruta concreta con carreras, universidades y razones por las que esa opción encaja mejor.',
  },
]

export function UseCaseSection() {
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
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="use-case"
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
      aria-labelledby="use-case-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 h-72 w-72 orb bg-accent/6" />
      <div className="absolute bottom-0 left-0 h-72 w-72 orb bg-primary/6" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1.5 font-mono text-xs text-primary">
            <TrendingUp className="h-3 w-3" />
            Caso de uso real
          </div>

          <h2
            id="use-case-heading"
            className="reveal text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          >
            De una duda vocacional a una decisión más clara
          </h2>

          <p className="reveal mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cuando una estudiante necesita orientación, Oriantate+ convierte preguntas vagas en recomendaciones concretas, realistas y alineadas con su contexto.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal rounded-3xl border border-border/40 bg-background/70 p-8 shadow-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-mono text-primary">
              <CheckCircle2 className="h-4 w-4" />
              Flujo de orientación
            </div>

            <div className="space-y-6">
              {flowSteps.map((step, index) => (
                <div key={step.title} className="relative flex items-start gap-4">
                  {index < flowSteps.length - 1 && <div className="absolute left-6 top-14 h-12 w-px bg-border/50" />}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal rounded-3xl border border-primary/20 bg-primary/10 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Resultado esperado</p>
            <h3 className="mt-3 text-2xl font-bold text-foreground">Una elección con más confianza</h3>

            <div className="mt-6 space-y-4">
              {[
                'Se identifica una carrera con mayor afinidad y mejores oportunidades.',
                'La recomendación considera universidades cercanas y contexto real.',
                'El estudiante entiende por qué la opción es adecuada para él o ella.',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border/40 bg-background/70 p-4 text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}