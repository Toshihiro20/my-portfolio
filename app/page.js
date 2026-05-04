export default function Home() {
  return (
    <main className="bg-gray-950 text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm z-50 px-8 py-4 flex justify-between items-center border-b border-gray-800">
        <span className="text-xl font-bold text-white">myportfolio.dev</span>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <p className="text-blue-400 text-sm font-medium mb-3 tracking-widest uppercase">Welcome to my portfolio</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I'm <span className="text-blue-400">Gartly R. Cortez</span> 👋</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-xl">I build clean, simple, and enjoyable web experiences.</p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">See Projects</a>
          <a href="#contact" className="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition">Contact Me</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-12 h-1 bg-blue-400 mb-8"></div>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Hi! I'm a frontend developer who enjoys building interfaces that are clean and easy to use.
          I'm still growing as a developer but I take pride in writing practical, simple solutions. ✨
        </p>
        <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map((tech) => (
            <span key={tech} className="bg-gray-800 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="w-12 h-1 bg-blue-400 mb-8"></div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Project One",
              desc: "A short description of what this project does and what problem it solves.",
              tags: ["React", "Tailwind"],
              link: "https://github.com"
            },
            {
              title: "Project Two",
              desc: "A short description of what this project does and what problem it solves.",
              tags: ["HTML", "CSS", "JavaScript"],
              link: "https://github.com"
            },
            {
              title: "Project Three",
              desc: "A short description of what this project does and what problem it solves.",
              tags: ["Next.js", "Tailwind"],
              link: "https://github.com"
            },
          ].map((project) => (
            <div key={project.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-800 text-blue-300 text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" className="text-blue-400 text-sm hover:underline">View on GitHub →</a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="w-12 h-1 bg-blue-400 mb-8 mx-auto"></div>
        <p className="text-gray-400 text-lg mb-8">Have a question or want to work together? Feel free to reach out! 💬</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:youremail@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">Email Me</a>
          <a href="https://github.com" target="_blank" className="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition">GitHub</a>
          <a href="https://linkedin.com" target="_blank" className="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition">LinkedIn</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 text-sm py-8 border-t border-gray-800">
        © 2026 Your Name. All rights reserved.
      </footer>

    </main>
  );
}