import { ChevronRight, Clock, Filter, FileText, RefreshCw, XCircle } from "lucide-react";

const stages = [
  {
    label: "Atendimento",
    icon: Clock,
    leak: "Atraso e perda de timing",
  },
  {
    label: "Qualificação",
    icon: Filter,
    leak: "Lead errado consumindo tempo do time",
  },
  {
    label: "Proposta",
    icon: FileText,
    leak: "Demora e falta de padrão",
  },
  {
    label: "Follow-up",
    icon: RefreshCw,
    leak: "Ausência de rotina e cadência",
  },
  {
    label: "Fechamento",
    icon: XCircle,
    leak: "Objeção mal tratada / próxima ação indefinida",
  },
];

export function LossFlowchart() {
  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden lg:flex items-start gap-0">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <div key={stage.label} className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1 px-2">
                {/* Stage box */}
                <div className="w-full bg-background border border-border rounded-xl p-4 mb-3 text-center relative shadow-sm">
                  <div className="w-9 h-9 mx-auto mb-3 flex items-center justify-center rounded-lg bg-accent border border-border">
                    <Icon size={16} className="text-secondary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{stage.label}</p>
                </div>
                {/* Leak indicator — styled like CTA */}
                <div className="w-full bg-secondary rounded-lg px-3 py-2 text-center">
                  <p className="text-xs text-secondary-foreground leading-snug font-medium">{stage.leak}</p>
                </div>
              </div>
              {i < stages.length - 1 && (
                <div className="flex-shrink-0 mt-8 w-6 flex items-center justify-center">
                  <ChevronRight size={18} className="text-secondary" strokeWidth={3} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="lg:hidden space-y-3">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <div key={stage.label} className="flex gap-3 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-accent border border-border">
                  <Icon size={16} className="text-secondary" />
                </div>
                {i < stages.length - 1 && <div className="w-px h-6 bg-border mt-2" />}
              </div>
              <div className="flex-1 pb-1">
                <p className="text-sm font-semibold text-foreground mb-1">{stage.label}</p>
                <p className="text-xs text-secondary-foreground bg-secondary rounded-md px-3 py-1.5 font-medium">
                  {stage.leak}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
