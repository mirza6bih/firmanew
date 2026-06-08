import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ShieldCheck, FileText, Ruler, Users, CheckCircle2, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: FileText,
    title: 'Potpuna dokumentacija u svakoj fazi',
    description:
      'Od idejnih nacrta do izvedbenih projekata — isporučujemo potpuno koordinisane setove dokumenata spremne za dozvole i gradnju.',
  },
  {
    icon: ShieldCheck,
    title: 'Potpuna usklađenost sa propisima',
    description:
      'Svaki dizajn ispunjava ili premašuje nacionalne i EU građevinske standarde. Zahtjevi za dozvole prolaze glatko jer sve radimo kako treba iz prvog puta.',
  },
  {
    icon: Ruler,
    title: 'Preciznost i temeljitost',
    description:
      'Detaljni crteži, tačni predmjeri i dobro definisane specifikacije ne ostavljaju mjesta za nejasnoće na gradilištu.',
  },
  {
    icon: Users,
    title: 'Direktan kontakt sa projektantima',
    description:
      'Kao fokusirana praksa, licencirani inženjeri i arhitekte koje angažujete su ti koji rade posao — bez prebacivanja i gubitka konteksta.',
  },
  {
    icon: CheckCircle2,
    title: 'Predaja spremna za dozvole',
    description:
      'Naši glavni projekti su pripremljeni posebno za regulatorni pregled, sa svim potrebnim pečatima, proračunima i pratećom dokumentacijom.',
  },
  {
    icon: Wrench,
    title: 'Izvodljivi dizajni',
    description:
      'Izvedbeni crteži koje izvođači mogu stvarno graditi — jasne dimenzije, praktični detalji i koordinisani setovi disciplina.',
  },
];

export default function WhyChooseUs() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-primary-900 relative overflow-hidden">
      {/* Dekorativna pozadina */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
            <span className="text-accent-300 text-sm font-medium">Zašto Odabrati Nas</span>
          </div>
          <h2 className="heading-lg text-white mb-4">
            Dokumentacija na koju se <span className="text-accent-400">možete osloniti</span>
          </h2>
          <p className="text-charcoal-300 text-lg">
            Fokusirana praksa znači da svaki set dokumenata dobija pažnju koju zaslužuje —
            precizan, usklađen i spreman za svoju namjenu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason, index }: { reason: (typeof reasons)[number]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = reason.icon;

  return (
    <div
      ref={ref}
      className={`flex gap-5 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 animate-on-scroll ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-accent-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
        <p className="text-charcoal-400 leading-relaxed text-sm">{reason.description}</p>
      </div>
    </div>
  );
}
