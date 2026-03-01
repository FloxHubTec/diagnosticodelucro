import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      nome,
      empresa,
      cargo,
      site,
      email,
      funcionarios,
      faturamento,
      timeComercial,
      problema,
      whatsapp,
    } = await req.json();

    // Validate required fields
    if (!nome || !empresa || !cargo || !email || !funcionarios || !faturamento || !timeComercial || !problema || !whatsapp) {
      return new Response(
        JSON.stringify({ success: false, error: "Campos obrigatórios faltando" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("leads").insert({
      nome,
      empresa,
      cargo,
      site: site || null,
      email,
      funcionarios,
      faturamento,
      time_comercial: timeComercial,
      problema,
      whatsapp,
    });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ success: false, error: "Erro ao salvar lead" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send WhatsApp notification via Evolution API
    const evolutionUrl = Deno.env.get("EVOLUTION_API_URL");
    const evolutionKey = Deno.env.get("EVOLUTION_API_KEY");
    const instanceName = Deno.env.get("EVOLUTION_INSTANCE_NAME");
    const notifyNumber = Deno.env.get("WHATSAPP_NOTIFY_NUMBER");

    if (!evolutionUrl || !evolutionKey || !instanceName || !notifyNumber) {
      console.error("Evolution API secrets not configured");
      return new Response(
        JSON.stringify({ success: true, whatsapp_sent: false, error: "WhatsApp não configurado" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const message = `🔔 *Novo Lead - Raio X de Oportunidades*

👤 *Nome:* ${nome}
🏢 *Empresa:* ${empresa}
💼 *Cargo:* ${cargo}
${site ? `🌐 *Site:* ${site}` : ""}
📧 *E-mail:* ${email}
👥 *Funcionários:* ${funcionarios}
💰 *Investimento:* ${faturamento}
📊 *Time comercial:* ${timeComercial}
⚠️ *Principal problema:* ${problema}
📱 *WhatsApp:* ${whatsapp}

📅 Recebido em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`;

    const evolutionResponse = await fetch(
      `${evolutionUrl}/message/sendText/${instanceName}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: evolutionKey,
        },
        body: JSON.stringify({
          number: notifyNumber,
          text: message,
        }),
      }
    );

    const evolutionData = await evolutionResponse.json();

    if (!evolutionResponse.ok) {
      console.error("Evolution API error:", JSON.stringify(evolutionData));
      return new Response(
        JSON.stringify({ success: true, whatsapp_sent: false }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, whatsapp_sent: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
