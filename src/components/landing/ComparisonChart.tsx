import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

const data = [
  { name: "Esforço Comercial", valor: 87 },
  { name: "Resultado Real", valor: 34 },
];

const ELECTRIC = "hsl(217, 91%, 60%)";
const POSITIVE = "hsl(142, 76%, 55%)";
const AXIS_CLR = "hsl(215, 16%, 45%)";

export function ComparisonChart() {
  return (
    <div className="bg-dash-card rounded-xl border border-dash-border p-6 max-w-sm mx-auto">
      <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-center" style={{ color: POSITIVE }}>
        Diagnóstico de Desempenho
      </p>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} margin={{ top: 0, right: 8, left: -10, bottom: 0 }} barSize={56}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: AXIS_CLR }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: AXIS_CLR }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            contentStyle={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 6,
              fontSize: 11,
              color: "#1e293b",
            }}
            formatter={(v: number) => [`${v}%`]}
          />
          <Bar dataKey="valor" radius={[4, 4, 0, 0]}>
            <Cell fill={ELECTRIC} />
            <Cell fill={POSITIVE} style={{ filter: `drop-shadow(0 0 8px ${POSITIVE})` }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: ELECTRIC }} />
          <span className="text-xs text-dash-muted">Esforço</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: POSITIVE }} />
          <span className="text-xs text-dash-muted">Resultado</span>
        </div>
      </div>
      <p className="text-xs text-dash-muted text-center mt-2">
        O esforço não explica o resultado. O processo explica.
      </p>
    </div>
  );
}
