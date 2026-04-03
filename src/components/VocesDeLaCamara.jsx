import { motion } from 'framer-motion'
import SpeakerToggle from './SpeakerToggle'

export default function VocesDeLaCamara() {
  return (
    <section id="voces" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cchia-teal text-sm font-semibold tracking-widest-xl uppercase mb-4 block">
            Manifiesto
          </span>
          <h2 className="text-4xl font-bold text-cchia-blue mb-4">
            Voces de la Cámara
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            El discurso institucional de CCHIA tiene muchas voces. Cada perspectiva construye un mismo propósito.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SpeakerToggle />
        </motion.div>
      </div>
    </section>
  )
}
