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
    image: '/destination-cusco.png',

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
    image: '/destination-machu-picchu.png',

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
  }
];

