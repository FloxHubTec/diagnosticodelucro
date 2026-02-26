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

// ── Data ────────────────────────────────────────────────────────────────────

const gapData = [
  { name: "Jan", atual: 120, otimizado: 180 },
  { name: "Fev", atual: 135, otimizado: 195 },
  { name: "Mar", atual: 110, otimizado: 200 },
  { name: "Abr", atual: 145, otimizado: 210 },
  { name: "Mai", atual: 130, otimizado: 220 },
  { name: "Jun", atual: 150, otimizado: 240 },
];

const funnelData = [
  { name: "Leads captados", valor: 1000 },
  { name: "Atendimento inicial", valor: 680 },
  { name: "Qualificação", valor: 410 },
  { name: "Follow-up", valor: 220 },
  { name: "Proposta enviada", valor: 130 },
  { name: "Fechamento", valor: 65 },
];

const recoveryData = [
  { name: "Sem 1", taxa: 12 },
  { name: "Sem 2", taxa: 18 },
  { name: "Sem 3", taxa: 27 },
  { name: "Sem 4", taxa: 38 },
  { name: "Sem 5", taxa: 48 },
  { name: "Sem 6", taxa: 56 },
  { name: "Sem 7", taxa: 62 },
  { name: "Sem 8", taxa: 68 },
];

// ── Semantic Colors ──────────────────────────────────────────────────────────

const EMERALD = "hsl(142, 70%, 45%)";    // Sucesso / Ganho
const AMBER = "hsl(38, 92%, 50%)";       // Alerta / Perda
const BLUE = "hsl(224, 70%, 40%)";       // Esforço / Processo
const MUTED = "hsl(215, 16%, 47%)";      // Neutro
const CARD_BG = "hsl(210, 77%, 12%)";
const BORDER = "hsl(210, 40%, 20%)";
const GRID = "hsl(210, 40%, 18%)";
const AXIS = "hsl(215, 16%, 45%)";

// ── Tooltip Style ───────────────────────────────────────────────────────────

const tooltipStyle = {
  backgroundColor: CARD_BG,
  border: `1px solid ${BORDER}`,
  borderRadius: "8px",
  fontSize: "12px",
  color: "#e2e8f0",
};

// ── Component ───────────────────────────────────────────────────────────────

export function DiagnosticTabs() {
  const totalRecuperavel = gapData.reduce((s, d) => s + (d.otimizado - d.atual), 0);

  return (
    <Tabs defaultValue="gap" className="w-full max-w-4xl mx-auto">
      <TabsList className="w-full grid grid-cols-3 h-12 rounded-lg bg-primary/30 border border-primary-foreground/10">
        <TabsTrigger
          value="gap"
          className="text-xs sm:text-sm font-semibold text-primary-foreground/60 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md"
        >
          Gap de Oportunidade
        </TabsTrigger>
        <TabsTrigger
          value="funnel"
          className="text-xs sm:text-sm font-semibold text-primary-foreground/60 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md"
        >
          Vazamentos no Funil
        </TabsTrigger>
        <TabsTrigger
          value="recovery"
          className="text-xs sm:text-sm font-semibold text-primary-foreground/60 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md"
        >
          Onboarding & Recuperação
        </TabsTrigger>
      </TabsList>

      {/* ── Gap de Oportunidade ──────────────────────────────────────── */}
      <TabsContent value="gap" className="mt-6">
        <div className="rounded-xl p-6" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-base font-semibold text-primary-foreground">Cenário Atual vs Cenário Otimizado</h3>
              <p className="text-sm text-primary-foreground/50 mt-1">
                Comparação mensal de faturamento com e sem correção de processos
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: `${AMBER}15`, border: `1px solid ${AMBER}40` }}>
              <span className="text-xs text-primary-foreground/60">Receita Recuperável</span>
              <span className="text-sm font-bold" style={{ color: AMBER }}>+R$ {totalRecuperavel}k</span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gapData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: AXIS }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: AXIS }} axisLine={false} tickLine={false} unit="k" />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value: number, name: string) => [
                    `R$ ${value}k`,
                    name === "atual" ? "Cenário Atual" : "Cenário Otimizado",
                  ]}
                />
                <Bar dataKey="atual" fill={MUTED} radius={[4, 4, 0, 0]} name="atual" />
                <Bar dataKey="otimizado" fill={EMERALD} radius={[4, 4, 0, 0]} name="otimizado" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-6 mt-4 justify-center">
            <Legend color={MUTED} label="Cenário Atual" />
            <Legend color={EMERALD} label="Cenário Otimizado" />
          </div>
        </div>
      </TabsContent>

      {/* ── Vazamentos no Funil ──────────────────────────────────────── */}
      <TabsContent value="funnel" className="mt-6">
        <div className="rounded-xl p-6" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
          <h3 className="text-base font-semibold text-primary-foreground mb-1">Onde os leads são perdidos</h3>
          <p className="text-sm text-primary-foreground/50 mb-6">
            Funil de conversão com pontos de vazamento em cada etapa do processo comercial
          </p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} layout="vertical" margin={{ left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={GRID} horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 12, fill: AXIS }} axisLine={false} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 11, fill: AXIS }}
                  axisLine={false}
                  tickLine={false}
                  width={130}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value: number) => [`${value} leads`, "Volume"]}
                />
                <Bar dataKey="valor" radius={[0, 4, 4, 0]}>
                  {funnelData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={index <= 1 ? EMERALD : AMBER}
                      fillOpacity={1 - index * 0.08}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: `${AMBER}15`, border: `1px solid ${AMBER}30` }}>
            <p className="text-xs text-primary-foreground/70 text-center">
              <strong style={{ color: AMBER }}>935 leads perdidos</strong> entre a captação e o fechamento — uma taxa de perda de <strong style={{ color: AMBER }}>93,5%</strong> no funil atual.
            </p>
          </div>
        </div>
      </TabsContent>

      {/* ── Onboarding & Recuperação ─────────────────────────────────── */}
      <TabsContent value="recovery" className="mt-6">
        <div className="rounded-xl p-6" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-base font-semibold text-primary-foreground">Evolução da Taxa de Conversão</h3>
              <p className="text-sm text-primary-foreground/50 mt-1">
                Resultado progressivo após implantação da metodologia Raio X
              </p>
            </div>
            <div className="flex gap-3">
              <Metric label="Antes" value="12%" muted />
              <Metric label="Após 8 sem" value="68%" color={EMERALD} />
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={recoveryData}>
                <defs>
                  <linearGradient id="recoveryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={EMERALD} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={EMERALD} stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: AXIS }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: AXIS }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value: number) => [`${value}%`, "Taxa de conversão"]}
                />
                <Area
                  type="monotone"
                  dataKey="taxa"
                  stroke={EMERALD}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="url(#recoveryGrad)"
                  dot={{ r: 3, fill: EMERALD, stroke: CARD_BG, strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

// ── Small helpers ───────────────────────────────────────────────────────────

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
      <span className="text-xs text-primary-foreground/50">{label}</span>
    </div>
  );
}

function Metric({ label, value, muted, color }: { label: string; value: string; muted?: boolean; color?: string }) {
  return (
    <div className="text-center px-3 py-2 rounded-lg" style={{ backgroundColor: `${CARD_BG}`, border: `1px solid ${BORDER}` }}>
      <p className="text-[10px] uppercase tracking-wider text-primary-foreground/40">{label}</p>
      <p className={`text-lg font-bold ${muted ? "text-primary-foreground/40" : ""}`} style={color ? { color } : undefined}>{value}</p>
    </div>
  );
}
