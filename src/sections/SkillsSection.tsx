import FadeIn from '../components/FadeIn'

const skills = [
  {
    number: '01',
    title: 'Languages',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Frameworks/Web',
    items: ['HTML', 'CSS', 'Spring Boot', 'REST API', 'WordPress', 'Shopify (Liquid)'],
  },
  {
    number: '03',
    title: 'Databases & OS',
    items: ['MySQL', 'DBMS', 'Linux', 'Windows'],
  },
  {
    number: '04',
    title: 'Security',
    items: ['Burp Suite', 'Splunk', 'Nmap', 'Network Fundamentals', 'Security Concepts'],
  },
  {
    number: '05',
    title: 'Tools/Platforms',
    items: ['Git, GitHub', 'Postman', 'Render, Vercel, Supabase', 'VS Code'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      {/* Heading */}
      <FadeIn className="text-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
          Skills
        </h2>
      </FadeIn>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {skills.map((skill, i) => (
          <FadeIn
            key={i}
            delay={i * 0.08}
            className="bg-[#f5f5f5] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-6 sm:p-8 md:p-10"
          >
            <p className="text-[#0C0C0C]/40 font-black text-[clamp(2rem,6vw,100px)] leading-none mb-4">
              {skill.number}
            </p>
            <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,1.8rem)] tracking-tight mb-4">
              {skill.title}
            </h3>
            <ul className="space-y-2">
              {skill.items.map((item, j) => (
                <li key={j} className="text-[#0C0C0C] font-light text-[clamp(0.9rem,1.5vw,1.1rem)] flex items-start gap-2">
                  <span className="text-[#0C0C0C] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
