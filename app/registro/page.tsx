import Link from "next/link";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

export default function RegistroPage() {
  return (
    <>
      <SiteNavbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center bg-primary-fixed/40 rounded-2xl py-2 px-4 mb-10">
          <p className="text-sm text-on-primary-fixed-variant">
            Pantalla de referencia — flujo de alta de institución.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-on-background mb-4">
              Registra tu institución
            </h1>
            <p className="text-on-surface-variant">
              3 pasos para que tu preparatoria empiece a usar Oriéntate+.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-14">
            <StepDot n={1} label="Institución" active />
            <div className="w-12 h-px bg-outline-variant" />
            <StepDot n={2} label="Orientador" />
            <div className="w-12 h-px bg-outline-variant" />
            <StepDot n={3} label="Primer grupo" />
          </div>

          <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/10 shadow-lg p-8 md:p-10">
            <h2 className="text-xl font-semibold text-on-background mb-1">
              Datos de la institución
            </h2>
            <p className="text-sm text-on-surface-variant mb-8">
              Esta información aparecerá en los reportes institucionales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Field label="Nombre de la preparatoria" placeholder="Ej. Preparatoria Estatal No. 12" />
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-on-surface-variant">Tipo de institución</span>
                <select className="rounded-xl border border-outline-variant/40 px-4 py-3 focus:border-primary focus:ring-primary bg-transparent">
                  <option>Preparatoria pública</option>
                  <option>Preparatoria privada</option>
                  <option>Bachillerato tecnológico</option>
                  <option>CBTIS / CETIS / COBACH</option>
                </select>
              </label>
              <Field label="Estado" placeholder="Ej. Chiapas" />
              <Field label="Municipio" placeholder="Ej. Villaflores" />
              <div className="md:col-span-2">
                <Field label="Número aproximado de alumnos de último grado" placeholder="Ej. 180" type="number" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">
                Cancelar
              </Link>
              <button className="bg-primary hover:bg-primary-container text-on-primary font-semibold px-8 py-3 rounded-full shadow-lg transition-all flex items-center gap-2">
                Continuar
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-on-surface-variant mt-8">
            ¿Ya tienes cuenta?{" "}
            <Link href="/panel" className="text-primary font-bold hover:underline">
              Entra a tu panel de orientador
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function StepDot({ n, label, active }: { n: number; label: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold ${
          active ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface-variant"
        }`}
      >
        {n}
      </div>
      <span className={`text-sm ${active ? "text-primary font-bold" : "text-on-surface-variant"}`}>{label}</span>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-on-surface-variant">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-xl border border-outline-variant/40 px-4 py-3 focus:border-primary focus:ring-primary bg-transparent"
      />
    </label>
  );
}
