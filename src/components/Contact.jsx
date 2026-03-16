import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'E-mail',
    value: 'info@stavpetro.sk',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Telefón',
    value: '+421 900 123 456',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Adresa',
    value: 'Stavebná 12, 010 01 Žilina',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Otváracie hodiny',
    value: 'Po – Pi: 8:00 – 17:00',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300';

  return (
    <section id="kontakt" className="bg-gray-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Kontakt
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Napíšte nám
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Máte záujem o cenovú ponuku alebo otázky k realizácii? Kontaktujte nás — radi vám poradíme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Správa odoslaná!</h3>
                <p className="text-gray-400">Ďakujeme za váš záujem. Ozveme sa vám do 24 hodín.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Meno a priezvisko <span className="text-blue-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Ján Novák"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mailová adresa <span className="text-blue-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jan.novak@email.sk"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Predmet správy
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Napr. Dopyt na rekonštrukciu domu"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Správa <span className="text-blue-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Opíšte váš projekt alebo otázku..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Odoslať správu
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Kontaktné údaje</h3>
              <ul className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-gray-200 font-medium">{item.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/10 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-white mb-3">Prečo StavPetro?</h3>
              <ul className="flex flex-col gap-3">
                {[
                  'Bezplatná konzultácia a cenová ponuka',
                  'Záruky na všetky práce',
                  'Kvalifikovaný tím s 15+ rokmi praxe',
                  'Transparentná komunikácia počas celej realizácie',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
