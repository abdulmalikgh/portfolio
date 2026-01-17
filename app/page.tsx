"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold font-[var(--font-space-grotesk)]"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-white">Portfolio</span>
          <span className="text-emerald-500">.</span>
        </motion.div>

        <div className="hidden md:flex gap-8">
          {["About", "Experience", "Skills", "Projects", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 font-[var(--font-space-grotesk)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Hi, I'm </span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Abdul-Malik Musah
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Developer & Designer crafting beautiful digital experiences
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-gray-700 text-white rounded-full font-medium hover:border-gray-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-emerald-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center font-[var(--font-space-grotesk)]">
            <span className="text-white">About </span>
            <span className="text-emerald-500">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-purple-500/20 p-1">
                <div className="w-full h-full rounded-2xl bg-[#0a0a0a] flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a passionate developer with a keen eye for design and a love for creating
                seamless user experiences. With expertise in modern web technologies, I bring
                ideas to life through clean code and stunning visuals.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open source, or working on side projects that push my creative boundaries.
              </p>
              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href="#experience"
                  className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Experience
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting cloud-based solutions.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Startup Labs",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers to create responsive and accessible interfaces.",
      achievements: [
        "Built 10+ production applications",
        "Reduced load time by 60%",
        "Integrated payment systems",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Created engaging user interfaces and interactive experiences. Worked closely with UX team to implement pixel-perfect designs.",
      achievements: [
        "Delivered 20+ client projects",
        "Improved accessibility scores to 95+",
        "Mentored 3 junior developers",
      ],
    },
  ];

  const education = [
    {
      degree: "MSc Computer Science",
      school: "University of Ghana Legon-Accra, Ghana",
      period: "2024 - 2026",
      description: "Advanced studies in computer science with focus on modern computing technologies and research methodologies.",
      link: "https://www.ug.edu.gh/",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "University of Energy and Natural Resources, Sunyani, Ghana",
      period: "2016 - 2020",
      description: "Comprehensive education in computer engineering fundamentals, software development, and system design.",
      link: "https://uenr.edu.gh",
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-center flex-1 font-[var(--font-space-grotesk)]">
              <span className="text-white">Experience & </span>
              <span className="text-emerald-500">Education</span>
            </h2>
            <motion.a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download PDF
            </motion.a>
          </div>

          {/* Work Experience */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-gray-800 hover:border-emerald-500 transition-colors"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-500 rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />

                  <motion.div
                    className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{exp.title}</h4>
                        <p className="text-emerald-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-emerald-500 mt-1">▸</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-gray-800 hover:border-purple-500 transition-colors"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />

                  <motion.div
                    className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{edu.degree}</h4>
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 font-medium hover:text-purple-300 transition-colors hover:underline"
                        >
                          {edu.school}
                        </a>
                      </div>
                      <span className="text-gray-500 mt-2 md:mt-0">{edu.period}</span>
                    </div>
                    <p className="text-gray-400">{edu.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Download Button */}
          <motion.div
            className="mt-12 text-center md:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/resume.pdf"
              download
              className="inline-block px-8 py-4 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download PDF Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: "Vue.js", level: 95 },
    { name: "Nuxt.js", level: 95 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 70 },
    { name: "NestJS", level: 75 },
    { name: "GraphQL", level: 65 },
    { name: "Docker", level: 60 },
    { name: "Python", level: 75 },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center font-[var(--font-space-grotesk)]">
            <span className="text-white">Skills & </span>
            <span className="text-emerald-500">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-emerald-500 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A stunning web application built with modern technologies",
      tags: ["React", "Next.js", "Tailwind"],
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      title: "Project Two",
      description: "An innovative solution to complex problems",
      tags: ["TypeScript", "Node.js", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Project Three",
      description: "A beautiful and responsive design system",
      tags: ["React", "Framer Motion", "CSS"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center font-[var(--font-space-grotesk)]">
            <span className="text-white">Featured </span>
            <span className="text-emerald-500">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-white font-semibold">View Project →</span>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-[var(--font-space-grotesk)]">
            <span className="text-white">Let's Work </span>
            <span className="text-emerald-500">Together</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? Let's create something amazing together.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="mailto:musah.abdulmalikgh@gmail.com"
              className="px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abdulmalikgh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-700 text-white rounded-full font-medium hover:border-gray-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/abdulmalikgh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-700 text-white rounded-full font-medium hover:border-gray-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="tel:+233249809695" className="hover:text-emerald-400 transition-colors">
              +233 24 980 9695
            </a>
            <span className="hidden sm:inline">•</span>
            <span>Ghana</span>
          </motion.div>

          <motion.div
            className="mt-16 pt-8 border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-500">
              © 2025 Abdul-Malik Musah. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
