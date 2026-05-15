'use client'

import { useEffect, useRef } from 'react'
import {
  Smartphone,
  AlertTriangle,
  CheckCircle,
  Shield,
  ChevronRight,
  UserCheck
} from 'lucide-react'

function MobileApp() {
  return (
    <div
      className="relative mx-auto w-64 animate-float"
      style={{ animationDelay: '0.5s' }}
    >
      {/* Phone frame */}
      <div className="relative w-full rounded-[2.5rem] border-2 border-border/60 bg-background overflow-hidden shadow-2xl shadow-black/60">

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-background rounded-b-2xl z-20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-border/60" />
        </div>

        {/* Screen */}
        <div className="pt-8 pb-4 px-3 space-y-3 min-h-[520px]">

          {/* Status bar */}
          <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
            <span className="font-mono">9:41</span>

            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-primary" />
              <span>Sentinel</span>
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center gap-2 bg-primary/10 rounded-xl p-2.5 border border-primary/30">
            <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-primary" />
            </div>

            <div>
              <p className="text-xs font-semibold text-foreground">
                Sentinel AI
              </p>

              <p
                className="text-xs text-primary"
                style={{ fontSize: '10px' }}
              >
                Análisis de Amenazas Activo
              </p>
            </div>

            <div className="ml-auto">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          </div>

          {/* Risk gauge */}
          <div className="bg-secondary/50 rounded-xl p-3 border border-border/40">
            <p className="text-xs text-muted-foreground mb-2">
              Puntaje de Riesgo de Phishing
            </p>

            <div className="flex items-center gap-3">

              {/* Gauge */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    fill="none"
                    stroke="oklch(0.2 0.02 240)"
                    strokeWidth="5"
                  />

                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    fill="none"
                    stroke="oklch(0.55 0.22 25)"
                    strokeWidth="5"
                    strokeDasharray={`${2 * Math.PI * 26 * 0.87} ${2 * Math.PI * 26}`}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-red-400">
                    87%
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-red-400">
                  ALTO RIESGO
                </p>

                <p className="text-xs text-muted-foreground">
                  Confianza: 94%
                </p>

                <div className="flex items-center gap-1 mt-1">
                  <AlertTriangle className="w-3 h-3 text-red-400" />

                  <span
                    className="text-red-400"
                    style={{ fontSize: '10px' }}
                  >
                    No interactúes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Warning badges */}
          <div className="space-y-1.5">
            {[
              {
                label: 'Identidad del remitente falsificada',
                color: 'text-red-400',
                bg: 'bg-red-500/10',
                border: 'border-red-500/20'
              },
              {
                label: 'Manipulación de urgencia detectada',
                color: 'text-orange-400',
                bg: 'bg-orange-500/10',
                border: 'border-orange-500/20'
              },
              {
                label: 'Patrón de enlace malicioso',
                color: 'text-orange-400',
                bg: 'bg-orange-500/10',
                border: 'border-orange-500/20'
              },
            ].map((w) => (
              <div
                key={w.label}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg ${w.bg} border ${w.border}`}
              >
                <AlertTriangle
                  className={`w-3 h-3 ${w.color} flex-shrink-0`}
                />

                <span
                  className={`${w.color} leading-tight`}
                  style={{ fontSize: '10px' }}
                >
                  {w.label}
                </span>
              </div>
            ))}
          </div>

          {/* Sender verification */}
          <div className="bg-secondary/40 rounded-xl p-3 border border-border/30">
            <div className="flex items-center gap-1.5 mb-2">
              <UserCheck className="w-3 h-3 text-muted-foreground" />

              <span className="text-xs text-muted-foreground">
                Verificación del Remitente
              </span>
            </div>

            <div className="space-y-1">
              {[
                { label: 'DKIM', pass: false },
                { label: 'SPF', pass: false },
                { label: 'DMARC', pass: false },
              ].map((check) => (
                <div
                  key={check.label}
                  className="flex items-center justify-between"
                >
                  <span
                    className="text-muted-foreground font-mono"
                    style={{ fontSize: '10px' }}
                  >
                    {check.label}
                  </span>

                  <span
                    className={check.pass ? 'text-green-400' : 'text-red-400'}
                    style={{ fontSize: '10px' }}
                  >
                    {check.pass ? 'APROBADO' : 'FALLÓ'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-primary/10 rounded-xl p-3 border border-primary/20">
            <p className="text-xs text-primary font-semibold mb-1">
              Recomendación de IA
            </p>

            <p
              className="text-muted-foreground leading-relaxed"
              style={{ fontSize: '10px' }}
            >
              No hagas clic en ningún enlace. Reporta este correo como phishing
              y bloquea al remitente. Coincide con patrones de robo de credenciales.
            </p>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button className="py-2 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-medium">
              Reportar
            </button>

            <button className="py-2 rounded-xl bg-primary/20 border border-primary/30 text-primary text-xs font-medium">
              Saber Por Qué
            </button>
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 rounded-[2.5rem] neon-border opacity-50 pointer-events-none" />
    </div>
  )
}

const highlights = [
  {
    icon: AlertTriangle,
    title: 'Detección de Amenazas en Tiempo Real',
    desc: 'Las alertas de phishing aparecen instantáneamente al abrir correos sospechosos.',
    color: 'text-red-400',
  },
  {
    icon: Shield,
    title: 'Visualización de Riesgo',
    desc: 'Puntaje visual de riesgo de 0–100 para saber qué tan peligroso es un correo.',
    color: 'text-primary',
  },
  {
    icon: CheckCircle,
    title: 'Resultados de Validación',
    desc: 'Verificaciones DKIM, SPF y DMARC mostradas de forma clara y sencilla.',
    color: 'text-green-400',
  },
  {
    icon: ChevronRight,
    title: 'Panel de Recomendaciones',
    desc: 'Guías contextuales que indican exactamente qué hacer: reportar, bloquear o responder.',
    color: 'text-accent',
  },
]

export function MobileShowcaseSection() {
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
      id="app"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="app-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="absolute top-1/2 right-0 w-96 h-96 orb bg-primary/8 translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
            <Smartphone className="w-3 h-3" />
            Aplicación Móvil
          </div>

          <h2
            id="app-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Protección en tu{' '}
            <span className="neon-text">Bolsillo</span>
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Una experiencia móvil nativa que pone inteligencia anti-phishing
            impulsada por IA directamente en manos de los usuarios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Phone */}
          <div className="reveal flex justify-center lg:justify-end order-2 lg:order-1">
            <MobileApp />
          </div>

          {/* Highlights */}
          <div className="order-1 lg:order-2 space-y-5">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="reveal flex gap-4 group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl glass border border-border/50 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
                  <h.icon className={`w-5 h-5 ${h.color}`} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {h.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}

            <div
              className="reveal pt-4"
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="glass-card rounded-2xl p-4 inline-block">
                <p className="text-xs text-muted-foreground font-mono mb-1">
                  Disponible en
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-secondary flex items-center justify-center">
                      <Smartphone className="w-3.5 h-3.5 text-foreground" />
                    </div>

                    <span className="text-sm font-medium text-foreground">
                      iOS
                    </span>
                  </div>

                  <div className="w-px h-5 bg-border" />

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-secondary flex items-center justify-center">
                      <Smartphone className="w-3.5 h-3.5 text-foreground" />
                    </div>

                    <span className="text-sm font-medium text-foreground">
                      Android
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}