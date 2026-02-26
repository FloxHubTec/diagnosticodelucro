import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const beforeData = [
  { mes: "Jan", antes: 12, depois: 12 },
  { mes: "Fev", antes: 11, depois: 14 },
  { mes: "Mar", antes: 10, depois: 17 },
  { mes: "Abr", antes: 13, depois: 22 },
  { mes: "Mai", antes: 11, depois: 27 },
  { mes: "Jun", antes: 12, depois: 34 },
];

const POSITIVE = "hsl(142, 76%, 55%)";
const MUTED_LINE = "hsl(215, 16%, 65%)";
const AXIS_CLR = "hsl(215, 16%, 45%)";

export function GrowthChart() {
  return (
    <div className="bg-dash-card rounded-xl border border-dash-border p-6 max-w-lg mx-auto">
      <p className="text-xs font-semibold tracking-widest uppercase mb-1 text-center" style={{ color: POSITIVE }}>
        Comparativo de Performance
      </p>
      <p className="text-xs text-dash-muted text-center mb-4">
        Antes × Depois do diagnóstico estratégico
      </p>
      <ResponsiveContainer width="100%" height={160}>
        <AreaChart data={beforeData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="afterGradNeon" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={POSITIVE} stopOpacity={0.25} />
              <stop offset="95%" stopColor={POSITIVE} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="mes" tick={{ fontSize: 10, fill: AXIS_CLR }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: AXIS_CLR }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
          <Tooltip
            contentStyle={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 6,
              fontSize: 11,
              color: "#1e293b",
            }}
            formatter={(v: number, name: string) => [`${v}%`, name === "antes" ? "Antes" : "Depois"]}
          />
          <Area type="monotone" dataKey="antes" stroke={MUTED_LINE} strokeWidth={1.5} fill="none" strokeDasharray="6 3" dot={false} />
          <Area type="monotone" dataKey="depois" stroke={POSITIVE} strokeWidth={3} fill="url(#afterGradNeon)" dot={{ r: 3, fill: POSITIVE, strokeWidth: 0 }} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-px" style={{ borderTop: `2px dashed ${MUTED_LINE}` }} />
          <span className="text-xs text-dash-muted">Antes</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-0.5" style={{ backgroundColor: POSITIVE }} />
          <span className="text-xs text-dash-muted">Depois</span>
        </div>
      </div>
    </div>
  );
}
