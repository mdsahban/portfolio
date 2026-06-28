import FadeIn from '../components/FadeIn'
import { useState } from 'react'

export default function ContactSection() {
  const [status, setStatus] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    
    setStatus('Sending...')

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setStatus("Thank you for contacting! I will get back to you soon.")
        form.reset()
      } else {
        setStatus("Oops! Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("Oops! Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 relative overflow-hidden">
      <FadeIn className="text-center mb-16 sm:mb-20">
        <h2 className="text-[#D7E2EA] text-[clamp(3rem,8vw,100px)] font-black uppercase tracking-tight">
          Let's Work Together
        </h2>
        <p className="text-[#D7E2EA]/60 mt-4 text-lg max-w-2xl mx-auto">
          Just simple like that!
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Form */}
        <FadeIn delay={0.2} className="bg-[#151515] p-8 md:p-12 rounded-[40px] border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="c6737efc-c632-4e5a-8dd9-239906053dc1" />
            <input type="hidden" name="from_name" value="Portfolio Contact" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" name="first_name" placeholder="First name" required className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors" />
              <input type="text" name="last_name" placeholder="Last name" required className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="email" name="email" placeholder="Email address" required className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors" />
              <input type="text" name="phone" placeholder="Phone number" required className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors" />
            </div>
            
            <select name="subject_type" required className="w-full bg-transparent border-b border-white/20 pb-3 text-white/50 focus:text-white focus:outline-none focus:border-white transition-colors">
              <option value="" className="bg-[#151515]">—Please choose an option—</option>
              <option value="project" className="bg-[#151515]">Project Inquiry</option>
              <option value="hire" className="bg-[#151515]">Hire Me</option>
              <option value="other" className="bg-[#151515]">Other</option>
            </select>
            
            <textarea name="message" placeholder="Your message" required rows={4} className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors resize-none"></textarea>
            
            <button type="submit" disabled={status === 'Sending...'} className="bg-white text-[#0C0C0C] font-bold uppercase tracking-wider py-4 px-8 rounded-full hover:bg-white/90 transition-colors w-full sm:w-auto disabled:opacity-70">
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>

            {status && status !== 'Sending...' && (
              <div className={`mt-4 text-sm ${status.includes('Oops') ? 'text-red-400' : 'text-green-400'}`}>
                {status}
              </div>
            )}
          </form>
        </FadeIn>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-10">
          <FadeIn delay={0.3} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <span className="text-xl">📞</span>
            </div>
            <div>
              <h3 className="text-white/50 text-sm uppercase tracking-widest mb-1">Phone</h3>
              <p className="text-white text-xl md:text-2xl font-light">+91 8375001090</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <span className="text-xl">✉️</span>
            </div>
            <div>
              <h3 className="text-white/50 text-sm uppercase tracking-widest mb-1">Email</h3>
              <p className="text-white text-xl md:text-2xl font-light break-all">mdsahban28@email.com</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <span className="text-xl">📍</span>
            </div>
            <div>
              <h3 className="text-white/50 text-sm uppercase tracking-widest mb-1">Address</h3>
              <p className="text-white text-xl md:text-2xl font-light">Bawana, New Delhi<br/>India</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
