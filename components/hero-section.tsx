'use client'

import { useEffect, useRef } from 'react'
import { Shield, AlertTriangle, CheckCircle, ChevronRight, ArrowRight, Lock, Zap, Compass, GraduationCap, MapPin, Sparkles } from 'lucide-react'

function RiskScoreCard() {
  return (
    <div className="glass-card rounded-2xl p-4 w-64 animate-float" style={{ animationDelay: '0s' }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Compatibilidad</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">Muy alta</span>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-14 h-14 shrink-0">
          <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="22" fill="none" stroke="oklch(0.2 0.02 240)" strokeWidth="4" />
            <circle
              cx="28"
              cy="28"
              r="22"
              fill="none"
              stroke="oklch(0.55 0.22 25)"
              strokeWidth="4"
              strokeDasharray={`${2 * Math.PI * 22 * 0.92} ${2 * Math.PI * 22}`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary">92%</span>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Afinidad estimada</p>
          <p className="text-sm font-semibold text-foreground">Ingeniería</p>
          <p className="text-xs text-muted-foreground mt-0.5">Contexto: Norte</p>
        </div>
      </div>

      <div className="space-y-1.5">
        {[
          { label: 'Intereses', value: 94, color: 'bg-primary' },
          { label: 'Contexto', value: 88, color: 'bg-accent' },
          { label: 'Oportunidades', value: 90, color: 'bg-green-500' },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs mb-0.5">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="text-foreground">{item.value}%</span>
            </div>

            <div className="h-1 rounded-full bg-secondary overflow-hidden">
              <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmailPreviewCard() {
  return (
    <div className="glass-card rounded-2xl p-4 w-72 animate-float" style={{ animationDelay: '1.5s' }}>
      <div className="flex items-start gap-2.5 mb-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
          <Compass className="w-4 h-4 text-primary" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium text-foreground truncate">Ruta recomendada</p>
            <span className="text-xs text-primary shrink-0">Alta afinidad</span>
          </div>

          <p className="text-xs text-muted-foreground">Ingeniería en Software</p>
        </div>
      </div>

      <div className="bg-secondary/50 rounded-lg p-2.5 mb-3">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Tu perfil combina <span className="text-primary font-medium">creatividad, análisis y contexto regional</span>, por eso esta carrera encaja mejor para ti.
        </p>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-primary/10 border border-primary/20">
          <GraduationCap className="w-3 h-3 text-primary" />
          <span className="text-xs text-primary">Universidades cercanas</span>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-accent/10 border border-accent/20">
          <MapPin className="w-3 h-3 text-accent" />
          <span className="text-xs text-accent">Opciones alineadas a tu región</span>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
          <CheckCircle className="w-3 h-3 text-green-400" />
          <span className="text-xs text-green-400">Explicación de IA lista</span>
        </div>
      </div>
    </div>
  )
}

function SentinelDashboardMock() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden w-full max-w-lg">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>

        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-secondary/80 text-xs text-muted-foreground font-mono">
            <Lock className="w-3 h-3" />
            orientate+/explorar
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Orientación inteligente</span>
          </div>

          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 font-mono">EN VIVO</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Perfiles', value: '1,240', color: 'text-primary' },
            { label: 'Rutas', value: '24', color: 'text-accent' },
            { label: 'Universidades', value: '180+', color: 'text-green-400' },
          ].map((s) => (
            <div key={s.label} className="bg-secondary/50 rounded-lg p-2 text-center">
              <p className={`text-base font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="relative bg-secondary/30 rounded-xl overflow-hidden h-24">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent opacity-80 animate-scan" />

          <div className="absolute inset-0 flex items-center justify-center gap-6">
            {['NLP', 'ML', 'SEP', 'XAI'].map((tag, i) => (
              <div key={tag} className="flex flex-col items-center gap-1" style={{ animationDelay: `${i * 0.3}s` }}>
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center neon-border animate-pulse-glow">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          {[
            { item: 'María', label: 'Ingeniería', score: '94%' },
            { item: 'Luis', label: 'Diseño', score: '89%' },
            { item: 'Ana', label: 'Salud', score: '86%' },
          ].map((t) => (
            <div key={t.item} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary/40 hover:bg-secondary/60 transition-colors cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-xs text-muted-foreground font-mono flex-1 truncate">{t.item}</span>
              <span className="text-xs text-primary font-medium">{t.score}</span>
              <span className="text-xs text-muted-foreground hidden sm:block">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
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
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Fondo */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Orbes ambientales */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 orb bg-primary/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-3/4 right-1/4 w-64 h-64 orb bg-accent/10 translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Columna izquierda */}
          <div className="space-y-8">

            <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              Plataforma de orientación vocacional con IA
            </div>

            <div className="reveal space-y-3">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
                Descubre carreras que encajan mejor contigo.
              </h1>
            </div>

            <p className="reveal text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Oriantate+ combina inteligencia artificial, geolocalización y contexto educativo para ayudarte a elegir con más confianza tu futuro académico y profesional.
            </p>

            <div className="reveal flex flex-wrap gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground neon-glow-btn transition-all duration-300 hover:scale-105">
                Explorar opciones
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#solution" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass border border-border/60 text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-105">
                Saber más
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="reveal flex flex-wrap gap-6 pt-2">
              {[
                { value: '92%', label: 'afinidad estimada' },
                { value: '24+', label: 'rutas sugeridas' },
                { value: '4/5', label: 'compatibilidad' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha */}
          <div className="relative flex items-center justify-center">

            {/* Panel */}
            <div className="reveal w-full">
              <SentinelDashboardMock />
            </div>

            {/* Tarjetas flotantes */}
            <div
              className="absolute -left-4 md:-left-12 top-8 reveal"
              style={{ transitionDelay: '0.2s' }}
            >
              <RiskScoreCard />
            </div>

            <div
              className="absolute -right-4 md:-right-8 bottom-8 reveal"
              style={{ transitionDelay: '0.4s' }}
            >
              <EmailPreviewCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}