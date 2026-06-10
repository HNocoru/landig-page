'use client'

import { useEffect, useRef } from 'react'
import {
  Brain,
  Compass,
  Globe,
  BarChart2,
  Smartphone,
  BookOpen,
  Zap,
  Lightbulb,
  Layers,
  Users,
  GraduationCap,
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Análisis Inteligente de Perfil',
    desc: 'La inteligencia artificial analiza intereses, habilidades, aptitudes y personalidad para construir un perfil vocacional único.',
    tag: 'IA',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    size: 'md:col-span-2',
  },
  {
    icon: Compass,
    title: 'Orientación Vocacional Personalizada',
    desc: 'Genera recomendaciones de carreras basadas en la compatibilidad entre el estudiante y distintas áreas profesionales.',
    tag: 'Principal',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    size: '',
  },
  {
    icon: Globe,
    title: 'Geolocalización de Universidades',
    desc: 'Encuentra universidades e instituciones cercanas utilizando la ubicación actual del estudiante.',
    tag: 'GPS',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    size: '',
  },
  {
    icon: BarChart2,
    title: 'Compatibilidad Profesional',
    desc: 'Calcula porcentajes de afinidad entre el perfil del usuario y distintas carreras universitarias.',
    tag: 'Analítica',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    size: '',
  },
  {
    icon: Users,
    title: 'Comparación de Universidades',
    desc: 'Permite comparar universidades, programas académicos y oportunidades educativas.',
    tag: 'Educación',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    size: '',
  },
  {
    icon: Layers,
    title: 'Factores Internos y Externos',
    desc: 'Integra variables personales, económicas, académicas y geográficas para generar recomendaciones más precisas.',
    tag: 'Modelo IA',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    size: 'md:col-span-2',
  },
  {
    icon: Lightbulb,
    title: 'Recomendaciones Inteligentes',
    desc: 'Sugiere rutas académicas y profesionales adaptadas al perfil de cada estudiante.',
    tag: 'IA',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    size: '',
  },
  {
    icon: BookOpen,
    title: 'Exploración de Carreras',
    desc: 'Proporciona información detallada sobre áreas de estudio, perfiles profesionales y campo laboral.',
    tag: 'Carreras',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    size: 'md:col-span-2',
  },
  {
    icon: Smartphone,
    title: 'Experiencia Mobile First',
    desc: 'Diseñado para funcionar perfectamente en teléfonos inteligentes, permitiendo orientación en cualquier lugar.',
    tag: 'App',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    size: '',
  },
  {
    icon: GraduationCap,
    title: 'Seguimiento Académico',
    desc: 'Permite visualizar el progreso del estudiante y actualizar recomendaciones conforme evolucionan sus intereses.',
    tag: 'Seguimiento',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    size: '',
  },
]

export function FeaturesSection() {
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
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="absolute top-0 right-0 w-72 h-72 orb bg-accent/6" />

      <div className="absolute bottom-0 left-0 w-72 h-72 orb bg-primary/6" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
            <Zap className="w-3 h-3" />
            Funcionalidades Principales
          </div>

          <h2
            id="features-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Todo lo que Necesitas para
            <span className="neon-text">
              {' '}Descubrir tu Futuro Profesional
            </span>
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Un conjunto completo de herramientas impulsadas por inteligencia artificial
            que ayudan a los estudiantes a descubrir carreras, universidades y oportunidades
            alineadas con su perfil vocacional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`reveal glass-card rounded-2xl p-6 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group cursor-default ${feat.size}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-11 h-11 rounded-xl ${feat.bg} border ${feat.border} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <feat.icon className={`w-5 h-5 ${feat.color}`} />
                </div>

                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${feat.bg} border ${feat.border} ${feat.color} font-mono`}
                >
                  {feat.tag}
                </span>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2">
                {feat.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feat.desc}
              </p>

              <div
                className={`mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full opacity-60 ${feat.bg}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}