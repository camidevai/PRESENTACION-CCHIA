import { motion } from 'framer-motion'
import { valores } from '../data/content'

const valorIcons = [null, '⚖️', '✨', '🌱']
const valorImages = ['/Ejes estrategicos/IA Responsable.png', '/Ejes estrategicos/Etica.png', '/Ejes estrategicos/calidad de vida.png', '/Ejes estrategicos/Bienestar Social.png']

export default function Valores() {
  return (
    <section id="valores" className="py-24 bg-cchia-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-cchia-teal text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            Lo que nos define
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-cchia-blue leading-none tracking-tight">
            Valores Fundamentales
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valores.map((valor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="glass-light rounded-3xl card-hover border border-cchia-blue/5 overflow-hidden"
            >
              {/* Si hay imagen, ocupa la parte superior de la card completa */}
              {valorImages[i] && (
                <div className="w-full">
                  <img src={valorImages[i]} alt={valor.title} className="w-full h-auto object-cover" />
                </div>
              )}

              <div className="p-7">
                {/* Sin imagen: muestra el icono */}
                {!valorImages[i] && (
                  <div className="w-12 h-12 rounded-2xl bg-cchia-blue flex items-center justify-center mb-5">
                    <span className="text-xl">{valorIcons[i]}</span>
                  </div>
                )}
                <h3 className="text-cchia-blue font-black text-lg mb-2 leading-tight">
                  {valor.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{valor.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
