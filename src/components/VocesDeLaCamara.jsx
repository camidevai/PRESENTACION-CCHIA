import { motion } from 'framer-motion'
import SpeakerToggle from './SpeakerToggle'

export default function VocesDeLaCamara() {
  return (
    <section id="voces" className="py-24 mesh-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-cchia-teal text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            Manifiesto
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight">
            Voces de la Cámara
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SpeakerToggle />
        </motion.div>
      </div>
    </section>
  )
}
