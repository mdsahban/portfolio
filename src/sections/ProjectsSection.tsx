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
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
    link: 'https://github.com/mdsahban/ai-upload-guardian',
  },
  {
    number: '02',
    title: 'Real-time Video & Chat',
    category: 'Web App',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
    link: 'https://github.com/mdsahban/videocall.js',
  },
  {
    number: '03',
    title: 'Webpage Summarizer',
    category: 'Chrome Extension',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
    link: 'https://github.com/mdsahban/Webpage-Summarizer',
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
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
        <div className="flex flex-col gap-2">
          <p className="text-[#D7E2EA]/60 font-light uppercase text-xs sm:text-sm tracking-wide">
            {project.category}
          </p>
          <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight">
            {project.title}
          </h3>
        </div>
        <p className="text-[#D7E2EA] font-black text-[clamp(2.5rem,8vw,120px)] leading-none">
          {project.number}
        </p>
      </div>

      {/* CTA Button */}
      <div className="mb-8 sm:mb-10 md:mb-12">
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
            className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover h-[clamp(130px,16vw,230px)]"
          />
          <img
            src={project.images.col1[1]}
            alt="Project"
            className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover h-[clamp(160px,22vw,340px)]"
          />
        </div>

        {/* Right Column - 1 tall image */}
        <img
          src={project.images.col2}
          alt="Project"
          className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover h-[clamp(300px,39vw,580px)]"
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
