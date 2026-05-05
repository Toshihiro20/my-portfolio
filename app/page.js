/* eslint-disable @next/next/no-img-element */
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
    techCard: dark
      ? "bg-gray-900 border-gray-800 hover:border-blue-500 text-gray-300"
      : "bg-white border-gray-200 hover:border-blue-400 text-gray-700",
  };

  const techStack = [
    { name: "HTML",       icon: "🌐" },
    { name: "CSS",        icon: "🎨" },
    { name: "JavaScript", icon: "JS" },
    { name: "Bootstrap",     icon: "" },
    { name: "React",      icon: "⚛"  },
    { name: "Next.js",    icon: "▲"  },
    { name: "Tailwind",   icon: "💨" },
    { name: "C / C++",    icon: "⚙"  },
    { name: "Git",        icon: "🔀" },
    { name: "GitHub",     icon: "🐙" },
  ];

  const projects = [
    {
      title: "Matching Lost and Found Items Using Scale-Invariant Feature Transform",
      desc: "Full-stack lost-and-found platform with intelligent matching and admin workflows.",
      tags: ["React", "Tailwind"],
      link: "https://github.com/Ejanng/FLRT-2.0.git",
    },
    {
      title: "Cafe Management System",
      desc: "C++ system for menu handling, ordering, and sales tracking.",
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
          <a href="#home" className={t.navlink}>Home</a>
          <a href="#about" className={t.navlink}>About</a>
          <a href="#projects" className={t.navlink}>Projects</a>
          <a href="#contact" className={t.navlink}>Contact</a>

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

      {/* HERO */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <p className="text-blue-400 text-sm mb-3 uppercase tracking-widest">
          Welcome to my portfolio
        </p>

        <div className="w-36 h-36 rounded-full border-4 border-blue-400 overflow-hidden mb-6 shadow-lg shadow-blue-500/30">
          <img src="/mypicture.png" alt="profile" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I am <span className="text-blue-400">Gartly R. Cortez</span> 👋
        </h1>

        <p className={`${t.subtext} text-xl mb-8 max-w-xl`}>
          I build clean, simple, and enjoyable web experiences.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            See Projects
          </a>
          <a href="#contact" className={`${t.outlineBtn} px-6 py-3 rounded-lg`}>
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-12 h-1 bg-blue-400 mb-8"></div>

        <p className={`${t.subtext} text-lg mb-10`}>
          "Hi, I am Gartly. I specialize in frontend development, specifically working within the React ecosystem to build seamless interfaces. While I'm constantly learning new ways to improve my craft, I take pride in delivering straightforward, functional layouts that make the web a little easier to navigate."
        </p>

        <div className="flex flex-wrap gap-3">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"].map((tech) => (
            <span key={tech} className={`${t.badge} px-4 py-2 rounded-full text-sm`}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Tech Stack</h2>
        <div className="w-12 h-1 bg-blue-400 mb-8"></div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className={`
                ${t.techCard} border rounded-xl
                flex flex-col items-center justify-center gap-2
                py-5 px-3 text-center
                transition-all duration-200
                hover:scale-105 hover:-translate-y-1
              `}
            >
              <span className="text-2xl leading-none select-none">{tech.icon}</span>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

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

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="w-12 h-1 bg-blue-400 mb-8 mx-auto"></div>

        <p className={`${t.subtext} mb-8`}>
          Feel free to reach out if you want to collaborate.
        </p>

        <div className="flex justify-center gap-6">
          <a href="mailto:cortezgartly@gmail.com" className="bg-blue-500 text-white px-6 py-3 rounded-lg">
            Email Me
          </a>
          <a href="https://github.com/Toshihiro20" className={t.outlineBtn + " px-6 py-3 rounded-lg"}>
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`text-center text-sm py-8 border-t ${t.footer}`}>
        © 2026 Gartly R. Cortez
      </footer>
    </main>
  );
}

/* ✨ Animated Project Card */
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
        ${t.card} border rounded-xl p-6
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