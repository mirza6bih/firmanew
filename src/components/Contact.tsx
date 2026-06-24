import { useState, FormEvent } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    project_type: '',
    message: '',
  });
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: scrollRef, isVisible: scrollVisible } = useScrollAnimation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (insertError) throw insertError;

      setSubmitted(true);
      setFormData({ title: '', name: '', email: '', project_type: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError('Došlo je do greške pri slanju poruke. Molimo pokušajte ponovo.');
      console.error('Submit error:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
            <span className="text-accent-700 text-sm font-medium">Kontakt</span>
          </div>
          <h2 className="heading-lg text-primary-900 mb-4">
            Započnite <span className="text-accent-600">Vaš Sljedeći Projekat</span>
          </h2>
          <p className="text-charcoal-500 text-lg">
            Javite nam se da razgovaramo o Vašim arhitektonskim ili građevinskim potrebama.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Kontakt informacije */}
          <div className="lg:col-span-2 space-y-8">
            <div
              ref={scrollRef}
              className={`animate-on-scroll-left ${scrollVisible ? 'is-visible' : ''}`}
            >
              <h3 className="heading-sm text-primary-900 mb-6">Kontaktirajte Nas</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: 'Adresa',
                    value: 'Sarajevo, 71 000\nBosna i Hercegovina',
                  },
                  {
                    icon: Phone,
                    label: 'Telefon',
                    value: '+387 63 435 010',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'sm.projektovanje@gmail.com',
                  },
                  {
                    icon: Clock,
                    label: 'Radno Vrijeme',
                    value: 'Pon - Pet: 8:00 - 17:00\nSub: 9:00 - 13:00',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <div className="text-sm text-charcoal-400 mb-1">{item.label}</div>
                      <div className="text-charcoal-700 whitespace-pre-line leading-relaxed">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden h-64 shadow-sm border border-charcoal-100">
              <iframe
                title="Lokacija Ureda"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.0!2d18.4131!3d43.8563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9b3b7b7b7b7%3A0x2d7d6b4e7e7a0a0a!2sSarajevo!5e0!3m2!1sen!2sba!4v1600000000000!5m2!1sen!2sba"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Kontakt forma */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-charcoal-100 p-8 md:p-10">
              <h3 className="heading-sm text-primary-900 mb-2">Zatražite Ponudu</h3>
              <p className="text-charcoal-500 mb-8">
                Ispunite formu ispod i naš tim će Vam se javiti u roku od 24 sata.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="w-16 h-16 text-accent-500 mb-4" />
                  <h4 className="heading-sm text-primary-900 mb-2">Poruka Poslana!</h4>
                  <p className="text-charcoal-500">
                    Hvala što ste nas kontaktirali. Javit ćemo Vam se uskoro.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        Naslov
                      </label>
                      <input
                        type="text"
                        id="title"
                        required
                        placeholder="Naslov poruke"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 bg-charcoal-50/50 text-charcoal-800 placeholder-charcoal-400
                        focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        Ime i Prezime
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Vaše ime"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 bg-charcoal-50/50 text-charcoal-800 placeholder-charcoal-400
                        focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        Email Adresa
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="vas@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 bg-charcoal-50/50 text-charcoal-800 placeholder-charcoal-400
                        focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        Vrsta objekta
                      </label>
                      <input
                        type="text"
                        id="project_type"
                        placeholder="Npr. stambeni"
                        value={formData.project_type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 bg-charcoal-50/50 text-charcoal-800 placeholder-charcoal-400
                        focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Vaša Poruka
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Opišite nam Vaš projekat..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 bg-charcoal-50/50 text-charcoal-800 placeholder-charcoal-400
                      focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full sm:w-auto group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Slanje...
                      </>
                    ) : (
                      <>
                        Pošaljite Poruku
                        <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
