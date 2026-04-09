import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { valores } from '../data/content'

const IMAGES = [
  '/Ejes estrategicos/IA Responsable.png',
  '/Ejes estrategicos/Etica.png',
  '/Ejes estrategicos/calidad de vida.png',
  '/Ejes estrategicos/Bienestar Social.png',
]

export default function Valores({ episode, goNext, goPrev, hasNext, hasPrev }) {
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev} dark={false}>
      <p className="text-[#003764]/55 text-base leading-relaxed max-w-2xl mb-10">
        Cuatro principios guían cada decisión, cada alianza y cada iniciativa de CCHIA.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {valores.map((valor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden border border-[#003764]/08 hover:border-[#008996]/30 transition-all duration-300 group"
            style={{ background: 'white', boxShadow: '0 2px 20px rgba(0,55,100,0.05)' }}
          >
            {IMAGES[i] && (
              <div className="w-full overflow-hidden">
                <img src={IMAGES[i]} alt={valor.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-[#003764] font-black text-base mb-1.5">{valor.title}</h3>
              <p className="text-[#003764]/50 text-sm leading-relaxed">{valor.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </EpisodeLayout>
  )
}
