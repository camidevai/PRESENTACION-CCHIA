import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

const PILLARS = [
  { label: 'Sin fines de lucro', desc: 'Independencia e imparcialidad en todo lo que hacemos.' },
  { label: 'Multi-actor',        desc: 'Academia, industria, gobierno y sociedad civil unidos.' },
  { label: 'Impacto real',       desc: 'Políticas, capacitación y alianzas que transforman Chile.' },
]

export default function LaCCHIA({ episode, goNext, goPrev, hasNext, hasPrev }) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full">

        {/* ── Columna izquierda: texto ── */}
        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <p className="text-4xl sm:text-5xl font-black leading-tight mb-2" style={{ color: tk.text }}>
              No estamos ante un
            </p>
            <p
              className="text-4xl sm:text-5xl font-black leading-tight mb-2"
              style={{
                background: 'linear-gradient(120deg, #008996, #00c9b1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              cambio tecnológico.
            </p>
            <p className="text-4xl sm:text-5xl font-black leading-tight" style={{ color: tk.text }}>
              Estamos ante un cambio de paradigma.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-12 h-0.5 mb-8"
            style={{ background: '#008996' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg leading-relaxed mb-12 max-w-sm"
            style={{ color: tk.textMuted }}
          >
            CCHIA es la Cámara Chilena de Inteligencia Artificial. El sistema operativo del ecosistema de IA en Chile.
          </motion.p>

          {/* Pilares como texto plano */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col gap-3"
          >
            {PILLARS.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : tk.bgCard,
                  border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : `1px solid ${tk.borderCard}`,
                  borderLeft: '3px solid #008996',
                }}
              >
                <span className="font-black text-lg tabular-nums w-7 flex-shrink-0" style={{ color: '#008996' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-bold text-sm leading-tight" style={{ color: tk.text }}>{p.label}</p>
                  <p className="text-xs leading-relaxed mt-0.5" style={{ color: tk.textFaint }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Columna derecha: imagen 4:5 ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-shrink-0 w-full lg:w-5/12"
          style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', height: 'calc(100vh - 260px)', maxHeight: '540px', minHeight: '280px' }}
        >
          <img
            src="/Fotos/General/Sin fines de lucro Multi-actor A Impacto real.png"
            alt="CCHIA"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          {/* Gradiente izquierdo para fusionar con el fondo */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(3,7,18,0.45) 0%, transparent 40%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>

      </div>
    </EpisodeLayout>
  )
}
