import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { ejes } from '../data/content'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

const IMAGES = {
  default:      '/Ejes estrategicos/Ejes estrategicos.png',
  conexion:     '/Ejes estrategicos/Conexión y Networking.png',
  capacitacion: '/Ejes estrategicos/Capacitación y Sensibilización.png',
  colaboracion: '/Ejes estrategicos/Colaboración Digital.png',
  alianzas:     '/Ejes estrategicos/Alianzas Globales.png',
}

export default function EjesEstrategicos({ episode, goNext, goPrev, hasNext, hasPrev }) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]
  const [active, setActive] = useState('conexion')

  const currentImg = IMAGES[active] ?? IMAGES.default

  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full">

        {/* ── Columna izquierda: ejes ── */}
        <div className="flex-1 min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base leading-relaxed max-w-sm mb-8"
            style={{ color: tk.textFaint }}
          >
            Cuatro ejes articulan toda la acción de CCHIA. Haz click en cada uno para explorar sus iniciativas.
          </motion.p>

          <div className="flex flex-col gap-3">
            {ejes.map((eje, i) => {
              const isActive = active === eje.id
              return (
                <motion.div
                  key={eje.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActive(isActive ? null : eje.id)}
                  className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                  style={{
                    background: isActive ? 'rgba(0,137,150,0.08)' : (theme === 'dark' ? 'rgba(255,255,255,0.04)' : tk.bgCard),
                    border: isActive ? '1px solid rgba(0,137,150,0.5)' : (theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : `1px solid ${tk.borderCard}`),
                    boxShadow: isActive ? '0 0 20px rgba(0,137,150,0.1)' : 'none',
                  }}
                >
                  <div className="px-5 py-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-base leading-tight" style={{ color: tk.text }}>{eje.title}</h3>
                      <motion.span
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[#008996] text-xl font-light flex-shrink-0 ml-3"
                      >+</motion.span>
                    </div>
                    {!isActive && (
                      <p className="text-xs leading-relaxed mt-1" style={{ color: tk.textFaint }}>{eje.description}</p>
                    )}

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mt-3 pt-3"
                          style={{ borderTop: theme === 'dark' ? '1px solid rgba(255,255,255,0.08)' : `1px solid ${tk.borderCard}` }}
                        >
                          <p className="text-sm leading-relaxed mb-3" style={{ color: tk.textMuted }}>{eje.description}</p>
                          <div className="space-y-2">
                            {eje.subnodes.map((node, j) => (
                              <div key={j} className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#008996] mt-1.5 flex-shrink-0" />
                                <div>
                                  <p className="font-semibold text-sm" style={{ color: tk.text }}>{node.title}</p>
                                  <p className="text-xs leading-relaxed mt-0.5" style={{ color: tk.textFaint }}>{node.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── Columna derecha: imagen dinámica 1:1 ── */}
        <div
          className="flex-shrink-0 w-full lg:w-1/2"
          style={{ aspectRatio: '1/1', position: 'relative', borderRadius: '20px', overflow: 'hidden' }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={currentImg}
              alt="Eje estratégico"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                display: 'block',
                position: 'absolute',
                inset: 0,
              }}
            />
          </AnimatePresence>

          {/* Gradientes de fusión */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to right, rgba(0,16,31,0.4) 0%, transparent 40%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(0,16,31,0.3) 0%, transparent 40%)',
          }} />
        </div>

      </div>
    </EpisodeLayout>
  )
}
