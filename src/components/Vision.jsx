import { motion } from 'framer-motion'
import { vision } from '../data/content'

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-cchia-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-cchia-teal text-sm font-semibold tracking-widest-xl uppercase mb-4 block">
              Visión Estratégica
            </span>
            <h2 className="text-4xl font-bold text-cchia-blue mb-6 leading-tight">
              Chile como Referente Latinoamericano de IA
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Visualizamos un Chile donde la inteligencia artificial es una ventaja competitiva
              real: accesible para las PYMEs, atractiva para los jóvenes y reconocida
              internacionalmente por su enfoque ético.
            </p>
            <p className="text-gray-500 leading-relaxed">
              No es una visión de largo plazo incierto. Es el trabajo que hacemos hoy,
              con cada alianza, cada capacitación y cada política que impulsamos.
            </p>
          </motion.div>

          {/* Right: 4 vision points from mind map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {vision.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border-l-4 border-cchia-teal shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-cchia-teal font-bold text-xl tabular-nums w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-cchia-blue font-medium leading-snug">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
