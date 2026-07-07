import React from 'react';
import { useTranslations } from '../i18n/utils';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaPaypal } from 'react-icons/fa6';

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
            <li><a href={lang === 'en' ? '/destinations' : '/es/destinos'} className="text-gray-300 hover:text-[#dfa126] transition-colors font-light text-sm">{t('nav.destinations')}</a></li>
            <li><a href={lang === 'en' ? '/packages' : '/es/packages'} className="text-gray-300 hover:text-[#dfa126] transition-colors font-light text-sm">{t('nav.packages')}</a></li>
            <li><a href={`${basePrefix}/about`} className="text-gray-300 hover:text-[#dfa126] transition-colors font-light text-sm">{t('nav.about')}</a></li>
            <li><a href={`${basePrefix}/esnna`} className="text-gray-300 hover:text-[#dfa126] transition-colors font-light text-sm">{t('nav.esnna')}</a></li>
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
              <div className="flex flex-col items-center md:items-start space-y-1">
                <a href="mailto:reservas@inkalandexplorers.com" className="hover:text-white transition-colors text-center md:text-left">reservas@inkalandexplorers.com</a>
                <a href="mailto:inkalandexplorers@gmail.com" className="hover:text-white transition-colors text-center md:text-left">inkalandexplorers@gmail.com</a>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3 text-gray-300 font-light text-sm">
              <svg className="w-5 h-5 text-[#dfa126] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <div className="flex flex-col items-center md:items-start space-y-1">
                <a href="tel:+51972438838" className="hover:text-white transition-colors text-center md:text-left">+51-972 438 838</a>
                <a href="tel:+51979333691" className="hover:text-white transition-colors text-center md:text-left">+51-979 333 691</a>
              </div>
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
            <FaPaypal className="w-4 h-4 mr-2 shrink-0" />
            {lang === 'es' ? 'Pago con PayPal' : 'Pay with PayPal'}
          </a>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/1HLJ9CBKaX/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#dfa126] hover:text-[#0b403a] transition-all" title="Facebook">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/inkalandexplorers?igsh=dzd1bWdjaTQycHlu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#dfa126] hover:text-[#0b403a] transition-all" title="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@inkalandexplorers?_r=1&_t=ZS-97pE3zpueSF" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#dfa126] hover:text-[#0b403a] transition-all" title="TikTok">
              <FaTiktok className="w-[18px] h-[18px]" />
            </a>
            <a href="https://youtube.com/@inkalandexplorers?si=FUu0IW5fNkTsbk1x" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#dfa126] hover:text-[#0b403a] transition-all" title="YouTube">
              <FaYoutube className="w-5 h-5" />
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
