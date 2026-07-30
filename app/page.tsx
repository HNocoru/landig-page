import Link from "next/link";
import Image from "next/image";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16 px-6 min-h-[80vh] flex flex-col justify-center bg-gradient-to-b from-primary-fixed/30 via-background to-background">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-primary text-sm font-medium w-max border border-primary/20 shadow-sm">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                Apoyo a la orientación vocacional con IA
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-on-background">
                Orientación vocacional,{" "}
                <span className="text-primary">acompañada de principio a fin.</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg">
                Oriéntate+ no es un catálogo de carreras ni un chatbot aislado. Es la
                plataforma que le da al orientador de tu preparatoria las herramientas
                para diagnosticar, dar seguimiento y acompañar a cada alumno de último
                grado en su decisión de carrera.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/registro" className="bg-primary hover:bg-primary-container text-on-primary font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex justify-center items-center gap-2">
                  Registrar mi institución
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>

                <a
                  href="#how-it-works"
                  className="bg-surface-container-lowest/80 backdrop-blur-sm hover:bg-surface-container-lowest text-primary font-semibold px-8 py-4 rounded-full border border-primary/10 hover:border-primary/30 transition-all flex justify-center items-center gap-2"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] lg:aspect-square flex justify-center items-center">
              <Image
                src="/img1.webp"
                alt="Oriéntate+ interfaz de la app"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              <div className="absolute -left-4 top-1/4 bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-4 border border-white/60">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Compatibilidad</p>
                  <p className="text-lg text-primary font-bold">94%</p>
                </div>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-4 border border-white/60">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Perfil</p>
                  <p className="text-sm text-on-surface-variant">Analítico-Creativo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-32">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <p className="font-bold text-on-background">10,000+</p>
                <p className="text-sm text-on-surface-variant">Estudiantes guiados</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <div>
                <p className="font-bold text-on-background">50+</p>
                <p className="text-sm text-on-surface-variant">Universidades aliadas</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined">star</span>
              </div>
              <div>
                <p className="font-bold text-on-background">98%</p>
                <p className="text-sm text-on-surface-variant">Satisfacción</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-32 bg-surface-bright px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-6">
                Un ecosistema, no una app aislada
              </h2>
              <p className="text-lg text-on-surface-variant">
                Juegos, chatbot, procesamiento de lenguaje natural y Machine Learning
                trabajan juntos para construir el perfil vocacional del alumno.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon="smart_toy"
                iconBg="bg-primary-fixed text-primary"
                title="Chatbot vocacional + NLP"
                description="El alumno conversa en lenguaje natural sobre sus dudas, miedos e intereses. El motor de NLP interpreta esas respuestas y las convierte en variables de su perfil."
                linkColor="text-primary"
                imageSrc="/img_chatbot.webp"
                imageAlt="Chatbot vocacional con IA"
              />
              <FeatureCard
                icon="sports_esports"
                iconBg="bg-tertiary-container text-on-tertiary"
                title="Minijuegos vocacionales"
                description="Descubre tus pasiones mientras juegas. Retos interactivos diseñados para identificar habilidades ocultas y áreas de interés."
                linkColor="text-tertiary"
                imageSrc="/img_minigames.webp"
                imageAlt="Minijuegos vocacionales"
              />
              <FeatureCard
                icon="insights"
                iconBg="bg-primary-fixed text-primary"
                title="Motor de compatibilidad (ML)"
                description="Cruza los datos de los juegos, el chatbot y el contexto del alumno para calcular un puntaje de compatibilidad por carrera."
                linkColor="text-primary"
              />
              <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 shadow-lg flex flex-col overflow-hidden">
                <div className="mb-8 w-full aspect-video rounded-2xl overflow-hidden relative bg-secondary-container/20">
                  <Image src="/img_university.webp" alt="Explorador de universidades" fill className="object-cover" />
                </div>
                <div className="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">account_balance</span>
                </div>
                <h3 className="text-xl font-semibold text-on-background mb-3">
                  Universidades y alumnis
                </h3>
                <p className="text-on-surface-variant mb-4">
                  Egresados comparten su carrera, universidad y consejos reales para una
                  decisión más honesta.
                </p>
                <Link
                  href="/expediente/1"
                  className="mt-auto pt-4 flex items-center gap-2 text-secondary font-medium"
                >
                  Conocer alumnis
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* For orientadores */}
        <section id="orientadores" className="py-32 bg-surface-container-low px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-on-background">
                Un panel hecho para el orientador
              </h2>
              <p className="text-on-surface-variant text-lg">
                Deja de adivinar quién necesita ayuda. Prioriza casos, detecta presión
                familiar y da seguimiento con datos reales del chatbot y los juegos.
              </p>
              <ul className="space-y-3">
                {[
                  "Casos prioritarios ordenados automáticamente",
                  "Alertas de indecisión y presión familiar",
                  "Seguimiento por grupo y por alumno",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/panel"
                className="bg-primary hover:bg-primary-container text-on-primary font-semibold px-8 py-4 rounded-full shadow-lg transition-all flex justify-center items-center gap-2 w-max"
              >
                Ver el panel del orientador
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/10 shadow-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="font-bold text-on-background">Grupo: 6° Semestre A</p>
                <span className="text-sm text-on-surface-variant">32 alumnos</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-primary-fixed rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-primary">28</p>
                  <p className="text-xs text-on-surface-variant">Completaron</p>
                </div>
                <div className="bg-tertiary-fixed rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-tertiary">12</p>
                  <p className="text-xs text-on-surface-variant">Alta indecisión</p>
                </div>
                <div className="bg-secondary-fixed rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-secondary">5</p>
                  <p className="text-xs text-on-surface-variant">Piden beca</p>
                </div>
              </div>
              <div className="space-y-3">
                <MiniCase icon="priority_high" color="text-tertiary" name="Ana Ramírez" note="Intereses contradictorios" />
                <MiniCase icon="family_restroom" color="text-secondary" name="Diego Torres" note="Presión familiar detectada" />
                <MiniCase icon="payments" color="text-primary" name="Karla Núñez" note="Alta compatibilidad, necesita beca" />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="how-it-works" className="py-32 bg-surface-bright px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-4">
                Un flujo completo, no un test aislado
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Desde que la preparatoria se registra hasta que el orientador da
                seguimiento, cada paso alimenta el siguiente.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Step n={1} bg="bg-primary-fixed text-primary" title="Institución y grupo" desc="El orientador registra su preparatoria y crea el grupo." />
              <Step n={2} bg="bg-secondary-fixed text-secondary" title="Juegos y chatbot" desc="El alumno responde juegos vocacionales y conversa con el chatbot." />
              <Step n={3} bg="bg-tertiary-fixed text-tertiary" title="NLP + ML" desc="El sistema interpreta el texto y calcula compatibilidad." />
              <Step n={4} bg="bg-primary-fixed text-primary" title="Seguimiento" desc="El orientador revisa el expediente y prioriza." />
            </div>
          </div>
        </section>

        {/* Metrics + testimonial */}
        <section className="py-32 bg-inverse-surface text-inverse-on-surface px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
              Impacto real en el futuro de los jóvenes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24">
              <Metric value="1M+" label="Recomendaciones generadas" color="text-primary-fixed-dim" />
              <Metric value="500+" label="Escuelas registradas" color="text-tertiary-fixed-dim" />
              <Metric value="94%" label="Precisión de compatibilidad" color="text-secondary-fixed-dim" />
            </div>
            <div className="max-w-4xl mx-auto bg-surface-container-lowest/10 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/10">
              <p className="text-xl md:text-2xl text-center mb-10 leading-relaxed">
                &ldquo;Oriéntate+ me ayudó a descubrir que mi pasión por el arte y la
                tecnología se podían combinar en el Diseño de Experiencia de Usuario.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-fixed/30 flex items-center justify-center">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <p className="font-bold">Sofía M.</p>
                  <p className="text-sm opacity-80">Estudiante de Diseño Interactivo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-primary text-on-primary rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl tracking-tight">
                Lleva Oriéntate+ a tu preparatoria
              </h2>
              <p className="text-primary-fixed text-lg mb-10 max-w-xl">
                Da a tus orientadores un panel completo, y a tus alumnos una forma más
                honesta de descubrir su carrera.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/registro"
                  className="bg-surface-container-lowest text-primary font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
                >
                  Registrar mi institución
                </Link>
                <Link
                  href="/contacto"
                  className="border border-primary-fixed/40 text-on-primary font-semibold px-10 py-4 rounded-full hover:bg-primary-container transition-all"
                >
                  Hablar con el equipo
                </Link>
              </div>
              <p className="mt-6 text-primary-fixed-dim text-sm">
                Piloto gratuito para tu primera generación. Sin costo de instalación.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function FeatureCard({
  icon,
  iconBg,
  title,
  description,
  linkColor,
  imageSrc,
  imageAlt,
}: {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  linkColor: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
      {imageSrc && (
        <div className="mb-8 w-full aspect-video rounded-2xl overflow-hidden relative bg-primary-fixed/20">
          <Image src={imageSrc} alt={imageAlt ?? title} fill className="object-cover" />
        </div>
      )}
      <div className={`w-14 h-14 rounded-full ${iconBg} flex items-center justify-center mb-6`}>
        <span className="material-symbols-outlined text-[28px]">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-on-background mb-3">{title}</h3>
      <p className="text-on-surface-variant mb-4">{description}</p>
      <div className={`mt-auto pt-4 flex items-center gap-2 ${linkColor} font-medium`}>
        <span>Conocer más</span>
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
    </div>
  );
}

function MiniCase({ icon, color, name, note }: { icon: string; color: string; name: string; note: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low">
      <span className={`material-symbols-outlined ${color}`}>{icon}</span>
      <div className="flex-1">
        <p className="text-sm font-bold text-on-surface">{name}</p>
        <p className="text-xs text-on-surface-variant">{note}</p>
      </div>
    </div>
  );
}

function Step({ n, bg, title, desc }: { n: number; bg: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center font-bold`}>{n}</div>
      <p className="font-bold text-on-background">{title}</p>
      <p className="text-sm text-on-surface-variant">{desc}</p>
    </div>
  );
}

function Metric({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center">
      <p className={`text-5xl font-bold mb-2 ${color}`}>{value}</p>
      <p className="text-lg">{label}</p>
    </div>
  );
}