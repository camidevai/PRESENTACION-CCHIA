import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'

const COMO = [
  { icon: '🔗', title: 'Conectamos', desc: 'Tejemos redes entre actores que antes operaban en silos: academia, industria, Estado, sociedad civil.' },
  { icon: '📚', title: 'Capacitamos', desc: 'Generamos conocimiento accesible, democratizando la IA para profesionales y ciudadanos de todo Chile.' },
  { icon: '⚙️', title: 'Colaboramos', desc: 'Identificamos brechas reales y construimos soluciones concretas con todos los actores del ecosistema.' },
  { icon: '🌐', title: 'Proyectamos', desc: 'Posicionamos a Chile en el mapa global de la IA responsable a través de alianzas internacionales.' },
]

export default function ComoLoHacemos({ episode, goNext, goPrev, hasNext, hasPrev }) {
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <p className="text-white/40 text-base leading-relaxed max-w-2xl mb-10">
        CCHIA actúa como catalizador del ecosistema, operando en cuatro dimensiones complementarias.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {COMO.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span className="text-3xl mb-4 block">{item.icon}</span>
            <h3 className="text-white font-black text-xl mb-2">{item.title}</h3>
            <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </EpisodeLayout>
  )
}
