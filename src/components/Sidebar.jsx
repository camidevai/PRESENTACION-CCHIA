import { motion, AnimatePresence } from 'framer-motion'
import { SECTIONS } from '../App'

const SPEAKER_INFO = {
  cami:   { name: 'Camila Bañares',  color: '#008996', emoji: '👩‍💻' },
  edison: { name: 'Edison Vásquez',  color: '#4a90d9', emoji: '🎯'  },
}

export default function Sidebar({ active, setActive, isOpen, onToggle, speaker, onChangeSpeaker }) {
  const sp = SPEAKER_INFO[speaker] || SPEAKER_INFO.cami

  return (
    <motion.aside
      animate={{ width: isOpen ? 288 : 56 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex-shrink-0 flex flex-col h-full overflow-hidden"
      style={{ background: 'rgba(0,12,26,0.99)', borderRight: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Header: toggle + logo */}
      <div
        className="flex items-center gap-3 px-3 border-b border-white/5"
        style={{ minHeight: '64px', paddingTop: '14px', paddingBottom: '14px' }}
      >
        {/* Toggle button */}
        <button
          onClick={onToggle}
          title={isOpen ? 'Colapsar menú' : 'Expandir menú'}
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors hover:bg-white/10"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          {/* Hamburger icon */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="1" y1="3.5"  x2="14" y2="3.5" />
            <line x1="1" y1="7.5"  x2="14" y2="7.5" />
            <line x1="1" y1="11.5" x2="14" y2="11.5" />
          </svg>
        </button>

        {/* Logo — solo visible cuando está abierto */}
        <AnimatePresence>
          {isOpen && (
            <motion.img
              key="logo"
              src="/logo-cchia.png"
              alt="CCHIA"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)', flexShrink: 0 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3" style={{ padding: isOpen ? '12px 8px' : '12px 6px' }}>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase px-3 mb-2"
            >
              Episodios
            </motion.p>
          )}
        </AnimatePresence>

        <ul className="space-y-0.5">
          {SECTIONS.map((s) => {
            const isActive = active === s.id
            return (
              <li key={s.id}>
                <button
                  onClick={() => setActive(s.id)}
                  title={!isOpen ? s.label : undefined}
                  className="w-full rounded-xl flex items-center transition-all duration-200"
                  style={{
                    padding: isOpen ? '10px 12px' : '10px 0',
                    justifyContent: isOpen ? 'flex-start' : 'center',
                    gap: isOpen ? '10px' : 0,
                    background: isActive ? 'rgba(0,137,150,0.15)' : 'transparent',
                    border: isActive ? '1px solid rgba(0,137,150,0.25)' : '1px solid transparent',
                  }}
                >
                  <span
                    className="font-black tracking-wider tabular-nums flex-shrink-0"
                    style={{
                      fontSize: '10px',
                      color: isActive ? '#008996' : 'rgba(255,255,255,0.22)',
                      minWidth: isOpen ? '28px' : 'auto',
                    }}
                  >
                    {isOpen ? `EP${s.ep}` : s.ep}
                  </span>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="text-sm font-medium leading-tight flex-1 text-left"
                        style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.4)' }}
                      >
                        {s.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {isOpen && isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#008996' }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer: speaker + cambiar */}
      <div className="border-t border-white/5" style={{ padding: isOpen ? '14px 16px' : '14px 8px' }}>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              key="footer-open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {/* Speaker badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg flex-shrink-0">{sp.emoji}</span>
                <div className="min-w-0">
                  <p className="text-white text-xs font-bold leading-tight truncate">{sp.name}</p>
                  <p className="text-white/30 text-[10px]">Presentando</p>
                </div>
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                  style={{ background: sp.color }}
                />
              </div>

              {/* Cambiar presentador */}
              <button
                onClick={onChangeSpeaker}
                className="w-full text-left text-[11px] font-semibold transition-colors hover:text-white/60"
                style={{ color: 'rgba(255,255,255,0.25)' }}
              >
                ↩ Cambiar presentador
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="footer-closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onChangeSpeaker}
              title="Cambiar presentador"
              className="w-full flex justify-center"
            >
              <span className="text-lg">{sp.emoji}</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  )
}
