import FadeIn from '../components/FadeIn'

const experiences = [
  {
    number: '01',
    title: 'Cybersecurity & Ethical Hacking Intern',
    company: 'CODTECH IT SOLUTIONS',
    date: 'Jun 2025 – Jul 2025',
    description: 'Performed vulnerability reconnaissance and documented remediation strategies for simulated enterprise environments using Burp Suite and Splunk. Conducted threat analysis aligned with OWASP principles and developed foundational skills in ethical hacking workflows.',
  },
  {
    number: '02',
    title: 'Frontend Developer (Freelance)',
    company: 'NextGenEV',
    date: 'Dec 2025',
    description: 'Architected a production Shopify e-commerce platform for an EV brand. Built custom Liquid theme components and responsive CSS/JS overrides. Integrated payment and shipping gateways enabling seamless multi-region transactional workflows.',
  },
  {
    number: '03',
    title: 'B.E. in Electronics & Communication Engineering',
    company: 'Sathyabama Institute of Science and Technology',
    date: '2024 – 2027',
    description: 'Chennai, India',
  },
  {
    number: '04',
    title: 'Diploma in Computer Science Engineering',
    company: 'Guru Tegh Bahadur Polytechnic Institute',
    date: '2021 – 2024',
    description: 'New Delhi, India',
  },
]

export default function ExperienceSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      {/* Heading */}
      <FadeIn className="text-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-[#0C0C0C] text-[clamp(2.5rem,10vw,140px)] font-black uppercase leading-none tracking-tight">
          Experience
        </h2>
      </FadeIn>

      {/* Experience List */}
      <div className="max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <FadeIn
            key={i}
            delay={i * 0.1}
            className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0"
          >
            <div className="flex-shrink-0 md:w-32">
              <p className="text-[#0C0C0C] font-black text-[clamp(3rem,8vw,100px)] leading-none md:mt-2">
                {exp.number}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2vw,1.8rem)] tracking-tight">
                  {exp.title}
                </h3>
                <span className="text-[#0C0C0C]/50 font-medium text-sm whitespace-nowrap">{exp.date}</span>
              </div>
              <h4 className="text-[#0C0C0C]/80 font-medium text-[clamp(0.9rem,1.5vw,1.2rem)]">
                {exp.company}
              </h4>
              <p className="text-[#0C0C0C]/60 font-light text-[clamp(0.85rem,1.4vw,1.1rem)] leading-relaxed max-w-3xl mt-2">
                {exp.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
