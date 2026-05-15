'use client'

import { useEffect, useRef } from 'react'
import { Mail, Cpu, BarChart3, Shield } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Mail,
    title: 'Correo Recibido',
    desc: 'El usuario recibe un correo sospechoso o inusual. Sentinel AI se activa automáticamente cuando el correo se abre en la app.',
    detail: 'Cero fricción — no requiere acción manual',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/40',
    glowColor: 'shadow-primary/20',
  },
  {
    step: '02',
    icon: Cpu,
    title: 'La IA Analiza el Correo',
    desc: 'Los modelos NLP y ML analizan el correo completo: semántica, tono, metadatos del remitente, URLs, encabezados y patrones de manipulación lingüística.',
    detail: 'Análisis multicapa en menos de 200ms',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/40',
    glowColor: 'shadow-accent/20',
  },
  {
    step: '03',
    icon: BarChart3,
    title: 'Se Genera un Puntaje de Riesgo',
    desc: 'Se calcula un puntaje de riesgo de phishing (0–100) con intervalos de confianza. La IA genera una explicación clara de cada hallazgo.',
    detail: '94%+ de precisión en amenazas nuevas',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/40',
    glowColor: 'shadow-yellow-500/20',
  },
  {
    step: '04',
    icon: Shield,
    title: 'El Usuario Recibe Guía',
    desc: 'Antes de que el usuario haga clic en algo, Sentinel entrega recomendaciones accionables: reportar, ignorar o verificar remitente.',
    detail: 'Educa mientras protege',
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
        <Cpu className="w-4 h-4 text-primary" />

        <span className="text-sm font-semibold text-foreground">
          Flujo de Análisis
        </span>

        <span className="ml-auto text-xs text-muted-foreground font-mono">
          &lt;200ms
        </span>
      </div>

      <div className="space-y-2">
        {[
          { label: 'Ingreso del Correo', pct: 100, color: 'bg-primary', time: '0ms' },
          { label: 'Análisis de Encabezado y Dominio', pct: 90, color: 'bg-primary', time: '15ms' },
          { label: 'Modelo Semántico NLP', pct: 75, color: 'bg-accent', time: '65ms' },
          { label: 'Clasificación ML', pct: 60, color: 'bg-accent', time: '120ms' },
          { label: 'Generación Explicativa LLM', pct: 40, color: 'bg-yellow-500', time: '170ms' },
          { label: 'Resultado del Puntaje de Riesgo', pct: 20, color: 'bg-green-500', time: '195ms' },
        ].map((item) => (
          <div key={item.label} className="group">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                {item.label}
              </span>

              <span className="text-muted-foreground font-mono">
                {item.time}
              </span>
            </div>

            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className={`h-full rounded-full ${item.color} opacity-70`}
                style={{ width: `${100 - item.pct + 20}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Latencia total del proceso
        </span>

        <span className="text-sm font-bold text-green-400 font-mono">
          ~195ms
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
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="how-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] orb bg-primary/5 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-accent/30 text-xs text-accent font-mono">
            <Cpu className="w-3 h-3" />
            Cómo Funciona
          </div>

          <h2
            id="how-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Cuatro Pasos hacia{' '}
            <span className="neon-text">Claridad ante Amenazas</span>
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Desde la bandeja de entrada hasta el análisis en milisegundos.
            El flujo de Sentinel funciona transparentemente en segundo plano,
            fortaleciendo cada decisión.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="reveal relative group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Línea conectora */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0.75rem)] w-6 h-0.5 bg-gradient-to-r from-border to-transparent z-10" />
              )}

              <div
                className={`glass-card rounded-2xl p-5 h-full hover:border-border/60 transition-all duration-300 hover:-translate-y-1 shadow-xl ${step.glowColor}`}
              >
                {/* Número */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>

                  <span className={`text-3xl font-black ${step.color} opacity-30 font-mono`}>
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {step.desc}
                </p>

                {/* Badge */}
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

        {/* Visualización */}
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