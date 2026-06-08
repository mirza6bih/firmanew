import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Stambeni Toranj Skyline',
    location: 'Beograd, Srbija',
    description: '22-spratni stambeni toranj sa 180 luksuznih stanova, podzemnom garažom i uređenim zajedničkim prostorima.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Poslovni Centar Central',
    location: 'Zagreb, Hrvatska',
    description: 'Poslovni kompleks klase A sa fleksibilnim tlocrtima, pametnim sistemima i LEED Gold sertifikatom.',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Logistički Centar Delta',
    location: 'Novi Sad, Srbija',
    description: 'Logistički objekat od 45.000 m² sa visokoregalnim skladištem, cross-dockingom i integrisanim poslovnim prostorom.',
    image: 'https://images.pexels.com/photos/110810/pexels-photo-110810.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Villa Marina Estate',
    location: 'Budva, Crna Gora',
    description: 'Luksuzni kompleks priobalnih vila sa 12 jedinica, beskonačnim bazenima i panoramskim pogledom na Jadran.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Portfolio() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 animate-on-scroll ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
            <span className="text-accent-700 text-sm font-medium">Reference</span>
          </div>
          <h2 className="heading-lg text-primary-900 mb-4">
            Naši <span className="text-accent-600">Projekti</span>
          </h2>
          <p className="text-charcoal-500 text-lg">
            Izbor naših završenih arhitektonskih i građevinskih projekata širom regiona.
          </p>
        </div>

        {/* Mreža projekata - 2 na mobilnom, 4 na laptop/desktop */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group card overflow-hidden animate-on-scroll ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="w-5 h-5 text-primary-800" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="heading-sm text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-charcoal-400 mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{project.location}</span>
        </div>
        <p className="text-charcoal-500 text-sm leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}
