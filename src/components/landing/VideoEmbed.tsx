export function VideoEmbed() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-sm bg-accent"
           style={{ paddingBottom: "56.25%" }}>
        {/* Placeholder — replace src with real YouTube/Vimeo embed URL */}
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Raio X de Oportunidades Perdidas — Apresentação"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
