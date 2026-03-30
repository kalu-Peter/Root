'use client';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'School Management System',
    description: 'Comprehensive school management platform with student enrollment, grade tracking, attendance management, and parent-teacher communication features.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20school%20management%20system%20dashboard%20interface%20showing%20student%20records%2C%20class%20schedules%2C%20grade%20management%2C%20clean%20educational%20software%20design%20with%20organized%20layout%20and%20professional%20appearance&width=600&height=400&seq=project-1&orientation=landscape',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    accent: '#6366f1',
  },
  {
    id: 2,
    title: 'Procurement Management System',
    description: 'Advanced procurement platform with vendor management, purchase order processing, inventory tracking, and approval workflows for streamlined business operations.',
    image: 'https://readdy.ai/api/search-image?query=Business%20procurement%20system%20dashboard%20showing%20vendor%20management%2C%20purchase%20orders%2C%20inventory%20tracking%2C%20professional%20business%20software%20interface%20with%20charts%20and%20organized%20data%20presentation&width=600&height=400&seq=project-3&orientation=landscape',
    technologies: ['React', 'PHP', 'PostgreSQL', 'JavaScript', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    accent: '#8b5cf6',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with product catalog, shopping cart, payment processing, order management, and customer dashboard for complete e-commerce experience.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20showing%20product%20listings%2C%20shopping%20cart%2C%20payment%20integration%2C%20online%20store%20design%20with%20clean%20layout%20and%20professional%20e-commerce%20elements&width=600&height=400&seq=project-4&orientation=landscape',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'AWS'],
    liveUrl: 'https://kalu-peter.github.io/Ecom/',
    githubUrl: 'https://github.com/kalu-Peter/Ecom',
    accent: '#06b6d4',
  },
  {
    id: 4,
    title: 'Clinic Management System',
    description: 'Efficient clinic management solution with patient appointments, medical records, prescription management, and billing system for small to medium healthcare facilities.',
    image: 'https://readdy.ai/api/search-image?query=Clean%20clinic%20management%20software%20interface%20with%20appointment%20scheduling%2C%20patient%20records%2C%20medical%20forms%2C%20small%20healthcare%20facility%20dashboard%20with%20organized%20medical%20information%20display&width=600&height=400&seq=project-5&orientation=landscape',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    accent: '#10b981',
  },
  {
    id: 5,
    title: 'Farm Management Website',
    description: 'Agricultural management platform with crop tracking, livestock management, weather integration, and farm analytics for modern farming operations.',
    image: 'https://readdy.ai/api/search-image?query=Agricultural%20farm%20management%20website%20with%20crop%20tracking%20dashboard%2C%20livestock%20records%2C%20weather%20data%2C%20farming%20technology%20interface%20with%20green%20agricultural%20theme%20and%20organized%20farm%20data%20presentation&width=600&height=400&seq=project-6&orientation=landscape',
    technologies: ['React', 'Node.js', 'JavaScript', 'Git'],
    liveUrl: '#',
    githubUrl: '#',
    accent: '#f59e0b',
  },
];

export default function Projects() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className="text-center mb-16"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-5">
            <i className="ri-folder-3-line" />
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            A showcase spanning healthcare, education, agriculture, and e-commerce —
            demonstrating expertise across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/12 shimmer-card transition-all duration-400 hover:-translate-y-3"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? 'none' : 'translateY(50px)',
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s, box-shadow 0.4s`,
                boxShadow: `0 0 0 0 ${p.accent}00`,
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 20px 60px ${p.accent}20`)}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 0 transparent')}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay always present, deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                {/* Accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.technologies.map(t => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-xs border border-white/8 text-gray-400 hover:border-white/20 hover:text-gray-300 transition-colors duration-200 cursor-default">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-4 border-t border-white/5">
                  <a
                    href={p.liveUrl}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <i className="ri-external-link-line" />
                    Live Demo
                  </a>
                  <a
                    href={p.githubUrl}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <i className="ri-github-line" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
