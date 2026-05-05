"use client";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  const t = {
    bg: dark ? "bg-gray-950" : "bg-gray-50",
    nav: dark ? "bg-gray-950/80 border-gray-800" : "bg-white/80 border-gray-200",
    text: dark ? "text-white" : "text-gray-900",
    subtext: dark ? "text-gray-400" : "text-gray-500",
    card: dark
      ? "bg-gray-900 border-gray-800 hover:border-blue-500"
      : "bg-white border-gray-200 hover:border-blue-400",
    badge: dark ? "bg-gray-800 text-blue-300" : "bg-blue-50 text-blue-600",
    navlink: dark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900",
    footer: dark ? "border-gray-800 text-gray-600" : "border-gray-200 text-gray-400",
    outlineBtn: dark
      ? "border border-gray-600 hover:border-white text-gray-300 hover:text-white"
      : "border border-gray-300 hover:border-gray-900 text-gray-600 hover:text-gray-900",
  };

  const projects = [
    {
      title: "Matching Lost and Found Items Using Scale-Invariant Feature Transform",
      desc: "a full-stack lost-and-found management platform using React/TypeScript and Flask with secure admin authentication, claim/report workflows, and intelligent item matching.",
      tags: ["React", "Tailwind"],
      link: "https://github.com/Ejanng/FLRT-2.0.git",
    },
    {
      title: "Cafe Management System",
      desc: "a C++-based Cafe Management System designed to handle menu display, order processing, and sales record management.",
      tags: ["C/C++"],
      link: "https://github.com",
    },
    {
      title: "Project Three",
      desc: "A short description of what this project does.",
      tags: ["Next.js", "Tailwind"],
      link: "https://github.com",
    },
    {
      title: "Project Four",
      desc: "Short description here.",
      tags: ["React", "Node.js"],
      link: "https://github.com",
    },
  ];

  return (
    <main className={`${t.bg} ${t.text} font-sans transition-colors duration-300`}>

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full ${t.nav} backdrop-blur-sm z-50 px-8 py-4 flex justify-between items-center border-b`}>
        <span className="text-xl font-bold">Gartly.dev</span>

        <div className="flex items-center gap-6 text-sm">
          <a href="#home" className={`${t.navlink}`}>Home</a>
          <a href="#about" className={`${t.navlink}`}>About</a>
          <a href="#projects" className={`${t.navlink}`}>Projects</a>
          <a href="#contact" className={`${t.navlink}`}>Contact</a>

          <button
            onClick={() => setDark(!dark)}
            className={`w-14 h-7 rounded-full relative transition ${dark ? "bg-blue-500" : "bg-gray-300"}`}
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full shadow transition-all duration-300 flex items-center justify-center text-xs
              ${dark ? "left-8 bg-gray-950 text-yellow-300" : "left-1 bg-white text-yellow-500"}`}
            >
              {dark ? "🌙" : "☀️"}
            </span>
          </button>
        </div>
      </nav>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="w-12 h-1 bg-blue-400 mb-8"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} project={project} t={t} delay={index * 120} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`text-center text-sm py-8 border-t ${t.footer}`}>
        © 2026 Gartly R. Cortez. All rights reserved.
      </footer>

    </main>
  );
}

/* ✨ Animated Card Component */
function AnimatedCard({ project, t, delay }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`
        ${t.card} border rounded-xl p-6 will-change-transform
        transform transition-all duration-500 ease-out
        ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}
        hover:scale-105 hover:-translate-y-2
      `}
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className={`${t.subtext} text-sm mb-4`}>{project.desc}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className={`${t.badge} text-xs px-3 py-1 rounded-full`}>
            {tag}
          </span>
        ))}
      </div>

      <a href={project.link} target="_blank" className="text-blue-400 text-sm hover:underline">
        View on GitHub →
      </a>
    </div>
  );
}