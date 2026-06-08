import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Početna', href: '#home' },
  { label: 'O nama', href: '#about' },
  { label: 'Usluge', href: '#services' },
  { label: 'Projekti', href: '#portfolio' },
  { label: 'Tim', href: '#team' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-charcoal-200/20' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SM</span>
            </div>
            <div>
              <span className={`font-bold text-lg leading-tight ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
                SM Projekt
              </span>
              <span className={`block text-xs leading-tight ${isScrolled ? 'text-charcoal-400' : 'text-white/70'}`}>
                Arhitektura i Građevinarstvo
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-charcoal-600 hover:text-accent-600'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary !py-2.5 !px-5 text-sm"
            >
              Zatražite ponudu
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-primary-900' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-charcoal-100 rounded-b-2xl shadow-xl">
            <div className="py-4 px-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-charcoal-700 hover:bg-accent-50 hover:text-accent-600 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-accent-600 text-white rounded-lg text-center font-medium hover:bg-accent-700 transition-colors mt-2"
              >
                Zatražite ponudu
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
