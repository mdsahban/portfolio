import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

const images = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const row1Images = images.slice(0, 11)
const row2Images = images.slice(11)

export default function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const offset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 200]
  )

  return (
    <section ref={ref} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 px-3">
      {/* Row 1 - Scrolls Right */}
      <motion.div
        className="flex gap-3 mb-3 will-change-transform"
        style={{
          x: useTransform(offset, (value) => (value - 200)),
        }}
      >
        {[...row1Images, ...row1Images, ...row1Images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Gallery"
            loading="lazy"
            className="h-[270px] w-[420px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </motion.div>

      {/* Row 2 - Scrolls Left */}
      <motion.div
        className="flex gap-3 will-change-transform"
        style={{
          x: useTransform(offset, (value) => (-(value - 200))),
        }}
      >
        {[...row2Images, ...row2Images, ...row2Images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Gallery"
            loading="lazy"
            className="h-[270px] w-[420px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </motion.div>
    </section>
  )
}
