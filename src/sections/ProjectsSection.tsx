import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

const projects = [
  {
    number: '01',
    title: 'AI Upload Guardian',
    category: 'Chrome Extension',
    images: {
      col1: [
        '/image/AI Upload Guardian 01.png',
        '/image/AI Upload Guardian 02.png',
      ],
      col2: '/image/AI Upload Guardian 03.png',
    },
    link: 'https://github.com/mdsahban/ai-upload-guardian',
  },
  {
    number: '02',
    title: 'Real-time Video & Chat',
    category: 'Web App',
    images: {
      col1: [
        '/image/videochat.png',
        '/image/videochat.png',
      ],
      col2: '/image/videochat.png',
    },
    link: 'https://github.com/mdsahban/videocall.js',
  },
  {
    number: '03',
    title: 'Webpage Summarizer',
    category: 'Chrome Extension',
    images: {
      col1: [
        '/image/summarizer.png',
        '/image/summarizer.png',
      ],
      col2: '/image/summarizer.png',
    },
    link: 'https://github.com/mdsahban/Webpage-Summarizer',
  },
  {
    number: '04',
    title: 'NextGenEV',
    category: 'E-commerce',
    images: {
      col1: [
        '/image/nextgenEV.jpeg',
        '/image/nextgenEV 02.jpg',
      ],
      col2: '/image/nextgenEV.jpeg',
    },
    link: 'https://ngenev.com',
  },
]

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const totalCards = projects.length
  const targetScale = 1 - (totalCards - 1 - index) * 0.05
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        top: `${index * 28}px`,
      }}
      className="sticky rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
    >
      {/* Top Row */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
        <div className="flex flex-col gap-2">
          <p className="text-[#D7E2EA]/60 font-light uppercase text-xs sm:text-sm tracking-wide">
            {project.category}
          </p>
          <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.2rem,3.5vw,2rem)] tracking-tight">
            {project.title}
          </h3>
        </div>
        <p className="text-[#D7E2EA] font-black text-[clamp(2rem,7vw,100px)] leading-none">
          {project.number}
        </p>
      </div>

      {/* CTA Button */}
      <div className="mb-6 sm:mb-8 md:mb-10">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <LiveProjectButton />
        </a>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-[40%_60%] gap-3 sm:gap-4 md:gap-6">
        {/* Left Column - 2 stacked images */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
          <img
            src={project.images.col1[0]}
            alt="Project"
            className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] object-cover h-[clamp(100px,13vw,180px)]"
          />
          <img
            src={project.images.col1[1]}
            alt="Project"
            className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] object-cover h-[clamp(130px,18vw,260px)]"
          />
        </div>

        {/* Right Column - 1 tall image */}
        <img
          src={project.images.col2}
          alt="Project"
          className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] object-cover h-[clamp(240px,32vw,450px)]"
        />
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      id="works"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 pb-20"
    >
      {/* Heading */}
      <FadeIn className="text-center mb-20">
        <h2 className="hero-heading text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
          Projects
        </h2>
      </FadeIn>

      {/* Projects */}
      <div className="max-w-5xl mx-auto relative flex flex-col gap-[10vh] pb-[10vh]">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
