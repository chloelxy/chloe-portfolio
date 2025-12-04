'use client';

import { useState } from 'react';

export default function Home() {
  const particles = useState(() => {
    return Array.from({ length: 30 }, () => ({
      width: Math.random() * 6 + 3,
      height: Math.random() * 6 + 3,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 2,
    }));
  })[0];

  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma', 'JavaScript', 'Adobe Illustrator'];
  const workExperience = [
    { icon: '⭐', title: 'CIB on the Mobile' },
    { icon: '☕', title: 'CIB on the Mobile' },
    { icon: '💡', title: 'CIB on the Mobile' },
    { icon: '⚡', title: 'CIB on the Mobile' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0a0e27', fontFamily: 'var(--font-geist-sans)' }}>
      {/* Animated Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ backgroundColor: '#bac3f7', animation: 'float 8s ease-in-out infinite' }}></div>
        <div className="absolute top-40 right-20 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#bac3f7', animation: 'float 10s ease-in-out infinite reverse' }}></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: '#bac3f7', animation: 'float 7s ease-in-out infinite' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              backgroundColor: '#bac3f7',
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              boxShadow: `0 0 ${particle.width * 2}px ${particle.width}px rgba(186, 195, 247, 0.5)`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Central Glowing Symbol with Orbiting Lines */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-20">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl font-bold" style={{ color: '#bac3f7', textShadow: '0 0 40px rgba(186, 195, 247, 0.8)' }}>
              Σ
            </div>
          </div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-32 h-0.5 origin-left"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                background: `linear-gradient(90deg, transparent, #bac3f7, transparent)`,
                animation: `rotate ${10 + i}s linear infinite`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(186, 195, 247, 0.5), 0 0 40px rgba(186, 195, 247, 0.3); }
          50% { box-shadow: 0 0 30px rgba(186, 195, 247, 0.8), 0 0 60px rgba(186, 195, 247, 0.5); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(10, 14, 39, 0.8)', borderBottom: '1px solid rgba(186, 195, 247, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-10">
          <div className="text-2xl font-bold" style={{ color: '#bac3f7', textShadow: '0 0 20px rgba(186, 195, 247, 0.5)' }}>
            Σ Portfolio
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-white hover:text-[#bac3f7] transition-colors font-medium">Home</a>
            <a href="#about" className="text-white hover:text-[#bac3f7] transition-colors font-medium">About</a>
            <a href="#work" className="text-white hover:text-[#bac3f7] transition-colors font-medium">Lab</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left" style={{ animation: 'slideInUp 0.8s ease-out' }}>
              <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
                Hello! I Am <span style={{ color: '#bac3f7' }}>Chloe</span>
              </h1>
              <p className="text-3xl md:text-4xl mb-8 text-white font-light">
                I&apos;m a <span style={{ color: '#bac3f7' }}>Software Engineer</span>
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                A Designer who Judges a book by its <span style={{ color: '#bac3f7', fontWeight: 'bold' }}>cover</span>... 
                Because if the cover does not impress you what else can?
              </p>
              <p className="text-base text-gray-400 mb-12 max-w-2xl leading-relaxed">
                I&apos;m a passionate developer with a love for creating elegant solutions to complex problems. 
                My journey in web development has been driven by curiosity and a desire to build things that matter.
              </p>
            </div>
            <div className="flex-1 flex justify-center relative">
              {/* Avatar with Glow */}
              <div className="relative">
                <div 
                  className="w-80 h-80 rounded-full flex items-center justify-center text-8xl font-bold text-white relative z-10"
                  style={{ 
                    background: 'linear-gradient(135deg, #bac3f7 0%, #8fa3e8 50%, #bac3f7 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'pulse 3s ease-in-out infinite',
                    boxShadow: '0 0 60px rgba(186, 195, 247, 0.8), 0 0 120px rgba(186, 195, 247, 0.4)',
                  }}
                >
                  <span className="relative z-10">C</span>
                </div>
                {/* Outer Glow Ring */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '3px solid #bac3f7',
                    opacity: 0.4,
                    animation: 'pulse 2s ease-in-out infinite',
                    transform: 'scale(1.2)',
                    boxShadow: '0 0 40px rgba(186, 195, 247, 0.6)',
                  }}
                />
                {/* Speech Bubble */}
                <div 
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-[#bac3f7]/30"
                  style={{
                    width: '280px',
                    boxShadow: '0 0 30px rgba(186, 195, 247, 0.4)',
                    animation: 'fadeIn 1s ease-out 0.5s both',
                  }}
                >
                  <p className="text-sm text-white leading-relaxed">
                    A Designer who Judges a book by its <span style={{ color: '#bac3f7', fontWeight: 'bold' }}>cover</span>... 
                    Because if the cover does not impress you what else can?
                  </p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent" style={{ borderTopColor: 'rgba(186, 195, 247, 0.3)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-white">
            Work <span style={{ color: '#bac3f7' }}>Experience</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workExperience.map((work, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#bac3f7]/20 hover:border-[#bac3f7]/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group cursor-pointer"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                  boxShadow: '0 0 30px rgba(186, 195, 247, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(186, 195, 247, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(186, 195, 247, 0.2)';
                }}
              >
                <div className="text-4xl mb-4">{work.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{work.title}</h3>
                <button 
                  className="mt-4 px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ backgroundColor: '#bac3f7', color: 'white' }}
                >
                  LEARN MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills/About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives through accessible design.
            </p>
            
            {/* Skills Network/Constellation */}
            <div className="relative h-96 mb-12">
              {skills.map((skill, index) => {
                const angle = (index * 360) / skills.length;
                const radius = 150;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div key={skill} className="absolute" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}>
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-xs font-semibold text-white bg-white/10 backdrop-blur-sm border border-[#bac3f7]/30 hover:border-[#bac3f7] transition-all hover:scale-110 cursor-pointer"
                      style={{
                        boxShadow: '0 0 20px rgba(186, 195, 247, 0.3)',
                        animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      {skill}
                    </div>
                    {/* Connection Lines */}
                    {index < skills.length - 1 && (
                      <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: '300px', height: '300px', zIndex: -1 }}>
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`${50 + (x / 3)}%`}
                          y2={`${50 + (y / 3)}%`}
                          stroke="rgba(186, 195, 247, 0.2)"
                          strokeWidth="1"
                        />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-white text-center">
            My <span style={{ color: '#bac3f7' }}>Projects</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing my skills and creativity.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Spotify Data Visualizer',
                description: 'A web app for visualizing personalized Spotify data. View your top artists, tracks, and genres.',
                tech: ['React', 'Next.js', 'Spotify API'],
                image: '🎵'
              },
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
                tech: ['Next.js', 'Node.js', 'MongoDB'],
                image: '🛒'
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management tool with real-time updates and team collaboration features.',
                tech: ['React', 'Firebase', 'TypeScript'],
                image: '✅'
              },
              {
                title: 'Weather Dashboard',
                description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
                tech: ['Vue.js', 'OpenWeather API', 'Chart.js'],
                image: '🌤️'
              },
              {
                title: 'Social Media Analytics',
                description: 'Analytics platform for tracking social media performance and engagement metrics.',
                tech: ['React', 'Python', 'PostgreSQL'],
                image: '📊'
              },
              {
                title: 'Portfolio Website',
                description: 'A modern, responsive portfolio website with dark theme and dynamic animations.',
                tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
                image: '💼'
              },
            ].map((project, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#bac3f7]/20 hover:border-[#bac3f7]/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group cursor-pointer overflow-hidden"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                  boxShadow: '0 0 30px rgba(186, 195, 247, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(186, 195, 247, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(186, 195, 247, 0.2)';
                }}
              >
                {/* Project Image/Icon */}
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                
                {/* Project Title */}
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#bac3f7] transition-colors">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#bac3f7]/20 text-[#bac3f7] border border-[#bac3f7]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* View Project Button */}
                <button 
                  className="w-full px-6 py-3 rounded-full text-sm font-medium transition-all hover:scale-105 group-hover:shadow-lg"
                  style={{ 
                    backgroundColor: '#bac3f7', 
                    color: 'white',
                    boxShadow: '0 0 20px rgba(186, 195, 247, 0.3)'
                  }}
                >
                  View Project
                </button>
                
                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(186, 195, 247, 0.1) 0%, transparent 70%)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-white">
            Get In <span style={{ color: '#bac3f7' }}>Touch</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-full px-10 text-white font-medium transition-all hover:scale-110 relative overflow-hidden group"
              style={{ backgroundColor: '#bac3f7', boxShadow: '0 0 30px rgba(186, 195, 247, 0.5)' }}
            >
              <span className="relative z-10">Email Me</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full px-10 font-medium transition-all hover:scale-110 border-2 group relative overflow-hidden"
              style={{ borderColor: '#bac3f7', color: '#bac3f7', boxShadow: '0 0 20px rgba(186, 195, 247, 0.3)' }}
            >
              <span className="relative z-10">GitHub</span>
              <div className="absolute inset-0 bg-[#bac3f7] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full px-10 font-medium transition-all hover:scale-110 border-2 group relative overflow-hidden"
              style={{ borderColor: '#bac3f7', color: '#bac3f7', boxShadow: '0 0 20px rgba(186, 195, 247, 0.3)' }}
            >
              <span className="relative z-10">LinkedIn</span>
              <div className="absolute inset-0 bg-[#bac3f7] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 relative z-10" style={{ borderTop: '1px solid rgba(186, 195, 247, 0.2)' }}>
        <div className="max-w-7xl mx-auto text-center" style={{ color: '#bac3f7' }}>
          <p>© {new Date().getFullYear()} Chloe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
