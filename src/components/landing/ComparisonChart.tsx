import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

const data = [
  { name: "Esforço Comercial", valor: 87 },
  { name: "Resultado Real", valor: 34 },
];

export function ComparisonChart() {
  return (
    <div className="bg-accent rounded-xl border border-border p-6 max-w-sm mx-auto">
      <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4 text-center">
        Diagnóstico de Desempenho
      </p>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} margin={{ top: 0, right: 8, left: -10, bottom: 0 }} barSize={56}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "hsl(215,16%,47%)" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "hsl(215,16%,47%)" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(0,0%,100%)",
              border: "1px solid hsl(220,13%,91%)",
              borderRadius: 6,
              fontSize: 11,
            }}
            formatter={(v: number) => [`${v}%`]}
          />
          <Bar dataKey="valor" radius={[4, 4, 0, 0]}>
            <Cell fill="hsl(224,70%,40%)" />
            <Cell fill="hsl(215,16%,75%)" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-muted-foreground text-center mt-2">
        O esforço não explica o resultado. O processo explica.
      </p>
    </div>
  );
}
