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
    <div className="bg-slate-900 rounded-2xl border border-white/10 p-6 shadow-sm w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Painel Estratégico
          </p>
          <p className="text-sm text-white/60 mt-0.5">Operação Comercial — Jan 2025</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-950 border border-white/10 rounded-full px-3 py-1 text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
          Ao vivo
        </span>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {metrics.map((m) => (
          <div key={m.label} className="bg-slate-950 rounded-lg border border-white/10 p-3">
            <p className="text-xs text-white/60 mb-1">{m.label}</p>
            <p className="text-xl font-bold text-white metric-number">{m.value}</p>
            <p
              className={`text-xs font-medium mt-0.5 ${
                m.negative ? "text-orange-400" : "text-secondary"
              }`}
            >
              {m.delta} vs. mês anterior
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-slate-950 rounded-lg border border-white/10 p-4">
        <p className="text-xs text-white/60 mb-3">Tendência de Conversão (%)</p>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={conversionData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(152,60%,42%)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(152,60%,42%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="mes" tick={{ fontSize: 10, fill: "#ffffff" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "#ffffff" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: "hsl(217,33%,10%)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 6,
                fontSize: 11,
                color: "#ffffff",
              }}
              formatter={(v: number) => [`${v}%`, "Conversão"]}
            />
            <Area
              type="monotone"
              dataKey="valor"
              stroke="hsl(152,60%,42%)"
              strokeWidth={2}
              fill="url(#blueGrad)"
              dot={{ r: 3, fill: "hsl(152,60%,42%)", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
