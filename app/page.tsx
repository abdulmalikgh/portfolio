"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

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
            <TypeAnimation
              sequence={[
                'Full-Stack Engineer crafting beautiful digital experiences',
                2000,
                'Full-Stack Developer building scalable solutions',
                2000,
                'Backend & Frontend Architect crafting elegant systems',
                2000,
                'Microservices Developer building robust applications',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="inline-block"
            />
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
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src="/image.jpeg"
                    alt="Abdul-Malik Musah"
                    fill
                    className="object-cover"
                    priority
                  />
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
      title: "Full-Stack Software Developer",
      company: "Right Com",
      companyUrl: "https://rightcom.com/queue-management-software/",
      period: "August 2022 - December 2024",
      description: "Oversee the backend queue management with a focus on implementing effective business logic. Develop and sustain new user interfaces while seamlessly integrating frontend React components with backend APIs.",
      achievements: [
        "Implemented strategic code refactoring techniques, resulting in remarkable improvement in overall app speed",
        "Actively engage in stand-up meetings and contribute to sprint planning sessions",
        "Seamlessly integrated React components with backend APIs",
      ],
      skills: ["React", "Node.js", "Express", "Queue Management", "REST API", "TypeScript"],
    },
    {
      title: "Front-end Engineer",
      company: "mNotify",
      companyUrl: "https://bms.mnotify.com/",
      period: "April 2021 - December 2022",
      description: "Crafted responsive User and Admin dashboards by translating Figma UI designs into functional interfaces. Developed front-end services and incorporated them into a Restful API server within a micro-service architecture.",
      achievements: [
        "Built responsive User and Admin dashboards from Figma designs",
        "Integrated frontend services with Restful API in microservices architecture",
        "Collaborated with UI/UX designers and backend developers for seamless integration",
      ],
      skills: ["Vue.js", "SASS", "Element UI", "Bootstrap", "REST API", "Microservices"],
    },
    {
      title: "Front-end Engineer",
      company: "Mpedigree",
      companyUrl: "https://mpedigree.com/",
      period: "September 2019 - September 2023",
      description: "Managed and enhanced the ecobankfintech software, introducing new features and updating the UI to align with contemporary web application standards. Led a three-person development team in creating highly responsive and scalable web applications.",
      achievements: [
        "Led 3-person development team to create scalable web applications",
        "Contributed to Africaboma's front-end, enabling 1,000+ Africans to submit creative art challenges",
        "Integrated YouNoodle script to streamline application form submissions",
      ],
      skills: ["Vue.js", "JavaScript", "Microservices", "HTML", "CSS"],
    },
    {
      title: "Full Stack Engineer",
      company: "Syncline IT Solutions (Infonaligy)",
      companyUrl: "http://www.syncline.it/",
      period: "April 2021 - September 2021",
      description: "Played a key role in the development of the ATLAS General application, contributing to both the back-end and front-end within a micro-service architecture. Employed Laravel, TypeScript, and REST API to construct well-organized and rigorously tested RESTful APIs.",
      achievements: [
        "Developed ATLAS General application with full-stack contributions",
        "Constructed well-organized and rigorously tested RESTful APIs",
        "Transformed DOM PDF documents into pristine RESTful API using Laravel 8",
      ],
      skills: ["Laravel", "TypeScript", "REST API", "PHP", "FPDF", "Microservices"],
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
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors hover:underline"
                        >
                          {exp.company}
                        </a>
                      </div>
                      <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <ul className="space-y-2 mb-4">
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
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
    { name: "Laravel", level: 70 },
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
      title: "Resume Builder Pro",
      description: "A next-generation resume building platform with real-time preview, ATS-friendly layouts, and verification badges for students and professionals",
      tags: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS", "shadcn/ui"],
      gradient: "from-emerald-500 to-cyan-500",
      liveUrl: "https://resume-builder-amber-pi.vercel.app/",
      githubUrl: "https://github.com/abdulmalikgh/resume-builder",
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
                className="group"
              >
                <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all relative">
                  <a
                    href={project.liveUrl || project.githubUrl || "#"}
                    target={project.liveUrl || project.githubUrl ? "_blank" : undefined}
                    rel={project.liveUrl || project.githubUrl ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden cursor-pointer`}>
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-white font-semibold">
                          {project.liveUrl ? "View Live →" : project.githubUrl ? "View Code →" : "View Project →"}
                        </span>
                      </motion.div>
                    </div>
                  </a>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      {project.githubUrl && project.liveUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </motion.a>
                      )}
                    </div>
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
