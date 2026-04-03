import { motion } from 'framer-motion'
import { definicion } from '../data/content'

export default function Definicion() {
  return (
    <section id="mision" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cchia-teal text-sm font-semibold tracking-widest-xl uppercase mb-4 block">
            Definición y Propósito
          </span>
          <h2 className="text-4xl font-bold text-cchia-blue mb-4 leading-tight">
            El Sistema Operativo del Ecosistema IA en Chile
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            CCHIA es una organización sin fines de lucro que articula academia, industria,
            gobierno y sociedad civil en torno a la inteligencia artificial responsable.
          </p>
        </motion.div>

        {/* 4 cards — imagen como elemento visual principal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {definicion.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="group bg-cchia-light rounded-2xl overflow-hidden border border-transparent hover:border-cchia-teal hover:shadow-md transition-all duration-300"
            >
              {/* Imagen — ocupa el área superior de la card */}
              <div className="w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Solo descripción — el título ya está en la imagen */}
              <div className="px-5 py-4">
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
