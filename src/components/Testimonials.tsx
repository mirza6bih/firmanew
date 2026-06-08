import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dragan Petrović',
    role: 'CEO, Petrovic Development',
    text: 'StructuraProj delivered an outstanding structural design for our commercial complex. Their attention to detail and code compliance gave us complete confidence throughout the project.',
    rating: 5,
    project: 'Central Business Hub',
  },
  {
    name: 'Maja Nikolić',
    role: 'Property Developer',
    text: 'The architectural design exceeded our expectations. The team blended modern aesthetics with practical functionality perfectly, and the 3D visualizations helped us secure investors early.',
    rating: 5,
    project: 'Villa Marina Estate',
  },
  {
    name: 'Ivan Stanković',
    role: 'Operations Director, Delta Logistics',
    text: 'From permits to final supervision, StructuraProj managed every phase flawlessly. Our logistics center was delivered on time and under budget — a rare achievement.',
    rating: 5,
    project: 'Delta Logistics Center',
  },
  {
    name: 'Sofia Hadžić',
    role: 'Homeowner',
    text: 'Working with StructuraProj on our family home was a wonderful experience. They listened to our needs and created a design that feels both luxurious and truly livable.',
    rating: 5,
    project: 'Residential Villa',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
            <span className="text-accent-700 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="heading-lg text-primary-900 mb-4">
            What Our <span className="text-accent-600">Clients Say</span>
          </h2>
          <p className="text-charcoal-500 text-lg">
            Trusted by developers, businesses, and homeowners across the region.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-charcoal-50 rounded-3xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-accent-200 mb-6" />

            <div className="min-h-[160px]">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`absolute inset-0 p-8 md:p-12 transition-all duration-500 ${
                    i === current
                      ? 'opacity-100 translate-x-0'
                      : i < current
                      ? 'opacity-0 -translate-x-8'
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ position: i === current ? 'relative' : 'absolute' }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-accent-400 text-accent-400" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-charcoal-700 leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-primary-900">{t.name}</div>
                      <div className="text-sm text-charcoal-500">{t.role}</div>
                      <div className="text-xs text-accent-600">{t.project}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-charcoal-200 flex items-center justify-center hover:bg-primary-800 hover:text-white hover:border-primary-800 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-accent-500' : 'w-2 bg-charcoal-300 hover:bg-charcoal-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-charcoal-200 flex items-center justify-center hover:bg-primary-800 hover:text-white hover:border-primary-800 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
