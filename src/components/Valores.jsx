import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'

const MAIN_WORDS = [
  { text: 'IA RESPONSABLE',   top: '8%',  left: '5%',   size: '2rem',   rotate: '-3deg', delay: 0.1, float: { amp: 10, dur: 3.8 } },
  { text: 'ÉTICA',            top: '38%', left: '52%',  size: '3.2rem', rotate: '2deg',  delay: 0.2, float: { amp: 8,  dur: 3.2 } },
  { text: 'CALIDAD DE VIDA',  top: '62%', left: '4%',   size: '1.9rem', rotate: '-2deg', delay: 0.3, float: { amp: 12, dur: 4.1 } },
  { text: 'BIENESTAR SOCIAL', top: '76%', left: '42%',  size: '2.1rem', rotate: '1deg',  delay: 0.4, float: { amp: 9,  dur: 3.5 } },
]

const SECONDARY_WORDS = [
  { text: 'bienestar humano',   top: '3%',  left: '55%', size: '0.78rem', opacity: 0.35, rotate: '4deg',  delay: 0.5,  float: { amp: 7,  dur: 4.5 } },
  { text: 'servicio',           top: '18%', left: '72%', size: '0.9rem',  opacity: 0.28, rotate: '-5deg', delay: 0.55, float: { amp: 9,  dur: 3.7 } },
  { text: 'tecnología',         top: '26%', left: '8%',  size: '0.85rem', opacity: 0.32, rotate: '3deg',  delay: 0.6,  float: { amp: 11, dur: 4.2 } },
  { text: 'núcleo de decisión', top: '22%', left: '40%', size: '0.8rem',  opacity: 0.25, rotate: '-2deg', delay: 0.65, float: { amp: 8,  dur: 3.9 } },
  { text: 'principios',         top: '48%', left: '36%', size: '0.9rem',  opacity: 0.3,  rotate: '5deg',  delay: 0.7,  float: { amp: 10, dur: 3.3 } },
  { text: 'vidas que mejora',   top: '54%', left: '68%', size: '0.82rem', opacity: 0.28, rotate: '-4deg', delay: 0.75, float: { amp: 7,  dur: 4.6 } },
  { text: 'inclusión',          top: '70%', left: '30%', size: '0.88rem', opacity: 0.32, rotate: '3deg',  delay: 0.8,  float: { amp: 9,  dur: 3.6 } },
  { text: 'progreso',           top: '36%', left: '78%', size: '0.95rem', opacity: 0.3,  rotate: '-3deg', delay: 0.85, float: { amp: 11, dur: 4.0 } },
  { text: 'desigualdad',        top: '82%', left: '18%', size: '0.78rem', opacity: 0.22, rotate: '2deg',  delay: 0.9,  float: { amp: 6,  dur: 4.8 } },
  { text: 'alianza',            top: '88%', left: '68%', size: '0.8rem',  opacity: 0.25, rotate: '-5deg', delay: 0.95, float: { amp: 8,  dur: 3.4 } },
  { text: 'responsabilidad',    top: '14%', left: '30%', size: '0.85rem', opacity: 0.28, rotate: '6deg',  delay: 1.0,  float: { amp: 10, dur: 4.3 } },
  { text: 'benchmarks',         top: '92%', left: '40%', size: '0.75rem', opacity: 0.2,  rotate: '-2deg', delay: 1.05, float: { amp: 7,  dur: 3.8 } },
  { text: 'ecosistema',         top: '44%', left: '2%',  size: '0.82rem', opacity: 0.25, rotate: '-4deg', delay: 1.15, float: { amp: 9,  dur: 4.4 } },
  { text: 'CCHIA',              top: '5%',  left: '38%', size: '0.9rem',  opacity: 0.45, rotate: '0deg',  delay: 0.45, float: { amp: 8,  dur: 3.6 }, teal: true },
  { text: 'iniciativa',         top: '75%', left: '78%', size: '0.8rem',  opacity: 0.25, rotate: '3deg',  delay: 1.2,  float: { amp: 10, dur: 4.1 } },
]

const TEAL_GRADIENT = 'linear-gradient(120deg, #008996, #00c9b1)'

export default function Valores({ episode, goNext, goPrev, hasNext, hasPrev }) {
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <p className="text-white/40 text-base leading-relaxed mb-6">
        Cuatro principios guían cada decisión, cada alianza y cada iniciativa de CCHIA.
      </p>

      {/* Contenedor con fondo contrastante */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '420px',
          overflow: 'hidden',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #000d1a 0%, #001824 60%, #001f2e 100%)',
          border: '1px solid rgba(0,137,150,0.2)',
          boxShadow: 'inset 0 0 80px rgba(0,137,150,0.06), 0 0 40px rgba(0,0,0,0.4)',
        }}
      >
        {/* Glow central decorativo */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%', height: '60%',
          background: 'radial-gradient(ellipse, rgba(0,137,150,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Palabras secundarias */}
        {SECONDARY_WORDS.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: w.opacity,
              scale: 1,
              y: [0, -w.float.amp, 0],
            }}
            transition={{
              opacity: { delay: w.delay, duration: 0.5 },
              scale:   { delay: w.delay, duration: 0.5 },
              y: { delay: w.delay, duration: w.float.dur, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{
              position: 'absolute',
              top: w.top,
              left: w.left,
              fontSize: w.size,
              transform: `rotate(${w.rotate})`,
              color: w.teal ? '#00c9b1' : 'white',
              fontWeight: w.teal ? '900' : '500',
              letterSpacing: '0.02em',
              lineHeight: 1,
              userSelect: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {w.text}
          </motion.span>
        ))}

        {/* Palabras principales */}
        {MAIN_WORDS.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -w.float.amp, 0],
            }}
            transition={{
              opacity: { delay: w.delay, duration: 0.55 },
              scale:   { delay: w.delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              y: { delay: w.delay, duration: w.float.dur, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{
              position: 'absolute',
              top: w.top,
              left: w.left,
              fontSize: w.size,
              fontWeight: '900',
              transform: `rotate(${w.rotate})`,
              background: TEAL_GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              userSelect: 'none',
              whiteSpace: 'nowrap',
              filter: 'drop-shadow(0 0 16px rgba(0,201,177,0.4))',
            }}
          >
            {w.text}
          </motion.span>
        ))}
      </div>
    </EpisodeLayout>
  )
}
