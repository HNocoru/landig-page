import Link from "next/link";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

const casos = [
  {
    icon: "priority_high",
    color: "text-tertiary",
    hover: "hover:bg-tertiary-fixed/40",
    name: "Ana Ramírez",
    note: "Intereses contradictorios — requiere sesión individual",
  },
  {
    icon: "family_restroom",
    color: "text-secondary",
    hover: "hover:bg-secondary-fixed/40",
    name: "Diego Torres",
    note: "Presión familiar detectada por el chatbot (Derecho vs. Psicología)",
  },
  {
    icon: "payments",
    color: "text-primary",
    hover: "hover:bg-primary-fixed/40",
    name: "Karla Núñez",
    note: "Alta compatibilidad con Medicina (91%), necesita información de becas",
  },
];

export default function PanelPage() {
  return (
    <>
      <SiteNavbar />
      <div className="pt-24 text-center bg-primary-fixed/40 py-2">
        <p className="text-sm text-on-primary-fixed-variant">
          Pantalla de referencia — panel del orientador.
        </p>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-on-background">Hola, Lic. Coutiño</h1>
            <p className="text-on-surface-variant">Preparatoria Estatal No. 12 · 3 grupos activos</p>
          </div>
          <button className="bg-primary text-on-primary font-medium px-6 py-3 rounded-full shadow-md flex items-center gap-2 w-max">
            <span className="material-symbols-outlined text-sm">add</span>
            Crear grupo
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <Overview value="96" label="Alumnos registrados" color="text-primary" />
          <Overview value="27" label="Alta indecisión" color="text-tertiary" />
          <Overview value="14" label="Piden beca" color="text-secondary" />
          <Overview value="81%" label="Avance de actividades" color="text-on-background" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-surface-container-lowest rounded-3xl border border-outline-variant/10 p-6">
            <h2 className="text-xl font-semibold text-on-background mb-4">Mis grupos</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-primary-fixed/50 border border-primary/20">
                <p className="font-bold text-on-surface">6° Semestre A</p>
                <p className="text-sm text-on-surface-variant">32 alumnos · 12 alertas</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low">
                <p className="font-bold text-on-surface">6° Semestre B</p>
                <p className="text-sm text-on-surface-variant">30 alumnos · 9 alertas</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low">
                <p className="font-bold text-on-surface">Área Económico-Administrativa</p>
                <p className="text-sm text-on-surface-variant">34 alumnos · 6 alertas</p>
              </div>
            </div>
            <button className="mt-4 w-full text-primary font-medium py-2 rounded-full hover:bg-surface-container-low transition-colors">
              Ver todos los grupos
            </button>
          </div>

          <div className="lg:col-span-2 bg-surface-container-lowest rounded-3xl border border-outline-variant/10 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-on-background">
                Casos prioritarios — 6° Semestre A
              </h2>
              <Link href="/expediente/1" className="text-sm text-primary hover:underline">
                Ver expediente completo →
              </Link>
            </div>
            <div className="space-y-3">
              {casos.map((c) => (
                <Link
                  key={c.name}
                  href="/expediente/1"
                  className={`flex items-center gap-4 p-4 rounded-xl bg-surface-container-low ${c.hover} transition-colors`}
                >
                  <span className={`material-symbols-outlined ${c.color}`}>{c.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-on-surface">{c.name}</p>
                    <p className="text-sm text-on-surface-variant">{c.note}</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function Overview({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-sm text-on-surface-variant">{label}</p>
    </div>
  );
}
