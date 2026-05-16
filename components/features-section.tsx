'use client'

import { useEffect, useRef } from 'react'
import {
  Type,
  GitBranch,
  Lightbulb,
  Compass,
  Globe,
  BarChart2,
  Smartphone,
  BookOpen,
  Zap
} from 'lucide-react'

const features = [
  {
    icon: Type,
    title: 'Análisis Semántico NLP',
    desc: 'Modelos basados en transformers detectan tácticas de manipulación, urgencia artificial y patrones de ingeniería social ocultos en el texto del correo.',
    tag: 'Principal',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    size: 'md:col-span-2',
  },
  {
    icon: GitBranch,
    title: 'Clasificación con Machine Learning',
    desc: 'Modelos ML entrenados con millones de muestras de phishing clasifican correos en múltiples vectores de ataque con alta precisión.',
    tag: 'Principal',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    size: '',
  },
  {
    icon: Lightbulb,
    title: 'Alertas IA Explicables',
    desc: 'Cada detección incluye una explicación clara y entendible, no solo una etiqueta de riesgo, sino el razonamiento detrás de ella.',
    tag: 'Único',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    size: '',
  },
  {
    icon: Compass,
    title: 'Recomendaciones Contextuales',
    desc: 'Guías accionables adaptadas al tipo de amenaza específica para ayudar al usuario a responder correctamente.',
    tag: 'UX',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    size: '',
  },
  {
    icon: Globe,
    title: 'Validación de Remitente y Dominio',
    desc: 'Verificación automática de DKIM, SPF y DMARC, además de detección de dominios homoglíficos y falsificados.',
    tag: 'Seguridad',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    size: '',
  },
  {
    icon: BarChart2,
    title: 'Porcentaje de Confianza de Riesgo',
    desc: 'Más allá de un simple seguro/peligroso, Sentinel proporciona un puntaje de riesgo de 0–100 con intervalos de confianza.',
    tag: 'Analítica',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    size: 'md:col-span-2',
  },
  {
    icon: Smartphone,
    title: 'Asistente Mobile-First',
    desc: 'Diseñado para protección en movimiento. Ligero, rápido y totalmente optimizado para iOS y Android.',
    tag: 'Plataforma',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    size: '',
  },
  {
    icon: BookOpen,
    title: 'Explicaciones Educativas',
    desc: 'Los usuarios aprenden por qué un correo es peligroso, desarrollando conciencia sobre phishing a largo plazo.',
    tag: 'Educación',
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
            Conjunto de Funciones
          </div>

          <h2
            id="features-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Todo lo que Necesitas para{' '}
            <span className="neon-text">Mantenerte Protegido</span>
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Un conjunto completo de herramientas impulsadas por IA que detectan,
            explican y educan, creado para personas reales en un mundo digital peligroso.
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

              {/* Hover indicator */}
              <div
                className={`mt-4 h-0.5 w-0 group-hover:w-full ${feat.bg.replace('bg-', 'bg-').replace('/10', '')} transition-all duration-500 rounded-full opacity-60`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}