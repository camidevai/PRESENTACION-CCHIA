import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { ejes } from '../data/content'

const IMAGES = {
  conexion:     '/Ejes estrategicos/3b095854-e4b8-4881-95a5-81c405886057.png',
  capacitacion: '/Ejes estrategicos/Capacitación y Sensibilización.png',
  colaboracion: '/Ejes estrategicos/Colaboración Digital.png',
  alianzas:     '/Ejes estrategicos/Alianzas Globales.png',
}

export default function EjesEstrategicos({ episode, goNext, goPrev, hasNext, hasPrev }) {
  const [active, setActive] = useState(null)

  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <p className="text-white/40 text-base leading-relaxed max-w-2xl mb-10">
        Cuatro ejes articulan toda la acción de CCHIA. Haz click en cada uno para explorar sus iniciativas.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {ejes.map((eje, i) => {
          const img = IMAGES[eje.id]
          const isActive = active === eje.id
          return (
            <motion.div
              key={eje.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActive(isActive ? null : eje.id)}
              className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: isActive ? '1px solid rgba(0,137,150,0.5)' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: isActive ? '0 0 24px rgba(0,137,150,0.12)' : 'none',
              }}
            >
              {img && (
                <div className="w-full overflow-hidden">
                  <img src={img} alt={eje.title} className="w-full h-auto object-cover" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-black text-lg leading-tight">{eje.title}</h3>
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    className="text-[#008996] text-xl font-light flex-shrink-0 ml-3"
                  >+</motion.span>
                </div>
                <p className="text-white/45 text-sm leading-relaxed">{eje.description}</p>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-4 pt-4"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <div className="space-y-3">
                        {eje.subnodes.map((node, j) => (
                          <div key={j} className="flex gap-3 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#008996] mt-1.5 flex-shrink-0" />
                            <div>
                              <p className="text-white font-semibold text-sm">{node.title}</p>
                              <p className="text-white/35 text-xs leading-relaxed mt-0.5">{node.desc}</p>
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
    </EpisodeLayout>
  )
}
