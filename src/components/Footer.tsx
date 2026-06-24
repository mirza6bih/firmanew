import { HardHat, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'O Nama', href: '#about' },
  { label: 'Usluge', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Tim', href: '#team' },
  { label: 'Kontakt', href: '#contact' },
];

const deliverableLinks = [
  'Idejni projekti (Idejni nacrti)',
  '(Glavni projekti)',
  '(Izvedbeni projekti)',
  '(Predmjer i predračun)',
  'Ostala dokumentacija',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent-600 rounded-lg">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">SM</span>
                <span className="text-xl font-bold text-accent-400">Projekt</span>
              </div>
            </a>
            <p className="text-charcoal-400 leading-relaxed mb-6">
              Fokusirana arhitektonska i građevinska projektna praksa koja isporučuje kompletnu
              dokumentaciju — od idejnih nacrta do izvedbenih crteža.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-charcoal-400">
                <MapPin className="w-4 h-4 text-accent-400 shrink-0" />
                <span className="text-sm">Sarajevo, 71 000, Bosna i Hercegovina</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal-400">
                <Phone className="w-4 h-4 text-accent-400 shrink-0" />
                <span className="text-sm">+387 63 435 010</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal-400">
                <Mail className="w-4 h-4 text-accent-400 shrink-0" />
                <span className="text-sm">sm.projektovanje@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Brzi Linkovi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-charcoal-400 hover:text-accent-400 transition-colors text-sm inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-accent-500/50 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Naši Deliverables</h4>
            <ul className="space-y-3">
              {deliverableLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-charcoal-400 hover:text-accent-400 transition-colors text-sm inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-accent-500/50 rounded-full" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Budite u Toku</h4>
            <p className="text-charcoal-400 text-sm mb-4">
              Pretplatite se na naš newsletter za najnovije novosti o projektima i industrijske uvide.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Vaš email"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-charcoal-500
                focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-accent-600 text-white text-sm font-medium rounded-lg hover:bg-accent-700 transition-colors"
              >
                Prijavi se
              </button>
            </form>

            {/* Social */}
            <div className="mt-8">
              <h5 className="text-sm font-medium mb-4">Pratite Nas</h5>
              <div className="flex gap-3">
                {['Facebook', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-charcoal-400 hover:bg-accent-600 hover:text-white hover:border-accent-600 transition-all"
                    aria-label={social}
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-charcoal-500 text-sm">
              &copy; {new Date().getFullYear()} SM Projekt. Sva prava zadržana.
            </p>
            <div className="flex items-center gap-6 text-sm text-charcoal-500">
              <a href="#" className="hover:text-accent-400 transition-colors">Politika Privatnosti</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Uslovi Korištenja</a>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-charcoal-400 hover:bg-accent-600 hover:text-white hover:border-accent-600 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
