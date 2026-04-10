import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { definicion } from '../data/content'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

export default function Definicion({ episode, goNext, goPrev, hasNext, hasPrev }) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <p className="text-base leading-relaxed max-w-2xl mb-10" style={{ color: tk.textFaint }}>
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
              background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : tk.bgCard,
              border: theme === 'dark' ? '1px solid rgba(255,255,255,0.08)' : `1px solid ${tk.borderCard}`,
              boxShadow: '0 2px 20px rgba(0,0,0,0.2)',
            }}
            onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(0,137,150,0.4)'}
            onMouseLeave={e => e.currentTarget.style.border = theme === 'dark' ? '1px solid rgba(255,255,255,0.08)' : `1px solid ${tk.borderCard}`}
          >
            <div className="overflow-hidden">
              <img
                src={item.img} alt={item.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-5 py-4">
              <h3 className="font-bold text-sm mb-1.5" style={{ color: tk.text }}>{item.alt}</h3>
              <p className="text-sm leading-relaxed" style={{ color: tk.textMuted }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </EpisodeLayout>
  )
}
