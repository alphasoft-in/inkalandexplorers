import React, { useMemo } from 'react';
import { packages } from '../data/packages';

interface Props {
  lang: 'en' | 'es';
  excludeId?: number;
  limit?: number;
}

const RecommendedPackages: React.FC<Props> = ({ lang, excludeId, limit = 3 }) => {
  const recommended = useMemo(() => {
    // Filter out current package, filter only private packages, and shuffle
    const filtered = packages.filter(pkg => pkg.id !== excludeId && pkg.en.title.toLowerCase().includes('private'));
    return [...filtered].sort(() => 0.5 - Math.random()).slice(0, limit);
  }, [excludeId, limit]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#dfa126] uppercase tracking-[0.2em] mb-4">
            {lang === 'en' ? 'Beyond Your Destination' : 'Más Allá de tu Destino'}
          </h2>
          <h3 className="text-4xl font-bold text-[#0b403a] font-['Outfit']">
            {lang === 'en' ? 'Recommended Experiences' : 'Experiencias Recomendadas'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommended.map((pkg) => (
            <div 
              key={pkg.id} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              <a href={lang === 'es' ? `/es/tours/${pkg.slug}` : `/tours/${pkg.slug}`} className="block relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg[lang].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-4 py-1 bg-white/90 backdrop-blur-md rounded-full text-[#0b403a] text-sm font-bold shadow-lg">
                  {lang === 'en' ? 'From' : 'Desde'} ${pkg.price}
                </div>
              </a>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-[#dfa126] text-xs font-bold uppercase tracking-widest mb-3">
                  <span className="mr-2">{pkg.duration}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span>{pkg.difficulty}</span>
                </div>
                <a href={lang === 'es' ? `/es/tours/${pkg.slug}` : `/tours/${pkg.slug}`} className="block">
                  <h4 className="font-['Outfit'] text-xl font-bold text-[#0b403a] group-hover:text-[#dfa126] transition-colors mb-3">
                    {pkg[lang].title}
                  </h4>
                </a>
                <p className="text-gray-500 text-sm mb-6 font-light line-clamp-2 leading-relaxed flex-grow">
                  {pkg[lang].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a 
                    href={lang === 'es' ? `/es/tours/${pkg.slug}` : `/tours/${pkg.slug}`}
                    className="flex items-center justify-center text-[#0b403a] font-bold text-xs border border-[#0b403a]/20 py-3 rounded-xl hover:bg-[#0b403a] hover:text-white transition-all duration-300"
                  >
                    {lang === 'en' ? 'Details' : 'Detalles'}
                    <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a 
                    href={`https://wa.me/51972438838?text=${encodeURIComponent(lang === 'en' ? `Hello Inkaland Explorers, I'd like to inquire about the tour: ${pkg.en.title}` : `Hola Inkaland Explorers, me gustaría consultar sobre el tour: ${pkg.es.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-[#25D366] text-white font-bold text-xs py-3 rounded-xl hover:bg-[#128C7E] transition-all duration-300 gap-2 shadow-lg shadow-[#25D366]/20"
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

export default RecommendedPackages;
