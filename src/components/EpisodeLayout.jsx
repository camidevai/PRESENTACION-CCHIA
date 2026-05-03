import { motion } from 'framer-motion'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

export default function EpisodeLayout({
  episode, children, goNext, goPrev, hasNext, hasPrev,
}) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]

  return (
    <div
      className="h-screen flex flex-col"
      style={{ background: tk.bg, position: 'relative', transition: 'background 0.3s' }}
    >
      {/* Logo watermark */}
      <img
        src="/logo-cchia.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '55%', maxWidth: '520px',
          objectFit: 'contain',
          opacity: tk.watermark,
          filter: tk.logoFilter,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          transition: 'opacity 0.3s',
        }}
      />

      {/* Episode header */}
      <div className="px-4 sm:px-8 pt-4 pb-0 flex-shrink-0" style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex items-center gap-3 mb-2">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-black tracking-[0.25em] uppercase"
            style={{ background: 'rgba(0,137,150,0.15)', color: '#008996', border: '1px solid rgba(0,137,150,0.3)' }}
          >
            EP {episode.ep}
          </span>
          <div className="flex-1 h-px" style={{ background: tk.divider }} />
          <span className="text-xs font-medium" style={{ color: tk.textFaint }}>CCHIA · 2025</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-none mb-1"
          style={{ color: tk.text }}
        >
          {episode.label}
        </motion.h1>
        <div className="mt-2 mb-0 h-px w-16" style={{ background: '#008996' }} />
      </div>

      {/* Contenido */}
      <div className="flex-1 min-h-0 px-4 sm:px-8 py-3 sm:py-4 overflow-y-auto" style={{ position: 'relative', zIndex: 1 }}>{children}</div>

      {/* Navegación */}
      <div
        className="px-4 sm:px-8 pb-4 pt-3 flex justify-between items-center flex-shrink-0"
        style={{ borderTop: `1px solid ${tk.divider}`, position: 'relative', zIndex: 1 }}
      >
        <button
          onClick={goPrev}
          disabled={!hasPrev}
          className="text-sm font-medium transition-colors"
          style={{ color: hasPrev ? tk.textMuted : 'transparent' }}
        >
          ← Anterior
        </button>
        <button
          onClick={goNext}
          disabled={!hasNext}
          className="text-sm font-bold transition-colors px-5 py-2 rounded-xl"
          style={{
            background: hasNext ? 'rgba(0,137,150,0.2)' : 'transparent',
            color: hasNext ? '#008996' : 'transparent',
            border: hasNext ? '1px solid rgba(0,137,150,0.3)' : 'none',
          }}
        >
          Siguiente episodio →
        </button>
      </div>
    </div>
  )
}
