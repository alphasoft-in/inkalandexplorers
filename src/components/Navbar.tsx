import React, { useState, useEffect } from 'react';

interface Props {
  lang: 'en' | 'es';
}

const Navbar: React.FC<Props> = ({ lang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const t = {
    en: {
      home: 'Home',
      destinations: 'Destinations',
      packages: 'Travel Packages',
      about: 'About Us',
      contact: 'Contact',
      langLabel: 'EN',
      switchLang: '/es',
      switchLabel: 'ES',
      destItems: [
        { label: 'Machu Picchu', href: '/en/destinations/machu-picchu' },
        { label: 'Cusco', href: '/en/destinations/cusco' },
        { label: 'Lima', href: '/en/destinations/lima' },
        { label: 'Paracas', href: '/en/destinations/paracas' },
        { label: 'Ica', href: '/en/destinations/ica' },
        { label: 'Arequipa', href: '/en/destinations/arequipa' },
        { label: 'Salkantay Trekking', href: '/en/destinations/salkantay' },
      ],
      pkgItems: [
        { label: 'Magical Cusco 5D/4N', href: '/en/packages/magical-cusco' },
        { label: 'Cusco Adventure 5D/4N', href: '/en/packages/cusco-adventure' },
        { label: 'Classic Cusco 4D/3N', href: '/en/packages/classic-cusco' },
      ]
    },
    es: {
      home: 'Inicio',
      destinations: 'Destinos',
      packages: 'Paquetes',
      about: 'Nosotros',
      contact: 'Contacto',
      langLabel: 'ES',
      switchLang: '/',
      switchLabel: 'EN',
      destItems: [
        { label: 'Machu Picchu', href: '/es/destinos/machu-picchu' },
        { label: 'Cusco', href: '/es/destinos/cusco' },
        { label: 'Lima', href: '/es/destinos/lima' },
        { label: 'Paracas', href: '/es/destinos/paracas' },
        { label: 'Ica', href: '/es/destinos/ica' },
        { label: 'Arequipa', href: '/es/destinos/arequipa' },
        { label: 'Salkantay Trekking', href: '/es/destinos/salkantay' },
      ],
      pkgItems: [
        { label: 'Cusco Mágico 5D/4N', href: '/es/paquetes/cusco-magico' },
        { label: 'Cusco Aventura 5D/4N', href: '/es/paquetes/cusco-aventura' },
        { label: 'Cusco Clásico 4D/3N', href: '/es/paquetes/cusco-clasico' },
      ]
    }
  };

  const currentT = t[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'bg-white py-3 shadow-xl shadow-black/5' 
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href={lang === 'en' ? '/' : '/es'} className="flex items-center">
              <img 
                src="/Logo Inkaland.webp" 
                alt="Logo" 
                className={`h-16 w-auto transition-all duration-700 ease-in-out hover:scale-105 ${!isScrolled ? 'brightness-0 invert' : ''}`} 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a 
              href={lang === 'en' ? '/' : '/es'} 
              className={`transition-all duration-500 text-sm font-semibold tracking-wide ${isScrolled ? 'text-[#0b403a] hover:text-[#dfa126]' : 'text-white hover:text-[#dfa126]'}`}
            >
              {currentT.home}
            </a>

            {/* Destinations Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('dest')}
                className={`flex items-center transition-all duration-500 text-sm font-semibold tracking-wide ${isScrolled ? 'text-[#0b403a] group-hover:text-[#dfa126]' : 'text-white group-hover:text-[#dfa126]'}`}
              >
                {currentT.destinations}
                <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === 'dest' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-lg shadow-2xl overflow-hidden py-2">
                  {currentT.destItems.map((item) => (
                    <a 
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-3 text-sm text-[#0b403a] hover:bg-[#F9F6EE] hover:text-[#dfa126] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Packages Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('pkg')}
                className={`flex items-center transition-all duration-500 text-sm font-semibold tracking-wide ${isScrolled ? 'text-[#0b403a] group-hover:text-[#dfa126]' : 'text-white group-hover:text-[#dfa126]'}`}
              >
                {currentT.packages}
                <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === 'pkg' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-lg shadow-2xl overflow-hidden py-2">
                  {currentT.pkgItems.map((item) => (
                    <a 
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-3 text-sm text-[#0b403a] hover:bg-[#F9F6EE] hover:text-[#dfa126] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a 
              href={`/${lang}/about`} 
              className={`transition-all duration-500 text-sm font-semibold tracking-wide ${isScrolled ? 'text-[#0b403a] hover:text-[#dfa126]' : 'text-white hover:text-[#dfa126]'}`}
            >
              {currentT.about}
            </a>
            
            <a href={`/${lang}/contact`} className="px-6 py-3 bg-[#dfa126] text-[#0b403a] rounded-full text-sm font-bold hover:bg-[#0b403a] hover:text-white transition-all duration-500 transform hover:scale-105 shadow-lg shadow-[#dfa126]/20">
              {currentT.contact}
            </a>

            {/* Language Switcher */}
            <div className={`flex items-center border-l ml-6 pl-6 transition-colors duration-700 ${isScrolled ? 'border-gray-200' : 'border-white/20'}`}>
              <a 
                href={currentT.switchLang}
                className={`text-xs font-bold transition-all duration-500 flex items-center ${isScrolled ? 'text-gray-400' : 'text-white/60'}`}
              >
                <span className={lang === 'en' ? (isScrolled ? 'text-[#0b403a]' : 'text-white') : ''}>EN</span>
                <span className="mx-2 opacity-30">|</span>
                <span className={lang === 'es' ? (isScrolled ? 'text-[#0b403a]' : 'text-white') : ''}>ES</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-all duration-700 p-2 ${isScrolled ? 'text-[#0b403a]' : 'text-white'}`}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0'} overflow-y-auto`}>
        <div className="px-6 py-12 space-y-8 text-center">
          <a href={lang === 'en' ? '/' : '/es'} className="block text-xl font-bold text-[#0b403a]">
            {currentT.home}
          </a>
          
          <div className="space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{currentT.destinations}</p>
            {currentT.destItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-lg font-semibold text-[#0b403a]">
                {item.label}
              </a>
            ))}
          </div>

          <a href={`/${lang}/about`} className="block text-xl font-bold text-[#0b403a]">
            {currentT.about}
          </a>
          
          <a href={`/${lang}/contact`} className="block text-xl font-bold text-[#dfa126]">
            {currentT.contact}
          </a>

          <div className="pt-8 flex justify-center space-x-8">
            <a href="/" className={`text-sm font-bold ${lang === 'en' ? 'text-[#0b403a]' : 'text-gray-400'}`}>EN</a>
            <a href="/es" className={`text-sm font-bold ${lang === 'es' ? 'text-[#0b403a]' : 'text-gray-400'}`}>ES</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
