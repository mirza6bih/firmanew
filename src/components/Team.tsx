import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Milan Đorđević',
    role: 'Principal Structural Engineer',
    credential: 'M.Sc. Civil Eng., Licensed PE',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Leads structural design across all project stages — from conceptual framing to execution-ready detail drawings.',
  },
  {
    name: 'Ana Kovačević',
    role: 'Lead Architect',
    credential: 'M.Arch., Licensed Architect',
    image: 'https://images.pexels.com/photos/5738627/pexels-photo-5738627.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Responsible for architectural design and permit documentation, ensuring every drawing set is coordinated and compliant.',
  },
  {
    name: 'Stefan Popović',
    role: 'Structural Engineer',
    credential: 'M.Sc. Struct. Eng.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Specializes in structural analysis, seismic design, and preparation of detailed execution drawings.',
  },
];

export default function Team() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="team" className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
            <span className="text-accent-700 text-sm font-medium">Our Team</span>
          </div>
          <h2 className="heading-lg text-primary-900 mb-4">
            The People Behind <span className="text-accent-600">Your Documents</span>
          </h2>
          <p className="text-charcoal-500 text-lg">
            Licensed professionals personally involved in every project — direct access, clear accountability.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: (typeof team)[number]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group text-center animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-9 h-9 bg-white/90 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 bg-white/90 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-primary-900 mb-1">{member.name}</h3>
      <div className="text-accent-600 text-sm font-medium mb-1">{member.role}</div>
      <div className="text-charcoal-400 text-xs mb-3">{member.credential}</div>
      <p className="text-charcoal-500 text-sm leading-relaxed">{member.bio}</p>
    </div>
  );
}
