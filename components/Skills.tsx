'use client';
import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    title: 'Frontend Development',
    icon: 'ri-browser-line',
    color: '#6366f1',
    skills: [
      { name: 'React',        level: 95 },
      { name: 'TypeScript',   level: 90 },
      { name: 'Next.js',      level: 92 },
      { name: 'JavaScript',   level: 95 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'ri-server-line',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js',    level: 90 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'PHP',        level: 82 },
      { name: 'REST APIs',  level: 93 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: 'ri-tools-line',
    color: '#06b6d4',
    skills: [
      { name: 'Git',    level: 92 },
      { name: 'Docker', level: 80 },
      { name: 'AWS',    level: 78 },
      { name: 'Figma',  level: 85 },
      { name: 'VS Code',level: 98 },
    ],
  },
];

const sectors = ['Healthcare Systems', 'Educational Platforms', 'E-Commerce Solutions', 'Agricultural Tech', 'Business Management'];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-gray-500 text-xs">{level}%</span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-1.5 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: animate ? `0 0 8px ${color}60` : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 bg-[#060611] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className="text-center mb-16"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-5">
            <i className="ri-bar-chart-line" />
            Skills & Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            My expertise spans modern web development technologies, from frontend frameworks
            to backend systems and cloud deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <div
              key={ci}
              className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 shimmer-card transition-all duration-300 hover:-translate-y-2"
              style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(40px)', transition: `opacity 0.7s ease ${ci * 0.12}s, transform 0.7s ease ${ci * 0.12}s, box-shadow 0.3s` }}
            >
              <div className="flex items-center gap-4 mb-7">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                >
                  <i className={`${cat.icon} text-xl`} style={{ color: cat.color }} />
                </div>
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((sk, si) => (
                  <SkillBar key={si} name={sk.name} level={sk.level} color={cat.color} animate={vis} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industry experience */}
        <div
          className="mt-14 glass rounded-2xl p-10 border border-white/5 text-center"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease 0.4s' }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">Industry Experience</h3>
          <p className="text-gray-400 mb-7 max-w-xl mx-auto text-sm">
            With 20+ completed projects across multiple sectors, I bring real-world expertise to every challenge.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map(s => (
              <span key={s} className="px-4 py-2 rounded-full text-sm text-gray-400 border border-white/8 hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-300 cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
