'use client'

import { useEffect, useRef } from 'react'
import { BookOpen, GraduationCap, Laptop, UserRound, Users } from 'lucide-react'

const users = [
  {
    icon: GraduationCap,
    title: 'Estudiante de secundaria',
    subtitle: 'Busca claridad sobre su futuro',
    desc: 'Quiere entender qué carreras encajan con sus intereses, habilidades y contexto sin sentirse abrumado.',
    risks: ['Confusión vocacional', 'Falta de información', 'Dificultad para comparar opciones'],
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  {
    icon: BookOpen,
    title: 'Padre o madre de familia',
    subtitle: 'Quiere apoyar una decisión importante',
    desc: 'Necesita una orientación confiable para acompañar a su hijo o hija en la elección de su ruta académica.',
    risks: ['Preocupación por el futuro', 'Falta de contexto', 'Decisiones poco informadas'],
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
  {
    icon: Laptop,
    title: 'Joven universitario',
    subtitle: 'Quiere reinventar su camino',
    desc: 'Busca nuevas oportunidades, reorientación o una mejor comprensión de sus fortalezas para elegir con más seguridad.',
    risks: ['Duda profesional', 'Cambio de carrera', 'Falta de orientación personalizada'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    icon: UserRound,
    title: 'Orientador o docente',
    subtitle: 'Acompaña procesos de decisión',
    desc: 'Necesita una herramienta que facilite conversaciones, recomendaciones y seguimiento con mayor contexto.',
    risks: ['Escasez de tiempo', 'Orientación poco personalizada', 'Dificultad para priorizar opciones'],
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
]

export function TargetUsersSection() {
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
      id="users"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="users-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-80 h-80 orb bg-primary/6" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
            <Users className="w-3 h-3" />
            A Quién Protegemos
          </div>

          <h2
            id="users-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Diseñado para{' '}
            <span className="neon-text">cada persona</span>{' '}
            que busca encontrar su camino
          </h2>

          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Oriantate+ acompaña a estudiantes, familias y docentes en un momento clave de la vida, ofreciendo orientación más cercana, contextual y útil.
          </p>
        </div>

        {/* Tarjetas de usuarios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {users.map((user, i) => (
            <div
              key={user.title}
              className="reveal glass-card rounded-2xl p-6 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group cursor-default"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${user.bg} border ${user.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <user.icon className={`w-6 h-6 ${user.color}`} />
              </div>

              <h3 className="text-base font-semibold text-foreground mb-0.5">
                {user.title}
              </h3>

              <p className={`text-xs font-mono mb-3 ${user.color}`}>
                {user.subtitle}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {user.desc}
              </p>

              <div className="space-y-1.5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                  Necesidades clave
                </p>

                {user.risks.map((risk) => (
                  <div
                    key={risk}
                    className={`flex items-center gap-2 text-xs ${user.color}`}
                  >
                    <div className="w-1 h-1 rounded-full bg-current shrink-0" />
                    {risk}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}