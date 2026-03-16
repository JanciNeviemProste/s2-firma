export default function Hero() {
  return (
    <section
      id="domov"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://loremflickr.com/1400/900/construction,building?random=1"
          alt="Stavebné práce a projekty StavPetro"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/80 to-blue-950/40" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden="true" />
          Profesionálna stavebná firma na Slovensku
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Stavíme<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            s presnosťou
          </span>
          <br />a kvalitou
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          StavPetro realizuje novostavby, rekonštrukcie a stavebné úpravy s dôrazom
          na kvalitu, termíny a spokojnosť zákazníkov.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Nezáväzná cenová ponuka
          </a>
          <a
            href="#sluzby"
            className="w-full sm:w-auto border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Naše služby
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '15+', label: 'Rokov skúseností' },
            { value: '300+', label: 'Dokončených projektov' },
            { value: '50+', label: 'Odborníkov v tíme' },
            { value: '100%', label: 'Spokojnosť klientov' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600" aria-hidden="true">
        <span className="text-xs uppercase tracking-widest">Rolovať</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
