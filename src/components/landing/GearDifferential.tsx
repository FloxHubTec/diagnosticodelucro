import { Settings } from "lucide-react";

const gears = [
  { label: "Diagnóstico", desc: "Mapeamento real da operação" },
  { label: "Estrutura", desc: "Processo corrigido e documentado" },
  { label: "Implantação", desc: "Execução com acompanhamento" },
];

export function GearDifferential() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Central gear */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg mb-4">
          <Settings size={36} className="text-primary-foreground" />
        </div>
        <p className="text-sm font-bold text-foreground tracking-widest uppercase">Execução</p>
      </div>

      {/* Three pillars */}
      <div className="grid grid-cols-3 gap-4">
        {gears.map((g, i) => (
          <div
            key={g.label}
            className="flex flex-col items-center text-center bg-accent border border-border rounded-xl p-5"
          >
            <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center mb-3">
              {i + 1}
            </div>
            <p className="text-sm font-semibold text-foreground mb-1">{g.label}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>

      {/* Connector lines (desktop only visual hint) */}
      <div className="hidden md:flex items-center justify-center gap-2 mt-6">
        <div className="flex-1 h-px bg-border" />
        <p className="text-xs text-muted-foreground px-3">cada peça ativa a próxima</p>
        <div className="flex-1 h-px bg-border" />
      </div>
    </div>
  );
}
