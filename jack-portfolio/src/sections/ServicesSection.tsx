import FadeIn from '../components/FadeIn'

const services = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Building responsive, modern, and conversion-focused websites with clean code, optimal performance, and excellent user experience using HTML, CSS, JavaScript, and WordPress.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces with attention to layout, typography, color psychology, and accessibility standards to enhance user engagement.',
  },
  {
    number: '03',
    title: 'Cybersecurity',
    description: 'Implementing security best practices, threat analysis, network security, and SOC fundamentals to protect digital assets and ensure data integrity across web applications.',
  },
  {
    number: '04',
    title: 'Branding',
    description: 'Crafting cohesive visual identities from logos to complete brand systems that communicate a clear, memorable, and authentic presence to target audiences.',
  },
  {
    number: '05',
    title: 'Full Stack Solutions',
    description: 'Developing end-to-end solutions combining frontend, backend, and database technologies with focus on scalability, maintainability, and robust performance.',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      {/* Heading */}
      <FadeIn className="text-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
          Services
        </h2>
      </FadeIn>

      {/* Services List */}
      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn
            key={i}
            delay={i * 0.1}
            className="flex gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0"
          >
            <div className="flex-shrink-0">
              <p className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none">
                {service.number}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#0C0C0C]/60 font-light text-[clamp(0.85rem,1.6vw,1.25rem)] leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
