import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

const data = [
  { name: "Esforço Comercial", valor: 87 },
  { name: "Resultado Real", valor: 34 },
];

export function ComparisonChart() {
  return (
    <div className="bg-slate-900 rounded-xl border border-white/10 p-6 max-w-sm mx-auto">
      <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4 text-center">
        Diagnóstico de Desempenho
      </p>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} margin={{ top: 0, right: 8, left: -10, bottom: 0 }} barSize={56}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#ffffff" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#ffffff" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(217,33%,10%)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 6,
              fontSize: 11,
              color: "#ffffff",
            }}
            formatter={(v: number) => [`${v}%`]}
          />
          <Bar dataKey="valor" radius={[4, 4, 0, 0]}>
            <Cell fill="rgba(255,255,255,0.5)" />
            <Cell fill="hsl(152,60%,42%)" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-white/60 text-center mt-2">
        O esforço não explica o resultado. O processo explica.
      </p>
    </div>
  );
}
