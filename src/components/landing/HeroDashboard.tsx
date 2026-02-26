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

const POSITIVE = "hsl(142, 76%, 55%)";
const NEGATIVE = "hsl(32, 95%, 55%)";
const ELECTRIC = "hsl(217, 91%, 60%)";
const AXIS_CLR = "hsl(215, 16%, 45%)";

export function HeroDashboard() {
  return (
    <div className="bg-dash-card rounded-2xl border border-dash-border p-6 shadow-sm w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: POSITIVE }}>
            Painel Estratégico
          </p>
          <p className="text-sm text-dash-muted mt-0.5">Operação Comercial — Jan 2025</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary border border-dash-border rounded-full px-3 py-1 text-dash-muted">
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: POSITIVE }} />
          Ao vivo
        </span>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {metrics.map((m) => (
          <div key={m.label} className="bg-primary rounded-lg border border-dash-border p-3">
            <p className="text-xs text-dash-muted mb-1">{m.label}</p>
            <p className="text-xl font-bold text-white metric-number">{m.value}</p>
            <p
              className="text-xs font-medium mt-0.5"
              style={{ color: m.negative ? NEGATIVE : POSITIVE }}
            >
              {m.delta} vs. mês anterior
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-primary rounded-lg border border-dash-border p-4">
        <p className="text-xs text-dash-muted mb-3">Tendência de Conversão (%)</p>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={conversionData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="heroGreenGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={POSITIVE} stopOpacity={0.2} />
                <stop offset="95%" stopColor={POSITIVE} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="mes" tick={{ fontSize: 10, fill: AXIS_CLR }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: AXIS_CLR }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 6,
                fontSize: 11,
                color: "#1e293b",
              }}
              formatter={(v: number) => [`${v}%`, "Conversão"]}
            />
            <Area
              type="monotone"
              dataKey="valor"
              stroke={POSITIVE}
              strokeWidth={2}
              fill="url(#heroGreenGrad)"
              dot={{ r: 3, fill: POSITIVE, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
