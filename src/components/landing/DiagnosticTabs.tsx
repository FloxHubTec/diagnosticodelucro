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
  { name: "Jan", atual: 8, otimizado: 18 },
  { name: "Fev", atual: 10, otimizado: 22 },
  { name: "Mar", atual: 7, otimizado: 20 },
  { name: "Abr", atual: 12, otimizado: 25 },
  { name: "Mai", atual: 9, otimizado: 28 },
  { name: "Jun", atual: 14, otimizado: 35 },
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

// ── Colors (from design system HSL tokens) ──────────────────────────────────

const GREEN = "hsl(152, 60%, 42%)";       // emerald
const ORANGE = "hsl(25, 95%, 53%)";       // vibrant orange for gaps/losses
const WHITE = "#ffffff";
const CARD_BG = "hsl(217, 33%, 10%)";     // slate-900
const BORDER = "rgba(255,255,255,0.1)";
const GRID = "rgba(255,255,255,0.06)";
const AXIS = "#ffffff";

// ── Tooltip Style ───────────────────────────────────────────────────────────

const tooltipStyle = {
  backgroundColor: CARD_BG,
  border: `1px solid ${BORDER}`,
  borderRadius: "8px",
  fontSize: "12px",
  color: WHITE,
};

// ── Component ───────────────────────────────────────────────────────────────

export function DiagnosticTabs() {
  const totalRecuperavel = gapData.reduce((s, d) => s + (d.otimizado - d.atual), 0);

  return (
    <Tabs defaultValue="gap" className="w-full max-w-4xl mx-auto">
      <TabsList className="w-full grid grid-cols-3 h-12 rounded-lg bg-primary/30 border border-primary-foreground/10">
        <TabsTrigger
          value="gap"
          className="text-xs sm:text-sm font-semibold text-white/60 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md"
        >
          Gap de Oportunidade
        </TabsTrigger>
        <TabsTrigger
          value="funnel"
          className="text-xs sm:text-sm font-semibold text-white/60 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md"
        >
          Vazamentos no Funil
        </TabsTrigger>
        <TabsTrigger
          value="recovery"
          className="text-xs sm:text-sm font-semibold text-white/60 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md"
        >
          Onboarding & Recuperação
        </TabsTrigger>
      </TabsList>

      {/* ── Gap de Oportunidade ──────────────────────────────────────── */}
      <TabsContent value="gap" className="mt-6">
        <div className="rounded-xl p-6" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-base font-semibold text-white">Cenário Atual vs Cenário Otimizado</h3>
              <p className="text-sm text-white/50 mt-1">
                Comparação mensal de faturamento com e sem correção de processos
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/15 border border-secondary/30">
              <span className="text-xs text-white/60">Receita Recuperável</span>
              <span className="text-sm font-bold text-secondary">+R$ {totalRecuperavel}k</span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gapData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: AXIS }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: AXIS }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value: number, name: string) => [
                    `R$ ${value}k`,
                    name === "atual" ? "Cenário Atual" : "Cenário Otimizado",
                  ]}
                />
                <Bar dataKey="atual" fill="rgba(255,255,255,0.85)" radius={[4, 4, 0, 0]} name="atual" />
                <Bar dataKey="otimizado" fill={GREEN} radius={[4, 4, 0, 0]} name="otimizado" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-6 mt-4 justify-center">
            <Legend color="rgba(255,255,255,0.85)" label="Cenário Atual" />
            <Legend color={GREEN} label="Cenário Otimizado" />
          </div>
        </div>
      </TabsContent>

      {/* ── Vazamentos no Funil ──────────────────────────────────────── */}
      <TabsContent value="funnel" className="mt-6">
        <div className="rounded-xl p-6" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
          <h3 className="text-base font-semibold text-white mb-1">Onde os leads são perdidos</h3>
          <p className="text-sm text-white/50 mb-6">
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
                      fill={index <= 1 ? GREEN : ORANGE}
                      fillOpacity={1 - index * 0.08}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
            <p className="text-xs text-white/70 text-center">
              <strong className="text-orange-400">935 leads perdidos</strong> entre a captação e o fechamento — uma taxa de perda de <strong className="text-orange-400">93,5%</strong> no funil atual.
            </p>
          </div>
        </div>
      </TabsContent>

      {/* ── Onboarding & Recuperação ─────────────────────────────────── */}
      <TabsContent value="recovery" className="mt-6">
        <div className="rounded-xl p-6" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-base font-semibold text-white">Evolução da Taxa de Conversão</h3>
              <p className="text-sm text-white/50 mt-1">
                Resultado progressivo após implantação da metodologia Raio X
              </p>
            </div>
            <div className="flex gap-3">
              <Metric label="Antes" value="12%" muted />
              <Metric label="Após 8 sem" value="68%" />
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={recoveryData}>
                <defs>
                  <linearGradient id="recoveryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={GREEN} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={GREEN} stopOpacity={0.02} />
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
                  stroke={GREEN}
                  strokeWidth={2.5}
                  fill="url(#recoveryGrad)"
                  dot={{ r: 3, fill: GREEN, stroke: CARD_BG, strokeWidth: 2 }}
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
      <span className="text-xs text-white/60">{label}</span>
    </div>
  );
}

function Metric({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="text-center px-3 py-2 rounded-lg" style={{ backgroundColor: `${CARD_BG}`, border: `1px solid ${BORDER}` }}>
      <p className="text-[10px] uppercase tracking-wider text-white/40">{label}</p>
      <p className={`text-lg font-bold ${muted ? "text-white/40" : "text-secondary"}`}>{value}</p>
    </div>
  );
}
