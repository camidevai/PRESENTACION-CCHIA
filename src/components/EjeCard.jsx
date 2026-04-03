import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EjeCard({ eje }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className="bg-white rounded-2xl p-6 cursor-pointer border-2 border-transparent hover:border-cchia-teal transition-colors duration-300 shadow-sm hover:shadow-md"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-3xl mb-3 block">{eje.icon}</span>
          <h3 className="text-xl font-bold text-cchia-blue mb-2">{eje.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{eje.description}</p>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-cchia-teal text-2xl font-light flex-shrink-0 mt-1"
        >
          +
        </motion.span>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              {eje.subnodes.map((node, i) => (
                <div key={i} className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-cchia-teal flex-shrink-0 mt-2" />
                  <div>
                    <p className="font-semibold text-cchia-blue text-sm">{node.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
