CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  empresa TEXT NOT NULL,
  cargo TEXT NOT NULL,
  site TEXT,
  email TEXT NOT NULL,
  funcionarios TEXT NOT NULL,
  faturamento TEXT NOT NULL,
  time_comercial TEXT NOT NULL,
  problema TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Allow anonymous inserts (public form)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert" ON public.leads
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role read" ON public.leads
  FOR SELECT TO service_role
  USING (true);