'use client'

import { useEffect, useRef } from 'react'
import { Shield, Brain, Search, BarChart3, MessageSquare, Globe, Lightbulb, CheckCircle2 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Análisis Semántico',
    desc: 'Modelos avanzados de NLP analizan la intención, el tono y los patrones lingüísticos del correo para detectar tácticas de manipulación invisibles para sistemas basados en reglas.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  {
    icon: Search,
    title: 'Validación Contextual',
    desc: 'Cruza el contenido del correo con el historial del remitente, reputación del dominio y contexto real de comunicación.',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
  {
    icon: BarChart3,
    title: 'Puntuación de Riesgo de Phishing',
    desc: 'Proporciona una puntuación de confianza de 0–100 con intervalos de confianza, ayudando a los usuarios a tomar decisiones informadas rápidamente.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    icon: MessageSquare,
    title: 'Alertas IA Explicables',
    desc: 'Cada detección incluye una explicación en lenguaje sencillo, no solo una etiqueta, sino una razón fácil de entender.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
  {
    icon: Globe,
    title: 'Verificación de Remitente y Dominio',
    desc: 'Verifica registros DKIM, SPF y DMARC, además de detectar dominios homoglíficos, typosquatting y URLs falsas.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
  },
  {
    icon: Lightbulb,
    title: 'Recomendaciones Inteligentes',
    desc: 'En lugar de bloquear, Sentinel guía a los usuarios con recomendaciones accionables y conscientes del contexto antes de interactuar.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
  },
]

function LayerDiagram() {
  return (
    <div className="glass-card rounded-2xl p-5 space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">
          Resumen de Arquitectura
        </span>
      </div>

      {/* Capas */}
      {[
        {
          label: 'Tu Gmail / Cliente de Correo',
          sublabel: 'Sin cambios — Sentinel funciona en paralelo',
          color: 'border-border/60 bg-secondary/30',
          text: 'text-muted-foreground',
          icon: '📧',
        },
        {
          label: 'Capa de Asistencia IA Sentinel',
          sublabel: 'NLP · ML · LLM · IA Contextual',
          color: 'border-primary/50 bg-primary/10',
          text: 'text-primary',
          icon: '🛡',
        },
        {
          label: 'Puntuación de Riesgo + Explicación',
          sublabel: 'Salida explicable y fácil de entender',
          color: 'border-accent/50 bg-accent/10',
          text: 'text-accent',
          icon: '📊',
        },
        {
          label: 'Decisión y Acción del Usuario',
          sublabel: 'Empoderado, no reemplazado',
          color: 'border-green-500/50 bg-green-500/10',
          text: 'text-green-400',
          icon: '✅',
        },
      ].map((layer, i) => (
        <div key={layer.label} className="relative">
          <div className={`border ${layer.color} rounded-xl px-4 py-3 flex items-center gap-3`}>
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

      {/* Beneficio principal */}
      <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-xs text-primary font-mono text-center">
          Sentinel nunca reemplaza Gmail — agrega una capa inteligente de análisis
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
    <section
      id="solution"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="solution-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 orb bg-primary/8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
            <Shield className="w-3 h-3" />
            La Solución
          </div>

          <h2
            id="solution-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Una{' '}
            <span className="neon-text">Capa de Asistencia</span>{' '}
            Inteligente para tu Bandeja de Entrada
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sentinel AI no reemplaza tu cliente de correo. Funciona junto a él:
            analizando, puntuando y explicando cada correo sospechoso antes de que interactúes.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Tarjetas */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="reveal glass-card rounded-2xl p-5 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group cursor-default"
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

          {/* Diagrama */}
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