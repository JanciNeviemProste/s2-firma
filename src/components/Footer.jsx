const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: 'Domov', href: '#domov' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#domov"
              className="inline-flex items-center gap-2 text-white font-bold text-xl mb-3 hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            >
              <span className="text-blue-500 text-2xl">⬛</span>
              <span>Stav<span className="text-blue-500">Petro</span></span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Profesionálna stavebná firma s viac ako 15 rokmi skúseností.
              Realizujeme novostavby, rekonštrukcie a komerčné stavby po celom Slovensku.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigácia</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-500">
              <li>info@stavpetro.sk</li>
              <li>+421 900 123 456</li>
              <li>Stavebná 12, 010 01 Žilina</li>
              <li>Po – Pi: 8:00 – 17:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} StavPetro, s.r.o. Všetky práva vyhradené.
          </p>
          <p className="text-gray-700 text-sm">
            IČO: 12 345 678 | DIČ: SK1234567890
          </p>
        </div>
      </div>
    </footer>
  );
}
