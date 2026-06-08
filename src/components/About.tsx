import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Shield, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Slika */}
          <div
            ref={imageRef}
            className={`relative animate-on-scroll-left ${imageVisible ? 'is-visible' : ''}`}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Arhitektonski projekat i nacrti"
                className="rounded-2xl shadow-2xl shadow-charcoal-200/50 w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-600 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary-200 rounded-2xl -z-10" />
            </div>

            {/* Plutajuća značka */}
            <div className="absolute -bottom-4 left-8 bg-white rounded-xl shadow-xl shadow-charcoal-200/30 p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <div className="font-bold text-primary-900">Licencirana Praksa</div>
                <div className="text-sm text-charcoal-500">Usklađeno sa propisima</div>
              </div>
            </div>
          </div>

          {/* Sadržaj */}
          <div
            ref={sectionRef}
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-50 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
              <span className="text-accent-700 text-sm font-medium">O nama</span>
            </div>

            <h2 className="heading-lg text-primary-900 mb-6">
              Fokusirana Praksa <br />
              <span className="text-accent-600">Izgrađena na Preciznosti</span>
            </h2>

            <p className="text-charcoal-600 leading-relaxed mb-6">
              SM Projekt je mali, posvećeni projektni biro specijalizovan za arhitektonsko i
              građevinsko projektovanje. Ne širimo se na previše oblasti — fokusiramo se na ono
              što radimo najbolje: pružanje jasne, usklađene i izvodljive projektne dokumentacije
              u svakoj fazi projekta.
            </p>

            <p className="text-charcoal-600 leading-relaxed mb-8">
              Svaki projekat dobija našu punu pažnju. Od prve idejne skice kroz dokumentaciju
              za dozvolu do detaljnih izvedbenih crteža, osiguravamo da je svaki dokument precizan,
              temeljan i spreman za upotrebu.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Licencirani inženjeri i arhitekti sa direktnim učešćem u svakom projektu',
                'Potpuna usklađenost sa nacionalnim i EU građevinskim propisima i standardima',
                'Kompletna dokumentacija — od idejnih nacrta do izvedbenih projekata',
                'Tačni troškovnici i predmjeri radova',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                  <span className="text-charcoal-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary-700" />
                <div>
                  <div className="text-sm text-charcoal-500">Licencirano</div>
                  <div className="font-semibold text-primary-900">EU Usklađeno</div>
                </div>
              </div>
              <div className="w-px h-10 bg-charcoal-200" />
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-primary-700" />
                <div>
                  <div className="text-sm text-charcoal-500">Svaka Faza</div>
                  <div className="font-semibold text-primary-900">Potpuna Dokumentacija</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
