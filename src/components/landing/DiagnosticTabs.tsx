import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const gapData = [
  { name: "Jan", real: 120, potencial: 180 },
  { name: "Fev", real: 135, potencial: 195 },
  { name: "Mar", real: 110, potencial: 200 },
  { name: "Abr", real: 145, potencial: 210 },
  { name: "Mai", real: 130, potencial: 220 },
  { name: "Jun", real: 150, potencial: 240 },
];

const recoveryData = [
  { name: "Sem 1", leads: 12 },
  { name: "Sem 2", leads: 28 },
  { name: "Sem 3", leads: 45 },
  { name: "Sem 4", leads: 64 },
  { name: "Sem 5", leads: 78 },
  { name: "Sem 6", leads: 95 },
  { name: "Sem 7", leads: 110 },
  { name: "Sem 8", leads: 132 },
];

const bottleneckData = [
  { name: "Tempo de resposta", valor: 85 },
  { name: "Follow-up ausente", valor: 72 },
  { name: "Proposta sem retorno", valor: 65 },
  { name: "Qualificação fraca", valor: 58 },
  { name: "Handoff vendedor", valor: 42 },
];

const SECONDARY_COLOR = "hsl(224, 70%, 40%)";
const MUTED_COLOR = "hsl(215, 16%, 67%)";

export function DiagnosticTabs() {
  return (
    <Tabs defaultValue="gap" className="w-full max-w-4xl mx-auto">
      <TabsList className="w-full grid grid-cols-3 bg-primary/10 border border-border h-12 rounded-lg">
        <TabsTrigger
          value="gap"
          className="text-xs sm:text-sm font-semibold data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md"
        >
          Gap Analysis
        </TabsTrigger>
        <TabsTrigger
          value="recovery"
          className="text-xs sm:text-sm font-semibold data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md"
        >
          Recuperação
        </TabsTrigger>
        <TabsTrigger
          value="bottlenecks"
          className="text-xs sm:text-sm font-semibold data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md"
        >
          Gargalos
        </TabsTrigger>
      </TabsList>

      {/* Gap Analysis */}
      <TabsContent value="gap" className="mt-6">
        <div className="bg-accent border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-foreground mb-1">Faturamento Real vs Potencial com Raio X</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Comparação mensal entre o resultado atual e o potencial após correção dos processos comerciais.
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gapData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: MUTED_COLOR }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: MUTED_COLOR }} axisLine={false} tickLine={false} unit="k" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0, 0%, 100%)",
                    border: "1px solid hsl(220, 13%, 91%)",
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                  formatter={(value: number, name: string) => [
                    `R$ ${value}k`,
                    name === "real" ? "Faturamento Real" : "Potencial com Raio X",
                  ]}
                />
                <Bar dataKey="real" fill={MUTED_COLOR} radius={[4, 4, 0, 0]} name="real" />
                <Bar dataKey="potencial" fill={SECONDARY_COLOR} radius={[4, 4, 0, 0]} name="potencial" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-6 mt-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: MUTED_COLOR }} />
              <span className="text-xs text-muted-foreground">Faturamento Real</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: SECONDARY_COLOR }} />
              <span className="text-xs text-muted-foreground">Potencial com Raio X</span>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Recuperação de Vendas */}
      <TabsContent value="recovery" className="mt-6">
        <div className="bg-accent border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-foreground mb-1">Leads Recuperados Após Correção</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Curva acumulada de leads recuperados nas primeiras 8 semanas de implementação.
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={recoveryData}>
                <defs>
                  <linearGradient id="recoveryGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={SECONDARY_COLOR} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={SECONDARY_COLOR} stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: MUTED_COLOR }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: MUTED_COLOR }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0, 0%, 100%)",
                    border: "1px solid hsl(220, 13%, 91%)",
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                  formatter={(value: number) => [`${value} leads`, "Recuperados"]}
                />
                <Area
                  type="monotone"
                  dataKey="leads"
                  stroke={SECONDARY_COLOR}
                  strokeWidth={2}
                  fill="url(#recoveryGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </TabsContent>

      {/* Gargalos */}
      <TabsContent value="bottlenecks" className="mt-6">
        <div className="bg-accent border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold text-foreground mb-1">Principais Gargalos de Receita</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Onde a receita está vazando: pontos críticos identificados no diagnóstico.
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bottleneckData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 12, fill: MUTED_COLOR }} axisLine={false} tickLine={false} domain={[0, 100]} unit="%" />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 11, fill: MUTED_COLOR }}
                  axisLine={false}
                  tickLine={false}
                  width={130}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0, 0%, 100%)",
                    border: "1px solid hsl(220, 13%, 91%)",
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                  formatter={(value: number) => [`${value}%`, "Impacto na receita"]}
                />
                <Bar dataKey="valor" radius={[0, 4, 4, 0]}>
                  {bottleneckData.map((_, index) => (
                    <Cell key={index} fill={index < 2 ? SECONDARY_COLOR : MUTED_COLOR} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
