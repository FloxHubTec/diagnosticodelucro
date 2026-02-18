import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const beforeData = [
  { mes: "Jan", antes: 12, depois: 12 },
  { mes: "Fev", antes: 11, depois: 14 },
  { mes: "Mar", antes: 10, depois: 17 },
  { mes: "Abr", antes: 13, depois: 22 },
  { mes: "Mai", antes: 11, depois: 27 },
  { mes: "Jun", antes: 12, depois: 34 },
];

export function GrowthChart() {
  return (
    <div className="bg-accent rounded-xl border border-border p-6 max-w-lg mx-auto">
      <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-1 text-center">
        Comparativo de Performance
      </p>
      <p className="text-xs text-muted-foreground text-center mb-4">
        Antes × Depois do diagnóstico estratégico
      </p>
      <ResponsiveContainer width="100%" height={160}>
        <AreaChart data={beforeData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="afterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(224,70%,40%)" stopOpacity={0.18} />
              <stop offset="95%" stopColor="hsl(224,70%,40%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="beforeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(215,16%,75%)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="hsl(215,16%,75%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="mes" tick={{ fontSize: 10, fill: "hsl(215,16%,47%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "hsl(215,16%,47%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
          <Tooltip
            contentStyle={{
              background: "hsl(0,0%,100%)",
              border: "1px solid hsl(220,13%,91%)",
              borderRadius: 6,
              fontSize: 11,
            }}
            formatter={(v: number, name: string) => [`${v}%`, name === "antes" ? "Antes" : "Depois"]}
          />
          <Area type="monotone" dataKey="antes" stroke="hsl(215,16%,75%)" strokeWidth={1.5} fill="url(#beforeGrad)" strokeDasharray="4 2" />
          <Area type="monotone" dataKey="depois" stroke="hsl(224,70%,40%)" strokeWidth={2} fill="url(#afterGrad)" dot={{ r: 3, fill: "hsl(224,70%,40%)", strokeWidth: 0 }} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-px bg-muted-foreground opacity-60" style={{ borderTop: "2px dashed hsl(215,16%,75%)" }} />
          <span className="text-xs text-muted-foreground">Antes</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-secondary" />
          <span className="text-xs text-muted-foreground">Depois</span>
        </div>
      </div>
    </div>
  );
}
