import React from 'react';

interface Props {
  lang?: 'en' | 'es';
}

export default function SiteFooter({ lang = 'en' }: Props) {
  return (
    <footer className="py-12 bg-[#082f2a] border-t border-white/5 flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2 opacity-80">
        <div className="h-px w-8 bg-[#dfa126]"></div>
        <span className="text-[#dfa126] font-['Outfit'] font-bold text-sm tracking-widest">
          INKALAND EXPLORERS
        </span>
        <div className="h-px w-8 bg-[#dfa126]"></div>
      </div>

      <div className="flex items-center mt-2 mb-2">
        <a 
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=inkalandexplorers@gmail.com&item_name=Inkaland+Explorers+Custom+Payment&currency_code=USD"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#0070ba] text-white font-bold text-xs py-2 px-6 rounded-xl hover:bg-[#003087] transition-colors shadow-md"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zM9.474 8.76l-.426 2.705h2.19c2.357 0 4.382-.796 4.966-3.805.213-1.096.06-1.922-.44-2.492-.516-.584-1.464-.863-2.827-.863H7.818L6.7 8.76h2.774z"/>
          </svg>
          {lang === 'es' ? 'Pago Personalizado en PayPal' : 'Custom Payment on PayPal'}
        </a>
      </div>
      
      <div className="text-center text-gray-400 text-[10px] tracking-wider uppercase font-light px-4">
        © 2026 | INKALAND EXPLORERS MACHU PICCHU E.I.R.L. | RUC: 20604773394
      </div>
    </footer>
  );
}
