import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

export default function ExpedientePage({ params }: { params: { id: string } }) {
  return (
    <>
      <SiteNavbar />
      <div className="pt-24 text-center bg-primary-fixed/40 py-2">
        <p className="text-sm text-on-primary-fixed-variant">
          Pantalla de referencia — expediente vocacional (alumno #{params.id}).
        </p>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center text-xl font-bold">
              AR
            </div>
            <div>
              <h1 className="text-2xl font-bold text-on-background">Ana Ramírez</h1>
              <p className="text-on-surface-variant">6° Semestre A · Preparatoria Estatal No. 12</p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-medium w-max">
            Alta prioridad
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
            <p className="text-2xl font-bold text-primary">94%</p>
            <p className="text-sm text-on-surface-variant">Compatibilidad — Psicología</p>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
            <p className="text-2xl font-bold text-secondary">Analítico-Creativo</p>
            <p className="text-sm text-on-surface-variant">Perfil vocacional</p>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
            <p className="text-2xl font-bold text-tertiary">Alta</p>
            <p className="text-sm text-on-surface-variant">Indecisión detectada</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/10 p-8 mb-6">
          <h2 className="text-xl font-semibold text-on-background mb-4">
            Nota del chatbot
          </h2>
          <p className="text-on-surface-variant">
            El alumno mostró intereses contradictorios entre Psicología y Derecho a lo
            largo de la conversación, sin una preferencia clara ni económica ni
            familiar. Se recomienda sesión individual con el orientador.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/10 p-8">
          <h2 className="text-xl font-semibold text-on-background mb-4">
            Universidades sugeridas
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              UNICACH — Licenciatura en Psicología
            </li>
            <li className="flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              UNACH — Licenciatura en Derecho
            </li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}