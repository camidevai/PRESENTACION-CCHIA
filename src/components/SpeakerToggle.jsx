import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { speakers } from '../data/content'

export default function SpeakerToggle() {
  const [active, setActive] = useState('cami')
  const speaker = speakers[active]

  return (
    <div className="max-w-3xl mx-auto">
      {/* Toggle pill */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-white rounded-full p-1 shadow-md border border-gray-100">
          {Object.values(speakers).map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                active === s.id ? 'text-white' : 'text-gray-500 hover:text-cchia-blue'
              }`}
            >
              {active === s.id && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 rounded-full bg-cchia-blue"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{s.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-cchia-blue leading-relaxed mb-8 italic">
            "{speaker.quote}"
          </blockquote>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto mb-6">
            {speaker.extended}
          </p>
          <div className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cchia-teal flex items-center justify-center text-white font-bold text-sm">
              {speaker.name.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-bold text-cchia-blue text-sm">{speaker.name}</p>
              <p className="text-gray-500 text-xs">{speaker.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
