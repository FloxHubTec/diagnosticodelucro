export default function Termos() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">Documento Legal</p>
        <h1 className="text-3xl font-bold text-foreground mb-8">Termos de Uso</h1>
        <div className="prose-max space-y-6 text-muted-foreground leading-relaxed text-base">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar os serviços da Floxhub Tecnologia, você concorda com estes Termos de Uso. Caso não
              concorde, recomendamos que não utilize nossos serviços.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Descrição dos Serviços</h2>
            <p>
              A Floxhub Tecnologia oferece serviços de diagnóstico e estruturação comercial estratégica voltados para
              empresas B2B, incluindo o Raio X de Oportunidades Perdidas (Análise de Conversão Comercial Estratégica).
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Uso dos Serviços</h2>
            <p>
              Os serviços são de uso exclusivo da empresa contratante e não podem ser repassados ou revendidos a
              terceiros sem autorização prévia e expressa da Floxhub Tecnologia.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, metodologia, relatórios e materiais produzidos pela Floxhub Tecnologia são de
              propriedade exclusiva da empresa e protegidos por legislação de propriedade intelectual.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Limitação de Responsabilidade</h2>
            <p>
              A Floxhub Tecnologia não se responsabiliza por resultados comerciais específicos decorrentes da
              aplicação das recomendações do diagnóstico, uma vez que os resultados dependem de fatores externos e da
              execução interna da empresa contratante.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Alterações</h2>
            <p>
              Estes Termos podem ser atualizados a qualquer momento. O uso continuado dos serviços após alterações
              implica aceitação dos novos termos.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">7. Contato</h2>
            <p>
              Dúvidas sobre estes Termos devem ser enviadas para{" "}
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
