import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

export default function ContactoPage() {
  return (
    <>
      <SiteNavbar />
      <div className="pt-24 text-center bg-primary-fixed/40 py-2">
        <p className="text-sm text-on-primary-fixed-variant">
          Pantalla de referencia — contacto institucional.
        </p>
      </div>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-on-background mb-4">
            Hablemos sobre tu institución
          </h1>
          <p className="text-on-surface-variant">
            Cuéntanos sobre tu preparatoria y un miembro del equipo te contacta para
            agendar una demo con tus orientadores.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/10 shadow-lg p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Field label="Nombre" type="text" />
            <Field label="Correo institucional" type="email" />
            <div className="md:col-span-2">
              <Field label="Institución" type="text" />
            </div>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-medium text-on-surface-variant">
                ¿En qué te podemos ayudar?
              </span>
              <textarea
                rows={4}
                className="rounded-xl border border-outline-variant/40 px-4 py-3 focus:border-primary focus:ring-primary bg-transparent"
              />
            </label>
          </div>
          <button className="w-full bg-primary hover:bg-primary-container text-on-primary font-semibold px-8 py-4 rounded-full shadow-lg transition-all">
            Enviar mensaje
          </button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-on-surface-variant">{label}</span>
      <input
        type={type}
        className="rounded-xl border border-outline-variant/40 px-4 py-3 focus:border-primary focus:ring-primary bg-transparent"
      />
    </label>
  );
}
