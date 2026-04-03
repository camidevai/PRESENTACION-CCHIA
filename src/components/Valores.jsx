import { motion } from 'framer-motion'
import { valores } from '../data/content'

export default function Valores() {
  return (
    <section id="valores" className="py-24 bg-cchia-blue">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cchia-teal text-sm font-semibold tracking-widest-xl uppercase mb-4 block">
            Lo que nos define
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Valores Fundamentales
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((valor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-cchia-teal/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-4 h-4 bg-cchia-teal rounded-full" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{valor.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{valor.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
