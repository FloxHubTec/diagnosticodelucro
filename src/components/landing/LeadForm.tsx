import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, CheckCircle } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(2, "Nome obrigatório"),
  empresa: z.string().trim().min(2, "Empresa obrigatória"),
  cargo: z.string().trim().min(2, "Cargo obrigatório"),
  site: z.string().trim().optional(),
  funcionarios: z.string().min(1, "Selecione uma faixa"),
  faturamento: z.string().min(1, "Selecione uma faixa"),
  timeComercial: z.string().min(1, "Selecione uma opção"),
  problema: z.string().min(1, "Selecione o principal problema"),
  whatsapp: z.string().trim().min(8, "WhatsApp obrigatório"),
});

type FormData = z.infer<typeof schema>;

const initialState: FormData = {
  nome: "",
  empresa: "",
  cargo: "",
  site: "",
  funcionarios: "",
  faturamento: "",
  timeComercial: "",
  problema: "",
  whatsapp: "",
};

export function LeadForm() {
  const [form, setForm] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent border border-border">
          <CheckCircle size={28} className="text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Aplicação recebida.</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Analisaremos seu perfil e entraremos em contato em breve para confirmar o agendamento.
        </p>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-interactive text-secondary-foreground font-semibold px-8 py-4 rounded-md text-sm transition-colors duration-200"
        >
          Escolher horário agora
          <ChevronRight size={16} />
        </a>
        <p className="text-xs text-muted-foreground mt-4">Se aprovado, você escolhe o horário na sequência.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
      {/* Nome + Empresa */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nome" error={errors.nome}>
          <Input
            placeholder="Seu nome completo"
            value={form.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
          />
        </Field>
        <Field label="Empresa" error={errors.empresa}>
          <Input
            placeholder="Nome da empresa"
            value={form.empresa}
            onChange={(e) => handleChange("empresa", e.target.value)}
          />
        </Field>
      </div>

      {/* Cargo + Site */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Cargo" error={errors.cargo}>
          <Input
            placeholder="Ex: CEO, Diretor Comercial"
            value={form.cargo}
            onChange={(e) => handleChange("cargo", e.target.value)}
          />
        </Field>
        <Field label="Site ou Instagram (opcional)" error={errors.site}>
          <Input
            placeholder="https://..."
            value={form.site}
            onChange={(e) => handleChange("site", e.target.value)}
          />
        </Field>
      </div>

      {/* Funcionários + Faturamento */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Número de funcionários" error={errors.funcionarios}>
          <Select
            value={form.funcionarios}
            onChange={(v) => handleChange("funcionarios", v)}
            options={["1–10", "11–50", "51–200", "200+"]}
            placeholder="Selecione"
          />
        </Field>
        <Field label="Faturamento mensal" error={errors.faturamento}>
          <Select
            value={form.faturamento}
            onChange={(v) => handleChange("faturamento", v)}
            options={["Até R$ 50k", "R$ 50k – R$ 200k", "R$ 200k – R$ 1M", "Acima de R$ 1M"]}
            placeholder="Selecione"
          />
        </Field>
      </div>

      {/* Time comercial */}
      <Field label="Possui time comercial?" error={errors.timeComercial}>
        <div className="flex gap-3">
          {["Sim", "Não", "Em estruturação"].map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => handleChange("timeComercial", opt)}
              className={`flex-1 text-sm font-medium py-2.5 rounded-md border transition-colors ${
                form.timeComercial === opt
                  ? "bg-secondary text-secondary-foreground border-secondary"
                  : "bg-background text-foreground border-border hover:border-secondary/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </Field>

      {/* Problema principal */}
      <Field label="Principal problema hoje" error={errors.problema}>
        <Select
          value={form.problema}
          onChange={(v) => handleChange("problema", v)}
          options={[
            "Leads não avançam no funil",
            "Conversão baixa / imprevisível",
            "Falta de visão dos números",
            "Follow-up inconsistente",
            "Equipe sem processo claro",
            "Outro",
          ]}
          placeholder="Selecione o mais crítico"
        />
      </Field>

      {/* WhatsApp */}
      <Field label="Melhor WhatsApp para contato" error={errors.whatsapp}>
        <Input
          type="tel"
          placeholder="(11) 99999-9999"
          value={form.whatsapp}
          onChange={(e) => handleChange("whatsapp", e.target.value)}
        />
      </Field>

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full bg-secondary hover:bg-interactive text-secondary-foreground font-semibold h-12 text-sm rounded-md gap-2"
        >
          Enviar e agendar
          <ChevronRight size={16} />
        </Button>
        <p className="text-xs text-muted-foreground text-center mt-3">
          Se aprovado, você já escolhe o horário na sequência.
        </p>
      </div>
    </form>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
