import { useState } from 'react'
import { motion } from 'framer-motion'

const SPEAKERS = [
  {
    id: 'cami',
    name: 'Camila Bañares',
    alias: 'CamiDevAI',
    role: 'Vicepresidenta',
    color: '#008996',
    photo: '/Fotos/Camila/Camila 1.png',
    quote: 'La IA no es el futuro, es el presente que construimos juntos.',
    side: 'left',
  },
  {
    id: 'edison',
    name: 'Edison Vásquez',
    alias: null,
    role: 'Presidente',
    color: '#4a90d9',
    photo: '/Fotos/Edison/edison 1.png',
    quote: 'No estamos ante un cambio tecnológico, sino de paradigma.',
    side: 'right',
  },
]

export default function SpeakerSelect({ onSelect }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#00101f' }}>

      {/* ── Mitades de foto ── */}
      {SPEAKERS.map((s) => {
        const isLeft = s.side === 'left'
        const isDimmed = hovered && hovered !== s.id
        return (
          <motion.button
            key={s.id}
            onClick={() => onSelect(s.id)}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            animate={{ opacity: isDimmed ? 0.45 : 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: 0, bottom: 0,
              left: isLeft ? 0 : '50%',
              right: isLeft ? '50%' : 0,
              cursor: 'pointer',
              border: 'none',
              padding: 0,
              overflow: 'hidden',
            }}
          >
            {/* Foto full */}
            <img
              src={s.photo}
              alt={s.name}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />

            {/* Gradiente oscuro inferior */}
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(to top, rgba(0,16,31,0.92) 0%, rgba(0,16,31,0.3) 50%, transparent 80%)`,
            }} />

            {/* Gradiente lateral (hacia el centro) */}
            <div style={{
              position: 'absolute', inset: 0,
              background: isLeft
                ? 'linear-gradient(to right, transparent 60%, rgba(0,16,31,0.6) 100%)'
                : 'linear-gradient(to left,  transparent 60%, rgba(0,16,31,0.6) 100%)',
            }} />

            {/* Borde glow al hover */}
            <motion.div
              animate={{ opacity: hovered === s.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute', inset: 0,
                boxShadow: isLeft
                  ? `inset -4px 0 32px ${s.color}40`
                  : `inset  4px 0 32px ${s.color}40`,
                pointerEvents: 'none',
              }}
            />

            {/* Info abajo */}
            <div
              style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: isLeft ? '32px 80px 40px 36px' : '32px 36px 40px 80px',
                textAlign: isLeft ? 'left' : 'right',
              }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-3"
                style={{ background: `${s.color}25`, color: s.color, border: `1px solid ${s.color}50` }}
              >
                {s.role}
              </span>
              <h2 className="text-white text-2xl font-black leading-tight mb-0.5">{s.name}</h2>
              {s.alias && (
                <p className="text-sm font-bold mb-3" style={{ color: s.color }}>{s.alias}</p>
              )}
              {!s.alias && <div className="mb-3" />}
              <p className="text-white/40 text-xs leading-relaxed italic mb-5 max-w-xs"
                style={{ marginLeft: isLeft ? 0 : 'auto' }}>
                "{s.quote}"
              </p>
              <motion.div
                animate={{ opacity: hovered === s.id ? 1 : 0.3, x: hovered === s.id ? (isLeft ? 4 : -4) : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 text-sm font-bold"
                style={{ color: s.color, justifyContent: isLeft ? 'flex-start' : 'flex-end' }}
              >
                {!isLeft && <span>←</span>}
                <span>Soy quien presenta</span>
                {isLeft && <span>→</span>}
              </motion.div>
            </div>
          </motion.button>
        )
      })}

      {/* ── Línea divisora central ── */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0,
        left: '50%', transform: 'translateX(-50%)',
        width: '1px',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent 100%)',
        zIndex: 5,
      }} />

      {/* ── Logo arriba centrado ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute', top: '24px', left: '44%',
          transform: 'translateX(-50%)',
          zIndex: 10, textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        }}
      >
        <img
          src="/logo-cchia.png"
          alt="CCHIA"
          style={{ height: '220px', width: 'auto', filter: 'brightness(0) invert(1)' }}
        />
        <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase font-semibold whitespace-nowrap">
          ¿Quién presenta hoy?
        </p>
      </motion.div>

      {/* ── Pingüino al centro ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '44%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        {/* Glow bajo el pingüino */}
        <div style={{
          position: 'absolute', bottom: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '220px', height: '80px',
          background: 'radial-gradient(ellipse, rgba(0,137,150,0.3) 0%, transparent 70%)',
          filter: 'blur(12px)',
        }} />

        <motion.img
          src="/Mascota/duda.png"
          alt="Pingüino CCHIA dudando"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            height: '320px',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 40px rgba(0,137,150,0.3))',
            position: 'relative',
          }}
        />
      </motion.div>

    </div>
  )
}
