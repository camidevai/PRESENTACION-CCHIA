import { motion } from 'framer-motion'

export default function EpisodeLayout({
  episode, children, goNext, goPrev, hasNext, hasPrev, dark = true,
}) {
  const bg   = dark ? '#00101f' : '#F4F8FB'
  const text = dark ? 'white'   : '#003764'

  return (
    <div className="min-h-screen flex flex-col" style={{ background: bg }}>
      {/* Episode header */}
      <div className="px-8 pt-8 pb-0">
        <div className="flex items-center gap-3 mb-5">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-black tracking-[0.25em] uppercase"
            style={{ background: 'rgba(0,137,150,0.15)', color: '#008996', border: '1px solid rgba(0,137,150,0.3)' }}
          >
            EP {episode.ep}
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.25)' }}>CCHIA · 2025</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-1"
          style={{ color: text }}
        >
          {episode.label}
        </motion.h1>
        <div className="mt-4 mb-0 h-px w-16" style={{ background: '#008996' }} />
      </div>

      {/* Contenido */}
      <div className="flex-1 px-8 py-8">{children}</div>

      {/* Navegación entre episodios */}
      <div
        className="px-8 pb-8 pt-5 flex justify-between items-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <button
          onClick={goPrev}
          disabled={!hasPrev}
          className="text-sm font-medium transition-colors"
          style={{ color: hasPrev ? 'rgba(255,255,255,0.4)' : 'transparent' }}
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
