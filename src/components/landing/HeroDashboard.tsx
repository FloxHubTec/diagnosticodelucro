import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const EMERALD = "hsl(142, 70%, 45%)";
const AMBER = "hsl(38, 92%, 50%)";
const BLUE = "hsl(224, 70%, 40%)";
const SLATE = "hsl(215, 16%, 47%)";

const conversionData = [
  { mes: "Ago", valor: 18 },
  { mes: "Set", valor: 21 },
  { mes: "Out", valor: 19 },
  { mes: "Nov", valor: 24 },
  { mes: "Dez", valor: 22 },
  { mes: "Jan", valor: 28 },
];

const metrics = [
  { label: "Taxa de Conversão", value: "12.4%", delta: "-3.2%", negative: true },
  { label: "Leads Qualificados", value: "284", delta: "+18", negative: false },
  { label: "Propostas Enviadas", value: "67", delta: "+12", negative: false },
  { label: "Vendas Fechadas", value: "8", delta: "-4", negative: true },
];

export function HeroDashboard() {
  return (
    <div className="bg-accent rounded-2xl border border-border p-6 shadow-sm w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Painel Estratégico
          </p>
          <p className="text-sm text-muted-foreground mt-0.5">Operação Comercial — Jan 2025</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-background border border-border rounded-full px-3 py-1 text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
          Ao vivo
        </span>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {metrics.map((m) => (
          <div key={m.label} className="bg-background rounded-lg border border-border p-3">
            <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
            <p className="text-xl font-bold text-foreground metric-number">{m.value}</p>
            <p
              className={`text-xs font-medium mt-0.5`}
              style={{ color: m.negative ? "hsl(0, 84%, 60%)" : EMERALD }}
            >
              {m.delta} vs. mês anterior
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-background rounded-lg border border-border p-4">
        <p className="text-xs text-muted-foreground mb-3">Tendência de Conversão (%)</p>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={conversionData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="convGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={EMERALD} stopOpacity={0.2} />
                <stop offset="95%" stopColor={EMERALD} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="mes" tick={{ fontSize: 10, fill: SLATE }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: SLATE }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: "hsl(210, 77%, 12%)",
                border: "1px solid hsl(210, 40%, 20%)",
                borderRadius: 6,
                fontSize: 11,
                color: "#e2e8f0",
              }}
              formatter={(v: number) => [`${v}%`, "Conversão"]}
            />
            <Area
              type="monotone"
              dataKey="valor"
              stroke={EMERALD}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="url(#convGrad)"
              dot={{ r: 3, fill: EMERALD, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
