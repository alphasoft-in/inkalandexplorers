export type SingleDayItinerary = { time: string; activity: string };
export type MultiDayItinerary = { day: number; title: string; activities: { time: string; description: string }[] };

export interface Package {
  id: number;
  slug: string;
  image: string;
  heroImage?: string;
  price: string;
  duration: string;
  altitude?: string;
  difficulty?: string;
  type?: string;
  latitude?: number | string;
  longitude?: number | string;
  departure?: string;
  destination: string;
  en: {


    title: string;
    description: string;
    overview: string;
    itinerary: (SingleDayItinerary | MultiDayItinerary)[];
    includes: string[];
    excludes: string[];
    packing: string[];
    highlights?: string[];
    tips?: string[];

  };
  es: {
    title: string;
    description: string;
    overview: string;
    itinerary: (SingleDayItinerary | MultiDayItinerary)[];
    includes: string[];
    excludes: string[];
    packing: string[];
    highlights?: string[];
    tips?: string[];

  };
}

export const packages: Package[] = [
  {
    id: 1,
    slug: 'humantay-lake-private-tour',
    image: '/private/humantay-lake.png',
    price: '110',
    duration: 'Full Day',
    altitude: '2850m – 4200m',
    difficulty: 'Moderate',
    type: 'Trekking | Adventure',
    departure: 'Plaza Regocijo – Kusipata',
    destination: 'Cusco | Humantay Lake',

    latitude: '-13.4217',
    longitude: '-72.620',
    en: {
      title: 'Humantay Lake Private Tour from Cusco',
      description: 'Flexible & Private experience to the turquoise glacial lake from Cusco.',
      overview: '<p class="mb-4 mt-0">Humantay Lake is a spectacular high-altitude destination in the Peruvian Andes, famous for its turquoise waters at the base of the Salkantay Glacier. With Inkaland Explorers, our private tour from Cusco offers a comfortable, flexible, and personalized experience.</p><p class="mb-8 mt-0">Enjoy a scenic private drive through Andean communities, followed by a rewarding hike at your own pace. Unlike crowded group tours, our professional local guides ensure proper acclimatization and a peaceful visit to this sacred lagoon, away from mass tourism.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Why Choose Inkaland Explorers?</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">🏔️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Private Guided Experience at High Altitude</h4><p class="text-xs text-gray-600 leading-snug mb-0">Explore Humantay Lake at 4,200 meters with a professional private guide who shares local Andean knowledge, legends, and natural insights.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚙</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Comfortable Private Transport</h4><p class="text-xs text-gray-600 leading-snug mb-0">Enjoy door-to-door transportation from Cusco to Soraypampa, including breakfast and lunch.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🥾</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Safer Hike with Professional Equipment</h4><p class="text-xs text-gray-600 leading-snug mb-0">Carbon trekking poles are included to support your ascent and descent on steep sections.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⏱️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Flexible Pace & Personalized Time</h4><p class="text-xs text-gray-600 leading-snug mb-0">Your private hike allows for flexible pacing, photo stops, and extra time at the turquoise lagoon.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⛑️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">High-Altitude Safety Measures Included</h4><p class="text-xs text-gray-600 leading-snug mb-0">Oxygen and a first-aid kit are always available, ensuring peace of mind.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🗺️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Easy Combination with Other Experiences</h4><p class="text-xs text-gray-600 leading-snug mb-0">Seamlessly combine this tour with Sacred Valley or Machu Picchu itineraries.</p></div></div></div><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8"><div class="flex items-center gap-2 text-[#0b403a] mb-2"><svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg><span><strong>Note:</strong> 2 important aspects of the private tour</span></div><ul class="space-y-1.5 mb-0"><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>Your guide will accompany you at all times throughout the entire tour, providing support.</span></li><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>We leave at 3:00 am from Cusco to avoid crowds and offer you a more relaxed experience.</span></li></ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Weather for Humantay Lake Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"><div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌧️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - APR</h4><p class="text-xs text-gray-700 mb-0">There are slippery paths.</p></div></div><div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">☀️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4><p class="text-xs text-gray-700 mb-0">Offers clearer skies and better trail conditions.</p></div></div><div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🏔️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude</h4><p class="text-xs text-gray-700 mb-0">4,200 meters (13,780 feet)</p></div></div><div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌡️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperature</h4><p class="text-xs text-gray-700 mb-0">-2°C to 12°C (28°F to 54°F)</p></div></div><div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2"><div class="text-2xl">❄️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Gear & Conditions</h4><p class="text-xs text-gray-700 mb-0">There\'s a chance of snow year-round. In November and April, pack waterproofs and sturdy boots.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Considerations for Your Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⛰️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude Acclimatization</h4><p class="text-xs text-gray-700 leading-snug mb-0">Humantay Lake is at 4,200m. We recommend 2–3 days in Cusco to acclimatize.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🧥</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Weather-Ready Clothing</h4><p class="text-xs text-gray-700 leading-snug mb-0">Dress in layers: waterproof jacket, warm clothing, sun protection, and sturdy shoes.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">💧</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Hydration & Light Packing</h4><p class="text-xs text-gray-700 leading-snug mb-0">Carry personal water bottles. Packing light helps you enjoy the hike more comfortably.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🌿</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Respect the Environment</h4><p class="text-xs text-gray-700 leading-snug mb-0">Avoid swimming and littering in this sacred site to ensure responsible behavior.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg md:col-span-2"><div class="text-xl shrink-0 mt-0.5">✨</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Optional Tour Extensions</h4><p class="text-xs text-gray-700 leading-snug mb-0">Enhance your experience by combining this tour with Maras & Moray or other Sacred Valley highlights.</p></div></div></div>',
      itinerary: [
        { time: '03:00 AM', activity: 'Pickup at your Cusco accommodation' },
        { time: '05:30 AM', activity: 'Mollepata (2,850m) – Brief breakfast stop' },
        { time: '07:00 AM', activity: 'Soraypampa (3,850m) – Start of the hike' },
        { time: '09:00 AM', activity: 'Humantay Lake (4,200m) – Free time to explore and photograph' },
        { time: '12:00 PM', activity: 'Mollepata – Lunch' },
        { time: '~05:00 PM', activity: 'Return to Cusco' }
      ],
      includes: [
        'Professional guide',
        'First aid kit',
        'Oxygen tank',
        'Breakfast & lunch',
        'Private transport',
        'Carbon trekking poles',
        'Admission ticket'
      ],
      excludes: [
        'Tips (optional)',
        'Personal emergency horse'
      ],
      packing: [
        'Water',
        'Snacks',
        'Waterproof hiking boots',
        'Thermal layers (hat, gloves, fleece)',
        'Rain poncho',
        'Sunscreen & sunglasses',
        'Basic medicine',
        'Trekking poles'
      ],
      highlights: [
        'Private guide with local Andean knowledge',
        'Door-to-door private transport from Cusco',
        'Carbon trekking poles included',
        'Flexible pace & extra time at the lagoon',
        'Oxygen & first aid kit on hand',
        'Easily combined with Machu Picchu, Maras & Moray, or Sacred Valley tours'
      ],
      tips: [
        'Acclimatize 2–3 days in Cusco before the hike',
        'Best season: April–November',
        'Humantay Lake is a sacred Andean site — no swimming or littering',
        'Rainy season (December–March): muddy paths, reduced visibility'
      ]
    },
    es: {
      title: 'Tour Privado Laguna Humantay desde Cusco',
      description: 'Experiencia flexible y privada a la laguna turquesa desde Cusco.',
      overview: '<p class="mb-4 mt-0">La Laguna Humantay es un espectacular destino de altura en los Andes peruanos, famosa por sus aguas turquesas en la base del Glaciar Salkantay. Con Inkaland Explorers, nuestro tour privado desde Cusco le ofrece una experiencia cómoda, flexible y personalizada.</p><p class="mb-8 mt-0">Disfrute de un viaje panorámico a través de comunidades andinas, seguido de una caminata a su propio ritmo. A diferencia de los tours grupales, nuestros guías locales profesionales aseguran una aclimatación adecuada y una visita tranquila a esta laguna sagrada, lejos del turismo de masas.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">¿Por qué Elegir a Inkaland Explorers?</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">🏔️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Experiencia Guiada Privada</h4><p class="text-xs text-gray-600 leading-snug mb-0">Explore la Laguna Humantay a 4,200 metros con un guía privado que comparte el conocimiento andino local y leyendas.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚙</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Cómodo Transporte Privado</h4><p class="text-xs text-gray-600 leading-snug mb-0">Transporte puerta a puerta desde Cusco, incluyendo desayuno y almuerzo para su comodidad.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🥾</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Caminata Más Segura</h4><p class="text-xs text-gray-600 leading-snug mb-0">Se incluyen bastones de trekking para apoyar su ascenso y descenso en tramos empinados.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⏱️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Ritmo Flexible y Tiempo Personalizado</h4><p class="text-xs text-gray-600 leading-snug mb-0">Su caminata privada permite un ritmo flexible, paradas para tomar fotos y tiempo extra en la laguna.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⛑️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Seguridad para Gran Altitud</h4><p class="text-xs text-gray-600 leading-snug mb-0">Oxígeno y un botiquín de primeros auxilios están siempre disponibles durante el recorrido.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🗺️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Fácil Combinación de Tours</h4><p class="text-xs text-gray-600 leading-snug mb-0">Combine este tour perfectamente con los itinerarios del Valle Sagrado o Machu Picchu.</p></div></div></div><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8"><div class="flex items-center gap-2 text-[#0b403a] mb-2"><svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg><span><strong>Nota:</strong> 2 aspectos importantes del tour privado</span></div><ul class="space-y-1.5 mb-0"><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>Su guía lo acompañará en todo momento brindándole apoyo constante y sin prisas.</span></li><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>Salimos a las 3:00 am desde Cusco para evitar las multitudes y ofrecerle una experiencia más auténtica.</span></li></ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Clima para el Tour Laguna Humantay</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"><div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌧️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - ABR</h4><p class="text-xs text-gray-700 mb-0">Los senderos pueden estar resbaladizos.</p></div></div><div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">☀️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4><p class="text-xs text-gray-700 mb-0">Ofrece cielos más despejados y mejores condiciones en el sendero.</p></div></div><div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🏔️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitud</h4><p class="text-xs text-gray-700 mb-0">4,200 metros (13,780 pies)</p></div></div><div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌡️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperatura</h4><p class="text-xs text-gray-700 mb-0">-2°C a 12°C (28°F a 54°F)</p></div></div><div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2"><div class="text-2xl">❄️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Equipamiento y Condiciones</h4><p class="text-xs text-gray-700 mb-0">Probabilidad de nieve todo el año. En noviembre y abril, empaque ropa impermeable.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Consideraciones para su Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⛰️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Aclimatación a la Altitud</h4><p class="text-xs text-gray-700 leading-snug mb-0">La Laguna está a 4,200m. Recomendamos 2–3 días en Cusco para aclimatarse y reducir el mal de altura.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🧥</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Ropa para el Clima</h4><p class="text-xs text-gray-700 leading-snug mb-0">Vístase en capas: chaqueta impermeable, ropa abrigadora, protección solar y zapatos resistentes.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">💧</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Hidratación y Equipaje Ligero</h4><p class="text-xs text-gray-700 leading-snug mb-0">Las comidas están incluidas. Viajar ligero ayuda a disfrutar la caminata y conservar energía.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🌿</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Respeto Ambiental</h4><p class="text-xs text-gray-700 leading-snug mb-0">Respete esta herencia evitando nadar y tirar basura, asegurando un comportamiento responsable.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg md:col-span-2"><div class="text-xl shrink-0 mt-0.5">✨</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Tours Opcionales Combinados</h4><p class="text-xs text-gray-700 leading-snug mb-0">Mejore su experiencia combinando este tour con Maras y Moray u otros atractivos del Valle Sagrado.</p></div></div></div>',
      itinerary: [
        { time: '03:00 AM', activity: 'Recojo en su alojamiento en Cusco' },
        { time: '05:30 AM', activity: 'Mollepata (2,850m) – Breve parada para el desayuno' },
        { time: '07:00 AM', activity: 'Soraypampa (3,850m) – Inicio de la caminata' },
        { time: '09:00 AM', activity: 'Laguna Humantay (4,200m) – Tiempo libre para explorar y fotografiar' },
        { time: '12:00 PM', activity: 'Mollepata – Almuerzo' },
        { time: '~05:00 PM', activity: 'Retorno a Cusco' }
      ],
      includes: [
        'Guía profesional',
        'Botiquín de primeros auxilios',
        'Tanque de oxígeno',
        'Desayuno y almuerzo',
        'Transporte privado',
        'Bastones de trekking de carbono',
        'Boleto de entrada'
      ],
      excludes: [
        'Propinas (opcional)',
        'Caballo de emergencia personal'
      ],
      packing: [
        'Agua',
        'Snacks',
        'Botas de senderismo impermeables',
        'Capas térmicas (gorro, guantes, chaqueta polar)',
        'Poncho para la lluvia',
        'Protector solar y gafas de sol',
        'Medicina básica',
        'Bastones de trekking'
      ],
      highlights: [
        'Guía privado con conocimiento local andino',
        'Transporte privado de puerta a puerta desde Cusco',
        'Bastones de trekking de carbono incluidos',
        'Ritmo flexible y tiempo extra en la laguna',
        'Oxígeno y botiquín de primeros auxilios disponibles',
        'Fácilmente combinable con los tours a Machu Picchu, Maras y Moray o el Valle Sagrado'
      ],
      tips: [
        'Aclimátese de 2 a 3 días en Cusco antes de la caminata',
        'Mejor época: abril a noviembre',
        'La Laguna Humantay es un sitio sagrado andino: prohibido nadar o tirar basura',
        'Temporada de lluvias (diciembre a marzo): caminos embarrados, visibilidad reducida'
      ]
    }

  },
  {
    id: 2,
    slug: 'machu-picchu-full-day',
    image: '/private/machu-picchu.png',
    price: '350',

    duration: 'Full Day',
    altitude: '2,040m – 2,430m',
    difficulty: 'Moderate',
    type: 'Cultural | Private',
    departure: 'Plaza Regocijo – Kusipata',
    destination: 'Machu Picchu',
    latitude: -13.1631,
    longitude: -72.5450,
    en: {
      title: 'Machu Picchu Private Tour Full Day',
      description: 'The ultimate exclusive day trip to the Lost City of the Incas.',
      overview: '<p class="mb-4 mt-0">Our Machu Picchu Private Tour Full Day from Cusco is designed for travelers who want a personalized, flexible, and crowd-free experience at one of the world’s most iconic archaeological sites. Instead of following a fixed group schedule, you explore Machu Picchu at your own pace with a licensed private guide focused exclusively on you and your travel interests.</p><p class="mb-4 mt-0">Throughout the journey, you travel by tourist-class train through the Sacred Valley and access Machu Picchu with official entrance tickets already arranged. Once inside the citadel, your private guide leads a tailored visit through agricultural terraces, ceremonial temples, and sacred spaces, explaining the history, architecture, and spiritual meaning of Machu Picchu in a clear and engaging way.</p><p class="mb-8 mt-0">Because this is a private tour, you enjoy more time for photos, questions, and exploration, without rushing or adapting to group rhythms. This full-day private experience from Cusco is ideal for couples, families, photographers, and travelers who value comfort, flexibility, and deeper cultural connection.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Why Travel with Inkaland Explorers to Machu Picchu?</h3><p class="mb-4 mt-0">Travel to Machu Picchu by train with a trusted local agency that specializes in private and fully personalized tours. At Inkaland Explorers, we combine local expertise, flexible itineraries, and smooth logistics to deliver a high-quality Machu Picchu Private Tour by train from Cusco.</p><p class="mb-4 mt-0">Throughout the journey, you travel comfortably through the Sacred Valley and explore Machu Picchu with a licensed private guide who focuses exclusively on you. As a result, you move at your own pace, avoid unnecessary waiting, and gain a deeper understanding of the history, architecture, and spiritual meaning of the Inca citadel.</p><p class="mb-4 mt-0">Moreover, we carefully coordinate transportation, train schedules, and entrance tickets, so your Machu Picchu experience flows seamlessly from start to finish. Travelers consistently highlight our organization, professionalism, and personalized service in verified TripAdvisor reviews.</p><p class="mb-8 mt-0">Ultimately, when you choose Inkaland Explorers, you are not just booking a Machu Picchu tour by train—you are choosing a private experience guided by local experts who genuinely care about your journey.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Advantages: Machu Picchu Private Tour Full Day</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">🗺️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Private Expert-Guided Experience</h4><p class="text-xs text-gray-600 leading-snug mb-0">Explore Machu Picchu with a licensed private local guide who focuses entirely on you. During a personalized 2-hour guided visit, learn about Inca history, architecture, and symbolism at your own pace—without crowds or group interruptions.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚙</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Door-to-Door Private Transportation</h4><p class="text-xs text-gray-600 leading-snug mb-0">Travel comfortably with private transportation from your hotel in Cusco to Ollantaytambo and back. This door-to-door service guarantees a smooth, stress-free journey throughout the day.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚂</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Scenic Machu Picchu Train Journey</h4><p class="text-xs text-gray-600 leading-snug mb-0">Enjoy a tourist-class train ride through the Sacred Valley, following the Urubamba River and passing mountains, valleys, and cloud forest landscapes—an essential part of the Machu Picchu by train experience.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⏱️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Flexible Pace & Free Time</h4><p class="text-xs text-gray-600 leading-snug mb-0">Unlike shared tours, this Machu Picchu private full-day tour offers flexibility. Enjoy free time in Aguas Calientes and a relaxed schedule adapted to your preferences and official entry time.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🎟️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">All Essentials Included – No Hidden Costs</h4><p class="text-xs text-gray-600 leading-snug mb-0">This private tour includes official Machu Picchu entrance tickets, private guide, train tickets, private transportation, and bus access, ensuring transparency and excellent value.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">✨</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Optional Andean Extensions</h4><p class="text-xs text-gray-600 leading-snug mb-0">Easily combine your private Machu Picchu tour with Rainbow Mountain, Sacred Valley, or Humantay Lake, all coordinated by one trusted local agency for a seamless Andean experience.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Weather for Machu Picchu Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"><div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌧️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - APR</h4><p class="text-xs text-gray-700 mb-0">It brings refreshing rains in the afternoon.</p></div></div><div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">☀️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4><p class="text-xs text-gray-700 mb-0">Sunny days, perfect for exploring the ruins.</p></div></div><div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🏔️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude</h4><p class="text-xs text-gray-700 mb-0">2,430 meters (7,972 feet)</p></div></div><div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌡️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperature</h4><p class="text-xs text-gray-700 mb-0">8°C to 24°C (54°F to 75°F)</p></div></div><div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2"><div class="text-2xl">🧥</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Gear & Conditions</h4><p class="text-xs text-gray-700 mb-0">Bring a raincoat for the rain and warm clothing for early morning temperatures.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Considerations for Your Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🎟️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Book in Advance</h4><p class="text-xs text-gray-700 leading-snug mb-0">To access the most popular Machu Picchu circuits—especially Circuit 2—we strongly recommend booking 2 to 3 months in advance.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⛰️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Essential Altitude Adaptation</h4><p class="text-xs text-gray-700 leading-snug mb-0">Although Machu Picchu sits lower than Cusco, spend 2–3 days acclimatizing in Cusco or the Sacred Valley first.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🧥</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Dress in Layers</h4><p class="text-xs text-gray-700 leading-snug mb-0">Wear sturdy shoes and bring rain gear. Weather conditions change quickly.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🎒</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Pack a Light Backpack</h4><p class="text-xs text-gray-700 leading-snug mb-0">Bring water, snacks, sunscreen, and keep it under 5 kg due to train regulations.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🌿</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Respect the Sacred Site</h4><p class="text-xs text-gray-700 leading-snug mb-0">Please avoid littering at the citadel and stay on designated paths.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">✨</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Enhance Your Journey</h4><p class="text-xs text-gray-700 leading-snug mb-0">Easily add the Humantay Lake tour or a Sacred Valley tour for a complete Andean itinerary.</p></div></div></div>',
      itinerary: [
        { time: 'Early Morning', activity: 'Early Pickup & Private Transportation: We pick you up directly from your hotel in Cusco in a private vehicle and drive approx. 1h 50m to Ollantaytambo. The exact pickup time depends on your Machu Picchu entry time.' },
        { time: 'Morning', activity: 'Scenic Train Journey to Machu Picchu: Board the tourist train in Ollantaytambo toward Aguas Calientes, enjoying breathtaking scenery along the Urubamba River.' },
        { time: 'Mid-Morning', activity: 'Private Guided Visit to Machu Picchu: Your private guide meets you in Aguas Calientes, escorts you to the Consettur bus up to the Sanctuary, and leads a 2-hour tailored tour of the main sectors.' },
        { time: 'Afternoon', activity: 'Free Time & Return to Cusco: Descend to Aguas Calientes for lunch/free time, then board the return train (approx. 2:55 PM) to Ollantaytambo where private transport takes you back to your hotel.' }
      ],
      includes: [
        'Licensed professional private tour guide specialized in Machu Picchu',
        'Round-trip tourist train ticket (Ollantaytambo – Aguas Calientes)',
        'Private transportation from Cusco to Ollantaytambo and back',
        'Official entrance ticket to the Machu Picchu Sanctuary',
        'Round-trip Consettur bus tickets (Aguas Calientes – Machu Picchu)'
      ],
      excludes: [
        'Meals and beverages',
        'Personal expenses',
        'Travel insurance (optional but recommended)'
      ],
      packing: [
        'Original passport (required for entry)',
        'Valid student card (if applicable)',
        'Small backpack/daypack',
        'Sun hat and sunglasses',
        'Sunscreen',
        'Rain poncho',
        'Cash for passport stamp, toilets, souvenirs, or lunch'
      ],
      highlights: [
        'Explore Machu Picchu with a licensed private local guide who focuses entirely on you.',
        'Travel comfortably with private transportation from your hotel in Cusco to Ollantaytambo and back.',
        'Enjoy a tourist-class train ride through the Sacred Valley following the Urubamba River.',
        'Flexible pace and free time in Aguas Calientes adapted to your preferences.',
        'All essentials included: Entrance tickets, private guide, train, and bus access.'
      ],
      tips: [
        'Book 2 to 3 months in advance to access the most popular circuits (especially Circuit 2).',
        'Spend 2-3 days acclimatizing in Cusco or the Sacred Valley before the visit.',
        'Dress in layers and wear comfortable walking shoes for uneven stone paths.',
        'Pack light: Train regulations allow backpacks up to 5 kg.',
        'The most stable weather occurs between April and November.',
        'Respect the site: Machu Picchu is a protected UNESCO World Heritage Site.'
      ]
    },
    es: {
      title: 'Tour Privado Machu Picchu Full Day',
      description: 'El viaje exclusivo de un día a la Ciudad Perdida de los Incas.',
      overview: '<p class="mb-4 mt-0">Nuestro Tour Privado a Machu Picchu de día completo desde Cusco está diseñado para viajeros que desean una experiencia personalizada, flexible y sin multitudes en uno de los sitios arqueológicos más icónicos del mundo. En lugar de seguir un horario de grupo fijo, explorará Machu Picchu a su propio ritmo con un guía privado certificado enfocado exclusivamente en usted y sus intereses.</p><p class="mb-4 mt-0">A lo largo del viaje, viajará en tren de clase turística a través del Valle Sagrado y accederá a Machu Picchu con boletos de entrada oficiales ya coordinados. Una vez dentro de la ciudadela, su guía privado dirigirá una visita a medida a través de terrazas agrícolas, templos ceremoniales y espacios sagrados, explicando la historia, la arquitectura y el significado espiritual de Machu Picchu de una manera clara y cautivadora.</p><p class="mb-8 mt-0">Debido a que este es un tour privado, disfrutará de más tiempo para fotos, preguntas y exploración, sin apresurarse ni adaptarse a los ritmos de grupo. Esta experiencia privada de día completo desde Cusco es ideal para parejas, familias, fotógrafos y viajeros que valoran la comodidad, la flexibilidad y una conexión cultural más profunda.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">¿Por qué viajar con Inkaland Explorers a Machu Picchu?</h3><p class="mb-4 mt-0">Viaje a Machu Picchu en tren con una agencia local de confianza especializada en tours privados y totalmente personalizados. En Inkaland Explorers, combinamos experiencia local, itinerarios flexibles y una logística impecable para ofrecer un Tour Privado a Machu Picchu en tren desde Cusco de alta calidad.</p><p class="mb-4 mt-0">A lo largo del viaje, viajará cómodamente a través del Valle Sagrado y explorará Machu Picchu con un guía privado certificado que se enfocará exclusivamente en usted. Como resultado, se moverá a su propio ritmo, evitará esperas innecesarias y obtendrá una comprensión más profunda de la historia, la arquitectura y el significado espiritual de la ciudadela Inca.</p><p class="mb-4 mt-0">Además, coordinamos cuidadosamente el transporte, los horarios de los trenes y los boletos de entrada, para que su experiencia en Machu Picchu fluya sin problemas de principio a fin. Los viajeros destacan constantemente nuestra organización, profesionalismo y servicio personalizado.</p><p class="mb-8 mt-0">En última instancia, cuando elige Inkaland Explorers, no solo está reservando un tour a Machu Picchu en tren, está eligiendo una experiencia privada guiada por expertos locales que realmente se preocupan por su viaje.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Ventajas: Tour Privado Machu Picchu Full Day</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">🗺️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Experiencia Privada Guiada por Expertos</h4><p class="text-xs text-gray-600 leading-snug mb-0">Explore Machu Picchu con un guía local privado que se enfoca completamente en usted. Durante una visita guiada personalizada de 2 horas, aprenda sobre la historia y arquitectura inca a su propio ritmo, sin multitudes.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚙</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Transporte Privado de Puerta a Puerta</h4><p class="text-xs text-gray-600 leading-snug mb-0">Viaje cómodamente con transporte privado desde su hotel en Cusco hasta Ollantaytambo y viceversa. Este servicio garantiza un viaje tranquilo y sin estrés durante todo el día.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚂</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Viaje Panorámico en Tren</h4><p class="text-xs text-gray-600 leading-snug mb-0">Disfrute de un viaje en tren turístico a través del Valle Sagrado, siguiendo el río Urubamba y pasando por montañas y paisajes de bosque nublado.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⏱️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Ritmo Flexible y Tiempo Libre</h4><p class="text-xs text-gray-600 leading-snug mb-0">A diferencia de los tours compartidos, este tour privado ofrece flexibilidad. Disfrute de tiempo libre en Aguas Calientes y un horario relajado adaptado a sus preferencias.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🎟️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Todo Incluido – Sin Costos Ocultos</h4><p class="text-xs text-gray-600 leading-snug mb-0">Este tour privado incluye entradas oficiales, guía privado, boletos de tren, transporte privado y acceso en autobús, lo que garantiza transparencia y un excelente valor.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">✨</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Extensiones Andinas Opcionales</h4><p class="text-xs text-gray-600 leading-snug mb-0">Combine fácilmente su tour privado con la Montaña de 7 Colores, el Valle Sagrado o la Laguna Humantay, todo coordinado por una agencia local de confianza.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Clima para el Tour Machu Picchu</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"><div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌧️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - ABR</h4><p class="text-xs text-gray-700 mb-0">Trae lluvias refrescantes por la tarde.</p></div></div><div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">☀️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4><p class="text-xs text-gray-700 mb-0">Días soleados, perfectos para explorar las ruinas.</p></div></div><div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🏔️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitud</h4><p class="text-xs text-gray-700 mb-0">2,430 metros (7,972 pies)</p></div></div><div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌡️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperatura</h4><p class="text-xs text-gray-700 mb-0">8°C a 24°C (54°F a 75°F)</p></div></div><div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2"><div class="text-2xl">🧥</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Equipamiento y Condiciones</h4><p class="text-xs text-gray-700 mb-0">Lleve un impermeable para la lluvia y ropa abrigadora para las temperaturas matutinas.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Consideraciones para su Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🎟️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Reserve con Anticipación</h4><p class="text-xs text-gray-700 leading-snug mb-0">Para acceder a los circuitos más populares, recomendamos encarecidamente reservar con 2 a 3 meses de anticipación.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⛰️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Aclimatación Esencial a la Altitud</h4><p class="text-xs text-gray-700 leading-snug mb-0">Aunque Machu Picchu es más bajo que Cusco, pase 2-3 días aclimatándose en Cusco o el Valle Sagrado primero.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🧥</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Vístase en Capas</h4><p class="text-xs text-gray-700 leading-snug mb-0">Use zapatos resistentes y lleve ropa impermeable. Las condiciones climáticas cambian rápidamente.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🎒</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Empaque una Mochila Ligera</h4><p class="text-xs text-gray-700 leading-snug mb-0">Lleve agua, bocadillos, protector solar y manténgala por debajo de los 5 kg debido a las regulaciones del tren.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🌿</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Respete el Sitio Sagrado</h4><p class="text-xs text-gray-700 leading-snug mb-0">Por favor, evite tirar basura en la ciudadela y manténgase en los senderos designados.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">✨</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Mejore su Viaje</h4><p class="text-xs text-gray-700 leading-snug mb-0">Agregue fácilmente el tour de la Laguna Humantay o un tour por el Valle Sagrado para un itinerario andino completo.</p></div></div></div>',
      itinerary: [
        { time: 'Temprano en la mañana', activity: 'Recojo Temprano y Transporte Privado: Lo recogemos directamente de su hotel en Cusco en un vehículo privado y viajamos aprox. 1h 50m hasta Ollantaytambo. El horario exacto depende de su entrada a Machu Picchu.' },
        { time: 'Mañana', activity: 'Viaje Escénico en Tren a Machu Picchu: Aborde el tren turístico en Ollantaytambo hacia Aguas Calientes, disfrutando de paisajes impresionantes a lo largo del río Urubamba.' },
        { time: 'Media Mañana', activity: 'Visita Guiada Privada a Machu Picchu: Su guía privado lo recibe en Aguas Calientes, lo acompaña en el bus Consettur hasta el Santuario y lidera un tour a medida de 2 horas por los sectores principales.' },
        { time: 'Tarde', activity: 'Tiempo Libre y Retorno a Cusco: Descenso a Aguas Calientes para almorzar o tiempo libre, luego abordará el tren de retorno (aprox. 2:55 PM) a Ollantaytambo, donde el transporte privado lo llevará de regreso a su hotel.' }
      ],
      includes: [
        'Guía de turismo privado profesional certificado especializado en Machu Picchu',
        'Boleto de tren turístico ida y vuelta (Ollantaytambo – Aguas Calientes)',
        'Transporte privado desde Cusco hasta Ollantaytambo y de retorno',
        'Boleto de entrada oficial al Santuario de Machu Picchu',
        'Boletos de bus Consettur ida y vuelta (Aguas Calientes – Machu Picchu)'
      ],
      excludes: [
        'Comidas y bebidas',
        'Gastos personales',
        'Seguro de viaje (opcional pero recomendado)'
      ],
      packing: [
        'Pasaporte original (requerido para el ingreso)',
        'Carné de estudiante vigente (si corresponde)',
        'Mochila pequeña / de día',
        'Sombrero para el sol y lentes de sol',
        'Bloqueador solar',
        'Poncho de lluvia',
        'Efectivo para sellar el pasaporte, baños, recuerdos o almuerzo'
      ],
      highlights: [
        'Explore Machu Picchu con un guía local privado certificado enfocado totalmente en usted.',
        'Viaje cómodamente con transporte privado desde su hotel en Cusco hasta Ollantaytambo e ida y vuelta.',
        'Disfrute de un viaje en tren de clase turística por el Valle Sagrado siguiendo el río Urubamba.',
        'Ritmo flexible y tiempo libre en Aguas Calientes adaptado a sus preferencias.',
        'Todo lo esencial incluido: Entradas, guía privado, tren y acceso en bus.'
      ],
      tips: [
        'Reserve con 2 a 3 meses de anticipación para acceder a los circuitos más populares (especialmente el Circuito 2).',
        'Pase 2-3 días aclimatándose en Cusco o el Valle Sagrado antes de la visita.',
        'Vístase en capas y use zapatos cómodos para caminar por senderos de piedra irregulares.',
        'Empaque ligero: Las regulaciones del tren permiten mochilas de hasta 5 kg.',
        'El clima más estable ocurre entre abril y noviembre.',
        'Respete el sitio: Machu Picchu es un sitio protegido Patrimonio de la Humanidad por la UNESCO.'
      ]
    }
  },
  {
    id: 3,
    slug: 'machu-picchu-sacred-valley-2-days',
    image: '/private/valle-sagrado.png',
    price: '440',
    duration: '2 Days',
    altitude: '2,040m – 3,700m',
    difficulty: 'Easy / Moderate',
    type: 'Cultural | Multi-day',
    departure: 'Cusco Hotels',
    destination: 'Machu Picchu & Sacred Valley',
    latitude: -13.1631,
    longitude: -72.5450,
    en: {
      title: 'Machu Picchu & Sacred Valley Private Tour 2 Days',
      description: 'Two-day private exploration of the most iconic Inca sites.',
      overview: '<p class="mb-4 mt-0">Our Machu Picchu and Sacred Valley Private Tour (2 Days) is a carefully planned private experience designed for travelers who want to explore the Sacred Valley in depth and reach Machu Picchu without rushing. Unlike one-day or group itineraries, this tour offers flexibility, personalized guiding, and a smooth connection between the Sacred Valley and Machu Picchu.</p><p class="mb-4 mt-0">On Day 1, we offer two private Sacred Valley route options, allowing you to choose the experience that best matches your interests:</p><ul class="mb-4 mt-0 text-gray-700 list-disc pl-5"><li><strong>Option 1 – Classic Sacred Valley Route:</strong> Visit the Pisac archaeological site, explore the Pisac traditional market, enjoy free time for lunch in Urubamba, and continue with a guided visit to Ollantaytambo. In the afternoon, you board the 15:37 train to Aguas Calientes, arriving in the evening.</li><li><strong>Option 2 – Alternative Sacred Valley Route:</strong> Begin at the Chinchero textile center and archaeological site, then continue to Maras and Moray, followed by free time for lunch in Urubamba and a visit to Ollantaytambo. As with the classic route, the day concludes with the 15:37 train to Aguas Calientes.</li></ul><p class="mb-4 mt-0">Upon arrival in Aguas Calientes, you stay overnight in a 3-star hotel or similar, allowing you to rest comfortably and prepare for the visit to Machu Picchu without the pressure of a same-day return.</p><p class="mb-4 mt-0">On Day 2, your private guide picks you up from the hotel and accompanies you on a private guided visit to Machu Picchu (Circuit 2). This is the most complete circuit inside the citadel, offering panoramic viewpoints and in-depth cultural interpretation, all at your own pace.</p><p class="mb-4 mt-0">Throughout the tour, our local team manages transportation, train schedules, accommodation, and guiding, ensuring a seamless and stress-free experience. As a top-rated local operator, Inkaland Explorers is known for personalized service, expert local guides, and careful planning—qualities consistently highlighted in verified TripAdvisor reviews.</p><p class="mb-8 mt-0">This private 2-day tour is ideal for travelers seeking a well-organized, flexible, and culturally immersive journey through the Sacred Valley and Machu Picchu.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Why Choose This Private Tour with Inkaland Explorers?</h3><p class="mb-4 mt-0">Choosing the right operator for Machu Picchu matters as much as the destination itself. This 2-day private Sacred Valley and Machu Picchu tour is designed and operated by a local Cusco-based agency with daily, on-the-ground experience, ensuring a smooth, safe, and well-coordinated journey from start to finish.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">📍</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Operated by a Local Cusco Agency</h4><p class="text-xs text-gray-600 leading-snug mb-0">We coordinate every detail in real time—from Sacred Valley visits to Machu Picchu entry circuits and train schedules—without intermediaries or last-minute surprises.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🤝</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Truly Private Experience</h4><p class="text-xs text-gray-600 leading-snug mb-0">Unlike standard tours, this itinerary is fully private. Travel at your own pace, ask questions freely, and enjoy a more personal connection with each site.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚆</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Carefully Planned Train & Circuit Coordination</h4><p class="text-xs text-gray-600 leading-snug mb-0">We select the best available Machu Picchu circuit according to official availability and choose train schedules to maximize daylight views and reduce fatigue.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">👨‍🏫</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Professional Guide from Cusco to Machu Picchu</h4><p class="text-xs text-gray-600 leading-snug mb-0">Your licensed guide accompanies you throughout the journey, providing deeper historical context, better organization, and constant support.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚫</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">No Tourist Traps or Forced Stops</h4><p class="text-xs text-gray-600 leading-snug mb-0">We do not include mandatory shopping stops or commission-based visits. The focus remains on culture, landscapes, and authentic experiences.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⭐</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Reliable Operation & Verified Reviews</h4><p class="text-xs text-gray-600 leading-snug mb-0">We operate with transparency and responsibility. You can check our verified TripAdvisor reviews, where travelers highlight our organization and private guiding.</p></div></div></div><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8"><div class="flex items-center gap-2 text-[#0b403a] mb-2"><svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg><span><strong>Note:</strong> 3 highlights from the private tour</span></div><ul class="space-y-1.5 mb-0"><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>Your guide will accompany you during the 2-day valley tour connecting with Machu Picchu.</span></li><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>We leave at 7 am from Cusco to avoid crowds and offer you a more authentic and relaxed experience in the Sacred Valley.</span></li><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>We avoid unnecessary stops at stores to maximize your time and enjoyment in the Sacred Valley.</span></li></ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Advantages of Our Machu Picchu & Sacred Valley Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">🗺️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Personalized Sacred Valley Route</h4><p class="text-xs text-gray-600 leading-snug mb-0">Choose between two carefully designed Sacred Valley itineraries on Day 1. This flexibility allows you to focus on culture, landscapes, or photography.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">👨‍🏫</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Private Licensed Guide on Both Days</h4><p class="text-xs text-gray-600 leading-snug mb-0">A licensed private guide accompanies you from Cusco to Machu Picchu, providing historical continuity and constant assistance.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⏱️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Optimized Schedule to Avoid Crowds</h4><p class="text-xs text-gray-600 leading-snug mb-0">We plan early departures and strategic train schedules to reduce waiting times and avoid peak congestion at key sites.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🎫</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Best Machu Picchu Circuit (Circuit 2)</h4><p class="text-xs text-gray-600 leading-snug mb-0">Whenever availability allows, we secure Circuit 2, the most complete and panoramic route inside Machu Picchu, offering the best viewpoints.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">✅</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">All Logistics Organized in Advance</h4><p class="text-xs text-gray-600 leading-snug mb-0">We handle hotel accommodation, train tickets, buses, entrance fees, and private transportation, so you can focus entirely on enjoying the journey.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚙</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Stress-Free Return to Cusco</h4><p class="text-xs text-gray-600 leading-snug mb-0">Our team coordinates all return logistics in advance, ensuring a smooth and timely arrival back to your hotel in Cusco.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Weather: 2-Day Sacred Valley & Machu Picchu Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"><div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌧️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - APR</h4><p class="text-xs text-gray-700 mb-0">Refreshing rains in the afternoon.</p></div></div><div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">☀️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4><p class="text-xs text-gray-700 mb-0">Ideal conditions for exploration.</p></div></div><div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🏔️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude</h4><p class="text-xs text-gray-700 mb-0">Sacred Valley (2,800m) & Machu Picchu (2,430m)</p></div></div><div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌡️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperature</h4><p class="text-xs text-gray-700 mb-0">Sunny Days: 10-24°C (50-75°F)<br>Cool Nights: 5-10°C (41-50°F)</p></div></div><div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2"><div class="text-2xl">🧥</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Gear & Conditions</h4><p class="text-xs text-gray-700 mb-0">Dressing in layers allows you to stay comfortable throughout both days. Bring a light rain jacket regardless of the forecast.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Important Travel Information</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🎟️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Advance Reservation</h4><p class="text-xs text-gray-700 leading-snug mb-0">We strongly recommend booking 2-3 months in advance to secure Circuit 2.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🛂</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Original Passport Requirement</h4><p class="text-xs text-gray-700 leading-snug mb-0">Required at all times for entry to Machu Picchu and boarding trains.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⛰️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude Awareness</h4><p class="text-xs text-gray-700 leading-snug mb-0">Acclimatize in Cusco for 2–3 days before the tour and stay hydrated.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">💵</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Budget for Meals</h4><p class="text-xs text-gray-700 leading-snug mb-0">Meals are not included. Budget USD 25–40 per day in Urubamba and Aguas Calientes.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🥾</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Footwear & Conditions</h4><p class="text-xs text-gray-700 leading-snug mb-0">Comfortable, sturdy walking shoes are essential for cobblestone streets and uneven terrain.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⏳</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Last-Minute Bookings</h4><p class="text-xs text-gray-700 leading-snug mb-0">Last-minute tickets are subject to in-person availability and are never guaranteed.</p></div></div></div>',
      itinerary: [
        { time: 'Day 1 - Sacred Valley & Train to Aguas Calientes', activity: 'The Sacred Valley covers a wide area and includes several important archaeological and cultural sites. For this reason, we offer two private route options on Day 1, allowing you to choose the experience that best fits your interests. Both options begin with private pickup from your hotel in Cusco at 7:00 AM.\n\nOption 1: Classic Sacred Valley Route (Pisac & Ollantaytambo)\nAfter hotel pickup, we begin the journey with a visit to a local alpaca farm (Manos de la Comunidad), where you can see alpacas, llamas, vicuñas, and guanacos up close and learn about traditional Andean textiles.\nNext, we continue to the Pisac archaeological site, followed by time to explore the Pisac traditional market, well known for its handicrafts and local atmosphere.\nAfterward, you enjoy free time for lunch in Urubamba, before continuing to the Ollantaytambo archaeological site, one of the most important Inca citadels in the Sacred Valley.\nIn the afternoon, we transfer you to the train station to board the 15:37 train to Aguas Calientes, arriving in the evening.\n\nOption 2: Alternative Sacred Valley Route (Chinchero, Maras & Moray)\nThis option also begins with private pickup at 7:00 AM. First, we visit the Chinchero textile center and archaeological site, where you learn about traditional weaving techniques and Inca history.\nWe then continue to the colonial town of Maras, followed by a guided visit to Moray, famous for its circular agricultural terraces used for crop experimentation.\nNext, we visit the Maras Salt Mines, an impressive pre-Inca salt production site still in use today. Afterward, you have free time for lunch in Urubamba.\nThe day concludes with a guided visit to Ollantaytambo, before boarding the 15:37 train to Aguas Calientes.' },
        { time: 'Day 2 - Private Guided Visit to Machu Picchu', activity: 'Day 2 focuses entirely on Machu Picchu, the highlight of the journey. After breakfast at your hotel, your private guide picks you up and accompanies you to the bus station.\nYou take a 30-minute bus ride to the Machu Picchu Sanctuary entrance. After presenting your passport and entry ticket, you stop at the classic viewpoint (guardhouse) for photos and a brief introduction.\nNext, you enjoy a private guided tour of approximately 2 hours, following Circuit 2, the most complete circuit inside the citadel. During the visit, your guide explains the historical and architectural significance.\nAfter the guided tour, you return by bus to Aguas Calientes, where you have free time for lunch and shopping.\nIn the afternoon, you board the return train to Ollantaytambo, where private transportation awaits to transfer you back to Cusco. Upon arrival, we escort you to your hotel, with an estimated arrival time of around 7:30 PM.' }
      ],
      includes: [
        'Professional licensed guide (English or Spanish) accompanying you throughout both days',
        'Private tourist transportation for the Sacred Valley on Day 1',
        'Entrance tickets to all archaeological sites visited during the Sacred Valley tour',
        'Entrance ticket to the Maras Salt Mines (Option 2 route)',
        'Round-trip train ticket (Ollantaytambo – Aguas Calientes – Ollantaytambo)',
        'Round-trip bus ticket (Aguas Calientes – Machu Picchu – Aguas Calientes)',
        'Official entrance ticket to Machu Picchu',
        'Private 2-hour guided tour inside Machu Picchu (based on official circuit availability)',
        'Transportation back to Cusco and to your hotel',
        '1 night accommodation in Aguas Calientes (3-star hotel or similar)'
      ],
      excludes: [
        'Meals and beverages (lunch and dinner on Day 1, lunch on Day 2)',
        'Personal expenses',
        'Travel insurance'
      ],
      packing: [
        'Original passport (Mandatory for entry and trains)',
        'Light rain jacket or poncho',
        'Warm layers (Nighttime temperatures often drop to 5–10°C / 41–50°F)',
        'Comfortable, sturdy walking shoes',
        'Sunscreen, hat, and sunglasses',
        'Personal medications and altitude remedies'
      ],
      highlights: [
        'Personalized Sacred Valley Route: Choose between Pisac or Maras/Moray based on your interests.',
        'Licensed Private Guide for 2 Days: Historical continuity and personalized support from start to finish.',
        'Optimized Schedule: Early departures to avoid crowds and maximize your time at each site.',
        'Best Machu Picchu Experience: We secure Circuit 2 for the best panoramic views and cultural depth.',
        'All Logistics Included: Accommodation, trains, buses, and entrance fees organized in advance.'
      ],
      tips: [
        'Book 3 months in advance for high season (May-August) to ensure Circuit 2 tickets.',
        'Acclimatize in Cusco for 2-3 days before the tour; elevations reach up to 3,700m.',
        'Carry your original passport at all times; it is required for trains and the sanctuary entry.',
        'Budget USD 25–40 per day for meals in the Sacred Valley and Aguas Calientes.',
        'Pack light: Train regulations are strict regarding luggage size and weight.',
        'Respect the site: Machu Picchu is a UNESCO World Heritage Site; stay on designated paths.'
      ]
    },
    es: {
      title: 'Tour Privado Machu Picchu y Valle Sagrado 2 Días',
      description: 'Exploración privada de dos días por los sitios Incas más icónicos.',
      overview: '<p class="mb-4 mt-0">Nuestro Tour Privado a Machu Picchu y el Valle Sagrado (2 Días) es una experiencia cuidadosamente planificada para viajeros que desean explorar el Valle Sagrado en profundidad y llegar a Machu Picchu sin prisas. A diferencia de los itinerarios de un día o grupales, este tour ofrece flexibilidad, guía personalizada y una conexión fluida entre el Valle Sagrado y Machu Picchu.</p><p class="mb-4 mt-0">En el Día 1, ofrecemos dos opciones de ruta privada en el Valle Sagrado, lo que le permite elegir la experiencia que mejor se adapte a sus intereses:</p><ul class="mb-4 mt-0 text-gray-700 list-disc pl-5"><li><strong>Opción 1 – Ruta Clásica del Valle Sagrado:</strong> Visite el sitio arqueológico de Písac, explore el mercado tradicional, disfrute de tiempo libre para almorzar en Urubamba y continúe con una visita guiada a Ollantaytambo. Por la tarde, abordará el tren de las 15:37 hacia Aguas Calientes.</li><li><strong>Opción 2 – Ruta Alternativa del Valle Sagrado:</strong> Comience en el centro textil y sitio arqueológico de Chinchero, continúe hacia Maras y Moray, seguido de tiempo libre para almorzar en Urubamba y una visita a Ollantaytambo. Al igual que con la ruta clásica, el día concluye con el tren de las 15:37 hacia Aguas Calientes.</li></ul><p class="mb-4 mt-0">A su llegada a Aguas Calientes, pasará la noche en un hotel de 3 estrellas o similar, lo que le permitirá descansar cómodamente y prepararse para la visita a Machu Picchu sin la presión de un retorno el mismo día.</p><p class="mb-4 mt-0">En el Día 2, su guía privado lo recoge del hotel y lo acompaña en una visita guiada privada a Machu Picchu (Circuito 2). Este es el circuito más completo dentro de la ciudadela, ofreciendo miradores panorámicos y una interpretación cultural profunda, todo a su propio ritmo.</p><p class="mb-4 mt-0">A lo largo del recorrido, nuestro equipo local gestiona el transporte, los horarios de trenes, el alojamiento y el guiado, garantizando una experiencia fluida y sin estrés. Como un operador local muy bien calificado, Inkaland Explorers es conocido por su servicio personalizado, guías expertos y planificación cuidadosa, cualidades destacadas constantemente en reseñas verificadas de TripAdvisor.</p><p class="mb-8 mt-0">Este tour privado de 2 días es ideal para viajeros que buscan un viaje bien organizado, flexible y culturalmente inmersivo por el Valle Sagrado y Machu Picchu.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">¿Por qué Elegir este Tour Privado con Inkaland Explorers?</h3><p class="mb-4 mt-0">Elegir el operador adecuado para Machu Picchu es tan importante como el destino en sí. Este tour privado de 2 días es diseñado y operado por una agencia local con sede en Cusco con experiencia diaria sobre el terreno, asegurando un viaje fluido, seguro y bien coordinado de principio a fin.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">📍</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Operado por una Agencia Local de Cusco</h4><p class="text-xs text-gray-600 leading-snug mb-0">Coordinamos cada detalle en tiempo real, desde las visitas al Valle Sagrado hasta los circuitos de entrada y horarios de trenes, sin intermediarios ni sorpresas de última hora.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🤝</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Experiencia Verdaderamente Privada</h4><p class="text-xs text-gray-600 leading-snug mb-0">A diferencia de los tours estándar, este itinerario es totalmente privado. Viaje a su propio ritmo, haga preguntas libremente y disfrute de una conexión más personal.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚆</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Coordinación Cuidadosa de Trenes y Circuitos</h4><p class="text-xs text-gray-600 leading-snug mb-0">Seleccionamos el mejor circuito de Machu Picchu según la disponibilidad oficial y elegimos los horarios de tren para maximizar las vistas y reducir la fatiga.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">👨‍🏫</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Guía Profesional de Cusco a Machu Picchu</h4><p class="text-xs text-gray-600 leading-snug mb-0">Su guía certificado lo acompaña durante todo el viaje, brindando un contexto histórico más profundo, mejor organización y apoyo constante.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚫</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Sin Trampas Turísticas o Paradas Forzadas</h4><p class="text-xs text-gray-600 leading-snug mb-0">No incluimos paradas de compras obligatorias. El enfoque sigue siendo la cultura, los paisajes y las experiencias auténticas.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⭐</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Operación Confiable y Reseñas Verificadas</h4><p class="text-xs text-gray-600 leading-snug mb-0">Operamos con transparencia y responsabilidad. Puede consultar nuestras reseñas verificadas en TripAdvisor, donde destacan nuestra organización.</p></div></div></div><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8"><div class="flex items-center gap-2 text-[#0b403a] mb-2"><svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg><span><strong>Nota:</strong> 3 aspectos destacados del tour privado</span></div><ul class="space-y-1.5 mb-0"><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>Su guía lo acompañará durante los 2 días de tour conectando con Machu Picchu.</span></li><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>Salimos a las 7 am desde Cusco para evitar las multitudes y ofrecerle una experiencia más auténtica y relajada.</span></li><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>Evitamos paradas innecesarias en tiendas para maximizar su tiempo y disfrute en el Valle Sagrado.</span></li></ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Ventajas de Nuestro Tour Privado de 2 Días</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">🗺️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Ruta Personalizada en el Valle Sagrado</h4><p class="text-xs text-gray-600 leading-snug mb-0">Elija entre dos itinerarios cuidadosamente diseñados en el Día 1. Esta flexibilidad le permite centrarse en la cultura, los paisajes o la fotografía.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">👨‍🏫</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Guía Privado Certificado en Ambos Días</h4><p class="text-xs text-gray-600 leading-snug mb-0">Un guía privado certificado lo acompaña desde Cusco a Machu Picchu, proporcionando continuidad histórica y asistencia constante.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⏱️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Horarios Optimizados para Evitar Multitudes</h4><p class="text-xs text-gray-600 leading-snug mb-0">Planificamos salidas tempranas y horarios de tren estratégicos para reducir los tiempos de espera y evitar la congestión máxima.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🎫</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Mejor Circuito de Machu Picchu (Circuito 2)</h4><p class="text-xs text-gray-600 leading-snug mb-0">Siempre que la disponibilidad lo permita, aseguramos el Circuito 2, la ruta más completa y panorámica, que ofrece los mejores miradores.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">✅</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Toda la Logística Organizada con Anticipación</h4><p class="text-xs text-gray-600 leading-snug mb-0">Manejamos alojamiento en hotel, trenes, autobuses, entradas y transporte privado, para que pueda concentrarse completamente en disfrutar.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚙</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Regreso Sin Estrés a Cusco</h4><p class="text-xs text-gray-600 leading-snug mb-0">Nuestro equipo coordina toda la logística de regreso por adelantado, asegurando una llegada sin problemas y oportuna de regreso a su hotel en Cusco.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Clima: Tour de 2 Días Valle Sagrado y Machu Picchu</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"><div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌧️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - ABR</h4><p class="text-xs text-gray-700 mb-0">Lluvias refrescantes por la tarde.</p></div></div><div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">☀️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4><p class="text-xs text-gray-700 mb-0">Condiciones ideales para exploración.</p></div></div><div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🏔️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitud</h4><p class="text-xs text-gray-700 mb-0">Valle Sagrado (2,800m) y Machu Picchu (2,430m)</p></div></div><div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌡️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperatura</h4><p class="text-xs text-gray-700 mb-0">Días soleados: 10-24°C (50-75°F)<br>Noches frescas: 5-10°C (41-50°F)</p></div></div><div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2"><div class="text-2xl">🧥</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Equipamiento y Condiciones</h4><p class="text-xs text-gray-700 mb-0">Vestirse en capas le permite estar cómodo durante ambos días. Lleve una chaqueta ligera para la lluvia sin importar el pronóstico.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Información Importante de Viaje</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🎟️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Reserva Anticipada</h4><p class="text-xs text-gray-700 leading-snug mb-0">Recomendamos encarecidamente reservar con 2-3 meses de anticipación para asegurar el Circuito 2.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🛂</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Requisito de Pasaporte Original</h4><p class="text-xs text-gray-700 leading-snug mb-0">Requerido en todo momento para la entrada a Machu Picchu y para abordar los trenes.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⛰️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Conciencia de la Altitud</h4><p class="text-xs text-gray-700 leading-snug mb-0">Aclimatarse en Cusco por 2–3 días antes del tour y mantenerse hidratado.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">💵</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Presupuesto para Comidas</h4><p class="text-xs text-gray-700 leading-snug mb-0">Las comidas no están incluidas. Presupueste de 25 a 40 USD por día en Urubamba y Aguas Calientes.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🥾</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Calzado y Condiciones</h4><p class="text-xs text-gray-700 leading-snug mb-0">Es fundamental llevar calzado cómodo para caminar por calles empedradas y terrenos irregulares.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⏳</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Reservas de Última Hora</h4><p class="text-xs text-gray-700 leading-snug mb-0">Los boletos de última hora están sujetos a disponibilidad presencial y nunca están garantizados.</p></div></div></div>',
      itinerary: [
        { time: 'Día 1 - Valle Sagrado y Tren a Aguas Calientes', activity: 'El Valle Sagrado cubre un área extensa e incluye varios sitios arqueológicos y culturales importantes. Por esta razón, ofrecemos dos opciones de ruta privada en el Día 1, lo que le permite elegir la experiencia que mejor se adapte a sus intereses. Ambas opciones comienzan con recojo privado desde su hotel en Cusco a las 7:00 AM.\n\nOpción 1: Ruta Clásica del Valle Sagrado (Písac y Ollantaytambo)\nDespués de recogerlo en el hotel, comenzamos el viaje con una visita a una granja local de alpacas (Manos de la Comunidad), donde podrá ver de cerca alpacas, llamas, vicuñas y guanacos y aprender sobre los textiles tradicionales andinos.\nLuego, continuamos hacia el sitio arqueológico de Písac, seguido de tiempo para explorar el mercado tradicional de Písac, muy conocido por sus artesanías y su atmósfera local.\nDespués, disfrutará de tiempo libre para almorzar en Urubamba, antes de continuar hacia el sitio arqueológico de Ollantaytambo, una de las ciudadelas incas más importantes del Valle Sagrado.\nPor la tarde, lo trasladamos a la estación de tren para abordar el tren de las 15:37 a Aguas Calientes, llegando por la noche.\n\nOpción 2: Ruta Alternativa del Valle Sagrado (Chinchero, Maras y Moray)\nEsta opción también comienza con recojo privado a las 7:00 AM. Primero, visitamos el centro textil y sitio arqueológico de Chinchero, donde aprenderá sobre las técnicas de tejido tradicional y la historia Inca.\nLuego continuamos hacia el pueblo colonial de Maras, seguido de una visita guiada a Moray, famoso por sus terrazas agrícolas circulares utilizadas para la experimentación de cultivos.\nA continuación, visitamos las Salineras de Maras, un impresionante sitio preincaico de producción de sal que todavía se usa en la actualidad. Después, tendrá tiempo libre para almorzar en Urubamba.\nEl día concluye con una visita guiada a Ollantaytambo, antes de abordar el tren de las 15:37 a Aguas Calientes.' },
        { time: 'Día 2 - Visita Guiada Privada a Machu Picchu', activity: 'El Día 2 se centra completamente en Machu Picchu, lo más destacado del viaje. Después del desayuno en su hotel, su guía privado lo recoge y lo acompaña a la estación de autobuses.\nAbordaremos un autobús por 30 minutos hasta la entrada del Santuario de Machu Picchu. Después de presentar su pasaporte y boleto de entrada, nos detendremos en el mirador clásico (Casa del Guardián) para tomar fotos y recibir una breve introducción.\nA continuación, disfrutará de una visita guiada privada de aproximadamente 2 horas, siguiendo el Circuito 2, el circuito más completo dentro de la ciudadela. Durante la visita, su guía explicará el significado histórico y arquitectónico del lugar.\nDespués de la visita guiada, regresamos en autobús a Aguas Calientes, donde tendrá tiempo libre para almorzar y hacer compras.\nPor la tarde, abordará el tren de regreso a Ollantaytambo, donde lo espera transporte privado para trasladarlo de regreso a Cusco. A su llegada, lo acompañamos a su hotel, con una hora estimada de llegada alrededor de las 7:30 PM.' }
      ],
      includes: [
        'Guía profesional certificado acompañándolo durante ambos días',
        'Transporte turístico privado para el Valle Sagrado en el Día 1',
        'Entradas a todos los sitios arqueológicos y Salineras de Maras',
        'Boleto de tren ida y vuelta (Ollantaytambo – Aguas Calientes – Ollantaytambo)',
        'Boleto de bus ida y vuelta (Aguas Calientes – Machu Picchu – Aguas Calientes)',
        'Boleto de entrada oficial a Machu Picchu (Circuito 2 según disponibilidad)',
        '1 noche de alojamiento en Aguas Calientes (hotel de 3 estrellas o similar)',
        'Transporte privado de retorno a su hotel en Cusco'
      ],
      excludes: [
        'Comidas y bebidas (Almuerzo/Cena Día 1, Almuerzo Día 2)',
        'Gastos personales',
        'Seguro de viaje'
      ],
      packing: [
        'Pasaporte original (obligatorio para el ingreso y trenes)',
        'Poncho de lluvia o chaqueta impermeable',
        'Capas de abrigo (temperaturas nocturnas de 5 a 10°C)',
        'Zapatos de caminata cómodos y resistentes',
        'Protección solar (gorra, lentes, bloqueador)',
        'Medicamentos personales y remedios para la altitud'
      ],
      highlights: [
        'Ruta Personalizada en el Valle Sagrado: Elija entre Písac o Maras/Moray según sus intereses.',
        'Guía Privado por 2 Días: Continuidad histórica y apoyo personalizado de principio a fin.',
        'Horarios Optimizados: Salidas tempranas para evitar multitudes y maximizar su tiempo.',
        'La Mejor Experiencia en Machu Picchu: Aseguramos el Circuito 2 para las mejores vistas panorámicas.',
        'Logística Completa Organizada: Alojamiento, trenes, buses y entradas coordinados con anticipación.'
      ],
      tips: [
        'Reserve con 3 meses de anticipación en temporada alta (mayo-agosto) para asegurar boletos del Circuito 2.',
        'Aclimatarse en Cusco por 2-3 días antes del tour; las elevaciones alcanzan los 3,700m.',
        'Lleve su pasaporte original en todo momento; es requerido para los trenes y el santuario.',
        'Presupuesto de USD 25–40 por día para comidas en el Valle Sagrado y Aguas Calientes.',
        'Empaque ligero: Las regulaciones del tren son estrictas con el tamaño y peso del equipaje.',
        'Respete el sitio: Machu Picchu es Patrimonio de la Humanidad; permanezca en los senderos designados.'
      ]
    }

  },
  {
    id: 4,
    slug: 'maras-moray-private-tour',
    image: '/private/maras-moray.png',
    price: '65',
    duration: 'Half Day',
    altitude: '3,300m – 3,500m',
    difficulty: 'Easy',
    type: 'Cultural | History',
    departure: 'Cusco Hotels',
    destination: 'Maras & Moray',
    latitude: -13.3298,
    longitude: -72.1970,
    en: {
      title: 'Maras Moray Private Tour',
      description: 'Exclusive half-day journey to the salt mines and circular Inca terraces.',
      overview: '<p class="mb-4 mt-0">Embark on a private half-day journey to two of the most fascinating archaeological sites in the Sacred Valley: Maras Salt Mines and Moray. This exclusive Maras & Moray Private Tour is designed for travelers who want flexibility, comfort, and a deeper cultural experience without rushing or large groups.</p><p class="mb-4 mt-0">Visit the ancient salt mines of Maras, where thousands of salt ponds have been used by local families since pre-Inca times and are still active today. Continue to Moray, an impressive Inca site formed by circular terraces believed to have functioned as an agricultural experimentation center, demonstrating the Incas’ advanced knowledge of climate and farming.</p><p class="mb-4 mt-0">With private transportation and a professional local guide, this tour allows you to explore Maras and Moray at your own pace, enjoy the Andean landscapes, and fully understand the historical and cultural significance of these unique sites—all in just half a day from Cusco.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Why Choose This Maras & Moray Private Tour with Inkaland Explorers?</h3><p class="mb-4 mt-0">Choosing Inkaland Explorers means traveling with a 100% local operator based in Cusco, focused on private, well-organized experiences in the Sacred Valley.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">🤝</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Private tour, no shared groups</h4><p class="text-xs text-gray-600 leading-snug mb-0">Enjoy Maras and Moray without fixed schedules or rushed stops. The itinerary adapts to your pace and interests.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">👨‍🏫</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Professional local guides</h4><p class="text-xs text-gray-600 leading-snug mb-0">Our licensed guides explain the real history behind Moray’s terraces and the living salt tradition of Maras, not just surface-level facts.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚙</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Comfortable private transportation</h4><p class="text-xs text-gray-600 leading-snug mb-0">Travel safely and comfortably in private vehicles, avoiding unnecessary shopping stops or crowded buses.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⏱️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Flexible half-day experience</h4><p class="text-xs text-gray-600 leading-snug mb-0">Perfect for travelers with limited time in Cusco or those combining this tour with the Sacred Valley or Machu Picchu.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⭐</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Trusted by travelers worldwide</h4><p class="text-xs text-gray-600 leading-snug mb-0">Our service is backed by verified reviews on TripAdvisor, highlighting punctuality, knowledge, and personalized attention.</p></div></div></div><p class="mb-4 mt-0 font-medium text-[#0b403a]">With Inkaland Explorers, you don’t just visit Maras and Moray—you understand them.</p><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8"><div class="flex items-center gap-2 text-[#0b403a] mb-2"><svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg><span><strong>Note:</strong> Important aspect of the private tour</span></div><ul class="space-y-1.5 mb-0"><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>We avoid unnecessary stops in stores to maximize your time and enjoyment.</span></li></ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Weather for Maras Moray Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"><div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌧️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - APR</h4><p class="text-xs text-gray-700 mb-0">Rainy season may bring brief showers; waterproof jacket recommended.</p></div></div><div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">☀️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4><p class="text-xs text-gray-700 mb-0">Dry season offers optimal conditions for exploring the salt mines and circular terraces.</p></div></div><div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🏔️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude</h4><p class="text-xs text-gray-700 mb-0">3,300m - 3,500m (10,800 - 11,500ft)</p></div></div><div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌡️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperature</h4><p class="text-xs text-gray-700 mb-0">Daytime temperatures range from 8-20°C (46-68°F) with potential wind chill at higher elevations.</p></div></div><div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2"><div class="text-2xl">🧥</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Sun Protection Essential</h4><p class="text-xs text-gray-700 mb-0">Sun protection is essential due to high altitude: bring a hat, sunglasses, and sunscreen.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Advantages: Maras Moray Private Tour (Half Day)</h3><p class="mb-4 mt-0">Choosing this Maras & Moray Private Tour with Inkaland Explorers gives you a carefully designed half-day experience focused on depth, comfort, and real local insight.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">🤝</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Private & Personalized Exploration</h4><p class="text-xs text-gray-600 leading-snug mb-0">Travel with a private vehicle and licensed local guide, allowing you to explore Maras and Moray at your own rhythm.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⏱️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Strategic Timing for Fewer Crowds</h4><p class="text-xs text-gray-600 leading-snug mb-0">An early departure around 8:00 AM helps avoid peak visitor hours at both sites. We follow a strict no unnecessary shopping stops policy.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🧂</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Living Culture, Not Just Ruins</h4><p class="text-xs text-gray-600 leading-snug mb-0">At the Maras Salt Mines, you’ll see salt still extracted using centuries-old techniques. At Moray, your guide explains the Inca agricultural laboratory.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">✅</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Efficient Half-Day Design</h4><p class="text-xs text-gray-600 leading-snug mb-0">This optimized itinerary finishes early in the afternoon—ideal if you plan to combine it with another Sacred Valley experience.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚙</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Comfortable & Safe Transportation</h4><p class="text-xs text-gray-600 leading-snug mb-0">Private transportation handles the winding Andean roads while you relax and enjoy panoramic Sacred Valley views. No shared vans, no delays.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⭐</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Trusted by Travelers Worldwide</h4><p class="text-xs text-gray-600 leading-snug mb-0">Our Maras & Moray Private Tour is consistently praised on TripAdvisor for its organization, knowledgeable guides, and personalized service.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Considerations: Maras Moray Private Tour (Half Day)</h3><p class="mb-4 mt-0">To ensure a smooth, safe, and enjoyable experience during your Maras & Moray Private Tour, please keep the following important points in mind:</p><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🎟️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Entrance Fees Not Included</h4><p class="text-xs text-gray-700 leading-snug mb-0">Moray: 70 soles. Maras Salt Mines: 20 soles. Bring cash in small bills (no ATMs or card payments).</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⛰️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude Awareness</h4><p class="text-xs text-gray-700 leading-snug mb-0">Tour operates between 3,200m and 3,500m. Spend 1–2 days acclimatizing in Cusco before the tour.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">☀️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Weather & Clothing</h4><p class="text-xs text-gray-700 leading-snug mb-0">Strong UV radiation requires a hat, sunglasses, and sunscreen. Bring a light waterproof jacket.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⏰</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Punctual Departure</h4><p class="text-xs text-gray-700 leading-snug mb-0">The 8:00 AM pickup time is important to avoid crowds and enjoy the best light at the Maras Salt Mines.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🥪</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Food & Snacks</h4><p class="text-xs text-gray-700 leading-snug mb-0">Meals are not included. Bring water and light snacks or energy bars.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🔋</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Electronic Devices</h4><p class="text-xs text-gray-700 leading-snug mb-0">Altitude and cold can drain batteries faster. Carry a fully charged phone or a power bank.</p></div></div></div>',
      itinerary: [
        { time: 'Half Day Tour: Maras Moray', activity: 'We will begin the tour with pickup at approximately 08:00 from the hotel. We will start by exploring the textile center of Chinchero, followed by a visit to the picturesque colonial town of Maras. From Maras, we will continue towards the Inca site of Moray, known for its impressive circles of agricultural terraces used by the Incas to experiment with different crops.\n\nOur final destination will be the famous salt mines, which date back to pre-Inca times. These mines use an ancient method of evaporating water from an underground stream, leaving crystals of pure salt in thousands of deep, white pools stretching across the valley. The panoramic views are spectacular and offer a unique visual experience.\n\nWe will conclude the tour at approximately 14:30, providing passengers with a full day of exploration and discovery of the rich history and natural beauty of the region.' }
      ],
      includes: [
        'Tourist transport',
        'Professional English or Spanish guide'
      ],
      excludes: [
        'Moray partial ticket (70 soles)',
        'Entrance ticket to Salineras (20 soles)'
      ],
      packing: [
        'Wear a fleece jacket and light hiking pants',
        'Comfortable walking shoes or sneakers',
        'Hat, sunglasses and sunscreen',
        'During the rainy season, bring a waterproof jacket or a travel-size umbrella or plastic ponchos',
        'Water',
        'Energy bars, candies, cookies, etc. (you can also buy fresh fruit in one of the village markets)',
        'Charged power bank / portable charger (phone batteries drain quickly at altitude)'
      ],
      highlights: [
        'Exclusive Personalized Tour',
        'Crowd-Free Strategic Timing',
        'Living Cultural Immersion',
        'Efficient Half-Day Itinerary'
      ],
      tips: []
    },
    es: {
      title: 'Tour Privado Maras y Moray',
      description: 'Viaje exclusivo de medio día a las minas de sal y terrazas circulares incas.',
      overview: '<p class="mb-4 mt-0">Embárquese en un viaje privado de medio día a dos de los sitios arqueológicos más fascinantes del Valle Sagrado: las Salineras de Maras y Moray. Este tour exclusivo está diseñado para viajeros que buscan flexibilidad, comodidad y una experiencia cultural profunda sin prisas ni grupos grandes.</p><p class="mb-4 mt-0">Visite las antiguas minas de sal de Maras, donde miles de pozos de sal han sido utilizados por familias locales desde la época preinca y siguen activos en la actualidad. Continúe hacia Moray, un impresionante sitio inca formado por terrazas circulares que se cree funcionó como un centro de experimentación agrícola, demostrando el avanzado conocimiento de los incas sobre el clima y la agricultura.</p><p class="mb-4 mt-0">Con transporte privado y un guía local profesional, este tour le permite explorar Maras y Moray a su propio ritmo, disfrutar de los paisajes andinos y comprender a fondo el significado histórico y cultural de estos sitios únicos, todo en solo medio día desde Cusco.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">¿Por qué Elegir este Tour Privado de Maras y Moray con Inkaland Explorers?</h3><p class="mb-4 mt-0">Elegir Inkaland Explorers significa viajar con un operador 100% local con sede en Cusco, enfocado en experiencias privadas y bien organizadas en el Valle Sagrado.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">🤝</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Tour privado, sin grupos compartidos</h4><p class="text-xs text-gray-600 leading-snug mb-0">Disfrute de Maras y Moray sin horarios fijos ni paradas apresuradas. El itinerario se adapta a su ritmo e intereses.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">👨‍🏫</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Guías locales profesionales</h4><p class="text-xs text-gray-600 leading-snug mb-0">Nuestros guías certificados explican la historia real detrás de las terrazas de Moray y la tradición viva de la sal de Maras, no solo hechos superficiales.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚙</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Cómodo transporte privado</h4><p class="text-xs text-gray-600 leading-snug mb-0">Viaje de manera segura y cómoda en vehículos privados, evitando paradas de compras innecesarias o autobuses llenos de gente.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⏱️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Experiencia flexible de medio día</h4><p class="text-xs text-gray-600 leading-snug mb-0">Perfecto para viajeros con tiempo limitado en Cusco o aquellos que combinan este tour con el Valle Sagrado o Machu Picchu.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⭐</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Con la confianza de viajeros de todo el mundo</h4><p class="text-xs text-gray-600 leading-snug mb-0">Nuestro servicio está respaldado por reseñas verificadas en TripAdvisor, destacando la puntualidad, el conocimiento y la atención personalizada.</p></div></div></div><p class="mb-4 mt-0 font-medium text-[#0b403a]">Con Inkaland Explorers, usted no solo visita Maras y Moray, sino que los entiende.</p><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8"><div class="flex items-center gap-2 text-[#0b403a] mb-2"><svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg><span><strong>Nota:</strong> Aspecto importante del tour privado</span></div><ul class="space-y-1.5 mb-0"><li class="flex items-start gap-2 text-gray-700 leading-snug"><div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div><span>Evitamos paradas innecesarias en tiendas para maximizar su tiempo y disfrute.</span></li></ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Clima para el Tour Privado Maras Moray</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"><div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌧️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - ABR</h4><p class="text-xs text-gray-700 mb-0">La temporada de lluvias puede traer lluvias breves; se recomienda chaqueta impermeable.</p></div></div><div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">☀️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4><p class="text-xs text-gray-700 mb-0">La temporada seca ofrece condiciones óptimas para explorar las minas de sal y las terrazas circulares.</p></div></div><div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🏔️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitud</h4><p class="text-xs text-gray-700 mb-0">3,300m - 3,500m (10,800 - 11,500ft)</p></div></div><div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3"><div class="text-2xl">🌡️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperatura</h4><p class="text-xs text-gray-700 mb-0">Las temperaturas diurnas oscilan entre 8-20°C (46-68°F) con posible sensación térmica menor en zonas altas.</p></div></div><div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2"><div class="text-2xl">🧥</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Protección Solar Esencial</h4><p class="text-xs text-gray-700 mb-0">La protección solar es vital por la gran altitud: lleve sombrero, gafas de sol y bloqueador.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Ventajas: Tour Privado Maras Moray (Medio Día)</h3><p class="mb-4 mt-0">Elegir este Tour Privado de Maras y Moray con Inkaland Explorers le brinda una experiencia de medio día cuidadosamente diseñada y enfocada en la profundidad, comodidad y un verdadero conocimiento local.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6"><div class="flex gap-3"><div class="text-2xl shrink-0">🤝</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Exploración Privada y Personalizada</h4><p class="text-xs text-gray-600 leading-snug mb-0">Viaje con un vehículo privado y guía local certificado, lo que le permite explorar Maras y Moray a su propio ritmo.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⏱️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Horario Estratégico para Menos Multitudes</h4><p class="text-xs text-gray-600 leading-snug mb-0">Una salida temprana alrededor de las 8:00 AM ayuda a evitar las horas pico. Seguimos una estricta política de no realizar paradas de compras innecesarias.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🧂</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Cultura Viva, No Solo Ruinas</h4><p class="text-xs text-gray-600 leading-snug mb-0">En las Salineras de Maras, verá la sal extraída con técnicas centenarias. En Moray, su guía explica el laboratorio agrícola Inca.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">✅</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Diseño Eficiente de Medio Día</h4><p class="text-xs text-gray-600 leading-snug mb-0">Este itinerario optimizado finaliza a primera hora de la tarde, ideal si planea combinarlo con otra experiencia en el Valle Sagrado.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">🚙</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Transporte Cómodo y Seguro</h4><p class="text-xs text-gray-600 leading-snug mb-0">El transporte privado recorre las sinuosas carreteras andinas mientras se relaja. Sin camionetas compartidas ni retrasos.</p></div></div><div class="flex gap-3"><div class="text-2xl shrink-0">⭐</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Con la Confianza de Viajeros del Mundo</h4><p class="text-xs text-gray-600 leading-snug mb-0">Nuestro tour es constantemente elogiado en TripAdvisor por su organización, guías expertos y servicio personalizado.</p></div></div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Consideraciones: Tour Privado Maras Moray (Medio Día)</h3><p class="mb-4 mt-0">Para garantizar una experiencia fluida, segura y agradable durante su Tour Privado de Maras y Moray, tenga en cuenta los siguientes puntos importantes:</p><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🎟️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Entradas No Incluidas</h4><p class="text-xs text-gray-700 leading-snug mb-0">Moray: 70 soles. Salineras de Maras: 20 soles. Lleve efectivo en billetes pequeños (no hay cajeros ni pago con tarjeta).</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⛰️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Conciencia de la Altitud</h4><p class="text-xs text-gray-700 leading-snug mb-0">El tour opera entre 3,200m y 3,500m. Pase 1-2 días aclimatándose en Cusco antes del recorrido.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">☀️</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Clima y Ropa</h4><p class="text-xs text-gray-700 leading-snug mb-0">La fuerte radiación UV requiere sombrero, gafas de sol y bloqueador. Lleve una chaqueta impermeable ligera.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">⏰</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Salida Puntual</h4><p class="text-xs text-gray-700 leading-snug mb-0">La hora de recojo a las 8:00 AM es importante para evitar multitudes y disfrutar de la mejor luz en las Salineras.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🥪</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Comida y Snacks</h4><p class="text-xs text-gray-700 leading-snug mb-0">Las comidas no están incluidas. Lleve agua y snacks ligeros o barras energéticas.</p></div></div><div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg"><div class="text-xl shrink-0 mt-0.5">🔋</div><div><h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Dispositivos Electrónicos</h4><p class="text-xs text-gray-700 leading-snug mb-0">La altitud y el frío pueden agotar las baterías más rápido. Lleve su teléfono cargado o una batería externa.</p></div></div></div>',
      itinerary: [
        { time: 'Medio Día', activity: 'Comenzaremos el recorrido con el recojo aproximadamente a las 08:00 desde el hotel. Iniciaremos explorando el centro textil de Chinchero, seguido de una visita al pintoresco pueblo colonial de Maras. Desde Maras, continuaremos hacia el sitio Inca de Moray, conocido por sus impresionantes círculos de terrazas agrícolas utilizadas por los incas para experimentar con diferentes cultivos.\n\nNuestro destino final serán las famosas minas de sal, que datan de la época preincaica. Estas minas utilizan un método antiguo de evaporación del agua de un arroyo subterráneo, dejando cristales de sal pura en miles de pozas blancas y profundas que se extienden por el valle. Las vistas panorámicas son espectaculares y ofrecen una experiencia visual única.\n\nConcluiremos el recorrido aproximadamente a las 14:30, brindando a los pasajeros una exploración y descubrimiento de la rica historia y belleza natural de la región.' }
      ],
      includes: [
        'Transporte turístico',
        'Guía profesional en inglés o español'
      ],
      excludes: [
        'Boleto parcial a Moray (70 soles)',
        'Boleto de entrada a Salineras (20 soles)'
      ],
      packing: [
        'Llevar chaqueta polar y pantalones ligeros de senderismo',
        'Zapatos cómodos para caminar o zapatillas',
        'Sombrero, gafas de sol y bloqueador solar',
        'Durante la temporada de lluvias, lleve una chaqueta impermeable, paraguas de viaje o poncho de plástico',
        'Agua',
        'Barras energéticas, dulces, galletas, etc. (también puede comprar fruta fresca en los mercados)',
        'Se recomienda llevar una batería portátil, ya que las baterías de los teléfonos se agotan rápido'
      ],
      highlights: [
        'Tour Exclusivo y Personalizado',
        'Horario Estratégico sin Multitudes',
        'Inmersión Cultural Viva',
        'Itinerario Eficiente de Medio Día'
      ],
      tips: []
    }

  },
  {
    id: 5,
    slug: 'palccoyo-rainbow-mountain',
    image: '/private/palcoyo-rainbow.png',
    price: '110',
    duration: 'Full Day',
    altitude: '4,900m',
    difficulty: 'Easy to Moderate',
    type: 'Adventure | Landscape',
    departure: 'Cusco Hotels',
    destination: 'Palccoyo Mountain',
    latitude: -14.0416,
    longitude: -71.2964,
    en: {
      title: 'Palccoyo Rainbow Mountain Private Tour from Cusco',
      description: 'A less crowded, equally stunning colorful mountain experience with a gentle hike.',
      overview: '<p class="mb-4 mt-0">Palccoyo Rainbow Mountain is one of the most scenic and accessible rainbow mountains in the Cusco region, offering colorful landscapes without the extreme altitude and crowds of Vinicunca. Located at approximately 4,900 meters (16,076 ft), Palccoyo is ideal for travelers looking for a rewarding high-Andean experience with a gentler hike.</p><p class="mb-4 mt-0">Our Palccoyo Rainbow Mountain Private Tour from Cusco is designed for travelers who value comfort, flexibility, and personalized service. Unlike shared tours with rigid schedules, this private experience allows you to travel at your own pace, enjoy multiple viewpoints, and adapt better to the altitude.</p><p class="mb-4 mt-0">The journey begins with a scenic private drive through traditional Andean communities and high-altitude plains. With a professional local guide and private transportation, you’ll enjoy a smoother itinerary, fewer crowds, and more time to explore the colorful mountains, stone forests, and panoramic views that make Palccoyo a unique alternative to Rainbow Mountain.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Why Choose Inkaland Explorers for Your Palccoyo Rainbow Mountain Private Tour?</h3><p class="mb-4 mt-0">Choosing Inkaland Explorers for your Palccoyo Rainbow Mountain Private Tour means traveling with a 100% local Cusco-based agency that understands real road conditions, altitude challenges, and timing better than anyone else.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">🤝</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Private, Well-Paced Experiences</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Unlike mass-market tours, we focus on private experiences. Walk at your own rhythm, stop at multiple viewpoints, and experience the wide Andean landscapes without rushing.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">👨‍🏫</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Professional Local Guides</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Our guides explain the geological formation of Palccoyo and share cultural context about Andean life and high-altitude ecosystems.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🚙</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Comfortable Private Transportation</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Combined with flexible departure times and attentive service, your journey becomes smoother, safer, and far more enjoyable.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⭐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Trusted by Travelers</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Travelers consistently highlight our punctuality, clear communication, and personalized attention, reflected in real TripAdvisor reviews.</p>    </div>  </div></div><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8">  <div class="flex items-center gap-2 text-[#0b403a] mb-2">    <svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20">      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>    </svg>    <span><strong>Note:</strong> Important aspect of the private tour</span>  </div>  <ul class="space-y-1.5 mb-0">    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>Your guide will accompany you at all times throughout the entire tour, providing you with support at all times.</span>    </li>  </ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Weather: Palccoyo Rainbow Mountain Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌧️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - APR</h4>      <p class="text-xs text-gray-700 mb-0">Rainy season brings colder temperatures and possible snowfall. Thermal layers and waterproof gear essential.</p>    </div>  </div>  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4>      <p class="text-xs text-gray-700 mb-0">Dry season offers optimal viewing conditions with strong sun exposure.</p>    </div>  </div>  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🏔️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude</h4>      <p class="text-xs text-gray-700 mb-0">4,900m (16,076ft). Extreme altitude requires proper acclimatization.</p>    </div>  </div>  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌡️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperature</h4>      <p class="text-xs text-gray-700 mb-0">-5°C to 15°C (23°F to 59°F). Prepare for high-altitude adventure.</p>    </div>  </div>  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">    <div class="text-2xl">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Essential Gear</h4>      <p class="text-xs text-gray-700 mb-0">Layered clothing, thermal layers, waterproof gear, and strong sun protection are crucial.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Advantages: Palccoyo Rainbow Mountain Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">⛰️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">A Crowd-Free Rainbow Mountain Experience</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Unlike Vinicunca, Palccoyo offers wide open landscapes, colorful mountains, and a unique stone forest—without massive crowds.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🎒</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">All-Inclusive Logistics at High Altitude</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Includes entrance fees, breakfast, lunch, oxygen tank, and professional private guide. No hidden costs.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Well-Planned Full-Day Schedule</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">An early 4:30 AM departure helps avoid traffic and weather changes, allowing a relaxed pace with enough time at each viewpoint.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">📖</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Geology and Andean Nature Explained</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Learn how Palccoyo’s rainbow colors formed and how this landscape differs from other rainbow mountains in the region.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Considerations: Palccoyo Rainbow Mountain Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⛰️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude Awareness Is Essential</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">At 4,900m, acclimatization for 2–3 days in Cusco is strongly recommended. Oxygen is included.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Dress for Rapid Weather Changes</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Temperatures range from cold mornings to mild middays. Wear thermal layers, waterproofs, hats, and gloves.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🚶</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Moderate Physical Condition</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">The hike is around 40 minutes uphill. Technically easy, but demanding due to altitude. Not for serious heart conditions.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Early Departure</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">A 4:30 AM pickup is essential to avoid weather instability and enjoy clearer views.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg md:col-span-2">    <div class="text-xl shrink-0 mt-0.5">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Strong Sun Protection Required</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Intense UV radiation requires SPF 50+ sunscreen, sunglasses, and a hat.</p>    </div>  </div></div>',
      itinerary: [
        { time: 'Full Day Tour', activity: 'To begin our tour to Palccoyo, we offer pick-up service at your hotel at 04:30 AM. From there, we will go on our tourist transportation approximately 2 hours until we reach Cusipata, where we will make a brief stop to enjoy breakfast and purchase additional supplies, such as water and snacks, if desired.\n\nWe will continue the journey through the Cusco highlands for approximately 1 hour and a half more, crossing impressive landscapes where you can observe the daily life of the local communities, until we reach the beginning of the walk (4,700 meters above sea level). Here we will start the excursion, which begins with a stretch of about 40 minutes until we reach the main viewpoint.\n\nOnce at the Palccoyo summit (4,900 meters above sea level), you will have free time to rest, take photographs of the imposing mountains and admire the unique landscape of the "stone forest".\n\nAfter enjoying this moment, we will begin the return descent, where our transportation will be waiting to take us to enjoy a comforting lunch.\n\nLater, we will begin the return trip to Cusco, estimating to arrive around 17:00, thus culminating our experience in Palccoyo.' }
      ],
      includes: [
        'Professional guide',
        'First aid kit',
        'Oxygen tank',
        'Breakfast and lunch',
        'Tourist transport',
        'Trekking poles (carbon)',
        'Entrance ticket'
      ],
      excludes: [
        'Staff incentives (optional)',
        'Personal emergency horse'
      ],
      packing: [
        'Water',
        'Waterproof trekking shoes',
        'Warm clothing (thermals, fleece, hat, gloves and socks)',
        'Waterproof clothing (waterproof jacket, poncho)',
        'Sun hat, sun glasses',
        'Sun block',
        'Personal medication'
      ],
      highlights: [
        'Crowd-Free Rainbow Mountain Experience',
        'All-Inclusive Logistics at High Altitude',
        'Well-Planned Full-Day Schedule',
        'Geology and Andean Nature Explained'
      ],
      tips: [
        'Acclimatize 2-3 days in Cusco or the Sacred Valley prior to the tour.',
        'A 4:30 AM departure is essential for the best visibility.',
        'Consider adding a Maras Moray Private Tour for a contrasting valley experience.'
      ]
    },
    es: {
      title: 'Tour Privado Montaña Palccoyo desde Cusco',
      description: 'Una experiencia de montaña multicolor menos concurrida, igualmente impresionante y con una caminata suave.',
      overview: '<p class="mb-4 mt-0">La Montaña de Siete Colores de Palccoyo es una de las montañas arcoíris más pintorescas y accesibles de la región del Cusco, ofreciendo paisajes coloridos sin la altitud extrema ni las multitudes de Vinicunca. Ubicada a aproximadamente 4,900 metros (16,076 pies), Palccoyo es ideal para viajeros que buscan una experiencia gratificante en los altos Andes con una caminata más suave.</p><p class="mb-4 mt-0">Nuestro Tour Privado a la Montaña de Colores de Palccoyo desde Cusco está diseñado para viajeros que valoran la comodidad, flexibilidad y el servicio personalizado. A diferencia de los tours compartidos con horarios rígidos, esta experiencia privada le permite viajar a su propio ritmo, disfrutar de múltiples miradores y adaptarse mejor a la altitud.</p><p class="mb-4 mt-0">El viaje comienza con un recorrido privado a través de comunidades andinas tradicionales y llanuras de gran altitud. Con un guía local profesional y transporte privado, disfrutará de un itinerario más tranquilo, menos multitudes y más tiempo para explorar las coloridas montañas, los bosques de piedras y las vistas panorámicas que hacen de Palccoyo una alternativa única a Vinicunca.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">¿Por qué Elegir a Inkaland Explorers para su Tour Privado a Palccoyo?</h3><p class="mb-4 mt-0">Elegir a Inkaland Explorers significa viajar con una agencia 100% local basada en Cusco, que comprende mejor que nadie las condiciones reales de las carreteras, los desafíos de la altitud y los horarios.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">🤝</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Experiencias Privadas a su Ritmo</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">A diferencia de los tours masivos, nos enfocamos en experiencias privadas. Camine a su propio ritmo y deténgase en los miradores sin prisas.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">👨‍🏫</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Guías Locales Profesionales</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Nuestros guías le explicarán la formación geológica de Palccoyo, la vida andina y la importancia de estas montañas para la comunidad local.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🚙</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Cómodo Transporte Privado</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Combinado con horarios de salida flexibles y atención personalizada, su viaje será más fluido, seguro y agradable.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⭐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Con la Confianza de Viajeros del Mundo</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Destacan nuestra puntualidad, comunicación clara y atención al cliente en diversas reseñas de TripAdvisor.</p>    </div>  </div></div><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8">  <div class="flex items-center gap-2 text-[#0b403a] mb-2">    <svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20">      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>    </svg>    <span><strong>Nota:</strong> Aspecto importante del tour privado</span>  </div>  <ul class="space-y-1.5 mb-0">    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>Su guía le acompañará en todo momento durante el tour, brindándole asistencia cuando sea necesario.</span>    </li>  </ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Clima para el Tour a Palccoyo</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌧️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - ABR</h4>      <p class="text-xs text-gray-700 mb-0">La temporada de lluvias trae frío y posible nieve. Ropa térmica e impermeable son esenciales.</p>    </div>  </div>  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4>      <p class="text-xs text-gray-700 mb-0">La temporada seca ofrece condiciones óptimas con fuerte exposición solar.</p>    </div>  </div>  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🏔️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitud</h4>      <p class="text-xs text-gray-700 mb-0">4,900m (16,076ft). Requiere una adecuada aclimatación.</p>    </div>  </div>  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌡️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperatura</h4>      <p class="text-xs text-gray-700 mb-0">-5°C a 15°C (23°F a 59°F). Prepárese para el frío y los fuertes vientos.</p>    </div>  </div>  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">    <div class="text-2xl">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Equipamiento Esencial</h4>      <p class="text-xs text-gray-700 mb-0">Ropa en capas, térmicas, chaqueta impermeable y bloqueador solar son vitales.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Ventajas: Tour Privado a Palccoyo</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">⛰️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Sin Multitudes</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">A diferencia de Vinicunca, Palccoyo ofrece amplios paisajes y un bosque de piedras único, sin aglomeraciones.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🎒</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Logística con Todo Incluido</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Incluye entradas, desayuno, almuerzo, oxígeno y guía privado. Cero costos ocultos.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Horario Bien Planeado</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Una salida temprana a las 4:30 AM nos permite evitar el tráfico y los cambios climáticos, manteniendo un ritmo relajado.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">📖</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Geología y Naturaleza Andina</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Aprenda cómo se formaron los colores de Palccoyo y su diferencia con otras montañas de la región.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Consideraciones: Tour Privado a Palccoyo</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⛰️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Conciencia de Altitud</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">A 4,900m, se recomienda aclimatarse 2–3 días en Cusco. Llevamos oxígeno de emergencia.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Vístase para el Clima</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">El clima de montaña cambia rápido. Use capas térmicas, prendas impermeables, gorro y guantes.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🚶</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Condición Física Moderada</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Caminata de 40 minutos en subida gradual. Técnicamente fácil, pero la altitud lo hace exigente.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Salida Temprana</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">La salida a las 4:30 AM es esencial para evitar la inestabilidad climática y disfrutar de vistas claras.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg md:col-span-2">    <div class="text-xl shrink-0 mt-0.5">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Protección Solar Necesaria</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">La radiación UV es intensa. Recomendamos bloqueador SPF 50+, gafas de sol y sombrero.</p>    </div>  </div></div>',
      itinerary: [
        { time: 'Día Completo', activity: 'Para comenzar nuestro tour a Palccoyo, ofrecemos servicio de recojo en su hotel a las 04:30 AM. Desde allí, iremos en nuestro transporte turístico por aproximadamente 2 horas hasta llegar a Cusipata, donde haremos una breve parada para disfrutar del desayuno y comprar suministros adicionales, si lo desea.\n\nContinuaremos el viaje por las tierras altas de Cusco durante aproximadamente 1 hora y media más, cruzando paisajes impresionantes donde podrá observar la vida diaria de las comunidades locales, hasta llegar al punto de inicio de la caminata (4,700 metros sobre el nivel del mar). Aquí comenzaremos la excursión, que inicia con un tramo de unos 40 minutos hasta llegar al mirador principal.\n\nUna vez en la cumbre de Palccoyo (4,900 msnm), tendrá tiempo libre para descansar, fotografiar las imponentes montañas y admirar el paisaje único del "bosque de piedras".\n\nTras disfrutar de este momento, iniciaremos el descenso de retorno, donde nuestro transporte nos estará esperando para llevarnos a disfrutar de un almuerzo reconfortante.\n\nPosteriormente, iniciaremos el viaje de retorno a Cusco, estimando llegar alrededor de las 17:00, culminando así nuestra experiencia en Palccoyo.' }
      ],
      includes: [
        'Guía profesional',
        'Botiquín de primeros auxilios',
        'Tanque de oxígeno',
        'Desayuno y almuerzo',
        'Transporte turístico',
        'Bastones de trekking (carbono)',
        'Boleto de entrada'
      ],
      excludes: [
        'Propinas para el personal (opcional)',
        'Caballo personal de emergencia'
      ],
      packing: [
        'Agua',
        'Zapatos de trekking impermeables',
        'Ropa abrigadora (térmicas, forro polar, gorro, guantes y calcetines gruesos)',
        'Ropa impermeable (chaqueta impermeable, poncho)',
        'Sombrero para el sol, gafas de sol',
        'Bloqueador solar',
        'Medicamentos personales'
      ],
      highlights: [
        'Experiencia en la Montaña Arcoíris sin Multitudes',
        'Logística Todo Incluido a Gran Altitud',
        'Horario de Día Completo Bien Planeado',
        'Geología y Naturaleza Andina Explicada'
      ],
      tips: [
        'Aclimátese 2-3 días en Cusco o el Valle Sagrado antes del tour.',
        'La salida a las 4:30 AM es esencial para tener la mejor visibilidad.',
        'Considere añadir un Tour Privado de Maras y Moray para una experiencia contrastante en el valle.'
      ]
    }

  },
  {
    id: 6,
    slug: 'south-valley-private-tour',
    image: '/private/valle-sur.png',
    price: '63',
    duration: 'Half Day',
    altitude: '3,100m – 3,500m',
    difficulty: 'Easy',
    type: 'Cultural | Hidden Gems',
    departure: 'Cusco Hotels',
    destination: 'South Valley',
    latitude: -13.6288,
    longitude: -71.7101,
    en: {
      title: 'South Valley Private Tour from Cusco',
      description: 'Explore Tipón, Pikillaqta, and Andahuaylillas in a private, relaxed half-day experience.',
      overview: '<p class="mb-4 mt-0">The South Valley Private Tour from Cusco is a half-day private experience designed for travelers who want to explore important Inca and colonial sites without crowds or rushed schedules. Instead of following the classic tourist routes, this tour focuses on Cusco’s southern region, offering deeper historical context and a more relaxed pace with a private local guide.</p><p class="mb-4 mt-0">During this private journey, you visit Tipón, an impressive Inca hydraulic complex famous for its advanced water engineering; Pikillaqta, a vast pre-Inca city built by the Wari civilization; and Andahuaylillas, home to the “Sistine Chapel of the Americas,” one of the most important colonial churches in Peru.</p><p class="mb-4 mt-0">Thanks to private transportation, flexible departure times, and a licensed local guide, this South Valley Private Tour delivers a smooth, informative, and comfortable half-day experience. It is ideal for travelers interested in history, architecture, and authentic Andean culture, all within a short and well-organized itinerary from Cusco.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Why Choose Inkaland Explorers for the South Valley Tour from Cusco?</h3><p class="mb-4 mt-0">At Inkaland Explorers, we go beyond the typical tourist routes to help you discover the true cultural depth of Cusco’s South Valley. From the start, our local expertise and private service allow you to explore this historic region in a relaxed, well-organized, and meaningful way.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">👨‍🏫</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Clear Historical Context</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Our licensed local guides lead you through Tipón, Pikillaqta, and Andahuaylillas, explaining their historical, architectural, and cultural importance. You don’t just visit the sites—you truly understand them.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🚙</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Smooth Private Transportation</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Thanks to private transportation and flexible pacing, you enjoy each stop without rushing, large crowds, or unnecessary shopping stops.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🤝</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Personalized Private Experiences</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">We focus on adapting the tour to your interests, schedule, and travel style. As a Cusco-based local operator, we prioritize authenticity, safety, and quality.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⭐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Trusted Reputation</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Our reputation supports our promise. Travelers consistently highlight our professionalism, knowledgeable guides, and attention to detail in verified TripAdvisor reviews.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Weather: South Valley Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌧️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - APR</h4>      <p class="text-xs text-gray-700 mb-0">The rainy season brings occasional light showers, mostly in the afternoons. A light waterproof jacket or poncho is recommended.</p>    </div>  </div>  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4>      <p class="text-xs text-gray-700 mb-0">The dry season offers clear skies and minimal rainfall, creating ideal circumstances for visiting the sites without interruptions.</p>    </div>  </div>  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🏔️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude</h4>      <p class="text-xs text-gray-700 mb-0">Up to ~3,500m (11,480ft) at Tipón. The climate is generally mild compared to higher-altitude tours around Cusco.</p>    </div>  </div>  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌡️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperature</h4>      <p class="text-xs text-gray-700 mb-0">12°C to 20°C (54°F to 68°F). Early mornings and late afternoons can feel cooler.</p>    </div>  </div>  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">    <div class="text-2xl">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Gear & Conditions</h4>      <p class="text-xs text-gray-700 mb-0">Wear layered clothing. Sun exposure can be strong year-round; sunscreen, sunglasses, and a hat are suggested.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Advantages: South Valley Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">🏛️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Exclusive Archaeological & Cultural Combination</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Visit Tipón (Inca hydraulic engineering), Pikillaqta (Wari urban center), and Andahuaylillas (Sistine Chapel of the Americas) connecting history in one coherent journey.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Strategic Timing to Avoid Crowds</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">With our morning departure, you reach Andahuaylillas before peak visiting hours, ensuring a quieter, more immersive experience inside the church.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">✅</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Efficient Half-Day Itinerary</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">In approximately 6.5 hours, you experience a complete cultural route with logically planned stops—without rushed visits or unnecessary detours.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🥖</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Local Gastronomy & Cultural Stops</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Pass through traditional villages such as Oropesa and Saylla, known for local bread and regional dishes, adding a culinary dimension to your experience.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Considerations: South Valley Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🎟️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Entrance Fees Not Included</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">You must purchase the Partial Tourist Ticket (70 soles) and the Andahuaylillas Church entrance (15 soles). Please bring cash in soles.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⛰️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude Awareness</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">We strongly recommend spending 1–2 days acclimatizing in Cusco beforehand and staying well hydrated throughout the tour.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏱️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Flexible Private Schedule</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">This is a private tour, so we adjust the pace and breaks according to your interests without rushing.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Punctual Morning Departure</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">An 8:00 AM pickup allows you to visit Pikillaqta and Andahuaylillas before peak visitor hours. Late departures may reduce time inside key sites.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🥪</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Meals Not Included</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">We recommend bringing water and light snacks. We can suggest local restaurants after the tour if you wish to enjoy regional cuisine.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🥾</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Appropriate Footwear Required</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Wear comfortable, sturdy walking shoes. Tipón and Pikillaqta include uneven surfaces and stone steps.</p>    </div>  </div></div>',
      itinerary: [
        { time: '08:00 AM', activity: 'Hotel Pickup in Cusco: We begin the South Valley Private Tour with direct pickup from your hotel in Cusco at 8:00 a.m. Then, we head south on a scenic 30-minute drive through the Andean countryside, leaving the busy tourist routes behind.' },
        { time: 'Morning', activity: 'Scenic Drive & Saylla Village (Panoramic Stop): Along the way, we pass through the traditional village of Saylla, well known for its regional cuisine, especially chicharrón (fried pork). While this is a panoramic stop, it adds cultural context to the journey.' },
        { time: 'Morning', activity: 'Visit to Tipón Archaeological Site: Shortly after, we leave the main road to reach Tipón, one of the most impressive Inca hydraulic engineering complexes in Peru. During a guided visit, you explore agricultural terraces, stone channels, and ceremonial fountains.' },
        { time: 'Mid-Morning', activity: 'Stop in Oropesa – Traditional Bread Experience: Next, we return to the main road and stop in Oropesa, famously known as the "Bread Capital of Cusco." Together with your guide, you visit a traditional bakery to observe the bread-making process.' },
        { time: 'Late Morning', activity: 'Pikillaqta Archaeological Site: Afterwards, we continue to Pikillaqta, a vast pre-Inca city built by the Wari civilization. This archaeological site stands out for its advanced urban planning.' },
        { time: 'Early Afternoon', activity: 'Andahuaylillas – The "Sistine Chapel of the Americas": Finally, we visit Andahuaylillas, home to the Church of San Pedro. Inside, you admire extraordinary murals, baroque altars, and paintings from the Cusco School.' },
        { time: '03:00 PM', activity: 'Return to Cusco: After completing the visits, we return comfortably to Cusco, arriving at your hotel at approximately 3:00 p.m., concluding a culturally rich and relaxed half-day private South Valley tour.' }
      ],
      includes: [
        'Private Tourist Transportation',
        'First-Aid Kit',
        'Oxygen Tank',
        'Professional Tour Guide (English or Spanish)'
      ],
      excludes: [
        'Partial Tourist Ticket (South Valley)',
        'Lunch',
        'Gratuities'
      ],
      packing: [
        'Sun hat',
        'Sun protection cream',
        'Waterproof jacket/rain poncho',
        'Water'
      ],
      highlights: [
        'Exclusive Cultural Combination: Connect Inca, pre-Inca (Wari), and Colonial history in one coherent 6.5-hour journey.',
        'Strategic Timing: We arrive at Andahuaylillas before the peak visitor hours for a quieter, more immersive experience.',
        'Expert Historical Context: Our private guides explain complex topics like water management and baroque art in an engaging way.',
        'Local Gastronomy: Experience authentic Andean culture with stops in Oropesa (bread) and Saylla (traditional snacks).',
        'Authentic & Crowd-Free: Explore lesser-known sites away from the mass tourism paths for a more genuine connection.'
      ],
      tips: [
        'Bring cash in Soles for the Partial Tourist Ticket (70 soles) and the church entry (15 soles); cards are not accepted.',
        'Spend 1–2 days acclimatizing in Cusco beforehand; although elevations are moderate, Tipón reaches 3,500m.',
        'UV radiation is strong year-round; apply sunscreen and wear a hat even on cloudy days.',
        'Comfortable shoes are required for Tipón’s terraces and Pikillaqta’s stone pathways which include uneven surfaces.',
        'Punctual departure at 8:00 AM is recommended to maximize your time inside the richly decorated church of Andahuaylillas.',
        'Stay hydrated: The Andean air is dry and altitude can be felt even on mild routes like the South Valley.'
      ]
    },
    es: {
      title: 'Tour Privado Valle Sur desde Cusco',
      description: 'Explore Tipón, Pikillaqta y Andahuaylillas en una experiencia privada y relajada de medio día.',
      overview: '<p class="mb-4 mt-0">El Tour Privado al Valle Sur desde Cusco es una experiencia privada de medio día diseñada para viajeros que desean explorar importantes sitios incas y coloniales sin multitudes ni horarios apresurados. En lugar de seguir las clásicas rutas turísticas, este recorrido se centra en la región sur de Cusco, ofreciendo un contexto histórico más profundo y un ritmo más relajado con un guía local privado.</p><p class="mb-4 mt-0">Durante este viaje privado, visitará Tipón, un impresionante complejo hidráulico inca famoso por su avanzada ingeniería del agua; Pikillaqta, una vasta ciudad preinca construida por la civilización Wari; y Andahuaylillas, hogar de la "Capilla Sixtina de América", una de las iglesias coloniales más importantes de Perú.</p><p class="mb-4 mt-0">Gracias al transporte privado, horarios de salida flexibles y un guía local certificado, este Tour Privado al Valle Sur ofrece una experiencia de medio día fluida, informativa y cómoda. Es ideal para viajeros interesados en la historia, la arquitectura y la auténtica cultura andina, todo dentro de un itinerario corto y bien organizado desde Cusco.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">¿Por qué Elegir Inkaland Explorers para su Tour al Valle Sur?</h3><p class="mb-4 mt-0">En Inkaland Explorers, vamos más allá de las rutas turísticas típicas para ayudarle a descubrir la verdadera profundidad cultural del Valle Sur de Cusco. Nuestra experiencia local y servicio privado le permiten explorar esta histórica región de manera relajada y bien organizada.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">👨‍🏫</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Contexto Histórico Claro</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Nuestros guías locales certificados lo guían a través de Tipón, Pikillaqta y Andahuaylillas, explicando su importancia histórica y cultural. No solo visita los sitios, sino que los entiende realmente.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🚙</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Transporte Privado Cómodo</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Gracias al transporte privado y al ritmo flexible, disfruta de cada parada sin prisas, grandes multitudes ni paradas de compras innecesarias.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🤝</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Experiencias Privadas Personalizadas</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Nos enfocamos en adaptar el tour a sus intereses, horario y estilo de viaje. Priorizamos la autenticidad, la seguridad y la calidad.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⭐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Reputación de Confianza</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Nuestra reputación respalda nuestra promesa. Los viajeros destacan nuestro profesionalismo y guías expertos en reseñas verificadas de TripAdvisor.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Clima para el Tour al Valle Sur</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌧️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - ABR</h4>      <p class="text-xs text-gray-700 mb-0">La temporada de lluvias trae chubascos ligeros, en su mayoría por la tarde. Se recomienda llevar una chaqueta impermeable ligera o poncho.</p>    </div>  </div>  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4>      <p class="text-xs text-gray-700 mb-0">La temporada seca ofrece cielos despejados y poca lluvia, creando condiciones ideales para visitar los sitios sin interrupciones.</p>    </div>  </div>  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🏔️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitud</h4>      <p class="text-xs text-gray-700 mb-0">Hasta ~3,500m (11,480ft) en Tipón. El clima es generalmente suave en comparación con los tours de mayor altitud alrededor de Cusco.</p>    </div>  </div>  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌡️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperatura</h4>      <p class="text-xs text-gray-700 mb-0">12°C a 20°C (54°F a 68°F). Las mañanas y las tardes pueden sentirse más frías.</p>    </div>  </div>  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">    <div class="text-2xl">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Equipamiento y Condiciones</h4>      <p class="text-xs text-gray-700 mb-0">Lleve ropa en capas. La exposición solar puede ser fuerte todo el año; se sugiere bloqueador solar, gafas de sol y sombrero.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Ventajas: Tour Privado al Valle Sur</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">🏛️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Exclusiva Combinación Arqueológica</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Visite Tipón (ingeniería hidráulica inca), Pikillaqta (centro urbano Wari) y Andahuaylillas (Capilla Sixtina de América) conectando la historia en un solo viaje.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Horario Estratégico</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Con nuestra salida por la mañana, llega a Andahuaylillas antes de las horas pico, garantizando una experiencia más tranquila en el interior de la iglesia.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">✅</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Eficiente Itinerario de Medio Día</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">En aproximadamente 6.5 horas, experimenta una ruta cultural completa con paradas lógicamente planeadas, sin visitas apresuradas.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🥖</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Gastronomía Local</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Pase por pueblos tradicionales como Oropesa y Saylla, conocidos por su pan y platos regionales, añadiendo una dimensión culinaria a su experiencia.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Consideraciones: Tour Privado al Valle Sur</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🎟️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Entradas No Incluidas</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Debe comprar el Boleto Turístico Parcial (70 soles) y la entrada a la Iglesia de Andahuaylillas (15 soles). Por favor, traiga efectivo.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⛰️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Conciencia de la Altitud</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Recomendamos encarecidamente pasar 1-2 días aclimatándose en Cusco de antemano y mantenerse bien hidratado durante el tour.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏱️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Horario Privado Flexible</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Este es un tour privado, por lo que ajustamos el ritmo y los descansos según sus intereses sin prisas.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Salida Matutina Puntual</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Un recojo a las 8:00 AM le permite visitar Pikillaqta y Andahuaylillas antes de las horas pico de visitantes.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🥪</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Comidas No Incluidas</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Recomendamos traer agua y snacks ligeros. Podemos sugerir restaurantes locales después del tour si lo desea.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🥾</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Calzado Apropiado Requerido</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Use zapatos cómodos y resistentes para caminar. Tipón y Pikillaqta incluyen superficies irregulares y escalones de piedra.</p>    </div>  </div></div>',
      itinerary: [
        { time: '08:00 AM', activity: 'Recojo del Hotel en Cusco: Comenzamos el Tour Privado al Valle Sur con el recojo directo de su hotel en Cusco a las 8:00 a.m. Luego, nos dirigimos al sur en un recorrido panorámico de 30 minutos a través del campo andino.' },
        { time: 'Mañana', activity: 'Pueblo de Saylla (Parada Panorámica): En el camino, pasamos por el pueblo tradicional de Saylla, conocido por su gastronomía regional, especialmente el chicharrón. Aunque es una parada panorámica, añade contexto cultural al viaje.' },
        { time: 'Mañana', activity: 'Sitio Arqueológico de Tipón: Poco después, dejamos la carretera principal para llegar a Tipón, uno de los complejos de ingeniería hidráulica inca más impresionantes de Perú. Explorará terrazas agrícolas y fuentes ceremoniales.' },
        { time: 'Media Mañana', activity: 'Parada en Oropesa – Experiencia del Pan Tradicional: Regresamos a la carretera principal y nos detenemos en Oropesa, la "Capital del Pan del Cusco". Visitará una panadería tradicional para observar el proceso de elaboración del pan.' },
        { time: 'Mediodía', activity: 'Sitio Arqueológico de Pikillaqta: Continuamos hacia Pikillaqta, una vasta ciudad preinca construida por la civilización Wari. Este sitio arqueológico destaca por su avanzada planificación urbana y largas calles de piedra.' },
        { time: 'Tarde', activity: 'Andahuaylillas – La "Capilla Sixtina de América": Finalmente, visitamos Andahuaylillas, hogar de la Iglesia de San Pedro. En su interior, admirará extraordinarios murales y altares barrocos de la Escuela Cusqueña.' },
        { time: '03:00 PM', activity: 'Retorno a Cusco: Tras completar las visitas, regresamos cómodamente a Cusco, llegando a su hotel aproximadamente a las 3:00 p.m., concluyendo un viaje culturalmente rico y relajado.' }
      ],
      includes: [
        'Transporte turístico privado',
        'Botiquín de primeros auxilios',
        'Tanque de oxígeno',
        'Guía profesional de turismo (inglés o español)'
      ],
      excludes: [
        'Boleto Turístico Parcial (Valle Sur)',
        'Almuerzo',
        'Propinas'
      ],
      packing: [
        'Sombrero para el sol',
        'Bloqueador solar',
        'Chaqueta impermeable / poncho de lluvia',
        'Agua'
      ],
      highlights: [
        'Combinación Cultural Exclusiva: Conecte la historia inca, pre-inca (Wari) y colonial en un solo viaje de 6.5 horas.',
        'Horario Estratégico: Llegamos a Andahuaylillas antes de las horas pico para una experiencia más inmersiva.',
        'Contexto Histórico Experto: Nuestros guías privados explican temas complejos como la gestión del agua y el arte barroco.',
        'Gastronomía Local: Experimente la cultura auténtica con paradas en Oropesa (pan) y Saylla (chicharrones).',
        'Auténtico y sin Multitudes: Explore sitios menos conocidos lejos de las rutas de turismo masivo.'
      ],
      tips: [
        'Lleve efectivo en Soles para el Boleto Turístico (70 soles) y la entrada a la iglesia (15 soles); no aceptan tarjetas.',
        'Pase 1–2 días aclimatándose en Cusco antes; aunque la altura es moderada, Tipón llega a los 3,500m.',
        'La radiación UV es fuerte todo el año; use bloqueador y sombrero incluso en días nublados.',
        'Se requiere calzado cómodo para las terrazas de Tipón y los senderos de piedra de Pikillaqta.',
        'Se recomienda la salida puntual a las 8:00 AM para maximizar su tiempo dentro de la iglesia de Andahuaylillas.',
        'Manténgase hidratado: El aire andino es seco y la altura se siente incluso en rutas suaves como el Valle Sur.'
      ]
    }

  },
  {
    id: 7,
    slug: 'sacred-valley-private-tour',
    image: '/private/valle-sagrado-desde-cusco.png',
    price: '70',
    duration: 'Full Day',
    altitude: '2,800m – 3,700m',
    difficulty: 'Easy / Moderate',
    type: 'Cultural | History',
    departure: 'Cusco Hotels',
    destination: 'Cusco | Sacred Valley',

    latitude: -13.3333,
    longitude: -72.1167,
    en: {
      title: 'Sacred Valley Private Tour from Cusco',
      description: 'Explore the Sacred Valley of the Incas on a full-day private tour designed for travelers who want flexibility, comfort, and a deeper cultural experience.',
      overview: '<p class="mb-4 mt-0">Explore the Sacred Valley of the Incas on a full-day private tour designed for travelers who want flexibility, comfort, and a deeper cultural experience. This Sacred Valley Private Tour from Cusco is operated by a 100% local agency and guided by professional experts who live and work in the region.</p><p class="mb-4 mt-0">During this private journey, you will visit the most important archaeological and cultural sites of the Sacred Valley, including Pisac, Ollantaytambo, and Chinchero. Along the way, you will discover impressive Inca terraces, ancient temples, traditional Andean villages, and vibrant local markets, all at your own pace and without sharing the tour with large groups.</p><p class="mb-4 mt-0">Unlike standard group tours, this private Sacred Valley experience allows you to customize the rhythm of the visit, ask questions freely, and enjoy personalized attention from your guide. From hotel pickup in Cusco to a carefully planned itinerary, every detail is handled to ensure a smooth, informative, and memorable full-day tour through one of Peru’s most important historical regions.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Why embark on the Private Sacred Valley Tour with Inkaland Explorers?</h3><p class="mb-4 mt-0">Choosing Inkaland Explorers means traveling with a local Cusco-based company specialized in Sacred Valley private tours. Our experience in the region allows us to offer a well-balanced journey that combines Inca history, Andean culture, and breathtaking landscapes, all with the comfort of private service.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">🏛️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Iconic Archaeological Sites</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Explore iconic archaeological sites and admire impressive agricultural terraces while connecting with local communities.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">👨‍🏫</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Professional Local Guides</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Accompanied by a professional guide who adapts the experience to your interests and travel style.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⭐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Trusted by Travelers</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Travelers trust us for our reliability, personalized attention, and in-depth knowledge of the Sacred Valley.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🏅</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">TripAdvisor Excellence</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Read genuine feedback from previous guests where our private tours are consistently praised for their quality and authenticity.</p>    </div>  </div></div><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8">  <div class="flex items-center gap-2 text-[#0b403a] mb-2">    <svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20">      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>    </svg>    <span><strong>Note:</strong> 2 important aspects of the private tour</span>  </div>  <ul class="space-y-1.5 mb-0">    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>We leave at 7 am from Cusco to avoid crowds and offer you a more authentic and relaxed experience in the Sacred Valley.</span>    </li>    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>We avoid unnecessary stops at stores to maximize your time and enjoyment in the Sacred Valley.</span>    </li>  </ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Weather: Sacred Valley Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌧️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - APR</h4>      <p class="text-xs text-gray-700 mb-0">Rainy season brings refreshing showers; a light waterproof jacket is advised.</p>    </div>  </div>  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4>      <p class="text-xs text-gray-700 mb-0">Dry season offers ideal conditions for exploring ruins and markets.</p>    </div>  </div>  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🏔️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude</h4>      <p class="text-xs text-gray-700 mb-0">2,800m to 2,900m (9,200ft to 9,500ft) across the Sacred Valley.</p>    </div>  </div>  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌡️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperature</h4>      <p class="text-xs text-gray-700 mb-0">10°C to 22°C (50°F to 72°F) with cooler mornings and evenings.</p>    </div>  </div>  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">    <div class="text-2xl">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Gear & Conditions</h4>      <p class="text-xs text-gray-700 mb-0">Layered clothing recommended. Sun protection is essential: bring a hat, sunglasses, and sunscreen.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Advantages: Sacred Valley Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">🛣️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Dual Itinerary Flexibility</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Choose between two well-designed routes. This flexibility allows you to personalize your private Sacred Valley experience without rushing.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Authentic & Crowd-Aware Experience</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">We depart around 7:00 AM to reduce exposure to peak crowds. Our tours follow a no forced shopping stops policy.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🗣️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Private Guide & Cultural Interpretation</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Sites like Moray, Chinchero, and Ollantaytambo become meaningful experiences with in-depth explanations adapted to your interests.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🚐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Smooth Logistics</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Private transportation connects all key sites efficiently. We manage timing and routes so you can enjoy the journey without stress.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">➕</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Optional Maras & Moray Upgrade</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Enhance your tour with Maras Salt Mines and Moray (Option 2), offering a deeper perspective on Inca innovation within a single day.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Considerations: Sacred Valley Private Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🎟️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Entrance Fees Not Included</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Tourist ticket (70 soles) and Maras Salt Mines entrance (20 soles) are not included. Carry cash (Soles).</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🍽️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Lunch During the Tour</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Lunch in Urubamba is not included. Expect to spend approximately $15–25 USD, with options for special diets available.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⛰️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude Awareness</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">The tour covers elevations from 2,040m to 3,700m. We recommend 1–2 days acclimatizing in Cusco and staying hydrated.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Early Departure Advantage</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Pick-up begins around 7:00 AM. Punctuality helps maximize time at important locations like Ollantaytambo before peak crowds.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🥾</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Appropriate Footwear</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Comfortable walking shoes with good grip are strongly recommended due to uneven paths and stone staircases.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">➕</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Optional Super Sacred Valley Upgrade</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Option 2 includes Maras and Moray for an additional $15 USD. It covers more sites in one day and involves longer driving distances.</p>    </div>  </div></div>',
      itinerary: [
        { time: '07:00 AM', activity: 'Option 01: By Pisac (Alpacas Estate, Pisac Ruins, Ollantaytambo and Chinchero)\n\nWe will begin your excursion to the Sacred Valley by picking you up from your hotel at 7:00 am in Cusco. Our first destination is the impressive Pisac ruins and the vibrant Pisac shop, where you can enjoy local crafts and silversmithing.\n\nAfterwards, we will head to Urubamba to enjoy a delicious lunch and recharge for the next part of our adventure.\n\nAfter a delicious lunch in Urubamba we will go to the archaeological site of Ollantaytambo, an ancient Inca citadel of great historical importance.\n\nLater, we will visit the ruins of Chinchero, where you can further immerse yourself in the rich history and culture of the Sacred Valley.\n\nThen, we will go to the textile market where they will provide us with information on how the fabric process is carried out.\n\nFinally we will conclude our day at approximately 18:30 in the city of Cusco.' },
        { time: '07:00 AM', activity: 'Option 02: Super Valley (Chinchero, Maras-Moray, Ollantaytambo and Pisac Ruins)\n\nNote: There will be a category upgrade of $15 per person for this option.\n\nIn this Sacred Valley tour option from Cusco, we will pick you up at 07:00 am at your hotel. We will begin with a visit to the Chinchero Textile Center, where you will learn about the rich textile tradition of the place. Then we will go to the charming Colonial Town of Maras.\n\nFrom Maras we will continue towards the Inca site of Moray, famous for its circular terraces that were once used for experimenting with crops. We will then visit the impressive salt mines dating back to pre-Inca times, where water is channeled through pools to produce pure salt crystals.\n\nAfter the guided tour we will go to Urubamba. Here we will have a 1-hour stop to enjoy our lunch at a tourist restaurant.\n\nNext, we will continue our tour until we reach the town of Ollantaytambo, an ancient Inca citadel that offers impressive views and a fascinating history.\n\nAfter visiting Ollantaytambo, we will head to Pisac to explore its impressive ruins.\n\nFinally, after a day full of discoveries, we will return to Cusco around 19:00, thus concluding our day of exploration in the Sacred Valley.' }
      ],
      includes: [
        'Tourist transport',
        'Professional English or Spanish guide'
      ],
      excludes: [
        'Partial ticket for the Sacred Valley (70 soles)',
        'Entrance ticket to Salineras (20 soles)',
        'Lunch (Urubamba)'
      ],
      packing: [
        'Comfortable walking shoes with good grip',
        'Layered clothing (cooler mornings, warm midday)',
        'Light waterproof jacket or rain poncho',
        'Sun protection (hat, sunglasses, sunscreen)',
        'Water and light snacks',
        'Cash in Soles for entrance fees and lunch'
      ],
      highlights: [
        'Dual Itinerary Flexibility: Choose between two well-designed routes (Classic or Super Valley) based on your specific interests.',
        'Authentic & Crowd-Aware: We depart at 7:00 AM to ensure you experience key sites like Ollantaytambo before the large group buses arrive.',
        'No Tourist Traps: We follow a strict policy of no forced shopping stops, ensuring 100% of your time is spent on culture and history.',
        'Expert Interpretation: Our guides provide in-depth context on Inca agriculture, hydraulics, and Andean traditions at every site.',
        'Smooth Logistics: Private transportation connects all key sites efficiently, allowing for a relaxed and stress-free journey.'
      ],
      tips: [
        'Bring cash in Soles for the Tourist Ticket (70 soles) and Salt Mines (20 soles); card payments are rarely accepted at these sites.',
        'Acclimatize in Cusco for 1–2 days before the tour; elevations reach 3,700m in Chinchero.',
        'Lunch in Urubamba is not included, giving you the freedom to choose your preferred restaurant ($15–$25 range).',
        'Wear sturdy shoes: Sites like Pisac and Ollantaytambo involve steep stone staircases and uneven gravel paths.',
        'The "Super Valley" option involves longer driving distances and more sites; it is recommended for those wanting to maximize their day.',
        'UV radiation is intense at this altitude; sun protection is essential even if the day appears cloudy.'
      ]
    },
    es: {
      title: 'Tour Privado Valle Sagrado desde Cusco',
      description: 'Explore el Valle Sagrado de los Incas en un tour privado de día completo diseñado para viajeros que desean flexibilidad, comodidad y una experiencia cultural profunda.',
      overview: '<p class="mb-4 mt-0">Explore el Valle Sagrado de los Incas en un tour privado de día completo diseñado para viajeros que desean flexibilidad, comodidad y una experiencia cultural profunda. Este Tour Privado al Valle Sagrado desde Cusco es operado por una agencia 100% local y guiado por expertos profesionales que viven y trabajan en la región.</p><p class="mb-4 mt-0">Durante este viaje privado, visitará los sitios arqueológicos y culturales más importantes del Valle Sagrado, incluyendo Písac, Ollantaytambo y Chinchero. En el camino, descubrirá impresionantes terrazas incas, templos antiguos, pueblos andinos tradicionales y vibrantes mercados locales, todo a su propio ritmo y sin compartir el tour con grandes grupos.</p><p class="mb-4 mt-0">A diferencia de los tours grupales estándar, esta experiencia privada le permite personalizar el ritmo de la visita, hacer preguntas libremente y disfrutar de atención personalizada de su guía. Desde el recojo en el hotel en Cusco hasta un itinerario cuidadosamente planificado, cada detalle se maneja para garantizar un tour fluido, informativo y memorable.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">¿Por qué embarcarse en el Tour Privado al Valle Sagrado con Inkaland Explorers?</h3><p class="mb-4 mt-0">Elegir Inkaland Explorers significa viajar con una empresa local de Cusco especializada en tours privados. Nuestra experiencia en la región nos permite ofrecer un viaje bien equilibrado que combina historia inca, cultura andina y paisajes impresionantes, todo con la comodidad de un servicio privado.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">🏛️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Sitios Arqueológicos Icónicos</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Explore sitios arqueológicos icónicos y admire impresionantes terrazas agrícolas mientras se conecta con las comunidades locales.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">👨‍🏫</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Guías Locales Profesionales</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Acompañado por un guía profesional que adapta la experiencia a sus intereses y estilo de viaje.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⭐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Con la Confianza de Viajeros</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Los viajeros confían en nosotros por nuestra fiabilidad, atención personalizada y conocimiento profundo del Valle Sagrado.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🏅</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Excelencia en TripAdvisor</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Lea comentarios genuinos de clientes donde nuestros tours privados son elogiados por su calidad y autenticidad.</p>    </div>  </div></div><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8">  <div class="flex items-center gap-2 text-[#0b403a] mb-2">    <svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20">      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>    </svg>    <span><strong>Nota:</strong> 2 aspectos importantes del tour privado</span>  </div>  <ul class="space-y-1.5 mb-0">    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>Salimos a las 7 am desde Cusco para evitar multitudes y ofrecerle una experiencia más auténtica y relajada en el Valle Sagrado.</span>    </li>    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>Evitamos paradas innecesarias en tiendas para maximizar su tiempo y disfrute en el Valle Sagrado.</span>    </li>  </ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Clima para el Tour Privado al Valle Sagrado</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌧️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - ABR</h4>      <p class="text-xs text-gray-700 mb-0">La temporada de lluvias trae chubascos refrescantes; se recomienda una chaqueta impermeable ligera.</p>    </div>  </div>  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4>      <p class="text-xs text-gray-700 mb-0">La temporada seca ofrece condiciones ideales para explorar ruinas y mercados.</p>    </div>  </div>  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🏔️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitud</h4>      <p class="text-xs text-gray-700 mb-0">De 2,800m a 2,900m (9,200ft a 9,500ft) en todo el Valle Sagrado.</p>    </div>  </div>  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌡️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperatura</h4>      <p class="text-xs text-gray-700 mb-0">10°C a 22°C (50°F a 72°F) con mañanas y noches más frescas.</p>    </div>  </div>  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">    <div class="text-2xl">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Equipamiento y Condiciones</h4>      <p class="text-xs text-gray-700 mb-0">Se recomienda vestirse en capas. La protección solar es esencial: lleve gorra, gafas de sol y bloqueador.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Ventajas: Tour Privado al Valle Sagrado</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">🛣️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Flexibilidad de Itinerario Dual</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Elija entre dos rutas bien diseñadas. Esta flexibilidad le permite personalizar su experiencia privada sin prisas.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Experiencia Auténtica y sin Multitudes</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Salimos alrededor de las 7:00 AM para evitar las multitudes pico. Nuestros tours no tienen paradas de compras forzadas.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🗣️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Guía Privado e Interpretación Cultural</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Sitios como Moray, Chinchero y Ollantaytambo se convierten en experiencias significativas con explicaciones profundas adaptadas a usted.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🚐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Logística Fluida</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">El transporte privado conecta todos los sitios clave de manera eficiente. Manejamos el tiempo y las rutas para que disfrute el viaje sin estrés.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">➕</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Opción de Mejora a Maras y Moray</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Mejore su tour con Salineras de Maras y Moray (Opción 2), ofreciendo una perspectiva más profunda de la innovación Inca en un solo día.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Consideraciones: Tour Privado al Valle Sagrado</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🎟️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Entradas No Incluidas</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">El boleto turístico (70 soles) y la entrada a las Salineras (20 soles) no están incluidos. Lleve efectivo (Soles).</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🍽️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Almuerzo Durante el Tour</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">El almuerzo en Urubamba no está incluido. Espere gastar aprox. $15–25 USD, con opciones para dietas especiales disponibles.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⛰️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Conciencia de la Altitud</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">El tour cubre elevaciones desde 2,040m hasta 3,700m. Recomendamos 1–2 días de aclimatación en Cusco y mantenerse hidratado.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Ventaja de la Salida Temprana</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">El recojo comienza alrededor de las 7:00 AM. La puntualidad ayuda a maximizar el tiempo en lugares importantes como Ollantaytambo antes de las multitudes pico.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🥾</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Calzado Apropiado</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Se recomienda encarecidamente usar zapatos cómodos para caminar con buen agarre debido a los caminos irregulares y escalinatas de piedra.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">➕</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Mejora Opcional a Super Valle Sagrado</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">La Opción 2 incluye Maras y Moray por $15 USD adicionales. Cubre más sitios en un día e implica distancias de conducción más largas.</p>    </div>  </div></div>',
      itinerary: [
        { time: '07:00 AM', activity: 'Opción 01: Por Písac (Granja de Alpacas, Ruinas de Písac, Ollantaytambo y Chinchero)\n\nComenzaremos su excursión al Valle Sagrado recogiéndolo de su hotel a las 7:00 am en Cusco. Nuestro primer destino son las impresionantes ruinas de Písac y el vibrante mercado de Písac, donde podrá disfrutar de la artesanía local y platería.\n\nLuego, nos dirigiremos a Urubamba para disfrutar de un delicioso almuerzo y recargar energías para la siguiente parte de nuestra aventura.\n\nDespués de un delicioso almuerzo en Urubamba, iremos al sitio arqueológico de Ollantaytambo, una antigua ciudadela inca de gran importancia histórica.\n\nMás tarde, visitaremos las ruinas de Chinchero, donde podrá sumergirse aún más en la rica historia y cultura del Valle Sagrado.\n\nLuego, iremos al mercado textil donde nos brindarán información sobre cómo se lleva a cabo el proceso de los tejidos.\n\nFinalmente concluiremos nuestro día aproximadamente a las 18:30 en la ciudad de Cusco.' },
        { time: '07:00 AM', activity: 'Opción 02: Súper Valle (Chinchero, Maras-Moray, Ollantaytambo y Ruinas de Písac)\n\nNota: Habrá una mejora de categoría de $15 por persona para esta opción.\n\nEn esta opción de tour por el Valle Sagrado desde Cusco, lo recogeremos a las 07:00 am en su hotel. Comenzaremos con una visita al Centro Textil de Chinchero, donde aprenderá sobre la rica tradición textil del lugar. Luego iremos al encantador pueblo colonial de Maras.\n\nDesde Maras continuaremos hacia el sitio inca de Moray, famoso por sus terrazas circulares que alguna vez se usaron para experimentar con cultivos. Luego visitaremos las impresionantes minas de sal que datan de la época preincaica, donde el agua se canaliza a través de piscinas para producir cristales de sal pura.\n\nDespués del tour guiado iremos a Urubamba. Aquí tendremos una parada de 1 hora para disfrutar de nuestro almuerzo en un restaurante turístico.\n\nA continuación, continuaremos nuestro recorrido hasta llegar al pueblo de Ollantaytambo, una antigua ciudadela inca que ofrece vistas impresionantes y una historia fascinante.\n\nDespués de visitar Ollantaytambo, nos dirigiremos a Písac para explorar sus impresionantes ruinas.\n\nFinalmente, después de un día lleno de descubrimientos, regresaremos a Cusco alrededor de las 19:00, concluyendo así nuestro día de exploración en el Valle Sagrado.' }
      ],
      includes: [
        'Transporte turístico privado',
        'Guía profesional de turismo (inglés o español)'
      ],
      excludes: [
        'Boleto Turístico Parcial para el Valle (70 soles)',
        'Boleto de entrada a las Salineras (20 soles)',
        'Almuerzo en Urubamba'
      ],
      packing: [
        'Zapatos de caminata cómodos con buen agarre',
        'Ropa en capas (mañanas frescas, mediodía caluroso)',
        'Chaqueta impermeable ligera o poncho de lluvia',
        'Protección solar (gorra, lentes, bloqueador)',
        'Agua y snacks ligeros',
        'Efectivo en Soles para entradas y almuerzo'
      ],
      highlights: [
        'Flexibilidad de Itinerario Dual: Elija entre dos rutas bien diseñadas (Clásica o Super Valle) según sus intereses específicos.',
        'Auténtico y Consciente de las Multitudes: Salimos a las 7:00 AM para asegurar que experimente sitios clave antes que los buses grandes.',
        'Sin Trampas para Turistas: Seguimos una política estricta de no paradas de compras forzadas, dedicando el 100% del tiempo a la cultura.',
        'Interpretación de Expertos: Nuestros guías brindan un contexto profundo sobre la agricultura inca, hidráulica y tradiciones andinas.',
        'Logística Fluida: El transporte privado conecta todos los sitios clave de manera eficiente, permitiendo un viaje relajado.'
      ],
      tips: [
        'Lleve efectivo en Soles para el Boleto Turístico (70 soles) y Salineras (20 soles); raramente se aceptan tarjetas.',
        'Aclimatarse en Cusco por 1–2 días antes del tour; la altura llega a 3,700m en Chinchero.',
        'El almuerzo en Urubamba no está incluido, dándole la libertad de elegir su restaurante preferido (rango $15–$25).',
        'Use zapatos resistentes: Sitios como Písac y Ollantaytambo incluyen escalinatas de piedra empinadas y senderos de grava.',
        'La opción "Super Valle" implica distancias de manejo más largas y más sitios; se recomienda para quienes desean maximizar su día.',
        'La radiación UV es intensa; la protección solar es esencial incluso si el día parece nublado.'
      ]
    }

  },
  {
    id: 8,
    slug: 'rainbow-mountain-vinicunca',
    image: '/private/vinicunca-desde-cusco.png',
    price: '110',
    duration: 'Full Day',
    altitude: '5,036m',
    difficulty: 'Moderate / Hard',
    type: 'Adventure | Trekking',
    departure: 'Cusco Hotels',
    destination: 'Vinicunca Mountain',
    latitude: -13.8643,
    longitude: -71.3025,
    en: {
      title: 'Rainbow Mountain Private Tour from Cusco (Vinicunca)',
      description: 'Experience Rainbow Mountain in a more comfortable, flexible, and personal way with our Rainbow Mountain Private Tour from Cusco. This exclusive experience is designed for travelers who want to avoid crowds, manage the altitude properly, and enjoy one of Peru’s most iconic landscapes at their own pace.',
      overview: '<p class="mb-4 mt-0">Experience Rainbow Mountain in a more comfortable, flexible, and personal way with our Rainbow Mountain Private Tour from Cusco. This exclusive experience is designed for travelers who want to avoid crowds, manage the altitude properly, and enjoy one of Peru’s most iconic landscapes at their own pace.</p><p class="mb-4 mt-0">Unlike shared group tours with rigid schedules, our private service allows you to adjust departure times, walk at a comfortable rhythm, and spend more time enjoying the views of Vinicunca and the surrounding Andean valleys. This makes a significant difference at high altitude, where pacing and rest are essential.</p><p class="mb-4 mt-0">Your journey begins with a private hotel pickup in Cusco, followed by a scenic drive through remote Andean communities, open valleys, and dramatic mountain landscapes. Along the way, your professional local guide will explain the cultural background, geology, and natural processes that give Rainbow Mountain its famous colors—while also monitoring your acclimatization and overall comfort.</p><p class="mb-4 mt-0">This private Rainbow Mountain tour offers a safer, more personalized, and more rewarding way to experience Vinicunca, especially for travelers who value flexibility, comfort, and expert local guidance.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Location: Rainbow Mountain Private Tour</h3><p class="mb-4 mt-0">Rainbow Mountain, also known as Vinicunca, is located at 5,036 meters (16,522 ft) above sea level, making it one of the highest tourist attractions in Peru. It lies approximately 120 km southeast of Cusco, in the Canchis province, within the Vilcanota mountain range, near the snow-capped Ausangate Mountain—one of the most sacred Apus in Andean cosmology.</p><p class="mb-4 mt-0">The mountain is situated in the Ccayrahuire sector of the Pampachiri community, a remote high-Andean area surrounded by wide valleys, glaciers, and traditional pastoral landscapes. Due to its altitude and distance, visiting Rainbow Mountain requires early departures and well-organized logistics, which is why a private tour from Cusco offers a safer and more comfortable experience.</p><p class="mb-4 mt-0">This location is ideal for travelers seeking dramatic scenery, fewer crowds, and a deeper connection with the Andes. Thanks to its accessibility on a full-day excursion from Cusco, Rainbow Mountain fits perfectly into itineraries focused on nature, adventure, and high-altitude landscapes.</p><p class="mb-4 mt-0">If you are also planning to explore Peru’s most iconic archaeological site, this experience can be combined with a Machu Picchu day trip or a multi-day itinerary from Cusco.</p><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8">  <div class="flex items-center gap-2 text-[#0b403a] mb-2">    <svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20">      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>    </svg>    <span><strong>Note:</strong> Two important aspects of Rainbow Mountain Private Tour</span>  </div>  <ul class="space-y-1.5 mb-0">    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>Your guide will accompany you throughout the entire tour, providing support at all times.</span>    </li>    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>We leave Cusco at 3:00 a.m. to avoid crowds and offer you a more authentic and relaxed experience at Rainbow Mountain.</span>    </li>  </ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Weather: Private tour of Rainbow Mountain</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌧️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">DEC - APR</h4>      <p class="text-xs text-gray-700 mb-0">The rainy season arrives, with nights dropping to -5°C, so a warm jacket is essential.</p>    </div>  </div>  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - NOV</h4>      <p class="text-xs text-gray-700 mb-0">Enjoy dry days with temperatures between 5 and 15 °C, perfect for a private Andean adventure.</p>    </div>  </div>  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🏔️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude</h4>      <p class="text-xs text-gray-700 mb-0">5,036 m (16,522 ft) above sea level.</p>    </div>  </div>  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌡️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperature</h4>      <p class="text-xs text-gray-700 mb-0">-5°C to 15°C (23°F to 59°F) depending on the season and time.</p>    </div>  </div>  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">    <div class="text-2xl">🌬️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Gear & Conditions</h4>      <p class="text-xs text-gray-700 mb-0">The wind adds a touch of excitement to this private excursion. A warm jacket is essential for this luxurious experience.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Benefits: Private tour to Rainbow Mountain</h3><p class="mb-4 mt-0 text-gray-700 text-sm">Choosing our Rainbow Mountain Private Tour gives you full control, comfort, and safety while visiting one of Peru’s most extreme and spectacular destinations.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Early departure for fewer crowds</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">We depart at 3:00 a.m. to arrive before most group tours, allowing you to enjoy Rainbow Mountain with significantly fewer people.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">👨‍🏫</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Personalized private guide</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">A professional local guide accompanies you throughout the journey, adjusting the pace and sharing insights about Andean culture.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⛰️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">High-altitude support at 5,036 m</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Visiting Vinicunca at extreme altitude requires experience. Our private format allows frequent breaks and close attention.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🥾</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Hike at your own pace</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Unlike group tours, this private experience lets you walk slowly, rest when needed, and enjoy the landscape without pressure.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🏞️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Authentic cultural connection</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Along the route, you’ll encounter traditional Andean communities and landscapes offering a deeper understanding of local life.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">☕</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Comfort included</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Breakfast, lunch, and trekking poles are included to ensure a safer and more comfortable Rainbow Mountain day trip.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Considerations: Private tour to Rainbow Mountain</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🫁</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude awareness (5,036 m)</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">We strongly recommend spending at least 2 days in Cusco or the Sacred Valley before the tour to acclimatize properly.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Weather and clothing</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Dress in layers, including thermal clothing, a waterproof jacket, gloves, and a hat as temperatures can change quickly.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">💪</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Physical condition</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">The hike is approximately 7 km round trip and moderate. Your guide adapts the pace and ensures you hike comfortably.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Early departure</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">The 3:00 a.m. departure allows us to avoid large crowds, enjoy better trail conditions, and reach the viewpoint early.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">💧</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Hydration and essentials</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Bring enough water, as dehydration occurs faster. Sunscreen and sunglasses are recommended due to strong UV exposure.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🐴</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Optional horse assistance</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Horses are available locally for rent if needed (not included). Helpful for travelers who feel fatigued during the ascent.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">History: Rainbow Mountain (Vinicunca)</h3><p class="mb-4 mt-0">Rainbow Mountain, also known as Vinicunca, is more than a colorful landscape—it is a place shaped by millions of years of geological processes and deeply connected to Andean spiritual beliefs.</p><p class="mb-4 mt-0"><strong>Geological Origins:</strong> Over millions of years, Rainbow Mountain’s vibrant colors—reds, yellows, greens, and turquoise—were formed by layers of mineral-rich sediments. As tectonic movements and erosion gradually reshaped the landscape, iron oxide, sulfur, copper, and other minerals surfaced, ultimately creating the striking natural patterns visible today. These geological formations remained hidden beneath glaciers for centuries, which is why Rainbow Mountain is considered a relatively recent natural discovery.</p><p class="mb-4 mt-0"><strong>Spiritual Significance:</strong> Vinicunca is located near Nevado Ausangate, one of the most sacred mountains in the Andes. For the Inca civilization and modern Andean communities, Ausangate is an Apu—a protective mountain spirit believed to hold powerful masculine energy and act as a guardian of the region. Rainbow Mountain is spiritually connected to this sacred landscape, and many local communities still honor the mountain as part of their ancestral traditions.</p><p class="mb-4 mt-0"><strong>Modern Discovery:</strong> For centuries, Rainbow Mountain was visited only by high-altitude trekkers exploring the Ausangate region. It wasn’t until 2015, when a photograph went viral on social media, that Vinicunca gained worldwide attention. Since then, it has become one of Peru’s most iconic destinations—yet its high altitude and remote location still demand responsible and well-organized visits.</p><p class="mb-4 mt-0"><strong>Conservation and Tourism:</strong> Local communities actively manage and protect the area, balancing tourism with environmental conservation. Respecting trails, cultural beliefs, and local regulations is essential to preserving Rainbow Mountain for future generations.</p>',
      itinerary: [
        { time: '03:00 AM', activity: 'Pickup at your hotel. We will then head to Cusipata for a comfortable 2-hour drive.' },
        { time: '05:00 AM', activity: 'Breakfast in Cusipata to properly prepare for the day ahead.' },
        { time: '06:30 AM', activity: 'Once at the starting point of the hike, we will begin the ascent to the summit of Rainbow Mountain. This takes around 2 hours.' },
        { time: '08:30 AM', activity: 'Upon reaching the summit (5,036m), we will have time to explore the surroundings, take panoramic photographs, and immerse ourselves in the grandeur of the Peruvian Andes.' },
        { time: '10:30 AM', activity: 'After our visit to the summit, we will begin the descent back to the starting point.' },
        { time: '12:30 PM', activity: 'Once in Cusipata, a comforting lunch awaits us to replenish our energy and enjoy the local hospitality.' },
        { time: '05:00 PM', activity: 'Return trip to Cusco, arriving at approximately 5:00 p.m.' }
      ],
      includes: [
        'Professional Guide',
        'First aid kit',
        'Oxygen tank',
        'Breakfast and lunch',
        'Private transportation',
        'Trekking poles (carbon)',
        'Entrance ticket'
      ],
      excludes: [
        'Staff incentives (optional)',
        'Personal emergency horse'
      ],
      packing: [
        'Water',
        'Waterproof hiking shoes',
        'Warm clothing (thermal clothing, fleece, hat, gloves)',
        'Waterproof clothing (waterproof jacket, poncho)',
        'Sun hat, sunglasses',
        'Sunscreen',
        'Personal expense'
      ],
      highlights: [
        'Early 3 AM Departure: We leave early to reach the summit before the mass crowds, offering a more peaceful and authentic experience.',
        'High-Altitude Expertise: Our private guides closely monitor your acclimatization and provide constant support at 5,036 meters.',
        'Hike at Your Own Rhythm: Unlike shared tours, you can walk at a comfortable pace with frequent breaks—essential for managing the altitude.',
        'Geological & Spiritual Context: Learn about the millions of years of mineral layering that created the colors and the mountain’s sacred link to Apu Ausangate.',
        'All-Inclusive Logistics: We handle entrance fees, breakfast, lunch, and safety gear, allowing you to focus entirely on the trek.'
      ],
      tips: [
        'Proper acclimatization is mandatory: Spend at least 2 full days in Cusco or the Sacred Valley before attempting this hike (5,036m).',
        'Mountain weather is extreme: Temperatures can drop to -5°C; dress in high-quality thermal and waterproof layers.',
        'The 3:00 AM start is vital to avoid weather changes and enjoy better light for photography at the viewpoint.',
        'Altitude drains batteries instantly; keep your phone/camera in a warm pocket and carry a power bank.',
        'UV exposure is extreme at 5,000m even if cloudy; sun protection is non-negotiable for skin and eyes.',
        'Optional horse assistance is available for rent from the local community if you find the ascent too demanding.'
      ]
    },
    es: {
      title: 'Tour Privado Montaña de Colores (Vinicunca) desde Cusco',
      description: 'Experimente la Montaña de Colores de una manera más cómoda, flexible y personal con nuestro Tour Privado a la Montaña de Colores desde Cusco. Esta experiencia exclusiva está diseñada para viajeros que desean evitar multitudes, manejar la altitud adecuadamente y disfrutar a su propio ritmo.',
      overview: '<p class="mb-4 mt-0">Experimente la Montaña de Colores de una manera más cómoda, flexible y personal con nuestro Tour Privado desde Cusco. Esta experiencia exclusiva está diseñada para viajeros que desean evitar multitudes, manejar la altitud adecuadamente y disfrutar de uno de los paisajes más icónicos de Perú a su propio ritmo.</p><p class="mb-4 mt-0">A diferencia de los tours grupales compartidos con horarios rígidos, nuestro servicio privado le permite ajustar los horarios de salida, caminar a un ritmo cómodo y pasar más tiempo disfrutando de las vistas de Vinicunca y los valles andinos circundantes. Esto hace una diferencia significativa a gran altitud, donde el ritmo y el descanso son esenciales.</p><p class="mb-4 mt-0">Su viaje comienza con un recojo privado en su hotel en Cusco, seguido de un recorrido panorámico a través de comunidades andinas remotas, valles abiertos y paisajes montañosos espectaculares. En el camino, su guía local profesional le explicará los antecedentes culturales, la geología y los procesos naturales que dan a la Montaña de Colores sus famosos colores, mientras supervisa su aclimatación y comodidad general.</p><p class="mb-4 mt-0">Este tour privado a la Montaña de Colores ofrece una forma más segura, personalizada y gratificante de experimentar Vinicunca, especialmente para los viajeros que valoran la flexibilidad, la comodidad y la orientación de un experto local.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Ubicación: Tour Privado Montaña de Colores</h3><p class="mb-4 mt-0">La Montaña de Colores, también conocida como Vinicunca, se encuentra a 5.036 metros (16.522 pies) sobre el nivel del mar, lo que la convierte en una de las atracciones turísticas más altas del Perú. Se encuentra aproximadamente a 120 km al sureste de Cusco, en la provincia de Canchis, dentro de la cordillera del Vilcanota, cerca del nevado Ausangate, uno de los Apus más sagrados en la cosmología andina.</p><p class="mb-4 mt-0">La montaña está situada en el sector Ccayrahuire de la comunidad de Pampachiri, una zona remota altoandina rodeada de amplios valles, glaciares y paisajes pastorales tradicionales. Debido a su altitud y distancia, visitar la Montaña de Colores requiere salidas tempranas y una logística bien organizada, por lo que un tour privado desde Cusco ofrece una experiencia más segura y cómoda.</p><p class="mb-4 mt-0">Esta ubicación es ideal para viajeros que buscan paisajes espectaculares, menos multitudes y una conexión más profunda con los Andes. Gracias a su accesibilidad en una excursión de día completo desde Cusco, la Montaña de Colores encaja perfectamente en itinerarios centrados en la naturaleza, la aventura y los paisajes de gran altitud.</p><p class="mb-4 mt-0">Si también planea explorar el sitio arqueológico más emblemático del Perú, esta experiencia se puede combinar con una excursión de un día a Machu Picchu o un itinerario de varios días desde Cusco.</p><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8">  <div class="flex items-center gap-2 text-[#0b403a] mb-2">    <svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20">      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>    </svg>    <span><strong>Nota:</strong> Dos aspectos importantes del Tour Privado Montaña de Colores</span>  </div>  <ul class="space-y-1.5 mb-0">    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>Su guía lo acompañará durante todo el recorrido, brindándole apoyo en todo momento.</span>    </li>    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>Salimos de Cusco a las 3:00 a.m. para evitar multitudes y ofrecerle una experiencia más auténtica y relajada.</span>    </li>  </ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Clima: Tour Privado Montaña de Colores</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌧️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">DIC - ABR</h4>      <p class="text-xs text-gray-700 mb-0">Llega la temporada de lluvias, con noches que bajan a -5°C, por lo que una chaqueta abrigada es esencial.</p>    </div>  </div>  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - NOV</h4>      <p class="text-xs text-gray-700 mb-0">Disfrute de días secos con temperaturas entre 5 y 15 °C, perfectos para una aventura andina.</p>    </div>  </div>  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🏔️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitud</h4>      <p class="text-xs text-gray-700 mb-0">5.036 m (16.522 pies) sobre el nivel del mar.</p>    </div>  </div>  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌡️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperatura</h4>      <p class="text-xs text-gray-700 mb-0">-5°C a 15°C (23°F a 59°F) dependiendo de la temporada y hora.</p>    </div>  </div>  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">    <div class="text-2xl">🌬️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Equipamiento y Condiciones</h4>      <p class="text-xs text-gray-700 mb-0">El viento añade un toque de emoción a esta excursión privada. Una chaqueta abrigada es esencial.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Beneficios: Tour Privado a la Montaña de Colores</h3><p class="mb-4 mt-0 text-gray-700 text-sm">Elegir nuestro tour privado le brinda un control total, comodidad y seguridad mientras visita uno de los destinos más extremos de Perú.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Salida temprana</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Salimos a las 3:00 a.m. para llegar antes que la mayoría de los tours grupales, permitiéndole disfrutar de la montaña con menos personas.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">👨‍🏫</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Guía privado personalizado</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Un guía local profesional lo acompaña durante todo el viaje, ajustando el ritmo y compartiendo conocimientos andinos.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⛰️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Soporte en altura (5,036 m)</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Visitar Vinicunca a gran altura requiere experiencia. Nuestro formato permite descansos frecuentes y atención cercana.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🥾</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Camine a su propio ritmo</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">A diferencia de los tours grupales, esta experiencia le permite caminar lentamente, descansar y disfrutar del paisaje sin presión.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🏞️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Conexión cultural auténtica</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">En la ruta encontrará comunidades andinas tradicionales, ofreciendo una comprensión más profunda de la vida local.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">☕</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Comodidad incluida</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">El desayuno, almuerzo y bastones de trekking están incluidos para garantizar un viaje más seguro y cómodo.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Consideraciones: Tour Privado a la Montaña de Colores</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🫁</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Conciencia de altitud (5,036 m)</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Recomendamos encarecidamente pasar al menos 2 días en Cusco o el Valle Sagrado antes del tour para aclimatarse adecuadamente.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Clima y ropa</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Vístase en capas, incluyendo ropa térmica, chaqueta impermeable, guantes y gorro, ya que las temperaturas cambian rápidamente.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">💪</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Condición física</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">La caminata es de aprox. 7 km ida y vuelta y moderada. Su guía adapta el ritmo y se asegura de que camine cómodamente.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Salida temprana</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">La salida a las 3:00 a.m. nos permite evitar multitudes, disfrutar de mejores senderos y llegar al mirador temprano.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">💧</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Hidratación y elementos básicos</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Lleve suficiente agua. Se recomiendan protector solar y gafas de sol debido a la fuerte exposición a los rayos UV.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🐴</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Asistencia opcional de caballos</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Hay caballos disponibles para alquilar si es necesario (no incluido). Útil para viajeros que sienten fatiga en el ascenso.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Historia: Montaña de Colores (Vinicunca)</h3><p class="mb-4 mt-0">La Montaña de Colores, también conocida como Vinicunca, es más que un paisaje colorido: es un lugar moldeado por millones de años de procesos geológicos y profundamente conectado con las creencias espirituales andinas.</p><p class="mb-4 mt-0"><strong>Orígenes Geológicos:</strong> A lo largo de millones de años, los colores vibrantes de la Montaña de Colores se formaron por capas de sedimentos ricos en minerales. A medida que los movimientos tectónicos y la erosión remodelaron gradualmente el paisaje, el óxido de hierro, azufre, cobre y otros minerales salieron a la superficie, creando los sorprendentes patrones naturales visibles hoy.</p><p class="mb-4 mt-0"><strong>Significado Espiritual:</strong> Vinicunca se encuentra cerca del Nevado Ausangate, una de las montañas más sagradas de los Andes. Para la civilización Inca y las comunidades andinas, Ausangate es un Apu, un espíritu protector de la montaña. La Montaña de Colores está conectada espiritualmente a este paisaje sagrado.</p><p class="mb-4 mt-0"><strong>Descubrimiento Moderno:</strong> Durante siglos, la Montaña de Colores solo fue visitada por excursionistas de gran altitud. No fue hasta 2015 que Vinicunca ganó atención mundial. Desde entonces, se ha convertido en uno de los destinos más icónicos del Perú.</p><p class="mb-4 mt-0"><strong>Conservación y Turismo:</strong> Las comunidades locales manejan y protegen activamente la zona, equilibrando el turismo con la conservación ambiental. Respetar los senderos, las creencias culturales y las regulaciones locales es esencial para preservar la montaña para las generaciones futuras.</p>',
      itinerary: [
        { time: '03:00 AM', activity: 'Recojo en su hotel. Luego nos dirigiremos a Cusipata para un cómodo viaje de 2 horas.' },
        { time: '05:00 AM', activity: 'Desayuno en Cusipata para prepararnos adecuadamente para el día.' },
        { time: '06:30 AM', activity: 'Una vez en el punto de inicio, comenzaremos el ascenso a la cumbre. Esto tomará unas 2 horas.' },
        { time: '08:30 AM', activity: 'Al llegar a la cumbre (5.036 msnm), tendremos tiempo para explorar, tomar fotografías y disfrutar del paisaje andino.' },
        { time: '10:30 AM', activity: 'Después de nuestra visita a la cumbre, comenzaremos el descenso de regreso al punto de inicio.' },
        { time: '12:30 PM', activity: 'Una vez en Cusipata, nos espera un almuerzo reconfortante para reponer energías.' },
        { time: '05:00 PM', activity: 'Viaje de regreso a Cusco, llegando aproximadamente a las 5:00 p.m.' }
      ],
      includes: [
        'Guía Profesional',
        'Botiquín de primeros auxilios',
        'Tanque de oxígeno',
        'Desayuno y almuerzo',
        'Transporte privado',
        'Bastones de trekking (carbono)',
        'Boleto de entrada'
      ],
      excludes: [
        'Incentivos al personal (opcional)',
        'Caballo de emergencia personal'
      ],
      packing: [
        'Agua',
        'Zapatos de trekking impermeables',
        'Ropa de abrigo (térmica, polar, gorro, guantes)',
        'Ropa impermeable (chaqueta, poncho)',
        'Sombrero para el sol, gafas de sol',
        'Protector solar',
        'Gastos personales'
      ],
      highlights: [
        'Salida Temprana 3 AM: Salimos temprano para llegar a la cumbre antes que las masas, ofreciendo una experiencia más tranquila.',
        'Experiencia en Altura: Nuestros guías monitorean de cerca su aclimatación y brindan soporte constante a 5,036 metros.',
        'Camine a su Propio Ritmo: A diferencia de los tours compartidos, puede caminar sin presión, algo esencial para manejar la altitud.',
        'Contexto Geológico y Espiritual: Aprenda sobre la formación mineral de los colores y el vínculo sagrado con el Apu Ausangate.',
        'Logística Todo Incluido: Manejamos entradas, comidas y equipo de seguridad para que se enfoque solo en el trek.'
      ],
      tips: [
        'La aclimatación previa es obligatoria: Pase al menos 2 días completos en Cusco o el Valle Sagrado antes de este trek (5,036m).',
        'El clima de montaña es extremo: Las temperaturas pueden bajar a -5°C; vista capas térmicas e impermeables de calidad.',
        'El inicio a las 3:00 AM es vital para evitar cambios climáticos y disfrutar de mejor luz para las fotos.',
        'La altitud agota las baterías instantáneamente; mantenga su celular/cámara en un bolsillo abrigado.',
        'La radiación UV es extrema a 5,000m; la protección solar es indispensable para piel y ojos.',
        'Se puede alquilar un caballo a la comunidad local si siente que el ascenso es demasiado exigente.'
      ]
    }

  },
  {
    id: 9,
    slug: 'cusco-city-tour-private',
    image: '/private/cusco-privado.png',
    price: '50',
    duration: 'Half Day',
    altitude: '3,300m – 3,700m',
    difficulty: 'Easy',
    type: 'Cultural | History',
    departure: 'Cusco Hotels',
    destination: 'Cusco City',
    latitude: -13.5167,
    longitude: -71.9667,
    en: {
      title: 'Private Cusco City Tour Half Day',
      description: 'Exclusive exploration of the Inca capital, including the Sun Temple and surrounding archaeological fortresses.',
      overview: '<p class="mb-4 mt-0">Private Cusco City Tour Half Day is the ideal way to explore the historic capital of the Inca Empire with comfort, flexibility, and expert local insight. Designed for travelers who want a deeper understanding of Cusco without rushing or large groups, this private experience allows you to discover the city at your own pace.</p><p class="mb-4 mt-0">Cusco sits at over 3,300 meters (10,826 ft) above sea level and blends Inca foundations with colonial architecture, living traditions, and vibrant local life. On this half-day private city tour, you’ll visit the most important highlights, including the Plaza de Armas, the impressive fortress of Sacsayhuaman, and the iconic Qorikancha (Temple of the Sun), once the spiritual center of the Inca Empire.</p><p class="mb-4 mt-0">With a licensed local guide by your side, you won’t just see Cusco, you’ll understand it. Your guide will explain the historical significance, cultural context, and hidden details behind each site, adapting the tour to your interests and pace. This private Cusco City Tour is perfect for travelers who want a meaningful, well-organized introduction to the city in just a few hours.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Why Choose Inkaland Explorers for Your Private Cusco City Tour?</h3><p class="mb-4 mt-0">Choosing a private Cusco City Tour with Inkaland Explorers means exploring the city with a team that truly knows it—because we live here. As a local Cusco-based agency, we design this tour for travelers who want clarity, comfort, and authentic insight, not a rushed checklist.</p><p class="mb-4 mt-0">Our private city tour allows flexible timing, personalized explanations, and direct interaction with your guide. We avoid unnecessary stops and focus on Cusco’s most important archaeological and historical sites, adapting the pace to your needs—especially helpful for travelers adjusting to altitude.</p><p class="mb-4 mt-0">From start to finish, we prioritize professionalism, safety, and local knowledge. Our guides are licensed, experienced, and passionate about sharing Cusco’s history beyond surface-level facts.</p><p class="mb-4 mt-0">You can also check our TripAdvisor reviews to see why travelers trust us for private tours in Cusco.</p><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8">  <div class="flex items-center gap-2 text-[#0b403a] mb-2">    <svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20">      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>    </svg>    <span><strong>Note:</strong> Important aspect of the private tour</span>  </div>  <ul class="space-y-1.5 mb-0">    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>We avoid unnecessary stops in stores to maximize your time and enjoyment.</span>    </li>  </ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Weather: Cusco City Tour</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌧️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - APR</h4>      <p class="text-xs text-gray-700 mb-0">Rainy season brings occasional showers. Light waterproof jacket recommended.</p>    </div>  </div>  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4>      <p class="text-xs text-gray-700 mb-0">Dry season offers clear skies perfect for visiting archaeological sites.</p>    </div>  </div>  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🏔️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude</h4>      <p class="text-xs text-gray-700 mb-0">3,400 m (11,150 ft) above sea level.</p>    </div>  </div>  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌡️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperature</h4>      <p class="text-xs text-gray-700 mb-0">Daytime ranges from 10-20°C (50-68°F) with cooler mornings and evenings.</p>    </div>  </div>  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">    <div class="text-2xl">🌬️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Sun Exposure</h4>      <p class="text-xs text-gray-700 mb-0">The high altitude means strong sun exposure. Sun protection is essential: bring hat, sunglasses, and sunscreen.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Advantages: Private Cusco City Tour (Half Day)</h3><p class="mb-4 mt-0 text-gray-700 text-sm">Choosing our Private Cusco City Tour (Half Day) with Inkaland Explorers gives you a deeper, more personal way to explore the historic capital of the Inca Empire—without crowds, rushing, or unnecessary stops.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">👨‍🏫</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Personalized Historical Experience</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Your private local guide adapts the tour to your interests, explaining Cusco’s layered Inca and colonial history at each site.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⏱️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Efficient Half-Day Itinerary</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">The optimized afternoon schedule allows you to visit Cusco’s most important archaeological sites without feeling rushed.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🛍️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">No Commercial Stops Policy</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">We do not include forced shopping stops or tourist traps. Your time is dedicated exclusively to history and culture.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🚐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Comfortable Door-to-Door Service</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Private transportation with hotel pickup and drop-off is included, allowing you to relax while we handle logistics.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🏛️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Inca Engineering & Sacred Sites Explained</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Understand the purpose behind each site—from Tambomachay’s water channels to Pucapucara’s lookouts.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⭐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Trusted by Travelers on TripAdvisor</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Our tours are highly rated for professionalism, storytelling, and attention to detail. We help you understand the sites.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Considerations: Private Cusco City Tour (Half Day)</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🎟️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Entrance Fees Not Included</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">The Cusco Tourist Ticket (S/.70) and Coricancha entrance fee (S/.15) are not included. Please bring cash.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Flexible Start Time</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Although the standard departure is 2:00 PM, we can adapt the start time and pace according to your schedule.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🫁</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude Adaptation Advisory</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Sites range between 3,400 m and 3,700 m. We recommend spending 1–2 days acclimatizing before the tour.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Microclimate Preparedness</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Cusco’s weather can change quickly. Bring sun protection and a light rain jacket or poncho.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🥾</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Appropriate Footwear Required</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Wear comfortable walking shoes with good grip. Areas like Sacsayhuaman have uneven stone paths and stairs.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">💧</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Hydration Recommended</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Since there are no meal stops, we recommend bringing enough water and light snacks to stay energized.</p>    </div>  </div></div>',
      itinerary: [
        { time: '02:00 PM', activity: 'Hotel Pickup: We will pick you up at your hotel punctually to begin our tour of the most notable places in Cusco.' },
        { time: '02:30 PM', activity: 'Coricancha Temple: Visit the Golden Palace, housing a wealth of meanings and representing the worship of various Inca deities.' },
        { time: '03:30 PM', activity: 'Sacsayhuaman Fortress: Explore this imposing fortress located on top of a mountain with panoramic views of Cusco.' },
        { time: '04:30 PM', activity: 'Qenqo: Also known as the Labyrinth, this temple dedicated to Mother Earth is a ceremonial center.' },
        { time: '05:00 PM', activity: 'Pucapucara: An archaeological complex that gives us the opportunity to appreciate urban planning and Inca architecture.' },
        { time: '05:30 PM', activity: 'Tambomachay: Known as the Baños del Inca, we will explore the water sources and canals used for rituals.' },
        { time: '06:00 PM', activity: 'Return to Hotel: We will end the tour at approximately 18:00, dropping you off at your hotel.' }
      ],
      includes: [
        'Professional guide',
        'Tourist transport'
      ],
      excludes: [
        'Staff incentives (optional)',
        'Entry ticket (Foreigner – S/. 70.00 x Person)',
        'Entrance ticket to Coricancha (Foreigner – S/. 15.00 x Person)'
      ],
      packing: [
        'Sun hat',
        'Sun protection cream (factor 35 recommended)',
        'Waterproof jacket/rain poncho',
        'Water'
      ],
    },
    es: {
      title: 'City Tour Privado Cusco',
      description: 'Exploración exclusiva de la capital Inca, incluyendo el Templo del Sol y las fortalezas arqueológicas circundantes.',
      overview: '<p class="mb-4 mt-0">El City Tour Privado en Cusco de Medio Día es la forma ideal de explorar la capital histórica del Imperio Inca con comodidad, flexibilidad y la perspectiva de expertos locales. Diseñada para viajeros que desean una comprensión más profunda de Cusco sin prisas ni grandes grupos, esta experiencia privada le permite descubrir la ciudad a su propio ritmo.</p><p class="mb-4 mt-0">Cusco se encuentra a más de 3.300 metros (10.826 pies) sobre el nivel del mar y combina cimientos incas con arquitectura colonial, tradiciones vivas y una vibrante vida local. En este recorrido privado de medio día, visitará los lugares más importantes, incluida la Plaza de Armas, la impresionante fortaleza de Sacsayhuamán y el emblemático Qoricancha (Templo del Sol), antiguo centro espiritual del Imperio Inca.</p><p class="mb-4 mt-0">Con un guía local acreditado a su lado, no solo verá Cusco, lo comprenderá. Su guía le explicará la importancia histórica, el contexto cultural y los detalles ocultos detrás de cada sitio, adaptando el recorrido a sus intereses y ritmo. Este City Tour Privado en Cusco es perfecto para viajeros que desean una introducción significativa y bien organizada a la ciudad en solo unas pocas horas.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">¿Por qué elegir Inkaland Explorers para su City Tour Privado en Cusco?</h3><p class="mb-4 mt-0">Elegir un City Tour Privado en Cusco con Inkaland Explorers significa explorar la ciudad con un equipo que realmente la conoce, porque vivimos aquí. Como agencia local con sede en Cusco, diseñamos este recorrido para viajeros que desean claridad, comodidad y una perspectiva auténtica, no una lista de verificación apresurada.</p><p class="mb-4 mt-0">Nuestro tour privado por la ciudad permite horarios flexibles, explicaciones personalizadas y una interacción directa con su guía. Evitamos paradas innecesarias y nos centramos en los sitios arqueológicos e históricos más importantes de Cusco, adaptando el ritmo a sus necesidades, algo especialmente útil para los viajeros que se adaptan a la altitud.</p><p class="mb-4 mt-0">De principio a fin, priorizamos la profesionalidad, la seguridad y el conocimiento local. Nuestros guías están acreditados, tienen experiencia y sienten pasión por compartir la historia de Cusco más allá de los datos superficiales.</p><p class="mb-4 mt-0">También puede consultar nuestras opiniones en TripAdvisor para ver por qué los viajeros confían en nosotros para recorridos privados en Cusco.</p><div class="bg-[#0b403a]/5 border-l-4 border-[#dfa126] p-3.5 rounded-r-xl text-xs mb-8">  <div class="flex items-center gap-2 text-[#0b403a] mb-2">    <svg class="w-4 h-4 text-[#dfa126]" fill="currentColor" viewBox="0 0 20 20">      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>    </svg>    <span><strong>Nota:</strong> Aspecto importante del tour privado</span>  </div>  <ul class="space-y-1.5 mb-0">    <li class="flex items-start gap-2 text-gray-700 leading-snug">      <div class="w-1.5 h-1.5 rounded-full bg-[#dfa126] mt-1 shrink-0"></div>      <span>Evitamos paradas innecesarias en tiendas para maximizar su tiempo y disfrute.</span>    </li>  </ul></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Clima: City Tour Cusco</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌧️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - ABR</h4>      <p class="text-xs text-gray-700 mb-0">La temporada de lluvias trae chubascos ocasionales. Se recomienda una chaqueta impermeable ligera.</p>    </div>  </div>  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">☀️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4>      <p class="text-xs text-gray-700 mb-0">La temporada seca ofrece cielos despejados perfectos para visitar sitios arqueológicos.</p>    </div>  </div>  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🏔️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitud</h4>      <p class="text-xs text-gray-700 mb-0">3.400 m (11.150 pies) sobre el nivel del mar.</p>    </div>  </div>  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">    <div class="text-2xl">🌡️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperatura</h4>      <p class="text-xs text-gray-700 mb-0">Varía de 10 a 20 °C durante el día, con mañanas y noches más frías.</p>    </div>  </div>  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">    <div class="text-2xl">🌬️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Exposición Solar</h4>      <p class="text-xs text-gray-700 mb-0">La gran altitud significa una fuerte exposición al sol. Es indispensable sombrero, gafas de sol y protector solar.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Ventajas: City Tour Privado en Cusco (Medio Día)</h3><p class="mb-4 mt-0 text-gray-700 text-sm">Elegir nuestro City Tour Privado le brinda una forma más profunda y personal de explorar la capital del Imperio Inca, sin multitudes ni paradas innecesarias.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">  <div class="flex gap-3">    <div class="text-2xl shrink-0">👨‍🏫</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Experiencia Histórica Personalizada</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Su guía local privado adapta el recorrido a sus intereses, explicando la historia inca y colonial de Cusco en cada sitio.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⏱️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Itinerario Eficiente</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">El horario optimizado de la tarde le permite visitar los sitios arqueológicos más importantes sin sentirse apresurado.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🛍️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Política de No Paradas Comerciales</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">No incluimos paradas de compras forzadas ni trampas para turistas. Su tiempo se dedica exclusivamente a la historia.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🚐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Cómodo Servicio Puerta a Puerta</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Se incluye transporte privado con recogida y regreso al hotel, permitiéndole relajarse mientras manejamos la logística.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">🏛️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Ingeniería Inca Explicada</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Comprenda el propósito detrás de cada sitio, desde los canales de agua de Tambomachay hasta los miradores de Puca Pucara.</p>    </div>  </div>  <div class="flex gap-3">    <div class="text-2xl shrink-0">⭐</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Recomendado en TripAdvisor</h4>      <p class="text-xs text-gray-600 leading-snug mb-0">Nuestros tours están altamente calificados por su profesionalidad y atención al detalle. Le ayudamos a entender los lugares.</p>    </div>  </div></div><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Consideraciones: City Tour Privado en Cusco</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🎟️</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Entradas No Incluidas</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">El Boleto Turístico de Cusco (S/. 70) y la entrada a Coricancha (S/. 15) no están incluidos. Lleve efectivo en soles.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">⏰</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Horario de Inicio Flexible</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Aunque la salida estándar es a las 2:00 PM, podemos adaptar la hora de inicio y el ritmo según su horario.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🫁</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Aviso de Adaptación a la Altitud</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Los sitios oscilan entre 3.400 y 3.700 m. Recomendamos pasar 1-2 días aclimatándose en Cusco antes del recorrido.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🧥</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Preparación para Microclimas</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">El clima puede cambiar rápidamente. Lleve protección solar y una chaqueta ligera para la lluvia o poncho.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">🥾</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Se Requiere Calzado Adecuado</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Use zapatos cómodos para caminar con buen agarre. Algunas áreas, como Sacsayhuamán, tienen caminos de piedra irregulares.</p>    </div>  </div>  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">    <div class="text-xl shrink-0 mt-0.5">💧</div>    <div>      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Hidratación Recomendada</h4>      <p class="text-xs text-gray-700 leading-snug mb-0">Como no hay paradas para comer, recomendamos llevar suficiente agua y bocadillos ligeros para mantenerse con energía.</p>    </div>  </div></div>',
      itinerary: [
        { time: '02:00 PM', activity: 'Recojo en el Hotel: Le recogeremos puntualmente para comenzar nuestro recorrido por los lugares más notables de Cusco.' },
        { time: '02:30 PM', activity: 'Templo de Coricancha: Visite el Palacio de Oro, que alberga una gran riqueza de significados y representa el culto a las deidades incas.' },
        { time: '03:30 PM', activity: 'Fortaleza de Sacsayhuamán: Explore esta imponente fortaleza ubicada en la cima de una montaña con vistas panorámicas.' },
        { time: '04:30 PM', activity: 'Qenqo: También conocido como el Laberinto, este templo dedicado a la Madre Tierra es un centro ceremonial.' },
        { time: '05:00 PM', activity: 'Puca Pucara: Complejo arqueológico que nos da la oportunidad de apreciar el urbanismo y la arquitectura inca.' },
        { time: '05:30 PM', activity: 'Tambomachay: Conocido como los Baños del Inca, exploraremos las fuentes de agua y canales utilizados para rituales.' },
        { time: '06:00 PM', activity: 'Regreso al Hotel: Terminaremos el recorrido aproximadamente a las 18:00 hrs.' }
      ],
      includes: [
        'Guía profesional',
        'Transporte turístico'
      ],
      excludes: [
        'Incentivos al personal (opcional)',
        'Boleto de entrada (Extranjero – S/. 70.00 x Persona)',
        'Boleto de entrada a Coricancha (Extranjero – S/. 15.00 x Persona)'
      ],
      packing: [
        'Sombrero para el sol',
        'Crema de protección solar (factor 35 recomendado)',
        'Chaqueta impermeable / poncho de lluvia',
        'Agua'
      ],
    }
  },
  {
    id: 11,
    slug: 'ausangate-7-lakes-hike',
    image: '/tour-ausangate.png',
    price: '130',
    duration: 'Full Day',
    altitude: '4,200m – 4,850m',
    difficulty: 'Challenging',
    type: 'Group Tour | Trekking',
    departure: 'Cusco Hotels',
    destination: 'Cusco | Ausangate',
    latitude: -13.7889,
    longitude: -71.2333,
    en: {
      title: 'Ausangate 7 Lakes Full Day Hike from Cusco',
      description: 'Explore the emerald lakes at the foot of the mighty Ausangate glacier.',
      overview: '<p class="mb-4 mt-0">Embark on a breathtaking adventure through the majestic Andes with our 7 Lakes of Ausangate Full-Day Tour. Located in the Vilcanota mountain range south of Cusco, this immersive experience leads you through stunning high-altitude landscapes dotted with turquoise glacial lakes, traditional Andean villages, and the imposing presence of Ausangate Mountain – the fifth highest in Peru.</p><p class="mb-4 mt-0">This one-day trek is perfect for nature lovers, photographers, and those seeking a peaceful escape from the crowds. It combines natural beauty with cultural richness, offering panoramic views, alpacas, and optional relaxation in natural hot springs.</p>',
      itinerary: [
        { time: '04:30 AM', activity: 'Hotel Pickup in Cusco: We’ll start early with a pickup from your hotel and drive south for approx. 3.5 hours to the village of Pacchanta, the gateway to the Ausangate trail.' },
        { time: '08:00 AM', activity: 'Arrival in Pacchanta & Breakfast: Upon arrival, enjoy a traditional Andean breakfast prepared by the locals. This is also your chance to rent a horse if needed.' },
        { time: '09:00 AM', activity: 'Start of the Trek: Begin your hike through high-altitude plains surrounded by snow-capped peaks. You’ll pass seven crystalline lakes, each uniquely beautiful and sacred to local communities.' },
        { time: '01:00 PM', activity: 'Optional Hot Springs: After the hike, you’ll have time to relax in the Pacchanta hot springs (entry not included).' },
        { time: '02:30 PM', activity: 'Traditional Lunch: Refuel with a hearty local lunch before returning to Cusco.' },
        { time: '03:30 PM', activity: 'Return to Cusco: Board the transport back to Cusco, arriving at your hotel around 6:30 PM.' }
      ],
      includes: [
        'Round-trip transportation from Cusco',
        'Breakfast and lunch (vegetarian options available)',
        'Professional English/Spanish-speaking guide',
        'Entrance to the Ausangate circuit and lakes',
        'Basic first aid kit and oxygen',
        'Guided trek to the 7 lagoons'
      ],
      excludes: [
        'Entrance to hot springs (approx. S/ 10)',
        'Horse rental (optional – S/ 90 to S/ 100 round trip)',
        'Travel insurance',
        'Tips for guide and driver',
        'Personal snacks and water'
      ],
      packing: [
        'Original passport',
        'Warm clothes and waterproof jacket',
        'Comfortable hiking boots',
        'Sun hat, sunglasses & sunscreen',
        'Water and snacks',
        'Swimsuit and towel (for hot springs)',
        'Extra cash in Soles'
      ],
      highlights: [
        'Hike through the Ausangate valley, one of the most sacred mountains in the Andes',
        'Visit 7 stunning glacial lakes: Azul Cocha, Otorongo, Alqa Cocha, Q’omer Cocha, Orco Otorongo, China Otorongo & Puca Cocha',
        'Encounter alpacas, llamas, and remote Andean communities',
        'Ideal for trekking, photography, and nature lovers',
        'Optional visit to natural thermal baths at the end of the hike'
      ],
      tips: [
        'Acclimatize in Cusco for a few days due to the high altitude (up to 4,850m).',
        'Drink plenty of coca tea or water to help with altitude sickness.'
      ]
    },
    es: {
      title: 'Ausangate 7 Lagunas - Tour de Día Completo desde Cusco',
      description: 'Explora las lagunas de color esmeralda a los pies del imponente glaciar Ausangate.',
      overview: '<p class="mb-4 mt-0">Embárcate en una impresionante aventura a través de los majestuosos Andes con nuestro tour de día completo a las 7 Lagunas del Ausangate. Ubicada en la cordillera de Vilcanota al sur de Cusco, esta experiencia inmersiva te lleva por impresionantes paisajes de gran altitud salpicados de lagos glaciares turquesas, pueblos andinos tradicionales y la imponente presencia de la montaña Ausangate, la quinta más alta del Perú.</p><p class="mb-4 mt-0">Esta caminata de un día es perfecta para los amantes de la naturaleza, los fotógrafos y aquellos que buscan un escape tranquilo lejos de las multitudes. Combina la belleza natural con la riqueza cultural, ofreciendo vistas panorámicas, alpacas y relajación opcional en las aguas termales naturales.</p>',
      itinerary: [
        { time: '04:30 AM', activity: 'Recojo en el Hotel en Cusco: Comenzaremos temprano con el recojo de tu hotel y viajaremos hacia el sur por aprox. 3.5 horas hasta el pueblo de Pacchanta.' },
        { time: '08:00 AM', activity: 'Llegada a Pacchanta y Desayuno: Al llegar, disfruta de un desayuno andino tradicional. También es la oportunidad para alquilar un caballo si es necesario.' },
        { time: '09:00 AM', activity: 'Inicio de la Caminata: Comienza tu caminata por las llanuras altoandinas. Pasarás por siete lagunas cristalinas (Azul Cocha, Otorongo, Alqa Cocha, Q’omer Cocha, Orco Otorongo, China Otorongo y Puca Cocha).' },
        { time: '01:00 PM', activity: 'Aguas Termales (Opcional): Después de la caminata, tendrás tiempo para relajarte en las aguas termales de Pacchanta (ingreso no incluido).' },
        { time: '02:30 PM', activity: 'Almuerzo Tradicional: Recarga energías con un contundente almuerzo local antes de regresar.' },
        { time: '03:30 PM', activity: 'Retorno a Cusco: Aborda el transporte de regreso a Cusco, llegando a tu hotel alrededor de las 6:30 PM.' }
      ],
      includes: [
        'Transporte de ida y vuelta desde Cusco',
        'Desayuno y almuerzo (opciones vegetarianas disponibles)',
        'Guía profesional bilingüe (Inglés/Español)',
        'Entrada al circuito del Ausangate y las lagunas',
        'Botiquín básico de primeros auxilios y oxígeno',
        'Caminata guiada a las 7 lagunas'
      ],
      excludes: [
        'Ingreso a las aguas termales (aprox. S/ 10)',
        'Alquiler de caballos (opcional – S/ 90 a S/ 100 ida y vuelta)',
        'Seguro de viaje',
        'Propinas para el guía y el conductor',
        'Snacks y agua personal'
      ],
      packing: [
        'Pasaporte original',
        'Ropa abrigadora y chaqueta impermeable',
        'Botas de montaña cómodas',
        'Sombrero para el sol, gafas y protector solar',
        'Agua y snacks',
        'Traje de baño y toalla (para las aguas termales)',
        'Efectivo extra en Soles'
      ],
      highlights: [
        'Camina por el valle del Ausangate, una de las montañas más sagradas de los Andes',
        'Visita 7 impresionantes lagos glaciares: Azul Cocha, Otorongo, Alqa Cocha, Q’omer Cocha, Orco Otorongo, China Otorongo y Puca Cocha',
        'Encuentra alpacas, llamas y comunidades andinas remotas',
        'Ideal para los amantes del trekking, la fotografía y la naturaleza',
        'Visita opcional a los baños termales naturales al final de la caminata'
      ],
      tips: [
        'Aclimatarse en Cusco por unos días debido a la gran altitud (hasta 4,850 m).',
        'Beber abundante té de coca o agua para ayudar con el mal de altura.'
      ]
    }
  },
  {
    id: 12,
    slug: 'machu-picchu-day-tour-from-cusco',
    image: '/machu-picchu/machupicchu-cusco.png',
    heroImage: '/machu-picchu/bc-machupicchu-cusco.png',
    price: '280',
    duration: 'Full Day',
    altitude: '2,040m – 2,430m',
    difficulty: 'Moderate',
    type: 'Group Tour | Cultural',
    departure: 'Cusco Hotels',
    destination: 'Machu Picchu',
    latitude: -13.1631,
    longitude: -72.5450,
    en: {
      title: 'Machu Picchu Tour from Cusco – Full Day Trip',
      description: 'Experience the magic of one of the New Seven Wonders of the World in a single day.',
      overview: '<p class="mb-4 mt-0">Machu Picchu Day Trip from Cusco is the perfect choice for travelers with limited time who don’t want to miss the magic of one of the New Seven Wonders of the World. This full-day tour includes train tickets, bus transfers, entrance fees, and a professional local guide, making your journey to the legendary Lost City of the Incas smooth and unforgettable.</p><p class="mb-4 mt-0">From the cobblestone streets of Cusco, through the scenic Sacred Valley of the Incas, to the majestic ruins of Machu Picchu, you’ll live a once-in-a-lifetime adventure packed with history, culture, and breathtaking landscapes.</p>',
      itinerary: [
        { time: 'Morning', activity: 'Travel Made Simple: Early morning hotel pick-up in Cusco, followed by a scenic drive to Ollantaytambo train station. Board a panoramic tourist train to Aguas Calientes.' },
        { time: 'Mid-Day', activity: 'Guided Tour of Machu Picchu: Short bus ride to the entrance. 2-3 hour guided tour exploring the Temple of the Sun, Intihuatana, and Sacred Plaza.' },
        { time: 'Afternoon', activity: 'Free Time in Aguas Calientes: Return to town to enjoy lunch, shop for souvenirs, or relax by the Urubamba River.' },
        { time: 'Evening', activity: 'Return to Cusco: Board your train back to Ollantaytambo, where private transport will be waiting to take you back to Cusco.' }
      ],
      includes: [
        'Professional English-speaking Local Tour Guide',
        'Train Tickets (Round-trip Ollantaytambo – Aguas Calientes)',
        'Transportation Cusco – Ollantaytambo – Cusco',
        'Round-trip Bus Tickets (Aguas Calientes – Machu Picchu)',
        'Entrance to Machu Picchu'
      ],
      excludes: [
        'International Airfare',
        'Meals and Beverages',
        'Travel Insurance',
        'Permits for Machu Picchu Mountain or Huayna Picchu (optional)',
        'Any Personal Expenses & Optional Gratuities'
      ],
      packing: [
        'Original passport (mandatory)',
        'Student card (if booked with discount)',
        'Small backpack and comfortable walking shoes',
        'Sun hat, sunglasses & sunscreen',
        'Rain jacket or poncho',
        'Water & light snacks',
        'Cash for small expenses'
      ],
      highlights: [
        'Comfortable Travel with scenic train ride',
        'Guided Exploration of the Temple of the Sun and Intihuatana',
        'Cultural Immersion into Inca history and engineering',
        'All-Inclusive hassle-free experience'
      ],
      tips: [
        'Acclimatize in Cusco for at least 1–2 days before the tour.',
        'Best season: dry season (May–September) for clear views.'
      ]
    },
    es: {
      title: 'Tour a Machu Picchu desde Cusco – Día Completo',
      description: 'Experimenta la magia de una de las Nuevas Siete Maravillas del Mundo en un solo día.',
      overview: '<p class="mb-4 mt-0">El viaje de un día a Machu Picchu desde Cusco es la opción perfecta para los viajeros con tiempo limitado que no quieren perderse la magia de una de las Nuevas Siete Maravillas del Mundo. Este tour de día completo incluye boletos de tren, traslados en autobús, entradas y un guía local profesional, haciendo que tu viaje a la legendaria Ciudad Perdida de los Incas sea inolvidable y sin complicaciones.</p><p class="mb-4 mt-0">Desde las calles empedradas de Cusco, a través del pintoresco Valle Sagrado de los Incas, hasta las majestuosas ruinas de Machu Picchu, vivirás una aventura única en la vida llena de historia, cultura y paisajes impresionantes.</p>',
      itinerary: [
        { time: 'Mañana', activity: 'Viaje Simple: Recojo temprano en el hotel en Cusco, seguido de un viaje panorámico hasta la estación de Ollantaytambo. Tren turístico hacia Aguas Calientes.' },
        { time: 'Mediodía', activity: 'Tour Guiado en Machu Picchu: Corto viaje en bus hasta la entrada. Tour guiado de 2-3 horas explorando el Templo del Sol, el Intihuatana y la Plaza Sagrada.' },
        { time: 'Tarde', activity: 'Tiempo Libre en Aguas Calientes: Retorno al pueblo para almorzar, comprar recuerdos o relajarse junto al río Urubamba.' },
        { time: 'Noche', activity: 'Retorno a Cusco: Abordaje del tren de regreso a Ollantaytambo, donde un transporte lo estará esperando para llevarlo a Cusco.' }
      ],
      includes: [
        'Guía profesional bilingüe',
        'Boletos de Tren (Ida y vuelta Ollantaytambo – Aguas Calientes)',
        'Transporte Cusco – Ollantaytambo – Cusco',
        'Boletos de Bus (Ida y vuelta Aguas Calientes – Machu Picchu)',
        'Boleto de Ingreso a Machu Picchu'
      ],
      excludes: [
        'Vuelos Internacionales',
        'Alimentación y Bebidas',
        'Seguro de Viaje',
        'Permisos para Montaña Machu Picchu o Huayna Picchu (opcional)',
        'Gastos personales y propinas'
      ],
      packing: [
        'Pasaporte original (obligatorio)',
        'Carnet de estudiante (si se reservó con descuento)',
        'Mochila pequeña y zapatos cómodos',
        'Sombrero para el sol, gafas y protector solar',
        'Chaqueta impermeable o poncho de lluvia',
        'Agua y snacks ligeros',
        'Efectivo para gastos menores'
      ],
      highlights: [
        'Viaje cómodo con tren panorámico',
        'Exploración guiada por el Templo del Sol e Intihuatana',
        'Inmersión cultural en la historia e ingeniería Inca',
        'Experiencia Todo Incluido y sin complicaciones'
      ],
      tips: [
        'Aclimatarse en Cusco por lo menos 1–2 días antes del tour.',
        'Mejor época: temporada seca (mayo-septiembre) para vistas despejadas.'
      ]
    }
  },
  {
    id: 13,
    slug: 'sacred-valley-machu-picchu-2-days',
    image: '/machu-picchu/machu-picchu-2d1n.png',
    heroImage: '/machu-picchu/bc-machu-picchu-2d1n.png',
    price: '380',
    duration: '2 Days / 1 Night',
    altitude: '2,040m – 3,762m',
    difficulty: 'Easy to Moderate',
    type: 'Group Tour | Cultural',
    departure: 'Cusco Hotels',
    destination: 'Machu Picchu',
    latitude: -13.1631,
    longitude: -72.5450,
    en: {
      title: 'Sacred Valley + Machu Picchu Tour – 2 Days / 1 Night',
      description: 'Combine two of Peru’s most iconic experiences: the Sacred Valley of the Incas and the citadel of Machu Picchu.',
      overview: '<p class="mb-4 mt-0">This 2-day, 1-night adventure combines two of Peru’s most iconic experiences: the Sacred Valley of the Incas and the citadel of Machu Picchu.</p><p class="mb-4 mt-0">Begin your journey exploring Chinchero, Moray, Maras, Ollantaytambo, and enjoy a buffet lunch in Urubamba. At the end of the day, board the tourist train from Ollantaytambo to Aguas Calientes, where you’ll spend the night.</p><p class="mb-4 mt-0">The next morning, visit Machu Picchu with a guided tour, then return to Cusco by train and transport. This itinerary is ideal for travelers looking to make the most of their time, combining culture, history, and comfort in one seamless experience.</p>',
      itinerary: [
        { time: 'Day 1', activity: 'Sacred Valley Exploration + Train to Aguas Calientes: Explore Chinchero, Moray, Maras, and Ollantaytambo. Buffet lunch in Urubamba. Evening train ride to Aguas Calientes for overnight stay.' },
        { time: 'Day 2', activity: 'Machu Picchu – The Lost City of the Incas: Early bus to Machu Picchu. 2-hour guided tour. Return to Aguas Calientes for lunch, then train to Ollantaytambo and transfer back to Cusco.' }
      ],
      includes: [
        'Professional bilingual guide (English/Spanish) for both days',
        'Tourist transportation for the Sacred Valley tour',
        'Round-trip train tickets (Expedition or Voyager class)',
        'Round-trip bus tickets (Aguas Calientes - Machu Picchu)',
        'Entrance ticket to Machu Picchu',
        'Entrance fees to archaeological sites (only included in private service)',
        '2-hour guided tour inside Machu Picchu',
        'Private transfer back to Cusco and your hotel',
        'Entrance to the Maras Salt Mines',
        '1-night accommodation in a 3-star hotel or similar in Aguas Calientes'
      ],
      excludes: [
        'Breakfast on Day 1',
        'Dinner in Aguas Calientes',
        'Entrance to the hot springs (optional)',
        'Travel insurance',
        'Gratuities for guide and staff',
        'Snacks or drinks not mentioned'
      ],
      packing: [
        'Original passport (mandatory)',
        'Small backpack for the overnight stay',
        'Comfortable walking shoes',
        'Sun hat, sunglasses & sunscreen',
        'Rain jacket or poncho',
        'Water & snacks',
        'Cash for small expenses'
      ],
      highlights: [
        'Full-day Sacred Valley Tour (Chinchero, Moray, Maras, Urubamba, Ollantaytambo)',
        'Buffet lunch in the Sacred Valley',
        'Tourist train ride to Aguas Calientes and overnight stay',
        'Guided tour of Machu Picchu with expert guide'
      ],
      tips: [
        'Bring only a small overnight backpack as trains have luggage limits.'
      ]
    },
    es: {
      title: 'Tour Valle Sagrado + Machu Picchu – 2 Días / 1 Noche',
      description: 'Combina dos de las experiencias más icónicas del Perú: el Valle Sagrado de los Incas y la ciudadela de Machu Picchu.',
      overview: '<p class="mb-4 mt-0">Esta aventura de 2 días y 1 noche combina dos de las experiencias más icónicas del Perú: el Valle Sagrado de los Incas y la ciudadela de Machu Picchu.</p><p class="mb-4 mt-0">Comienza tu viaje explorando Chinchero, Moray, Maras, Ollantaytambo y disfruta de un almuerzo buffet en Urubamba. Al final del día, aborda el tren turístico desde Ollantaytambo hacia Aguas Calientes, donde pasarás la noche.</p><p class="mb-4 mt-0">A la mañana siguiente, visita Machu Picchu con un tour guiado, luego regresa a Cusco en tren y transporte. Este itinerario es ideal para los viajeros que buscan aprovechar al máximo su tiempo, combinando cultura, historia y comodidad en una experiencia sin contratiempos.</p>',
      itinerary: [
        { time: 'Día 1', activity: 'Exploración del Valle Sagrado + Tren a Aguas Calientes: Explora Chinchero, Moray, Maras y Ollantaytambo. Almuerzo buffet en Urubamba. Tren por la tarde a Aguas Calientes para pasar la noche.' },
        { time: 'Día 2', activity: 'Machu Picchu – La Ciudad Perdida de los Incas: Bus temprano a Machu Picchu. Tour guiado de 2 horas. Retorno a Aguas Calientes para almorzar, luego tren a Ollantaytambo y traslado de regreso a Cusco.' }
      ],
      includes: [
        'Guía profesional bilingüe (Inglés/Español) para ambos días',
        'Transporte turístico para el tour del Valle Sagrado',
        'Boletos de tren ida y vuelta (clase Expedition o Voyager)',
        'Boletos de bus ida y vuelta (Aguas Calientes - Machu Picchu)',
        'Boleto de ingreso a Machu Picchu',
        'Boletos de ingreso a sitios arqueológicos (solo incluido en servicio privado)',
        'Tour guiado de 2 horas dentro de Machu Picchu',
        'Traslado privado de regreso a Cusco y a tu hotel',
        'Ingreso a las Salineras de Maras',
        '1 noche de alojamiento en hotel 3 estrellas o similar en Aguas Calientes'
      ],
      excludes: [
        'Desayuno del Día 1',
        'Cena en Aguas Calientes',
        'Entrada a las aguas termales (opcional)',
        'Seguro de viaje',
        'Propinas para el guía y el personal',
        'Snacks o bebidas no mencionadas'
      ],
      packing: [
        'Pasaporte original (obligatorio)',
        'Mochila pequeña para la estadía de una noche',
        'Zapatos cómodos para caminar',
        'Sombrero para el sol, gafas y protector solar',
        'Chaqueta impermeable o poncho de lluvia',
        'Agua y snacks',
        'Efectivo para gastos menores'
      ],
      highlights: [
        'Tour de día completo por el Valle Sagrado (Chinchero, Moray, Maras, Urubamba, Ollantaytambo)',
        'Almuerzo buffet en el Valle Sagrado',
        'Viaje en tren turístico a Aguas Calientes y pernocte',
        'Tour guiado en Machu Picchu con guía experto'
      ],
      tips: [
        'Lleva solo una mochila pequeña, los trenes tienen límites de equipaje.'
      ]
    }
  },
  {
    id: 14,
    slug: 'vinicunca-rainbow-mountain-day-trip',
    image: '/tour-vinicunca.png',
    price: '50',
    duration: 'Full Day',
    altitude: '4,600m – 5,200m',
    difficulty: 'Moderate',
    type: 'Group Tour | Trekking',
    departure: 'Cusco Hotels',
    destination: 'Cusco',
    latitude: -13.8694,
    longitude: -71.3025,
    en: {
      title: 'Vinicunca: Rainbow Mountain Day Trip',
      description: 'Embark on a breathtaking full-day adventure to Rainbow Mountain, one of Peru’s most stunning natural wonders.',
      overview: '<p class="mb-4 mt-0">Embark on a breathtaking full-day adventure to Rainbow Mountain, also known as Vinicunca, one of Peru’s most stunning natural wonders. Located in the heart of the Andes, this colorful mountain offers a surreal landscape of vibrant mineral stripes, visible only in a handful of places around the world.</p><p class="mb-4 mt-0">Starting early from Cusco, you’ll travel through traditional Andean villages and scenic valleys before beginning the moderate trek to the summit. As you ascend, you’ll be rewarded with panoramic views of snow-capped peaks, grazing alpacas, and the incredible beauty of the Red Valley.</p><p class="mb-4 mt-0">This tour is perfect for adventurous travelers looking to witness a unique geological phenomenon and immerse themselves in high-altitude nature.</p>',
      itinerary: [
        { time: '04:00 AM', activity: 'Hotel Pickup in Cusco: We’ll pick you up early in the morning from your accommodation in Cusco. Begin a scenic 3-hour drive through picturesque Andean landscapes toward the trailhead.' },
        { time: '07:00 AM', activity: 'Breakfast Stop in a Local Village: Enjoy a light Andean breakfast prepared by a local community before the hike. Take this time to rest and acclimatize.' },
        { time: '08:00 AM', activity: 'Start the Hike to Rainbow Mountain: Begin a guided hike toward Vinicunca (Rainbow Mountain). The trail is approx. 4 km (2.5 mi) one way, with moderate difficulty due to the high altitude.' },
        { time: '10:00 AM', activity: 'Arrival at the Summit (5,200 m / 17,060 ft): Take in the incredible panoramic views of the Rainbow Mountain and the Red Valley. You’ll have time to rest, explore, and take amazing photos.' },
        { time: '11:00 AM', activity: 'Begin Descent: After enjoying the summit, begin the descent back to the base along the same trail.' },
        { time: '12:30 PM', activity: 'Buffet Lunch in a Local Restaurant: Refuel with a delicious traditional lunch made from local ingredients. Vegetarian options available.' },
        { time: '01:30 PM', activity: 'Return Trip to Cusco: Board the transport back to Cusco and enjoy the relaxing drive as you descend from the highlands.' },
        { time: '04:30 PM', activity: 'Arrival in Cusco: You’ll be dropped off at your hotel with incredible memories of this high-altitude adventure.' }
      ],
      includes: [
        'Round-trip transportation from your hotel in Cusco in a comfortable tourist van',
        'Breakfast and buffet lunch in local restaurants (vegetarian options available)',
        'Professional English-speaking guide with first-aid training',
        'Entrance ticket to Rainbow Mountain (Vinicunca)',
        'Emergency oxygen tank and basic first-aid kit for altitude support',
        'Personalized assistance throughout the tour',
        'Small-group experience for personalized service'
      ],
      excludes: [
        'Horse rental (available on-site, approx. 80–100 soles, cash only)',
        'Snacks, water, and additional drinks',
        'Tips for guide and driver (optional but appreciated)',
        'Hiking equipment (poles, boots, etc. – bring your own)'
      ],
      packing: [
        'Original passport',
        'Comfortable hiking boots',
        'Warm clothes (layers recommended)',
        'Rain jacket or poncho',
        'Sun hat, sunglasses & sunscreen',
        'Water and snacks',
        'Extra cash (in Soles) for horse rental or snacks'
      ],
      highlights: [
        'Hike to one of the most colorful mountains on Earth',
        'Enjoy panoramic views of the Andes & Red Valley',
        'Spot alpacas, llamas, and wildlife along the trail',
        'Guided small-group experience with local experts'
      ],
      tips: [
        'Acclimatize in Cusco for at least 2 days before taking this tour.',
        'Drink plenty of coca tea or water to help with the altitude.'
      ]
    },
    es: {
      title: 'Vinicunca: Tour a la Montaña de 7 Colores',
      description: 'Embárcate en una impresionante aventura de día completo a la Montaña de los 7 Colores, una de las maravillas naturales del Perú.',
      overview: '<p class="mb-4 mt-0">Embárcate en una impresionante aventura de día completo a la Montaña de 7 Colores, también conocida como Vinicunca, una de las maravillas naturales más impresionantes del Perú. Ubicada en el corazón de los Andes, esta colorida montaña ofrece un paisaje surrealista de franjas minerales vibrantes, visibles solo en unos pocos lugares alrededor del mundo.</p><p class="mb-4 mt-0">Saliendo temprano desde Cusco, viajarás a través de pueblos andinos tradicionales y valles escénicos antes de comenzar la caminata moderada hacia la cumbre. A medida que asciendas, serás recompensado con vistas panorámicas de picos nevados, alpacas pastando y la increíble belleza del Valle Rojo.</p><p class="mb-4 mt-0">Este tour es perfecto para viajeros aventureros que buscan presenciar un fenómeno geológico único y sumergirse en la naturaleza de gran altitud.</p>',
      itinerary: [
        { time: '04:00 AM', activity: 'Recojo en el hotel en Cusco: Te recogeremos temprano por la mañana en tu alojamiento en Cusco. Inicia un viaje escénico de 3 horas a través de pintorescos paisajes andinos.' },
        { time: '07:00 AM', activity: 'Parada para desayunar: Disfruta de un desayuno andino ligero preparado por una comunidad local antes de la caminata.' },
        { time: '08:00 AM', activity: 'Inicio de la caminata: Comienza una caminata guiada hacia Vinicunca. El sendero es de aprox. 4 km de ida, con dificultad moderada debido a la gran altitud.' },
        { time: '10:00 AM', activity: 'Llegada a la Cumbre (5,200 m): Disfruta de las increíbles vistas panorámicas de la Montaña de Colores y el Valle Rojo. Tendrás tiempo para descansar y tomar fotos.' },
        { time: '11:00 AM', activity: 'Inicio del descenso: Después de disfrutar de la cumbre, comienza el descenso de regreso a la base por el mismo sendero.' },
        { time: '12:30 PM', activity: 'Almuerzo buffet: Recarga energías con un delicioso almuerzo tradicional elaborado con ingredientes locales. Opciones vegetarianas disponibles.' },
        { time: '01:30 PM', activity: 'Viaje de regreso a Cusco: Aborda el transporte de regreso a Cusco y disfruta del relajante viaje.' },
        { time: '04:30 PM', activity: 'Llegada a Cusco: Serás dejado en tu hotel con recuerdos increíbles de esta aventura de altura.' }
      ],
      includes: [
        'Transporte ida y vuelta desde tu hotel en Cusco en una cómoda van turística',
        'Desayuno y almuerzo buffet en restaurantes locales (opciones vegetarianas disponibles)',
        'Guía profesional bilingüe con formación en primeros auxilios',
        'Boleto de entrada a la Montaña de Siete Colores (Vinicunca)',
        'Balón de oxígeno de emergencia y botiquín básico de primeros auxilios',
        'Asistencia personalizada durante todo el tour',
        'Experiencia en grupos pequeños para un servicio personalizado'
      ],
      excludes: [
        'Alquiler de caballos (disponible en el lugar, aprox. 80–100 soles, solo efectivo)',
        'Snacks, agua y bebidas adicionales',
        'Propinas para el guía y el conductor (opcional)',
        'Equipo de senderismo (bastones, botas, etc.)'
      ],
      packing: [
        'Pasaporte original',
        'Zapatos de trekking cómodos',
        'Ropa abrigadora (se recomienda vestirse en capas)',
        'Chaqueta impermeable o poncho',
        'Sombrero para el sol, gafas y protector solar',
        'Agua y snacks',
        'Efectivo extra (en Soles) para el alquiler de caballos'
      ],
      highlights: [
        'Camina hacia una de las montañas más coloridas de la Tierra',
        'Disfruta de vistas panorámicas de los Andes y el Valle Rojo',
        'Observa alpacas, llamas y fauna a lo largo del sendero',
        'Experiencia guiada en grupo pequeño con expertos locales'
      ],
      tips: [
        'Aclimatarse en Cusco por al menos 2 días antes de realizar este tour.',
        'Beber abundante té de coca o agua para ayudar con la altitud.'
      ]
    }
  },
  {
    id: 15,
    slug: 'humantay-lagoon-trek-day-trip',
    image: '/tour-humantay.png',
    price: '40',
    duration: 'Full Day',
    altitude: '3,900m – 4,200m',
    difficulty: 'Moderate',
    type: 'Group Tour | Trekking',
    departure: 'Cusco Hotels',
    destination: 'Cusco',
    latitude: -13.4217,
    longitude: -72.6200,
    en: {
      title: 'Trek to Humantay Lagoon',
      description: 'Discover the natural beauty of the Andes on this full-day hike to Humantay Lake, one of Peru’s most stunning high-altitude lagoons.',
      overview: '<p class="mb-4 mt-0">Discover the natural beauty of the Andes on this full-day hike to Humantay Lake, one of Peru’s most stunning high-altitude lagoons. Tucked between snow-capped peaks, the turquoise waters of this glacial lake offer a magical reward after a moderate but breathtaking hike.</p><p class="mb-4 mt-0">This experience is perfect for nature lovers, photographers, and adventurous travelers looking to explore beyond the classic Machu Picchu route. Guided by local experts, you’ll hike through pristine Andean landscapes, encounter alpacas, and soak in panoramic mountain views — all in one unforgettable day.</p>',
      itinerary: [
        { time: '04:30 AM', activity: 'Hotel Pickup in Cusco: We’ll start your adventure early with pickup from your hotel in Cusco. Enjoy a scenic drive through the Andes toward the charming town of Mollepata.' },
        { time: '07:00 AM', activity: 'Breakfast in Mollepata: Arrive in Mollepata and enjoy a traditional Andean breakfast to fuel up before the hike. You’ll have time to rest and acclimatize.' },
        { time: '08:00 AM', activity: 'Continue Drive to Soraypampa: Travel deeper into the Andes until reaching Soraypampa (3,900 m / 12,795 ft), the starting point of the trek. Take in the stunning views of the surrounding peaks.' },
        { time: '08:30 AM', activity: 'Begin the Hike to Humantay Lagoon: Start your guided hike toward Humantay Lagoon. The trail is about 3 km (1.8 miles) uphill and takes approximately 1.5 hours. Along the way, enjoy incredible mountain views and the peaceful silence of nature.' },
        { time: '10:00 AM', activity: 'Arrive at Humantay Lagoon (4,200 m / 13,780 ft): Take your time to enjoy the breathtaking turquoise waters of the glacial lagoon, nestled beneath the snow-capped Humantay and Salkantay mountains. Perfect time for photos, relaxation, or a peaceful moment of reflection.' },
        { time: '11:00 AM', activity: 'Begin the Descent to Soraypampa: After soaking in the views, descend along the same trail with your guide back to the base, where your transport will be waiting.' },
        { time: '12:30 PM', activity: 'Buffet Lunch in Mollepata: Enjoy a well-earned lunch in a local restaurant featuring Peruvian cuisine. Vegetarian options are available.' },
        { time: '01:30 PM', activity: 'Return Trip to Cusco: Board your private transport and begin the drive back to Cusco. Sit back, relax, and enjoy the views.' },
        { time: '04:30 PM', activity: 'Arrival in Cusco: We’ll drop you off at your hotel after an unforgettable journey to one of Peru’s most beautiful natural wonders.' }
      ],
      includes: [
        'Hotel pickup and drop-off in Cusco',
        'Breakfast and buffet lunch in local restaurants',
        'Professional bilingual tour guide (English/Spanish)',
        'Entrance fee to Humantay Lagoon and Soraypampa',
        'Emergency oxygen tank and first-aid kit',
        'Small-group experience for a personalized tour',
        'Scenic stops for photos along the Andes route'
      ],
      excludes: [
        'Horse rental (optional, available on site – approx. 80–100 soles, cash only)',
        'Snacks, water, or extra drinks',
        'Personal hiking gear (e.g., walking sticks, boots)',
        'Tips for the guide and driver (optional but appreciated)',
        'Travel insurance'
      ],
      packing: [
        'Original passport',
        'Comfortable hiking boots',
        'Warm layers and rain jacket',
        'Sun hat, sunglasses & sunscreen',
        'Water and snacks',
        'Extra cash (in Soles) for horse rental or personal expenses'
      ],
      highlights: [
        'Hike to one of Peru’s most beautiful glacial lakes',
        'Stunning views of Salkantay Mountain (6,271 m / 20,574 ft)',
        'Encounter Andean wildlife along the trail',
        'Small group with certified local guide',
        'Breakfast & lunch included'
      ],
      tips: [
        'Acclimatize in Cusco for at least 1-2 days before doing this hike.',
        'Drink plenty of water and coca tea to prevent altitude sickness.'
      ]
    },
    es: {
      title: 'Trek a la Laguna Humantay',
      description: 'Descubre la belleza natural de los Andes en esta caminata de día completo a la laguna Humantay.',
      overview: '<p class="mb-4 mt-0">Descubre la belleza natural de los Andes en esta caminata de día completo a la laguna Humantay, una de las lagunas de gran altitud más impresionantes del Perú. Escondida entre picos nevados, las aguas turquesas de este lago glacial ofrecen una recompensa mágica después de una caminata moderada pero impresionante.</p><p class="mb-4 mt-0">Esta experiencia es perfecta para amantes de la naturaleza, fotógrafos y viajeros aventureros que buscan explorar más allá de la clásica ruta a Machu Picchu. Guiado por expertos locales, caminarás a través de paisajes andinos prístinos, encontrarás alpacas y disfrutarás de vistas panorámicas de las montañas, todo en un día inolvidable.</p>',
      itinerary: [
        { time: '04:30 AM', activity: 'Recojo en el Hotel: Comenzaremos tu aventura temprano recogiéndote de tu hotel en Cusco. Disfruta de un viaje panorámico a través de los Andes.' },
        { time: '07:00 AM', activity: 'Desayuno en Mollepata: Llegada a Mollepata para disfrutar de un tradicional desayuno andino y ganar energía antes de la caminata.' },
        { time: '08:00 AM', activity: 'Viaje a Soraypampa: Viajaremos más profundo hacia los Andes hasta llegar a Soraypampa (3,900 m), el punto de partida del trek.' },
        { time: '08:30 AM', activity: 'Inicio de la caminata: Comienza la caminata guiada hacia la Laguna Humantay. El sendero es de unos 3 km cuesta arriba y toma aproximadamente 1.5 horas.' },
        { time: '10:00 AM', activity: 'Llegada a la Laguna Humantay (4,200 m): Tómate tu tiempo para disfrutar de las impresionantes aguas turquesas de la laguna glacial, ubicada debajo de los nevados Humantay y Salkantay.' },
        { time: '11:00 AM', activity: 'Inicio del descenso: Después de disfrutar de las vistas, descenderemos por el mismo sendero con tu guía de regreso a la base.' },
        { time: '12:30 PM', activity: 'Almuerzo buffet en Mollepata: Disfruta de un merecido almuerzo en un restaurante local que ofrece cocina peruana. Opciones vegetarianas disponibles.' },
        { time: '01:30 PM', activity: 'Viaje de regreso a Cusco: Aborda el transporte y comienza el viaje de regreso a Cusco. Relájate y disfruta del paisaje.' },
        { time: '04:30 PM', activity: 'Llegada a Cusco: Te dejaremos en tu hotel después de un viaje inolvidable a una de las maravillas naturales más hermosas del Perú.' }
      ],
      includes: [
        'Recojo y regreso al hotel en Cusco',
        'Desayuno y almuerzo buffet en restaurantes locales',
        'Guía profesional bilingüe',
        'Boleto de entrada a la Laguna Humantay y Soraypampa',
        'Balón de oxígeno de emergencia y botiquín de primeros auxilios',
        'Experiencia en grupos pequeños',
        'Paradas escénicas para tomar fotos en la ruta'
      ],
      excludes: [
        'Alquiler de caballos (opcional, disponible en el sitio – aprox. 80–100 soles, solo efectivo)',
        'Snacks, agua o bebidas adicionales',
        'Equipo de senderismo personal (ej. bastones, botas)',
        'Propinas para el guía y conductor (opcionales)',
        'Seguro de viaje'
      ],
      packing: [
        'Pasaporte original',
        'Botas de montaña cómodas',
        'Capas de abrigo y chaqueta impermeable',
        'Sombrero para el sol, gafas y protector solar',
        'Agua y snacks',
        'Efectivo extra (en Soles) para alquiler de caballos o gastos personales'
      ],
      highlights: [
        'Caminata a una de las lagunas glaciales más hermosas de Perú',
        'Impresionantes vistas de la montaña Salkantay (6,271 m)',
        'Encuentro con la fauna andina a lo largo del sendero',
        'Grupo pequeño con guía local certificado',
        'Desayuno y almuerzo incluidos'
      ],
      tips: [
        'Aclimatarse en Cusco por al menos 1-2 días antes de hacer esta caminata.',
        'Beber mucha agua y té de coca para prevenir el mal de altura.'
      ]
    }
  },
  {
    id: 16,
    slug: 'lima-city-tour-historic-center',
    image: '/tour-lima-city.png',
    price: '45',
    duration: 'Half Day (4 hours)',
    altitude: 'Sea Level',
    difficulty: 'Easy',
    type: 'Group Tour | Cultural',
    departure: 'Miraflores / San Isidro Hotels',
    destination: 'Lima',
    latitude: -12.0464,
    longitude: -77.0428,
    en: {
      title: 'Lima City Tour: Historic Center & Catacombs',
      description: 'Discover the colonial charm of the City of Kings, its historic plazas, and underground catacombs.',
      overview: '<p class="mb-4 mt-0">Step back in time and discover why Lima was known as the "City of Kings" during the Spanish Viceroyalty. This comprehensive half-day tour takes you through the UNESCO World Heritage-listed Historic Center, where majestic colonial architecture meets vibrant modern life.</p><p class="mb-4 mt-0">Wander through the historic Plaza Mayor, admire the intricate wooden balconies, and explore the fascinating San Francisco Monastery with its famous underground catacombs. We will also contrast the old with the new by driving through the modern, upscale districts of San Isidro and Miraflores, offering sweeping views of the Pacific Ocean.</p>',
      itinerary: [
        { time: '09:00 AM / 02:00 PM', activity: 'Hotel Pickup: We will collect you from your hotel in Miraflores or San Isidro and begin our journey to downtown Lima.' },
        { time: '09:45 AM / 02:45 PM', activity: 'Panoramic Tour of Modern Lima: Drive through the olive groves of San Isidro and the beautiful parks of Miraflores, stopping at the Park of Love for ocean views.' },
        { time: '10:30 AM / 03:30 PM', activity: 'Historic Center Walking Tour: Arrive at the historic center. Walk through the Plaza Mayor, viewing the Government Palace, the Cathedral, and the Archbishop’s Palace.' },
        { time: '11:30 AM / 04:30 PM', activity: 'San Francisco Catacombs: Enter the San Francisco Monastery, renowned for its stunning library and the eerie underground catacombs where thousands of colonial-era residents were buried.' },
        { time: '01:00 PM / 06:00 PM', activity: 'Return to Hotel: Board the transport and return to your hotel in Miraflores or San Isidro.' }
      ],
      includes: [
        'Round-trip transportation from Miraflores/San Isidro hotels',
        'Professional bilingual guide (English/Spanish)',
        'Entrance fee to the San Francisco Monastery and Catacombs',
        'Panoramic views of modern and historic Lima'
      ],
      excludes: [
        'Meals and beverages',
        'Tips for the guide and driver',
        'Personal expenses'
      ],
      packing: [
        'Comfortable walking shoes',
        'Sun hat and sunscreen (in summer)',
        'Light jacket (in winter)',
        'Camera or smartphone',
        'Small daypack'
      ],
      highlights: [
        'Explore the UNESCO World Heritage Historic Center',
        'Descend into the famous San Francisco Catacombs',
        'See the changing of the guard at the Government Palace (morning tour only)',
        'Enjoy ocean views from the Miraflores Malecón'
      ],
      tips: [
        'Keep your belongings secure in crowded areas like the Plaza Mayor.',
        'Morning tours are usually less crowded and offer a chance to see the changing of the guard.'
      ]
    },
    es: {
      title: 'City Tour Lima: Centro Histórico y Catacumbas',
      description: 'Descubre el encanto colonial de la Ciudad de los Reyes, sus plazas históricas y catacumbas subterráneas.',
      overview: '<p class="mb-4 mt-0">Retrocede en el tiempo y descubre por qué Lima era conocida como la "Ciudad de los Reyes" durante el Virreinato español. Este completo recorrido de medio día te lleva a través del Centro Histórico, declarado Patrimonio de la Humanidad por la UNESCO, donde la majestuosa arquitectura colonial se encuentra con la vibrante vida moderna.</p><p class="mb-4 mt-0">Pasea por la histórica Plaza Mayor, admira los intrincados balcones de madera y explora el fascinante Monasterio de San Francisco con sus famosas catacumbas subterráneas. También contrastaremos lo antiguo con lo nuevo conduciendo por los modernos y exclusivos distritos de San Isidro y Miraflores, que ofrecen vistas panorámicas del Océano Pacífico.</p>',
      itinerary: [
        { time: '09:00 AM / 02:00 PM', activity: 'Recojo en el Hotel: Te recogeremos en tu hotel en Miraflores o San Isidro y comenzaremos nuestro viaje al centro de Lima.' },
        { time: '09:45 AM / 02:45 PM', activity: 'Tour Panorámico de Lima Moderna: Conduce por los olivares de San Isidro y los hermosos parques de Miraflores, parando en el Parque del Amor para ver el océano.' },
        { time: '10:30 AM / 03:30 PM', activity: 'Tour a Pie por el Centro Histórico: Llega al centro histórico. Camina por la Plaza Mayor, observando el Palacio de Gobierno, la Catedral y el Palacio Arzobispal.' },
        { time: '11:30 AM / 04:30 PM', activity: 'Catacumbas de San Francisco: Ingresa al Monasterio de San Francisco, famoso por su impresionante biblioteca y las espeluznantes catacumbas subterráneas.' },
        { time: '01:00 PM / 06:00 PM', activity: 'Regreso al Hotel: Aborda el transporte y regresa a tu hotel en Miraflores o San Isidro.' }
      ],
      includes: [
        'Transporte de ida y vuelta desde hoteles en Miraflores/San Isidro',
        'Guía profesional bilingüe',
        'Entrada al Monasterio y Catacumbas de San Francisco',
        'Vistas panorámicas de la Lima moderna e histórica'
      ],
      excludes: [
        'Comidas y bebidas',
        'Propinas para el guía y el conductor',
        'Gastos personales'
      ],
      packing: [
        'Zapatos cómodos para caminar',
        'Sombrero para el sol y protector solar (en verano)',
        'Chaqueta ligera (en invierno)',
        'Cámara o teléfono',
        'Mochila pequeña'
      ],
      highlights: [
        'Explora el Centro Histórico, Patrimonio de la Humanidad',
        'Desciende a las famosas Catacumbas de San Francisco',
        'Ve el cambio de guardia en el Palacio de Gobierno (solo en el tour de la mañana)',
        'Disfruta de las vistas del océano desde el Malecón de Miraflores'
      ],
      tips: [
        'Mantén tus pertenencias seguras en áreas concurridas como la Plaza Mayor.',
        'Los recorridos por la mañana suelen estar menos concurridos.'
      ]
    }
  },
  {
    id: 17,
    slug: 'lima-culinary-experience-market',
    image: '/tour-lima-culinary.png',
    price: '85',
    duration: 'Half Day (5 hours)',
    altitude: 'Sea Level',
    difficulty: 'Easy',
    type: 'Group Tour | Culinary',
    departure: 'Miraflores / Barranco',
    destination: 'Lima',
    latitude: -12.1211,
    longitude: -77.0298,
    en: {
      title: 'Lima Culinary Experience & Market Tour',
      description: 'Taste your way through the culinary capital of South America, from vibrant local markets to a ceviche masterclass.',
      overview: '<p class="mb-4 mt-0">Lima is globally recognized as the gastronomic capital of Latin America. This immersive half-day culinary experience is designed for food lovers who want to dive deep into Peruvian flavors, ingredients, and cooking traditions.</p><p class="mb-4 mt-0">We’ll start by exploring a traditional local market, discovering exotic fruits, unique Andean grains, and fresh Pacific seafood. After tasting some local snacks, we will head to a top local restaurant for an interactive cooking class. You will learn the secrets behind Peru’s flagship dish, Ceviche, and mix your very own Pisco Sour, before sitting down to enjoy a delicious gourmet lunch.</p>',
      itinerary: [
        { time: '09:30 AM', activity: 'Meet & Greet / Market Visit: Start the day at a traditional Peruvian market in Miraflores or Surquillo. Taste exotic fruits like lucuma, chirimoya, and aguaymanto.' },
        { time: '11:00 AM', activity: 'Local Street Food Tasting: Sample traditional Peruvian snacks and interact with local vendors to learn about endemic ingredients from the Coast, Andes, and Amazon.' },
        { time: '12:00 PM', activity: 'Pisco Sour Class: Arrive at an exclusive restaurant. Learn the history and technique of preparing the perfect Pisco Sour, Peru’s national cocktail.' },
        { time: '12:45 PM', activity: 'Ceviche Masterclass: Step-by-step guidance from a professional chef on how to prepare the freshest and most authentic Peruvian ceviche.' },
        { time: '01:30 PM', activity: 'Gourmet Lunch: Sit down to enjoy the dishes you helped prepare, followed by additional traditional Peruvian main courses and desserts.' },
        { time: '02:30 PM', activity: 'End of Tour: The tour concludes at the restaurant, leaving you free to explore the surrounding district.' }
      ],
      includes: [
        'Guided tour of a traditional local market',
        'Exotic fruit tasting and local snacks',
        'Interactive Pisco Sour and Ceviche making classes',
        'Full gourmet lunch with drinks',
        'Professional foodie guide'
      ],
      excludes: [
        'Transportation to the meeting point',
        'Extra alcoholic beverages beyond the Pisco Sour',
        'Tips for the guide'
      ],
      packing: [
        'A big appetite!',
        'Comfortable clothing',
        'Camera for the colorful market shots',
        'Any specific dietary requirements (please notify us in advance)'
      ],
      highlights: [
        'Discover the incredible biodiversity of Peruvian ingredients at a local market',
        'Learn to make an authentic Pisco Sour and Ceviche from an expert chef',
        'Enjoy a delicious, multi-course Peruvian lunch',
        'Small-group experience for a more personalized culinary journey'
      ],
      tips: [
        'Have a very light breakfast before the tour; there is a lot of food included!',
        'If you are vegetarian, vegan, or have allergies, let us know in advance so the chef can adapt the menu.'
      ]
    },
    es: {
      title: 'Experiencia Culinaria en Lima y Tour de Mercado',
      description: 'Saborea la capital culinaria de Sudamérica, desde vibrantes mercados locales hasta una clase magistral de ceviche.',
      overview: '<p class="mb-4 mt-0">Lima es reconocida a nivel mundial como la capital gastronómica de América Latina. Esta inmersiva experiencia culinaria de medio día está diseñada para los amantes de la comida que desean profundizar en los sabores, ingredientes y tradiciones culinarias peruanas.</p><p class="mb-4 mt-0">Comenzaremos explorando un mercado local tradicional, descubriendo frutas exóticas, granos andinos únicos y mariscos frescos del Pacífico. Después de probar algunos bocadillos locales, nos dirigiremos a un restaurante local de primer nivel para una clase de cocina interactiva. Aprenderás los secretos detrás del plato bandera del Perú, el Ceviche, y prepararás tu propio Pisco Sour, antes de sentarte a disfrutar de un delicioso almuerzo gourmet.</p>',
      itinerary: [
        { time: '09:30 AM', activity: 'Visita al Mercado: Comienza el día en un mercado tradicional en Miraflores o Surquillo. Prueba frutas exóticas como la lúcuma, chirimoya y aguaymanto.' },
        { time: '11:00 AM', activity: 'Degustación de Comida Callejera Local: Prueba bocadillos tradicionales peruanos e interactúa con los vendedores locales.' },
        { time: '12:00 PM', activity: 'Clase de Pisco Sour: Llega a un restaurante exclusivo. Aprende la historia y técnica para preparar el Pisco Sour perfecto.' },
        { time: '12:45 PM', activity: 'Clase Magistral de Ceviche: Orientación paso a paso de un chef profesional sobre cómo preparar el ceviche peruano más fresco y auténtico.' },
        { time: '01:30 PM', activity: 'Almuerzo Gourmet: Siéntate a disfrutar de los platos que ayudaste a preparar, seguidos de platos principales y postres tradicionales peruanos adicionales.' },
        { time: '02:30 PM', activity: 'Fin del Tour: El tour concluye en el restaurante, dejándote libre para explorar el distrito.' }
      ],
      includes: [
        'Tour guiado por un mercado local tradicional',
        'Degustación de frutas exóticas y bocadillos locales',
        'Clases interactivas de preparación de Pisco Sour y Ceviche',
        'Almuerzo gourmet completo con bebidas',
        'Guía profesional experto en gastronomía'
      ],
      excludes: [
        'Transporte al punto de encuentro',
        'Bebidas alcohólicas adicionales',
        'Propinas para el guía'
      ],
      packing: [
        '¡Un gran apetito!',
        'Ropa cómoda',
        'Cámara para las coloridas fotos del mercado',
        'Notificarnos con antelación cualquier requerimiento dietético'
      ],
      highlights: [
        'Descubre la increíble biodiversidad de ingredientes peruanos en un mercado local',
        'Aprende a preparar un auténtico Pisco Sour y Ceviche con un chef experto',
        'Disfruta de un delicioso almuerzo peruano de varios platos',
        'Experiencia en grupos pequeños para un viaje culinario más personalizado'
      ],
      tips: [
        'Desayuna muy ligero antes del tour; ¡hay mucha comida incluida!',
        'Si tienes alergias o dietas especiales, avísanos con anticipación.'
      ]
    }
  },
  {
    id: 18,
    slug: 'pachacamac-ruins-barranco-tour',
    image: '/tour-lima-barranco.png',
    price: '55',
    duration: 'Half Day (4.5 hours)',
    altitude: 'Sea Level',
    difficulty: 'Easy',
    type: 'Group Tour | Culture & History',
    departure: 'Miraflores / San Isidro Hotels',
    destination: 'Lima',
    latitude: -12.2575,
    longitude: -76.9042,
    en: {
      title: 'Pachacamac Ruins & Barranco Bohemian Vibe',
      description: 'Journey to the ancient pre-Inca oracle of Pachacamac and end your day in Lima’s most colorful, bohemian district.',
      overview: '<p class="mb-4 mt-0">Experience the vast timeline of Peru’s history without leaving the coast. This half-day tour takes you to the monumental archaeological site of Pachacamac, a massive ancient complex located just south of Lima. Dedicated to the creator god of the coast, this pre-Inca and Inca site features impressive adobe pyramids, temples, and sweeping views of the Pacific Ocean.</p><p class="mb-4 mt-0">After uncovering ancient mysteries, we’ll transition to modern-day culture by visiting Barranco, Lima’s most vibrant and bohemian neighborhood. Famous for its colorful street art, colonial mansions, and the romantic "Bridge of Sighs" (Puente de los Suspiros), Barranco is the perfect place to soak in the local artsy atmosphere.</p>',
      itinerary: [
        { time: '09:00 AM / 02:00 PM', activity: 'Hotel Pickup: Meet your guide at your hotel and begin the scenic drive along the Pan-American Highway to the south of Lima.' },
        { time: '10:00 AM / 03:00 PM', activity: 'Pachacamac Archaeological Site: Arrive at the sprawling ruins of Pachacamac. Explore the Temple of the Sun, the Acllahuasi (House of the Chosen Women), and the site museum.' },
        { time: '11:30 AM / 04:30 PM', activity: 'Panoramic Pacific Views: Climb to the highest point of the sanctuary to enjoy stunning, uninterrupted views of the Pacific Ocean and the Lurin Valley.' },
        { time: '12:30 PM / 05:30 PM', activity: 'Barranco Bohemian District: Head back toward the city and stop in Barranco. Walk across the iconic Bridge of Sighs, admire the vivid street murals, and enjoy the ocean breeze from the Bajada de Baños.' },
        { time: '01:30 PM / 06:30 PM', activity: 'Return to Hotel: We’ll drop you back at your hotel, or if you prefer, you can choose to stay in Barranco to enjoy its excellent restaurants and bars.' }
      ],
      includes: [
        'Round-trip transportation from Miraflores/San Isidro',
        'Professional English/Spanish-speaking guide',
        'Entrance tickets to Pachacamac Sanctuary & Museum',
        'Guided walking tour of Barranco'
      ],
      excludes: [
        'Meals and drinks',
        'Tips for the guide and driver',
        'Personal expenses'
      ],
      packing: [
        'Comfortable walking shoes (the ruins are sandy and dusty)',
        'Sun hat, sunglasses, and sunscreen',
        'A light jacket (coastal winds can be chilly)',
        'Camera for incredible photos'
      ],
      highlights: [
        'Explore one of the most important pre-Inca religious centers on the coast',
        'Marvel at the massive adobe pyramids built by various ancient cultures',
        'Stroll through the artistic, vibrant streets of Barranco',
        'Make a wish while crossing the famous Bridge of Sighs'
      ],
      tips: [
        'Pachacamac is situated in a desert landscape; bringing a bottle of water and sun protection is essential.',
        'If taking the afternoon tour, staying in Barranco afterwards is highly recommended for dinner and drinks.'
      ]
    },
    es: {
      title: 'Ruinas de Pachacamac y Ambiente Bohemio de Barranco',
      description: 'Viaja al antiguo oráculo preinca de Pachacamac y termina tu día en el distrito más colorido y bohemio de Lima.',
      overview: '<p class="mb-4 mt-0">Experimenta la vasta línea de tiempo de la historia del Perú sin dejar la costa. Este tour de medio día te lleva al monumental sitio arqueológico de Pachacamac, un enorme complejo antiguo ubicado justo al sur de Lima. Dedicado al dios creador de la costa, este sitio preincaico e inca cuenta con impresionantes pirámides de adobe, templos y vistas panorámicas del Océano Pacífico.</p><p class="mb-4 mt-0">Después de descubrir antiguos misterios, pasaremos a la cultura actual visitando Barranco, el barrio más vibrante y bohemio de Lima. Famoso por su colorido arte callejero, casonas coloniales y el romántico "Puente de los Suspiros", Barranco es el lugar perfecto para empaparse de la atmósfera artística local.</p>',
      itinerary: [
        { time: '09:00 AM / 02:00 PM', activity: 'Recojo en el Hotel: Reúnete con tu guía en tu hotel y comienza el viaje panorámico por la carretera Panamericana hacia el sur de Lima.' },
        { time: '10:00 AM / 03:00 PM', activity: 'Sitio Arqueológico de Pachacamac: Llega a las extensas ruinas de Pachacamac. Explora el Templo del Sol, el Acllahuasi (Casa de las Mujeres Escogidas) y el museo del sitio.' },
        { time: '11:30 AM / 04:30 PM', activity: 'Vistas Panorámicas del Pacífico: Sube al punto más alto del santuario para disfrutar de impresionantes vistas ininterrumpidas del Océano Pacífico y el Valle de Lurín.' },
        { time: '12:30 PM / 05:30 PM', activity: 'Distrito Bohemio de Barranco: Regresa hacia la ciudad y detente en Barranco. Camina por el icónico Puente de los Suspiros, admira los vívidos murales callejeros y disfruta de la brisa del océano.' },
        { time: '01:30 PM / 06:30 PM', activity: 'Regreso al Hotel: Te dejaremos de regreso en tu hotel, o si lo prefieres, puedes optar por quedarte en Barranco para disfrutar de sus excelentes restaurantes y bares.' }
      ],
      includes: [
        'Transporte ida y vuelta desde Miraflores/San Isidro',
        'Guía profesional bilingüe (Inglés/Español)',
        'Entradas al Santuario y Museo de Pachacamac',
        'Tour guiado a pie por Barranco'
      ],
      excludes: [
        'Comidas y bebidas',
        'Propinas para el guía y el conductor',
        'Gastos personales'
      ],
      packing: [
        'Zapatos cómodos para caminar (las ruinas son arenosas)',
        'Sombrero para el sol, gafas de sol y protector solar',
        'Una chaqueta ligera (los vientos costeros pueden ser fríos)',
        'Cámara para fotos increíbles'
      ],
      highlights: [
        'Explora uno de los centros religiosos preincas más importantes de la costa',
        'Maravíllate con las enormes pirámides de adobe construidas por diversas culturas antiguas',
        'Pasea por las calles artísticas y vibrantes de Barranco',
        'Pide un deseo mientras cruzas el famoso Puente de los Suspiros'
      ],
      tips: [
        'Pachacamac está situado en un paisaje desértico; es esencial llevar una botella de agua y protección solar.',
        'Si tomas el tour por la tarde, te recomendamos encarecidamente quedarte en Barranco después para cenar.'
      ]
    }
  },
  {
    id: 19,
    slug: 'ballestas-islands-paracas-reserve',
    image: '/tour-paracas-ballestas.png',
    price: '40',
    duration: 'Full Day',
    altitude: 'Sea Level',
    difficulty: 'Easy',
    type: 'Group Tour | Nature & Wildlife',
    departure: 'Paracas Hotels',
    destination: 'Paracas & Ica',
    latitude: -13.8295,
    longitude: -76.2514,
    en: {
      title: 'Ballestas Islands & Paracas National Reserve',
      description: 'Explore the "Galapagos of Peru", home to sea lions, penguins, and stunning coastal desert landscapes.',
      overview: '<p class="mb-4 mt-0">Discover the incredible marine biodiversity and dramatic coastal landscapes of the Paracas peninsula. Often referred to as the "Galapagos of Peru," the Ballestas Islands are a group of rocky outcrops that serve as a sanctuary for millions of seabirds, Humboldt penguins, and large colonies of sea lions.</p><p class="mb-4 mt-0">After the boat tour, we will explore the Paracas National Reserve, one of the most unique coastal deserts in the world. You will witness the striking contrast between the deep blue Pacific Ocean and the fiery red and yellow sand beaches, making this tour a dream for nature lovers and photographers alike.</p>',
      itinerary: [
        { time: '07:30 AM', activity: 'Meeting Point: Meet at the Paracas tourist dock or your hotel in Paracas.' },
        { time: '08:00 AM', activity: 'Ballestas Islands Boat Tour: Board the speedboat and head out to the islands. On the way, stop to see the famous "Candelabra" geoglyph carved into the sandy hills.' },
        { time: '09:00 AM', activity: 'Wildlife Watching: Arrive at the islands. Watch sea lions basking on the rocks, penguins diving into the water, and massive flocks of pelicans, boobies, and cormorants.' },
        { time: '10:00 AM', activity: 'Return to Dock: Head back to the mainland and enjoy a short break for a coffee or snack.' },
        { time: '11:00 AM', activity: 'Paracas National Reserve Tour: Board a minibus and drive into the spectacular coastal desert reserve. Visit stunning viewpoints like the Cathedral rock formation, Playa Roja (Red Beach), and Lagunillas.' },
        { time: '02:00 PM', activity: 'Lunch & Relax: Stop at a local seaside restaurant where you can enjoy fresh seafood (lunch not included).' },
        { time: '03:30 PM', activity: 'End of Tour: Return to your hotel in Paracas or the bus station.' }
      ],
      includes: [
        'Speedboat tour to the Ballestas Islands',
        'Guided tour of the Paracas National Reserve',
        'Professional bilingual guide (English/Spanish)',
        'Port taxes and entrance fees to the islands and reserve',
        'Safety life jackets'
      ],
      excludes: [
        'Meals and drinks',
        'Tips for the guide and boat driver',
        'Personal expenses'
      ],
      packing: [
        'Windbreaker or light jacket (it gets windy on the boat)',
        'Sun hat, sunglasses, and high SPF sunscreen',
        'Camera with a good zoom lens for wildlife',
        'Comfortable walking shoes',
        'Motion sickness pills (if you are sensitive to boat rides)'
      ],
      highlights: [
        'See sea lions, penguins, and dolphins in their natural habitat',
        'Marvel at the mysterious pre-Inca Candelabra geoglyph',
        'Explore the dramatic red sand beaches of the Paracas Reserve',
        'Enjoy the striking contrast between the desert and the ocean'
      ],
      tips: [
        'The boat ride can be bumpy; if you suffer from seasickness, take medication 30 minutes before boarding.',
        'Always wear sunscreen, even if it looks cloudy, as the coastal sun is strong.'
      ]
    },
    es: {
      title: 'Islas Ballestas y Reserva Nacional de Paracas',
      description: 'Explora las "Galápagos de Perú", hogar de leones marinos, pingüinos e impresionantes paisajes desérticos costeros.',
      overview: '<p class="mb-4 mt-0">Descubre la increíble biodiversidad marina y los dramáticos paisajes costeros de la península de Paracas. A menudo referidas como las "Galápagos de Perú", las Islas Ballestas son un grupo de afloramientos rocosos que sirven como santuario para millones de aves marinas, pingüinos de Humboldt y grandes colonias de lobos marinos.</p><p class="mb-4 mt-0">Después del recorrido en bote, exploraremos la Reserva Nacional de Paracas, uno de los desiertos costeros más singulares del mundo. Serás testigo del sorprendente contraste entre el profundo azul del Océano Pacífico y las playas de arena roja y amarilla, haciendo de este recorrido un sueño para los amantes de la naturaleza y los fotógrafos.</p>',
      itinerary: [
        { time: '07:30 AM', activity: 'Punto de Encuentro: Nos reunimos en el muelle turístico de Paracas o en tu hotel en Paracas.' },
        { time: '08:00 AM', activity: 'Tour en Bote a las Islas Ballestas: Aborda la lancha rápida y dirígete a las islas. En el camino, nos detendremos para ver el famoso geoglifo "El Candelabro" tallado en las colinas de arena.' },
        { time: '09:00 AM', activity: 'Observación de Fauna: Llega a las islas. Observa a los lobos marinos tomando el sol en las rocas, pingüinos zambulléndose y enormes bandadas de pelícanos y piqueros.' },
        { time: '10:00 AM', activity: 'Regreso al Muelle: Regresa a tierra firme y disfruta de un breve descanso para tomar un café o un snack.' },
        { time: '11:00 AM', activity: 'Tour por la Reserva Nacional de Paracas: Sube a un minibús y adéntrate en la espectacular reserva del desierto costero. Visita impresionantes miradores como la formación rocosa La Catedral, Playa Roja y Lagunillas.' },
        { time: '02:00 PM', activity: 'Almuerzo y Relajación: Detente en un restaurante local junto al mar donde podrás disfrutar de mariscos frescos (almuerzo no incluido).' },
        { time: '03:30 PM', activity: 'Fin del Tour: Regreso a tu hotel en Paracas o a la estación de autobuses.' }
      ],
      includes: [
        'Tour en lancha rápida a las Islas Ballestas',
        'Tour guiado por la Reserva Nacional de Paracas',
        'Guía profesional bilingüe (Inglés/Español)',
        'Tasas portuarias y entradas a las islas y la reserva',
        'Chalecos salvavidas de seguridad'
      ],
      excludes: [
        'Comidas y bebidas',
        'Propinas para el guía y el conductor del bote',
        'Gastos personales'
      ],
      packing: [
        'Cortavientos o chaqueta ligera (hace viento en el bote)',
        'Sombrero para el sol, gafas de sol y protector solar',
        'Cámara fotográfica',
        'Zapatos cómodos para caminar',
        'Pastillas para el mareo (si eres sensible a los viajes en bote)'
      ],
      highlights: [
        'Mira lobos marinos, pingüinos y delfines en su hábitat natural',
        'Maravíllate con el misterioso geoglifo preinca del Candelabro',
        'Explora las dramáticas playas de arena roja de la Reserva de Paracas',
        'Disfruta del sorprendente contraste entre el desierto y el océano'
      ],
      tips: [
        'El viaje en bote puede ser movido; si sufres de mareos, toma medicamentos 30 minutos antes de embarcar.',
        'Usa siempre protector solar, incluso si parece nublado, ya que el sol costero es fuerte.'
      ]
    }
  },
  {
    id: 20,
    slug: 'huacachina-oasis-sandboarding',
    image: '/tour-huacachina.png',
    price: '35',
    duration: 'Half Day (3 hours)',
    altitude: '400m',
    difficulty: 'Moderate',
    type: 'Group Tour | Adventure',
    departure: 'Ica or Huacachina',
    destination: 'Paracas & Ica',
    latitude: -14.0875,
    longitude: -75.7626,
    en: {
      title: 'Huacachina Oasis & Sandboarding Adventure',
      description: 'Ride the massive desert dunes in a V8 buggy and try sandboarding in South America\'s only natural oasis.',
      overview: '<p class="mb-4 mt-0">Experience the thrill of a lifetime in the surreal landscape of the Huacachina Oasis. Surrounded by some of the largest sand dunes in the Americas, this natural lagoon looks like a mirage right out of a movie.</p><p class="mb-4 mt-0">Hold on tight as our expert drivers take you on a rollercoaster-like ride over massive dunes in a powerful V8 dune buggy. After getting your adrenaline pumping, we’ll stop at the top of the highest dunes where you’ll learn the basics of sandboarding. Glide down the steep sandy slopes belly-first or standing up like a snowboarder, and cap off the adventure with a spectacular desert sunset.</p>',
      itinerary: [
        { time: '04:00 PM', activity: 'Meet at Huacachina: Gather at the designated meeting point near the Huacachina lagoon.' },
        { time: '04:15 PM', activity: 'Buggy Ride Begins: Strap into your dune buggy and hold on as your driver climbs, drops, and drifts over the towering dunes of the Ica desert.' },
        { time: '05:00 PM', activity: 'Sandboarding: Stop at various dunes of different heights. Your guide will teach you the proper technique to safely slide down the dunes on a sandboard.' },
        { time: '05:45 PM', activity: 'Desert Sunset: Park at a panoramic viewpoint to watch the sun dip below the dunes, casting incredible shadows and colors across the desert landscape.' },
        { time: '06:15 PM', activity: 'Return to Oasis: A thrilling final descent back into the Huacachina oasis just as the evening lights begin to reflect on the lagoon.' }
      ],
      includes: [
        'Thrilling dune buggy ride with professional driver',
        'Sandboards and wax',
        'Basic sandboarding instruction',
        'Tourist entrance tax to the desert area'
      ],
      excludes: [
        'Transportation to Huacachina (if coming from Paracas or Lima)',
        'Meals and beverages',
        'Tips for the driver/guide'
      ],
      packing: [
        'Comfortable clothing (expect to get sand everywhere!)',
        'Closed-toe shoes (sneakers are best)',
        'Sunglasses to protect your eyes from blowing sand',
        'Sunscreen and a light jacket for after sunset',
        'Camera or GoPro (securely strapped)'
      ],
      highlights: [
        'Adrenaline-pumping dune buggy ride',
        'Learn to sandboard down massive desert dunes',
        'Watch a magical sunset over the endless sand sea',
        'Experience the unique beauty of South America\'s only natural desert oasis'
      ],
      tips: [
        'Don\'t bring anything valuable that you might drop in the sand (like loose cellphones or keys).',
        'The late afternoon tour is highly recommended as the sand is cooler and you get to see the sunset.'
      ]
    },
    es: {
      title: 'Oasis de Huacachina y Aventura en Sandboard',
      description: 'Recorre las enormes dunas del desierto en un buggy V8 y prueba el sandboard en el único oasis natural de Sudamérica.',
      overview: '<p class="mb-4 mt-0">Experimenta la emoción de tu vida en el paisaje surrealista del Oasis de Huacachina. Rodeada por algunas de las dunas de arena más grandes de América, esta laguna natural parece un espejismo sacado de una película.</p><p class="mb-4 mt-0">Agárrate fuerte mientras nuestros conductores expertos te llevan a un paseo tipo montaña rusa sobre enormes dunas en un potente buggy arenero V8. Después de aumentar tu adrenalina, nos detendremos en la cima de las dunas más altas donde aprenderás los conceptos básicos del sandboard. Deslízate por las empinadas laderas arenosas boca abajo o de pie como un snowboarder, y culmina la aventura con un espectacular atardecer en el desierto.</p>',
      itinerary: [
        { time: '04:00 PM', activity: 'Encuentro en Huacachina: Reúnete en el punto de encuentro designado cerca de la laguna.' },
        { time: '04:15 PM', activity: 'Comienza el Paseo en Buggy: Abróchate el cinturón y agárrate mientras el conductor sube, baja y derrapa sobre las altísimas dunas.' },
        { time: '05:00 PM', activity: 'Sandboard: Detente en varias dunas de diferentes alturas. Tu guía te enseñará la técnica adecuada para deslizarte de manera segura.' },
        { time: '05:45 PM', activity: 'Atardecer en el Desierto: Estaciona en un mirador panorámico para ver cómo el sol se oculta bajo las dunas, proyectando sombras y colores increíbles.' },
        { time: '06:15 PM', activity: 'Regreso al Oasis: Un emocionante descenso final de regreso al oasis de Huacachina justo cuando las luces nocturnas comienzan a reflejarse en la laguna.' }
      ],
      includes: [
        'Emocionante paseo en buggy con conductor profesional',
        'Tablas de sandboard y cera',
        'Instrucción básica de sandboard',
        'Impuesto turístico de entrada a la zona del desierto'
      ],
      excludes: [
        'Transporte a Huacachina (si vienes de Paracas o Lima)',
        'Comidas y bebidas',
        'Propinas para el conductor/guía'
      ],
      packing: [
        'Ropa cómoda (¡prepárate para llenarte de arena!)',
        'Zapatos cerrados (las zapatillas son lo mejor)',
        'Gafas de sol para proteger tus ojos de la arena que vuela',
        'Protector solar y una chaqueta ligera para después del atardecer',
        'Cámara o GoPro (bien asegurada)'
      ],
      highlights: [
        'Paseo en buggy lleno de adrenalina',
        'Aprende a hacer sandboard por enormes dunas del desierto',
        'Mira un atardecer mágico sobre el mar infinito de arena',
        'Experimenta la belleza única del único oasis natural del desierto de Sudamérica'
      ],
      tips: [
        'No lleves nada de valor que puedas dejar caer en la arena (como celulares sueltos o llaves).',
        'Se recomienda encarecidamente el tour de la tarde ya que la arena es más fresca y puedes ver el atardecer.'
      ]
    }
  },
  {
    id: 21,
    slug: 'nazca-lines-overflight-ica',
    image: '/tour-nazca-lines.png',
    price: '110',
    duration: 'Half Day (1.5 hours flight)',
    altitude: '2,000 ft (Flight Altitude)',
    difficulty: 'Easy',
    type: 'Group Tour | Sightseeing',
    departure: 'Ica Aerodrome',
    destination: 'Paracas & Ica',
    latitude: -14.8286,
    longitude: -74.9333,
    en: {
      title: 'Nazca Lines Overflight from Ica',
      description: 'Fly over one of the world’s greatest archaeological mysteries and see the gigantic ancient geoglyphs from above.',
      overview: '<p class="mb-4 mt-0">The Nazca Lines are one of the world’s greatest archaeological mysteries. Etched into the arid desert floor over 2,000 years ago, these gigantic geoglyphs depict various animals, plants, and geometric shapes that can only be truly appreciated from the sky.</p><p class="mb-4 mt-0">Taking off directly from the regional aerodrome in Ica, this scenic overflight saves you the long drive to the town of Nazca. You’ll board a modern Cessna aircraft where every passenger gets a window seat. During the thrilling flight, the pilot will perform sharp banks on both sides so everyone can clearly see and photograph the most famous figures, including the Monkey, the Spider, the Hummingbird, and the mysterious Astronaut.</p>',
      itinerary: [
        { time: '09:00 AM', activity: 'Arrival at Ica Aerodrome: Arrive at the airport, check-in, verify your passport, and complete the mandatory pre-flight weigh-in.' },
        { time: '09:30 AM', activity: 'Pre-flight Briefing: Watch an informative video about the Nazca Lines and receive a safety briefing from the flight crew.' },
        { time: '10:00 AM', activity: 'Boarding and Takeoff: Board your Cessna aircraft. Each passenger is guaranteed a window seat equipped with a headset to hear the pilot’s commentary.' },
        { time: '10:30 AM', activity: 'Overflight of the Nazca Lines: Fly over the desert plains. The pilot will point out the famous figures (Whale, Astronaut, Monkey, Dog, Hummingbird, Spider, Condor, Flamingo, Parrot, Hands, and Tree).' },
        { time: '11:15 AM', activity: 'Return and Landing: Arrive back at the Ica Aerodrome, where you will receive a commemorative flight certificate.' }
      ],
      includes: [
        'Classic flight over the Nazca Lines in a Cessna aircraft',
        'Guaranteed window seat for every passenger',
        'Expert pilot and co-pilot with English/Spanish commentary',
        'Commemorative flight certificate'
      ],
      excludes: [
        'Airport tax (approx. S/ 30, paid in cash at the airport)',
        'Transportation to/from your hotel to the aerodrome',
        'Meals and beverages',
        'Tips (optional)'
      ],
      packing: [
        'Original passport (mandatory to board the flight)',
        'Camera or smartphone (use a fast shutter speed!)',
        'Light and comfortable clothing',
        'Motion sickness medication (highly recommended, take 1 hour before flying)'
      ],
      highlights: [
        'Witness one of humanity’s greatest unsolved mysteries from the air',
        'See over 12 massive geoglyphs etched into the desert floor',
        'Enjoy a comfortable and safe flight in a modern aircraft',
        'Every passenger gets a window seat for unobstructed views'
      ],
      tips: [
        'The flight involves many sharp turns (banking) to let both sides see the figures; motion sickness pills are highly recommended.',
        'Do not eat a heavy meal before the flight.'
      ]
    },
    es: {
      title: 'Sobrevuelo a las Líneas de Nazca desde Ica',
      description: 'Vuela sobre uno de los mayores misterios arqueológicos del mundo y observa los antiguos geoglifos gigantes desde arriba.',
      overview: '<p class="mb-4 mt-0">Las Líneas de Nazca son uno de los mayores misterios arqueológicos del mundo. Grabadas en el árido suelo del desierto hace más de 2,000 años, estos gigantescos geoglifos representan diversos animales, plantas y formas geométricas que solo pueden apreciarse verdaderamente desde el cielo.</p><p class="mb-4 mt-0">Despegando directamente desde el aeródromo regional en Ica, este vuelo panorámico te ahorra el largo viaje hasta la ciudad de Nazca. Abordarás una moderna avioneta Cessna donde cada pasajero tiene garantizado un asiento junto a la ventana. Durante el emocionante vuelo, el piloto realizará giros pronunciados en ambos lados para que todos puedan ver y fotografiar claramente las figuras más famosas, incluyendo el Mono, la Araña, el Colibrí y el misterioso Astronauta.</p>',
      itinerary: [
        { time: '09:00 AM', activity: 'Llegada al Aeródromo de Ica: Llega al aeropuerto, regístrate, verifica tu pasaporte y completa el pesaje obligatorio previo al vuelo.' },
        { time: '09:30 AM', activity: 'Charla previa al vuelo: Mira un video informativo sobre las Líneas de Nazca y recibe una charla de seguridad por parte de la tripulación.' },
        { time: '10:00 AM', activity: 'Embarque y Despegue: Aborda tu avioneta Cessna. Cada pasajero tiene garantizado un asiento con ventana equipado con auriculares para escuchar los comentarios del piloto.' },
        { time: '10:30 AM', activity: 'Sobrevuelo de las Líneas de Nazca: Vuela sobre las llanuras del desierto. El piloto señalará las famosas figuras (Ballena, Astronauta, Mono, Perro, Colibrí, Araña, Cóndor, Flamenco, Loro, Manos y Árbol).' },
        { time: '11:15 AM', activity: 'Regreso y Aterrizaje: Llega de regreso al Aeródromo de Ica, donde recibirás un certificado de vuelo conmemorativo.' }
      ],
      includes: [
        'Vuelo clásico sobre las Líneas de Nazca en una avioneta Cessna',
        'Asiento junto a la ventana garantizado para cada pasajero',
        'Piloto y copiloto expertos con comentarios en inglés/español',
        'Certificado de vuelo conmemorativo'
      ],
      excludes: [
        'Impuesto de aeropuerto (aprox. S/ 30, pagado en efectivo en el aeropuerto)',
        'Transporte ida y vuelta desde tu hotel al aeródromo',
        'Comidas y bebidas',
        'Propinas (opcional)'
      ],
      packing: [
        'Pasaporte original (obligatorio para abordar el vuelo)',
        'Cámara o teléfono inteligente (¡usa una velocidad de obturación rápida!)',
        'Ropa ligera y cómoda',
        'Medicamento para el mareo (muy recomendado, tomar 1 hora antes de volar)'
      ],
      highlights: [
        'Sé testigo de uno de los mayores misterios sin resolver de la humanidad desde el aire',
        'Mira más de 12 enormes geoglifos grabados en el suelo del desierto',
        'Disfruta de un vuelo cómodo y seguro en una avioneta moderna',
        'Cada pasajero obtiene un asiento junto a la ventana para vistas sin obstrucciones'
      ],
      tips: [
        'El vuelo implica muchos giros cerrados (inclinaciones) para permitir que ambos lados vean las figuras; las pastillas para el mareo son muy recomendadas.',
        'No comas una comida pesada antes del vuelo.'
      ]
    }
  },
  {
    id: 22,
    slug: 'arequipa-city-tour',
    image: '/tour-arequipa-city.png',
    destination: 'Arequipa',
    duration: 'Half Day',
    price: '35',
    en: {
      title: 'Arequipa City Tour & Santa Catalina Monastery',
      description: 'Discover the charm of the White City, its colonial architecture made of sillar, and the vibrant Santa Catalina Monastery.',
      overview: '<p class="mb-4 mt-0">Explore the historical heart of Arequipa, affectionately known as the White City due to its stunning colonial architecture built entirely of white volcanic stone (sillar). This half-day walking and driving tour provides an excellent introduction to the city’s rich history, culture, and religious heritage.</p><p class="mb-8 mt-0">Your journey begins at the magnificent Plaza de Armas and the impressive Basilica Cathedral. From there, you will step back in time as you enter the Santa Catalina Monastery, a vibrant, colorful "city within a city" where nuns lived in absolute seclusion for centuries. The tour also visits the traditional Yanahuara and Carmen Alto viewpoints, offering breathtaking panoramic views of the imposing Misti, Chachani, and Pichu Pichu volcanoes towering over the city.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Highlights</h3><ul class="mb-8 mt-0 text-gray-700 list-disc pl-5"><li class="mb-2"><strong>Santa Catalina Monastery:</strong> Explore the colorful alleys, plazas, and cloisters of this historical convent.</li><li class="mb-2"><strong>Plaza de Armas:</strong> Marvel at the stunning white stone architecture and the impressive Cathedral.</li><li class="mb-2"><strong>Yanahuara Viewpoint:</strong> Enjoy iconic views of the Misti volcano framed by traditional sillar arches.</li><li class="mb-2"><strong>Carmen Alto:</strong> Take in panoramic views of the Chili River valley and Arequipa\'s three volcanic guardians.</li></ul>',
      itinerary: [
        {
          day: 1,
          title: 'Arequipa City Highlights',
          activities: [
            { time: '09:00 AM / 02:00 PM', description: 'Pick up from your hotel in Arequipa.' },
            { time: '09:15 AM / 02:15 PM', description: 'Visit to the Carmen Alto viewpoint for panoramic views of the agricultural terraces and volcanoes.' },
            { time: '10:00 AM / 03:00 PM', description: 'Explore the traditional Yanahuara district and its famous arched viewpoint.' },
            { time: '10:45 AM / 03:45 PM', description: 'Guided walking tour around the Plaza de Armas, the Basilica Cathedral, and the Jesuit Church of La Compañía.' },
            { time: '11:30 AM / 04:30 PM', description: 'Enter the Santa Catalina Monastery for a fascinating guided tour through its historical streets and cloisters.' },
            { time: '01:00 PM / 06:00 PM', description: 'Tour concludes in the city center or return to your hotel.' }
          ]
        }
      ],
      includes: [
        'Pick up and drop off from your hotel in central Arequipa',
        'Official bilingual guide (English/Spanish)',
        'Tourist transportation',
        'Entrance tickets to Santa Catalina Monastery and La Compañía'
      ],
      excludes: [
        'Meals and drinks',
        'Gratuities'
      ],
      packing: [
        'Comfortable walking shoes',
        'Sun hat, sunglasses, and sunscreen',
        'Camera or smartphone',
        'Light jacket or sweater (weather can be breezy)',
        'Cash in local currency'
      ],
      tips: [
        'Arequipa sits at 2,335m (7,660ft). It is a great place to acclimatize before heading to higher altitudes like Colca Canyon or Cusco.',
        'The sun is very strong during the day due to the altitude; always wear sunscreen.'
      ]
    },
    es: {
      title: 'City Tour Arequipa y Monasterio de Santa Catalina',
      description: 'Descubre el encanto de la Ciudad Blanca, su arquitectura colonial de sillar y el vibrante Monasterio de Santa Catalina.',
      overview: '<p class="mb-4 mt-0">Explore el corazón histórico de Arequipa, cariñosamente conocida como la Ciudad Blanca debido a su impresionante arquitectura colonial construida completamente con piedra volcánica blanca (sillar). Este tour de medio día proporciona una excelente introducción a la rica historia, cultura y herencia religiosa de la ciudad.</p><p class="mb-8 mt-0">Su viaje comienza en la magnífica Plaza de Armas y la impresionante Catedral Basílica. Desde allí, retrocederá en el tiempo al ingresar al Monasterio de Santa Catalina, una "ciudad dentro de una ciudad" colorida y vibrante donde las monjas vivieron en absoluta reclusión durante siglos. El tour también visita los miradores tradicionales de Yanahuara y Carmen Alto, que ofrecen impresionantes vistas panorámicas de los imponentes volcanes Misti, Chachani y Pichu Pichu que dominan la ciudad.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Destacados</h3><ul class="mb-8 mt-0 text-gray-700 list-disc pl-5"><li class="mb-2"><strong>Monasterio de Santa Catalina:</strong> Explore los coloridos callejones, plazas y claustros de este convento histórico.</li><li class="mb-2"><strong>Plaza de Armas:</strong> Maravíllese con la impresionante arquitectura de piedra blanca y la Catedral.</li><li class="mb-2"><strong>Mirador de Yanahuara:</strong> Disfrute de vistas icónicas del volcán Misti enmarcadas por arcos tradicionales de sillar.</li><li class="mb-2"><strong>Carmen Alto:</strong> Contemple vistas panorámicas del valle del río Chili y los tres volcanes guardianes de Arequipa.</li></ul>',
      itinerary: [
        {
          day: 1,
          title: 'Lo mejor de Arequipa',
          activities: [
            { time: '09:00 AM / 02:00 PM', description: 'Recojo de su hotel en Arequipa.' },
            { time: '09:15 AM / 02:15 PM', description: 'Visita al mirador de Carmen Alto para obtener vistas panorámicas de las terrazas agrícolas y los volcanes.' },
            { time: '10:00 AM / 03:00 PM', description: 'Explore el distrito tradicional de Yanahuara y su famoso mirador con arcos.' },
            { time: '10:45 AM / 03:45 PM', description: 'Caminata guiada por la Plaza de Armas, la Catedral Basílica y la Iglesia de la Compañía de Jesús.' },
            { time: '11:30 AM / 04:30 PM', description: 'Ingreso al Monasterio de Santa Catalina para una fascinante visita guiada.' },
            { time: '01:00 PM / 06:00 PM', description: 'El tour concluye en el centro de la ciudad o regreso a su hotel.' }
          ]
        }
      ],
      includes: [
        'Recojo y traslado desde su hotel en el centro de Arequipa',
        'Guía oficial bilingüe (Inglés/Español)',
        'Transporte turístico',
        'Entradas al Monasterio de Santa Catalina y La Compañía'
      ],
      excludes: [
        'Comidas y bebidas',
        'Propinas'
      ],
      packing: [
        'Zapatos cómodos para caminar',
        'Sombrero, gafas de sol y protector solar',
        'Cámara o smartphone',
        'Chaqueta ligera o suéter',
        'Efectivo en moneda local'
      ],
      tips: [
        'Arequipa se encuentra a 2,335m. Es un excelente lugar para aclimatarse antes de dirigirse a lugares más altos como el Cañón del Colca o Cusco.',
        'El sol es muy fuerte durante el día debido a la altitud; siempre use protector solar.'
      ]
    }
  },
  {
    id: 23,
    slug: 'colca-canyon-full-day',
    image: '/tour-colca-full-day.png',
    destination: 'Arequipa',
    duration: 'Full Day',
    price: '65',
    en: {
      title: 'Colca Canyon Full Day Tour from Arequipa',
      description: 'An express journey into the majestic Colca Canyon to see the soaring Andean condors and stunning terraced landscapes.',
      overview: '<p class="mb-4 mt-0">Experience the breathtaking vastness of the Colca Canyon, one of the deepest canyons in the world, on this comprehensive full-day tour from Arequipa. Designed for travelers with limited time, this tour takes you deep into the heart of the Andes to witness spectacular landscapes, traditional villages, and incredible wildlife.</p><p class="mb-8 mt-0">The highlight of the day is the visit to the Cruz del Condor viewpoint, where you will have the unparalleled opportunity to watch the majestic Andean Condor—the largest flying bird in the world—gliding effortlessly on thermal updrafts. Along the way, you will cross the high-altitude Patapampa pass, see wild vicuñas and alpacas in the Salinas and Aguada Blanca National Reserve, and marvel at the intricate pre-Inca agricultural terraces that line the valley walls.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Highlights</h3><ul class="mb-8 mt-0 text-gray-700 list-disc pl-5"><li class="mb-2"><strong>Cruz del Condor:</strong> The best spot in South America to observe wild Andean Condors in flight.</li><li class="mb-2"><strong>Colca Canyon:</strong> Marvel at a canyon twice as deep as the Grand Canyon in the USA.</li><li class="mb-2"><strong>National Reserve:</strong> Spot wild vicuñas, llamas, and alpacas in their natural high-altitude habitat.</li><li class="mb-2"><strong>Patapampa Pass:</strong> Reach the highest point of the journey at 4,910m (16,108ft) for views of the Ampato, Sabancaya, and Hualca Hualca volcanoes.</li></ul>',
      itinerary: [
        {
          day: 1,
          title: 'The Land of the Condor',
          activities: [
            { time: '03:00 AM', description: 'Early pick up from your hotel in Arequipa.' },
            { time: '06:30 AM', description: 'Arrival in the town of Chivay for a buffet breakfast.' },
            { time: '08:00 AM', description: 'Arrival at the Cruz del Condor viewpoint. Spend time watching the condors fly over the deep canyon.' },
            { time: '10:00 AM', description: 'Return journey through traditional villages like Maca and Pinchollo, observing pre-Inca terraces.' },
            { time: '12:00 PM', description: 'Optional visit to the La Calera hot springs (entrance fee not included).' },
            { time: '01:00 PM', description: 'Buffet lunch in Chivay (not included).' },
            { time: '02:30 PM', description: 'Begin the return trip to Arequipa, stopping at the Patapampa Volcano Viewpoint (4,910m) and the Pampa Cañahuas Reserve to see vicuñas.' },
            { time: '05:30 PM', description: 'Arrival back in Arequipa city center.' }
          ]
        }
      ],
      includes: [
        'Early morning pick up from your hotel in Arequipa',
        'Tourist transportation',
        'Official bilingual guide',
        'Breakfast in Chivay'
      ],
      excludes: [
        'Colca Canyon Tourist Ticket (BTC): S/ 70 for foreigners, S/ 40 for South Americans, S/ 20 for Peruvians',
        'Buffet lunch in Chivay',
        'Entrance to La Calera Hot Springs (approx S/ 15)',
        'Gratuities'
      ],
      packing: [
        'Warm clothing (very cold in the early morning)',
        'Sun hat, sunglasses, and sunscreen',
        'Camera and extra batteries',
        'Comfortable walking shoes',
        'Cash in Soles for the tourist ticket, lunch, and hot springs',
        'Swimsuit and towel (if visiting the hot springs)'
      ],
      tips: [
        'The tour reaches a very high altitude at Patapampa (4,910m). Drink plenty of water and coca tea to prevent altitude sickness.',
        'Dress in layers as temperatures fluctuate wildly between the freezing early morning and sunny afternoon.'
      ]
    },
    es: {
      title: 'Tour Full Day Cañón del Colca desde Arequipa',
      description: 'Un viaje express al majestuoso Cañón del Colca para ver los majestuosos cóndores andinos y los impresionantes paisajes de terrazas.',
      overview: '<p class="mb-4 mt-0">Experimente la inmensidad del Cañón del Colca, uno de los cañones más profundos del mundo, en este completo tour de día completo desde Arequipa. Diseñado para viajeros con tiempo limitado, este tour lo lleva al corazón de los Andes para presenciar paisajes espectaculares, pueblos tradicionales y una vida silvestre increíble.</p><p class="mb-8 mt-0">El punto culminante del día es la visita al mirador de la Cruz del Cóndor, donde tendrá la oportunidad incomparable de observar al majestuoso Cóndor Andino deslizarse sin esfuerzo en las corrientes térmicas. En el camino, cruzará el paso de gran altitud de Patapampa, verá vicuñas y alpacas salvajes en la Reserva Nacional de Salinas y Aguada Blanca, y se maravillará con las intrincadas terrazas agrícolas preincas que bordean las paredes del valle.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Destacados</h3><ul class="mb-8 mt-0 text-gray-700 list-disc pl-5"><li class="mb-2"><strong>Cruz del Cóndor:</strong> El mejor lugar de Sudamérica para observar cóndores andinos salvajes en vuelo.</li><li class="mb-2"><strong>Cañón del Colca:</strong> Maravíllese con un cañón dos veces más profundo que el Gran Cañón en los EE. UU.</li><li class="mb-2"><strong>Reserva Nacional:</strong> Observe vicuñas, llamas y alpacas salvajes en su hábitat natural de gran altitud.</li><li class="mb-2"><strong>Paso de Patapampa:</strong> Alcance el punto más alto del viaje a 4,910 m (16,108 pies) para ver los volcanes Ampato, Sabancaya y Hualca Hualca.</li></ul>',
      itinerary: [
        {
          day: 1,
          title: 'La Tierra del Cóndor',
          activities: [
            { time: '03:00 AM', description: 'Recojo temprano de su hotel en Arequipa.' },
            { time: '06:30 AM', description: 'Llegada al pueblo de Chivay para un desayuno buffet.' },
            { time: '08:00 AM', description: 'Llegada al mirador de la Cruz del Cóndor. Tiempo para ver a los cóndores volar sobre el profundo cañón.' },
            { time: '10:00 AM', description: 'Viaje de regreso a través de pueblos tradicionales como Maca y Pinchollo, observando terrazas preincas.' },
            { time: '12:00 PM', description: 'Visita opcional a las aguas termales de La Calera (entrada no incluida).' },
            { time: '01:00 PM', description: 'Almuerzo buffet en Chivay (no incluido).' },
            { time: '02:30 PM', description: 'Inicio del viaje de regreso a Arequipa, deteniéndose en el Mirador de los Volcanes de Patapampa (4,910m) y la Reserva Pampa Cañahuas para ver vicuñas.' },
            { time: '05:30 PM', description: 'Llegada de regreso al centro de Arequipa.' }
          ]
        }
      ],
      includes: [
        'Recojo temprano de su hotel en Arequipa',
        'Transporte turístico',
        'Guía oficial bilingüe',
        'Desayuno en Chivay'
      ],
      excludes: [
        'Boleto Turístico del Colca (BTC): S/ 70 para extranjeros, S/ 40 para sudamericanos, S/ 20 para peruanos',
        'Almuerzo buffet en Chivay',
        'Entrada a las Aguas Termales de La Calera (aprox. S/ 15)',
        'Propinas'
      ],
      packing: [
        'Ropa abrigadora (hace mucho frío en la madrugada)',
        'Sombrero, gafas de sol y protector solar',
        'Cámara y baterías adicionales',
        'Zapatos cómodos para caminar',
        'Efectivo en Soles para el boleto turístico, almuerzo y aguas termales',
        'Traje de baño y toalla (si visita las aguas termales)'
      ],
      tips: [
        'El tour alcanza una altitud muy alta en Patapampa (4,910m). Beba mucha agua y mate de coca para prevenir el mal de altura.',
        'Vístase en capas, ya que las temperaturas fluctúan entre la madrugada helada y la tarde soleada.'
      ]
    }
  },
  {
    id: 24,
    slug: 'colca-canyon-trek-2-days',
    image: '/tour-colca-trek.png',
    destination: 'Arequipa',
    duration: '2 Days / 1 Night',
    price: '95',
    en: {
      title: 'Colca Canyon Trekking - 2 Days / 1 Night',
      description: 'Hike down to the bottom of the Colca Canyon, rest in a lush oasis, and challenge yourself on the steep ascent.',
      overview: '<p class="mb-4 mt-0">For active and adventurous travelers, trekking into the Colca Canyon is an unforgettable physical challenge rewarded by stunning natural beauty. This 2-day guided trek descends into one of the deepest canyons on Earth, taking you through rugged landscapes, hanging bridges, and remote local villages completely isolated from the modern world.</p><p class="mb-8 mt-0">After watching the majestic Andean Condors at the Cruz del Condor viewpoint, the real adventure begins. You will hike down the canyon walls for several hours until you reach the Oasis of Sangalle, a lush, tropical paradise nestled at the very bottom of the gorge. Here, you can relax in natural swimming pools and spend the night in rustic lodges beneath a spectacular starry sky. The next morning, a demanding pre-dawn hike brings you back to the rim, concluding an epic Andean adventure.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Highlights</h3><ul class="mb-8 mt-0 text-gray-700 list-disc pl-5"><li class="mb-2"><strong>Canyon Descent & Ascent:</strong> Challenge yourself physically by hiking deep into and out of the massive canyon.</li><li class="mb-2"><strong>Sangalle Oasis:</strong> Relax in tropical swimming pools surrounded by towering canyon walls.</li><li class="mb-2"><strong>Cruz del Condor:</strong> Observe the majestic Andean condor in flight before beginning your trek.</li><li class="mb-2"><strong>Stargazing:</strong> Enjoy incredibly clear night skies free from light pollution at the bottom of the canyon.</li></ul>',
      itinerary: [
        {
          day: 1,
          title: 'Condors and Descent into the Oasis',
          activities: [
            { time: '03:00 AM', description: 'Early pick up from your Arequipa hotel and drive to Chivay for breakfast.' },
            { time: '08:00 AM', description: 'Stop at the Cruz del Condor to watch the condors fly.' },
            { time: '10:00 AM', description: 'Arrive at San Miguel viewpoint in Cabanaconde to begin the descent into the canyon.' },
            { time: '01:00 PM', description: 'Arrive at the village of San Juan de Chuccho for lunch.' },
            { time: '03:00 PM', description: 'Continue hiking through Cosñirhua and Malata villages.' },
            { time: '05:00 PM', description: 'Arrive at the Sangalle Oasis. Relax in the pools, have dinner, and sleep in basic bungalows.' }
          ]
        },
        {
          day: 2,
          title: 'The Challenge of the Ascent',
          activities: [
            { time: '04:30 AM', description: 'Begin the steep zigzag hike up to Cabanaconde to avoid the harsh sun.' },
            { time: '07:30 AM', description: 'Arrive in Cabanaconde and enjoy a well-deserved breakfast.' },
            { time: '10:00 AM', description: 'Return transport towards Chivay, stopping at viewpoints along the way.' },
            { time: '12:00 PM', description: 'Optional stop at La Calera hot springs to soothe your muscles.' },
            { time: '01:00 PM', description: 'Lunch in Chivay (not included).' },
            { time: '05:30 PM', description: 'Arrive back in Arequipa.' }
          ]
        }
      ],
      includes: [
        'Pick up and transport from Arequipa',
        'Official bilingual trekking guide',
        '1 Night accommodation in a basic bungalow in Sangalle Oasis',
        'Meals during the trek: 2 Breakfasts, 1 Lunch, 1 Dinner'
      ],
      excludes: [
        'Colca Canyon Tourist Ticket (BTC): S/ 70 for foreigners',
        'Entrance to La Calera Hot Springs (approx S/ 15)',
        'Final lunch in Chivay on Day 2',
        'Mule hire (optional, for those who cannot make the ascent)',
        'Gratuities'
      ],
      packing: [
        'Good quality hiking boots',
        'Headlamp or flashlight (essential for the early morning ascent)',
        'Sun hat, sunglasses, and high-SPF sunscreen',
        'Swimsuit and towel for the oasis and hot springs',
        'Insect repellent',
        'Refillable water bottle (water can be bought along the trail)',
        'Cash in Soles'
      ],
      tips: [
        'This is a physically demanding trek. You should be in good physical condition and properly acclimatized to the altitude.',
        'If you find the ascent too difficult, mules can be rented at the oasis for an additional cost (approx. 70-80 Soles).'
      ]
    },
    es: {
      title: 'Trekking Cañón del Colca - 2 Días / 1 Noche',
      description: 'Camine hasta el fondo del Cañón del Colca, descanse en un exuberante oasis y desafíese a sí mismo en el empinado ascenso.',
      overview: '<p class="mb-4 mt-0">Para los viajeros activos y aventureros, el trekking en el Cañón del Colca es un desafío físico inolvidable recompensado por una belleza natural impresionante. Esta caminata guiada de 2 días desciende a uno de los cañones más profundos de la Tierra, llevándolo a través de paisajes escarpados, puentes colgantes y remotos pueblos locales completamente aislados del mundo moderno.</p><p class="mb-8 mt-0">Después de observar los majestuosos cóndores andinos en el mirador de la Cruz del Cóndor, comienza la verdadera aventura. Caminará por las paredes del cañón durante varias horas hasta llegar al Oasis de Sangalle, un paraíso tropical exuberante ubicado en el fondo del desfiladero. Aquí, podrá relajarse en piscinas naturales y pasar la noche en rústicos albergues bajo un cielo estrellado espectacular. A la mañana siguiente, una exigente caminata antes del amanecer lo lleva de regreso al borde, concluyendo una épica aventura andina.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Destacados</h3><ul class="mb-8 mt-0 text-gray-700 list-disc pl-5"><li class="mb-2"><strong>Descenso y Ascenso:</strong> Desafíese físicamente caminando hasta lo profundo del enorme cañón.</li><li class="mb-2"><strong>Oasis de Sangalle:</strong> Relájese en piscinas tropicales rodeadas por imponentes paredes del cañón.</li><li class="mb-2"><strong>Cruz del Cóndor:</strong> Observe al majestuoso cóndor andino en vuelo antes de comenzar su caminata.</li><li class="mb-2"><strong>Observación de Estrellas:</strong> Disfrute de cielos nocturnos increíblemente despejados y libres de contaminación lumínica.</li></ul>',
      itinerary: [
        {
          day: 1,
          title: 'Cóndores y Descenso al Oasis',
          activities: [
            { time: '03:00 AM', description: 'Recojo temprano de su hotel en Arequipa y viaje a Chivay para desayunar.' },
            { time: '08:00 AM', description: 'Parada en la Cruz del Cóndor para ver volar a los cóndores.' },
            { time: '10:00 AM', description: 'Llegada al mirador de San Miguel en Cabanaconde para comenzar el descenso.' },
            { time: '01:00 PM', description: 'Llegada al pueblo de San Juan de Chuccho para almorzar.' },
            { time: '03:00 PM', description: 'Continuación de la caminata a través de los pueblos de Cosñirhua y Malata.' },
            { time: '05:00 PM', description: 'Llegada al Oasis de Sangalle. Tiempo para relajarse en las piscinas y cenar.' }
          ]
        },
        {
          day: 2,
          title: 'El Desafío del Ascenso',
          activities: [
            { time: '04:30 AM', description: 'Inicio de la empinada caminata en zigzag hasta Cabanaconde para evitar el sol abrasador.' },
            { time: '07:30 AM', description: 'Llegada a Cabanaconde y desayuno bien merecido.' },
            { time: '10:00 AM', description: 'Transporte de regreso hacia Chivay, deteniéndose en miradores.' },
            { time: '12:00 PM', description: 'Parada opcional en las aguas termales de La Calera para relajar los músculos.' },
            { time: '01:00 PM', description: 'Almuerzo en Chivay (no incluido).' },
            { time: '05:30 PM', description: 'Llegada de regreso a Arequipa.' }
          ]
        }
      ],
      includes: [
        'Recojo y transporte desde Arequipa',
        'Guía oficial de trekking bilingüe',
        '1 Noche de alojamiento en bungalow básico en el Oasis de Sangalle',
        'Comidas durante el trek: 2 Desayunos, 1 Almuerzo, 1 Cena'
      ],
      excludes: [
        'Boleto Turístico del Colca (BTC): S/ 70 para extranjeros',
        'Entrada a las Aguas Termales de La Calera (aprox. S/ 15)',
        'Último almuerzo en Chivay en el Día 2',
        'Alquiler de mulas (opcional, para aquellos que no pueden hacer el ascenso)',
        'Propinas'
      ],
      packing: [
        'Botas de montaña de buena calidad',
        'Linterna frontal (esencial para el ascenso temprano por la mañana)',
        'Sombrero, gafas de sol y protector solar',
        'Traje de baño y toalla para el oasis y las aguas termales',
        'Repelente de insectos',
        'Botella de agua (se puede comprar agua en el camino)',
        'Efectivo en Soles'
      ],
      tips: [
        'Este es un trek físicamente exigente. Debe estar en buena condición física y bien aclimatado a la altitud.',
        'Si encuentra el ascenso demasiado difícil, se pueden alquilar mulas en el oasis (aprox. 70-80 Soles).'
      ]
    }
  },
  {
    id: 25,
    slug: 'salkantay-classic-trek-5-days',
    image: '/tour-salkantay-5d.png',
    destination: 'Andes Trekking',
    duration: '5 Days / 4 Nights',
    price: '450',
    en: {
      title: 'Salkantay Classic Trek to Machu Picchu',
      description: 'The ultimate 5-day adventure crossing the towering Salkantay pass and descending into the lush jungle before reaching Machu Picchu.',
      overview: '<p class="mb-4 mt-0">The 5-Day Salkantay Trek is an epic journey designed for adventurous travelers who want to experience the raw, untamed beauty of the Andes. Recognized by National Geographic as one of the world\'s best treks, this route takes you far off the beaten path, bypassing the crowded Inca Trail to offer a deeper, more spiritual connection with nature.</p><p class="mb-4 mt-0">Your adventure begins with a hike to the stunning turquoise waters of Humantay Lake before facing the ultimate physical challenge: crossing the Salkantay Pass at 4,600m (15,091ft) right beneath the towering glaciers. From this frozen, high-altitude alpine environment, the trail descends dramatically into the high jungle (cloud forest), where the landscape transforms entirely. You will walk through lush valleys filled with wild orchids, waterfalls, and coffee plantations.</p><p class="mb-8 mt-0">On the final days, you will follow the Urubamba river, hike along the train tracks to Aguas Calientes, and culminate your journey with an unforgettable sunrise visit to the lost city of the Incas, Machu Picchu.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Highlights</h3><ul class="mb-8 mt-0 text-gray-700 list-disc pl-5"><li class="mb-2"><strong>Humantay Lake:</strong> Start your trek with a visit to one of Peru\'s most beautiful glacial lakes.</li><li class="mb-2"><strong>Salkantay Pass:</strong> Conquer the highest point of the trek, feeling the sheer power of the Salkantay glacier.</li><li class="mb-2"><strong>Cloud Forest:</strong> Experience dramatic climate changes as you hike into the tropical Amazonian basin.</li><li class="mb-2"><strong>Llaqta Pata:</strong> Discover a remote Inca ruin that offers a unique rear-view perspective of Machu Picchu.</li><li class="mb-2"><strong>Machu Picchu:</strong> Reward your physical efforts with a guided tour of the magnificent Inca citadel.</li></ul>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – Soraypampa – Humantay Lake',
          activities: [
            { time: '04:30 AM', description: 'Early pick up from your hotel in Cusco and drive to Mollepata for breakfast.' },
            { time: '09:00 AM', description: 'Arrive at the trailhead in Challacancha and begin the hike to Soraypampa.' },
            { time: '12:00 PM', description: 'Lunch at the Soraypampa base camp.' },
            { time: '02:00 PM', description: 'Hike up to the stunning Humantay Lake (4,200m) for acclimatization and photos.' },
            { time: '05:00 PM', description: 'Return to Soraypampa for dinner and a freezing but beautiful night under the stars in glass igloos or tents.' }
          ]
        },
        {
          day: 2,
          title: 'Soraypampa – Salkantay Pass – Chaullay',
          activities: [
            { time: '05:30 AM', description: 'Wake up with a hot cup of coca tea and breakfast.' },
            { time: '07:00 AM', description: 'Begin the challenging ascent to the Salkantay Pass.' },
            { time: '11:00 AM', description: 'Reach the Salkantay Pass (4,600m). Enjoy the views and participate in an Andean offering to the mountains.' },
            { time: '01:00 PM', description: 'Descend to Wayracmachay for a hot lunch.' },
            { time: '05:00 PM', description: 'Continue descending into the cloud forest until reaching the Chaullay campsite.' }
          ]
        },
        {
          day: 3,
          title: 'Chaullay – Lucmabamba (Coffee Tour)',
          activities: [
            { time: '06:00 AM', description: 'Breakfast at the campsite in the warm jungle environment.' },
            { time: '07:30 AM', description: 'Hike through the Santa Teresa valley, crossing rivers, waterfalls, and passion fruit farms.' },
            { time: '12:00 PM', description: 'Arrive at La Playa for lunch.' },
            { time: '02:00 PM', description: 'Short walk to Lucmabamba campsite. Participate in a local coffee roasting and tasting tour.' },
            { time: '05:00 PM', description: 'Optional visit to Cocalmayo hot springs (transportation extra). Dinner at the camp.' }
          ]
        },
        {
          day: 4,
          title: 'Lucmabamba – Llactapata – Aguas Calientes',
          activities: [
            { time: '06:00 AM', description: 'Early breakfast and start climbing an original portion of the Inca Trail.' },
            { time: '09:00 AM', description: 'Arrive at the Llactapata archaeological site for a distant, unique view of Machu Picchu.' },
            { time: '12:00 PM', description: 'Descend to the Hydroelectric station for lunch.' },
            { time: '02:30 PM', description: 'Walk along the train tracks through the jungle to Aguas Calientes.' },
            { time: '05:30 PM', description: 'Check into your hotel in Aguas Calientes. Final group dinner at a local restaurant.' }
          ]
        },
        {
          day: 5,
          title: 'Machu Picchu – Return to Cusco',
          activities: [
            { time: '04:30 AM', description: 'Early wake up and breakfast at the hotel.' },
            { time: '05:30 AM', description: 'Take the first bus up to the Machu Picchu citadel.' },
            { time: '06:30 AM', description: 'Enter Machu Picchu just as the sun rises. Enjoy a 2-hour guided tour.' },
            { time: '09:00 AM', description: 'Free time to explore on your own or hike Huayna Picchu (if booked in advance).' },
            { time: '01:00 PM', description: 'Take the bus down to Aguas Calientes and board the return train to Ollantaytambo.' },
            { time: '06:00 PM', description: 'Bus transfer from Ollantaytambo to Cusco, dropping you off near the main square.' }
          ]
        }
      ],
      includes: [
        'Pre-departure briefing in Cusco',
        'Pick up from your hotel and transportation to the trailhead',
        'English-speaking professional mountain guide',
        'Entrance tickets to the Salkantay Trail and Machu Picchu',
        'Chef and cooking equipment (all meals on the trek included)',
        'Mules and muleteers to carry camping equipment and 5kg of your personal items',
        'Camping equipment (tents, dining tent, chairs, tables)',
        '1 Night in a hotel in Aguas Calientes',
        'Return train ticket to Ollantaytambo and bus to Cusco'
      ],
      excludes: [
        'Sleeping bag and walking sticks (can be rented)',
        'Entrance to Humantay Lake (approx. 20 Soles)',
        'First breakfast and last lunch in Aguas Calientes',
        'Entrance to Cocalmayo Hot Springs',
        'Huayna Picchu or Machu Picchu Mountain tickets',
        'Gratuities for the guide, cook, and muleteers'
      ],
      packing: [
        'Good quality, broken-in hiking boots',
        'Sleeping bag rated for -10°C (14°F)',
        'Layers of clothing for extreme temperature changes (thermal wear, fleece, down jacket)',
        'Rain gear (poncho or waterproof jacket/pants)',
        'Headlamp with extra batteries',
        'Insect repellent and strong sunscreen',
        'Original passport (required for Machu Picchu entry)'
      ],
      tips: [
        'Spend at least 2 full days in Cusco before starting the trek to acclimatize to the altitude.',
        'Pack light. The mules carry a strict maximum of 5kg of your belongings, which must include your sleeping bag.'
      ]
    },
    es: {
      title: 'Trek Clásico Salkantay a Machu Picchu',
      description: 'La máxima aventura de 5 días cruzando el imponente paso Salkantay y descendiendo a la selva exuberante antes de llegar a Machu Picchu.',
      overview: '<p class="mb-4 mt-0">El Trek Salkantay de 5 días es un viaje épico diseñado para viajeros aventureros que desean experimentar la belleza cruda e indómita de los Andes. Reconocida por National Geographic como una de las mejores caminatas del mundo, esta ruta te aleja de los caminos trillados, evitando las multitudes del Camino Inca para ofrecer una conexión más profunda y espiritual con la naturaleza.</p><p class="mb-4 mt-0">Tu aventura comienza con una caminata a las impresionantes aguas turquesas de la Laguna Humantay antes de enfrentar el máximo desafío físico: cruzar el Paso Salkantay a 4,600m justo debajo de los imponentes glaciares. Desde este entorno alpino helado, el sendero desciende dramáticamente hacia la ceja de selva (bosque nuboso), donde el paisaje se transforma por completo. Caminarás por valles exuberantes llenos de orquídeas silvestres, cascadas y plantaciones de café.</p><p class="mb-8 mt-0">En los últimos días, seguirás el río Urubamba, caminarás a lo largo de las vías del tren hasta Aguas Calientes y culminarás tu viaje con una inolvidable visita al amanecer en la ciudad perdida de los Incas, Machu Picchu.</p><h3 class="font-[\'Outfit\'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Destacados</h3><ul class="mb-8 mt-0 text-gray-700 list-disc pl-5"><li class="mb-2"><strong>Laguna Humantay:</strong> Comienza tu trek con una visita a una de las lagunas glaciares más hermosas del Perú.</li><li class="mb-2"><strong>Paso Salkantay:</strong> Conquista el punto más alto del trek, sintiendo el poder del glaciar Salkantay.</li><li class="mb-2"><strong>Bosque Nuboso:</strong> Experimenta cambios climáticos dramáticos a medida que caminas hacia la cuenca tropical amazónica.</li><li class="mb-2"><strong>Llaqta Pata:</strong> Descubre una remota ruina Inca que ofrece una perspectiva única de la parte trasera de Machu Picchu.</li><li class="mb-2"><strong>Machu Picchu:</strong> Recompensa tus esfuerzos físicos con un recorrido guiado por la magnífica ciudadela Inca.</li></ul>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – Soraypampa – Laguna Humantay',
          activities: [
            { time: '04:30 AM', description: 'Recojo temprano de su hotel en Cusco y viaje a Mollepata para desayunar.' },
            { time: '09:00 AM', description: 'Llegada al inicio del sendero en Challacancha y comienzo de la caminata hacia Soraypampa.' },
            { time: '12:00 PM', description: 'Almuerzo en el campamento base de Soraypampa.' },
            { time: '02:00 PM', description: 'Caminata a la impresionante Laguna Humantay (4,200m) para aclimatación y fotos.' },
            { time: '05:00 PM', description: 'Regreso a Soraypampa para cenar y pasar una noche helada pero hermosa bajo las estrellas.' }
          ]
        },
        {
          day: 2,
          title: 'Soraypampa – Paso Salkantay – Chaullay',
          activities: [
            { time: '05:30 AM', description: 'Despierta con una taza caliente de mate de coca y desayuno.' },
            { time: '07:00 AM', description: 'Inicio del desafiante ascenso al Paso Salkantay.' },
            { time: '11:00 AM', description: 'Llegada al Paso Salkantay (4,600m). Disfruta de las vistas y participa en una ofrenda andina a las montañas.' },
            { time: '01:00 PM', description: 'Descenso a Wayracmachay para un almuerzo caliente.' },
            { time: '05:00 PM', description: 'Continuación del descenso hacia el bosque nuboso hasta llegar al campamento de Chaullay.' }
          ]
        },
        {
          day: 3,
          title: 'Chaullay – Lucmabamba (Tour de Café)',
          activities: [
            { time: '06:00 AM', description: 'Desayuno en el campamento en un ambiente cálido de selva.' },
            { time: '07:30 AM', description: 'Caminata por el valle de Santa Teresa, cruzando ríos, cascadas y granjas de maracuyá.' },
            { time: '12:00 PM', description: 'Llegada a La Playa para almorzar.' },
            { time: '02:00 PM', description: 'Caminata corta al campamento de Lucmabamba. Tour local de tostado y degustación de café.' },
            { time: '05:00 PM', description: 'Visita opcional a las aguas termales de Cocalmayo (transporte extra). Cena en el campamento.' }
          ]
        },
        {
          day: 4,
          title: 'Lucmabamba – Llactapata – Aguas Calientes',
          activities: [
            { time: '06:00 AM', description: 'Desayuno temprano y comienzo del ascenso por una porción original del Camino Inca.' },
            { time: '09:00 AM', description: 'Llegada al sitio arqueológico de Llactapata para una vista única y distante de Machu Picchu.' },
            { time: '12:00 PM', description: 'Descenso a la estación Hidroeléctrica para almorzar.' },
            { time: '02:30 PM', description: 'Caminata a lo largo de las vías del tren a través de la selva hasta Aguas Calientes.' },
            { time: '05:30 PM', description: 'Check-in en su hotel en Aguas Calientes. Cena de despedida del grupo.' }
          ]
        },
        {
          day: 5,
          title: 'Machu Picchu – Regreso a Cusco',
          activities: [
            { time: '04:30 AM', description: 'Despertar temprano y desayuno en el hotel.' },
            { time: '05:30 AM', description: 'Tomar el primer autobús a la ciudadela de Machu Picchu.' },
            { time: '06:30 AM', description: 'Ingreso a Machu Picchu al amanecer. Disfrute de una visita guiada de 2 horas.' },
            { time: '09:00 AM', description: 'Tiempo libre para explorar por su cuenta o subir al Huayna Picchu (si se reservó con anticipación).' },
            { time: '01:00 PM', description: 'Tomar el autobús de bajada a Aguas Calientes y abordar el tren de regreso a Ollantaytambo.' },
            { time: '06:00 PM', description: 'Traslado en autobús de Ollantaytambo a Cusco, finalizando cerca de la plaza principal.' }
          ]
        }
      ],
      includes: [
        'Reunión informativa previa a la salida en Cusco',
        'Recojo de su hotel y transporte al inicio del sendero',
        'Guía profesional de montaña',
        'Boletos de ingreso al Camino Salkantay y Machu Picchu',
        'Chef y equipo de cocina (todas las comidas en el trek incluidas)',
        'Mulas y arrieros para llevar el equipo de campamento y 5kg de sus artículos personales',
        'Equipo de campamento (carpas, carpa comedor, sillas, mesas)',
        '1 Noche en un hotel en Aguas Calientes',
        'Boleto de tren de regreso a Ollantaytambo y autobús a Cusco'
      ],
      excludes: [
        'Bolsa de dormir y bastones de caminata (se pueden alquilar)',
        'Entrada a la Laguna Humantay (aprox. 20 Soles)',
        'Primer desayuno y último almuerzo en Aguas Calientes',
        'Entrada a las Aguas Termales de Cocalmayo',
        'Boletos para Huayna Picchu o Montaña Machu Picchu',
        'Propinas para el guía, cocinero y arrieros'
      ],
      packing: [
        'Botas de senderismo de buena calidad y amoldadas',
        'Bolsa de dormir clasificada para -10°C',
        'Capas de ropa para cambios extremos de temperatura',
        'Ropa para lluvia (poncho o chaqueta/pantalones impermeables)',
        'Linterna frontal con baterías adicionales',
        'Repelente de insectos y protector solar fuerte',
        'Pasaporte original (requerido para ingresar a Machu Picchu)'
      ],
      tips: [
        'Pase al menos 2 días completos en Cusco antes de comenzar la caminata para aclimatarse a la altitud.',
        'Empaque ligero. Las mulas llevan un máximo estricto de 5 kg de sus pertenencias, que deben incluir su saco de dormir.'
      ]
    }
  },
  {
    id: 26,
    slug: 'inca-trail-2-days',
    image: '/tour-inca-trail-2d.png',
    destination: 'Andes Trekking',
    duration: '2 Days / 1 Night',
    price: '490',
    en: {
      title: 'Short Inca Trail to Machu Picchu 2D/1N',
      description: 'Experience the magic of the Inca Trail on a shorter, 2-day express route perfectly designed for those with limited time.',
      overview: '<p class="mb-4 mt-0">The 2-Day Short Inca Trail is the perfect option for travelers who want to experience the legendary Inca Trail but have limited time or prefer a less physically demanding trek. This express route covers the final, most stunning portion of the classic trail, allowing you to walk in the footsteps of the Incas without spending multiple nights camping.</p><p class="mb-8 mt-0">Beginning at KM 104, you will ascend through the lush cloud forest, visiting the beautiful ruins of Chachabamba and Wiñay Wayna. The highlight of the trek is arriving at the Sun Gate (Inti Punku) in the late afternoon, where you will get your first majestic view of Machu Picchu before the crowds arrive. After spending the night in a comfortable hotel in Aguas Calientes, you will return to the citadel the next morning for a comprehensive guided tour.</p>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – KM 104 – Sun Gate – Aguas Calientes',
          activities: [
            { time: '04:00 AM', description: 'Early pick-up from your hotel in Cusco and transfer to the Ollantaytambo train station.' },
            { time: '06:10 AM', description: 'Board the scenic train journey to KM 104, the starting point of the trek.' },
            { time: '08:00 AM', description: 'Pass the checkpoint, cross the Urubamba River, and begin the ascent.' },
            { time: '12:00 PM', description: 'Arrive at the stunning Wiñay Wayna archaeological site. Enjoy a boxed lunch.' },
            { time: '03:30 PM', description: 'Reach Inti Punku (The Sun Gate) for your first panoramic view of Machu Picchu.' },
            { time: '04:30 PM', description: 'Descend to the citadel and take the bus down to Aguas Calientes. Dinner and overnight at a hotel.' }
          ]
        },
        {
          day: 2,
          title: 'Machu Picchu Tour & Return to Cusco',
          activities: [
            { time: '05:30 AM', description: 'Early breakfast and bus ride up to Machu Picchu.' },
            { time: '06:30 AM', description: 'Enter the citadel for a 2-hour guided tour of the most important temples and plazas.' },
            { time: '09:00 AM', description: 'Free time to take photos or hike Huayna Picchu (if booked in advance).' },
            { time: '01:00 PM', description: 'Return to Aguas Calientes by bus for lunch (not included).' },
            { time: '03:20 PM', description: 'Board the return train to Ollantaytambo.' },
            { time: '07:00 PM', description: 'Arrival in Cusco and transfer to your hotel.' }
          ]
        }
      ],
      includes: [
        'Briefing in Cusco prior to departure',
        'Hotel pick-up and transportation to Ollantaytambo',
        'Round-trip train tickets (Ollantaytambo - KM 104 / Aguas Calientes - Ollantaytambo)',
        'Inca Trail permits and Machu Picchu entrance tickets',
        'Professional bilingual guide',
        'Boxed lunch on Day 1, Dinner on Day 1, Breakfast on Day 2',
        '1-night hotel accommodation in Aguas Calientes',
        'Round-trip bus tickets (Machu Picchu - Aguas Calientes)'
      ],
      excludes: [
        'Breakfast on Day 1 and Lunch on Day 2',
        'Huayna Picchu or Machu Picchu Mountain tickets',
        'Gratuities for the guide'
      ],
      packing: [
        'Original passport (mandatory for the trail and train)',
        'Comfortable hiking shoes or boots',
        'Daypack (max 20 liters)',
        'Rain jacket or poncho',
        'Sunscreen, hat, and insect repellent',
        'Reusable water bottle'
      ],
      tips: [
        'Permits for the Inca Trail sell out months in advance. Book early to secure your spot.',
        'You only need to carry a small daypack; leave your main luggage securely at your hotel in Cusco.'
      ]
    },
    es: {
      title: 'Camino Inca Corto a Machu Picchu 2D/1N',
      description: 'Experimenta la magia del Camino Inca en una ruta express de 2 días perfectamente diseñada para quienes tienen tiempo limitado.',
      overview: '<p class="mb-4 mt-0">El Camino Inca Corto de 2 días es la opción perfecta para los viajeros que desean experimentar el legendario Camino Inca pero tienen tiempo limitado o prefieren una caminata menos exigente físicamente. Esta ruta express cubre la parte final y más impresionante del camino clásico, permitiéndote caminar tras los pasos de los incas sin pasar varias noches acampando.</p><p class="mb-8 mt-0">Comenzando en el KM 104, ascenderás a través del exuberante bosque nuboso, visitando las hermosas ruinas de Chachabamba y Wiñay Wayna. El punto culminante de la caminata es la llegada a la Puerta del Sol (Inti Punku) al final de la tarde, donde obtendrás tu primera vista majestuosa de Machu Picchu antes de que lleguen las multitudes. Después de pasar la noche en un cómodo hotel en Aguas Calientes, regresarás a la ciudadela a la mañana siguiente para un recorrido guiado completo.</p>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – KM 104 – Puerta del Sol – Aguas Calientes',
          activities: [
            { time: '04:00 AM', description: 'Recojo temprano de su hotel en Cusco y traslado a la estación de tren de Ollantaytambo.' },
            { time: '06:10 AM', description: 'Viaje panorámico en tren hasta el KM 104, el punto de inicio de la caminata.' },
            { time: '08:00 AM', description: 'Paso por el control, cruce del río Urubamba y comienzo del ascenso.' },
            { time: '12:00 PM', description: 'Llegada al impresionante sitio arqueológico de Wiñay Wayna. Disfrute de un box lunch.' },
            { time: '03:30 PM', description: 'Llegada al Inti Punku (Puerta del Sol) para su primera vista panorámica de Machu Picchu.' },
            { time: '04:30 PM', description: 'Descenso a la ciudadela y viaje en bus bajando a Aguas Calientes. Cena y alojamiento en un hotel.' }
          ]
        },
        {
          day: 2,
          title: 'Tour en Machu Picchu y Retorno a Cusco',
          activities: [
            { time: '05:30 AM', description: 'Desayuno temprano y viaje en bus subiendo a Machu Picchu.' },
            { time: '06:30 AM', description: 'Ingreso a la ciudadela para una visita guiada de 2 horas por los templos y plazas más importantes.' },
            { time: '09:00 AM', description: 'Tiempo libre para tomar fotos o subir al Huayna Picchu (si se reservó con anticipación).' },
            { time: '01:00 PM', description: 'Retorno a Aguas Calientes en bus para almorzar (no incluido).' },
            { time: '03:20 PM', description: 'Abordar el tren de regreso a Ollantaytambo.' },
            { time: '07:00 PM', description: 'Llegada a Cusco y traslado a su hotel.' }
          ]
        }
      ],
      includes: [
        'Reunión informativa en Cusco antes de la salida',
        'Recojo en el hotel y transporte a Ollantaytambo',
        'Boletos de tren ida y vuelta (Ollantaytambo - KM 104 / Aguas Calientes - Ollantaytambo)',
        'Permisos del Camino Inca y boletos de ingreso a Machu Picchu',
        'Guía profesional bilingüe',
        'Box lunch en el Día 1, Cena en el Día 1, Desayuno en el Día 2',
        '1 noche de alojamiento en hotel en Aguas Calientes',
        'Boletos de bus ida y vuelta (Machu Picchu - Aguas Calientes)'
      ],
      excludes: [
        'Desayuno en el Día 1 y Almuerzo en el Día 2',
        'Boletos para Huayna Picchu o Montaña Machu Picchu',
        'Propinas para el guía'
      ],
      packing: [
        'Pasaporte original (obligatorio para el camino y el tren)',
        'Zapatos o botas cómodas para caminar',
        'Mochila pequeña (máx. 20 litros)',
        'Chaqueta para la lluvia o poncho',
        'Protector solar, sombrero y repelente de insectos',
        'Botella de agua reutilizable'
      ],
      tips: [
        'Los permisos para el Camino Inca se agotan con meses de anticipación. Reserve temprano.',
        'Solo necesita llevar una mochila pequeña; deje su equipaje principal de forma segura en su hotel en Cusco.'
      ]
    }
  },
  {
    id: 27,
    slug: 'inca-trail-4-days',
    image: '/tour-inca-trail-4d.png',
    destination: 'Andes Trekking',
    duration: '4 Days / 3 Nights',
    price: '750',
    en: {
      title: 'Classic Inca Trail to Machu Picchu 4D/3N',
      description: 'The world-famous 4-day hike following the original ancient stone paths of the Incas through breathtaking cloud forests to the Sun Gate.',
      overview: '<p class="mb-4 mt-0">The Classic 4-Day Inca Trail is consistently ranked as one of the best treks in the world. This ancient 42-kilometer (26-mile) route built by the Incas winds its way through diverse ecological zones, from high-altitude alpine passes to lush, subtropical cloud forests filled with orchids and hummingbirds.</p><p class="mb-8 mt-0">Along the journey, you will explore spectacular archaeological ruins like Runkurakay, Sayacmarca, and Wiñay Wayna, which are accessible only by foot. The ultimate reward comes on the final morning as you hike through the darkness to reach the Sun Gate (Inti Punku) just in time to watch the sunrise illuminate the majestic citadel of Machu Picchu below.</p>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – KM 82 – Wayllabamba',
          activities: [
            { time: '05:30 AM', description: 'Pick-up from your hotel and drive to KM 82, the start of the trail.' },
            { time: '09:00 AM', description: 'Cross the checkpoint and begin the gentle hike along the Urubamba River.' },
            { time: '01:00 PM', description: 'Enjoy lunch near the Llactapata archaeological site.' },
            { time: '04:30 PM', description: 'Arrive at the first campsite in Wayllabamba (3,000m). Dinner and rest.' }
          ]
        },
        {
          day: 2,
          title: 'Wayllabamba – Dead Woman\'s Pass – Pacaymayo',
          activities: [
            { time: '05:30 AM', description: 'Wake up early with coca tea and a hearty breakfast.' },
            { time: '07:00 AM', description: 'Begin the most challenging ascent of the trek towards the highest pass.' },
            { time: '11:30 AM', description: 'Conquer Warmiwañusca (Dead Woman\'s Pass) at 4,215m (13,828ft).' },
            { time: '02:00 PM', description: 'Descend steeply into the Pacaymayo valley for lunch and set up camp.' }
          ]
        },
        {
          day: 3,
          title: 'Pacaymayo – Wiñay Wayna',
          activities: [
            { time: '06:00 AM', description: 'Breakfast and begin the ascent to the second pass, Runkurakay (3,950m).' },
            { time: '10:00 AM', description: 'Explore the Sayacmarca ruins and enter the beautiful cloud forest.' },
            { time: '01:00 PM', description: 'Cross the third pass (Phuyupatamarca) and enjoy spectacular views before lunch.' },
            { time: '04:30 PM', description: 'Descend the impressive Inca stone steps to the final campsite at Wiñay Wayna.' }
          ]
        },
        {
          day: 4,
          title: 'Wiñay Wayna – Sun Gate – Machu Picchu',
          activities: [
            { time: '03:30 AM', description: 'Very early wake up to be the first at the checkpoint.' },
            { time: '05:30 AM', description: 'Hike the final trail section in the dark towards Inti Punku.' },
            { time: '07:00 AM', description: 'Arrive at the Sun Gate to witness the sunrise over Machu Picchu.' },
            { time: '08:30 AM', description: 'Descend to the citadel for a comprehensive 2-hour guided tour.' },
            { time: '01:00 PM', description: 'Take the bus to Aguas Calientes and board the train back to Cusco.' }
          ]
        }
      ],
      includes: [
        'Briefing in Cusco prior to departure',
        'Transportation to KM 82 and return train/bus to Cusco',
        'Inca Trail permits and Machu Picchu entrance tickets',
        'Professional bilingual guides',
        'Porters to carry tents, food, and 7kg of personal items per person',
        'All camping equipment (tents, dining tent, sleeping mats)',
        'Meals (3 breakfasts, 3 lunches, 3 dinners)',
        'Bus ticket down from Machu Picchu to Aguas Calientes'
      ],
      excludes: [
        'Sleeping bags (can be rented)',
        'First breakfast and final lunch in Aguas Calientes',
        'Huayna Picchu mountain tickets',
        'Gratuities for the trekking crew'
      ],
      packing: [
        'Original passport',
        'Sleeping bag (rated for -5°C)',
        'Well-worn hiking boots',
        'Trekking poles (rubber tips required)',
        'Layers of clothing for extreme temperatures',
        'Headlamp, sunscreen, and insect repellent'
      ],
      tips: [
        'Permits are strictly limited to 500 people per day (including staff) and sell out 5-6 months in advance.',
        'February is closed for maintenance.'
      ]
    },
    es: {
      title: 'Camino Inca Clásico a Machu Picchu 4D/3N',
      description: 'La famosa caminata de 4 días siguiendo los antiguos caminos de piedra de los Incas a través de impresionantes bosques nubosos hasta la Puerta del Sol.',
      overview: '<p class="mb-4 mt-0">El Camino Inca Clásico de 4 días es clasificado constantemente como uno de los mejores treks del mundo. Esta antigua ruta de 42 kilómetros construida por los incas serpentea a través de diversas zonas ecológicas, desde pasos alpinos de gran altitud hasta exuberantes bosques nubosos subtropicales llenos de orquídeas y colibríes.</p><p class="mb-8 mt-0">A lo largo del viaje, explorarás espectaculares ruinas arqueológicas como Runkurakay, Sayacmarca y Wiñay Wayna, que solo son accesibles a pie. La máxima recompensa llega en la última mañana mientras caminas en la oscuridad para llegar a la Puerta del Sol (Inti Punku) justo a tiempo para ver el amanecer iluminar la majestuosa ciudadela de Machu Picchu debajo.</p>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – KM 82 – Wayllabamba',
          activities: [
            { time: '05:30 AM', description: 'Recojo de su hotel y viaje al KM 82, el inicio del camino.' },
            { time: '09:00 AM', description: 'Cruce del punto de control y comienzo de la caminata suave a lo largo del río Urubamba.' },
            { time: '01:00 PM', description: 'Almuerzo cerca del sitio arqueológico de Llactapata.' },
            { time: '04:30 PM', description: 'Llegada al primer campamento en Wayllabamba (3,000m). Cena y descanso.' }
          ]
        },
        {
          day: 2,
          title: 'Wayllabamba – Paso de la Mujer Muerta – Pacaymayo',
          activities: [
            { time: '05:30 AM', description: 'Despertar temprano con mate de coca y un desayuno abundante.' },
            { time: '07:00 AM', description: 'Inicio del ascenso más desafiante hacia el paso más alto.' },
            { time: '11:30 AM', description: 'Conquista de Warmiwañusca (Paso de la Mujer Muerta) a 4,215m.' },
            { time: '02:00 PM', description: 'Descenso empinado hacia el valle de Pacaymayo para almorzar y armar campamento.' }
          ]
        },
        {
          day: 3,
          title: 'Pacaymayo – Wiñay Wayna',
          activities: [
            { time: '06:00 AM', description: 'Desayuno e inicio del ascenso al segundo paso, Runkurakay (3,950m).' },
            { time: '10:00 AM', description: 'Exploración de las ruinas de Sayacmarca y entrada al hermoso bosque nuboso.' },
            { time: '01:00 PM', description: 'Cruce del tercer paso (Phuyupatamarca) y vistas espectaculares antes del almuerzo.' },
            { time: '04:30 PM', description: 'Descenso por los impresionantes escalones de piedra Inca hasta el campamento final en Wiñay Wayna.' }
          ]
        },
        {
          day: 4,
          title: 'Wiñay Wayna – Puerta del Sol – Machu Picchu',
          activities: [
            { time: '03:30 AM', description: 'Despertar muy temprano para ser los primeros en el punto de control.' },
            { time: '05:30 AM', description: 'Caminata final en la oscuridad hacia el Inti Punku.' },
            { time: '07:00 AM', description: 'Llegada a la Puerta del Sol para presenciar el amanecer sobre Machu Picchu.' },
            { time: '08:30 AM', description: 'Descenso a la ciudadela para una visita guiada completa de 2 horas.' },
            { time: '01:00 PM', description: 'Tomar el bus a Aguas Calientes y abordar el tren de regreso a Cusco.' }
          ]
        }
      ],
      includes: [
        'Reunión informativa previa en Cusco',
        'Transporte al KM 82 y tren/bus de regreso a Cusco',
        'Permisos del Camino Inca y boletos de Machu Picchu',
        'Guías profesionales bilingües',
        'Porteadores para llevar carpas, comida y 7kg de artículos personales',
        'Equipo de campamento completo',
        'Comidas (3 desayunos, 3 almuerzos, 3 cenas)',
        'Boleto de bus de bajada desde Machu Picchu a Aguas Calientes'
      ],
      excludes: [
        'Bolsas de dormir (se pueden alquilar)',
        'Primer desayuno y último almuerzo',
        'Boletos para la montaña Huayna Picchu',
        'Propinas para el equipo de trekking'
      ],
      packing: [
        'Pasaporte original',
        'Bolsa de dormir (clasificada para -5°C)',
        'Botas de montaña usadas/amoldadas',
        'Bastones de trekking (se requieren puntas de goma)',
        'Capas de ropa para temperaturas extremas',
        'Linterna frontal, protector solar y repelente'
      ],
      tips: [
        'Los permisos están estrictamente limitados a 500 personas por día y se agotan con 5-6 meses de anticipación.',
        'Febrero está cerrado por mantenimiento.'
      ]
    }
  },
  {
    id: 28,
    slug: 'salkantay-trek-4-days',
    image: '/tour-salkantay-4d.png',
    destination: 'Andes Trekking',
    duration: '4 Days / 3 Nights',
    price: '420',
    en: {
      title: 'Salkantay Trek to Machu Picchu 4D/3N',
      description: 'An express version of the famous Salkantay Trek, perfectly balancing the challenge of the high Andes with the beauty of the cloud forest.',
      overview: '<p class="mb-4 mt-0">The 4-Day Salkantay Trek is a slightly faster, more intensive version of the classic 5-day route. It is ideal for physically fit travelers who want to experience the breathtaking beauty of the Salkantay mountain but have one less day to spare.</p><p class="mb-8 mt-0">You will experience the exact same dramatic landscapes: the turquoise Humantay Lake, the imposing 4,600m Salkantay Pass, and the lush, tropical cloud forest. The main difference is that days 2 and 3 of the standard trek are combined into one longer hiking day, skipping the Llactapata ruins to head straight to Aguas Calientes on the third day.</p>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – Soraypampa – Humantay Lake',
          activities: [
            { time: '04:30 AM', description: 'Early pick-up from Cusco and drive to the trailhead at Challacancha.' },
            { time: '09:00 AM', description: 'Begin the hike along the old Inca water channel to Soraypampa.' },
            { time: '12:00 PM', description: 'Lunch at the base camp followed by a steep hike up to Humantay Lake.' },
            { time: '05:00 PM', description: 'Return to Soraypampa base camp for dinner and overnight.' }
          ]
        },
        {
          day: 2,
          title: 'Soraypampa – Salkantay Pass – Chaullay',
          activities: [
            { time: '05:30 AM', description: 'Early breakfast and start the challenging ascent to the Salkantay Pass.' },
            { time: '10:30 AM', description: 'Reach the highest point at 4,600m (15,091ft) near the glacier.' },
            { time: '01:00 PM', description: 'Descend to Wayracmachay for a hot lunch.' },
            { time: '05:00 PM', description: 'Arrive at the Chaullay campsite in the upper cloud forest.' }
          ]
        },
        {
          day: 3,
          title: 'Chaullay – La Playa – Aguas Calientes',
          activities: [
            { time: '06:00 AM', description: 'Hike through the Santa Teresa valley, enjoying waterfalls and coffee plantations.' },
            { time: '12:00 PM', description: 'Arrive at La Playa or Lucmabamba for lunch.' },
            { time: '01:30 PM', description: 'Take local transport to the Hydroelectric station (to save time).' },
            { time: '03:00 PM', description: 'Walk along the train tracks to Aguas Calientes.' },
            { time: '06:00 PM', description: 'Check into your hotel and enjoy a final group dinner.' }
          ]
        },
        {
          day: 4,
          title: 'Machu Picchu Tour – Return to Cusco',
          activities: [
            { time: '04:30 AM', description: 'Early wake up and bus ride to Machu Picchu.' },
            { time: '06:00 AM', description: 'Guided tour of the Machu Picchu citadel.' },
            { time: '09:00 AM', description: 'Free time to explore or hike extra mountains.' },
            { time: '01:30 PM', description: 'Return by train to Ollantaytambo, then bus to Cusco.' }
          ]
        }
      ],
      includes: [
        'Pre-trek briefing',
        'Transportation to trailhead and return to Cusco',
        'Professional guide',
        'Machu Picchu entrance ticket',
        'Camping equipment, chef, and mules for carrying gear/food',
        'Meals (3 breakfasts, 3 lunches, 3 dinners)',
        '1 night hotel in Aguas Calientes'
      ],
      excludes: [
        'Sleeping bag and walking sticks',
        'Humantay Lake entrance fee',
        'First breakfast and last lunch',
        'Huayna Picchu tickets'
      ],
      packing: [
        'Passport',
        'Sleeping bag',
        'Hiking boots',
        'Layers of clothing',
        'Rain gear',
        'Insect repellent'
      ],
      tips: [
        'This trek requires a good level of fitness as day 2 involves a lot of downhill walking after a tough ascent.',
        'Drink coca tea to help with the altitude.'
      ]
    },
    es: {
      title: 'Trek Salkantay a Machu Picchu 4D/3N',
      description: 'Una versión express del famoso Trek Salkantay, equilibrando perfectamente el desafío de los altos Andes con la belleza del bosque nuboso.',
      overview: '<p class="mb-4 mt-0">El Trek Salkantay de 4 días es una versión un poco más rápida e intensiva de la ruta clásica de 5 días. Es ideal para viajeros en buena forma física que desean experimentar la impresionante belleza de la montaña Salkantay pero tienen un día menos de tiempo.</p><p class="mb-8 mt-0">Experimentarás exactamente los mismos paisajes dramáticos: la turquesa Laguna Humantay, el imponente Paso Salkantay de 4,600m y el exuberante bosque nuboso tropical. La principal diferencia es que los días 2 y 3 de la caminata estándar se combinan en un día de caminata más largo, omitiendo las ruinas de Llactapata para dirigirse directamente a Aguas Calientes al tercer día.</p>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – Soraypampa – Laguna Humantay',
          activities: [
            { time: '04:30 AM', description: 'Recojo temprano de Cusco y viaje al inicio del sendero en Challacancha.' },
            { time: '09:00 AM', description: 'Inicio de la caminata por el antiguo canal de agua inca hasta Soraypampa.' },
            { time: '12:00 PM', description: 'Almuerzo en el campamento base seguido de una empinada caminata a la Laguna Humantay.' },
            { time: '05:00 PM', description: 'Regreso al campamento de Soraypampa para cenar y pasar la noche.' }
          ]
        },
        {
          day: 2,
          title: 'Soraypampa – Paso Salkantay – Chaullay',
          activities: [
            { time: '05:30 AM', description: 'Desayuno temprano e inicio del desafiante ascenso al Paso Salkantay.' },
            { time: '10:30 AM', description: 'Llegada al punto más alto a 4,600m cerca del glaciar.' },
            { time: '01:00 PM', description: 'Descenso a Wayracmachay para un almuerzo caliente.' },
            { time: '05:00 PM', description: 'Llegada al campamento de Chaullay en la ceja de selva.' }
          ]
        },
        {
          day: 3,
          title: 'Chaullay – La Playa – Aguas Calientes',
          activities: [
            { time: '06:00 AM', description: 'Caminata por el valle de Santa Teresa, disfrutando de cascadas y plantaciones de café.' },
            { time: '12:00 PM', description: 'Llegada a La Playa o Lucmabamba para almorzar.' },
            { time: '01:30 PM', description: 'Tomar transporte local a la Hidroeléctrica (para ahorrar tiempo).' },
            { time: '03:00 PM', description: 'Caminata por las vías del tren hasta Aguas Calientes.' },
            { time: '06:00 PM', description: 'Check-in en su hotel y cena grupal de despedida.' }
          ]
        },
        {
          day: 4,
          title: 'Tour Machu Picchu – Retorno a Cusco',
          activities: [
            { time: '04:30 AM', description: 'Despertar temprano y viaje en bus a Machu Picchu.' },
            { time: '06:00 AM', description: 'Visita guiada de la ciudadela de Machu Picchu.' },
            { time: '09:00 AM', description: 'Tiempo libre para explorar o subir montañas extra.' },
            { time: '01:30 PM', description: 'Retorno en tren a Ollantaytambo, luego bus a Cusco.' }
          ]
        }
      ],
      includes: [
        'Reunión informativa previa',
        'Transporte al inicio del sendero y retorno a Cusco',
        'Guía profesional',
        'Boleto de entrada a Machu Picchu',
        'Equipo de campamento, chef y mulas de carga',
        'Comidas (3 desayunos, 3 almuerzos, 3 cenas)',
        '1 noche de hotel en Aguas Calientes'
      ],
      excludes: [
        'Bolsa de dormir y bastones',
        'Entrada a la Laguna Humantay',
        'Primer desayuno y último almuerzo',
        'Boletos para Huayna Picchu'
      ],
      packing: [
        'Pasaporte',
        'Bolsa de dormir',
        'Botas de montaña',
        'Ropa en capas',
        'Ropa impermeable',
        'Repelente de insectos'
      ],
      tips: [
        'Este trek requiere un buen nivel de condición física ya que el día 2 implica mucha bajada después del fuerte ascenso.',
        'Toma mate de coca para ayudar con la altura.'
      ]
    }
  },
  {
    id: 29,
    slug: 'choquequirao-trek-4-days',
    image: '/tour-choquequirao.png',
    destination: 'Andes Trekking',
    duration: '4 Days / 3 Nights',
    price: '480',
    en: {
      title: 'Choquequirao Trek 4D/3N',
      description: 'Journey to the "Sacred Sister of Machu Picchu", an incredible, remote Inca city hidden deep in the Apurimac canyon.',
      overview: '<p class="mb-4 mt-0">The Choquequirao Trek is one of Peru\'s most challenging and rewarding hikes. Often called the "Sacred Sister of Machu Picchu," Choquequirao is a massive Inca archaeological site perched high on a ridge overlooking the deepest canyon in the Americas, the Apurimac Canyon. Unlike Machu Picchu, Choquequirao receives only a fraction of the visitors, offering an incredibly authentic and peaceful experience.</p><p class="mb-8 mt-0">This 4-day trek involves steep descents into the sweltering canyon and equally steep, grueling ascents up to the ruins. However, the physical effort is rewarded by the chance to camp right next to the ruins, explore uncrowded terraces decorated with white stone llamas, and witness breathtaking sunsets over the Andes.</p>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – Capuliyoc – Chiquiska – Playa Rosalina',
          activities: [
            { time: '04:30 AM', description: 'Pick up from Cusco and a 4-hour drive to the Capuliyoc viewpoint (2,900m).' },
            { time: '09:00 AM', description: 'Meet the muleteers and begin the steep descent into the Apurimac Canyon.' },
            { time: '01:00 PM', description: 'Stop at Chiquiska for lunch in the warm canyon climate.' },
            { time: '04:00 PM', description: 'Arrive at Playa Rosalina (1,550m) at the bottom of the canyon. Set up camp and rest.' }
          ]
        },
        {
          day: 2,
          title: 'Playa Rosalina – Marampata – Choquequirao',
          activities: [
            { time: '05:00 AM', description: 'Early start to cross the Apurimac River and begin the tough, steep zigzag ascent.' },
            { time: '11:00 AM', description: 'Reach Marampata (2,850m) for an early lunch and a well-deserved rest.' },
            { time: '02:00 PM', description: 'Continue a gentler hike towards the Choquequirao campsite (2,950m).' },
            { time: '04:00 PM', description: 'Visit the lower terraces of Choquequirao to watch the sunset.' }
          ]
        },
        {
          day: 3,
          title: 'Choquequirao Tour – Marampata – Chiquiska',
          activities: [
            { time: '06:00 AM', description: 'Spend the entire morning exploring the vast Choquequirao complex with your guide, including the main plaza and the famous llama terraces.' },
            { time: '11:30 AM', description: 'Return to camp for lunch and begin the hike back.' },
            { time: '03:00 PM', description: 'Descend back down into the canyon, crossing the river again.' },
            { time: '05:30 PM', description: 'Arrive at Chiquiska campsite for the night.' }
          ]
        },
        {
          day: 4,
          title: 'Chiquiska – Capuliyoc – Cusco',
          activities: [
            { time: '05:00 AM', description: 'Start hiking early to avoid the intense canyon sun during the final ascent.' },
            { time: '10:00 AM', description: 'Reach the Capuliyoc viewpoint, completing the trek.' },
            { time: '11:30 AM', description: 'Enjoy a final lunch with the trekking crew.' },
            { time: '04:30 PM', description: 'Arrive back at your hotel in Cusco.' }
          ]
        }
      ],
      includes: [
        'Pre-trek briefing',
        'Private transportation to/from the trailhead',
        'Professional bilingual guide',
        'Choquequirao entrance fee',
        'Camping equipment, chef, and mules for carrying gear/food',
        'Meals (3 breakfasts, 4 lunches, 3 dinners)'
      ],
      excludes: [
        'Sleeping bag and trekking poles',
        'First breakfast and last dinner',
        'Tips for the guide, cook, and muleteers'
      ],
      packing: [
        'Passport',
        'Sleeping bag',
        'Trekking poles (highly recommended for the steep descents)',
        'Strong insect repellent (the canyon has many midges)',
        'Sun protection and wide-brimmed hat'
      ],
      tips: [
        'This is considered tougher than the Inca Trail due to the steep, hot canyon walls. Train well before coming.',
        'Protect yourself from the sun and bugs in the canyon.'
      ]
    },
    es: {
      title: 'Choquequirao Trek 4D/3N',
      description: 'Viaje a la "Hermana Sagrada de Machu Picchu", una increíble y remota ciudad Inca escondida en lo profundo del cañón del Apurímac.',
      overview: '<p class="mb-4 mt-0">El Trek a Choquequirao es una de las caminatas más desafiantes y gratificantes del Perú. A menudo llamada la "Hermana Sagrada de Machu Picchu", Choquequirao es un enorme sitio arqueológico Inca encaramado en lo alto de una cresta con vistas al cañón más profundo de las Américas, el Cañón del Apurímac. A diferencia de Machu Picchu, Choquequirao recibe solo una fracción de los visitantes, ofreciendo una experiencia increíblemente auténtica y pacífica.</p><p class="mb-8 mt-0">Esta caminata de 4 días implica descensos empinados hacia el sofocante cañón y ascensos igualmente empinados y agotadores hasta las ruinas. Sin embargo, el esfuerzo físico es recompensado por la oportunidad de acampar justo al lado de las ruinas, explorar terrazas sin multitudes decoradas con llamas de piedra blanca, y presenciar atardeceres impresionantes sobre los Andes.</p>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – Capuliyoc – Chiquiska – Playa Rosalina',
          activities: [
            { time: '04:30 AM', description: 'Recojo de Cusco y viaje de 4 horas al mirador de Capuliyoc (2,900m).' },
            { time: '09:00 AM', description: 'Encuentro con los arrieros e inicio del descenso empinado al Cañón del Apurímac.' },
            { time: '01:00 PM', description: 'Parada en Chiquiska para almorzar en el cálido clima del cañón.' },
            { time: '04:00 PM', description: 'Llegada a Playa Rosalina (1,550m) en el fondo del cañón. Armar campamento y descansar.' }
          ]
        },
        {
          day: 2,
          title: 'Playa Rosalina – Marampata – Choquequirao',
          activities: [
            { time: '05:00 AM', description: 'Inicio temprano para cruzar el río Apurímac y comenzar el duro ascenso en zigzag.' },
            { time: '11:00 AM', description: 'Llegada a Marampata (2,850m) para un almuerzo temprano y descanso.' },
            { time: '02:00 PM', description: 'Caminata más suave hacia el campamento de Choquequirao (2,950m).' },
            { time: '04:00 PM', description: 'Visita a las terrazas bajas para ver el atardecer.' }
          ]
        },
        {
          day: 3,
          title: 'Tour Choquequirao – Marampata – Chiquiska',
          activities: [
            { time: '06:00 AM', description: 'Exploración matutina de todo el complejo con su guía, incluyendo la plaza principal y las terrazas de llamas.' },
            { time: '11:30 AM', description: 'Retorno al campamento para almorzar y comenzar el retorno.' },
            { time: '03:00 PM', description: 'Descenso de regreso al cañón, cruzando el río nuevamente.' },
            { time: '05:30 PM', description: 'Llegada al campamento de Chiquiska para pasar la noche.' }
          ]
        },
        {
          day: 4,
          title: 'Chiquiska – Capuliyoc – Cusco',
          activities: [
            { time: '05:00 AM', description: 'Caminata temprana para evitar el intenso sol del cañón en el ascenso final.' },
            { time: '10:00 AM', description: 'Llegada al mirador de Capuliyoc, finalizando el trek.' },
            { time: '11:30 AM', description: 'Almuerzo de despedida con el equipo.' },
            { time: '04:30 PM', description: 'Llegada de regreso a su hotel en Cusco.' }
          ]
        }
      ],
      includes: [
        'Reunión informativa previa',
        'Transporte privado hacia/desde el inicio del sendero',
        'Guía profesional bilingüe',
        'Boleto de entrada a Choquequirao',
        'Equipo de campamento, chef y mulas de carga',
        'Comidas (3 desayunos, 4 almuerzos, 3 cenas)'
      ],
      excludes: [
        'Bolsa de dormir y bastones de trekking',
        'Primer desayuno y última cena',
        'Propinas'
      ],
      packing: [
        'Pasaporte',
        'Bolsa de dormir',
        'Bastones de trekking (muy recomendados para los descensos)',
        'Repelente fuerte (el cañón tiene muchos mosquitos/jejenes)',
        'Protección solar y sombrero de ala ancha'
      ],
      tips: [
        'Este trek se considera más duro que el Camino Inca debido al clima caluroso del cañón y la pendiente. Entrena bien.',
        'Protégete mucho del sol y los mosquitos.'
      ]
    }
  },
  {
    id: 30,
    slug: 'inca-jungle-4-days',
    image: '/tour-inca-jungle.png',
    destination: 'Andes Trekking',
    duration: '4 Days / 3 Nights',
    price: '350',
    en: {
      title: 'Inca Jungle Trek to Machu Picchu 4D/3N',
      description: 'The ultimate multi-sport adventure combining downhill mountain biking, rafting, zip-lining, and trekking to Machu Picchu.',
      overview: '<p class="mb-4 mt-0">The Inca Jungle Trek is not just a hike; it is an adrenaline-fueled, multi-sport adventure designed for thrill-seekers. It is the most action-packed alternative route to Machu Picchu, taking you from the freezing high Andes down into the steamy tropical jungle.</p><p class="mb-8 mt-0">Your journey starts with a massive 3-hour downhill mountain bike ride from the Malaga Pass (4,316m) down into the cloud forest. Over the next days, you will have the opportunity to go white-water rafting on the Urubamba River, hike along original Inca trails through coffee and fruit plantations, relax in the Cocalmayo hot springs, and fly across the valleys on some of South America\'s highest zip-lines, before finally reaching Machu Picchu.</p>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – Abra Malaga (Biking) – Santa Maria (Rafting)',
          activities: [
            { time: '06:00 AM', description: 'Pick up from Cusco and drive through the Sacred Valley to Abra Malaga (4,316m).' },
            { time: '10:00 AM', description: 'Equip with full safety gear and begin a thrilling 3-hour downhill mountain bike ride.' },
            { time: '01:30 PM', description: 'Arrive in Huamanmarca and take the van to Santa Maria for lunch.' },
            { time: '03:00 PM', description: 'Optional white-water rafting (Class III/IV) on the Urubamba River.' },
            { time: '06:00 PM', description: 'Dinner and overnight in a basic local lodge in Santa Maria.' }
          ]
        },
        {
          day: 2,
          title: 'Santa Maria – Santa Teresa (Trekking & Hot Springs)',
          activities: [
            { time: '06:30 AM', description: 'Breakfast and start hiking through the high jungle.' },
            { time: '09:00 AM', description: 'Hike along an original, well-preserved section of the Inca Trail.' },
            { time: '12:30 PM', description: 'Stop at the village of Quellomayo for lunch and a hammock rest.' },
            { time: '03:30 PM', description: 'Arrive at the spectacular Cocalmayo hot springs to relax your muscles.' },
            { time: '06:00 PM', description: 'Short drive to Santa Teresa for dinner and overnight.' }
          ]
        },
        {
          day: 3,
          title: 'Santa Teresa (Ziplining) – Aguas Calientes',
          activities: [
            { time: '07:00 AM', description: 'Breakfast. Optional morning zip-lining adventure.' },
            { time: '10:00 AM', description: 'Drive or walk to the Hydroelectric station.' },
            { time: '12:00 PM', description: 'Lunch at the Hydroelectric station.' },
            { time: '02:00 PM', description: 'Enjoy a flat, scenic 3-hour walk along the train tracks to Aguas Calientes.' },
            { time: '05:30 PM', description: 'Check into your hotel. Final group dinner at a local restaurant.' }
          ]
        },
        {
          day: 4,
          title: 'Machu Picchu – Return to Cusco',
          activities: [
            { time: '04:30 AM', description: 'Early wake up and breakfast.' },
            { time: '05:30 AM', description: 'Take the bus up or hike the stairs to the Machu Picchu entrance.' },
            { time: '06:30 AM', description: 'Enter the citadel for a 2-hour guided tour.' },
            { time: '09:00 AM', description: 'Free time to explore.' },
            { time: '01:30 PM', description: 'Return by train to Ollantaytambo, then transfer by bus to Cusco.' }
          ]
        }
      ],
      includes: [
        'Pre-departure briefing',
        'Transportation and full suspension mountain bikes with safety gear',
        'Professional bilingual guide',
        'Machu Picchu entrance ticket',
        'Meals (3 breakfasts, 3 lunches, 3 dinners)',
        '2 nights in basic eco-lodges, 1 night in a hotel in Aguas Calientes',
        'Return train to Ollantaytambo and bus to Cusco'
      ],
      excludes: [
        'Rafting and Zip-lining activities (can be added as extras)',
        'Cocalmayo hot springs entrance fee',
        'Bus tickets up/down to Machu Picchu (you can walk up)',
        'First breakfast and last lunch'
      ],
      packing: [
        'Passport',
        'Light hiking clothes (it gets very hot in the jungle)',
        'Swimsuit for hot springs and rafting',
        'Insect repellent (essential)',
        'Sunscreen and sunglasses'
      ],
      tips: [
        'This is the warmest of all the treks to Machu Picchu, pack lots of light clothing and insect repellent.',
        'You can opt-out of the biking and ride in the support van if you feel tired or unsafe.'
      ]
    },
    es: {
      title: 'Inca Jungle Trek a Machu Picchu 4D/3N',
      description: 'La máxima aventura multideporte que combina ciclismo de montaña, rafting, tirolesa y trekking hacia Machu Picchu.',
      overview: '<p class="mb-4 mt-0">El Inca Jungle Trek no es solo una caminata; es una aventura multideportiva llena de adrenalina diseñada para los amantes de las emociones fuertes. Es la ruta alternativa más llena de acción a Machu Picchu, llevándote desde los gélidos altos Andes hasta la humeante selva tropical.</p><p class="mb-8 mt-0">Tu viaje comienza con un masivo descenso en bicicleta de montaña de 3 horas desde el Abra Málaga (4,316m) hacia el bosque nuboso. En los días siguientes, tendrás la oportunidad de hacer canotaje en el río Urubamba, caminar por senderos incas originales entre plantaciones de café, relajarte en las aguas termales de Cocalmayo y volar sobre los valles en algunas de las tirolesas más altas de Sudamérica, antes de llegar finalmente a Machu Picchu.</p>',
      itinerary: [
        {
          day: 1,
          title: 'Cusco – Abra Málaga (Ciclismo) – Santa María (Rafting)',
          activities: [
            { time: '06:00 AM', description: 'Recojo en Cusco y viaje por el Valle Sagrado hasta el Abra Málaga (4,316m).' },
            { time: '10:00 AM', description: 'Equipamiento completo de seguridad e inicio de un emocionante descenso en bicicleta de 3 horas.' },
            { time: '01:30 PM', description: 'Llegada a Huamanmarca y viaje en van a Santa María para almorzar.' },
            { time: '03:00 PM', description: 'Canotaje opcional (Clase III/IV) en el río Urubamba.' },
            { time: '06:00 PM', description: 'Cena y noche en un albergue local básico en Santa María.' }
          ]
        },
        {
          day: 2,
          title: 'Santa María – Santa Teresa (Trekking y Aguas Termales)',
          activities: [
            { time: '06:30 AM', description: 'Desayuno e inicio de la caminata por la ceja de selva.' },
            { time: '09:00 AM', description: 'Caminata por un tramo original y bien conservado del Camino Inca.' },
            { time: '12:30 PM', description: 'Parada en el pueblo de Quellomayo para almorzar y descansar en hamacas.' },
            { time: '03:30 PM', description: 'Llegada a las espectaculares aguas termales de Cocalmayo para relajar los músculos.' },
            { time: '06:00 PM', description: 'Viaje corto a Santa Teresa para cenar y dormir.' }
          ]
        },
        {
          day: 3,
          title: 'Santa Teresa (Tirolesa) – Aguas Calientes',
          activities: [
            { time: '07:00 AM', description: 'Desayuno. Aventura opcional de tirolesa (zipline) por la mañana.' },
            { time: '10:00 AM', description: 'Viaje o caminata hacia la estación Hidroeléctrica.' },
            { time: '12:00 PM', description: 'Almuerzo en la estación Hidroeléctrica.' },
            { time: '02:00 PM', description: 'Caminata plana y escénica de 3 horas por las vías del tren hasta Aguas Calientes.' },
            { time: '05:30 PM', description: 'Check-in en su hotel. Cena grupal de despedida.' }
          ]
        },
        {
          day: 4,
          title: 'Machu Picchu – Retorno a Cusco',
          activities: [
            { time: '04:30 AM', description: 'Despertar temprano y desayuno.' },
            { time: '05:30 AM', description: 'Tomar el bus o subir caminando hasta la entrada de Machu Picchu.' },
            { time: '06:30 AM', description: 'Ingreso a la ciudadela para un tour guiado de 2 horas.' },
            { time: '09:00 AM', description: 'Tiempo libre para explorar.' },
            { time: '01:30 PM', description: 'Retorno en tren a Ollantaytambo, luego traslado en bus a Cusco.' }
          ]
        }
      ],
      includes: [
        'Reunión informativa previa',
        'Transporte y bicicletas de montaña con equipo de seguridad',
        'Guía profesional bilingüe',
        'Boleto de entrada a Machu Picchu',
        'Comidas (3 desayunos, 3 almuerzos, 3 cenas)',
        '2 noches en eco-lodges básicos, 1 noche en hotel en Aguas Calientes',
        'Tren de retorno a Ollantaytambo y bus a Cusco'
      ],
      excludes: [
        'Actividades de Rafting y Zipline (se pueden agregar como extras)',
        'Entrada a las aguas termales de Cocalmayo',
        'Boletos de bus de subida/bajada a Machu Picchu (puedes subir caminando)',
        'Primer desayuno y último almuerzo'
      ],
      packing: [
        'Pasaporte',
        'Ropa ligera de trekking (hace mucho calor en la selva)',
        'Traje de baño para las aguas termales y rafting',
        'Repelente de insectos (muy importante)',
        'Protector solar y lentes de sol'
      ],
      tips: [
        'Este es el trek más cálido hacia Machu Picchu, empaca mucha ropa ligera y repelente.',
        'Puedes optar por no hacer ciclismo e ir en la van de apoyo si te sientes cansado o inseguro.'
      ]
    }
  },
  {
    id: 31,
    slug: 'cuatrimotos-morada-dioses',
    image: '/images/destinations/cusco.webp',
    destination: 'Cusco',
    duration: '4 Hours',
    price: '35',
    latitude: -13.4862,
    longitude: -71.9961,
    altitude: '3,800m',
    difficulty: 'Easy',
    type: 'Group Tour',
    departure: '08:00 AM, 11:00 AM, 1:00 PM',
    en: {
      title: 'ATV Tour Abode of the Gods (Morada de los Dioses)',
      description: 'Explore the impressive rock sculptures of the Abode of the Gods on an exciting ATV tour.',
      overview: '<p class="mb-4 mt-0">Join us for an exciting adventure starting from the Plaza de Armas in Cusco. We will head to our base in Tica Tica (Sencca sector). After a safety briefing and a 10-minute practice ride, we will start a 50-minute ATV journey along adventure trails and viewpoints until we reach the Abode of the Gods (Apukunaq Tianan).</p><p class="mb-8 mt-0">Here, you can appreciate the impressive sculptures carved in rock, enjoy the natural landscape, and take beautiful photographs. Finally, we will return to the base and take the transport back to the city.</p>',
      itinerary: [
        { time: '08:00 AM / 11:00 AM / 01:00 PM', activity: 'Meet at Plaza de Armas and transport to Tica Tica base' },
        { time: '+ 25 mins', activity: 'Safety briefing and 10-minute ATV practice' },
        { time: '+ 1 hour', activity: '50-minute ATV ride to the Abode of the Gods' },
        { time: '+ 2 hours', activity: 'Explore the rock sculptures and take photos' },
        { time: '+ 4 hours', activity: 'Return to base and transport back to Cusco' }
      ],
      includes: [
        'Pickup at Plaza de Armas',
        'Tourist transport',
        'Professional guide',
        'First aid kit',
        'Semi-automatic ATVs'
      ],
      excludes: [
        'Entrance fee to the Abode of the Gods',
        'Insurance',
        'Food and meals'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Warm clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos',
        'Rain poncho (during the rainy season)'
      ],
      tips: [
        'Make sure to bring some cash for the entrance fee to the Abode of the Gods.'
      ]
    },
    es: {
      title: 'Cuatrimotos Morada de Dioses',
      description: 'Explora las impresionantes esculturas de la Morada de los Dioses en un emocionante recorrido en cuatrimoto.',
      overview: '<p class="mb-4 mt-0">Nos reunimos en la Plaza de Armas de Cusco para iniciar la aventura y nos dirigimos en transporte hacia nuestra base ubicada en Tica Tica - sector Sencca (aprox. 25 minutos). Al llegar realizaremos un briefing de seguridad de 5 minutos y una práctica de manejo de 10 minutos con las cuatrimotos.</p><p class="mb-8 mt-0">Luego iniciaremos el recorrido en cuatrimoto durante aproximadamente 50 minutos por caminos de aventura y miradores hasta llegar a la Morada de los Dioses, donde podremos apreciar las impresionantes esculturas talladas en roca, disfrutar del paisaje natural y tomar fotografías. Finalmente retornamos a la base para tomar el transporte de regreso a la ciudad.</p>',
      itinerary: [
        { time: '08:00 a.m. / 11:00 a.m. / 13:00 p.m.', activity: 'Recojo en Plaza de Armas y traslado a la base en Tica Tica' },
        { time: '+ 25 mins', activity: 'Briefing de seguridad y práctica de 10 minutos' },
        { time: '+ 1 hora', activity: 'Recorrido en cuatrimoto por 50 minutos hacia la Morada de los Dioses' },
        { time: '+ 2 hours', activity: 'Visita a las esculturas talladas en roca y toma de fotografías' },
        { time: '+ 4 hours', activity: 'Retorno a la base y transporte de regreso a la ciudad' }
      ],
      includes: [
        'Recojo en Plaza de armas',
        'Transporte turístico',
        'Guía profesional',
        'Botiquín de primeros auxilios',
        'Cuatrimotos semi automáticas'
      ],
      excludes: [
        'Ingreso a la morada',
        'Seguro',
        'Alimentos'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa abrigadora y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos',
        'Poncho de agua (temporada de lluvias)'
      ],
      tips: [
        'No olvides llevar efectivo para el pago del ingreso a la Morada de los Dioses.'
      ]
    }
  },
  {
    id: 32,
    slug: 'cuatrimotos-maras-moray',
    image: '/images/destinations/sacred-valley.webp',
    destination: 'Sacred Valley',
    duration: 'Half Day (6 Hours)',
    price: '40',
    latitude: -13.3298,
    longitude: -72.1965,
    altitude: '3,385m',
    difficulty: 'Easy',
    type: 'Group Tour',
    departure: '07:00 AM, 01:00 PM',
    en: {
      title: 'ATV Tour Maras & Moray',
      description: 'Experience the thrill of riding an ATV through the Sacred Valley, visiting the circular terraces of Moray and the Maras salt mines.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup at the Plaza de Armas in Cusco. We will drive for about 50 minutes to our ATV base in the Sacred Valley area. Upon arrival, the guide will provide a brief instruction on handling the ATVs and a practice session before starting the adventure.</p><p class="mb-8 mt-0">Then we will begin the ATV tour passing through Andean landscapes and local communities, visiting the circular terraces of Moray. Afterwards, we will continue to the viewpoint of the Maras Salt Mines (panoramic view). There is also the option to take the route to Piuray Lagoon, where you can enjoy beautiful natural landscapes. At the end of the tour, we return to the base to board the transport back to Cusco, arriving approximately between 1:00 PM and 2:00 PM (morning shift) or 5:00 PM and 6:00 PM (afternoon shift).</p>',
      itinerary: [
        { time: '07:00 AM / 01:00 PM', activity: 'Pickup at Plaza de Armas and transport to Sacred Valley base' },
        { time: '+ 50 mins', activity: 'ATV handling instruction and practice session' },
        { time: '+ 1.5 hours', activity: 'ATV ride through Andean landscapes visiting Moray' },
        { time: '+ 3 hours', activity: 'Continue to Maras Salt Mines viewpoint (or Piuray Lagoon)' },
        { time: '+ 5 hours', activity: 'Return to base and transport back to Cusco' }
      ],
      includes: [
        'Pickup at Plaza de Armas',
        'Tourist transport',
        'Professional guide',
        'First aid kit',
        'Semi-automatic ATVs'
      ],
      excludes: [
        'Entrance fee to Maras Salt Mines (direct payment on site)',
        'Entrance fee to Moray (tourist ticket)'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Warm clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos',
        'Rain poncho (during the rainy season)'
      ],
      tips: [
        'Make sure to bring cash in Soles to pay for the entrance tickets.'
      ]
    },
    es: {
      title: 'Cuatrimotos Maras - Moray',
      description: 'Experimenta la emoción de manejar una cuatrimoto por el Valle Sagrado, visitando los andenes de Moray y las Salineras de Maras.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo en la plaza de armas en Cusco para dirigirnos durante aproximadamente 50 minutos hacia nuestra base de cuatrimotos en la zona del Valle Sagrado. Al llegar, el guía brindará una breve instrucción sobre el manejo de las cuatrimotos y una práctica antes de iniciar la aventura.</p><p class="mb-8 mt-0">Luego comenzaremos el recorrido en cuatrimoto atravesando paisajes andinos y comunidades locales, visitando los andenes circulares de Moray, posteriormente continuaremos hacia el mirador de las Salineras de Maras (vista panorámica). También existe la opción de realizar la ruta hacia la Laguna Piuray, donde se puede disfrutar de hermosos paisajes naturales. Al finalizar el recorrido retornamos a la base para luego abordar el transporte de regreso a Cusco, llegando aproximadamente entre 13:00 y 14:00 hrs o 17:00 y 18:00 hrs según el turno elegido.</p>',
      itinerary: [
        { time: '07:00 a.m. / 01:00 p.m.', activity: 'Recojo en Plaza de armas y traslado a la base en el Valle Sagrado' },
        { time: '+ 50 mins', activity: 'Instrucción sobre el manejo de las cuatrimotos y práctica' },
        { time: '+ 1.5 horas', activity: 'Recorrido en cuatrimoto visitando los andenes de Moray' },
        { time: '+ 3 horas', activity: 'Continuación hacia el mirador de las Salineras de Maras (o Laguna Piuray)' },
        { time: '+ 5 horas', activity: 'Retorno a la base y abordaje del transporte de regreso a Cusco' }
      ],
      includes: [
        'Recojo en Plaza de armas',
        'Transporte turístico',
        'Guía profesional',
        'Botiquín de primeros auxilios',
        'Cuatrimotos semi automáticas'
      ],
      excludes: [
        'Ingreso a salineras (pago directo en el lugar)',
        'Ingreso a Moray (boleto turístico)'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa abrigadora y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos',
        'Poncho de agua (temporada de lluvias)'
      ],
      tips: [
        'Asegúrate de llevar efectivo en soles para el pago de los ingresos.'
      ]
    }
  },
  {
    id: 33,
    slug: 'laguna-humantay-group',
    image: '/images/destinations/cusco.webp',
    destination: 'Cusco',
    duration: 'Full Day (12.5 Hours)',
    price: '40',
    latitude: -13.3333,
    longitude: -72.5667,
    altitude: '4,200m',
    difficulty: 'Moderate',
    type: 'Group Tour',
    departure: '04:30 AM',
    en: {
      title: 'Humantay Lake Group Tour',
      description: 'Hike to the stunning turquoise waters of Humantay Lake at the base of the Salkantay glacier.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup from your accommodation to head towards the town of Mollepata, where we will enjoy an Andean breakfast. Then we continue the journey to Soraypampa, the starting point of the hike to Humantay Lake.</p><p class="mb-4 mt-0">The hike takes approximately 1 hour and 30 minutes to 2 hours, during which we can appreciate impressive mountain landscapes and the Salkantay snow-capped mountain. Upon arriving at the lake, we will have time for photographs and an explanation from the guide about the natural and spiritual importance of the place.</p><p class="mb-8 mt-0">Afterwards, we return to Soraypampa to take the transport back to Mollepata, where we will enjoy a buffet lunch. Finally, we return to Cusco.</p>',
      itinerary: [
        { time: '04:30 AM', activity: 'Pickup from your accommodation and transport to Mollepata' },
        { time: '+ 2 hours', activity: 'Arrive in Mollepata for an Andean breakfast' },
        { time: '+ 3 hours', activity: 'Continue to Soraypampa and start the hike' },
        { time: '+ 5 hours', activity: 'Arrive at Humantay Lake (free time and guide explanation)' },
        { time: '+ 7 hours', activity: 'Hike back to Soraypampa' },
        { time: '+ 8 hours', activity: 'Transport to Mollepata for a buffet lunch' },
        { time: '05:00 PM', activity: 'Arrive back in Cusco' }
      ],
      includes: [
        'Pickup from accommodation',
        'Tourist transport',
        'Breakfast',
        'Buffet lunch',
        'Professional guide',
        'First aid kit'
      ],
      excludes: [
        'Community entrance fee (direct payment on site)',
        'Optional horse rental'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Warm clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos',
        'Rain poncho (during the rainy season)'
      ],
      tips: [
        'Bring cash in Soles for the entrance fee and optional horse rental if needed.'
      ]
    },
    es: {
      title: 'Laguna Humantay',
      description: 'Camina hacia las impresionantes aguas turquesas de la Laguna Humantay al pie del nevado Salkantay.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo desde su hospedaje para dirigirnos hacia el poblado de Mollepata, donde disfrutaremos de un desayuno andino. Luego continuamos el viaje hasta Soraypampa, punto de inicio de la caminata hacia la Laguna Humantay.</p><p class="mb-4 mt-0">La caminata dura aproximadamente 1 hora y 30 minutos a 2 horas, durante la cual podremos apreciar impresionantes paisajes de montañas y el nevado Salkantay. Al llegar a la laguna tendremos tiempo para fotografías y explicación del guía sobre la importancia natural y espiritual del lugar.</p><p class="mb-8 mt-0">Posteriormente retornamos a Soraypampa para tomar el transporte de regreso a Mollepata, donde disfrutaremos del almuerzo buffet. Finalmente retornamos a Cusco.</p>',
      itinerary: [
        { time: '04:30 a.m.', activity: 'Recojo desde su hospedaje y transporte hacia Mollepata' },
        { time: '+ 2 horas', activity: 'Llegada a Mollepata para disfrutar de un desayuno andino' },
        { time: '+ 3 horas', activity: 'Viaje hasta Soraypampa e inicio de la caminata' },
        { time: '+ 5 horas', activity: 'Llegada a la Laguna Humantay (fotografías y explicación del guía)' },
        { time: '+ 7 horas', activity: 'Caminata de retorno a Soraypampa' },
        { time: '+ 8 horas', activity: 'Transporte de regreso a Mollepata para el almuerzo buffet' },
        { time: '05:00 p.m.', activity: 'Llegada a Cusco' }
      ],
      includes: [
        'Recojo desde hospedaje',
        'Transporte turístico',
        'Desayuno',
        'Almuerzo buffet',
        'Guía profesional',
        'Botiquín de primeros auxilios'
      ],
      excludes: [
        'Ingreso a la comunidad (pago directo en el lugar)',
        'Caballo opcional'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa abrigadora y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos',
        'Poncho de agua (temporada de lluvias)'
      ],
      tips: [
        'Lleva dinero en efectivo (soles) para el pago del ingreso y si deseas rentar un caballo.'
      ]
    }
  },
  {
    id: 34,
    slug: 'city-tour-inca',
    image: '/images/destinations/cusco.webp',
    destination: 'Cusco',
    duration: 'Half Day (4-5 Hours)',
    price: '30',
    latitude: -13.5167,
    longitude: -71.9833,
    altitude: '3,400m',
    difficulty: 'Easy',
    type: 'Group Tour',
    departure: '09:50 AM, 01:50 PM',
    en: {
      title: 'Inca City Tour',
      description: 'Discover the Inca and colonial heritage of Cusco, combining temples, fortresses, and panoramic landscapes.',
      overview: '<p class="mb-4 mt-0">The Cusco City Tour is the best option to get to know the main historical and archaeological attractions surrounding the city.</p><p class="mb-8 mt-0">This half-day tour allows you to discover the Inca and colonial heritage of Cusco, combining temples, fortresses, and panoramic landscapes. You will visit the impressive fortress of Sacsayhuaman, explore the archaeological site of Q\'enqo, and visit Puka Pukara and Tambomachay. There is also an optional stop at Coricancha and the Cristo Blanco viewpoint.</p>',
      itinerary: [
        { time: '09:50 AM / 01:50 PM', activity: 'Start of the tour and visit to Coricancha (optional)' },
        { time: '+ 1 hour', activity: 'Visit to the impressive fortress of Sacsayhuaman' },
        { time: '+ 2 hours', activity: 'Explore the archaeological site of Q\'enqo' },
        { time: '+ 3 hours', activity: 'Visit Puka Pukara and Tambomachay' },
        { time: '+ 4 hours', activity: 'Stop at the Cristo Blanco viewpoint (optional) and return to Cusco' }
      ],
      includes: [
        'Professional bilingual tour guide',
        'Tourist transport',
        'Small group experience'
      ],
      excludes: [
        'Meals and drinks',
        'Entrance fees (Boleto Turístico)'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Comfortable clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos'
      ],
      tips: [
        'The Boleto Turístico (Tourist Ticket) is required for most sites on this tour. You can buy it at the first site.'
      ]
    },
    es: {
      title: 'City Tour Inca',
      description: 'Descubre la herencia inca y colonial del Cusco, combinando templos, fortalezas y paisajes panorámicos.',
      overview: '<p class="mb-4 mt-0">El City Tour Cusco es la mejor opción para conocer los principales atractivos históricos y arqueológicos que rodean la ciudad.</p><p class="mb-8 mt-0">Este recorrido de medio día permite descubrir la herencia inca y colonial del Cusco, combinando templos, fortalezas y paisajes panorámicos. Visitarás Sacsayhuamán, Q\'enqo, Puka Pukara y Tambomachay, con paradas opcionales en el Coricancha y el Mirador del Cristo Blanco.</p>',
      itinerary: [
        { time: '09:50 a.m. / 01:50 p.m.', activity: 'Inicio del tour y visita al Coricancha (opcional)' },
        { time: '+ 1 hora', activity: 'Visita a la impresionante fortaleza de Sacsayhuamán' },
        { time: '+ 2 horas', activity: 'Exploración del sitio arqueológico de Q\'enqo' },
        { time: '+ 3 horas', activity: 'Visita a Puka Pukara y Tambomachay' },
        { time: '+ 4 horas', activity: 'Parada en el Mirador del Cristo Blanco (opcional) y retorno a Cusco' }
      ],
      includes: [
        'Guía turístico profesional bilingüe',
        'Transporte turístico',
        'Experiencia en grupos reducidos'
      ],
      excludes: [
        'Comidas y bebida',
        'Entradas (Boleto Turístico)'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa cómoda y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos'
      ],
      tips: [
        'Es indispensable comprar el Boleto Turístico para ingresar a los centros arqueológicos.'
      ]
    }
  },
  {
    id: 35,
    slug: 'glaciar-quelccaya',
    image: '/images/destinations/andes-trekking.jpg',
    destination: 'Andes Trekking',
    duration: 'Full Day (17 Hours)',
    price: '80',
    latitude: -13.9333,
    longitude: -70.8333,
    altitude: '5,200m',
    difficulty: 'Moderate to Challenging',
    type: 'Group Tour',
    departure: '03:00 AM',
    en: {
      title: 'Quelccaya Glacier',
      description: 'Explore the impressive ice formations and caves of the Quelccaya Glacier, the largest tropical ice cap in the world.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup from your accommodation between 2:50 AM and 3:30 AM to travel to Phinaya (approx. 6 hours) crossing altiplano landscapes. On the way, we make a stop in Cusipata to enjoy breakfast.</p><p class="mb-4 mt-0">Then we continue by transport to the foothills of the glacier, where we will start a short walk of approximately 15 minutes to the Quelccaya Glacier (Suyuparina), where we will appreciate impressive ice formations, caves, and unique landscapes.</p><p class="mb-8 mt-0">Afterwards, we return to Phinaya for lunch and continue the journey back to Cusco, making a stop at the Sibinacocha Lagoon. Arrival in Cusco approximately between 7:00 PM and 8:00 PM.</p>',
      itinerary: [
        { time: '03:00 AM', activity: 'Pickup from your accommodation and travel towards Phinaya' },
        { time: '+ 2 hours', activity: 'Stop in Cusipata for breakfast' },
        { time: '+ 6 hours', activity: 'Arrive at the foothills of the glacier and start a short 15-minute hike' },
        { time: '+ 7 hours', activity: 'Explore the Quelccaya Glacier (ice formations, caves)' },
        { time: '+ 9 hours', activity: 'Return to Phinaya for lunch' },
        { time: '+ 11 hours', activity: 'Start the journey back with a stop at Sibinacocha Lagoon' },
        { time: '08:00 PM', activity: 'Arrive back in Cusco' }
      ],
      includes: [
        'Round trip transport',
        'Breakfast and lunch',
        'Professional guide',
        'Trekking poles',
        'First aid kit',
        'Oxygen tank'
      ],
      excludes: [
        'Entrance fee (S/ 10.00 - S/ 15.00)',
        'Extra expenses'
      ],
      packing: [
        'Warm clothing (thermal jacket, fleece)',
        'Gloves, hat, and scarf',
        'Trekking shoes (non-slip)',
        'Small backpack',
        'Sunglasses and sunscreen',
        'Water and snacks (chocolates, nuts)',
        'Cash (for entrance fees and extras)',
        'Rain poncho (depending on the season)'
      ],
      tips: [
        'The altitude is high, so make sure to acclimatize in Cusco for a few days before this tour.'
      ]
    },
    es: {
      title: 'Glaciar Quelccaya',
      description: 'Explora las impresionantes formaciones de hielo y cuevas del Glaciar Quelccaya, el glaciar tropical más grande del mundo.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo desde su hospedaje entre 02:50 a.m. y 03:30 a.m., para viajar hacia Phinaya (aprox. 6 horas) atravesando paisajes del altiplano. En ruta realizamos una parada en Cusipata para disfrutar del desayuno.</p><p class="mb-4 mt-0">Luego continuamos en transporte hasta las faldas del glaciar, donde iniciaremos una caminata corta de aproximadamente 15 minutos hasta el Glaciar Quelccaya (Suyuparina), donde apreciaremos impresionantes formaciones de hielo, cuevas y paisajes únicos.</p><p class="mb-8 mt-0">Posteriormente retornamos a Phinaya para el almuerzo y continuamos el viaje de retorno a Cusco, realizando una parada en la Laguna Sibinacocha. Llegada a Cusco aproximadamente entre 19:00 y 20:00 hrs.</p>',
      itinerary: [
        { time: '03:00 a.m.', activity: 'Recojo desde su hospedaje y viaje hacia Phinaya' },
        { time: '+ 2 horas', activity: 'Parada en Cusipata para disfrutar del desayuno' },
        { time: '+ 6 horas', activity: 'Llegada a las faldas del glaciar e inicio de caminata de 15 minutos' },
        { time: '+ 7 horas', activity: 'Exploración del Glaciar Quelccaya (formaciones de hielo y cuevas)' },
        { time: '+ 9 horas', activity: 'Retorno a Phinaya para el almuerzo' },
        { time: '+ 11 horas', activity: 'Viaje de retorno con parada en la Laguna Sibinacocha' },
        { time: '08:00 p.m.', activity: 'Llegada a Cusco' }
      ],
      includes: [
        'Transporte ida y vuelta',
        'Desayuno y almuerzo',
        'Guía profesional',
        'Bastones de trekking',
        'Botiquín de primeros auxilios',
        'Balón de oxígeno'
      ],
      excludes: [
        'Ingreso (S/ 10.00 - S/ 15.00)',
        'Gastos extras'
      ],
      packing: [
        'Ropa abrigadora (casaca térmica, polar)',
        'Guantes, gorro y bufanda',
        'Zapatos de trekking (antideslizantes)',
        'Mochila pequeña',
        'Lentes de sol y bloqueador solar',
        'Agua y snacks (chocolates, frutos secos)',
        'Dinero en efectivo (para ingresos y extras)',
        'Poncho de lluvia (según temporada)'
      ],
      tips: [
        'Debido a la gran altitud, es recomendable aclimatarse en Cusco un par de días antes de hacer este tour.'
      ]
    }
  },
  {
    id: 36,
    slug: 'paracas-ica-full-day',
    image: '/images/destinations/paracas.webp',
    destination: 'Hidden',
    duration: 'Full Day (17 Hours)',
    price: '60',
    altitude: 'Sea Level / 406m',
    difficulty: 'Easy',
    type: 'Lima Tours',
    departure: '05:00 AM',
    en: {
      title: 'Paracas & Ica Full Day',
      description: 'Explore the Ballestas Islands, ride dune buggies in the Huacachina desert, and taste traditional Pisco and wine.',
      overview: '<p class="mb-4 mt-0">The tour starts with a departure from Lima at 05:30 AM heading to Paracas. Upon arrival, we head to the El Chaco dock to board the speedboat to the Ballestas Islands, where you can see the Candelabra geoglyph and marine fauna such as sea lions, penguins, and birds.</p><p class="mb-4 mt-0">Then we continue to Ica, arriving at Huacachina where we visit the oasis, take photographs, and do the dune buggy and sandboarding activity in the desert.</p><p class="mb-8 mt-0">Afterwards, we visit the Noelia Chocolate shop to taste typical sweets, and then a winery to learn about the wine and pisco process with tasting included. In the afternoon, there is an optional stop in Chincha for wine, pisco, and sweets tasting, as well as cultural activities. Finally, we begin the return to Lima around 07:00 PM, arriving between 09:30 PM and 10:00 PM.</p>',
      itinerary: [
        { time: '05:00 AM', activity: 'Meeting and departure from Lima towards Paracas (05:30 AM)' },
        { time: '+ 4 hours', activity: 'Arrive in Paracas, board the speedboat for the Ballestas Islands tour' },
        { time: '+ 7 hours', activity: 'Travel to Ica and visit the Huacachina Oasis (dune buggies & sandboarding)' },
        { time: '+ 10 hours', activity: 'Visit Noelia Chocolate shop and a traditional winery for Pisco tasting' },
        { time: '+ 12 hours', activity: 'Optional stop in Chincha for cultural activities and more tasting' },
        { time: '07:00 PM', activity: 'Start the return journey to Lima' },
        { time: '10:00 PM', activity: 'Arrival in Lima' }
      ],
      includes: [
        'Round trip tourist transport',
        'Professional guide',
        'Ballestas Islands Tour + entrances',
        'Huacachina Oasis visit',
        'Dune buggies and sandboarding',
        'Wine route (Ica and Chincha)',
        'Tastings (wines, piscos, sweets)',
        'Noelia Chocolate shop visit',
        'SOAT insurance and first aid kit'
      ],
      excludes: [
        'Breakfast',
        'Lunch'
      ],
      packing: [
        'Light and comfortable clothing for the day, warm jacket for the boat ride and evening',
        'Sunglasses, hat, and sunscreen',
        'Water and snacks',
        'Cash for meals and extra expenses',
        'Camera or smartphone'
      ],
      tips: [
        'Make sure to bring a windbreaker jacket as the boat ride to Ballestas Islands can be very windy and cold.'
      ]
    },
    es: {
      title: 'Paracas - Ica Full Day',
      description: 'Explora las Islas Ballestas, sube a los tubulares en el desierto de Huacachina y degusta pisco y vinos tradicionales.',
      overview: '<p class="mb-4 mt-0">El tour inicia con la salida desde Lima a las 05:30 a.m. con destino a Paracas. A la llegada nos dirigimos al muelle El Chaco para abordar el deslizador rumbo a las Islas Ballestas, donde se aprecia el Candelabro y fauna marina como lobos marinos, pingüinos y aves.</p><p class="mb-4 mt-0">Luego continuamos hacia Ica, llegando a la Huacachina donde se visita el oasis, se toman fotografías y se realiza la actividad de tubulares y sandboarding en el desierto.</p><p class="mb-8 mt-0">Posteriormente se visita la Chocolatería Noelia para degustación de dulces típicos y luego una bodega vitivinícola donde se conoce el proceso del vino y pisco con degustación incluida. Por la tarde se realiza una parada opcional en Chincha para degustación de vinos, piscos y dulces, además de actividades culturales. Finalmente se inicia el retorno a Lima alrededor de las 07:00 p.m., llegando entre las 09:30 p.m. y 10:00 p.m.</p>',
      itinerary: [
        { time: '05:00 a.m.', activity: 'Encuentro y salida desde Lima con destino a Paracas (05:30 a.m.)' },
        { time: '+ 4 horas', activity: 'Llegada a Paracas y tour en deslizador a las Islas Ballestas' },
        { time: '+ 7 horas', activity: 'Viaje a Ica, visita a Huacachina (tubulares y sandboarding)' },
        { time: '+ 10 horas', activity: 'Visita a Chocolatería Noelia y bodega vitivinícola (degustación)' },
        { time: '+ 12 horas', activity: 'Parada opcional en Chincha para actividades culturales y degustación' },
        { time: '07:00 p.m.', activity: 'Inicio del retorno hacia la ciudad de Lima' },
        { time: '10:00 p.m.', activity: 'Llegada aproximada a Lima' }
      ],
      includes: [
        'Transporte turístico ida y vuelta',
        'Guía profesional',
        'Tour Islas Ballestas + entradas',
        'Huacachina',
        'Tubulares y sandboarding',
        'Ruta del vino (Ica y Chincha)',
        'Degustaciones (vinos, piscos, dulces)',
        'Chocolatería Noelia',
        'Seguro SOAT y botiquín'
      ],
      excludes: [
        'Desayuno',
        'Almuerzo'
      ],
      packing: [
        'Ropa ligera y cómoda para el día, abrigo para la tarde/noche y el paseo en bote',
        'Lentes de sol, sombrero o gorra y protector solar',
        'Agua y snacks',
        'Dinero en efectivo para comidas y extras',
        'Cámara fotográfica o celular'
      ],
      tips: [
        'Lleva una casaca cortavientos, ya que el viaje en bote a las Islas Ballestas suele ser frío y ventoso.'
      ]
    }
  },
  {
    id: 37,
    slug: 'lima-city-tour',
    image: '/images/destinations/lima.webp',
    destination: 'Hidden',
    duration: 'Half Day (4 Hours)',
    price: '35',
    altitude: 'Sea Level / 154m',
    difficulty: 'Easy',
    type: 'Lima Tours',
    departure: '09:15 AM, 02:15 PM',
    en: {
      title: 'Lima City Tour',
      description: 'Discover the Historical Center of Lima, the San Francisco Catacombs, and the modern districts of Miraflores and San Isidro.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup from your hotel in the districts of Miraflores or San Isidro. You will have a panoramic view of the Huaca Pucllana, an ancient pre-Inca ceremonial center.</p><p class="mb-4 mt-0">We continue to the Historical Center of Lima, where we visit the main attractions such as the Plaza de Armas, the Government Palace, the Cathedral, and the San Francisco Convent with its underground catacombs.</p><p class="mb-8 mt-0">Afterwards, the tour continues through the modern area of the city, visiting the Parque del Amor in Miraflores, the El Olivar Park in San Isidro, and main avenues overlooking the Pacific Ocean. Finally, we return to the hotel.</p>',
      itinerary: [
        { time: '09:15 AM / 02:15 PM', activity: 'Pickup from your hotel in Miraflores or San Isidro' },
        { time: '+ 30 mins', activity: 'Panoramic view of Huaca Pucllana' },
        { time: '+ 1 hour', activity: 'Explore the Historical Center of Lima (Plaza de Armas, Cathedral, Government Palace)' },
        { time: '+ 2 hours', activity: 'Guided visit to the San Francisco Convent and its underground Catacombs' },
        { time: '+ 3 hours', activity: 'Tour through the modern districts, visiting Parque del Amor and Parque El Olivar' },
        { time: '+ 4 hours', activity: 'Return to your hotel' }
      ],
      includes: [
        'Hotel pickup',
        'Tourist transport',
        'Professional bilingual guide',
        'Entrance fees to attractions'
      ],
      excludes: [
        'Meals',
        'Personal expenses'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Comfortable clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos'
      ],
      tips: [
        'Pickup is only included from hotels located in Miraflores and San Isidro.'
      ]
    },
    es: {
      title: 'City Tour Lima',
      description: 'Descubre el Centro Histórico de Lima, las Catacumbas de San Francisco y los distritos modernos de Miraflores y San Isidro.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo desde el hotel en los distritos de Miraflores o San Isidro. Se realiza una vista panorámica de la Huaca Pucllana, antiguo centro ceremonial preinca.</p><p class="mb-4 mt-0">Se continúa hacia el Centro Histórico de Lima, donde se visitan los principales atractivos como la Plaza de Armas, el Palacio de Gobierno, la Catedral y el Convento de San Francisco con sus catacumbas.</p><p class="mb-8 mt-0">Posteriormente, el recorrido continúa por la zona moderna de la ciudad, visitando el Parque del Amor en Miraflores, el Parque El Olivar en San Isidro y avenidas principales con vista al Océano Pacífico. Finalmente, retorno al hotel.</p>',
      itinerary: [
        { time: '09:15 a.m. / 02:15 p.m.', activity: 'Recojo desde el hotel en Miraflores o San Isidro' },
        { time: '+ 30 mins', activity: 'Vista panorámica de la Huaca Pucllana' },
        { time: '+ 1 hora', activity: 'Visita al Centro Histórico (Plaza de Armas, Catedral, Palacio de Gobierno)' },
        { time: '+ 2 horas', activity: 'Recorrido por el Convento de San Francisco y las Catacumbas' },
        { time: '+ 3 horas', activity: 'Visita a la zona moderna (Parque del Amor, Parque El Olivar)' },
        { time: '+ 4 horas', activity: 'Retorno al hotel' }
      ],
      includes: [
        'Recojo desde hotel',
        'Transporte turístico',
        'Guía profesional bilingüe',
        'Entradas a los atractivos'
      ],
      excludes: [
        'Alimentación',
        'Gastos personales'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa cómoda y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos'
      ],
      tips: [
        'El recojo está incluido únicamente para hoteles ubicados en los distritos de Miraflores y San Isidro.'
      ]
    }
  },
  {
    id: 38,
    slug: 'pallay-punchu',
    image: '/images/destinations/andes-trekking.jpg',
    destination: 'Andes Trekking',
    duration: 'Full Day (13.5 Hours)',
    price: '45',
    latitude: -14.4716,
    longitude: -71.1561,
    altitude: '4,700m',
    difficulty: 'Moderate',
    type: 'Group Tour',
    departure: '04:30 AM',
    en: {
      title: 'Pallay Punchu',
      description: 'Hike to the incredible sharp colored mountains of Pallay Punchu and enjoy stunning views of the Langui-Layo lagoon.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup from your accommodation to head south of Cusco to the district of Layo, where we will enjoy breakfast. Then we continue to the starting point of the hike.</p><p class="mb-4 mt-0">The hike to Pallay Punchu, known as the "sharp colored mountain", takes approximately 1 to 2 hours, where we will appreciate impressive rock formations with natural colors and views of the Langui-Layo lagoon.</p><p class="mb-8 mt-0">Upon reaching the viewpoint, we will have time for photos and an explanation from the guide. Afterwards, we return to the transport to head to the restaurant and enjoy lunch, before returning to Cusco.</p>',
      itinerary: [
        { time: '04:30 AM', activity: 'Pickup from your accommodation and travel south of Cusco' },
        { time: '+ 3 hours', activity: 'Arrive in Layo district for breakfast' },
        { time: '+ 4 hours', activity: 'Travel to the trailhead and start the hike' },
        { time: '+ 6 hours', activity: 'Arrive at the Pallay Punchu viewpoint (free time for photos and guide explanation)' },
        { time: '+ 8 hours', activity: 'Hike back to the transport' },
        { time: '+ 9 hours', activity: 'Head to the restaurant for lunch' },
        { time: '06:00 PM', activity: 'Arrive back in Cusco' }
      ],
      includes: [
        'Hotel pickup',
        'Tourist transport',
        'Breakfast',
        'Lunch',
        'Professional guide',
        'First aid kit'
      ],
      excludes: [
        'Community entrance fee (direct payment on site)',
        'Optional horse rental'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Warm clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos',
        'Rain poncho (during the rainy season)'
      ],
      tips: [
        'Bring cash in Soles for the community entrance fee and in case you want to rent a horse for the hike.'
      ]
    },
    es: {
      title: 'Pallay Punchu',
      description: 'Camina hacia las increíbles montañas de colores puntiagudos de Pallay Punchu y disfruta de las vistas de la laguna Langui-Layo.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo desde su hospedaje para dirigirnos hacia el sur de Cusco hasta el distrito de Layo, donde disfrutaremos de un desayuno. Luego continuamos hacia el punto de inicio de la caminata.</p><p class="mb-4 mt-0">La caminata hacia Pallay Punchu, conocida como la "montaña de colores puntiagudos", tiene una duración aproximada de 1 a 2 horas, donde apreciaremos impresionantes formaciones rocosas con colores naturales y vistas a la laguna Langui-Layo.</p><p class="mb-8 mt-0">Al llegar al mirador tendremos tiempo para fotos y explicación del guía. Posteriormente retornamos al transporte para dirigirnos al restaurante y disfrutar del almuerzo, para luego regresar a Cusco.</p>',
      itinerary: [
        { time: '04:30 a.m.', activity: 'Recojo desde su hospedaje y viaje hacia el sur de Cusco' },
        { time: '+ 3 horas', activity: 'Llegada al distrito de Layo para el desayuno' },
        { time: '+ 4 horas', activity: 'Viaje al punto de inicio y comienzo de la caminata' },
        { time: '+ 6 horas', activity: 'Llegada al mirador de Pallay Punchu (tiempo para fotos y explicación)' },
        { time: '+ 8 horas', activity: 'Caminata de retorno al transporte' },
        { time: '+ 9 horas', activity: 'Traslado al restaurante para disfrutar del almuerzo' },
        { time: '06:00 p.m.', activity: 'Llegada a Cusco' }
      ],
      includes: [
        'Recojo desde hospedaje',
        'Transporte turístico',
        'Desayuno',
        'Almuerzo',
        'Guía profesional',
        'Botiquín de primeros auxilios'
      ],
      excludes: [
        'Ingreso a la comunidad (pago directo en el lugar)',
        'Caballo opcional'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa abrigadora y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos',
        'Poncho de agua (temporada de lluvias)'
      ],
      tips: [
        'Lleva dinero en efectivo en soles para pagar el ingreso a la comunidad y por si decides rentar un caballo.'
      ]
    }
  },
  {
    id: 39,
    slug: 'valle-sur',
    image: '/images/destinations/sacred-valley.webp',
    destination: 'Cusco',
    duration: 'Half Day (7 Hours)',
    price: '25',
    latitude: -13.5683,
    longitude: -71.7766,
    altitude: '3,200m',
    difficulty: 'Easy',
    type: 'Group Tour',
    departure: '08:40 AM',
    en: {
      title: 'South Valley',
      description: 'Explore the architectural wonders of Tipón, the pre-Inca city of Pikillacta, and the beautiful Andahuaylillas Church.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup from your accommodation to begin a complete experience through the South Valley.</p><p class="mb-8 mt-0">You will visit important and unique cultural and archaeological attractions, with a VIP service that guarantees comfort, organization, and a better distribution of time during the day. We will explore the impressive Inca water engineering at Tipón, the ancient Wari city of Pikillacta, and the famous San Pedro Apóstol Church in Andahuaylillas, known as the Sistine Chapel of America.</p>',
      itinerary: [
        { time: '08:40 AM', activity: 'Pickup from your accommodation and travel to the South Valley' },
        { time: '+ 1 hour', activity: 'Guided visit to the archaeological site of Tipón (Inca water engineering)' },
        { time: '+ 3 hours', activity: 'Explore the pre-Inca city of Pikillacta (Wari culture)' },
        { time: '+ 5 hours', activity: 'Visit the San Pedro Apóstol Church of Andahuaylillas' },
        { time: '03:30 PM', activity: 'Return to Cusco' }
      ],
      includes: [
        'Hotel pickup',
        'Professional tour guide',
        'Tourist transport'
      ],
      excludes: [
        'Entrance fees (Tourist Ticket / Boleto Turístico)',
        'Meals'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Comfortable clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos',
        'Rain poncho (during the rainy season)'
      ],
      tips: [
        'You will need the partial Tourist Ticket (Boleto Turístico) for Tipón and Pikillacta, and a separate entrance fee for the Andahuaylillas Church.'
      ]
    },
    es: {
      title: 'Valle Sur',
      description: 'Explora las maravillas arquitectónicas de Tipón, la ciudad preinca de Pikillacta y la hermosa iglesia de Andahuaylillas.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo desde su hospedaje para dar inicio a una experiencia completa por el Valle Sur.</p><p class="mb-8 mt-0">Visitarás importantes atractivos culturales y arqueológicos únicos, con un servicio VIP que garantiza comodidad, organización y una mejor distribución del tiempo durante el día. Exploraremos la impresionante ingeniería hidráulica Inca en Tipón, la antigua ciudad Wari de Pikillacta, y la famosa Iglesia San Pedro Apóstol en Andahuaylillas, conocida como la Capilla Sixtina de América.</p>',
      itinerary: [
        { time: '08:40 a.m.', activity: 'Recojo desde su hospedaje y viaje hacia el Valle Sur' },
        { time: '+ 1 hora', activity: 'Visita guiada al sitio arqueológico de Tipón' },
        { time: '+ 3 horas', activity: 'Exploración de la ciudad preinca de Pikillacta' },
        { time: '+ 5 horas', activity: 'Visita a la Iglesia de San Pedro Apóstol de Andahuaylillas' },
        { time: '03:30 p.m.', activity: 'Retorno a Cusco' }
      ],
      includes: [
        'Recojo a hospedaje',
        'Guía turístico profesional',
        'Transporte turístico'
      ],
      excludes: [
        'Entradas (Boleto Turístico)',
        'Alimentos'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa cómoda y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos',
        'Poncho de agua (temporada de lluvias)'
      ],
      tips: [
        'Necesitarás el Boleto Turístico parcial para ingresar a Tipón y Pikillacta, y un ticket de ingreso adicional para la Iglesia de Andahuaylillas.'
      ]
    }
  },
  {
    id: 40,
    slug: 'palcoyo',
    image: '/images/destinations/andes-trekking.jpg',
    destination: 'Andes Trekking',
    duration: 'Full Day (12.5 Hours)',
    price: '35',
    latitude: -13.9555,
    longitude: -71.3069,
    altitude: '4,900m',
    difficulty: 'Easy',
    type: 'Group Tour',
    departure: '04:30 AM',
    en: {
      title: 'Palcoyo Rainbow Mountain',
      description: 'An easy and short hike to discover 3 rainbow mountains, stunning Andean landscapes, and the Stone Forest.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup from your accommodation (04:00 - 05:00 a.m.) to head towards Cusipata, where we will enjoy breakfast. Then we continue passing through Checacupe until we reach Palcoyo.</p><p class="mb-4 mt-0">The hike is short and easy (40 min - 1 h), where we can appreciate 3 colored mountains, Andean landscapes, and the Stone Forest (optional).</p><p class="mb-8 mt-0">After the tour, we return to Cusipata for a buffet lunch and then return to Cusco, arriving approximately 04:00 PM - 05:00 PM.</p>',
      itinerary: [
        { time: '04:30 AM', activity: 'Pickup from your accommodation and travel towards Cusipata' },
        { time: '+ 2 hours', activity: 'Arrive in Cusipata for breakfast' },
        { time: '+ 4 hours', activity: 'Travel through Checacupe and arrive at the Palcoyo trailhead' },
        { time: '+ 5 hours', activity: 'Short and easy hike (40 min - 1 h) to see 3 rainbow mountains and the Stone Forest' },
        { time: '+ 7 hours', activity: 'Return hike to the transport' },
        { time: '+ 9 hours', activity: 'Buffet lunch in Cusipata' },
        { time: '05:00 PM', activity: 'Arrive back in Cusco' }
      ],
      includes: [
        'Hotel pickup',
        'Tourist transport',
        'Breakfast',
        'Lunch',
        'Professional guide',
        'First aid kit'
      ],
      excludes: [
        'Community entrance fee (direct payment on site)',
        'Optional horse rental'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Warm clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos',
        'Rain poncho (during the rainy season)'
      ],
      tips: [
        'This is a great alternative to Vinicunca (Rainbow Mountain) if you prefer a much easier and shorter hike with less crowds.'
      ]
    },
    es: {
      title: 'Montaña Palcoyo',
      description: 'Una caminata corta y fácil para descubrir 3 montañas de colores, paisajes andinos y el Bosque de Piedras.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo desde su hospedaje (04:00 - 05:00 a.m.) para dirigirnos hacia Cusipata, donde disfrutaremos del desayuno. Luego continuamos pasando por Checacupe hasta llegar a Palcoyo.</p><p class="mb-4 mt-0">La caminata es corta y fácil (40 min - 1 h), donde podremos apreciar 3 montañas de colores, paisajes andinos y el Bosque de Piedras (opcional).</p><p class="mb-8 mt-0">Después del recorrido retornamos a Cusipata para el almuerzo buffet y luego regreso a Cusco, llegando aproximadamente 16:00 - 17:00 hrs.</p>',
      itinerary: [
        { time: '04:30 a.m.', activity: 'Recojo desde su hospedaje y viaje hacia Cusipata' },
        { time: '+ 2 horas', activity: 'Llegada a Cusipata para disfrutar del desayuno' },
        { time: '+ 4 horas', activity: 'Viaje pasando por Checacupe hasta llegar a Palcoyo' },
        { time: '+ 5 horas', activity: 'Caminata corta (40 min - 1h) para ver 3 montañas de colores y el Bosque de Piedras' },
        { time: '+ 7 horas', activity: 'Caminata de retorno al transporte' },
        { time: '+ 9 horas', activity: 'Almuerzo buffet en Cusipata' },
        { time: '05:00 p.m.', activity: 'Llegada a Cusco' }
      ],
      includes: [
        'Recojo desde hospedaje',
        'Transporte turístico',
        'Desayuno',
        'Almuerzo',
        'Guía profesional',
        'Botiquín de primeros auxilios'
      ],
      excludes: [
        'Ingreso a la comunidad (pago directo en el lugar)',
        'Caballo opcional'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa abrigadora y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos',
        'Poncho de agua (temporada de lluvias)'
      ],
      tips: [
        'Palcoyo es una excelente alternativa a Vinicunca si prefieres una caminata mucho más corta, fácil y con menos turistas.'
      ]
    }
  },
  {
    id: 41,
    slug: 'waqrapukara',
    image: '/images/destinations/andes-trekking.jpg',
    destination: 'Andes Trekking',
    duration: 'Full Day (13.5 Hours)',
    price: '40',
    latitude: -13.9969,
    longitude: -71.5833,
    altitude: '4,140m',
    difficulty: 'Moderate',
    type: 'Group Tour',
    departure: '04:30 AM',
    en: {
      title: 'Waqrapukara',
      description: 'Hike to the impressive horn-shaped Inca fortress of Waqrapukara, surrounded by spectacular canyons and rock formations.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup from your accommodation between 04:00 and 04:30 AM to head south of Cusco to Cusipata, where we will enjoy breakfast. Then we continue to the starting point of the hike.</p><p class="mb-4 mt-0">The hike to Waqrapukara takes approximately 1.5 to 2 hours, where we will appreciate impressive Andean landscapes, canyons, and rock formations.</p><p class="mb-8 mt-0">Upon arrival, we will visit this Inca archaeological complex, known as the "horn-shaped fortress". After the tour, we return by the same route to the transport and head to Cusipata for a buffet lunch. Finally, we return to Cusco, arriving approximately between 05:30 PM and 06:30 PM.</p>',
      itinerary: [
        { time: '04:30 AM', activity: 'Pickup from your accommodation and travel south to Cusipata' },
        { time: '+ 2.5 hours', activity: 'Arrive in Cusipata for breakfast' },
        { time: '+ 3.5 hours', activity: 'Travel to the trailhead and start the hike' },
        { time: '+ 5.5 hours', activity: 'Arrive at Waqrapukara and guided tour of the horn-shaped fortress' },
        { time: '+ 8 hours', activity: 'Hike back to the transport' },
        { time: '+ 10 hours', activity: 'Buffet lunch in Cusipata' },
        { time: '06:00 PM', activity: 'Arrive back in Cusco' }
      ],
      includes: [
        'Hotel pickup',
        'Tourist transport',
        'Breakfast',
        'Lunch',
        'Professional guide',
        'First aid kit'
      ],
      excludes: [
        'Community entrance fee (direct payment on site)'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Warm clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos',
        'Rain poncho (during the rainy season)'
      ],
      tips: [
        'Make sure to bring cash in Soles for the community entrance fee and any extra expenses.'
      ]
    },
    es: {
      title: 'Waqrapukara',
      description: 'Camina hacia la impresionante fortaleza inca con forma de cuernos de Waqrapukara, rodeada de espectaculares cañones y formaciones rocosas.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo desde su hospedaje entre 04:00 y 04:30 a.m. para dirigirnos hacia el sur de Cusco hasta Cusipata, donde disfrutaremos del desayuno. Luego continuamos hacia el punto de inicio de la caminata.</p><p class="mb-4 mt-0">La caminata hacia Waqrapukara tiene una duración aproximada de 1.5 a 2 horas, donde apreciaremos impresionantes paisajes andinos, cañones y formaciones rocosas.</p><p class="mb-8 mt-0">Al llegar, visitaremos este complejo arqueológico inca, conocido como la "fortaleza con forma de cuernos". Después del recorrido retornamos por la misma ruta hacia el transporte y nos dirigimos a Cusipata para el almuerzo buffet. Finalmente retornamos a Cusco, llegando aproximadamente entre 17:30 y 18:30 hrs.</p>',
      itinerary: [
        { time: '04:30 a.m.', activity: 'Recojo desde su hospedaje y viaje hacia Cusipata' },
        { time: '+ 2.5 horas', activity: 'Llegada a Cusipata para disfrutar del desayuno' },
        { time: '+ 3.5 horas', activity: 'Viaje al punto de inicio y comienzo de la caminata' },
        { time: '+ 5.5 horas', activity: 'Llegada a Waqrapukara y recorrido por la fortaleza' },
        { time: '+ 8 horas', activity: 'Caminata de retorno al transporte' },
        { time: '+ 10 horas', activity: 'Almuerzo buffet en Cusipata' },
        { time: '06:00 p.m.', activity: 'Llegada a Cusco' }
      ],
      includes: [
        'Recojo desde hospedaje',
        'Transporte turístico',
        'Desayuno',
        'Almuerzo',
        'Guía profesional',
        'Botiquín de primeros auxilios'
      ],
      excludes: [
        'Ingreso a la comunidad (pago directo en el lugar)'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa abrigadora y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos',
        'Poncho de agua (temporada de lluvias)'
      ],
      tips: [
        'Lleva dinero en efectivo en soles para pagar el ingreso a la comunidad y gastos personales extra.'
      ]
    }
  },
  {
    id: 42,
    slug: 'cuatrimotos-montana-colores',
    image: '/images/destinations/andes-trekking.jpg',
    destination: 'Andes Trekking',
    duration: 'Full Day (13 Hours)',
    price: '60',
    latitude: -13.8694,
    longitude: -71.3033,
    altitude: '5,036m',
    difficulty: 'Moderate',
    type: 'Group Tour',
    departure: '04:30 AM',
    en: {
      title: 'Rainbow Mountain ATVs',
      description: 'Experience an exciting ATV ride combined with a short hike to reach the spectacular Rainbow Mountain.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup from your accommodation to head south of Cusco for approximately 1 hour and 30 minutes to Cusipata, where we will enjoy breakfast. Then we continue to Kayrahuiri Alto (4,650 m.a.s.l.).</p><p class="mb-4 mt-0">Here we will receive brief instruction and an ATV driving practice before starting the tour. The ATV route takes approx. 30 minutes, crossing impressive landscapes with views of the snow-capped Ausangate. Afterwards, we will take a short 10-minute walk to reach Rainbow Mountain.</p><p class="mb-8 mt-0">At the summit (5,036 m.a.s.l.) we will have free time for photos and to enjoy the landscape. Then we return on ATVs along the same route to our transport, which will take us back to Cusipata to enjoy a buffet lunch. Finally, we return to Cusco.</p>',
      itinerary: [
        { time: '04:30 AM', activity: 'Pickup from your accommodation and travel south to Cusipata' },
        { time: '+ 1.5 hours', activity: 'Arrive in Cusipata for breakfast' },
        { time: '+ 3 hours', activity: 'Travel to Kayrahuiri Alto (4,650m) for ATV instructions' },
        { time: '+ 4 hours', activity: '30-minute ATV ride towards Rainbow Mountain' },
        { time: '+ 4.5 hours', activity: 'Short 10-minute hike to the summit of Rainbow Mountain (5,036m)' },
        { time: '+ 6 hours', activity: 'Return ATV ride to the transport' },
        { time: '+ 8 hours', activity: 'Buffet lunch in Cusipata' },
        { time: '05:30 PM', activity: 'Arrive back in Cusco' }
      ],
      includes: [
        'Hotel pickup (historic center)',
        'Round trip tourist transport',
        'Single or double semi-automatic ATV',
        'Buffet breakfast and lunch',
        'Professional guide',
        'First aid kit and oxygen'
      ],
      excludes: [
        'Rainbow Mountain entrance fee',
        'Extra expenses'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Warm clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos',
        'Rain poncho (during the rainy season)'
      ],
      tips: [
        'No prior ATV driving experience is required. The machines are semi-automatic and easy to use.'
      ]
    },
    es: {
      title: 'Cuatrimotos Montaña de Colores',
      description: 'Experimenta un emocionante paseo en cuatrimotos combinado con una corta caminata para llegar a la espectacular Montaña de Colores.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo desde su hospedaje para dirigirnos hacia el sur de Cusco durante aproximadamente 1 hora y 30 minutos hasta Cusipata, donde disfrutaremos de un desayuno. Luego continuamos hacia Kayrahuiri Alto (4,650 m.s.n.m.).</p><p class="mb-4 mt-0">Aquí recibiremos una breve instrucción y práctica de manejo de cuatrimotos antes de comenzar el recorrido. La ruta en cuatrimoto tiene una duración aprox. de 30 minutos, atravesando impresionantes paisajes con vistas al nevado Ausangate. Posteriormente realizaremos una caminata corta de 10 min. hasta llegar a la Montaña de Colores.</p><p class="mb-8 mt-0">En la cima (5,036 m.s.n.m.) tendremos tiempo libre para fotos y disfrutar del paisaje. Luego retornamos en cuatrimotos por la misma ruta hasta nuestro transporte, que nos llevará nuevamente a Cusipata para disfrutar del almuerzo buffet. Finalmente retornamos a Cusco.</p>',
      itinerary: [
        { time: '04:30 a.m.', activity: 'Recojo desde su hospedaje y viaje hacia Cusipata' },
        { time: '+ 1.5 horas', activity: 'Llegada a Cusipata para disfrutar del desayuno' },
        { time: '+ 3 horas', activity: 'Viaje a Kayrahuiri Alto (4,650m) e instrucción de cuatrimotos' },
        { time: '+ 4 horas', activity: 'Ruta de 30 minutos en cuatrimotos hacia la Montaña de Colores' },
        { time: '+ 4.5 horas', activity: 'Caminata corta de 10 min. hasta la cima (5,036m)' },
        { time: '+ 6 horas', activity: 'Retorno en cuatrimotos al transporte' },
        { time: '+ 8 horas', activity: 'Almuerzo buffet en Cusipata' },
        { time: '05:30 p.m.', activity: 'Llegada a Cusco' }
      ],
      includes: [
        'Recojo desde hospedaje (centro histórico)',
        'Transporte turístico ida y vuelta',
        'Cuatrimoto simple o doble semiauto.',
        'Desayuno y almuerzo buffet',
        'Guía profesional',
        'Equipo de primeros auxilios (oxígeno)'
      ],
      excludes: [
        'Ingreso a la montaña de colores',
        'Gastos extras'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa abrigadora y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos',
        'Poncho de agua (temporada de lluvias)'
      ],
      tips: [
        'No se necesita experiencia previa manejando cuatrimotos. Las máquinas son semiautomáticas y fáciles de usar.'
      ]
    }
  },
  {
    id: 43,
    slug: 'valle-sagrado-vip',
    image: '/images/destinations/sacred-valley.webp',
    destination: 'Sacred Valley',
    duration: 'Full Day (12.5 Hours)',
    price: '30',
    latitude: -13.315,
    longitude: -72.1158,
    altitude: '2,800m',
    difficulty: 'Easy',
    type: 'Group Tour',
    departure: '06:30 AM',
    en: {
      title: 'VIP Sacred Valley',
      description: 'A complete VIP experience through the Sacred Valley of the Incas, visiting Chinchero, Moray, Maras, Ollantaytambo, and Pisac.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup from your accommodation to begin a complete experience through the Sacred Valley of the Incas, visiting traditional villages, archaeological centers, and unique Andean landscapes.</p><p class="mb-4 mt-0">You will travel with a VIP service that guarantees comfort, organization, and a better distribution of time throughout the day.</p><p class="mb-8 mt-0">The itinerary includes visits to the Chinchero textile center, the impressive circular terraces of Moray, the Maras Salt Mines, a buffet lunch in Urubamba, the Ollantaytambo fortress, and the Pisac archaeological center and market. Finally, we return to Cusco, arriving around 07:00 PM.</p>',
      itinerary: [
        { time: '06:30 AM', activity: 'Pickup from your accommodation and travel to the Sacred Valley' },
        { time: '+ 1.5 hours', activity: 'Visit Chinchero (Textile Center)' },
        { time: '+ 3 hours', activity: 'Explore Moray (Inca circular terraces)' },
        { time: '+ 4 hours', activity: 'Visit the Maras Salt Mines' },
        { time: '+ 6 hours', activity: 'Buffet lunch in Urubamba' },
        { time: '+ 8 hours', activity: 'Guided tour of the Ollantaytambo archaeological complex' },
        { time: '+ 10 hours', activity: 'Visit Pisac (Archaeological Center and market)' },
        { time: '07:00 PM', activity: 'Arrive back in Cusco' }
      ],
      includes: [
        'Professional bilingual tour guide',
        'Hotel pickup',
        'Tourist transport',
        'Buffet lunch'
      ],
      excludes: [
        'Entrance fees (Tourist Ticket / Boleto Turístico)',
        'Maras salt mines entrance fee (S/. 15 soles)'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Comfortable clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos',
        'Rain poncho (during the rainy season)'
      ],
      tips: [
        'You will need the partial or full Tourist Ticket (Boleto Turístico) for Chinchero, Moray, Ollantaytambo, and Pisac, and 15 Soles in cash for Maras.'
      ]
    },
    es: {
      title: 'Valle Sagrado VIP',
      description: 'Una experiencia VIP completa por el Valle Sagrado de los Incas, visitando Chinchero, Moray, Maras, Ollantaytambo y Pisac.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo desde su hospedaje para dar inicio a una experiencia completa por el Valle Sagrado de los Incas, recorriendo pueblos tradicionales, centros arqueológicos y paisajes andinos únicos.</p><p class="mb-4 mt-0">Viajarás con un servicio VIP que garantiza comodidad, organización y una mejor distribución del tiempo durante todo el día.</p><p class="mb-8 mt-0">El itinerario incluye visitas al centro textil de Chinchero, las terrazas circulares de Moray, las Salineras de Maras, un almuerzo buffet en Urubamba, la fortaleza de Ollantaytambo y el centro arqueológico y mercado de Pisac. Finalmente, retornamos a Cusco alrededor de las 07:00 p.m.</p>',
      itinerary: [
        { time: '06:30 a.m.', activity: 'Recojo desde su hospedaje y viaje hacia el Valle Sagrado' },
        { time: '+ 1.5 horas', activity: 'Visita a Chinchero (Centro Textil)' },
        { time: '+ 3 horas', activity: 'Exploración de Moray (Terrazas circulares incas)' },
        { time: '+ 4 horas', activity: 'Visita a las Salineras de Maras' },
        { time: '+ 6 horas', activity: 'Almuerzo buffet en Urubamba' },
        { time: '+ 8 horas', activity: 'Tour guiado en el complejo arqueológico de Ollantaytambo' },
        { time: '+ 10 horas', activity: 'Visita a Pisac (Centro Arqueológico y mercado)' },
        { time: '07:00 p.m.', activity: 'Llegada a Cusco' }
      ],
      includes: [
        'Guía turístico profesional bilingüe',
        'Recojo a hospedaje',
        'Transporte turístico',
        'Almuerzo buffet'
      ],
      excludes: [
        'Entradas (Boleto Turístico)',
        'Entrada a salineras S/. 15 soles'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa cómoda y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos',
        'Poncho de agua (temporada de lluvias)'
      ],
      tips: [
        'Necesitarás el Boleto Turístico parcial o general para ingresar a Chinchero, Moray, Ollantaytambo y Pisac, además de 15 soles en efectivo para las Salineras.'
      ]
    }
  },
  {
    id: 44,
    slug: 'montana-de-colores',
    image: '/images/destinations/andes-trekking.jpg',
    destination: 'Andes Trekking',
    duration: 'Full Day (12.5 Hours)',
    price: '30',
    latitude: -13.8694,
    longitude: -71.3033,
    altitude: '5,200m',
    difficulty: 'Moderate to Challenging',
    type: 'Group Tour',
    departure: '04:30 AM',
    en: {
      title: 'Rainbow Mountain (Vinicunca)',
      description: 'Hike to the famous Rainbow Mountain and marvel at its spectacular colors and high Andean landscapes.',
      overview: '<p class="mb-4 mt-0">The tour starts with a pickup from your accommodation to head south of Cusco for approximately 2 hours to the district of Cusipata, where we will enjoy an Andean breakfast. Then we continue the journey to the starting point of the hike.</p><p class="mb-4 mt-0">The hike to Rainbow Mountain (Vinicunca) takes approximately 1.5 to 2 hours, depending on your pace. During the tour, you can appreciate high Andean fauna such as llamas and alpacas.</p><p class="mb-8 mt-0">Upon reaching the viewpoint (approx. 5,200 m.a.s.l.), we will have time for photos and the guide\'s explanation about the geological formation of the mountain. Afterwards, we return along the same path to the transport to head back to Cusipata and enjoy a buffet lunch. Finally, we return to Cusco.</p>',
      itinerary: [
        { time: '04:30 AM', activity: 'Pickup from your accommodation and travel south to Cusipata' },
        { time: '+ 2 hours', activity: 'Arrive in Cusipata for an Andean breakfast' },
        { time: '+ 3 hours', activity: 'Travel to the trailhead and start the hike' },
        { time: '+ 5 hours', activity: 'Arrive at the Rainbow Mountain viewpoint (5,200m) for photos and guide explanation' },
        { time: '+ 7 hours', activity: 'Hike back to the transport' },
        { time: '+ 9 hours', activity: 'Buffet lunch in Cusipata' },
        { time: '05:00 PM', activity: 'Arrive back in Cusco' }
      ],
      includes: [
        'Hotel pickup',
        'Tourist transport',
        'Breakfast',
        'Buffet lunch',
        'Professional guide',
        'First aid kit'
      ],
      excludes: [
        'Community entrance fee (direct payment on site)',
        'Optional horse rental'
      ],
      packing: [
        'Personal documents (Passport or ID)',
        'Warm clothes and light jacket',
        'Hat or cap and sunscreen',
        'Water and light snacks',
        'Camera or smartphone for photos',
        'Rain poncho (during the rainy season)'
      ],
      tips: [
        'Bring cash in Soles for the entrance fee, and optionally to rent a horse if you feel the altitude makes the hike too challenging.'
      ]
    },
    es: {
      title: 'Montaña de Colores (Vinicunca)',
      description: 'Camina hasta la famosa Montaña de Colores y maravíllate con sus espectaculares colores y paisajes altoandinos.',
      overview: '<p class="mb-4 mt-0">El tour inicia con el recojo desde su hospedaje para dirigirnos hacia el sur de Cusco durante aproximadamente 2 horas hasta el distrito de Cusipata, donde disfrutaremos de un desayuno andino. Luego continuamos el viaje hasta el punto de inicio de la caminata.</p><p class="mb-4 mt-0">La caminata hacia la Montaña de Colores (Vinicunca) tiene una duración aproximada de 1 hora y 30 minutos a 2 horas, dependiendo del ritmo del pasajero. Durante el recorrido se aprecia fauna altoandina como llamas y alpacas.</p><p class="mb-8 mt-0">Al llegar al mirador (5,200 msnm aprox.) tendremos tiempo para fotos y explicación del guía sobre la formación geológica de la montaña. Posteriormente retornamos por el mismo camino hasta el transporte para dirigirnos nuevamente a Cusipata y disfrutar del almuerzo buffet. Finalmente retornamos a Cusco.</p>',
      itinerary: [
        { time: '04:30 a.m.', activity: 'Recojo desde su hospedaje y viaje hacia Cusipata' },
        { time: '+ 2 horas', activity: 'Llegada a Cusipata para disfrutar de un desayuno andino' },
        { time: '+ 3 horas', activity: 'Viaje al punto de inicio y comienzo de la caminata' },
        { time: '+ 5 horas', activity: 'Llegada al mirador (5,200m) para fotos y explicación del guía' },
        { time: '+ 7 horas', activity: 'Caminata de retorno al transporte' },
        { time: '+ 9 horas', activity: 'Almuerzo buffet en Cusipata' },
        { time: '05:00 p.m.', activity: 'Llegada a Cusco' }
      ],
      includes: [
        'Recojo desde hospedaje',
        'Transporte turístico',
        'Desayuno',
        'Almuerzo buffet',
        'Guía profesional',
        'Botiquín de primeros auxilios'
      ],
      excludes: [
        'Ingreso a la comunidad (pago directo en el lugar)',
        'Caballo opcional'
      ],
      packing: [
        'Documentos personales (pasaporte o DNI)',
        'Ropa abrigadora y chaqueta ligera',
        'Sombrero o gorra y protector solar',
        'Agua y refrigerios ligeros',
        'Cámara o celular para fotos',
        'Poncho de agua (temporada de lluvias)'
      ],
      tips: [
        'Lleva dinero en efectivo en soles para pagar el ingreso, y de manera opcional para rentar un caballo si la altitud hace la caminata muy exigente.'
      ]
    }
  }
];
