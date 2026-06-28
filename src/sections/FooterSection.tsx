import FadeIn from '../components/FadeIn'

export default function FooterSection() {
  return (
    <footer className="bg-[#0C0C0C] text-[#D7E2EA]/60 text-center py-12 sm:py-16 px-5">
      <FadeIn>
        <p className="text-sm sm:text-base font-light">
          Designed and built by <span className="font-medium text-[#D7E2EA]">Md Sahban</span>
        </p>
        <p className="text-xs sm:text-sm mt-4 opacity-50">
          © 2026 All rights reserved.
        </p>
      </FadeIn>
    </footer>
  )
}
