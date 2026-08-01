import React from 'react';

interface AvailabilityWidgetProps {
  lang: 'en' | 'es';
}

export default function AvailabilityWidget({ lang }: AvailabilityWidgetProps) {
  const t = {
    en: {
      subtitle: "Check Availability",
      title: "Machu Picchu Official Availability",
      description: "Ensure your spot! We recommend booking your tickets 2-3 months in advance as Machu Picchu tickets sell out quickly.",
    },
    es: {
      subtitle: "Verificar Disponibilidad",
      title: "Disponibilidad Oficial Machu Picchu",
      description: "¡Asegura tu lugar! Recomendamos reservar tus entradas con 2-3 meses de anticipación ya que los boletos para Machu Picchu se agotan rápidamente.",
    }
  };

  const content = t[lang];

  return (
    <section className="py-8 md:py-10 bg-[#F9F6EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-[10px] md:text-xs font-bold text-[#dfa126] uppercase tracking-[0.2em] mb-2">{content.subtitle}</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0b403a] font-['Outfit'] mb-3">{content.title}</h3>
          <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>
        
        <div className="bg-white p-2 md:p-6 rounded-3xl shadow-xl shadow-[#0b403a]/5 border border-black/5 overflow-hidden mx-auto max-w-4xl relative">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0b403a] via-[#dfa126] to-[#0b403a]"></div>
          
          <iframe 
            src="https://www.salkantaytrek.org/availability/disponibilidad.php" 
            className="w-full h-[550px] md:h-[650px] border-0 rounded-b-2xl mt-2 overflow-hidden"
            title="Machu Picchu Availability"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
