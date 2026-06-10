'use client'

import { useEffect, useRef } from 'react'
import {
  Brain,
  MapPin,
  BarChart3,
  MessageSquare,
  GraduationCap,
  Lightbulb,
  CheckCircle2,
  Target,
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Análisis Inteligente de Perfil',
    desc: 'La IA analiza intereses, habilidades, personalidad y aptitudes para construir un perfil vocacional preciso.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  {
    icon: Target,
    title: 'Factores Internos',
    desc: 'Evalúa motivaciones, competencias, gustos y fortalezas para identificar áreas profesionales compatibles.',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
  {
    icon: MapPin,
    title: 'Factores Externos',
    desc: 'Considera ubicación geográfica, situación económica y oportunidades académicas disponibles.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    icon: MessageSquare,
    title: 'Orientación Explicable',
    desc: 'Cada recomendación incluye una explicación clara para que el estudiante comprenda por qué una carrera es adecuada.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
  {
    icon: GraduationCap,
    title: 'Universidades Cercanas',
    desc: 'Muestra instituciones educativas cercanas mediante geolocalización para facilitar la toma de decisiones.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
  },
  {
    icon: Lightbulb,
    title: 'Recomendaciones Personalizadas',
    desc: 'Genera rutas académicas adaptadas al perfil de cada estudiante utilizando modelos predictivos.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
  },
]

function LayerDiagram() {
  return (
    <div className="glass-card rounded-2xl p-5 space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-4 h-4 text-primary" />

        <span className="text-sm font-semibold text-foreground">
          Cómo Funciona Oriantate+
        </span>
      </div>

      {[
        {
          label: 'Información del Estudiante',
          sublabel: 'Intereses, habilidades y personalidad',
          color: 'border-border/60 bg-secondary/30',
          text: 'text-muted-foreground',
          icon: '👨‍🎓',
        },
        {
          label: 'Motor de IA',
          sublabel: 'Machine Learning + Análisis Predictivo',
          color: 'border-primary/50 bg-primary/10',
          text: 'text-primary',
          icon: '🤖',
        },
        {
          label: 'Evaluación Integral',
          sublabel: 'Factores internos y externos',
          color: 'border-accent/50 bg-accent/10',
          text: 'text-accent',
          icon: '📊',
        },
        {
          label: 'Recomendación Personalizada',
          sublabel: 'Carreras y universidades compatibles',
          color: 'border-green-500/50 bg-green-500/10',
          text: 'text-green-400',
          icon: '🎯',
        },
      ].map((layer, i) => (
        <div key={layer.label} className="relative">
          <div
            className={`border ${layer.color} rounded-xl px-4 py-3 flex items-center gap-3`}
          >
            <span className="text-lg">{layer.icon}</span>

            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${layer.text}`}>
                {layer.label}
              </p>

              <p className="text-xs text-muted-foreground mt-0.5">
                {layer.sublabel}
              </p>
            </div>

            <CheckCircle2 className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
          </div>

          {i < 3 && (
            <div className="flex justify-center my-1">
              <div className="w-0.5 h-4 bg-gradient-to-b from-border to-transparent" />
            </div>
          )}
        </div>
      ))}

      <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-xs text-primary font-mono text-center">
          Oriantate+ ayuda a descubrir la mejor opción académica basada en datos reales
        </p>
      </div>
    </div>
  )
}

export function SolutionSection() {
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
      id="solution"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="solution-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 orb bg-primary/8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
            <GraduationCap className="w-3 h-3" />
            La Solución
          </div>

          <h2
            id="solution-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Una plataforma inteligente para
            <span className="neon-text">
              {' '}descubrir tu futuro profesional
            </span>
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oriantate+ combina inteligencia artificial,
            factores internos, factores externos y
            geolocalización para recomendar carreras
            y universidades compatibles con cada estudiante.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="reveal glass-card rounded-2xl p-5 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${feat.bg} border ${feat.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <feat.icon className={`w-5 h-5 ${feat.color}`} />
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  {feat.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="lg:col-span-2 reveal"
            style={{ transitionDelay: '0.3s' }}
          >
            <LayerDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}