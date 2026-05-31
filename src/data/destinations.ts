export interface Destination {
  id: number;
  slug: string;
  image: string;
  en: {
    title: string;
    description: string;
    overview: string;
    highlights: string[];
    history: string;
  };
  es: {
    title: string;
    description: string;
    overview: string;
    highlights: string[];
    history: string;
  };
}

export const destinations: Destination[] = [
  {
    id: 1,
    slug: 'cusco',
    image: '/machu-picchu/bc-machu-picchu.png',

    en: {
      title: 'Cusco',
      description: 'The historic capital of the Inca Empire and the spiritual heart of the Andes.',
      overview: 'Cusco, situated at 3,399 meters (11,152 ft) above sea level, is a city where every stone tells a story. Known as the "Navel of the World" by the Incas, it remains one of the most vibrant and historically significant cities in South America. The city seamlessly blends ancient Inca foundations with ornate Spanish colonial architecture, creating a unique urban landscape that has been recognized as a UNESCO World Heritage site.',
      highlights: [
        'Plaza de Armas: The vibrant heart of the city, surrounded by colonial arcades and majestic cathedrals.',
        'Qorikancha: The Temple of the Sun, once the most sacred site in the Inca Empire, now topped by the Santo Domingo Convent.',
        'San Blas: The artisans\' quarter, famous for its narrow cobblestone streets, local galleries, and panoramic views.',
        'Sacsayhuaman: The monumental fortress overlooking the city, a masterpiece of Inca megalithic engineering.',
        'Local Gastronomy: From traditional chicherías to world-class fusion restaurants.'
      ],
      history: 'Founded by the first Inca, Manco Cápac, Cusco served as the administrative, religious, and military capital of Tahuantinsuyo. After the Spanish conquest in 1533, the city was transformed with colonial churches and mansions built directly upon the indestructible Inca walls. This layers-of-history architecture is what makes Cusco an architectural marvel today.'
    },
    es: {
      title: 'Cusco',
      description: 'La capital histórica del Imperio Inca y el corazón espiritual de los Andes.',
      overview: 'Cusco, situada a 3,399 metros sobre el nivel del mar, es una ciudad donde cada piedra cuenta una historia. Conocida como el "Ombligo del Mundo" por los incas, sigue siendo una de las ciudades más vibrantes e históricamente significativas de América del Sur. La ciudad combina a la perfección los antiguos cimientos incas con la ornamentada arquitectura colonial española, creando un paisaje urbano único reconocido como Patrimonio de la Humanidad por la UNESCO.',
      highlights: [
        'Plaza de Armas: El corazón vibrante de la ciudad, rodeado de portales coloniales y majestuosas catedrales.',
        'Qorikancha: El Templo del Sol, que alguna vez fue el sitio más sagrado del Imperio Inca.',
        'San Blas: El barrio de los artesanos, famoso por sus calles estrechas, galerías locales y vistas panorámicas.',
        'Sacsayhuaman: La fortaleza monumental que domina la ciudad, una obra maestra de la ingeniería megalítica inca.',
        'Gastronomía Local: Desde chicherías tradicionales hasta restaurantes de fusión de clase mundial.'
      ],
      history: 'Fundada por el primer Inca, Manco Cápac, Cusco sirvió como la capital administrativa, religiosa y militar del Tahuantinsuyo. Tras la conquista española en 1533, la ciudad fue transformada con iglesias y casonas coloniales construidas directamente sobre los indestructibles muros incas. Esta arquitectura de "capas de historia" es lo que hace de Cusco una maravilla arquitectónica hoy en día.'
    }
  },
  {
    id: 2,
    slug: 'machu-picchu',
    image: '/machu-picchu/bc-machu-picchu.png',

    en: {
      title: 'Machu Picchu',
      description: 'The lost city of the Incas and one of the New Seven Wonders of the World.',
      overview: 'Machu Picchu is an architectural masterpiece located 2,430m (7,970 ft) above sea level in the heart of a tropical mountain forest. Built at the height of the Inca Empire, it is arguably the most amazing urban creation of its time. Its giant walls, terraces, and ramps seem as if they have been carved naturally into the continuous rock escarpments, standing as a testament to Inca ingenuity.',
      highlights: [
        'Temple of the Sun: A semi-circular building dedicated to astronomical observations and the solstice.',
        'Intihuatana Stone: The "Hitching Post of the Sun," a ritual stone linked to the Inca astronomical calendar.',
        'The Royal Tomb: Located below the Temple of the Sun, believed to be the resting place of high-ranking nobility.',
        'The Guardhouse: The iconic location for the classic "postcard" panoramic photograph of the entire citadel.',
        'Agricultural Terraces: A massive engineering feat that provided food and prevented mountain erosion.'
      ],
      history: 'Built in the 15th century by the Emperor Pachacuti, Machu Picchu was abandoned during the Spanish conquest but remained hidden from the conquistadors. It was never found by the Spanish, which allowed it to stay intact until its "scientific discovery" in 1911. Today, it is recognized by UNESCO as a World Heritage site and is a symbol of Peru\'s glorious past.'
    },
    es: {
      title: 'Machu Picchu',
      description: 'La ciudad perdida de los Incas y una de las Siete Nuevas Maravillas del Mundo.',
      overview: 'Machu Picchu es una obra maestra de la arquitectura situada a 2,430 metros sobre el nivel del mar en el corazón de un bosque tropical de montaña. Construida en el apogeo del Imperio Inca, es posiblemente la creación urbana más asombrosa de su tiempo. Sus muros, terrazas y rampas parecen haber sido tallados naturalmente en los escarpes rocosos, como un testimonio del ingenio Inca.',
      highlights: [
        'Templo del Sol: Edificio semicircular dedicado a las observaciones astronómicas y al solsticio.',
        'Piedra Intihuatana: El "lugar donde se amarra el sol", una piedra ritual vinculada al calendario astronómico.',
        'Tumba Real: Ubicada debajo del Templo del Sol, se cree que fue el lugar de descanso de la nobleza.',
        'La Casa del Guardián: El punto icónico para la clásica fotografía de postal de toda la ciudadela.',
        'Terrazas Agrícolas: Una proeza de ingeniería que proporcionaba alimento y evitaba la erosión de la montaña.'
      ],
      history: 'Construida en el siglo XV por el Inca Pachacútec, Machu Picchu fue abandonada durante la conquista española pero permaneció oculta para los conquistadores. Nunca fue encontrada por los españoles, lo que permitió que se mantuviera intacta hasta su "descubrimiento científico" en 1911. Hoy es reconocida como Patrimonio de la Humanidad por la UNESCO.'
    }
  },
  {
    id: 3,
    slug: 'lima',
    image: '/destination-lima.jpg',
    en: {
      title: 'Lima',
      description: 'The culinary capital of South America and a city of kings.',
      overview: 'Lima is a sprawling metropolis on the Pacific coast, blending colonial history with a vibrant modern culture. Known as the "City of Kings," it was the most important city in the Spanish Viceroyalty of Peru. Today, Lima is world-renowned for its award-winning gastronomy, stunning coastal cliffs in Miraflores, and the bohemian arts district of Barranco. From ancient pre-Inca pyramids hidden within the city to bustling traditional markets, Lima is the perfect starting point for any Peruvian adventure.',
      highlights: [
        'Historic Center: A UNESCO World Heritage site featuring the majestic Plaza Mayor, the Cathedral, and the San Francisco Catacombs.',
        'Miraflores & the Malecón: Stunning oceanfront parks perfect for paragliding, cycling, and enjoying Pacific sunsets.',
        'Barranco: The city’s bohemian heart, filled with street art, historic mansions, boutique galleries, and vibrant nightlife.',
        'World-Class Gastronomy: Home to several of the world’s top 50 restaurants and incredible traditional cevicherias.',
        'Huaca Pucllana: A magnificent pre-Inca adobe pyramid standing right in the middle of modern Miraflores.'
      ],
      history: 'Founded by Spanish conquistador Francisco Pizarro in 1535, Lima quickly became the capital of the Viceroyalty of Peru and the most important city in South America for three centuries. Prior to the Spanish arrival, the area was inhabited by the Lima culture, who built massive adobe pyramids like Huaca Pucllana. After independence in 1821, the city continued to grow, eventually becoming a modern, cosmopolitan hub that celebrates its rich indigenous and colonial past.'
    },
    es: {
      title: 'Lima',
      description: 'La capital culinaria de Sudamérica y la ciudad de los reyes.',
      overview: 'Lima es una metrópolis extensa en la costa del Pacífico, que combina historia colonial con una cultura moderna y vibrante. Conocida como la "Ciudad de los Reyes", fue la ciudad más importante del Virreinato español del Perú. Hoy en día, Lima es mundialmente reconocida por su galardonada gastronomía, los impresionantes acantilados de Miraflores y el bohemio distrito artístico de Barranco. Desde antiguas pirámides preincas escondidas en la ciudad hasta bulliciosos mercados tradicionales, Lima es el punto de partida perfecto para cualquier aventura peruana.',
      highlights: [
        'Centro Histórico: Patrimonio de la Humanidad por la UNESCO, cuenta con la majestuosa Plaza Mayor, la Catedral y las Catacumbas de San Francisco.',
        'Miraflores y el Malecón: Impresionantes parques frente al mar perfectos para hacer parapente, andar en bicicleta y disfrutar de los atardeceres del Pacífico.',
        'Barranco: El corazón bohemio de la ciudad, lleno de arte callejero, casonas históricas, galerías boutique y una vibrante vida nocturna.',
        'Gastronomía de Clase Mundial: Hogar de varios de los 50 mejores restaurantes del mundo e increíbles cevicherías tradicionales.',
        'Huaca Pucllana: Una magnífica pirámide de adobe preinca que se alza en medio del moderno Miraflores.'
      ],
      history: 'Fundada por el conquistador español Francisco Pizarro en 1535, Lima se convirtió rápidamente en la capital del Virreinato del Perú y la ciudad más importante de Sudamérica durante tres siglos. Antes de la llegada de los españoles, la zona estaba habitada por la cultura Lima, que construyó enormes pirámides de adobe como la Huaca Pucllana. Después de la independencia en 1821, la ciudad continuó creciendo, hasta convertirse en un centro cosmopolita moderno que celebra su rico pasado indígena y colonial.'
    }
  },
  {
    id: 4,
    slug: 'paracas-ica',
    image: '/hero-paracas.png',
    en: {
      title: 'Paracas & Ica',
      description: 'Where the desert meets the ocean: marine wildlife, endless dunes, and the mysterious Nazca lines.',
      overview: 'Located south of Lima, the Paracas and Ica region is a striking landscape where one of the world\'s driest deserts plunges into the rich waters of the Pacific Ocean. Paracas is famous for its National Reserve and the Ballestas Islands—often called the "Galapagos of Peru"—which teem with sea lions, penguins, and millions of seabirds. Just inland lies Ica, home to the surreal Huacachina Oasis surrounded by towering sand dunes, as well as being the heart of Peru\'s pisco and wine production.',
      highlights: [
        'Ballestas Islands: A vibrant marine sanctuary filled with sea lions, Humboldt penguins, and diverse bird species.',
        'Huacachina Oasis: A true desert oasis surrounded by massive dunes perfect for dune buggying and sandboarding.',
        'Paracas National Reserve: Stunning coastal desert landscapes where red sand beaches meet the deep blue ocean.',
        'Pisco Vineyards: Traditional haciendas where Peru\'s national spirit is distilled.',
        'The Candelabra: A massive prehistoric geoglyph etched into the coastal hills of Paracas.'
      ],
      history: 'This region was home to the ancient Paracas culture (800 BCE – 100 BCE), famous for their incredibly intricate textiles and advanced cranial surgeries. Following them were the Nazca people, who etched the world-famous Nazca Lines into the desert floor. During the colonial era, Ica became an important agricultural center, particularly for cultivating grapes that would eventually be distilled into Pisco, Peru’s flagship liquor.'
    },
    es: {
      title: 'Paracas e Ica',
      description: 'Donde el desierto se encuentra con el océano: fauna marina, dunas interminables y el misterio de Nazca.',
      overview: 'Ubicada al sur de Lima, la región de Paracas e Ica es un paisaje impresionante donde uno de los desiertos más secos del mundo se sumerge en las ricas aguas del Océano Pacífico. Paracas es famosa por su Reserva Nacional y las Islas Ballestas —a menudo llamadas las "Galápagos de Perú"— repletas de lobos marinos, pingüinos y millones de aves marinas. Tierra adentro se encuentra Ica, hogar del surrealista Oasis de Huacachina, rodeado de imponentes dunas de arena, además de ser el corazón de la producción de pisco y vino del Perú.',
      highlights: [
        'Islas Ballestas: Un vibrante santuario marino lleno de lobos marinos, pingüinos de Humboldt y diversas especies de aves.',
        'Oasis de Huacachina: Un verdadero oasis en el desierto rodeado de enormes dunas perfectas para los tubulares (buggies) y el sandboard.',
        'Reserva Nacional de Paracas: Impresionantes paisajes desérticos costeros donde las playas de arena roja se encuentran con el océano azul profundo.',
        'Viñedos de Pisco: Haciendas tradicionales donde se destila la bebida nacional del Perú.',
        'El Candelabro: Un enorme geoglifo prehistórico grabado en las colinas costeras de Paracas.'
      ],
      history: 'Esta región fue el hogar de la antigua cultura Paracas (800 a.C. – 100 a.C.), famosa por sus textiles increíblemente intrincados y avanzadas cirugías craneales. A ellos les siguió el pueblo Nazca, que trazó las mundialmente famosas Líneas de Nazca en el suelo del desierto. Durante la época colonial, Ica se convirtió en un importante centro agrícola, particularmente para el cultivo de uvas que eventualmente se destilarían en Pisco, el licor bandera del Perú.'
    }
  },
  {
    id: 5,
    slug: 'arequipa',
    image: '/destination-arequipa.png',
    en: {
      title: 'Arequipa & Colca Canyon',
      description: 'The White City surrounded by volcanoes and home to one of the world’s deepest canyons.',
      overview: 'Arequipa, known as the "White City" (Ciudad Blanca) because its historic center is built almost entirely of white volcanic stone (sillar), is Peru’s second-largest city. Surrounded by three dramatic volcanoes, including the imposing Misti, it boasts a near-perfect climate year-round. Beyond the city’s stunning colonial architecture and world-renowned gastronomy, Arequipa is the gateway to the Colca Canyon, a massive gorge twice as deep as the Grand Canyon, where the mighty Andean Condor rules the skies.',
      highlights: [
        'Santa Catalina Monastery: A vibrant, colorful "city within a city" where nuns lived in absolute seclusion for centuries.',
        'Plaza de Armas: Widely considered the most beautiful main square in Peru, flanked by the breathtaking Basilica Cathedral.',
        'Colca Canyon: One of the deepest canyons in the world, featuring terraced valleys, traditional villages, and natural hot springs.',
        'Cruz del Condor: The ultimate viewpoint to watch the majestic Andean Condor soaring on thermal updrafts.',
        'Arequipean Gastronomy: Famous for traditional "picanterías" serving hearty dishes like Rocoto Relleno (stuffed spicy pepper).'
      ],
      history: 'Founded by the Spanish in 1540, Arequipa quickly became an essential commercial hub between the silver mines of Potosi and the coast. Long before the Spanish arrived, the area was inhabited by pre-Inca cultures like the Collagua and Cabana in the Colca region, who carved the massive agricultural terraces still in use today. Arequipa’s geographic isolation fostered a fiercely independent spirit and a unique local culture that remains deeply proud to this day.'
    },
    es: {
      title: 'Arequipa y Cañón del Colca',
      description: 'La Ciudad Blanca rodeada de volcanes y hogar de uno de los cañones más profundos del mundo.',
      overview: 'Arequipa, conocida como la "Ciudad Blanca" porque su centro histórico está construido casi en su totalidad con piedra volcánica blanca (sillar), es la segunda ciudad más grande del Perú. Rodeada por tres imponentes volcanes, incluido el majestuoso Misti, cuenta con un clima casi perfecto durante todo el año. Más allá de la impresionante arquitectura colonial de la ciudad y su gastronomía de renombre mundial, Arequipa es la puerta de entrada al Cañón del Colca, un desfiladero masivo dos veces más profundo que el Gran Cañón, donde el poderoso Cóndor Andino domina los cielos.',
      highlights: [
        'Monasterio de Santa Catalina: Una vibrante y colorida "ciudad dentro de una ciudad" donde las monjas vivieron en absoluta reclusión durante siglos.',
        'Plaza de Armas: Ampliamente considerada como la plaza principal más hermosa del Perú, flanqueada por la impresionante Catedral Basílica.',
        'Cañón del Colca: Uno de los cañones más profundos del mundo, con valles en terrazas, pueblos tradicionales y aguas termales.',
        'Cruz del Cóndor: El mirador definitivo para observar al majestuoso Cóndor Andino planeando sobre las corrientes térmicas.',
        'Gastronomía Arequipeña: Famosa por sus "picanterías" tradicionales que sirven platos contundentes como el Rocoto Relleno.'
      ],
      history: 'Fundada por los españoles en 1540, Arequipa se convirtió rápidamente en un centro comercial esencial entre las minas de plata de Potosí y la costa. Mucho antes de la llegada de los españoles, la zona estaba habitada por culturas preincas como los Collagua y Cabana en la región del Colca, quienes tallaron las masivas terrazas agrícolas que todavía se usan hoy. El aislamiento geográfico de Arequipa fomentó un espíritu ferozmente independiente y una cultura local única que sigue siendo profundamente orgullosa hasta el día de hoy.'
    }
  },
  {
    id: 6,
    slug: 'andes-trekking',
    image: '/destination-salkantay.png',
    en: {
      title: 'Andes Trekking',
      description: 'The premier alternative route to Machu Picchu, crossing diverse Andean landscapes from snow-capped peaks to tropical cloud forests.',
      overview: 'The Salkantay Trek is widely considered one of the top 25 treks in the world by National Geographic. It offers a wilder, more challenging, and visually spectacular alternative to the classic Inca Trail. Named after the towering Apu Salkantay (6,271m / 20,574ft)—one of the most sacred mountains in Inca mythology—the trail takes you through a breathtaking variety of ecosystems. Over the course of several days, trekkers ascend from high-altitude alpine tundras past turquoise glacial lakes, and then descend dramatically into the warm, lush, and humid Amazonian cloud forest before finally arriving at the gates of Machu Picchu.',
      highlights: [
        'Humantay Lake: A stunning turquoise glacial lake surrounded by massive snowy peaks.',
        'Salkantay Pass: The highest and most challenging point of the trek at 4,600m (15,091ft), offering close-up views of the Salkantay glacier.',
        'Cloud Forest Descent: Experience a dramatic change in climate, moving from freezing alpine conditions to a warm, humid jungle environment in a single day.',
        'Llactapata Ruins: Discover an incredible, remote Inca archaeological site that offers a unique rear view of Machu Picchu.',
        'Coffee Plantations: Walk through local farms where you can taste freshly roasted organic Peruvian coffee.'
      ],
      history: 'Apu Salkantay, which translates to "Savage Mountain" in Quechua, was revered by the Incas as a powerful deity that controlled the weather and fertility of the region. The trails surrounding the mountain were ancient trade routes connecting the high Andes with the Amazon basin, allowing the exchange of potatoes and wool for coca leaves, fruit, and feathers. Today, it remains a spiritually significant route that allows modern adventurers to connect with the raw power of the Andean mountains.'
    },
    es: {
      title: 'Trekking Salkantay',
      description: 'La principal ruta alternativa a Machu Picchu, cruzando diversos paisajes andinos, desde picos nevados hasta bosques nubosos tropicales.',
      overview: 'El Trek Salkantay es ampliamente considerado como uno de los 25 mejores treks del mundo por National Geographic. Ofrece una alternativa más salvaje, más desafiante y visualmente espectacular al clásico Camino Inca. Nombrado en honor al imponente Apu Salkantay (6,271m), una de las montañas más sagradas de la mitología Inca, el sendero te lleva a través de una impresionante variedad de ecosistemas. A lo largo de varios días, los excursionistas ascienden desde tundras alpinas de gran altitud, pasando por lagunas glaciares turquesas, y luego descienden dramáticamente hacia el cálido, exuberante y húmedo bosque nuboso amazónico antes de llegar finalmente a las puertas de Machu Picchu.',
      highlights: [
        'Laguna Humantay: Una impresionante laguna glaciar turquesa rodeada de enormes picos nevados.',
        'Paso Salkantay: El punto más alto y desafiante del trek a 4,600m, ofreciendo vistas de cerca del glaciar Salkantay.',
        'Descenso al Bosque Nuboso: Experimenta un cambio dramático en el clima, pasando de condiciones alpinas heladas a un ambiente selvático cálido y húmedo en un solo día.',
        'Ruinas de Llactapata: Descubre un increíble y remoto sitio arqueológico Inca que ofrece una vista trasera única de Machu Picchu.',
        'Plantaciones de Café: Camina por fincas locales donde puedes probar café peruano orgánico recién tostado.'
      ],
      history: 'Apu Salkantay, que se traduce como "Montaña Salvaje" en quechua, fue venerado por los incas como una poderosa deidad que controlaba el clima y la fertilidad de la región. Los senderos que rodean la montaña eran antiguas rutas comerciales que conectaban los altos Andes con la cuenca del Amazonas, permitiendo el intercambio de papas y lana por hojas de coca, frutas y plumas. Hoy en día, sigue siendo una ruta espiritualmente significativa que permite a los aventureros modernos conectarse con el poder puro de las montañas andinas.'
    }
  }
];
