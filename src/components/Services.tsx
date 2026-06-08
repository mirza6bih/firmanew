import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Lightbulb,
  Stamp,
  Ruler,
  Calculator,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Idejni Nacrti',
    subtitle: 'Conceptual Designs',
    description:
      'Početni dizajn koncepti i skice koji prevode vašu viziju u jasan, koherentan vizuelni prijedlog — temelj na kojem se gradi svaki uspješan projekat.',
    features: ['Analiza lokacije i izvodljivost', 'Koncept skice i tlocrti', '3D studije mase', 'Preliminarni prostorni rasporedi'],
  },
  {
    icon: Stamp,
    title: 'Glavni Projekti',
    subtitle: 'Main Projects / Permit Designs',
    description:
      'Kompletna projektna dokumentacija potrebna za građevinske dozvole — arhitektonski, građevinski i MEP crteži pripremljeni i ovjereni za regulatorno odobrenje.',
    features: ['Arhitektonski set za dozvolu', 'Građevinski proračuni i crteži', 'MEP koordinacija', 'Protivpožarna sigurnost i pristupačnost'],
  },
  {
    icon: Ruler,
    title: 'Izvedbeni Projekti',
    subtitle: 'Detailed Execution Designs',
    description:
      'Detaljni tehnički crteži i specifikacije koji se koriste direktno na gradilištu — svaka dimenzija, spoj i materijal definisani za precizno izvođenje.',
    features: ['Detaljni građevinski crteži', 'Listovi detalja konstrukcije', 'Specifikacije materijala', 'Detalji spojeva i veza'],
  },
  {
    icon: Calculator,
    title: 'Predmjer i Predračun',
    subtitle: 'Cost Estimates & Bills of Quantities',
    description:
      'Tačni predmjeri radova i troškovnici koji vam daju potpunu preglednost troškova projekta — od preliminarnih budžeta do tenderske dokumentacije.',
    features: ['Predmjeri radova', 'Preliminarne procjene troškova', 'Tenderski predmjeri', 'Savjeti za optimizaciju troškova'],
  },
  {
    icon: FileCheck,
    title: 'Ostala Dokumentacija',
    subtitle: 'Related Documentation',
    description:
      'Izvedeni crteži, tehnički izvještaji, procjene stanja i druga prateća dokumentacija za podršku vašem projektu kroz cijeli životni ciklus.',
    features: ['Dokumentacija izvedenog stanja', 'Tehnički izvještaji', 'Procjene stanja', 'Izmjene i dopune projekta'],
  },
];

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
            <span className="text-accent-700 text-sm font-medium">Naše Usluge</span>
          </div>
          <h2 className="heading-lg text-primary-900 mb-4">
            Kompletna Projektna <span className="text-accent-600">Dokumentacija</span>
          </h2>
          <p className="text-charcoal-500 text-lg">
            Svaki dokument koji vaš projekat zahtijeva — od početnog koncepta do odobrenja
            dozvole i crteža spremnih za izgradnju.
          </p>
        </div>

        {/* Indikator procesa */}
        <div className="hidden lg:flex items-center justify-center gap-3 mb-12 text-sm text-charcoal-400">
          <span className="px-3 py-1 bg-primary-800 text-white rounded-full font-medium">1</span>
          <ArrowRight className="w-4 h-4" />
          <span className="px-3 py-1 bg-primary-800 text-white rounded-full font-medium">2</span>
          <ArrowRight className="w-4 h-4" />
          <span className="px-3 py-1 bg-primary-800 text-white rounded-full font-medium">3</span>
          <ArrowRight className="w-4 h-4" />
          <span className="px-3 py-1 bg-primary-800 text-white rounded-full font-medium">4</span>
          <ArrowRight className="w-4 h-4" />
          <span className="px-3 py-1 bg-charcoal-200 text-charcoal-600 rounded-full font-medium">5</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`card p-8 group hover:-translate-y-1 animate-on-scroll ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-accent-600 transition-colors duration-300">
          <Icon className="w-7 h-7 text-primary-800 group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary-900 leading-snug">{service.title}</h3>
          <div className="text-sm text-accent-600 font-medium">{service.subtitle}</div>
        </div>
      </div>

      <p className="text-charcoal-500 leading-relaxed mb-6">{service.description}</p>

      <div className="space-y-2">
        {service.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
            <span className="text-sm text-charcoal-600">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-charcoal-100">
        <a
          href="#contact"
          className="text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors inline-flex items-center gap-1"
        >
          Zatražite ovu uslugu
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
