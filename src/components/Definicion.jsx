import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { definicion } from '../data/content'

export default function Definicion({ episode, goNext, goPrev, hasNext, hasPrev }) {
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev} dark={false}>
      <p className="text-[#003764]/60 text-base leading-relaxed max-w-2xl mb-10">
        CCHIA es una organización sin fines de lucro que articula academia, industria, gobierno y sociedad civil en torno a la inteligencia artificial responsable.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {definicion.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden border border-[#003764]/08 hover:border-[#008996]/40 transition-all duration-300 group"
            style={{ background: 'white', boxShadow: '0 2px 20px rgba(0,55,100,0.06)' }}
          >
            <div className="overflow-hidden">
              <img
                src={item.img} alt={item.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-5 py-4">
              <p className="text-[#003764]/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </EpisodeLayout>
  )
}
