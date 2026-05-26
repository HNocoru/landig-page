'use client'

import { useEffect, useRef } from 'react'
import { FileText, CreditCard, ShieldCheck, BadgeCheck } from 'lucide-react'

const flowSteps = [
  {
    icon: FileText,
    title: 'Factura Recibida',
    desc: 'Se recibe un CFDI que parece legítimo, pero el proveedor solicita un cambio súbito de CLABE.',
  },
  {
    icon: CreditCard,
    title: 'Análisis de CLABE',
    desc: 'Sentinel compara la cuenta nueva con el historial del proveedor y detecta una desviación sospechosa.',
  },
  {
    icon: ShieldCheck,
    title: 'Validación CFDI',
    desc: 'El sistema cruza el XML con el SAT y verifica que RFC, RFC receptor y folio coincidan correctamente.',
  },
  {
    icon: BadgeCheck,
    title: 'Evidencia para CONDUSEF',
    desc: 'Genera un reporte formal que documenta la anomalía para soporte legal y reclamos fiscales.',
  },
]

export function UseCaseSection() {
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
      id="use-case"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="use-case-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-72 h-72 orb bg-accent/6" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary font-mono">
            <BadgeCheck className="w-3 h-3" />
            Evidencia para CONDUSEF
          </div>

          <h2
            id="use-case-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Caso de uso: Factura con CLABE cambiada
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un cambio de cuenta bancaría puede costar millones. Sentinel detecta discrepancias de CLABE, valida CFDI y genera evidencia que respalda tu rechazo o reporte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="reveal glass-card rounded-3xl p-8 border border-border/40 bg-secondary/50 shadow-xl" style={{ transitionDelay: '0.1s' }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-mono text-primary border border-primary/20">
              <BadgeCheck className="w-4 h-4" />
              Genera evidencia formal para CONDUSEF y auditoría interna
            </div>

            <div className="space-y-6">
              {flowSteps.map((step, i) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-primary/10 text-primary p-3">
                    <step.icon className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{step.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 p-8 shadow-2xl" style={{ transitionDelay: '0.2s' }}>
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Flujo real de trabajo</p>
              <h3 className="mt-4 text-2xl font-bold text-foreground">De la alerta al rechazo seguro</h3>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl bg-secondary/70 p-5 border border-border/40">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Escenario</p>
                <p className="text-sm text-foreground leading-relaxed">Un proveedor conocido envía una factura y solicita cambiar la CLABE justo antes de pagar.</p>
              </div>

              <div className="rounded-3xl bg-secondary/70 p-5 border border-border/40">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Detección</p>
                <p className="text-sm text-foreground leading-relaxed">Sentinel compara la nueva CLABE con el historial y valida el CFDI contra el SAT en segundos.</p>
              </div>

              <div className="rounded-3xl bg-secondary/70 p-5 border border-border/40">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Resultado</p>
                <p className="text-sm text-foreground leading-relaxed">Alerta instantánea con explicación, rechazo recomendado y reporte exportable para CONDUSEF.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
