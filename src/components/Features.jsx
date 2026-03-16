const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Novostavby',
    description:
      'Realizujeme komplexné novostavby rodinných domov, bytových domov a komerčných objektov od základov až po odovzdanie kľúčov.',
    image: 'https://loremflickr.com/800/600/construction,house?random=2',
    imageAlt: 'Novostavba rodinného domu',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Rekonštrukcie',
    description:
      'Zabezpečujeme komplexné rekonštrukcie bytov, domov a komerčných priestorov. Modernizujeme interiéry aj exteriéry s dôrazom na detail.',
    image: 'https://loremflickr.com/800/600/renovation,interior?random=3',
    imageAlt: 'Rekonštrukcia bytu',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Komerčné stavby',
    description:
      'Staviame obchodné a administratívne budovy, skladové haly a priemyselné objekty. Každý projekt realizujeme v súlade s normami a termínmi.',
    image: 'https://loremflickr.com/800/600/commercial,building?random=4',
    imageAlt: 'Komerčná stavba',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Stavebný dozor',
    description:
      'Poskytujeme odborný stavebný dozor nad realizáciou stavieb. Dohliadame na kvalitu, bezpečnosť a dodržiavanie projektovej dokumentácie.',
    image: 'https://loremflickr.com/800/600/architect,engineer?random=5',
    imageAlt: 'Stavebný dozor na stavenisku',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Fasády a zateplenie',
    description:
      'Realizujeme vonkajšie a vnútorné omietky, zateplenie budov a finálne úpravy fasád. Zvyšujeme energetickú efektívnosť vašej nehnuteľnosti.',
    image: 'https://loremflickr.com/800/600/facade,insulation?random=6',
    imageAlt: 'Zatepľovanie a fasáda budovy',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Rýchle termíny',
    description:
      'Vážime si váš čas. Každý projekt dokončíme v dohodnutom termíne. Naša logistika a skúsený tím zaručujú plynulý priebeh stavby bez zbytočných prieťahov.',
    image: 'https://loremflickr.com/800/600/teamwork,workers?random=7',
    imageAlt: 'Tím pracovníkov na stavbe',
  },
];

export default function Features() {
  return (
    <section id="sluzby" className="bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Naše služby
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Komplexné stavebné riešenia
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Od projektu až po odovzdanie — staráme sa o každý detail vašej stavby.
            S nami dostanete viac, než ste očakávali.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA below grid */}
        <div className="text-center mt-16">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Kontaktujte nás
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
