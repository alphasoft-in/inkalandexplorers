import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="py-12 bg-[#082f2a] border-t border-white/5 flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2 opacity-80">
        <div className="h-px w-8 bg-[#dfa126]"></div>
        <span className="text-[#dfa126] font-['Outfit'] font-bold text-sm tracking-widest">
          INKALAND EXPLORERS
        </span>
        <div className="h-px w-8 bg-[#dfa126]"></div>
      </div>
      
      <div className="text-center text-gray-400 text-[10px] tracking-wider uppercase font-light px-4">
        © 2026 | INKALAND EXPLORERS MACHU PICCHU E.I.R.L. | RUC: 20604773394
      </div>
    </footer>
  );
}
