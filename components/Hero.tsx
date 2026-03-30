"use client";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "Database Architect",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        75,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40,
      );
    } else {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIndex]);

  const trans = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(30px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      {/* Animated orbs */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-3xl animate-orb pointer-events-none" />
      <div
        className="absolute top-1/2 -right-48 w-[400px] h-[400px] rounded-full bg-violet-600/20 blur-3xl animate-orb pointer-events-none"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute -bottom-32 left-1/3 w-[350px] h-[350px] rounded-full bg-cyan-600/15 blur-3xl animate-orb pointer-events-none"
        style={{ animationDelay: "5s" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating code tags */}
      {[
        { text: "<React />", top: "18%", left: "8%", delay: "0s" },
        { text: "Node.js", top: "25%", right: "10%", delay: "0.5s" },
        { text: "PostgreSQL", bottom: "28%", left: "6%", delay: "1s" },
        { text: "TypeScript", bottom: "22%", right: "8%", delay: "1.5s" },
      ].map((tag, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-xs font-mono text-indigo-300 border border-indigo-500/20 animate-float"
          style={{
            top: tag.top,
            left: tag.left,
            right: tag.right,
            bottom: tag.bottom,
            animationDelay: tag.delay,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
          {tag.text}
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 text-center text-white w-full relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div
            style={trans(0)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-8 cursor-default"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
            Available for new projects
          </div>

          {/* Typewriter */}
          <div
            className="h-12 flex items-center justify-center gap-1 mb-6"
            style={trans(0.2)}
          >
            <span className="text-xl md:text-2xl text-gray-300 font-light">
              {displayed}
            </span>
            <span className="w-0.5 h-7 bg-indigo-400 animate-blink inline-block rounded-full" />
          </div>

          <p
            className="text-base md:text-lg mb-10 text-gray-400 leading-relaxed max-w-2xl mx-auto"
            style={trans(0.3)}
          >
            Crafting comprehensive digital solutions across healthcare,
            education, and business management from pixel-perfect UIs to robust
            backend systems.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            style={trans(0.4)}
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-full font-semibold text-base overflow-hidden gradient-bg text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
            >
              View My Work
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold text-base border border-white/15 text-gray-300 hover:border-indigo-500/60 hover:text-white hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 max-w-xl mx-auto"
            style={trans(0.5)}
          >
            {[
              { value: "20+", label: "Projects" },
              { value: "6+", label: "Years Exp." },
              { value: "5+", label: "Industries" },
            ].map((s, i) => (
              <div
                key={i}
                className="glass rounded-2xl px-4 py-5 hover:border-indigo-500/30 transition-colors duration-300 cursor-default"
              >
                <div className="text-2xl font-bold gradient-text">
                  {s.value}
                </div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-indigo-500/60 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
