export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-[#bac3f7]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold" style={{ color: '#bac3f7' }}>
            Portfolio
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-700 hover:text-[#bac3f7] transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-[#bac3f7] transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-[#bac3f7] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Hi, I&apos;m <span style={{ color: '#bac3f7' }}>Chloe</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-gray-700">
                Web Developer & Designer
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                I create beautiful, functional websites and applications that bring ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center rounded-full px-8 text-white font-medium transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: '#bac3f7' }}
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full px-8 font-medium transition-all hover:scale-105 border-2"
                  style={{ borderColor: '#bac3f7', color: '#bac3f7' }}
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div 
                className="w-64 h-64 rounded-full flex items-center justify-center text-6xl font-bold text-white"
                style={{ backgroundColor: '#bac3f7' }}
              >
                C
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            About <span style={{ color: '#bac3f7' }}>Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I&apos;m a passionate developer with a love for creating elegant solutions to complex problems. 
              My journey in web development has been driven by curiosity and a desire to build things that matter.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge with the developer community.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                <div
                  key={skill}
                  className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl font-bold mb-2" style={{ color: '#bac3f7' }}>
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            My <span style={{ color: '#bac3f7' }}>Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white border border-gray-100"
              >
                <div 
                  className="h-48 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: '#bac3f7' }}
                >
                  Project {project}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used to build it.
                  </p>
                  <a
                    href="#"
                    className="inline-block font-medium hover:underline"
                    style={{ color: '#bac3f7' }}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Get In <span style={{ color: '#bac3f7' }}>Touch</span>
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-white font-medium transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: '#bac3f7' }}
            >
              Email Me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 font-medium transition-all hover:scale-105 border-2"
              style={{ borderColor: '#bac3f7', color: '#bac3f7' }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 font-medium transition-all hover:scale-105 border-2"
              style={{ borderColor: '#bac3f7', color: '#bac3f7' }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Chloe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
