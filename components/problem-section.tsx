'use client'

import { useEffect, useRef } from 'react'
import {
  AlertTriangle,
  Brain,
  TrendingUp,
  MapPin,
  GraduationCap,
} from 'lucide-react'

const challenges = [
  {
    icon: Brain,
    title: 'Falta de Autoconocimiento',
    desc: 'Muchos estudiantes desconocen sus aptitudes, intereses y fortalezas al elegir una carrera.',
    stat: '40%',
    statLabel: 'cambian de carrera',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
  },
  {
    icon: GraduationCap,
    title: 'Información Limitada',
    desc: 'Las decisiones suelen tomarse con poca información sobre carreras y universidades.',
    stat: '25%',
    statLabel: 'abandona estudios',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
  },
  {
    icon: MapPin,
    title: 'Factores Externos',
    desc: 'La ubicación, economía familiar y oportunidades laborales influyen en el futuro profesional.',
    stat: 'GPS',
    statLabel: 'universidades cercanas',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    icon: TrendingUp,
    title: 'Decisiones sin Datos',
    desc: 'Elegir una carrera sin orientación puede provocar frustración y pérdida de tiempo.',
    stat: 'IA',
    statLabel: 'recomendaciones inteligentes',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
]

function StudentProfilePreview() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
        <GraduationCap className="w-3.5 h-3.5 text-primary" />

        <span className="text-xs text-primary font-mono">
          PERFIL VOCACIONAL
        </span>

        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">
            Resultado IA
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Perfil:
            </span>

            <span className="text-xs font-medium text-primary">
              Analítico y Creativo
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Compatibilidad:
            </span>

            <span className="text-xs text-green-400">
              92%
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Universidades:
            </span>

            <span className="text-xs text-foreground">
              14 encontradas
            </span>
          </div>
        </div>

        <div className="bg-secondary/40 rounded-xl p-3 border border-border/30">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Con base en tus respuestas, tienes una alta afinidad
            con carreras tecnológicas, análisis de datos y
            resolución de problemas.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
            Carreras Recomendadas
          </p>

          {[
            'Ingeniería en Software',
            'Ciencia de Datos',
            'Ingeniería en IA',
            'Mecatrónica',
          ].map((career) => (
            <div
              key={career}
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-primary/10 border border-primary/20"
            >
              <span className="text-xs text-foreground">
                {career}
              </span>

              <span className="text-xs font-bold text-primary">
                Alta
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProblemSection() {
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
      id="problem"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="problem-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 orb bg-primary/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 space-y-4">

          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
            <AlertTriangle className="w-3 h-3" />
            Problema Actual
          </div>

          <h2
            id="problem-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Muchos estudiantes eligen una carrera sin conocer realmente su perfil.

            <span className="block text-primary">
              ¿Es la decisión correcta?
            </span>
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La falta de orientación vocacional adecuada provoca cambios de carrera,
            abandono escolar y decisiones basadas en información incompleta.
          </p>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oriantate+ combina inteligencia artificial, gamificación y geolocalización
            para ayudar a los estudiantes a descubrir su mejor camino profesional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <div className="grid sm:grid-cols-2 gap-4">
            {challenges.map((item, i) => (
              <div
                key={item.title}
                className="reveal glass-card rounded-2xl p-5 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>

                <div className="mb-2">
                  <span className={`text-2xl font-bold ${item.color}`}>
                    {item.stat}
                  </span>

                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {item.statLabel}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="reveal"
            style={{ transitionDelay: '0.3s' }}
          >
            <StudentProfilePreview />
          </div>
        </div>
      </div>
    </section>
  )
}