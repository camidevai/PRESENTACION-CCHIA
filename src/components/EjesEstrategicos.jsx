import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ejes } from '../data/content'

const icons = ['', '📚', '⚙️', '🌐']

const ejeImages = {
  conexion: '/Ejes estrategicos/3b095854-e4b8-4881-95a5-81c405886057.png',
  capacitacion: '/Ejes estrategicos/Capacitación y Sensibilización.png',
  colaboracion: '/Ejes estrategicos/Colaboración Digital.png',
  alianzas: '/Ejes estrategicos/Alianzas Globales.png',
}

export default function EjesEstrategicos() {
  const [active, setActive] = useState(null)

  const bentoClass = [
    'md:col-span-2',
    'md:col-span-1 md:row-span-2',
    'md:col-span-1',
    'md:col-span-1',
  ]

  return (
    <section id="ejes" className="py-24 bg-cchia-blue">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-cchia-teal text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            Cómo lo hacemos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight">
            Ejes Estratégicos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto auto' }}>
          {ejes.map((eje, i) => {
            const img = ejeImages[eje.id]
            return (
            <motion.div
              key={eje.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              onClick={() => setActive(active === eje.id ? null : eje.id)}
              className={`
                ${bentoClass[i]}
                glass rounded-3xl cursor-pointer overflow-hidden
                border-teal-glow min-h-[220px]
                flex flex-col justify-between
                transition-all duration-300
              `}
            >
              {/* Imagen solo si existe — ocupa la parte superior de la card */}
              {img && (
                <div className="w-full overflow-hidden">
                  <img
                    src={img}
                    alt={eje.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="flex-1 p-7">
                {/* Emoji e título solo si no hay imagen */}
                {!img && (
                  <>
                    <span className="text-3xl mb-5 block">{icons[i]}</span>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">
                      {eje.title}
                    </h3>
                  </>
                )}
                <p className="text-white/50 text-sm leading-relaxed">{eje.description}</p>
              </div>

              <AnimatePresence>
                {active === eje.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-5 pt-5 border-t border-white/10 space-y-3"
                  >
                    {eje.subnodes.map((node, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-cchia-teal mt-1.5 flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold text-sm">{node.title}</p>
                          <p className="text-white/40 text-xs leading-relaxed mt-0.5">{node.desc}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between mt-5 pt-0">
                <span className="text-white/20 text-xs font-mono">0{i + 1}</span>
                <motion.span
                  animate={{ rotate: active === eje.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-cchia-teal text-xl font-light"
                >
                  +
                </motion.span>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
