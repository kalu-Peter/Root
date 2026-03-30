'use client';
import { useEffect, useRef, useState } from 'react';

const stack = [
  { name: 'React',      icon: 'ri-reactjs-line',     color: '#61DAFB' },
  { name: 'Next.js',    icon: 'ri-layout-grid-line',  color: '#ffffff' },
  { name: 'TypeScript', icon: 'ri-code-s-slash-line', color: '#3178C6' },
  { name: 'Node.js',    icon: 'ri-server-line',       color: '#68A063' },
  { name: 'PostgreSQL', icon: 'ri-database-2-line',   color: '#336791' },
  { name: 'Docker',     icon: 'ri-box-3-line',        color: '#2496ED' },
  { name: 'AWS',        icon: 'ri-cloud-line',        color: '#FF9900' },
  { name: 'Git',        icon: 'ri-git-branch-line',   color: '#F05032' },
];

const codeLines = [
  { key: 'frontend',  val: '"React, Next.js, TypeScript"' },
  { key: 'backend',   val: '"Node.js, PHP, REST APIs"'    },
  { key: 'database',  val: '"PostgreSQL, SQL"'            },
  { key: 'tools',     val: '"Git, Docker, AWS, Figma"'    },
];

export default function About() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const slide = (dir: 'left' | 'right', delay = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : `translateX(${dir === 'left' ? '-40px' : '40px'})`,
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section id="about" ref={ref} className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div style={slide('left')}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-6">
              <i className="ri-user-line" />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Building Digital <span className="gradient-text">Experiences</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-base">
              <p>
                I'm Peter Kalu, a passionate software developer with extensive experience creating
                comprehensive digital solutions across various industries. My journey has taken me
                through diverse projects from healthcare to education, building systems that make a real impact.
              </p>
              <p>
                I specialize in modern web technologies including React, Node.js, and PostgreSQL,
                always staying current with industry best practices. My expertise spans both frontend
                and backend development, with a strong focus on creating scalable, user-friendly applications.
              </p>
              <p>
                From school management systems to e-commerce platforms, I've delivered solutions
                that streamline operations and enhance user experiences across multiple sectors.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: '20+', label: 'Projects Completed', icon: 'ri-stack-line' },
                { value: '6+',  label: 'Years Experience',   icon: 'ri-time-line'  },
              ].map((s, i) => (
                <div key={i} className="glass rounded-2xl p-5 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 cursor-default">
                  <i className={`${s.icon} text-indigo-400 text-xl mb-2 block`} />
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <p className="text-gray-500 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/Peter Lugo resume.pdf"
                className="inline-flex items-center gap-2 gradient-bg text-white font-semibold py-3 px-7 rounded-full shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 text-sm"
              >
                <i className="ri-download-line" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right — code card + tech badges */}
          <div style={slide('right', 0.2)} className="relative">
            {/* Terminal */}
            <div className="glass-dark rounded-2xl overflow-hidden shadow-2xl border border-white/8">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8 bg-black/20">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-gray-500 text-xs font-mono">tech-stack.ts</span>
              </div>
              <div className="p-6 font-mono text-sm leading-7">
                <p className="text-gray-500 mb-1 text-xs">// My core technologies</p>
                <p>
                  <span className="text-violet-400">const </span>
                  <span className="text-cyan-400">techStack</span>
                  <span className="text-white"> = {'{'}</span>
                </p>
                <div className="ml-5">
                  {codeLines.map((line, i) => (
                    <p key={i}>
                      <span className="text-indigo-400">{line.key}</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">{line.val}</span>
                      <span className="text-white">,</span>
                    </p>
                  ))}
                </div>
                <p className="text-white">{'}'}</p>
                <p className="mt-3 text-gray-600 text-xs">// Always learning more...</p>
                <p className="text-violet-400">
                  export default <span className="text-cyan-400">techStack</span>
                  <span className="text-white">;</span>
                </p>
              </div>
            </div>

            {/* Tech badges */}
            <div className="mt-5 grid grid-cols-4 gap-3">
              {stack.map((t, i) => (
                <div
                  key={i}
                  className="glass rounded-xl py-3 flex flex-col items-center gap-1.5 hover:scale-110 hover:border-white/20 transition-all duration-300 cursor-default border border-white/5 shimmer-card"
                >
                  <i className={`${t.icon} text-lg`} style={{ color: t.color }} />
                  <span className="text-gray-500 text-[10px] font-medium">{t.name}</span>
                </div>
              ))}
            </div>

            {/* Status chip */}
            <div className="absolute -top-4 -right-2 glass rounded-xl px-4 py-2.5 border border-white/10 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                <span className="text-sm font-semibold text-white whitespace-nowrap">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
