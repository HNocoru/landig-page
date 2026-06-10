'use client'

import { useEffect, useRef } from 'react'
import {
  ArrowRight,
  ClipboardList,
  Sparkles,
  UserRound,
} from 'lucide-react'

const onboardingSteps = [
  {
    icon: UserRound,
    title: 'Crea tu perfil',
    desc: 'Regístrate y responde una experiencia breve para descubrir tus intereses, tus fortalezas y tu forma de aprender.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  {
    icon: ClipboardList,
    title: 'Explora tus opciones',
    desc: 'Oriantate+ analiza tu contexto, tus metas y tu ubicación para mostrarte carreras y universidades compatibles.',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
  {
    icon: Sparkles,
    title: 'Recibe tu recomendación',
    desc: 'Obtén una guía clara con rutas académicas, oportunidades y razones por las que una opción tiene más sentido para ti.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
]

export function OnboardingSection() {
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
      id="onboarding"
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
      aria-labelledby="onboarding-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 right-0 h-72 w-72 orb bg-primary/5" />
      <div className="absolute left-0 top-0 h-72 w-72 orb bg-accent/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1.5 font-mono text-xs text-primary">
            <Sparkles className="h-3 w-3" />
            Onboarding en 3 pasos
          </div>

          <h2 id="onboarding-heading" className="reveal text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Empieza tu orientación en minutos
          </h2>

          <p className="reveal mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            El proceso está pensado para que cualquier estudiante pueda comprender mejor su futuro académico sin complicaciones.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {onboardingSteps.map((step, i) => (
            <div key={step.title} className="reveal relative group" style={{ transitionDelay: `${i * 0.1}s` }}>
              {i < onboardingSteps.length - 1 && (
                <div className="absolute left-full top-14 z-10 hidden w-6 justify-center md:flex">
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40" />
                </div>
              )}

              <div className="h-full rounded-3xl border border-border/40 bg-background/70 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-border/60">
                <div className="mb-6 flex items-start justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${step.border} ${step.bg} transition-transform group-hover:scale-110`}>
                    <step.icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <span className={`text-4xl font-black opacity-20 font-mono ${step.color}`}>0{i + 1}</span>
                </div>

                <span className="text-xs uppercase tracking-[0.25em] font-mono text-muted-foreground">Paso {i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mx-auto mt-14 max-w-3xl" style={{ transitionDelay: '0.4s' }}>
          <div className="rounded-3xl border border-primary/20 bg-primary/10 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Con Oriantate+ puedes pasar de la confusión a una orientación más informada en muy poco tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}