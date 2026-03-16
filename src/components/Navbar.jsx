import { useState } from 'react';

const navLinks = [
  { label: 'Domov', href: '#domov' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#domov"
            className="flex items-center gap-2 text-white font-bold text-xl transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg px-1"
          >
            <span className="text-blue-500 text-2xl">⬛</span>
            <span>Stav<span className="text-blue-500">Petro</span></span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded px-1 py-0.5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Nezáväzná ponuka
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-2 bg-gray-950/95 border-t border-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          >
            Nezáväzná ponuka
          </a>
        </div>
      </div>
    </nav>
  );
}
