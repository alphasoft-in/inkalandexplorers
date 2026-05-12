import React from 'react';

interface Package {
  id: number;
  image: string;
  price: string;
  en: {
    title: string;
    description: string;
  };
  es: {
    title: string;
    description: string;
  };
}

const packages: Package[] = [
  {
    id: 1,
    image: '/tour-humantay.png',
    price: '110',
    en: {
      title: 'Humantay Lake Private Tour',
      description: 'Flexible & Private experience to the turquoise glacial lake from Cusco.'
    },
    es: {
      title: 'Tour Privado Laguna Humantay',
      description: 'Experiencia flexible y privada a la laguna turquesa desde Cusco.'
    }
  },
  {
    id: 2,
    image: '/hero-machu-picchu.png',
    price: '350',
    en: {
      title: 'Machu Picchu Private Tour Full Day',
      description: 'The ultimate exclusive day trip to the Lost City of the Incas.'
    },
    es: {
      title: 'Tour Privado Machu Picchu Full Day',
      description: 'El viaje exclusivo de un día a la Ciudad Perdida de los Incas.'
    }
  },
  {
    id: 3,
    image: '/tour-sacred-valley.png',
    price: '440',
    en: {
      title: 'Machu Picchu & Sacred Valley 2 Days',
      description: 'Two-day private exploration of the most iconic Inca sites.'
    },
    es: {
      title: 'Machu Picchu y Valle Sagrado 2 Días',
      description: 'Exploración privada de dos días por los sitios Incas más icónicos.'
    }
  },
  {
    id: 4,
    image: '/tour-maras-moray.png',
    price: '65',
    en: {
      title: 'Maras Moray Private Tour',
      description: 'Half day experience at the salt mines and circular terraces.'
    },
    es: {
      title: 'Tour Privado Maras Moray',
      description: 'Experiencia de medio día en las minas de sal y terrazas circulares.'
    }
  },
  {
    id: 5,
    image: '/tour-palccoyo.png',
    price: '110',
    en: {
      title: 'Palccoyo Rainbow Mountain',
      description: 'A less crowded, equally stunning colorful mountain experience.'
    },
    es: {
      title: 'Montaña Palccoyo',
      description: 'Una experiencia menos concurrida e igualmente impresionante.'
    }
  },
  {
    id: 6,
    image: '/tour-south-valley.png',
    price: '63',
    en: {
      title: 'South Valley Private Tour',
      description: 'Exclusive visit to Tipón, Pikillaqta & Andahuaylillas.'
    },
    es: {
      title: 'Tour Privado Valle Sur',
      description: 'Visita exclusiva a Tipón, Pikillaqta y Andahuaylillas.'
    }
  },
  {
    id: 7,
    image: '/tour-sacred-valley.png',
    price: '70',
    en: {
      title: 'Sacred Valley Private Tour',
      description: 'Full day with local guide through Pisac, Ollantaytambo & Chinchero.'
    },
    es: {
      title: 'Tour Privado Valle Sagrado',
      description: 'Día completo con guía local por Pisac, Ollantaytambo y Chinchero.'
    }
  },
  {
    id: 8,
    image: '/tour-vinicunca.png',
    price: '110',
    en: {
      title: 'Rainbow Mountain (Vinicunca)',
      description: 'The legendary multi-colored mountain adventure from Cusco.'
    },
    es: {
      title: 'Montaña de Colores (Vinicunca)',
      description: 'La legendaria aventura a la montaña multicolor desde Cusco.'
    }
  },
  {
    id: 9,
    image: '/hero-cusco.png',
    price: '50',
    en: {
      title: 'Private Cusco City Tour Half Day',
      description: 'Exclusive local experience through the heart of the Inca capital.'
    },
    es: {
      title: 'Cusco City Tour Privado Medio Día',
      description: 'Experiencia local exclusiva por el corazón de la capital Inca.'
    }
  }
];

interface Props {
  lang: 'en' | 'es';
}

const FeaturedPackages: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-[#F9F6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#0b403a] mb-4">
            {lang === 'en' ? 'Featured Private Experiences' : 'Experiencias Privadas Destacadas'}
          </h2>
          <div className="h-1.5 w-24 bg-[#dfa126] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            {lang === 'en' 
              ? 'Discover our hand-picked selection of high-end private tours designed for the discerning traveler.' 
              : 'Descubre nuestra selección curada de tours privados de alta gama diseñados para el viajero exigente.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-[#dfa126]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0b403a]/10 flex flex-col h-full shadow-sm"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg[lang].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-[#dfa126] text-black px-3 py-1.5 rounded-full text-xs font-black shadow-lg">
                  {lang === 'en' ? 'From' : 'Desde'} ${pkg.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-['Outfit'] text-xl font-bold text-[#0b403a] mb-2 group-hover:text-[#dfa126] transition-colors">
                  {pkg[lang].title}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed flex-grow">
                  {pkg[lang].description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-[#dfa126] text-xs font-bold tracking-widest uppercase">{lang === 'en' ? 'Private Experience' : 'Experiencia Privada'}</span>
                  <div className="text-[#0b403a] group-hover:translate-x-1 transition-transform group-hover:text-[#dfa126]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
