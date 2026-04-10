import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { definicion } from '../data/content'

export default function Definicion({ episode, goNext, goPrev, hasNext, hasPrev }) {
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <p className="text-white/40 text-base leading-relaxed max-w-2xl mb-10">
        CCHIA es una organización sin fines de lucro que articula academia, industria, gobierno y sociedad civil en torno a la inteligencia artificial responsable.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {definicion.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden group transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 2px 20px rgba(0,0,0,0.2)',
            }}
            onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(0,137,150,0.4)'}
            onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'}
          >
            <div className="overflow-hidden">
              <img
                src={item.img} alt={item.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-5 py-4">
              <h3 className="text-white font-bold text-sm mb-1.5">{item.alt}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </EpisodeLayout>
  )
}
