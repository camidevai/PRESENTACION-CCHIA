import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { vision } from '../data/content'

export default function Vision({ episode, goNext, goPrev, hasNext, hasPrev }) {
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev} dark={false}>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-3xl font-black text-[#003764] leading-tight mb-4">
            Chile como Referente Latinoamericano de IA
          </h2>
          <p className="text-[#003764]/60 text-base leading-relaxed mb-4">
            Visualizamos un Chile donde la inteligencia artificial es una ventaja competitiva real: accesible para las PYMEs, atractiva para los jóvenes y reconocida internacionalmente por su enfoque ético.
          </p>
          <p className="text-[#003764]/45 leading-relaxed text-sm">
            No es una visión de largo plazo incierto. Es el trabajo que hacemos hoy, con cada alianza, cada capacitación y cada política que impulsamos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          {vision.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ background: 'white', borderLeft: '4px solid #008996', boxShadow: '0 2px 12px rgba(0,55,100,0.06)' }}
            >
              <span className="text-[#008996] font-black text-lg tabular-nums w-7 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[#003764] font-medium text-sm leading-snug">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </EpisodeLayout>
  )
}
