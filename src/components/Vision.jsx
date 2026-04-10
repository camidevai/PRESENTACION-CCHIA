import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { vision } from '../data/content'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

export default function Vision({ episode, goNext, goPrev, hasNext, hasPrev }) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full">

        {/* ── Columna izquierda: texto ── */}
        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-5" style={{ color: tk.text }}>
              Chile como Referente<br />
              <span style={{
                background: 'linear-gradient(120deg, #008996, #00c9b1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Latinoamericano de IA
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-4 max-w-sm" style={{ color: tk.textMuted }}>
              Visualizamos un Chile donde la inteligencia artificial es una ventaja competitiva real: accesible para las PYMEs, atractiva para los jóvenes y reconocida internacionalmente por su enfoque ético.
            </p>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: tk.textFaint }}>
              No es una visión de largo plazo incierto. Es el trabajo que hacemos hoy, con cada alianza, cada capacitación y cada política que impulsamos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            {vision.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : tk.bgCard,
                  border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : `1px solid ${tk.borderCard}`,
                  borderLeft: '3px solid #008996',
                }}
              >
                <span
                  className="font-black text-lg tabular-nums w-7 flex-shrink-0"
                  style={{ color: '#008996' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-medium text-sm leading-snug" style={{ color: tk.text }}>{item}</p>
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
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '20px',
            height: 'calc(100vh - 260px)',
            maxHeight: '540px',
            minHeight: '280px',
          }}
        >
          <img
            src="/Vision Estrategica/Visión Estratégica.png"
            alt="Visión Estratégica CCHIA"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          {/* Gradiente izquierdo para fusionar con el fondo */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0,16,31,0.5) 0%, transparent 45%)',
            pointerEvents: 'none',
          }} />
          {/* Gradiente inferior sutil */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,16,31,0.4) 0%, transparent 40%)',
            pointerEvents: 'none',
          }} />
        </motion.div>

      </div>
    </EpisodeLayout>
  )
}
