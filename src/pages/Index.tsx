import { HeroDashboard } from "@/components/landing/HeroDashboard";
import { ComparisonChart } from "@/components/landing/ComparisonChart";
import { GrowthChart } from "@/components/landing/GrowthChart";
import { LossFlowchart } from "@/components/landing/LossFlowchart";
import { GearDifferential } from "@/components/landing/GearDifferential";
import { VideoEmbed } from "@/components/landing/VideoEmbed";
import { LeadForm } from "@/components/landing/LeadForm";
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
  CheckCircle,
  ChevronRight,
  Mail,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react";

// ─── Shared primitives ────────────────────────────────────────────────────────

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`corporate-label mb-4 ${light ? "text-primary-foreground/40" : ""}`}>{children}</p>;
}

function CtaButton({
  href,
  children,
  size = "default",
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  size?: "default" | "sm";
  variant?: "primary" | "ghost";
}) {
  const base = "inline-flex items-center gap-2 font-semibold rounded-md transition-colors duration-200";
  const variants = {
    primary: "bg-secondary hover:bg-interactive text-secondary-foreground",
    ghost: "border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
  };
  const sizes = {
    default: "px-8 py-4 text-sm",
    sm: "px-5 py-2.5 text-sm",
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
      <ChevronRight size={15} />
    </a>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm font-bold text-foreground tracking-tight">
          Raio X <span className="text-secondary">de Oportunidades Perdidas</span>
        </span>
        <CtaButton href="#formulario" size="sm">
          Solicitar análise
        </CtaButton>
      </div>
    </header>
  );
}

// ─── Section 1 — HERO ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-6">
              Diagnóstico Estratégico B2B · Análise de Conversão Comercial
            </p>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Sua empresa pode estar perdendo até <span className="text-secondary">30% das oportunidades</span> de venda
              sem perceber.
            </h1>
            <p className="body-lg text-primary-foreground/65 prose-max mb-10">
              Não é falta de cliente. É falha de processo: atendimento, acompanhamento, funil e visão de números.
            </p>
            <CtaButton href="#formulario">Quero mapear minhas perdas</CtaButton>
            <p className="text-xs text-primary-foreground/35 mt-4">Leva menos de 2 minutos para aplicar.</p>
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
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <SectionLabel>Análise de Causa</SectionLabel>
        <h2 className="heading-lg text-foreground mb-6">O problema não é esforço comercial.</h2>
        <p className="body-lg text-muted-foreground prose-max mx-auto">
          Na maioria das operações, o time trabalha, os leads chegam e propostas são enviadas. Mas a conversão não
          acompanha porque há <strong className="text-foreground">vazamentos invisíveis no processo</strong>.
        </p>
      </div>
      <ComparisonChart />
      <div className="text-center mt-10">
        <CtaButton href="#formulario" variant="ghost">
          Solicitar análise
        </CtaButton>
      </div>
    </section>
  );
}

// ─── Section 3 — SINTOMAS ─────────────────────────────────────────────────────

const alerts = [
  { icon: TrendingDown, text: "Leads entram mas não avançam" },
  { icon: Clock, text: "Demora no atendimento inicial" },
  { icon: Brain, text: "Follow-up depende do vendedor lembrar" },
  { icon: AlertTriangle, text: "Vendedores sem processo definido" },
  { icon: Eye, text: "Falta visão real dos números" },
  { icon: Target, text: "Metas sem base real" },
  { icon: UserMinus, text: "Perda de clientes sem saber por quê" },
];

function AlertSignalsSection() {
  return (
    <section className="bg-accent">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <SectionLabel>Sinais de Alerta</SectionLabel>
          <h2 className="heading-lg text-foreground">Sua operação apresenta estes sintomas?</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10">
          {alerts.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4 bg-background border border-border rounded-lg px-5 py-4">
              <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-md bg-accent border border-border">
                <Icon size={16} className="text-secondary" />
              </div>
              <span className="text-base font-medium text-foreground">{text}</span>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="bg-primary text-primary-foreground rounded-xl px-8 py-5">
            <p className="text-base font-medium">
              Se <strong>2 ou mais desses pontos existem</strong>, há perda de receita.
            </p>
          </div>
          <CtaButton href="#formulario">Aplicar para o Raio X</CtaButton>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4 — FLUXOGRAMA DAS PERDAS ────────────────────────────────────────

function LossFlowchartSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <SectionLabel>Mapa de Vazamentos</SectionLabel>
        <h2 className="heading-lg text-foreground mb-4">Onde as vendas escapam (mesmo com leads chegando)</h2>
        <p className="body-lg text-muted-foreground prose-max mx-auto">
          Este é o mapa que a maioria dos gestores nunca viu da própria operação.
        </p>
      </div>
      <LossFlowchart />
    </section>
  );
}

// ─── Section 5 — O QUE É O SERVIÇO ───────────────────────────────────────────

function ServicePresentationSection() {
  return (
    <section className="bg-accent">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 mx-auto mb-8 flex items-center justify-center rounded-xl bg-background border border-border">
            <Radar size={26} className="text-secondary" />
          </div>
          <SectionLabel>O Serviço</SectionLabel>
          <h2 className="heading-lg text-foreground mb-6">O que é o Raio X de Oportunidades Perdidas</h2>
          <p className="body-lg text-muted-foreground prose-max mx-auto mb-8">
            Serviço estratégico de diagnóstico e estruturação comercial que identifica pontos ocultos onde a empresa
            perde vendas e <strong className="text-foreground">implementa correções para eliminar essas perdas</strong>.
          </p>
          <div className="border-l-4 border-secondary pl-5 text-left max-w-lg mx-auto">
            <p className="text-base font-semibold text-foreground leading-relaxed">
              A maioria das empresas não perde vendas por falta de cliente.{" "}
              <span className="text-secondary">Perde por falha de processo.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 6 — O QUE O DIAGNÓSTICO ENTREGA ─────────────────────────────────

const deliverables = [
  { icon: Map, title: "Mapa real do funil", desc: "Visão precisa de onde cada lead está e o que acontece com ele." },
  {
    icon: Crosshair,
    title: "Pontos de perda de vendas",
    desc: "Identificação exata dos momentos em que oportunidades são desperdiçadas.",
  },
  {
    icon: BarChart2,
    title: "Gargalos operacionais",
    desc: "Processos que travam a venda antes de chegarem ao decisor.",
  },
  {
    icon: RefreshCw,
    title: "Falhas de acompanhamento",
    desc: "Oportunidades que somem por ausência de follow-up estruturado.",
  },
  {
    icon: Layers,
    title: "Oportunidades desperdiçadas",
    desc: "Leads que poderiam ter fechado mas saíram sem resposta.",
  },
  {
    icon: Activity,
    title: "Análise de performance",
    desc: "Dados reais versus percepção interna da equipe comercial.",
  },
  {
    icon: CheckCircle,
    title: "Plano de correção estruturado",
    desc: "Roteiro claro com prioridades e próximas ações definidas.",
  },
];

function DeliverablesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <SectionLabel>O que o Diagnóstico Entrega</SectionLabel>
        <h2 className="heading-lg text-foreground">O que você recebe</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {deliverables.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-accent border border-border rounded-xl p-6 hover:border-secondary/40 transition-colors"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-border mb-4">
              <Icon size={18} className="text-secondary" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Section 7 — COMO FUNCIONA ────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    label: "Raio X Comercial",
    desc: "Mapeamento completo da operação de vendas atual.",
  },
  {
    num: "02",
    label: "Diagnóstico Estratégico",
    desc: "Identificação dos pontos onde a empresa perde oportunidades.",
  },
  {
    num: "03",
    label: "Plano de Correção",
    desc: "Estruturação do processo ideal de vendas.",
  },
  {
    num: "04",
    label: "Implantação Inteligente",
    desc: "Ativação de soluções que organizam, automatizam e monitoram a operação.",
  },
  {
    num: "05",
    label: "Monitoramento Estratégico",
    desc: "Acompanhamento com relatórios estruturados para garantir que o processo continue funcionando.",
  },
];

function MethodologySection() {
  return (
    <section className="bg-accent">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <SectionLabel>Metodologia</SectionLabel>
          <h2 className="heading-lg text-foreground">Como funciona o processo</h2>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-start gap-0 mb-12">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold mb-4 flex-shrink-0">
                  {step.num}
                </div>
                <h3 className="text-sm font-semibold text-foreground text-center mb-2">{step.label}</h3>
                <p className="text-xs text-muted-foreground text-center leading-relaxed px-3">{step.desc}</p>
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

        {/* Mobile */}
        <div className="lg:hidden space-y-4 mb-12">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold flex-shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-6">
                <h3 className="text-base font-semibold text-foreground mb-1">{step.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-sm text-muted-foreground border border-border rounded-lg px-6 py-4 bg-background">
            Cada etapa foi desenhada para preparar e potencializar a próxima — garantindo que o diagnóstico gere ação
            real e não apenas relatório.
          </p>
          <CtaButton href="#formulario">Agendar diagnóstico</CtaButton>
        </div>
      </div>
    </section>
  );
}

// ─── Section 8 — DIFERENCIAL ──────────────────────────────────────────────────

function DifferentialSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <SectionLabel>Diferencial</SectionLabel>
        <h2 className="heading-lg text-foreground mb-6">Você não recebe teoria. Você recebe correção.</h2>
        <p className="body-lg text-muted-foreground prose-max mx-auto">
          Você não recebe um PDF dizendo o que fazer. Você recebe diagnóstico, estrutura e nossa equipe implementa todas
          as ferramentas e fluxo necessário para seu negócio crescer. acontecer.
        </p>
      </div>
      <GearDifferential />
    </section>
  );
}

// ─── Section 9 — VÍDEO ────────────────────────────────────────────────────────

function VideoSection() {
  return (
    <section className="bg-accent">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <SectionLabel>Assista antes de aplicar</SectionLabel>
          <h2 className="heading-lg text-foreground mb-4">2 minutos que valem a leitura inteira</h2>
          <p className="body-lg text-muted-foreground prose-max mx-auto">
            Neste vídeo: o que identifico no Raio X, como é a reunião, o que você recebe ao final e para quem faz
            sentido.
          </p>
        </div>
        <VideoEmbed />
        <div className="text-center mt-10">
          <CtaButton href="#formulario">Aplicar para o Raio X</CtaButton>
        </div>
      </div>
    </section>
  );
}

// ─── Section 10 — GANHOS ──────────────────────────────────────────────────────

function ResultSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <SectionLabel>O que Você Ganha</SectionLabel>
        <h2 className="heading-lg text-foreground mb-4">O que você ganha com isso</h2>
        <p className="body-lg text-muted-foreground prose-max mx-auto mb-4">
          Você não compra análise. <strong className="text-foreground">Compra controle da operação comercial.</strong>
        </p>
        <p className="text-base text-muted-foreground">
          Mesmo uma pequena falha de acompanhamento pode representar{" "}
          <strong className="text-foreground">dezenas de vendas perdidas</strong> ao longo do mês.
        </p>
      </div>
      <GrowthChart />
      <div className="text-center mt-10">
        <CtaButton href="#formulario">Quero mapear minhas perdas</CtaButton>
      </div>
    </section>
  );
}

// ─── Section 11 — PARA QUEM É ─────────────────────────────────────────────────

const forWhom = [
  "Empresas B2B que já vendem",
  "Têm equipe comercial",
  "Possuem fluxo ativo de clientes",
  "Estão em crescimento",
  "Sentem que poderiam vender mais com a mesma estrutura",
];

function ForWhomSection() {
  return (
    <section className="bg-accent">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel>Perfil Ideal</SectionLabel>
              <h2 className="heading-lg text-foreground mb-4">Para quem este serviço é indicado</h2>
              <p className="body-lg text-muted-foreground">
                Este diagnóstico é desenhado para operações comerciais que já funcionam — e precisam funcionar melhor.
              </p>
              <div className="mt-8 p-4 bg-background border border-border rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground block mb-1">Nota:</strong>
                  Se a empresa ainda está validando produto/mercado e não tem operação comercial ativa, este serviço não
                  é o ideal agora.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {forWhom.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-background border border-border rounded-lg px-5 py-4"
                >
                  <span className="w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-base font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 12 — FORMULÁRIO ──────────────────────────────────────────────────

function FormSection() {
  return (
    <section id="formulario" className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <SectionLabel>Aplicação</SectionLabel>
        <h2 className="heading-lg text-foreground mb-4">Aplicação para a análise estratégica</h2>
        <p className="body-lg text-muted-foreground prose-max mx-auto">
          Antes de agendar, preciso entender seu cenário para confirmar se faz sentido. Leva menos de 2 minutos.
        </p>
      </div>
      <LeadForm />
    </section>
  );
}

// ─── Section 13 — CTA FINAL ───────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <SectionLabel light>Próximo Passo</SectionLabel>
        <h2 className="heading-lg text-primary-foreground mb-6">Pronta para parar de perder oportunidades?</h2>
        <p className="body-lg text-primary-foreground/65 prose-max mx-auto mb-10">
          Se sua empresa já vende e quer corrigir os vazamentos comerciais, aplique para o Raio X.
        </p>
        <CtaButton href="#formulario">Enviar aplicação e agendar</CtaButton>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="text-sm font-bold text-foreground mb-2">
              Floxhub <span className="text-secondary">Tecnologia</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Diagnóstico e estruturação comercial estratégica para empresas B2B.
            </p>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Contato</p>
            <div className="space-y-3">
              <a
                href="mailto:suporte@floxhub.com.br"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                <Mail size={14} />
                suporte@floxhub.com.br
              </a>
              <a
                href="https://wa.me/55"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                <Phone size={14} />
                WhatsApp — a definir
              </a>
            </div>
          </div>

          {/* Redes + Links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Redes Sociais</p>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="/termos" className="text-xs text-muted-foreground hover:text-secondary transition-colors">
                Termos de Uso
              </a>
              <a href="/privacidade" className="text-xs text-muted-foreground hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Floxhub Tecnologia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground italic text-center">
            A maioria das empresas não perde vendas por falta de cliente.{" "}
            <strong className="text-foreground not-italic">Perde por falha de processo.</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Termos & Privacidade (inline stubs – can be routed later) ───────────────
// These pages are accessible at /termos and /privacidade via router.
// For now they are referenced as links in the footer.

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BeliefBreakSection />
      <AlertSignalsSection />
      <LossFlowchartSection />
      <ServicePresentationSection />
      <DeliverablesSection />
      <MethodologySection />
      <DifferentialSection />
      <VideoSection />
      <ResultSection />
      <ForWhomSection />
      <FormSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
