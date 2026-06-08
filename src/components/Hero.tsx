import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Pozadina */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Moderna arhitektura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-800/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
      </div>

      {/* Dekorativni elementi */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/6 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-accent-300 text-sm font-medium">Građevinski Projektni Biro</span>
          </div>

          <h1 className="heading-xl text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Od Ideje do
            <span className="block bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
              Građevinske Dozvole
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-charcoal-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Fokusirana arhitektonska i građevinska projektna praksa koja isporučuje kompletnu dokumentaciju — od idejnih nacrta do izvedbenih crteža.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <a href="#contact" className="btn-primary group">
              Zatražite ponudu
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 hover:!text-white">
              Naše usluge
            </a>
          </div>

          {/* Traka sa uslugama */}
          <div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            {[
              { label: 'Idejni nacrti', sub: 'Conceptual Designs' },
              { label: 'Glavni projekti', sub: 'Permit Projects' },
              { label: 'Izvedbeni projekti', sub: 'Execution Designs' },
              { label: 'Predmjer i predračun', sub: 'Cost Estimates' },
            ].map((item) => (
              <div key={item.label} className="group">
                <div className="text-white font-semibold group-hover:text-accent-400 transition-colors">
                  {item.label}
                </div>
                <div className="text-sm text-charcoal-400 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indikator skrolanja */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Skrolaj</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
