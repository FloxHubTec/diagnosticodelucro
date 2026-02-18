export default function Privacidade() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">Documento Legal</p>
        <h1 className="text-3xl font-bold text-foreground mb-8">Política de Privacidade</h1>
        <div className="prose-max space-y-6 text-muted-foreground leading-relaxed text-base">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Coleta de Dados</h2>
            <p>
              Coletamos apenas os dados necessários para prestar nossos serviços: nome, empresa, cargo, e-mail,
              WhatsApp e informações sobre a operação comercial fornecidas voluntariamente via formulário.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Uso dos Dados</h2>
            <p>
              Os dados coletados são utilizados exclusivamente para: avaliar a adequação do serviço ao perfil da
              empresa, realizar o diagnóstico contratado e comunicar resultados e recomendações ao cliente.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Compartilhamento</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados com terceiros, exceto quando necessário para a
              prestação do serviço (ex: ferramentas de agendamento) ou por obrigação legal.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Armazenamento e Segurança</h2>
            <p>
              Os dados são armazenados com medidas de segurança adequadas e mantidos apenas pelo tempo necessário para
              a execução do serviço ou cumprimento de obrigações legais.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Seus Direitos (LGPD)</h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a: acessar seus
              dados, corrigir informações incorretas, solicitar exclusão e revogar consentimento a qualquer momento.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Contato do Responsável</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas, entre em contato com nosso encarregado de dados pelo
              e-mail{" "}
              <a href="mailto:suporte@floxhub.com.br" className="text-secondary hover:underline">
                suporte@floxhub.com.br
              </a>
              .
            </p>
          </section>
        </div>
        <div className="mt-12">
          <a href="/" className="text-sm text-secondary hover:underline">
            ← Voltar à página principal
          </a>
        </div>
      </div>
    </div>
  );
}
