import { HeroDashboard } from "@/components/landing/HeroDashboard";
import { ComparisonChart } from "@/components/landing/ComparisonChart";
import { GrowthChart } from "@/components/landing/GrowthChart";
import {
  AlertTriangle,
  Clock,
  Brain,
  TrendingDown,
  Eye,
  Target,
  UserMinus,
  Radar,
  Map,
  Crosshair,
  BarChart2,
  RefreshCw,
  Layers,
  Activity,
  Settings,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

// ─── Shared primitives ────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="corporate-label mb-4">{children}</p>
  );
}

function Divider() {
  return <div className="section-divider my-20 max-w-4xl mx-auto" />;
}

// ─── Section 1 — HERO ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary-foreground/50 mb-6">
              Diagnóstico Estratégico B2B
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Sua empresa pode estar perdendo até{" "}
              <span className="text-secondary">30% das oportunidades</span> de venda — sem perceber.
            </h1>
            <p className="text-base lg:text-lg text-primary-foreground/70 leading-relaxed mb-4">
              Empresas B2B raramente deixam de vender por falta de cliente.
            </p>
            <p className="text-base lg:text-lg text-primary-foreground/70 leading-relaxed mb-10">
              Elas deixam de vender porque existem{" "}
              <span className="text-primary-foreground font-medium">falhas invisíveis</span>{" "}
              dentro do processo comercial.
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-interactive text-secondary-foreground font-semibold px-8 py-4 rounded-md text-sm transition-colors duration-200"
            >
              Quero descobrir onde estou perdendo vendas
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Right — Dashboard */}
          <div>
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2 — QUEBRA DE CRENÇA ─────────────────────────────────────────────

function BeliefBreakSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <SectionLabel>Análise de Causa</SectionLabel>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          O problema não é esforço comercial.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Na maioria das operações, o time trabalha, os leads chegam e as propostas são enviadas.
          <br className="hidden md:block" />
          <strong className="text-foreground font-medium"> Mas a conversão não acompanha.</strong>
        </p>
      </div>
      <ComparisonChart />
    </section>
  );
}

// ─── Section 3 — SINAIS DE ALERTA ─────────────────────────────────────────────

const alerts = [
  { icon: TrendingDown, text: "Leads entram mas não avançam" },
  { icon: Clock, text: "Respostas demoram" },
  { icon: Brain, text: "Follow-up depende de memória" },
  { icon: AlertTriangle, text: "Conversão imprevisível" },
  { icon: Eye, text: "Sem visão do funil" },
  { icon: Target, text: "Metas sem base real" },
  { icon: UserMinus, text: "Clientes somem sem feedback" },
];

function AlertSignalsSection() {
  return (
    <section className="bg-accent">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <SectionLabel>Sinais de Alerta</SectionLabel>
          <h2 className="text-3xl font-bold text-foreground">
            Sua operação apresenta estes sintomas?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10">
          {alerts.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 bg-background border border-border rounded-lg px-5 py-4"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md bg-accent border border-border">
                <Icon size={15} className="text-secondary" />
              </div>
              <span className="text-sm font-medium text-foreground">{text}</span>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-primary text-primary-foreground rounded-xl px-8 py-5 text-center">
            <p className="text-base font-medium">
              Se <strong>2 desses sinais existem</strong>, há perda de receita mensurável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4 — APRESENTAÇÃO DO SERVIÇO ──────────────────────────────────────

function ServicePresentationSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-14 h-14 mx-auto mb-8 flex items-center justify-center rounded-xl bg-accent border border-border">
          <Radar size={26} className="text-secondary" />
        </div>
        <SectionLabel>O Serviço</SectionLabel>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          O que é o Raio X de Oportunidades Perdidas
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          É uma <strong className="text-foreground">análise estratégica completa</strong> da operação comercial
          que identifica exatamente onde sua empresa perde vendas e{" "}
          <strong className="text-foreground">estrutura o processo para corrigir isso</strong>.
        </p>
      </div>
    </section>
  );
}

// ─── Section 5 — O QUE IDENTIFICAMOS ─────────────────────────────────────────

const identifications = [
  { icon: Map, title: "Mapa real do funil", desc: "Visão precisa de onde cada lead está e o que acontece com ele." },
  { icon: Crosshair, title: "Pontos de perda", desc: "Identificação exata dos momentos em que oportunidades são desperdiçadas." },
  { icon: BarChart2, title: "Gargalos operacionais", desc: "Processos que travam a venda antes de chegarem ao decisor." },
  { icon: RefreshCw, title: "Falhas de acompanhamento", desc: "Oportunidades que somem por ausência de follow-up estruturado." },
  { icon: Layers, title: "Oportunidades desperdiçadas", desc: "Leads que poderiam ter fechado mas saíram sem resposta." },
  { icon: Activity, title: "Performance real", desc: "Dados reais versus percepção interna da equipe comercial." },
];

function IdentificationsSection() {
  return (
    <section className="bg-accent">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <SectionLabel>O que Identificamos</SectionLabel>
          <h2 className="text-3xl font-bold text-foreground">
            Análise com seis dimensões críticas
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {identifications.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-background border border-border rounded-xl p-6 hover:border-secondary/40 transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent border border-border mb-4">
                <Icon size={18} className="text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 6 — METODOLOGIA ──────────────────────────────────────────────────

const steps = [
  { num: "01", label: "Raio X Comercial", desc: "Mapeamento completo da operação atual" },
  { num: "02", label: "Diagnóstico Estratégico", desc: "Análise dos pontos de perda identificados" },
  { num: "03", label: "Plano de Correção", desc: "Estrutura detalhada para resolução" },
  { num: "04", label: "Implantação Inteligente", desc: "Execução com acompanhamento próximo" },
  { num: "05", label: "Monitoramento Estratégico", desc: "Controle contínuo dos resultados" },
];

function MethodologySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <SectionLabel>Metodologia</SectionLabel>
        <h2 className="text-3xl font-bold text-foreground">Como funciona o processo</h2>
      </div>

      {/* Desktop horizontal flow */}
      <div className="hidden lg:flex items-start gap-0 mb-10">
        {steps.map((step, i) => (
          <div key={step.num} className="flex items-start flex-1">
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold mb-3 flex-shrink-0">
                {step.num}
              </div>
              <h3 className="text-sm font-semibold text-foreground text-center mb-1">{step.label}</h3>
              <p className="text-xs text-muted-foreground text-center leading-relaxed px-2">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-shrink-0 mt-5 w-8 flex items-center">
                <div className="w-full h-px bg-border relative">
                  <ChevronRight size={12} className="absolute -right-1 -top-1.5 text-muted-foreground" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile vertical */}
      <div className="lg:hidden space-y-4 mb-10">
        {steps.map((step, i) => (
          <div key={step.num} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold flex-shrink-0">
                {step.num}
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
            </div>
            <div className="pb-6">
              <h3 className="text-sm font-semibold text-foreground mb-1">{step.label}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm text-muted-foreground leading-relaxed border border-border rounded-lg px-6 py-4 bg-accent">
          Cada etapa foi desenhada para preparar e potencializar a próxima — garantindo que o diagnóstico gere ação real e não apenas relatório.
        </p>
      </div>
    </section>
  );
}

// ─── Section 7 — EXECUÇÃO ─────────────────────────────────────────────────────

const executionItems = [
  "Diagnóstico estruturado",
  "Processo documentado",
  "Implantação assistida",
  "Métricas de controle",
];

function ExecutionSection() {
  return (
    <section className="bg-accent">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Icon center */}
            <div className="flex-shrink-0 relative w-44 h-44 flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm">
                <Settings size={38} className="text-secondary" />
              </div>
              {/* surrounding dots */}
              {[0, 90, 180, 270].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-2.5 h-2.5 rounded-full bg-secondary/30 border border-secondary/50"
                  style={{
                    transform: `rotate(${deg}deg) translateY(-64px)`,
                    transformOrigin: "center center",
                  }}
                />
              ))}
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <SectionLabel>Execução</SectionLabel>
              <p className="text-2xl font-bold text-foreground mb-4 leading-snug">
                Aqui você não recebe teoria.
                <br />
                Recebe diagnóstico, estrutura e implantação.
              </p>
              <div className="inline-block border-l-2 border-secondary pl-4 mb-6">
                <p className="text-base font-semibold text-foreground">Não é orientação.</p>
                <p className="text-base font-semibold text-secondary">É execução estratégica.</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {executionItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-secondary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 8 — RESULTADO ────────────────────────────────────────────────────

function ResultSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <SectionLabel>O que Você Ganha</SectionLabel>
        <h2 className="text-3xl font-bold text-foreground mb-4">O que você ganha com isso</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Você não compra análise.{" "}
          <strong className="text-foreground">Compra controle da operação comercial.</strong>
        </p>
      </div>
      <GrowthChart />
    </section>
  );
}

// ─── Section 9 — PARA QUEM É ──────────────────────────────────────────────────

const forWhom = [
  "Empresas que já vendem",
  "Com equipe comercial estruturada",
  "Com fluxo ativo de clientes",
  "Em fase de crescimento",
  "Que querem vender mais com a mesma estrutura",
];

function ForWhomSection() {
  return (
    <section className="bg-accent">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Perfil Ideal</SectionLabel>
              <h2 className="text-3xl font-bold text-foreground mb-4">Para quem é este serviço</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Este diagnóstico é desenhado para operações comerciais que já funcionam — e precisam funcionar melhor.
              </p>
            </div>
            <div className="space-y-3">
              {forWhom.map((item, i) => (
                <div key={item} className="flex items-center gap-4 bg-background border border-border rounded-lg px-5 py-3.5">
                  <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 10 — PROVA LÓGICA ────────────────────────────────────────────────

function LogicProofSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-px h-12 bg-border mx-auto mb-10" />
        <p className="text-xl lg:text-2xl font-semibold text-foreground leading-relaxed">
          Mesmo uma pequena falha de acompanhamento pode representar{" "}
          <span className="text-secondary">dezenas de vendas perdidas</span> ao longo do mês.
        </p>
        <div className="w-px h-12 bg-border mx-auto mt-10" />
      </div>
    </section>
  );
}

// ─── Section 11 — CTA FINAL ───────────────────────────────────────────────────

function CTASection() {
  return (
    <section id="cta" className="bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <SectionLabel>
          <span className="text-primary-foreground/50">Próximo Passo</span>
        </SectionLabel>
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
          Solicite uma análise estratégica
        </h2>
        <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10 max-w-xl mx-auto">
          Vamos avaliar sua operação e identificar onde existem perdas invisíveis.
        </p>
        <a
          href="#cta"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-interactive text-secondary-foreground font-semibold px-10 py-4 rounded-md text-sm transition-colors duration-200"
        >
          Solicitar diagnóstico
          <ChevronRight size={16} />
        </a>
        <p className="text-xs text-primary-foreground/40 mt-4">Leva menos de 2 minutos</p>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-sm text-muted-foreground leading-relaxed">
          A maioria das empresas não perde vendas por falta de cliente.
          <br />
          <strong className="text-foreground">Perde por falha de processo.</strong>
        </p>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BeliefBreakSection />
      <div className="section-divider max-w-4xl mx-auto" />
      <AlertSignalsSection />
      <div className="section-divider max-w-4xl mx-auto" />
      <ServicePresentationSection />
      <IdentificationsSection />
      <MethodologySection />
      <ExecutionSection />
      <div className="section-divider max-w-4xl mx-auto" />
      <ResultSection />
      <ForWhomSection />
      <LogicProofSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
