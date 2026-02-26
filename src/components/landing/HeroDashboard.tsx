import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

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
              className={`text-xs font-medium mt-0.5 ${
                m.negative ? "text-destructive" : "text-secondary"
              }`}
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
              <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(224,70%,40%)" stopOpacity={0.15} />
                <stop offset="95%" stopColor="hsl(224,70%,40%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="mes" tick={{ fontSize: 10, fill: "hsl(215,16%,47%)" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "hsl(215,16%,47%)" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: "hsl(0,0%,100%)",
                border: "1px solid hsl(220,13%,91%)",
                borderRadius: 6,
                fontSize: 11,
              }}
              formatter={(v: number) => [`${v}%`, "Conversão"]}
            />
            <Area
              type="monotone"
              dataKey="valor"
              stroke="hsl(224,70%,40%)"
              strokeWidth={2}
              fill="url(#blueGrad)"
              dot={{ r: 3, fill: "hsl(224,70%,40%)", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
