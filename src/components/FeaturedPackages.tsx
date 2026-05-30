import React from 'react';
import { packages } from '../data/packages';


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
          {packages.filter(pkg => pkg.en.title.toLowerCase().includes('private')).map((pkg) => (
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
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="font-['Outfit'] text-xl font-bold text-[#0b403a] group-hover:text-[#dfa126] transition-colors">
                      {pkg[lang].title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 font-light line-clamp-2">
                    {pkg[lang].description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href={lang === 'es' ? `/es/tours/${pkg.slug}` : `/tours/${pkg.slug}`}
                      className="block w-full border border-[#0b403a] text-[#0b403a] text-center py-3 rounded-xl font-medium hover:bg-[#0b403a] hover:text-white transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center justify-center"
                    >
                      {lang === 'en' ? 'Details' : 'Detalles'}
                    </a>
                    <a 
                      href={`https://wa.me/51951231364?text=${encodeURIComponent(lang === 'en' ? `Hello Inkaland Explorers, I'd like to inquire about the tour: ${pkg.en.title}` : `Hola Inkaland Explorers, me gustaría consultar sobre el tour: ${pkg.es.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#25D366] text-white text-center py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      {lang === 'en' ? 'Consult' : 'Consultar'}
                    </a>
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
