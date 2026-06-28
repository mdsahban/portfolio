import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'

export default function App() {
  return (
    <main className="bg-[#0C0C0C] overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
