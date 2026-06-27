import { useState } from 'react'
import FadeIn from '../components/FadeIn'

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append('access_key', 'c6737efc-c632-4e5a-8dd9-239906053dc1')
    formData.append('first_name', formState.firstName)
    formData.append('last_name', formState.lastName)
    formData.append('email', formState.email)
    formData.append('phone', formState.phone)
    formData.append('subject_type', formState.subject)
    formData.append('message', formState.message)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setMessage('✓ Thank you! Your message has been sent successfully.')
        setMessageType('success')
        setFormState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' })
      } else {
        throw new Error(data.message || 'Form submission failed')
      }
    } catch (error) {
      setMessage('✗ Error: Something went wrong. Please try again.')
      setMessageType('error')
    } finally {
      setIsLoading(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  return (
    <section id="contact" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      {/* Heading */}
      <FadeIn className="text-center mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-[#0C0C0C] text-[clamp(2.5rem,10vw,140px)] font-black uppercase leading-none tracking-tight">
          Let&apos;s work together!
        </h2>
        <p className="text-[#0C0C0C]/60 text-lg mt-6">Just simple like that!</p>
      </FadeIn>

      {/* Contact Form & Info */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Form */}
        <FadeIn className="bg-[#f5f5f5] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-6 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formState.firstName}
                onChange={handleChange}
                required
                className="col-span-1 px-5 sm:px-6 py-3 sm:py-4 border-2 border-[#e0e0e0] rounded-[1rem] focus:outline-none focus:border-[#0C0C0C] transition-colors text-[#0C0C0C] placeholder-[#999]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formState.lastName}
                onChange={handleChange}
                required
                className="col-span-1 px-5 sm:px-6 py-3 sm:py-4 border-2 border-[#e0e0e0] rounded-[1rem] focus:outline-none focus:border-[#0C0C0C] transition-colors text-[#0C0C0C] placeholder-[#999]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formState.email}
                onChange={handleChange}
                required
                className="col-span-1 px-5 sm:px-6 py-3 sm:py-4 border-2 border-[#e0e0e0] rounded-[1rem] focus:outline-none focus:border-[#0C0C0C] transition-colors text-[#0C0C0C] placeholder-[#999]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formState.phone}
                onChange={handleChange}
                required
                className="col-span-1 px-5 sm:px-6 py-3 sm:py-4 border-2 border-[#e0e0e0] rounded-[1rem] focus:outline-none focus:border-[#0C0C0C] transition-colors text-[#0C0C0C] placeholder-[#999]"
              />
            </div>

            <select
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className="px-5 sm:px-6 py-3 sm:py-4 border-2 border-[#e0e0e0] rounded-[1rem] focus:outline-none focus:border-[#0C0C0C] transition-colors text-[#0C0C0C]"
            >
              <option value="">— Please choose an option —</option>
              <option value="project">Project Inquiry</option>
              <option value="hire">Hire Me</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Your message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={6}
              className="px-5 sm:px-6 py-3 sm:py-4 border-2 border-[#e0e0e0] rounded-[1rem] focus:outline-none focus:border-[#0C0C0C] transition-colors text-[#0C0C0C] placeholder-[#999] resize-none"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 px-8 py-3 sm:px-10 sm:py-4 bg-[#0C0C0C] text-white font-medium uppercase tracking-widest rounded-[1rem] transition-opacity duration-300 hover:opacity-80 disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>

            {message && (
              <div
                className={`p-4 rounded-lg text-center font-medium ${
                  messageType === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </FadeIn>

        {/* Contact Info */}
        <FadeIn className="flex flex-col justify-center gap-10 sm:gap-12">
          <div>
            <p className="text-[#0C0C0C]/60 font-light uppercase text-xs sm:text-sm tracking-wide mb-3">
              Phone
            </p>
            <a
              href="tel:+918375001090"
              className="text-[#0C0C0C] font-medium text-lg sm:text-xl hover:opacity-70 transition-opacity"
            >
              +91 8375001090
            </a>
          </div>

          <div>
            <p className="text-[#0C0C0C]/60 font-light uppercase text-xs sm:text-sm tracking-wide mb-3">
              Email
            </p>
            <a
              href="mailto:mdsahban28@email.com"
              className="text-[#0C0C0C] font-medium text-lg sm:text-xl hover:opacity-70 transition-opacity"
            >
              mdsahban28@email.com
            </a>
          </div>

          <div>
            <p className="text-[#0C0C0C]/60 font-light uppercase text-xs sm:text-sm tracking-wide mb-3">
              Address
            </p>
            <p className="text-[#0C0C0C] font-medium text-lg sm:text-xl">
              Bawana, New Delhi<br />India
            </p>
          </div>

          <div>
            <p className="text-[#0C0C0C]/60 font-light uppercase text-xs sm:text-sm tracking-wide mb-4">
              Connect
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/md-sahban-5749672ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0C0C0C] text-2xl hover:opacity-70 transition-opacity"
              >
                in
              </a>
              <a
                href="https://github.com/mdsahban"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0C0C0C] text-2xl hover:opacity-70 transition-opacity"
              >
                gh
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
