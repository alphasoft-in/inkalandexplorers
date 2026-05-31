import React, { useState, useEffect } from 'react';

interface Props {
  lang: 'en' | 'es';
  forceScrolled?: boolean;
  currentPath?: string;
  activeTabOverride?: 'home' | 'destinations' | 'packages' | 'gallery' | 'about';
}

export default function Navbar({ lang, forceScrolled = false, currentPath = '', activeTabOverride }: Props) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const t = {
    en: {
      home: 'Home',
      destinations: 'Destinations',
      packages: 'Group Tours',
      about: 'About Us',
      gallery: 'Gallery',
      contact: 'Contact',
      langLabel: 'EN',
      switchLang: '/es',
      switchLabel: 'ES',
      destItems: [
        { label: 'Machu Picchu', href: '/destinations/machu-picchu' },
        { label: 'Cusco', href: '/destinations/cusco' },
        { label: 'Lima', href: '/destinations/lima' },
        { label: 'Paracas & Ica', href: '/destinations/paracas-ica' },
        { label: 'Arequipa', href: '/destinations/arequipa' },
        { label: 'Andes Trekking', href: '/destinations/andes-trekking' },
      ],
      pkgItems: [
        { label: 'ATV Abode of the Gods', href: '/tours/cuatrimotos-morada-dioses' },
      ]

    },
    es: {
      home: 'Inicio',
      destinations: 'Destinos',
      packages: 'Tours Grupales',
      about: 'Nosotros',
      gallery: 'Galería',
      contact: 'Contacto',
      langLabel: 'ES',
      switchLang: '/',
      switchLabel: 'EN',
      destItems: [
        { label: 'Machu Picchu', href: '/es/destinos/machu-picchu' },
        { label: 'Cusco', href: '/es/destinos/cusco' },
        { label: 'Lima', href: '/es/destinos/lima' },
        { label: 'Paracas e Ica', href: '/es/destinos/paracas-ica' },
        { label: 'Arequipa', href: '/es/destinos/arequipa' },
        { label: 'Andes Trekking', href: '/es/destinos/andes-trekking' },
      ],
      pkgItems: [
        { label: 'Cuatrimotos Morada Dioses', href: '/es/tours/cuatrimotos-morada-dioses' },
      ]

    }
  };

  const currentT = t[lang];

  const isActiveHome = activeTabOverride === 'home' || (!activeTabOverride && (currentPath === '/' || currentPath === '/es' || currentPath === '/es/'));
  const isActiveDestinations = activeTabOverride === 'destinations' || (!activeTabOverride && (currentPath.includes('/destinations') || currentPath.includes('/destinos')));
  const isActivePackages = activeTabOverride === 'packages' || (!activeTabOverride && currentPath.includes('/tours'));
  const isActiveGallery = activeTabOverride === 'gallery' || (!activeTabOverride && currentPath.includes('/gallery'));
  const isActiveAbout = activeTabOverride === 'about' || (!activeTabOverride && currentPath.includes('/about'));

  const getLinkClass = (isActive: boolean, isDropdown = false) => {
    const base = isDropdown 
      ? "flex items-center transition-all duration-500 text-sm font-semibold tracking-wide"
      : "transition-all duration-500 text-sm font-semibold tracking-wide";
    
    if (isActive) return `${base} text-[#dfa126]`;
    
    const inactiveColor = (isScrolled || mobileMenuOpen) ? "text-[#0b403a]" : "text-white";
    const hoverColor = isDropdown ? "group-hover:text-[#dfa126]" : "hover:text-[#dfa126]";
    return `${base} ${inactiveColor} ${hoverColor}`;
  };

  const getMobileLinkClass = (isActive: boolean) => {
    return `block text-base font-bold transition-colors ${isActive ? 'text-[#dfa126]' : 'text-[#0b403a]'}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (forceScrolled) {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };
    
    // Check immediately on mount in case we navigated back to a scrolled page
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceScrolled]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
        (isScrolled || mobileMenuOpen) 
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
                className={`h-16 w-auto transition-all duration-700 ease-in-out hover:scale-105 ${!(isScrolled || mobileMenuOpen) ? 'brightness-0 invert' : ''}`} 
              />
            </a>
          </div>

          {/* Desktop Navigation - Center Links */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <a 
              href={lang === 'en' ? '/' : '/es'} 
              className={getLinkClass(isActiveHome)}
            >
              {currentT.home}
            </a>

            {/* Destinations Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('dest')}
                className={getLinkClass(isActiveDestinations, true)}
              >
                {currentT.destinations}
                <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === 'dest' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-lg shadow-2xl overflow-hidden py-2">
                  {currentT.destItems.map((item) => {
                    const isActive = currentPath === item.href || currentPath === item.href + '/';
                    return (
                    <a 
                      key={item.label}
                      href={item.href}
                      className={`block px-6 py-3 text-sm transition-colors ${isActive ? 'bg-[#F9F6EE] text-[#dfa126] font-bold' : 'text-[#0b403a] hover:bg-[#F9F6EE] hover:text-[#dfa126]'}`}
                    >
                      {item.label}
                    </a>
                  )})}
                </div>
              </div>
            </div>

            {/* Packages Link */}
            <a 
              href={lang === 'en' ? '/tours' : '/es/tours'} 
              className={getLinkClass(isActivePackages)}
            >
              {currentT.packages}
            </a>

            <a 
              href={lang === 'en' ? '/gallery' : '/es/gallery'} 
              className={getLinkClass(isActiveGallery)}
            >
              {currentT.gallery}
            </a>

            <a 
              href={lang === 'en' ? '/about' : '/es/about'} 
              className={getLinkClass(isActiveAbout)}
            >
              {currentT.about}
            </a>
          </div>

          {/* Desktop Actions - Right Aligned */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href={lang === 'en' ? '/contact' : '/es/contact'} className="px-6 py-3 bg-[#dfa126] text-[#0b403a] rounded-full text-sm font-bold hover:bg-[#0b403a] hover:text-white transition-all duration-500 transform hover:scale-105 shadow-lg shadow-[#dfa126]/20">
              {currentT.contact}
            </a>

            {/* Language Switcher */}
            <div className={`flex items-center border-l pl-6 transition-colors duration-700 ${(isScrolled || mobileMenuOpen) ? 'border-gray-200' : 'border-white/20'}`}>
              <a 
                href={currentT.switchLang}
                className={`text-xs font-bold transition-all duration-500 flex items-center ${(isScrolled || mobileMenuOpen) ? 'text-gray-400' : 'text-white/60'}`}
              >
                <span className={lang === 'en' ? ((isScrolled || mobileMenuOpen) ? 'text-[#0b403a]' : 'text-white') : 'hover:text-[#dfa126]'}>EN</span>
                <span className="mx-2 opacity-30">|</span>
                <span className={lang === 'es' ? ((isScrolled || mobileMenuOpen) ? 'text-[#0b403a]' : 'text-white') : 'hover:text-[#dfa126]'}>ES</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-all duration-700 p-2 ${(isScrolled || mobileMenuOpen) ? 'text-[#0b403a]' : 'text-white'}`}
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
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible h-[calc(100vh-80px)]' : 'opacity-0 invisible h-0'} overflow-y-auto`}>
        <div className="px-6 py-4 space-y-2 text-center">
          <a href={lang === 'en' ? '/' : '/es'} onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass(isActiveHome)}>
            {currentT.home}
          </a>
          
          <div className="space-y-2 pt-2 border-t border-gray-100/50">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{currentT.destinations}</p>
            {currentT.destItems.map((item) => {
              const isActive = currentPath === item.href || currentPath === item.href + '/';
              return (
              <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`block text-[15px] font-semibold ${isActive ? 'text-[#dfa126]' : 'text-[#0b403a]'}`}>
                {item.label}
              </a>
            )})}
          </div>

          <div className="pt-2 border-t border-gray-100/50">
            <a href={lang === 'en' ? '/tours' : '/es/tours'} onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass(isActivePackages)}>
              {currentT.packages}
            </a>
          </div>

          <div className="pt-2 border-t border-gray-100/50">
            <a href={lang === 'en' ? '/gallery' : '/es/gallery'} onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass(isActiveGallery)}>
              {currentT.gallery}
            </a>
          </div>

          <div className="pt-2 border-t border-gray-100/50">
            <a href={lang === 'en' ? '/about' : '/es/about'} onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass(isActiveAbout)}>
              {currentT.about}
            </a>
          </div>
          
          <div className="pt-2">
            <a href={lang === 'en' ? '/contact' : '/es/contact'} onClick={() => setMobileMenuOpen(false)} className="inline-block px-6 py-2 bg-[#dfa126] text-[#0b403a] rounded-full text-sm font-bold">
              {currentT.contact}
            </a>
          </div>

          <div className="pt-2 flex justify-center space-x-8 pb-2">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className={`text-sm font-bold ${lang === 'en' ? 'text-[#0b403a]' : 'text-gray-400'}`}>EN</a>
            <a href="/es" onClick={() => setMobileMenuOpen(false)} className={`text-sm font-bold ${lang === 'es' ? 'text-[#0b403a]' : 'text-gray-400'}`}>ES</a>
          </div>
        </div>
      </div>
    </nav>
  );
}


