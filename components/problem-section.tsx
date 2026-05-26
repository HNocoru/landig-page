'use client'

import { useEffect, useRef } from 'react'
import { AlertTriangle, Brain, TrendingUp, ShieldOff, Bot } from 'lucide-react'

const threats = [
  {
    icon: Bot,
    title: 'CFDI Suplantado',
    desc: 'Facturas y XML aparentan ser válidos, pero no coinciden con el SAT ni con el proveedor registrado.',
    stat: 'CFDI',
    statLabel: 'documentos fraudulentos detectados',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
  },
  {
    icon: Brain,
    title: 'RFC Suplantado',
    desc: 'Remitentes imitan RFC de proveedores reales para engañar al despacho contable y legitimar pagos falsos.',
    stat: '79%',
    statLabel: 'envíos con RFC sospechoso',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
  },
  {
    icon: TrendingUp,
    title: 'Fraude de Órdenes de Pago',
    desc: 'Cambios de CLABE y órdenes apócrifas buscan desviar transferencias antes de que el contador confirme el pago.',
    stat: 'CLABE',
    statLabel: 'cambios de cuenta detectados',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    icon: ShieldOff,
    title: 'Validación Contable Incompleta',
    desc: 'Los controles tradicionales no cruzan CFDI, CLABE y evidencia fiscal en tiempo real para despachos y PYMES.',
    stat: '78%',
    statLabel: 'de pagos pasan sin revisión completa',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
]

function FakeEmailCard() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
      {/* Encabezado del correo */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
        <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
        <span className="text-xs text-red-400 font-mono">AMENAZA DETECTADA</span>

        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          <span className="text-xs text-muted-foreground">Muestra en Vivo</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">De:</span>

            <span className="text-xs font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
              security@app1e-id.com
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Asunto:</span>

            <span className="text-xs text-foreground">
              Tu Apple ID ha sido bloqueado
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Recibido:</span>

            <span className="text-xs text-muted-foreground">
              Hace 2 minutos
            </span>
          </div>
        </div>

        <div className="bg-secondary/40 rounded-xl p-3 text-sm text-muted-foreground leading-relaxed border border-border/30">
          <p>Estimado Cliente,</p>

          <p className="mt-1">
            Hemos detectado{' '}
            <span className="text-orange-400 font-medium">
              actividad inusual
            </span>{' '}
            en tu cuenta de Apple. Tu acceso ha sido{' '}
            <span className="text-red-400 font-medium">
              restringido temporalmente
            </span>.
          </p>

          <p className="mt-1">
            Por favor verifica tu identidad{' '}
            <span className="text-red-400 font-medium underline cursor-pointer">
              inmediatamente
            </span>{' '}
            para restaurar el acceso completo. Si no verificas dentro de{' '}
            <span className="text-orange-400 font-medium">24 horas</span>,
            tu cuenta será suspendida permanentemente.
          </p>
        </div>

        {/* Indicadores IA */}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
            Indicadores de Detección IA
          </p>

          {[
            {
              label: 'Dominio homoglífico (app1e ≠ apple)',
              level: 'CRÍTICO',
              color: 'text-red-400',
              bg: 'bg-red-500/10',
              border: 'border-red-500/20',
            },
            {
              label: 'Inyección artificial de urgencia',
              level: 'ALTO',
              color: 'text-orange-400',
              bg: 'bg-orange-500/10',
              border: 'border-orange-500/20',
            },
            {
              label: 'Lenguaje coercitivo de amenaza',
              level: 'ALTO',
              color: 'text-orange-400',
              bg: 'bg-orange-500/10',
              border: 'border-orange-500/20',
            },
            {
              label: 'Falta alineación DKIM/SPF',
              level: 'MEDIO',
              color: 'text-yellow-400',
              bg: 'bg-yellow-500/10',
              border: 'border-yellow-500/20',
            },
          ].map((marker) => (
            <div
              key={marker.label}
              className={`flex items-center justify-between px-3 py-2 rounded-lg ${marker.bg} border ${marker.border}`}
            >
              <span className="text-xs text-foreground/80">
                {marker.label}
              </span>

              <span className={`text-xs font-mono font-bold ${marker.color}`}>
                {marker.level}
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
      id="problem"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="problem-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 orb bg-red-500/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-red-500/30 text-xs text-red-400 font-mono">
            <AlertTriangle className="w-3 h-3" />
            Panorama de Amenazas
          </div>

          <h2
            id="problem-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Tu proveedor de siempre te pide cambiar la CLABE.
            <span className="block text-red-400">¿Es real?</span>
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            CFDI suplantado, RFC suplantado y fraude de órdenes de pago están atacando a despachos contables y PYMES en México.
          </p>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            En 2024, más de 6 millones de víctimas de fraude digital en México (Scitum 2024).
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Tarjetas */}
          <div className="grid sm:grid-cols-2 gap-4">
            {threats.map((threat, i) => (
              <div
                key={threat.title}
                className="reveal glass-card rounded-2xl p-5 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group cursor-default"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${threat.bg} border ${threat.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <threat.icon className={`w-5 h-5 ${threat.color}`} />
                </div>

                <div className="mb-2">
                  <span className={`text-2xl font-bold ${threat.color}`}>
                    {threat.stat}
                  </span>

                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {threat.statLabel}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {threat.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {threat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Visualización del correo */}
          <div
            className="reveal"
            style={{ transitionDelay: '0.3s' }}
          >
            <FakeEmailCard />
          </div>
        </div>
      </div>
    </section>
  )
}