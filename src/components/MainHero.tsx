import React, { useState, useEffect } from 'react';

interface SliderItem {
  id: number;
  image: string;
  en: {
    title: string;
    subtitle: string;
    cta: string;
    href?: string;
  };
  es: {
    title: string;
    subtitle: string;
    cta: string;
    href?: string;
  };
}

const sliderData: SliderItem[] = [
  {
    id: 1,
    image: '/hero-machu-picchu.png',
    en: {
      title: 'Magical Machu Picchu 5D/4N',
      subtitle: 'A mystical journey through the Sacred Valley and the wonders of Machu Picchu.',
      cta: 'View Program',
      href: '/tours/magical-machu-picchu-5d-4n'
    },
    es: {
      title: 'Machu Picchu Mágico 5D/4N',
      subtitle: 'Un viaje místico por el Valle Sagrado y las maravillas de Machu Picchu.',
      cta: 'Ver Programa',
      href: '/es/tours/magical-machu-picchu-5d-4n'
    }
  },
  {
    id: 2,
    image: '/hero-cusco.png',
    en: {
      title: 'Cusco Adventure 4D/3N',
      subtitle: 'High-adrenaline experiences in the heart of the Inca Empire.',
      cta: 'View Program',
      href: '/tours/cusco-adventure-4d-3n'
    },
    es: {
      title: 'Cusco Aventura 4D/3N',
      subtitle: 'Experiencias de pura adrenalina en el corazón del Imperio Inca.',
      cta: 'Ver Programa',
      href: '/es/tours/cusco-adventure-4d-3n'
    }
  },
  {
    id: 3,
    image: '/hero-salkantay.png',
    en: {
      title: 'Andes Trekking',
      subtitle: 'The ultimate trekking experience through glacial peaks and cloud forests.',
      cta: 'Explore Trek',
      href: '/destinations/andes-trekking'
    },
    es: {
      title: 'Andes Trekking',
      subtitle: 'La experiencia definitiva de trekking por picos glaciares y selva alta.',
      cta: 'Explorar Trek',
      href: '/es/destinos/andes-trekking'
    }
  },
  {
    id: 4,
    image: '/hero-paracas.png',
    en: {
      title: 'Paracas & Ica Wonders',
      subtitle: 'Discover the red sand beaches and the magic of the desert oases.',
      cta: 'View Coastal',
      href: '/destinations/paracas-ica'
    },
    es: {
      title: 'Paracas e Ica Mágico',
      subtitle: 'Descubre las playas de arena roja y la magia de los oasis del desierto.',
      cta: 'Ver Costa',
      href: '/es/destinos/paracas-ica'
    }
  },
  {
    id: 5,
    image: '/hero-colca.png',
    en: {
      title: 'Arequipa & Colca Canyon',
      subtitle: 'Witness the majestic flight of the Condor in the deepest canyon.',
      cta: 'Explore Arequipa',
      href: '/destinations/arequipa'
    },
    es: {
      title: 'Arequipa y Cañón del Colca',
      subtitle: 'Presencia el majestuoso vuelo del Cóndor en el cañón más profundo.',
      cta: 'Explorar Arequipa',
      href: '/es/destinos/arequipa'
    }
  }
];

interface Props {
  lang: 'en' | 'es';
}

const MainHero: React.FC<Props> = ({ lang }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderData.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + sliderData.length) % sliderData.length);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {sliderData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image - Clean and Static */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide[lang].title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative flex h-full items-center justify-center px-4 sm:px-8">
            <div className={`max-w-4xl text-center transition-all duration-1000 delay-300 transform ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h2 className="mb-4 font-['Outfit'] text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
                <span className="block">{slide[lang].title}</span>
                <span className="mt-3 block h-1.5 w-20 sm:w-24 mx-auto bg-[#dfa126] rounded-full" />
              </h2>
              <p className="mb-8 mx-auto max-w-2xl text-base font-light text-gray-200 sm:text-xl md:text-2xl px-2 sm:px-0">
                {slide[lang].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full px-6 sm:px-0">
                <a
                  href={slide[lang].href || `/${lang === 'en' ? '' : 'es/'}packages`}
                  className="w-full sm:w-auto text-center rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-bold text-[#0b403a] shadow-xl shadow-white/10 transition-all duration-300 transform hover:scale-105 hover:bg-[#dfa126] hover:text-white"
                >
                  {slide[lang].cta}
                </a>
                <a
                  href={`https://wa.me/51972438838?text=${encodeURIComponent(
                    lang === 'en' 
                      ? `Hello Inkaland Explorers, I'd like to inquire about: ${slide[lang].title}`
                      : `Hola Inkaland Explorers, me gustaría consultar sobre: ${slide[lang].title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center rounded-full border border-white/30 bg-black/30 backdrop-blur-md px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-black/50"
                >
                  {lang === 'en' ? 'Contact Us' : 'Contáctanos'}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white transition-all hover:bg-black/50 hidden sm:block"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white transition-all hover:bg-black/50 hidden sm:block"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === current ? 'w-10 bg-[#dfa126]' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainHero;
