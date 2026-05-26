'use client'

import { useEffect, useRef } from 'react'
import { Download, ClipboardList, ShieldCheck } from 'lucide-react'

const onboardingSteps = [
  {
    icon: Download,
    title: 'Descarga la App',
    desc: 'Instala Sentinel AI y conecta tu correo o sistema de facturación sin necesidad de IT.',
  },
  {
    icon: ClipboardList,
    title: 'Verifica Facturas',
    desc: 'Carga CFDI o recibe alertas automáticas cuando una factura o CLABE cambia.',
  },
  {
    icon: ShieldCheck,
    title: 'Actúa con Evidencia',
    desc: 'Recibe alertas claras y genera reportes listos para CONDUSEF o para tu cliente.',
  },
]

export function OnboardingSection() {
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
      id="onboarding"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="onboarding-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 right-0 w-72 h-72 orb bg-primary/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
            <ShieldCheck className="w-3 h-3" />
            Onboarding en 3 pasos
          </div>

          <h2
            id="onboarding-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Pon en marcha tu protección en minutos
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un flujo sencillo para que despachos contables y PYMES comiencen a detectar fraude sin complicaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {onboardingSteps.map((step, i) => (
            <div
              key={step.title}
              className="reveal glass-card rounded-3xl p-8 border border-border/40 shadow-xl hover:-translate-y-1 transition-transform duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-primary/10 text-primary">
                <step.icon className="w-6 h-6" />
              </div>

              <span className="text-xs text-muted-foreground uppercase tracking-[0.25em] font-mono">Paso {i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
