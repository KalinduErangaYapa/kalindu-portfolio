import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Code2, Layers, Cpu, ChevronRight, Terminal, User, Briefcase, Download } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleEmailLaunch = (e) => {
    e.preventDefault();
    if (!formData.message) return;
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:kalinduyapa@gmail.com?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo text-gradient">Kalindu.</div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section" id="home">
        <div className="container">
          <div className="hero-container">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="hero-content"
            >
              <motion.p variants={fadeInUp} className="text-gradient" style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: '1rem' }}>
                Hi there, I'm
              </motion.p>
              <motion.h1 variants={fadeInUp} className="hero-title">
                Kalindu Yapa <br />
                & <span className="text-muted">Software Engineer</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="hero-subtitle">
                Results-driven Software Engineer with 2 years of experience. Highly proficient in building efficient solutions with Java, PHP, React, and NestJS, while leveraging AI tools for accelerated development.
              </motion.p>
              <motion.div variants={fadeInUp} className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  View My Work <ChevronRight size={20} />
                </a>
                <a href="/Kalindu_Yapa_CV.pdf" download className="btn btn-outline">
                  Download CV <Download size={20} />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-image-wrapper"
            >
              <img src="/profile.png" alt="Kalindu Yapa" className="hero-image" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services/Skills Section */}
      <section className="section" id="about">
        <div className="container">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>My <span className="text-gradient">Expertise</span></h2>
            <p className="hero-subtitle">Specialized in modern web technologies and creative implementation.</p>
          </motion.div>

          <motion.div 
            className="projects-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: <Code2 size={24} />, title: "Frontend Dev", desc: "Expert in React, NextJS, Tailwind CSS, and Material UI building fully responsive web applications." },
              { icon: <Cpu size={24} />, title: "Backend Systems", desc: "Developing robust APIs and server-side logic using NestJS, Spring Boot, Laravel and MySQL." },
              { icon: <Terminal size={24} />, title: "AI Integration", desc: "Proficient with ChatGPT, Claude, and GitHub Copilot to improve problem-solving and code quality." },
              { icon: <Layers size={24} />, title: "Other Tools", desc: "Strong command of core languages like Java, PHP, Typescript/Javascript, and Python, alongside DevOps with GIT & Docker." }
            ].map((skill, index) => (
              <motion.div key={index} variants={fadeInUp} className="glass-card project-card">
                <div className="project-icon">{skill.icon}</div>
                <h3 className="project-title">{skill.title}</h3>
                <p className="project-desc">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="container">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Featured <span className="text-gradient">Work</span></h2>
            <p className="hero-subtitle">A selection of my recent creations and technical explorations.</p>
          </motion.div>

          <motion.div 
            className="projects-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { title: "TBT (Text Based Ticketing) System", desc: "Full-stack ticketing management system with secure authentication, team workflows, RBAC access control, and dynamic route support.", tech: ["React", "NestJS", "MySQL", "AWS S3"] },
              { title: "Boardima.com Web Application", desc: "Property listing web platform for finding boarding houses and apartments. Implemented core property listings and search features.", tech: ["PHP", "JavaScript", "MySQL"] },
              { title: "Point of Sale System with AI", desc: "Retail management POS system with integrated Machine Learning models for sales forecasting and real-time inventory predictions.", tech: ["React", "Spring Boot", "Java", "Python"] },
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp} className="glass-card project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                  <a href="#" className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}><ExternalLink size={16} /> Live Demo</a>
                  <a href="#" className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}><Code2 size={16} /> Code</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact" style={{ minHeight: '80vh' }}>
        <div className="container">
          <motion.div 
            className="glass-card contact-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="contact-grid">
              <div>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's Build <br/><span className="text-gradient">Together</span></h2>
                <p className="project-desc" style={{ maxWidth: '400px', marginBottom: '2rem' }}>
                  Interested in collaborating or have a project in mind? Let's connect and make something amazing.
                </p>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon"><Mail size={20} /></div>
                    <span>kalinduyapa@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon"><Code2 size={20} /></div>
                    <span>github.com/KalinduErangaYapa</span>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon"><Briefcase size={20} /></div>
                    <span>linkedin.com/in/kalinduyapa</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleEmailLaunch} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', color: 'white', fontFamily: 'inherit' }}
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', color: 'white', fontFamily: 'inherit' }}
                />
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', color: 'white', fontFamily: 'inherit', resize: 'none' }}
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Kalindu Yapa. Crafted with React and Framer Motion.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
