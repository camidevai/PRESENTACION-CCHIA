import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

const COMO = [
  { img: '/Como lo hacemos/conectamos.png',  title: 'Conectamos', desc: 'Tejemos redes entre actores que antes operaban en silos: academia, industria, Estado, sociedad civil.' },
  { img: '/Como lo hacemos/Capacitamos.png', title: 'Capacitamos', desc: 'Generamos conocimiento accesible, democratizando la IA para profesionales y ciudadanos de todo Chile.' },
  { img: '/Como lo hacemos/colaboramos.png', title: 'Colaboramos', desc: 'Identificamos brechas reales y construimos soluciones concretas con todos los actores del ecosistema.' },
  { img: '/Como lo hacemos/Proyectamos.png', title: 'Proyectamos', desc: 'Posicionamos a Chile en el mapa global de la IA responsable a través de alianzas internacionales.' },
]

export default function ComoLoHacemos({ episode, goNext, goPrev, hasNext, hasPrev }) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <p className="text-base leading-relaxed max-w-2xl mb-10" style={{ color: tk.textFaint }}>
        CCHIA actúa como catalizador del ecosistema, operando en cuatro dimensiones complementarias.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {COMO.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden group"
            style={{
              background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : tk.bgCard,
              border: theme === 'dark' ? '1px solid rgba(255,255,255,0.08)' : `1px solid ${tk.borderCard}`,
            }}
          >
            <div className="overflow-hidden" style={{ aspectRatio: '1/1' }}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-5 py-4">
              <h3 className="font-black text-base mb-1" style={{ color: tk.text }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: tk.textMuted }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </EpisodeLayout>
  )
}
