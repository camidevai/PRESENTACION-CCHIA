import { motion } from 'framer-motion'
import { vision } from '../data/content'

export default function Manifesto() {
  return (
    <section id="mision" className="py-24 bg-cchia-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Definition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-cchia-teal text-sm font-semibold tracking-widest-xl uppercase mb-4 block">
              Quiénes somos
            </span>
            <h2 className="text-4xl font-bold text-cchia-blue mb-6 leading-tight">
              El Sistema Operativo del Ecosistema IA en Chile
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              CCHIA es una organización sin fines de lucro que articula a los actores del ecosistema
              de inteligencia artificial en Chile: academia, industria, gobierno y sociedad civil.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Promovemos la adopción responsable de la IA como palanca de desarrollo sostenible,
              equitativo y con identidad latinoamericana.
            </p>
          </motion.div>

          {/* Right: Vision points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-cchia-teal text-sm font-semibold tracking-widest-xl uppercase mb-6 block">
              Nuestra visión
            </span>
            <div className="space-y-4">
              {vision.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border-l-4 border-cchia-teal shadow-sm"
                >
                  <span className="text-cchia-teal font-bold text-lg">0{i + 1}</span>
                  <p className="text-cchia-blue font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
