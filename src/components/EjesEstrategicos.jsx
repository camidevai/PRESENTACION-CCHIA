import { motion } from 'framer-motion'
import { ejes } from '../data/content'
import EjeCard from './EjeCard'

export default function EjesEstrategicos() {
  return (
    <section id="ejes" className="py-24 bg-cchia-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cchia-teal text-sm font-semibold tracking-widest-xl uppercase mb-4 block">
            Cómo lo hacemos
          </span>
          <h2 className="text-4xl font-bold text-cchia-blue mb-4">
            Ejes Estratégicos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Cuatro pilares que definen nuestra acción. Haz click en cada eje para explorar su alcance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {ejes.map((eje, i) => (
            <motion.div
              key={eje.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <EjeCard eje={eje} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
