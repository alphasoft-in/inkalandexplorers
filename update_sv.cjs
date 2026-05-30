const fs = require('fs');

function htmlToSingleLine(html) {
    return html.replace(/\r?\n/g, '').replace(/'/g, "\\'");
}

const enOverviewRaw = `
<p class="mb-4 mt-0">The South Valley Private Tour from Cusco is a half-day private experience designed for travelers who want to explore important Inca and colonial sites without crowds or rushed schedules. Instead of following the classic tourist routes, this tour focuses on Cusco’s southern region, offering deeper historical context and a more relaxed pace with a private local guide.</p>
<p class="mb-4 mt-0">During this private journey, you visit Tipón, an impressive Inca hydraulic complex famous for its advanced water engineering; Pikillaqta, a vast pre-Inca city built by the Wari civilization; and Andahuaylillas, home to the “Sistine Chapel of the Americas,” one of the most important colonial churches in Peru.</p>
<p class="mb-4 mt-0">Thanks to private transportation, flexible departure times, and a licensed local guide, this South Valley Private Tour delivers a smooth, informative, and comfortable half-day experience. It is ideal for travelers interested in history, architecture, and authentic Andean culture, all within a short and well-organized itinerary from Cusco.</p>

<h3 class="font-['Outfit'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Why Choose Inkaland Explorers for the South Valley Tour from Cusco?</h3>
<p class="mb-4 mt-0">At Inkaland Explorers, we go beyond the typical tourist routes to help you discover the true cultural depth of Cusco’s South Valley. From the start, our local expertise and private service allow you to explore this historic region in a relaxed, well-organized, and meaningful way.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">👨‍🏫</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Clear Historical Context</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Our licensed local guides lead you through Tipón, Pikillaqta, and Andahuaylillas, explaining their historical, architectural, and cultural importance. You don’t just visit the sites—you truly understand them.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">🚙</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Smooth Private Transportation</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Thanks to private transportation and flexible pacing, you enjoy each stop without rushing, large crowds, or unnecessary shopping stops.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">🤝</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Personalized Private Experiences</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">We focus on adapting the tour to your interests, schedule, and travel style. As a Cusco-based local operator, we prioritize authenticity, safety, and quality.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">⭐</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Trusted Reputation</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Our reputation supports our promise. Travelers consistently highlight our professionalism, knowledgeable guides, and attention to detail in verified TripAdvisor reviews.</p>
    </div>
  </div>
</div>

<h3 class="font-['Outfit'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Weather: South Valley Private Tour</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">
    <div class="text-2xl">🌧️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - APR</h4>
      <p class="text-xs text-gray-700 mb-0">The rainy season brings occasional light showers, mostly in the afternoons. A light waterproof jacket or poncho is recommended.</p>
    </div>
  </div>
  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">
    <div class="text-2xl">☀️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4>
      <p class="text-xs text-gray-700 mb-0">The dry season offers clear skies and minimal rainfall, creating ideal circumstances for visiting the sites without interruptions.</p>
    </div>
  </div>
  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">
    <div class="text-2xl">🏔️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude</h4>
      <p class="text-xs text-gray-700 mb-0">Up to ~3,500m (11,480ft) at Tipón. The climate is generally mild compared to higher-altitude tours around Cusco.</p>
    </div>
  </div>
  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">
    <div class="text-2xl">🌡️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperature</h4>
      <p class="text-xs text-gray-700 mb-0">12°C to 20°C (54°F to 68°F). Early mornings and late afternoons can feel cooler.</p>
    </div>
  </div>
  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">
    <div class="text-2xl">🧥</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Gear & Conditions</h4>
      <p class="text-xs text-gray-700 mb-0">Wear layered clothing. Sun exposure can be strong year-round; sunscreen, sunglasses, and a hat are suggested.</p>
    </div>
  </div>
</div>

<h3 class="font-['Outfit'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Advantages: South Valley Private Tour</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">🏛️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Exclusive Archaeological & Cultural Combination</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Visit Tipón (Inca hydraulic engineering), Pikillaqta (Wari urban center), and Andahuaylillas (Sistine Chapel of the Americas) connecting history in one coherent journey.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">⏰</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Strategic Timing to Avoid Crowds</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">With our morning departure, you reach Andahuaylillas before peak visiting hours, ensuring a quieter, more immersive experience inside the church.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">✅</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Efficient Half-Day Itinerary</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">In approximately 6.5 hours, you experience a complete cultural route with logically planned stops—without rushed visits or unnecessary detours.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">🥖</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Local Gastronomy & Cultural Stops</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Pass through traditional villages such as Oropesa and Saylla, known for local bread and regional dishes, adding a culinary dimension to your experience.</p>
    </div>
  </div>
</div>

<h3 class="font-['Outfit'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Considerations: South Valley Private Tour</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">🎟️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Entrance Fees Not Included</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">You must purchase the Partial Tourist Ticket (70 soles) and the Andahuaylillas Church entrance (15 soles). Please bring cash in soles.</p>
    </div>
  </div>
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">⛰️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitude Awareness</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">We strongly recommend spending 1–2 days acclimatizing in Cusco beforehand and staying well hydrated throughout the tour.</p>
    </div>
  </div>
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">⏱️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Flexible Private Schedule</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">This is a private tour, so we adjust the pace and breaks according to your interests without rushing.</p>
    </div>
  </div>
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">⏰</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Punctual Morning Departure</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">An 8:00 AM pickup allows you to visit Pikillaqta and Andahuaylillas before peak visitor hours. Late departures may reduce time inside key sites.</p>
    </div>
  </div>
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">🥪</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Meals Not Included</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">We recommend bringing water and light snacks. We can suggest local restaurants after the tour if you wish to enjoy regional cuisine.</p>
    </div>
  </div>
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">🥾</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Appropriate Footwear Required</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">Wear comfortable, sturdy walking shoes. Tipón and Pikillaqta include uneven surfaces and stone steps.</p>
    </div>
  </div>
</div>
`;

const esOverviewRaw = `
<p class="mb-4 mt-0">El Tour Privado al Valle Sur desde Cusco es una experiencia privada de medio día diseñada para viajeros que desean explorar importantes sitios incas y coloniales sin multitudes ni horarios apresurados. En lugar de seguir las clásicas rutas turísticas, este recorrido se centra en la región sur de Cusco, ofreciendo un contexto histórico más profundo y un ritmo más relajado con un guía local privado.</p>
<p class="mb-4 mt-0">Durante este viaje privado, visitará Tipón, un impresionante complejo hidráulico inca famoso por su avanzada ingeniería del agua; Pikillaqta, una vasta ciudad preinca construida por la civilización Wari; y Andahuaylillas, hogar de la "Capilla Sixtina de América", una de las iglesias coloniales más importantes de Perú.</p>
<p class="mb-4 mt-0">Gracias al transporte privado, horarios de salida flexibles y un guía local certificado, este Tour Privado al Valle Sur ofrece una experiencia de medio día fluida, informativa y cómoda. Es ideal para viajeros interesados en la historia, la arquitectura y la auténtica cultura andina, todo dentro de un itinerario corto y bien organizado desde Cusco.</p>

<h3 class="font-['Outfit'] text-xl font-bold text-[#0b403a] mb-4 mt-0">¿Por qué Elegir Inkaland Explorers para su Tour al Valle Sur?</h3>
<p class="mb-4 mt-0">En Inkaland Explorers, vamos más allá de las rutas turísticas típicas para ayudarle a descubrir la verdadera profundidad cultural del Valle Sur de Cusco. Nuestra experiencia local y servicio privado le permiten explorar esta histórica región de manera relajada y bien organizada.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">👨‍🏫</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Contexto Histórico Claro</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Nuestros guías locales certificados lo guían a través de Tipón, Pikillaqta y Andahuaylillas, explicando su importancia histórica y cultural. No solo visita los sitios, sino que los entiende realmente.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">🚙</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Transporte Privado Cómodo</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Gracias al transporte privado y al ritmo flexible, disfruta de cada parada sin prisas, grandes multitudes ni paradas de compras innecesarias.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">🤝</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Experiencias Privadas Personalizadas</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Nos enfocamos en adaptar el tour a sus intereses, horario y estilo de viaje. Priorizamos la autenticidad, la seguridad y la calidad.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">⭐</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Reputación de Confianza</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Nuestra reputación respalda nuestra promesa. Los viajeros destacan nuestro profesionalismo y guías expertos en reseñas verificadas de TripAdvisor.</p>
    </div>
  </div>
</div>

<h3 class="font-['Outfit'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Clima para el Tour al Valle Sur</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
  <div class="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-start gap-3">
    <div class="text-2xl">🌧️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">NOV - ABR</h4>
      <p class="text-xs text-gray-700 mb-0">La temporada de lluvias trae chubascos ligeros, en su mayoría por la tarde. Se recomienda llevar una chaqueta impermeable ligera o poncho.</p>
    </div>
  </div>
  <div class="bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">
    <div class="text-2xl">☀️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">MAY - OCT</h4>
      <p class="text-xs text-gray-700 mb-0">La temporada seca ofrece cielos despejados y poca lluvia, creando condiciones ideales para visitar los sitios sin interrupciones.</p>
    </div>
  </div>
  <div class="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">
    <div class="text-2xl">🏔️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Altitud</h4>
      <p class="text-xs text-gray-700 mb-0">Hasta ~3,500m (11,480ft) en Tipón. El clima es generalmente suave en comparación con los tours de mayor altitud alrededor de Cusco.</p>
    </div>
  </div>
  <div class="bg-cyan-50/50 border border-cyan-100 p-3 rounded-lg flex items-start gap-3">
    <div class="text-2xl">🌡️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Temperatura</h4>
      <p class="text-xs text-gray-700 mb-0">12°C a 20°C (54°F a 68°F). Las mañanas y las tardes pueden sentirse más frías.</p>
    </div>
  </div>
  <div class="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-start gap-3 md:col-span-2">
    <div class="text-2xl">🧥</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Equipamiento y Condiciones</h4>
      <p class="text-xs text-gray-700 mb-0">Lleve ropa en capas. La exposición solar puede ser fuerte todo el año; se sugiere bloqueador solar, gafas de sol y sombrero.</p>
    </div>
  </div>
</div>

<h3 class="font-['Outfit'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Ventajas: Tour Privado al Valle Sur</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">🏛️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Exclusiva Combinación Arqueológica</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Visite Tipón (ingeniería hidráulica inca), Pikillaqta (centro urbano Wari) y Andahuaylillas (Capilla Sixtina de América) conectando la historia en un solo viaje.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">⏰</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Horario Estratégico</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Con nuestra salida por la mañana, llega a Andahuaylillas antes de las horas pico, garantizando una experiencia más tranquila en el interior de la iglesia.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">✅</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Eficiente Itinerario de Medio Día</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">En aproximadamente 6.5 horas, experimenta una ruta cultural completa con paradas lógicamente planeadas, sin visitas apresuradas.</p>
    </div>
  </div>
  <div class="flex gap-3">
    <div class="text-2xl shrink-0">🥖</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-1 mt-0">Gastronomía Local</h4>
      <p class="text-xs text-gray-600 leading-snug mb-0">Pase por pueblos tradicionales como Oropesa y Saylla, conocidos por su pan y platos regionales, añadiendo una dimensión culinaria a su experiencia.</p>
    </div>
  </div>
</div>

<h3 class="font-['Outfit'] text-xl font-bold text-[#0b403a] mb-4 mt-0">Consideraciones: Tour Privado al Valle Sur</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">🎟️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Entradas No Incluidas</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">Debe comprar el Boleto Turístico Parcial (70 soles) y la entrada a la Iglesia de Andahuaylillas (15 soles). Por favor, traiga efectivo.</p>
    </div>
  </div>
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">⛰️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Conciencia de la Altitud</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">Recomendamos encarecidamente pasar 1-2 días aclimatándose en Cusco de antemano y mantenerse bien hidratado durante el tour.</p>
    </div>
  </div>
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">⏱️</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Horario Privado Flexible</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">Este es un tour privado, por lo que ajustamos el ritmo y los descansos según sus intereses sin prisas.</p>
    </div>
  </div>
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">⏰</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Salida Matutina Puntual</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">Un recojo a las 8:00 AM le permite visitar Pikillaqta y Andahuaylillas antes de las horas pico de visitantes.</p>
    </div>
  </div>
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">🥪</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Comidas No Incluidas</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">Recomendamos traer agua y snacks ligeros. Podemos sugerir restaurantes locales después del tour si lo desea.</p>
    </div>
  </div>
  <div class="flex gap-3 p-3 bg-gray-50 border-l-4 border-[#dfa126] rounded-r-lg">
    <div class="text-xl shrink-0 mt-0.5">🥾</div>
    <div>
      <h4 class="font-bold text-[#0b403a] text-sm mb-0.5 mt-0">Calzado Apropiado Requerido</h4>
      <p class="text-xs text-gray-700 leading-snug mb-0">Use zapatos cómodos y resistentes para caminar. Tipón y Pikillaqta incluyen superficies irregulares y escalones de piedra.</p>
    </div>
  </div>
</div>
`;

const enOverview = htmlToSingleLine(enOverviewRaw);
const esOverview = htmlToSingleLine(esOverviewRaw);

const fsPath = 'd:/Proyectos/inkalandexplorers/src/data/packages.ts';
let content = fs.readFileSync(fsPath, 'utf8');

const slugBlock = "slug: 'south-valley-private-tour',";
const packages = content.split(slugBlock);

if (packages.length === 2) {
    let pkgContent = packages[1];
    
    // Update EN overview
    pkgContent = pkgContent.replace(/overview:\s*'(.*?)',\s*itinerary/s, \`overview: '\${enOverview}',\\n      itinerary\`);
    
    // Update EN title and description
    pkgContent = pkgContent.replace(/title:\s*'(.*?)',/, "title: 'South Valley Private Tour from Cusco',");
    pkgContent = pkgContent.replace(/description:\s*'(.*?)',/, "description: 'Explore Tipón, Pikillaqta, and Andahuaylillas in a private, relaxed half-day experience.',");
    
    // Update EN itinerary
    pkgContent = pkgContent.replace(/itinerary:\s*\[([\s\S]*?)\],\s*includes:/, \`itinerary: [
        { time: '08:00 AM', activity: 'Hotel Pickup in Cusco: We begin the South Valley Private Tour with direct pickup from your hotel in Cusco at 8:00 a.m. Then, we head south on a scenic 30-minute drive through the Andean countryside, leaving the busy tourist routes behind.' },
        { time: 'Morning', activity: 'Scenic Drive & Saylla Village (Panoramic Stop): Along the way, we pass through the traditional village of Saylla, well known for its regional cuisine, especially chicharrón (fried pork). While this is a panoramic stop, it adds cultural context to the journey.' },
        { time: 'Morning', activity: 'Visit to Tipón Archaeological Site: Shortly after, we leave the main road to reach Tipón, one of the most impressive Inca hydraulic engineering complexes in Peru. During a guided visit, you explore agricultural terraces, stone channels, and ceremonial fountains.' },
        { time: 'Mid-Morning', activity: 'Stop in Oropesa – Traditional Bread Experience: Next, we return to the main road and stop in Oropesa, famously known as the "Bread Capital of Cusco." Together with your guide, you visit a traditional bakery to observe the bread-making process.' },
        { time: 'Late Morning', activity: 'Pikillaqta Archaeological Site: Afterwards, we continue to Pikillaqta, a vast pre-Inca city built by the Wari civilization. This archaeological site stands out for its advanced urban planning.' },
        { time: 'Early Afternoon', activity: 'Andahuaylillas – The "Sistine Chapel of the Americas": Finally, we visit Andahuaylillas, home to the Church of San Pedro. Inside, you admire extraordinary murals, baroque altars, and paintings from the Cusco School.' },
        { time: '03:00 PM', activity: 'Return to Cusco: After completing the visits, we return comfortably to Cusco, arriving at your hotel at approximately 3:00 p.m., concluding a culturally rich and relaxed half-day private South Valley tour.' }
      ],
      includes:\`);

    // Update EN includes
    pkgContent = pkgContent.replace(/includes:\s*\[([\s\S]*?)\],\s*excludes:/, \`includes: [
        'Private Tourist Transportation',
        'First-Aid Kit',
        'Oxygen Tank',
        'Professional Tour Guide (English or Spanish)'
      ],
      excludes:\`);

    // Update EN excludes
    pkgContent = pkgContent.replace(/excludes:\s*\[([\s\S]*?)\],\s*packing:/, \`excludes: [
        'Partial Tourist Ticket (South Valley)',
        'Lunch',
        'Gratuities'
      ],
      packing:\`);

    // Update EN packing
    pkgContent = pkgContent.replace(/packing:\s*\[([\s\S]*?)\],\s*highlights:/, \`packing: [
        'Sun hat',
        'Sun protection cream',
        'Waterproof jacket/rain poncho',
        'Water'
      ],
      highlights:\`);

    // Now update ES version
    // Find the ES section
    const esSplit = pkgContent.split('es: {');
    if (esSplit.length === 2) {
        let esContent = esSplit[1];

        // Update ES overview
        esContent = esContent.replace(/overview:\s*'(.*?)',\s*itinerary/s, \`overview: '\${esOverview}',\\n      itinerary\`);
        
        // Update ES title and description
        esContent = esContent.replace(/title:\s*'(.*?)',/, "title: 'Tour Privado Valle Sur desde Cusco',");
        esContent = esContent.replace(/description:\s*'(.*?)',/, "description: 'Explore Tipón, Pikillaqta y Andahuaylillas en una experiencia privada y relajada de medio día.',");
        
        // Update ES itinerary
        esContent = esContent.replace(/itinerary:\s*\[([\s\S]*?)\],\s*includes:/, \`itinerary: [
        { time: '08:00 AM', activity: 'Recojo del Hotel en Cusco: Comenzamos el Tour Privado al Valle Sur con el recojo directo de su hotel en Cusco a las 8:00 a.m. Luego, nos dirigimos al sur en un recorrido panorámico de 30 minutos a través del campo andino.' },
        { time: 'Mañana', activity: 'Pueblo de Saylla (Parada Panorámica): En el camino, pasamos por el pueblo tradicional de Saylla, conocido por su gastronomía regional, especialmente el chicharrón. Aunque es una parada panorámica, añade contexto cultural al viaje.' },
        { time: 'Mañana', activity: 'Sitio Arqueológico de Tipón: Poco después, dejamos la carretera principal para llegar a Tipón, uno de los complejos de ingeniería hidráulica inca más impresionantes de Perú. Explorará terrazas agrícolas y fuentes ceremoniales.' },
        { time: 'Media Mañana', activity: 'Parada en Oropesa – Experiencia del Pan Tradicional: Regresamos a la carretera principal y nos detenemos en Oropesa, la "Capital del Pan del Cusco". Visitará una panadería tradicional para observar el proceso de elaboración del pan.' },
        { time: 'Mediodía', activity: 'Sitio Arqueológico de Pikillaqta: Continuamos hacia Pikillaqta, una vasta ciudad preinca construida por la civilización Wari. Este sitio arqueológico destaca por su avanzada planificación urbana y largas calles de piedra.' },
        { time: 'Tarde', activity: 'Andahuaylillas – La "Capilla Sixtina de América": Finalmente, visitamos Andahuaylillas, hogar de la Iglesia de San Pedro. En su interior, admirará extraordinarios murales y altares barrocos de la Escuela Cusqueña.' },
        { time: '03:00 PM', activity: 'Retorno a Cusco: Tras completar las visitas, regresamos cómodamente a Cusco, llegando a su hotel aproximadamente a las 3:00 p.m., concluyendo un viaje culturalmente rico y relajado.' }
      ],
      includes:\`);

        // Update ES includes
        esContent = esContent.replace(/includes:\s*\[([\s\S]*?)\],\s*excludes:/, \`includes: [
        'Transporte turístico privado',
        'Botiquín de primeros auxilios',
        'Tanque de oxígeno',
        'Guía profesional de turismo (inglés o español)'
      ],
      excludes:\`);

        // Update ES excludes
        esContent = esContent.replace(/excludes:\s*\[([\s\S]*?)\],\s*packing:/, \`excludes: [
        'Boleto Turístico Parcial (Valle Sur)',
        'Almuerzo',
        'Propinas'
      ],
      packing:\`);

        // Update ES packing
        esContent = esContent.replace(/packing:\s*\[([\s\S]*?)\],\s*highlights:/, \`packing: [
        'Sombrero para el sol',
        'Bloqueador solar',
        'Chaqueta impermeable / poncho de lluvia',
        'Agua'
      ],
      highlights:\`);

        pkgContent = esSplit[0] + 'es: {' + esContent;
    }

    const newContent = packages[0] + slugBlock + pkgContent;
    fs.writeFileSync(fsPath, newContent, 'utf8');
    console.log('Successfully updated South Valley package!');
} else {
    console.log('Could not find South Valley package');
}
