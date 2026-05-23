export interface Package {
  id: number;
  slug: string;
  image: string;
  price: string;
  duration: string;
  altitude: string;
  difficulty: string;
  type: string;
  latitude?: number;
  longitude?: number;
  departure: string;
  destination: string;
  en: {


    title: string;
    description: string;
    overview: string;
    itinerary: { time: string; activity: string }[];
    includes: string[];
    excludes: string[];
    packing: string[];
    highlights: string[];
    tips: string[];

  };
  es: {
    title: string;
    description: string;
    overview: string;
    itinerary: { time: string; activity: string }[];
    includes: string[];
    excludes: string[];
    packing: string[];
    highlights: string[];
    tips: string[];

  };
}

export const packages: Package[] = [
  {
    id: 1,
    slug: 'humantay-lake-private-tour',
    image: '/tour-humantay.png',
    price: '110',
    duration: 'Full Day',
    altitude: '2,850m – 4,200m',
    difficulty: 'Moderate',
    type: 'Trekking | Adventure',
    departure: 'Plaza Regocijo – Kusipata',
    destination: 'Cusco | Humantay Lake',

    latitude: -13.4217,
    longitude: -72.620,
    en: {

      title: 'Humantay Lake Private Tour',
      description: 'Flexible & Private experience to the turquoise glacial lake from Cusco.',
      overview: 'Humantay Lake is one of the most spectacular high-altitude destinations in the Peruvian Andes, famous for its intense turquoise waters. Our private tour is designed for travelers who seek comfort, flexibility, and a personalized experience away from the crowds.',
      itinerary: [
        { time: '03:00 AM', activity: 'Pick up from your hotel and drive to Mollepata.' },
        { time: '05:30 AM', activity: 'Light breakfast in Mollepata and continue to Soraypampa.' },
        { time: '07:00 AM', activity: 'Begin the hike to Humantay Lake (approx. 1.5 - 2 hours).' },
        { time: '09:00 AM', activity: 'Explore the lagoon and enjoy the glacial views.' },
        { time: '11:00 AM', activity: 'Descent to Soraypampa and return to Mollepata for lunch.' },
        { time: '05:00 PM', activity: 'Arrival back in Cusco.' }
      ],
      includes: ['Professional private guide', 'Private tourist transport', 'Breakfast & Lunch', 'Admission tickets', 'Trekking poles', 'First aid & Oxygen'],
      excludes: ['Staff incentives (optional)', 'Personal emergency horse'],
      packing: ['Waterproof hiking shoes', 'Thermal layers', 'Sun protection', 'Personal snacks', 'Rain poncho']
    },
    es: {
      title: 'Tour Privado Laguna Humantay',
      description: 'Experiencia flexible y privada a la laguna turquesa desde Cusco.',
      overview: 'La Laguna Humantay es uno de los destinos de altura más espectaculares de los Andes peruanos. Nuestro tour privado está diseñado para viajeros que buscan comodidad, flexibilidad y una experiencia personalizada lejos de las multitudes.',
      itinerary: [
        { time: '03:00 AM', activity: 'Recojo de su hotel y viaje hacia Mollepata.' },
        { time: '05:30 AM', activity: 'Desayuno ligero en Mollepata y continuación a Soraypampa.' },
        { time: '07:00 AM', activity: 'Inicio de la caminata hacia la Laguna Humantay (1.5 - 2 horas).' },
        { time: '09:00 AM', activity: 'Exploración de la laguna y vistas del glaciar.' },
        { time: '11:00 AM', activity: 'Descenso a Soraypampa y retorno a Mollepata para el almuerzo.' },
        { time: '05:00 PM', activity: 'Llegada a Cusco.' }
      ],
      includes: ['Guía privado profesional', 'Transporte turístico privado', 'Desayuno y Almuerzo', 'Entradas', 'Bastones de trekking', 'Botiquín y Oxígeno'],
      excludes: ['Propinas (opcional)', 'Caballo de emergencia personal'],
      packing: ['Zapatos de trekking impermeables', 'Ropa térmica', 'Protección solar', 'Snacks personales', 'Poncho de lluvia'],
      highlights: [],
      tips: []
    }

  },
  {
    id: 2,
    slug: 'machu-picchu-full-day',
    image: '/hero-machu-picchu.png',
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
      overview: 'Our Machu Picchu Private Tour Full Day from Cusco is designed for travelers who want a personalized, flexible, and crowd-free experience at one of the world’s most iconic archaeological sites. Instead of following a fixed group schedule, you explore Machu Picchu at your own pace with a licensed private guide focused exclusively on you and your travel interests.\n\nThroughout the journey, you travel by tourist-class train through the Sacred Valley and access Machu Picchu with official entrance tickets already arranged. Once inside the citadel, your private guide leads a tailored visit through agricultural terraces, ceremonial temples, and sacred spaces, explaining the history, architecture, and spiritual meaning of Machu Picchu in a clear and engaging way.\n\nBecause this is a private tour, you enjoy more time for photos, questions, and exploration, without rushing or adapting to group rhythms. This full-day private experience from Cusco is ideal for couples, families, photographers, and travelers who value comfort, flexibility, and deeper cultural connection.',
      itinerary: [
        { time: '05:30 AM', activity: 'Early Pickup & Private Transportation: We pick you up directly from your hotel in Cusco in a private vehicle for the drive to Ollantaytambo (approx. 1h 50m).' },
        { time: '07:30 AM', activity: 'Scenic Train Journey: Board the tourist train toward Aguas Calientes. Enjoy breathtaking scenery along the Urubamba River.' },
        { time: '09:30 AM', activity: 'Bus Ascent: Take the Consettur bus up to the Machu Picchu Sanctuary with your private guide.' },
        { time: '10:00 AM', activity: 'Private Guided Visit: Enjoy a 2-hour private guided tour of the main sectors (Sun Temple, Sacred Plaza, terraces).' },
        { time: '12:30 PM', activity: 'Free Time in Aguas Calientes: Return to town for lunch, shopping, or relaxing at your own pace.' },
        { time: '03:00 PM', activity: 'Return Train: Board the train back to Ollantaytambo.' },
        { time: '05:00 PM', activity: 'Private Transfer back to Cusco: Your private transport takes you back to your hotel.' }
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
      overview: 'Nuestro Tour Privado a Machu Picchu de día completo desde Cusco está diseñado para viajeros que desean una experiencia personalizada, flexible y sin multitudes en uno de los sitios arqueológicos más icónicos del mundo. En lugar de seguir un horario de grupo fijo, explorará Machu Picchu a su propio ritmo con un guía privado certificado enfocado exclusivamente en usted y sus intereses.\n\nA lo largo del viaje, viajará en tren de clase turística a través del Valle Sagrado y accederá a Machu Picchu con boletos de entrada oficiales ya coordinados. Una vez dentro de la ciudadela, su guía privado dirigirá una visita a medida a través de terrazas agrícolas, templos ceremoniales y espacios sagrados, explicando la historia, la arquitectura y el significado espiritual de Machu Picchu de una manera clara y cautivadora.',
      itinerary: [
        { time: '05:30 AM', activity: 'Recojo Temprano y Transporte Privado: Lo recogemos directamente de su hotel en Cusco en un vehículo privado para el viaje hacia Ollantaytambo (aprox. 1h 50m).' },
        { time: '07:30 AM', activity: 'Viaje Escénico en Tren: Aborde el tren turístico hacia Aguas Calientes. Disfrute de paisajes impresionantes a lo largo del río Urubamba.' },
        { time: '09:30 AM', activity: 'Ascenso en Bus: Tome el bus Consettur hacia el Santuario de Machu Picchu con su guía privado.' },
        { time: '10:00 AM', activity: 'Visita Guiada Privada: Disfrute de un tour guiado privado de 2 horas por los sectores principales (Templo del Sol, Plaza Sagrada, terrazas).' },
        { time: '12:30 PM', activity: 'Tiempo Libre en Aguas Calientes: Regreso al pueblo para almorzar, comprar o relajarse a su propio ritmo.' },
        { time: '03:00 PM', activity: 'Tren de Retorno: Aborde el tren de regreso hacia Ollantaytambo.' },
        { time: '05:00 PM', activity: 'Traslado Privado a Cusco: Su transporte privado lo llevará de regreso a su hotel.' }
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
    image: '/tour-sacred-valley.png',
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
      overview: 'Our Machu Picchu and Sacred Valley Private Tour (2 Days) is a carefully planned private experience designed for travelers who want to explore the Sacred Valley in depth and reach Machu Picchu without rushing. Unlike one-day itineraries, this tour offers flexibility, personalized guiding, and a smooth connection between the Sacred Valley and Machu Picchu.\n\nOn Day 1, you can choose between the Classic Route (Pisac & Ollantaytambo) or the Alternative Route (Chinchero, Maras & Moray). The day concludes with a scenic train journey to Aguas Calientes for an overnight stay, ensuring you are rested and ready for Day 2: a private guided visit to the Machu Picchu Sanctuary using the most complete circuit available (Circuit 2).',
      itinerary: [
        { time: 'Day 1 - 07:00 AM', activity: 'Private Pickup & Sacred Valley Exploration: Choose between the Classic Route (Pisac ruins/market) or the Alternative Route (Chinchero, Maras Salt Mines & Moray). Both include lunch time in Urubamba and a visit to Ollantaytambo.' },
        { time: 'Day 1 - 03:37 PM', activity: 'Scenic Train to Aguas Calientes: Board the train from Ollantaytambo station. Upon arrival, our team assists you to your 3-star hotel for an overnight stay.' },
        { time: 'Day 2 - 07:00 AM', activity: 'Bus Ascent & Machu Picchu Entrance: Your private guide escorts you from the hotel to the bus station for the 30-minute ride up to the sanctuary.' },
        { time: 'Day 2 - 08:30 AM', activity: 'Private Guided Visit: Enjoy a 2-hour tailored tour of Circuit 2, the most panoramic and complete route inside the citadel.' },
        { time: 'Day 2 - 12:30 PM', activity: 'Free Time & Return: Return to Aguas Calientes for lunch. Later, board the return train to Ollantaytambo where private transport awaits to take you back to Cusco.' }
      ],
      includes: [
        'Professional licensed guide accompanying you throughout both days',
        'Private tourist transportation for the Sacred Valley on Day 1',
        'Entrance tickets to all archaeological sites and Maras Salt Mines',
        'Round-trip train ticket (Ollantaytambo – Aguas Calientes – Ollantaytambo)',
        'Round-trip bus ticket (Aguas Calientes – Machu Picchu – Aguas Calientes)',
        'Official entrance ticket to Machu Picchu (Circuit 2 whenever available)',
        '1 night accommodation in Aguas Calientes (3-star hotel or similar)',
        'Private transportation back to your hotel in Cusco'
      ],
      excludes: [
        'Meals and beverages (Lunch/Dinner on Day 1, Lunch on Day 2)',
        'Personal expenses',
        'Travel insurance'
      ],
      packing: [
        'Original passport (mandatory for entry and trains)',
        'Valid student card (if applicable)',
        'Small backpack (max 5kg allowed on train)',
        'Comfortable sturdy walking shoes',
        'Sun protection (hat, sunglasses, sunscreen)',
        'Rain poncho or waterproof jacket',
        'Cash for meals and souvenirs'
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
      overview: 'Nuestro Tour Privado de 2 días a Machu Picchu y el Valle Sagrado es una experiencia cuidadosamente planificada para viajeros que desean explorar el Valle Sagrado en profundidad y llegar a Machu Picchu sin prisas. A diferencia de los itinerarios de un solo día, este tour ofrece flexibilidad, guía personalizada y una conexión fluida entre el Valle Sagrado y la ciudadela.\n\nEn el Día 1, puede elegir entre la Ruta Clásica (Písac y Ollantaytambo) o la Ruta Alternativa (Chinchero, Maras y Moray). El día concluye con un viaje escénico en tren hacia Aguas Calientes para pernoctar, asegurando que esté descansado y listo para el Día 2: una visita guiada privada al Santuario de Machu Picchu utilizando el circuito más completo disponible (Circuito 2).',
      itinerary: [
        { time: 'Día 1 - 07:00 AM', activity: 'Recojo Privado y Exploración del Valle Sagrado: Elija entre la Ruta Clásica (ruinas y mercado de Písac) o la Ruta Alternativa (Chinchero, Salineras de Maras y Moray). Ambas incluyen tiempo para almorzar en Urubamba y visita a Ollantaytambo.' },
        { time: 'Día 1 - 03:37 PM', activity: 'Tren Escénico a Aguas Calientes: Aborde el tren desde la estación de Ollantaytambo. A su llegada, nuestro equipo lo asistirá para instalarse en su hotel de 3 estrellas.' },
        { time: 'Día 2 - 07:00 AM', activity: 'Ascenso en Bus y Entrada a Machu Picchu: Su guía privado lo acompaña desde el hotel a la estación de bus para el viaje de 30 minutos al santuario.' },
        { time: 'Día 2 - 08:30 AM', activity: 'Visita Guiada Privada: Disfrute de un tour de 2 horas por el Circuito 2, la ruta más panorámica y completa dentro de la ciudadela.' },
        { time: 'Día 2 - 12:30 PM', activity: 'Tiempo Libre y Retorno: Regreso a Aguas Calientes para almorzar. Luego, tren de retorno a Ollantaytambo donde su transporte privado lo espera para llevarlo a Cusco.' }
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
        'Carné de estudiante vigente (si corresponde)',
        'Mochila pequeña (máximo 5kg permitidos en el tren)',
        'Zapatos de caminata cómodos y resistentes',
        'Protección solar (gorra, lentes, bloqueador)',
        'Poncho de lluvia o chaqueta impermeable',
        'Efectivo para comidas y recuerdos'
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
    image: '/tour-maras-moray.png',
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
      overview: 'Embark on a private half-day journey to two of the most fascinating archaeological sites in the Sacred Valley: Maras Salt Mines and Moray. This exclusive Maras & Moray Private Tour is designed for travelers who want flexibility, comfort, and a deeper cultural experience without rushing or large groups.\n\nYou will visit the ancient salt mines of Maras, where thousands of salt ponds have been used by local families since pre-Inca times, and continue to Moray, an impressive Inca site formed by circular terraces believed to have functioned as an agricultural experimentation center.',
      itinerary: [
        { time: '08:00 AM', activity: 'Hotel Pickup & Chinchero: We begin with a private pickup from your hotel in Cusco and head towards the Chinchero textile center to learn about traditional weaving.' },
        { time: '09:30 AM', activity: 'Moray Exploration: Visit the circular agricultural terraces, an ancient Inca laboratory designed for crop experimentation at different microclimates.' },
        { time: '11:00 AM', activity: 'Maras Salt Mines: Explore the thousands of pre-Inca salt pools still harvested by local families using traditional evaporation methods.' },
        { time: '01:00 PM', activity: 'Scenic Drive back: Relax in your private vehicle while enjoying the panoramic views of the snow-capped Andes on your way back to Cusco.' },
        { time: '02:30 PM', activity: 'Arrival in Cusco: We drop you off directly at your hotel, leaving you the rest of the afternoon free.' }
      ],
      includes: [
        'Private tourist transportation specialized for Sacred Valley roads',
        'Professional licensed local guide (English or Spanish)',
        'Personalized experience adapted to your pace',
        'No mandatory shopping stops or tourist traps'
      ],
      excludes: [
        'Moray entrance fee (Boleto Turístico - 70 soles)',
        'Maras Salt Mines entrance fee (20 soles - cash only)',
        'Meals and beverages',
        'Personal expenses'
      ],
      packing: [
        'Light hiking pants and fleece jacket',
        'Comfortable walking shoes or sneakers',
        'Sun protection (hat, sunglasses, sunscreen)',
        'Water and light snacks',
        'Rain jacket or poncho (especially Dec-Apr)',
        'Power bank for phone/camera batteries'
      ],
      highlights: [
        'Private & Personalized Exploration: Move at your own rhythm without group pressure.',
        'Strategic Timing: We leave at 8:00 AM to avoid the peak visitor hours at the sites.',
        'Living Culture: See salt harvested using centuries-old techniques passed down for generations.',
        'Efficient Half-Day Design: Perfect for combining with other tours or free time in Cusco.',
        'Expert Storytelling: Our guides focus on real history and cultural depth, not just surface facts.'
      ],
      tips: [
        'Bring cash in small bills (Soles) for entrance fees; card payments are not accepted at the sites.',
        'Spend 1-2 days acclimatizing in Cusco before the tour (elevations reach 3,500m).',
        'Punctual departure at 8:00 AM is essential to get the best light for photography at the Salt Mines.',
        'Altitude drains batteries quickly; carry a power bank to ensure you don’t miss any photos.',
        'UV radiation is very strong in the Andes; sun protection is non-negotiable even if it’s cloudy.',
        'Respect the local workers: The Maras Salt Mines are a living workplace for hundreds of families.'
      ]
    },
    es: {
      title: 'Tour Privado Maras y Moray',
      description: 'Viaje exclusivo de medio día a las minas de sal y terrazas circulares incas.',
      overview: 'Embárquese en un viaje privado de medio día a dos de los sitios arqueológicos más fascinantes del Valle Sagrado: las Salineras de Maras y Moray. Este tour exclusivo está diseñado para viajeros que buscan flexibilidad, comodidad y una experiencia cultural profunda sin las prisas de los grupos grandes.\n\nVisitará las antiguas minas de sal de Maras, donde miles de pozos de sal han sido utilizados por familias locales desde la época pre-inca, y continuará hacia Moray, un impresionante sitio inca formado por terrazas circulares que se cree funcionó como un centro de experimentación agrícola.',
      itinerary: [
        { time: '08:00 AM', activity: 'Recojo del Hotel y Chinchero: Comenzamos con el recojo privado de su hotel en Cusco y nos dirigimos al centro textil de Chinchero para aprender sobre el tejido tradicional.' },
        { time: '09:30 AM', activity: 'Exploración de Moray: Visite las terrazas agrícolas circulares, un antiguo laboratorio inca diseñado para experimentar con cultivos en diferentes microclimas.' },
        { time: '11:00 AM', activity: 'Salineras de Maras: Explore los miles de pozos de sal pre-incas que aún son cosechados por familias locales mediante métodos tradicionales.' },
        { time: '01:00 PM', activity: 'Viaje Escénico de Retorno: Relájese en su vehículo privado mientras disfruta de vistas panorámicas de los Andes nevados en su regreso a Cusco.' },
        { time: '02:30 PM', activity: 'Llegada a Cusco: Lo dejamos directamente en su hotel, dejándole el resto de la tarde libre.' }
      ],
      includes: [
        'Transporte turístico privado especializado para las rutas del Valle Sagrado',
        'Guía profesional certificado local (inglés o español)',
        'Experiencia personalizada adaptada a su propio ritmo',
        'Sin paradas de compras obligatorias ni trampas para turistas'
      ],
      excludes: [
        'Entrada a Moray (Boleto Turístico - 70 soles)',
        'Entrada a las Salineras de Maras (20 soles - solo efectivo)',
        'Comidas y bebidas',
        'Gastos personales'
      ],
      packing: [
        'Pantalones ligeros de caminata y chaqueta polar',
        'Zapatos cómodos para caminar o zapatillas',
        'Protección solar (gorra, lentes, bloqueador)',
        'Agua y snacks ligeros',
        'Chaqueta impermeable o poncho (especialmente de dic-abr)',
        'Batería externa (Power bank) para celular o cámara'
      ],
      highlights: [
        'Exploración Privada y Personalizada: Muévase a su propio ritmo sin la presión de un grupo.',
        'Horario Estratégico: Salimos a las 8:00 AM para evitar las horas pico de visitantes en los sitios.',
        'Cultura Viva: Vea cómo se cosecha la sal usando técnicas centenarias heredadas por generaciones.',
        'Diseño Eficiente de Medio Día: Ideal para combinar con otros tours o tiempo libre en Cusco.',
        'Narración de Expertos: Nuestros guías se enfocan en la historia real y la profundidad cultural.'
      ],
      tips: [
        'Lleve efectivo en billetes pequeños (Soles) para las entradas; no se aceptan tarjetas en los sitios.',
        'Pase 1-2 días aclimatándose en Cusco antes del tour (la altitud llega a 3,500m).',
        'La puntualidad a las 8:00 AM es esencial para obtener la mejor luz para fotos en las Salineras.',
        'La altitud agota las baterías rápido; lleve un power bank para no perderse ninguna foto.',
        'La radiación UV es muy fuerte en los Andes; la protección solar es indispensable.',
        'Respete a los trabajadores: Las Salineras son un lugar de trabajo vivo para cientos de familias.'
      ]
    }

  },
  {
    id: 5,
    slug: 'palccoyo-rainbow-mountain',
    image: '/tour-palccoyo.png',
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
      title: 'Palccoyo Rainbow Mountain Private Tour',
      description: 'A less crowded, equally stunning colorful mountain experience with a gentle hike.',
      overview: 'Palccoyo Rainbow Mountain is one of the most scenic and accessible rainbow mountains in the Cusco region, offering colorful landscapes without the extreme altitude and crowds of Vinicunca. Located at approximately 4,900 meters (16,076 ft), Palccoyo is ideal for travelers looking for a rewarding high-Andean experience with a gentler hike.\n\nOur private tour is designed for travelers who value comfort, flexibility, and personalized service. Unlike shared tours with rigid schedules, this experience allows you to travel at your own pace, enjoy multiple viewpoints, and adapt better to the altitude.',
      itinerary: [
        { time: '04:30 AM', activity: 'Private Pickup: We pick you up directly from your hotel in a private vehicle for a smooth start to the day.' },
        { time: '06:30 AM', activity: 'Breakfast in Cusipata: A brief stop to enjoy a comforting breakfast and purchase any last-minute supplies like water or snacks.' },
        { time: '08:00 AM', activity: 'Scenic Drive to Trailhead: Journey through the Cusco highlands (approx. 1.5h) observing daily life in traditional Andean communities.' },
        { time: '09:30 AM', activity: 'Gentle Hike to Viewpoints: Start the excursion (at 4,700m). A gradual 40-minute walk takes you to the main summit and viewpoints.' },
        { time: '11:00 AM', activity: 'Palccoyo Summit & Stone Forest: Free time at 4,900m to take photos of the multiple rainbow mountains and explore the unique "stone forest".' },
        { time: '01:00 PM', activity: 'Lunch & Return: Begin the descent to enjoy a comforting local lunch before heading back to Cusco.' },
        { time: '05:00 PM', activity: 'Arrival in Cusco: We drop you off at your hotel after a full day of high-Andean exploration.' }
      ],
      includes: [
        'Professional licensed private guide specialized in high-altitude terrain',
        'Private tourist transportation for your group only',
        'Hot breakfast and local lunch included',
        'Official entrance ticket to the Palccoyo Sanctuary',
        'Professional trekking poles (carbon)',
        'Safety equipment: Oxygen tank and first aid kit'
      ],
      excludes: [
        'Staff incentives (optional)',
        'Personal emergency horse (if needed)',
        'Personal expenses'
      ],
      packing: [
        'Waterproof trekking shoes with good grip',
        'Warm layers (thermals, fleece, hat, gloves)',
        'Waterproof jacket or rain poncho',
        'Sun protection (SPF 50+ sunscreen, sunglasses, hat)',
        'Water and energy snacks',
        'Personal medication'
      ],
      highlights: [
        'Crowd-Free Experience: Unlike Vinicunca, Palccoyo offers wide open landscapes and colorful mountains without the massive crowds.',
        'Accessible Adventure: A much gentler hike (approx. 40 mins) compared to other rainbow mountains, ideal for a rewarding experience.',
        'All-Inclusive Logistics: Entrance fees, meals, and safety equipment (oxygen/first aid) are all handled for you.',
        'Expert Guiding: Learn about the unique geological formation of the colors and the cultural importance of these sacred mountains.',
        'Strategic Early Start: We leave at 4:30 AM to ensure the best visibility and avoid weather changes in the afternoon.'
      ],
      tips: [
        'Proper acclimatization is essential: Spend at least 2–3 days in Cusco or the Sacred Valley before this high-altitude tour (4,900m).',
        'Mountain weather changes rapidly: Dress in layers (thermal, fleece, waterproof) to stay comfortable as temperatures fluctuate.',
        'The hike is technically easy but the altitude makes it feel more demanding; walk slowly and stay well hydrated.',
        'Strong sun protection is non-negotiable: UV radiation at 4,900m is extreme even on cloudy days.',
        'Carry a power bank: Cold temperatures and high altitude drain phone and camera batteries significantly faster.',
        'Respect the environment: Stay on the marked trails and help preserve the delicate ecosystem of the colorful mountains.'
      ]
    },
    es: {
      title: 'Tour Privado Montaña Palccoyo',
      description: 'Una experiencia de montaña multicolor menos concurrida, igualmente impresionante y con una caminata suave.',
      overview: 'La Montaña de Colores Palccoyo es una de las más escénicas y accesibles de la región de Cusco, ofreciendo paisajes coloridos sin la altitud extrema y las multitudes de Vinicunca. Situada a aproximadamente 4,900 metros, Palccoyo es ideal para viajeros que buscan una experiencia altoandina gratificante con una caminata más suave.\n\nNuestro tour privado está diseñado para quienes valoran la comodidad y la flexibilidad. A diferencia de los tours compartidos con horarios rígidos, esta experiencia le permite viajar a su propio ritmo, disfrutar de múltiples miradores y adaptarse mejor a la altitud.',
      itinerary: [
        { time: '04:30 AM', activity: 'Recojo Privado: Lo recogemos directamente de su hotel en un vehículo privado para un inicio de día cómodo y tranquilo.' },
        { time: '06:30 AM', activity: 'Desayuno en Cusipata: Una breve parada para disfrutar de un desayuno reconfortante y comprar suministros de último minuto.' },
        { time: '08:00 AM', activity: 'Viaje Escénico al Inicio del Sendero: Viaje a través de las tierras altas de Cusco (aprox. 1.5h) observando la vida diaria en comunidades andinas.' },
        { time: '09:30 AM', activity: 'Caminata Suave a los Miradores: Inicio de la excursión (a 4,700m). Una caminata gradual de 40 minutos lo llevará a la cumbre y miradores principales.' },
        { time: '11:00 AM', activity: 'Cumbre Palccoyo y Bosque de Piedras: Tiempo libre a 4,900m para tomar fotos de las múltiples montañas de colores y explorar el "bosque de piedras".' },
        { time: '01:00 PM', activity: 'Almuerzo y Retorno: Iniciamos el descenso para disfrutar de un almuerzo local reconfortante antes de regresar a Cusco.' },
        { time: '05:00 PM', activity: 'Llegada a Cusco: Lo dejamos en su hotel después de un día completo de exploración altoandina.' }
      ],
      includes: [
        'Guía profesional certificado privado especializado en terrenos de altura',
        'Transporte turístico privado exclusivo para su grupo',
        'Desayuno caliente y almuerzo local incluidos',
        'Boleto de entrada oficial al Santuario de Palccoyo',
        'Bastones de trekking profesionales (carbono)',
        'Equipo de seguridad: Tanque de oxígeno y botiquín de primeros auxilios'
      ],
      excludes: [
        'Propinas (opcional)',
        'Caballo de emergencia personal (si se requiere)',
        'Gastos personales'
      ],
      packing: [
        'Zapatos de trekking impermeables con buen agarre',
        'Capas de ropa abrigadora (térmica, polar, gorro, guantes)',
        'Chaqueta impermeable o poncho de lluvia',
        'Protección solar (bloqueador SPF 50+, lentes de sol, gorro)',
        'Agua y snacks energéticos',
        'Medicamento personal'
      ],
      highlights: [
        'Experiencia sin Multitudes: A diferencia de Vinicunca, Palccoyo ofrece paisajes abiertos y montañas coloridas sin las masas de turistas.',
        'Aventura Accesible: Una caminata mucho más suave (aprox. 40 min) comparada con otras montañas de colores.',
        'Logística Todo Incluido: Entradas, comidas y equipo de seguridad (oxígeno/botiquín) están totalmente cubiertos.',
        'Guía Experto: Aprenda sobre la formación geológica única de los colores y la importancia cultural de estas montañas sagradas.',
        'Inicio Temprano Estratégico: Salimos a las 4:30 AM para asegurar la mejor visibilidad y evitar cambios climáticos por la tarde.'
      ],
      tips: [
        'La aclimatación previa es esencial: Pase al menos 2–3 días en Cusco o el Valle Sagrado antes de este tour a 4,900m.',
        'El clima de montaña cambia rápido: Vístase en capas (térmica, polar, impermeable) para estar cómodo ante las fluctuaciones de temperatura.',
        'La caminata es técnicamente fácil pero la altitud la hace sentir exigente; camine despacio y manténgase bien hidratado.',
        'La protección solar fuerte es innegociable: La radiación UV a 4,900m es extrema incluso en días nublados.',
        'Lleve un power bank: Las bajas temperaturas y la altitud agotan las baterías de celulares y cámaras mucho más rápido.',
        'Respete el medio ambiente: Permanezca en los senderos marcados y ayude a preservar el delicado ecosistema.'
      ]
    }

  },
  {
    id: 6,
    slug: 'south-valley-private-tour',
    image: '/tour-south-valley.png',
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
      title: 'South Valley Private Tour',
      description: 'Exclusive visit to Tipón, Pikillaqta & Andahuaylillas – exploring Inca, Wari, and Colonial history.',
      overview: 'The South Valley Private Tour from Cusco is a half-day private experience designed for travelers who want to explore important Inca and colonial sites without crowds or rushed schedules. Instead of following the classic tourist routes, this tour focuses on Cusco’s southern region, offering deeper historical context and a more relaxed pace with a private local guide.\n\nYou will visit Tipón, an impressive Inca hydraulic complex; Pikillaqta, a vast pre-Inca city built by the Wari civilization; and Andahuaylillas, home to the "Sistine Chapel of the Americas," one of the most important colonial churches in Peru.',
      itinerary: [
        { time: '08:00 AM', activity: 'Hotel Pickup & Saylla: Direct pickup from your hotel in Cusco. We drive south passing through Saylla, a village famous for its traditional fried pork (chicharrón).' },
        { time: '09:00 AM', activity: 'Tipón Archaeological Site: Explore the masterfully engineered Inca hydraulic complex, including agricultural terraces and active water channels.' },
        { time: '10:30 AM', activity: 'Oropesa Traditional Bread: Stop in the "Bread Capital of Cusco" to visit a traditional bakery and taste the famous Pan de Oropesa.' },
        { time: '11:15 AM', activity: 'Pikillaqta (Wari City): Visit the vast pre-Inca urban center known for its advanced administrative buildings and long stone streets.' },
        { time: '12:30 PM', activity: 'Andahuaylillas Church: Discover the "Sistine Chapel of the Americas," admired for its stunning baroque murals and colonial art.' },
        { time: '03:00 PM', activity: 'Return to Cusco: Arrival back at your hotel, concluding your culturally rich half-day journey.' }
      ],
      includes: [
        'Private tourist transportation specialized for a smooth journey',
        'Professional licensed guide (English or Spanish)',
        'Personalized pace adapted to your interests',
        'Safety equipment: Oxygen tank and first aid kit'
      ],
      excludes: [
        'Partial Tourist Ticket for Tipón & Pikillaqta (70 soles)',
        'Entrance to Andahuaylillas Church (15 soles)',
        'Meals and beverages',
        'Gratuities (optional)'
      ],
      packing: [
        'Sun hat and high-SPF sun protection cream',
        'Waterproof jacket or rain poncho (especially Nov-Mar)',
        'Comfortable, sturdy walking shoes',
        'Water and light snacks',
        'Camera or fully charged phone'
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
      title: 'Tour Privado Valle Sur',
      description: 'Visita exclusiva a Tipón, Pikillaqta y Andahuaylillas: explorando la historia Inca, Wari y Colonial.',
      overview: 'El Tour Privado al Valle Sur desde Cusco es una experiencia de medio día diseñada para viajeros que desean explorar importantes sitios incas y coloniales sin multitudes ni horarios apresurados. En lugar de seguir las rutas turísticas clásicas, este tour se enfoca en la región sur de Cusco, ofreciendo un contexto histórico más profundo y un ritmo más relajado con un guía local privado.\n\nVisitará Tipón, un impresionante complejo hidráulico inca; Pikillaqta, una vasta ciudad pre-inca construida por la civilización Wari; y Andahuaylillas, hogar de la "Capilla Sixtina de América", una de las iglesias coloniales más importantes de Perú.',
      itinerary: [
        { time: '08:00 AM', activity: 'Recojo del Hotel y Saylla: Recojo directo de su hotel en Cusco. Nos dirigimos al sur pasando por Saylla, un pueblo famoso por sus chicharrones tradicionales.' },
        { time: '09:00 AM', activity: 'Sitio Arqueológico de Tipón: Explore el complejo hidráulico inca con sus impresionantes terrazas agrícolas y canales de agua activos.' },
        { time: '10:30 AM', activity: 'Pan Tradicional de Oropesa: Parada en la "Capital del Pan" para visitar una panadería tradicional y probar el famoso Pan de Oropesa.' },
        { time: '11:15 AM', activity: 'Pikillaqta (Ciudad Wari): Visite el vasto centro urbano pre-inca conocido por sus edificios administrativos y largas calles de piedra.' },
        { time: '12:30 PM', activity: 'Iglesia de Andahuaylillas: Descubra la "Capilla Sixtina de América", admirada por sus murales barrocos y arte colonial.' },
        { time: '03:00 PM', activity: 'Retorno a Cusco: Llegada a su hotel, concluyendo su viaje cultural de medio día.' }
      ],
      includes: [
        'Transporte turístico privado especializado para un viaje fluido',
        'Guía profesional certificado (inglés o español)',
        'Ritmo personalizado adaptado a sus intereses',
        'Equipo de seguridad: Tanque de oxígeno y botiquín de primeros auxilios'
      ],
      excludes: [
        'Boleto Turístico Parcial para Tipón y Pikillaqta (70 soles)',
        'Entrada a la Iglesia de Andahuaylillas (15 soles)',
        'Comidas y bebidas',
        'Propinas (opcional)'
      ],
      packing: [
        'Sombrero para el sol y bloqueador solar de alta protección',
        'Chaqueta impermeable o poncho de lluvia (especialmente de nov-mar)',
        'Zapatos cómodos y resistentes para caminar',
        'Agua y snacks ligeros',
        'Cámara o celular cargado'
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
    image: '/tour-sacred-valley.png',
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
      title: 'Sacred Valley Private Tour',
      description: 'Full-day private exploration of the Inca heartland with flexible itinerary options.',
      overview: 'Explore the Sacred Valley of the Incas on a full-day private tour designed for travelers who want flexibility, comfort, and a deeper cultural experience. Operated by Inkaland Explorers, this tour is guided by professional experts who live and work in the region.\n\nYou will visit the most important archaeological and cultural sites of the Sacred Valley, choosing between two specialized routes. Along the way, you will discover impressive Inca terraces, ancient temples, traditional Andean villages, and vibrant local markets, all at your own pace.',
      itinerary: [
        { time: '07:00 AM', activity: 'Private Pickup: We pick you up from your hotel in Cusco to begin the journey before the main crowds arrive.' },
        { time: 'Option 1: Classic', activity: 'Includes visits to a local alpaca farm, the Pisac ruins and traditional market, followed by lunch in Urubamba, and visits to Ollantaytambo and Chinchero.' },
        { time: 'Option 2: Super Valley', activity: 'An upgraded route ($15 extra) including Chinchero, the Maras Salt Mines, Moray circular terraces, lunch in Urubamba, Ollantaytambo, and Pisac ruins.' },
        { time: '01:00 PM', activity: 'Lunch in Urubamba: A one-hour stop at a local restaurant to enjoy regional cuisine and recharge for the afternoon visits.' },
        { time: '06:30 PM', activity: 'Return to Cusco: Arrival back at your hotel after a full day of historical and cultural discovery.' }
      ],
      includes: [
        'Private tourist transportation for your group only',
        'Professional licensed guide (English or Spanish)',
        'Strategic early departure to avoid crowds',
        'Personalized pace adapted to your interests'
      ],
      excludes: [
        'Partial Tourist Ticket for the Valley (70 soles)',
        'Entrance to Maras Salt Mines (20 soles - for Option 2)',
        'Lunch in Urubamba ($15–$25 per person)',
        'Personal expenses'
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
      title: 'Tour Privado Valle Sagrado',
      description: 'Exploración privada de día completo del corazón Inca con opciones de itinerario flexible.',
      overview: 'Explore el Valle Sagrado de los Incas en un tour privado de día completo diseñado para viajeros que buscan flexibilidad, comodidad y una experiencia cultural profunda. Operado por Inkaland Explorers, este tour es dirigido por expertos profesionales que viven y trabajan en la región.\n\nVisitará los sitios arqueológicos y culturales más importantes del Valle Sagrado, eligiendo entre dos rutas especializadas. En el camino, descubrirá impresionantes terrazas incas, templos antiguos, pueblos andinos tradicionales y mercados locales vibrantes, todo a su propio ritmo.',
      itinerary: [
        { time: '07:00 AM', activity: 'Recojo Privado: Lo recogemos de su hotel en Cusco para iniciar el viaje antes de que lleguen las multitudes.' },
        { time: 'Opción 1: Clásica', activity: 'Incluye visitas a una granja de alpacas local, las ruinas y el mercado de Písac, seguido de almuerzo en Urubamba, y visitas a Ollantaytambo y Chinchero.' },
        { time: 'Opción 2: Super Valle', activity: 'Una ruta mejorada ($15 extra) que incluye Chinchero, las Salineras de Maras, las terrazas de Moray, almuerzo en Urubamba, Ollantaytambo y ruinas de Písac.' },
        { time: '01:00 PM', activity: 'Almuerzo en Urubamba: Una parada de una hora en un restaurante local para disfrutar de la gastronomía regional y recargar energías.' },
        { time: '06:30 PM', activity: 'Retorno a Cusco: Llegada a su hotel después de un día completo de descubrimiento histórico y cultural.' }
      ],
      includes: [
        'Transporte turístico privado exclusivo para su grupo',
        'Guía profesional certificado (inglés o español)',
        'Salida temprana estratégica para evitar multitudes',
        'Ritmo personalizado adaptado a sus intereses'
      ],
      excludes: [
        'Boleto Turístico Parcial para el Valle (70 soles)',
        'Entrada a las Salineras de Maras (20 soles - para Opción 2)',
        'Almuerzo en Urubamba ($15–$25 por persona)',
        'Gastos personales'
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
    image: '/tour-vinicunca.png',
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
      title: 'Rainbow Mountain Private Tour',
      description: 'The iconic multi-colored Vinicunca mountain explored in private comfort with high-altitude support.',
      overview: 'Experience Rainbow Mountain in a more comfortable, flexible, and personal way with our Rainbow Mountain Private Tour from Cusco. This exclusive experience is designed for travelers who want to avoid crowds, manage the altitude properly, and enjoy one of Peru’s most iconic landscapes at their own pace.\n\nVinicunca is located at 5,036 meters (16,522 ft) above sea level, making it one of the highest tourist attractions in Peru. Our private service allows you to adjust departure times, walk at a comfortable rhythm, and spend more time enjoying the views of the surrounding Andean valleys.',
      itinerary: [
        { time: '03:00 AM', activity: 'Private Pickup: Early departure from your hotel in Cusco to beat the large group tours.' },
        { time: '05:00 AM', activity: 'Breakfast in Cusipata: A 2-hour drive leads to a local stop for a nutritious breakfast to fuel your ascent.' },
        { time: '06:30 AM', activity: 'Start of Hike: Begin the ascent to the summit. The hike takes approx. 2 hours depending on your rhythm and conditions.' },
        { time: '08:30 AM', activity: 'Rainbow Mountain Summit: Reach 5,036m. Time to explore, take photos, and enjoy the grand views of the Ausangate glacier.' },
        { time: '10:30 AM', activity: 'Descent to Trailhead: Begin the return walk to our transportation for a smooth journey back.' },
        { time: '12:30 PM', activity: 'Comforting Lunch: Return to Cusipata for a well-deserved local lunch before heading back to Cusco.' },
        { time: '05:00 PM', activity: 'Arrival in Cusco: Drop off at your hotel after a challenging and rewarding day.' }
      ],
      includes: [
        'Private tourist transportation for your group only',
        'Professional licensed private guide specialized in high-altitude support',
        'Nutritious breakfast and local lunch',
        'Official entrance ticket to Vinicunca',
        'Professional trekking poles (carbon)',
        'Safety equipment: Oxygen tank and first aid kit'
      ],
      excludes: [
        'Staff incentives (optional)',
        'Personal emergency horse (available for rent locally)',
        'Personal expenses'
      ],
      packing: [
        'Waterproof hiking shoes with good grip',
        'Warm layers (thermals, fleece, hat, gloves)',
        'Waterproof jacket or rain poncho',
        'Sun protection (SPF 50+ sunscreen, sunglasses, hat)',
        'Water (staying hydrated is crucial)',
        'Energy snacks and personal medication'
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
      title: 'Tour Privado Montaña de Colores',
      description: 'La icónica montaña Vinicunca explorada en comodidad privada con soporte especializado para la altitud.',
      overview: 'Experimente la Montaña de Colores de una manera más cómoda, flexible y personal con nuestro Tour Privado desde Cusco. Esta experiencia exclusiva está diseñada para viajeros que desean evitar multitudes, manejar la altitud adecuadamente y disfrutar de uno de los paisajes más icónicos de Perú a su propio ritmo.\n\nVinicunca se encuentra a 5,036 metros sobre el nivel del mar, siendo una de las atracciones más altas de Perú. Nuestro servicio privado le permite ajustar el ritmo de caminata y pasar más tiempo disfrutando de las vistas de los valles andinos circundantes.',
      itinerary: [
        { time: '03:00 AM', activity: 'Recojo Privado: Salida temprana de su hotel en Cusco para adelantarnos a los grupos de tours masivos.' },
        { time: '05:00 AM', activity: 'Desayuno en Cusipata: Viaje de 2 horas hasta una parada local para un desayuno nutritivo antes del ascenso.' },
        { time: '06:30 AM', activity: 'Inicio de la Caminata: Comience el ascenso hacia la cumbre. La caminata dura aprox. 2 horas dependiendo de su ritmo.' },
        { time: '08:30 AM', activity: 'Cumbre Montaña de Colores: Llegada a 5,036m. Tiempo para explorar, tomar fotos y disfrutar de las vistas del nevado Ausangate.' },
        { time: '10:30 AM', activity: 'Descenso al Inicio: Iniciamos la caminata de retorno hacia nuestro transporte para un viaje fluido de regreso.' },
        { time: '12:30 PM', activity: 'Almuerzo Reconfortante: Retorno a Cusipata para un almuerzo local bien merecido antes de volver a Cusco.' },
        { time: '05:00 PM', activity: 'Llegada a Cusco: Entrega en su hotel después de un día desafiante y gratificante.' }
      ],
      includes: [
        'Transporte turístico privado exclusivo para su grupo',
        'Guía profesional certificado especializado en soporte de altura',
        'Desayuno nutritivo y almuerzo local',
        'Boleto de entrada oficial a Vinicunca',
        'Bastones de trekking profesionales (carbono)',
        'Equipo de seguridad: Tanque de oxígeno y botiquín de primeros auxilios'
      ],
      excludes: [
        'Propinas (opcional)',
        'Caballo de emergencia personal (disponible para alquiler local)',
        'Gastos personales'
      ],
      packing: [
        'Zapatos de trekking impermeables con buen agarre',
        'Capas de ropa abrigadora (térmica, polar, gorro, guantes)',
        'Chaqueta impermeable o poncho de lluvia',
        'Protección solar (bloqueador SPF 50+, lentes de sol, gorro)',
        'Agua (mantenerse hidratado es vital)',
        'Snacks energéticos y medicamento personal'
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
    image: '/hero-cusco.png',
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
      overview: 'The Private Cusco City Tour Half Day is the ideal way to explore the historic capital of the Inca Empire with comfort, flexibility, and expert local insight. Designed for travelers who want a deeper understanding of Cusco without rushing or large groups, this private experience allows you to discover the city at your own pace.\n\nCusco sits at over 3,300 meters (10,826 ft) above sea level and blends Inca foundations with colonial architecture, living traditions, and vibrant local life. On this half-day private city tour, you’ll visit the most important highlights, including the Qorikancha (Temple of the Sun) and the monumental fortress of Sacsayhuaman.',
      itinerary: [
        { time: '02:00 PM', activity: 'Hotel Pickup: Punctual pickup from your hotel in Cusco in a private vehicle to begin our exploration.' },
        { time: '02:30 PM', activity: 'Qorikancha (Temple of the Sun): Visit the spiritual heart of the Inca Empire, famous for its perfect stonework and colonial fusion.' },
        { time: '03:15 PM', activity: 'Sacsayhuaman Fortress: Explore the massive stone architecture and strategic viewpoints overlooking the entire valley.' },
        { time: '04:30 PM', activity: 'Qenqo, Pucapucara & Tambomachay: Visit the labyrinthine ceremonial temple, the "Red Fortress" lookout, and the Inca water rituals site.' },
        { time: '06:00 PM', activity: 'Arrival at Hotel: Return comfortably to your hotel after a culturally rich introduction to Cusco.' }
      ],
      includes: [
        'Professional licensed private guide specialized in Cusco history',
        'Private tourist transportation specialized for the city circuit',
        'Personalized pace adapted to your interests and altitude adjustment',
        'Door-to-door service with flexible pickup/drop-off'
      ],
      excludes: [
        'Cusco Tourist Ticket (BTG Partial - 70 soles)',
        'Entry to Qorikancha Temple (20 soles for foreigners)',
        'Gratuities (optional)',
        'Personal expenses'
      ],
      packing: [
        'Sun hat and high-SPF sun protection cream',
        'Light waterproof jacket or rain poncho',
        'Comfortable walking shoes with good grip',
        'Water (staying hydrated is essential at 3,400m)',
        'Camera or fully charged phone'
      ],
      highlights: [
        'Personalized Historical Experience: Your private local guide adapts the storytelling to your interests, from Inca engineering to colonial art.',
        'Efficient Half-Day Schedule: Visit all 5 major sites (Qorikancha, Sacsayhuaman, Qenqo, Pucapucara, and Tambomachay) without feeling rushed.',
        'No Commercial Stops: We follow a strict policy of no forced shopping stops, ensuring your time is dedicated exclusively to history and culture.',
        'Comfortable Logistics: Relax in your private vehicle while we handle all city traffic and navigation between archaeological sites.',
        'In-Depth Storytelling: Understand the real purpose behind each site, such as the ceremonial water channels of Tambomachay.'
      ],
      tips: [
        'Bring cash in Soles for the Tourist Ticket (70 soles) and Qorikancha (20 soles); card payments are not accepted at these sites.',
        'Acclimatize in Cusco for 1–2 days before the tour; although easy, walking at 3,700m in Sacsayhuaman can be tiring.',
        'The 2:00 PM start is standard, but as a private tour, we can adjust the timing to fit your flight arrival or other plans.',
        'Wear sturdy walking shoes: Some areas like Sacsayhuaman and Qenqo have uneven stone paths and ancient staircases.',
        'UV radiation is intense in the Andean highlands; protection is non-negotiable even if it appears cloudy.',
        'Stay hydrated: The dry mountain air can lead to dehydration quickly, especially during your first days in the city.'
      ]
    },
    es: {
      title: 'City Tour Privado Cusco',
      description: 'Exploración exclusiva de la capital Inca, incluyendo el Templo del Sol y las fortalezas arqueológicas circundantes.',
      overview: 'El City Tour Privado de medio día es la forma ideal de explorar la capital histórica del Imperio Inca con comodidad, flexibilidad y conocimiento experto local. Diseñado para viajeros que desean una comprensión profunda de Cusco sin prisas ni grupos grandes, esta experiencia privada le permite descubrir la ciudad a su propio ritmo.\n\nCusco se encuentra a más de 3,300 metros sobre el nivel del mar y mezcla cimientos incas con arquitectura colonial, tradiciones vivas y una vibrante vida local. En este tour visitará los lugares más destacados, incluyendo el Qorikancha (Templo del Sol) y la monumental fortaleza de Sacsayhuaman.',
      itinerary: [
        { time: '02:00 PM', activity: 'Recojo del Hotel: Recojo puntual de su hotel en Cusco en un vehículo privado para comenzar nuestra exploración.' },
        { time: '02:30 PM', activity: 'Qorikancha (Templo del Sol): Visite el corazón espiritual del Imperio Inca, famoso por su perfección en piedra y fusión colonial.' },
        { time: '03:15 PM', activity: 'Fortaleza de Sacsayhuaman: Explore la arquitectura monumental de piedra y los miradores estratégicos sobre todo el valle.' },
        { time: '04:30 PM', activity: 'Qenqo, Pucapucara y Tambomachay: Visite el templo ceremonial laberíntico, el mirador "Fortaleza Roja" y el sitio de rituales de agua.' },
        { time: '06:00 PM', activity: 'Llegada al Hotel: Regreso cómodo a su hotel después de una introducción culturalmente rica de Cusco.' }
      ],
      includes: [
        'Guía profesional certificado privado especializado en historia de Cusco',
        'Transporte turístico privado especializado para el circuito de la ciudad',
        'Ritmo personalizado adaptado a sus intereses y aclimatación',
        'Servicio puerta a puerta con recojo y entrega flexible'
      ],
      excludes: [
        'Boleto Turístico de Cusco (BTG Parcial - 70 soles)',
        'Entrada al Templo de Qorikancha (20 soles para extranjeros)',
        'Propinas (opcional)',
        'Gastos personales'
      ],
      packing: [
        'Sombrero para el sol y bloqueador solar de alta protección',
        'Chaqueta impermeable ligera o poncho de lluvia',
        'Zapatos de caminata cómodos con buen agarre',
        'Agua (la hidratación es esencial a 3,400m)',
        'Cámara o celular cargado'
      ],
      highlights: [
        'Experiencia Histórica Personalizada: Su guía privado adapta la narrativa a sus intereses, desde ingeniería inca hasta arte colonial.',
        'Horario Eficiente de Medio Día: Visite los 5 sitios principales (Qorikancha, Sacsayhuaman, Qenqo, Pucapucara y Tambomachay) sin prisas.',
        'Sin Paradas Comerciales: Seguimos una política estricta de no paradas de compras forzadas, dedicando el tiempo exclusivamente a la cultura.',
        'Logística Cómoda: Relájese en su vehículo privado mientras nosotros manejamos el tráfico de la ciudad y la navegación.',
        'Narrativa Profunda: Entienda el propósito real detrás de cada sitio, como los canales ceremoniales de agua en Tambomachay.'
      ],

      tips: [
        'Lleve efectivo en Soles para el Boleto Turístico (70 soles) y Qorikancha (20 soles); no aceptan tarjetas.',
        'Aclimatarse en Cusco por 1–2 días antes; aunque es fácil, caminar a 3,700m en Sacsayhuaman puede ser cansado.',
        'El inicio a las 2:00 PM es estándar, pero al ser privado, podemos ajustar el horario según sus planes o llegada de vuelo.',
        'Use zapatos resistentes: Áreas como Sacsayhuaman y Qenqo tienen senderos de piedra irregulares y escalinatas antiguas.',
        'La radiación UV es intensa en los Andes; la protección es indispensable incluso si parece nublado.',
        'Manténgase hidratado: El aire seco de montaña puede deshidratarlo rápido, especialmente en sus primeros días.'
      ]
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
    type: 'Trekking | Adventure',
    departure: 'Cusco Hotels',
    destination: 'Cusco | Ausangate',
    en: {
      title: 'Ausangate 7 Lakes Full Day Hike from Cusco',
      description: 'Explore the emerald lakes at the foot of the mighty Ausangate glacier.',
      overview: 'The Ausangate 7 Lakes hike is a hidden gem for trekking lovers. Located at the base of the sacred Ausangate mountain (the highest in the Cusco region), this private tour takes you through a series of turquoise and emerald lagoons, surrounded by dramatic snow-capped peaks and local alpaca herds.',
      itinerary: [
        { time: '04:00 AM', activity: 'Private Pickup & Drive: 3-hour journey to the community of Pacchanta.' },
        { time: '07:30 AM', activity: 'Breakfast in Pacchanta: Traditional Andean breakfast with the family.' },
        { time: '08:30 AM', activity: 'Start of Trek: Visit 7 high-altitude lakes (Pucacocha, Patacocha, etc.).' },
        { time: '01:30 PM', activity: 'Return to Pacchanta & Hot Springs: Relax in natural thermal baths with views of the glacier.' },
        { time: '03:00 PM', activity: 'Late Lunch & Return: Drive back to Cusco after a local meal.' }
      ],
      includes: ['Private guide', 'Private transport', 'Breakfast & Lunch', 'Hot springs entry', 'Oxygen & First aid'],
      excludes: ['Tips', 'Personal expenses'],
      packing: ['Sturdy hiking boots', 'Warm layers', 'Swimwear', 'Sun protection'],
      highlights: ['7 colorful glacial lakes', 'Close-up views of Mt. Ausangate', 'Pacchanta Hot Springs'],
      tips: ['Highly recommended for advanced hikers due to the altitude (4,800m).']
    },
    es: {
      title: 'Ausangate 7 Lagunas - Full Day',
      description: 'Explore las lagunas de esmeralda a los pies del imponente glaciar Ausangate.',
      overview: 'La caminata de las 7 Lagunas del Ausangate es una joya oculta para los amantes del trekking. Ubicado en la base de la montaña sagrada Ausangate (la más alta de Cusco), este tour privado te lleva por una serie de lagunas de aguas turquesas y esmeraldas.',
      itinerary: [
        { time: '04:00 AM', activity: 'Recojo Privado y Viaje: Trayecto de 3 horas hacia la comunidad de Pacchanta.' },
        { time: '07:30 AM', activity: 'Desayuno en Pacchanta: Desayuno tradicional andino.' },
        { time: '08:30 AM', activity: 'Inicio de Caminata: Visita a las 7 lagunas altoandinas (Pucacocha, Patacocha, etc.).' },
        { time: '01:30 PM', activity: 'Retorno a Pacchanta y Aguas Termales: Relax en pozas termales naturales frente al glaciar.' },
        { time: '03:00 PM', activity: 'Almuerzo Tardío y Retorno: Viaje de regreso a Cusco.' }
      ],
      includes: ['Guía privado', 'Transporte privado', 'Desayuno y Almuerzo', 'Entrada a termales', 'Oxígeno'],
      excludes: ['Propinas', 'Gastos personales'],
      packing: ['Botas de montaña', 'Ropa abrigada', 'Ropa de baño', 'Bloqueador solar'],
      highlights: ['7 lagunas de colores', 'Vistas del nevado Ausangate', 'Aguas termales de Pacchanta'],
      tips: ['Muy recomendado para senderistas con experiencia debido a la altitud (4,800m).']
    }
  },
  {
    id: 12,
    slug: 'classic-cusco-4-days',
    image: '/tour-classic-cusco.png',
    price: '650',
    duration: '4 Days',
    altitude: '2,430m – 3,700m',
    difficulty: 'Easy / Moderate',
    type: 'Cultural | Package',
    departure: 'Cusco Airport',
    destination: 'Cusco | Machu Picchu',
    en: {
      title: 'Classic Cusco 4 Days / 3 Nights',
      description: 'The perfect introduction to the Inca capital and Machu Picchu.',
      overview: 'This 4-day private package covers the essentials of Cusco, the Sacred Valley, and the majestic citadel of Machu Picchu, with all logistics managed for a stress-free experience.',
      itinerary: [
        { time: 'Day 1', activity: 'Arrival in Cusco & Private City Tour (Qorikancha, Sacsayhuaman).' },
        { time: 'Day 2', activity: 'Sacred Valley VIP: Chinchero, Maras Salt Mines, Moray & Ollantaytambo.' },
        { time: 'Day 3', activity: 'Machu Picchu Discovery: Private guided tour of the Lost City.' },
        { time: 'Day 4', activity: 'Leisure morning & Private transfer to the airport.' }
      ],
      includes: ['Airport transfers', 'All private tours', 'Professional guides', '3-star hotels', 'Entrance tickets'],
      excludes: ['Flights', 'Meals not specified', 'Travel insurance'],
      packing: ['Original passport', 'Layers of clothing', 'Comfortable walking shoes'],
      highlights: ['Machu Picchu Visit', 'Sacred Valley exploration', 'In-depth Cusco City Tour'],
      tips: ['Book at least 3 months in advance to secure the best train and entry schedules.']
    },
    es: {
      title: 'Cusco Clásico 4 Días / 3 Noches',
      description: 'La introducción perfecta a la capital Inca y Machu Picchu.',
      overview: 'Este paquete privado de 4 días cubre lo esencial de Cusco, el Valle Sagrado y la majestuosa ciudadela de Machu Picchu, con toda la logística gestionada para una experiencia sin estrés.',
      itinerary: [
        { time: 'Día 1', activity: 'Llegada a Cusco y City Tour Privado (Qorikancha, Sacsayhuaman).' },
        { time: 'Día 2', activity: 'Valle Sagrado VIP: Chinchero, Salineras de Maras, Moray y Ollantaytambo.' },
        { time: 'Día 3', activity: 'Machu Picchu: Visita guiada privada a la Ciudad Perdida.' },
        { time: 'Día 4', activity: 'Mañana libre y traslado privado al aeropuerto.' }
      ],
      includes: ['Traslados aeropuerto', 'Tours privados', 'Guías profesionales', 'Hoteles 3*', 'Entradas'],
      excludes: ['Vuelos', 'Comidas no especificadas', 'Seguro de viaje'],
      packing: ['Pasaporte original', 'Ropa en capas', 'Zapatos cómodos'],
      highlights: ['Visita a Machu Picchu', 'Exploración del Valle Sagrado', 'City Tour Profundo'],
      tips: ['Reserve con 3 meses de anticipación para asegurar los mejores horarios de tren.']
    }
  },
  {
    id: 13,
    slug: 'magical-cusco-5-days',
    image: '/tour-magical-cusco.png',
    price: '780',
    duration: '5 Days',
    altitude: '2,430m – 3,700m',
    difficulty: 'Easy / Moderate',
    type: 'Cultural | Package',
    departure: 'Cusco Airport',
    destination: 'Cusco | Machu Picchu',
    en: {
      title: 'Magical Cusco 5 Days / 4 Nights',
      description: 'Extended exploration of Cusco, the Sacred Valley, and Machu Picchu.',
      overview: 'Our 5-day Magical Cusco package offers a relaxed and comprehensive journey through the heart of the Andes, including a special focus on the Sacred Valley and an overnight stay near Machu Picchu.',
      itinerary: [
        { time: 'Day 1', activity: 'Arrival in Cusco & Afternoon City Tour.' },
        { time: 'Day 2', activity: 'Sacred Valley: Pisac ruins, market and Ollantaytambo. Train to Aguas Calientes.' },
        { time: 'Day 3', activity: 'Machu Picchu: Early private tour and return to Cusco.' },
        { time: 'Day 4', activity: 'Alternative Tour: Choice of South Valley (Tipon/Pikillaqta) or Leisure Day.' },
        { time: 'Day 5', activity: 'Transfer to Cusco Airport.' }
      ],
      includes: ['All accommodation', 'Private transport', 'Specialized guides', 'Trains and buses', 'Official entries'],
      excludes: ['International/local flights', 'Personal spending'],
      packing: ['Passport', 'Sunscreen', 'Walking shoes', 'Small backpack'],
      highlights: ['Sunrise at Machu Picchu possibility', 'In-depth Sacred Valley', 'Flexible Day 4'],
      tips: ['Great for families and travelers wanting a less rushed pace.']
    },
    es: {
      title: 'Cusco Mágico 5 Días / 4 Noches',
      description: 'Exploración extendida de Cusco, el Valle Sagrado y Machu Picchu.',
      overview: 'Nuestro paquete Cusco Mágico de 5 días ofrece un viaje relajado y completo por el corazón de los Andes, con enfoque especial en el Valle Sagrado y pernocte cerca de Machu Picchu.',
      itinerary: [
        { time: 'Día 1', activity: 'Llegada a Cusco y City Tour por la tarde.' },
        { time: 'Día 2', activity: 'Valle Sagrado: Ruinas de Písac y Ollantaytambo. Tren a Aguas Calientes.' },
        { time: 'Día 3', activity: 'Machu Picchu: Tour privado temprano y retorno a Cusco.' },
        { time: 'Día 4', activity: 'Tour Alternativo: Valle Sur (Tipón/Pikillaqta) o día libre.' },
        { time: 'Día 5', activity: 'Traslado al aeropuerto de Cusco.' }
      ],
      includes: ['Todo el alojamiento', 'Transporte privado', 'Guías especializados', 'Trenes y buses', 'Entradas oficiales'],
      excludes: ['Vuelos nacionales/internacionales', 'Gastos personales'],
      packing: ['Pasaporte', 'Bloqueador', 'Zapatos de caminata', 'Mochila pequeña'],
      highlights: ['Posibilidad de amanecer en Machu Picchu', 'Valle Sagrado a fondo', 'Día 4 flexible'],
      tips: ['Ideal para familias y viajeros que buscan un ritmo menos apresurado.']
    }
  }
];

