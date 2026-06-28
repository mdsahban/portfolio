import { motion } from 'framer-motion'
import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'

const navLinks = ['About', 'Works', 'Skills', 'Contact']

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip bg-[#0C0C0C] relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
        <div className="flex justify-between gap-8 md:gap-16 flex-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} as="div" className="overflow-hidden flex-1 flex items-center justify-center">
        <h1 className="hero-heading text-[9vw] sm:text-[10vw] md:text-[10.5vw] lg:text-[11vw] font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center">
          Hi, i&apos;m sahban
        </h1>
      </FadeIn>

      {/* Bottom Bar */}
      <FadeIn delay={0.35} y={20} as="div" className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
          software engineer + cybersecurity enthusiast crafting secure and scalable digital experiences
        </p>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </FadeIn>

      {/* Hero Portrait Removed */}
    </section>
  )
}
