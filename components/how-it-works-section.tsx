'use client'

import { useEffect, useRef } from 'react'
import {
  GraduationCap,
  Brain,
  BarChart3,
  MapPin,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: GraduationCap,
    title: 'Registro del Estudiante',
    desc: 'El estudiante crea su perfil y proporciona información básica para comenzar el proceso de orientación vocacional.',
    detail: 'Inicio rápido y sencillo',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/40',
    glowColor: 'shadow-primary/20',
  },
  {
    step: '02',
    icon: Brain,
    title: 'Evaluación Inteligente',
    desc: 'La IA analiza intereses, habilidades, personalidad y aptitudes mediante cuestionarios interactivos.',
    detail: 'Análisis personalizado',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/40',
    glowColor: 'shadow-accent/20',
  },
  {
    step: '03',
    icon: BarChart3,
    title: 'Procesamiento Predictivo',
    desc: 'El sistema combina factores internos y externos para calcular la compatibilidad con distintas carreras.',
    detail: 'Resultados basados en datos',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/40',
    glowColor: 'shadow-yellow-500/20',
  },
  {
    step: '04',
    icon: MapPin,
    title: 'Recomendaciones Personalizadas',
    desc: 'Se muestran carreras, universidades cercanas y opciones educativas alineadas con el perfil del estudiante.',
    detail: 'Orientación para tu futuro',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/40',
    glowColor: 'shadow-green-500/20',
  },
]

function FlowVisualization() {
  return (
    <div className="glass-card rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-4 h-4 text-primary" />

        <span className="text-sm font-semibold text-foreground">
          Flujo de Orientación
        </span>

        <span className="ml-auto text-xs text-muted-foreground font-mono">
          IA + Datos
        </span>
      </div>

      <div className="space-y-2">
        {[
          {
            label: 'Registro del Estudiante',
            pct: 100,
            color: 'bg-primary',
          },
          {
            label: 'Evaluación de Intereses',
            pct: 80,
            color: 'bg-primary',
          },
          {
            label: 'Análisis de Aptitudes',
            pct: 60,
            color: 'bg-accent',
          },
          {
            label: 'Procesamiento Predictivo',
            pct: 40,
            color: 'bg-yellow-500',
          },
          {
            label: 'Generación de Recomendaciones',
            pct: 20,
            color: 'bg-green-500',
          },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">
                {item.label}
              </span>

              <span className="text-muted-foreground font-mono">
                Completado
              </span>
            </div>

            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className={`h-full rounded-full ${item.color}`}
                style={{ width: `${100 - item.pct + 20}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Resultado final
        </span>

        <span className="text-sm font-bold text-green-400">
          Perfil generado
        </span>
      </div>
    </div>
  )
}

export function HowItWorksSection() {
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
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="how-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] orb bg-primary/5 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-accent/30 text-xs text-accent font-mono">
            <Brain className="w-3 h-3" />
            Cómo Funciona
          </div>

          <h2
            id="how-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Cuatro Pasos para
            <span className="neon-text">
              {' '}Descubrir tu Futuro Profesional
            </span>
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Oriantate+ utiliza inteligencia artificial,
            análisis predictivo y geolocalización para
            identificar las carreras y universidades más
            compatibles con cada estudiante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="reveal relative group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0.75rem)] w-6 h-0.5 bg-gradient-to-r from-border to-transparent z-10" />
              )}

              <div
                className={`glass-card rounded-2xl p-5 h-full hover:border-border/60 transition-all duration-300 hover:-translate-y-1 shadow-xl ${step.glowColor}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>

                  <span
                    className={`text-3xl font-black ${step.color} opacity-30 font-mono`}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {step.desc}
                </p>

                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs ${step.bg} border ${step.border} ${step.color}`}
                >
                  <div className="w-1 h-1 rounded-full bg-current" />
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="reveal max-w-xl mx-auto"
          style={{ transitionDelay: '0.4s' }}
        >
          <FlowVisualization />
        </div>
      </div>
    </section>
  )
}