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
  },
  {
    id: 'edison',
    name: 'Edison Vásquez',
    alias: null,
    role: 'Presidente',
    color: '#4a90d9',
    photo: '/Fotos/Edison/edison 1.png',
    quote: 'No estamos ante un cambio tecnológico, sino de paradigma.',
  },
]

export default function SpeakerSelect({ onSelect }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-10"
      style={{ background: '#00101f' }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <img
          src="/logo-cchia.png"
          alt="CCHIA"
          style={{ height: '230px', width: 'auto', filter: 'brightness(0) invert(1)', margin: '0 auto' }}
        />
        <p className="text-white/20 text-[10px] mt-3 tracking-[0.3em] uppercase font-semibold">
          Presentación · 2025
        </p>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-10"
      >
        <h1 className="text-white text-3xl font-black mb-2">¿Quién presenta hoy?</h1>
        <p className="text-white/30 text-sm">Selecciona al presentador para comenzar la charla</p>
      </motion.div>

      {/* Speaker cards */}
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
        {SPEAKERS.map((s, i) => (
          <motion.button
            key={s.id}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onSelect(s.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 rounded-3xl text-left overflow-hidden transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.border = `1px solid ${s.color}70`
              e.currentTarget.style.boxShadow = `0 0 56px ${s.color}22`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.09)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Foto */}
            <div className="relative w-full overflow-hidden" style={{ height: '260px' }}>
              <img
                src={s.photo}
                alt={s.name}
                className="w-full h-full object-cover object-top"
              />
              {/* Gradiente inferior sobre la foto */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 40%, #00101f 100%)`,
                }}
              />
              {/* Badge de cargo sobre la foto */}
              <div className="absolute top-3 left-3">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase"
                  style={{ background: `${s.color}25`, color: s.color, border: `1px solid ${s.color}40`, backdropFilter: 'blur(8px)' }}
                >
                  {s.role}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="px-6 pb-6 pt-2">
              <h2 className="text-white text-xl font-black leading-tight mb-0.5">{s.name}</h2>
              {s.alias && (
                <p className="text-[11px] font-semibold mb-3" style={{ color: s.color }}>
                  {s.alias}
                </p>
              )}
              {!s.alias && <div className="mb-3" />}

              <p className="text-white/35 text-sm leading-relaxed italic mb-5">
                "{s.quote}"
              </p>

              <div
                className="flex items-center gap-2 text-xs font-bold tracking-wide"
                style={{ color: s.color }}
              >
                <span>Iniciar presentación</span>
                <span>→</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
