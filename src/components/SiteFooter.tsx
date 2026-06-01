import React from 'react';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang?: 'en' | 'es';
}

export default function SiteFooter({ lang = 'en' }: Props) {
  const t = useTranslations(lang);
  const basePrefix = lang === 'en' ? '' : '/es';

  return (
    <footer className="bg-[#082f2a] border-t border-white/5 pt-16 pb-8 px-4 sm:px-8 font-['Inter']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Column 1: About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2 mb-6 opacity-90">
            <div className="h-px w-6 bg-[#dfa126]"></div>
            <span className="text-[#dfa126] font-['Outfit'] font-bold text-sm tracking-widest uppercase">
              INKALAND EXPLORERS
            </span>
            <div className="h-px w-6 bg-[#dfa126] md:hidden"></div>
          </div>
          <p className="text-gray-300 font-light text-sm leading-relaxed max-w-xs">
            {t('footer.about_desc')}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-['Outfit'] font-bold text-lg mb-6">{t('footer.links_title')}</h3>
          <ul className="space-y-3 text-center md:text-left">
            <li><a href={`${basePrefix}/`} className="text-gray-300 hover:text-[#dfa126] transition-colors font-light text-sm">{t('nav.home')}</a></li>
            <li><a href={`${basePrefix}/destinations`} className="text-gray-300 hover:text-[#dfa126] transition-colors font-light text-sm">{t('nav.destinations')}</a></li>
            <li><a href={`${basePrefix}/packages`} className="text-gray-300 hover:text-[#dfa126] transition-colors font-light text-sm">{t('nav.packages')}</a></li>
            <li><a href={`${basePrefix}/about`} className="text-gray-300 hover:text-[#dfa126] transition-colors font-light text-sm">{t('nav.about')}</a></li>
            <li><a href={`${basePrefix}/contact`} className="text-gray-300 hover:text-[#dfa126] transition-colors font-light text-sm">{t('nav.contact')}</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-['Outfit'] font-bold text-lg mb-6">{t('footer.contact_title')}</h3>
          <ul className="space-y-4 text-center md:text-left">
            <li className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3 text-gray-300 font-light text-sm">
              <svg className="w-5 h-5 text-[#dfa126] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Urb. Santa Rosa, Cusco, Peru</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3 text-gray-300 font-light text-sm">
              <svg className="w-5 h-5 text-[#dfa126] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <a href="mailto:inkalandexplorers@gmail.com" className="hover:text-white transition-colors">inkalandexplorers@gmail.com</a>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3 text-gray-300 font-light text-sm">
              <svg className="w-5 h-5 text-[#dfa126] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <a href="tel:+51999999999" className="hover:text-white transition-colors">+51 999 999 999</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Payment & Social */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-['Outfit'] font-bold text-lg mb-6">{t('footer.payment_title')}</h3>
          
          <a 
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=inkalandexplorers@gmail.com&item_name=Inkaland+Explorers+Custom+Payment&currency_code=USD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#0070ba] text-white font-bold text-xs py-2.5 px-6 rounded-xl hover:bg-[#003087] transition-colors shadow-lg mb-8 w-full max-w-[220px]"
          >
            <svg className="w-4 h-4 mr-2 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zM9.474 8.76l-.426 2.705h2.19c2.357 0 4.382-.796 4.966-3.805.213-1.096.06-1.922-.44-2.492-.516-.584-1.464-.863-2.827-.863H7.818L6.7 8.76h2.774z"/>
            </svg>
            {lang === 'es' ? 'Pago con PayPal' : 'Pay with PayPal'}
          </a>

          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#dfa126] hover:text-[#0b403a] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#dfa126] hover:text-[#0b403a] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-xs tracking-wider uppercase font-light">
        © {new Date().getFullYear()} | INKALAND EXPLORERS MACHU PICCHU E.I.R.L. | RUC: 20604773394
      </div>
    </footer>
  );
}
