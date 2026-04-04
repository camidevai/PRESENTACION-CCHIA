import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { speakers } from '../data/content'

export default function SpeakerToggle() {
  const [active, setActive] = useState('cami')
  const speaker = speakers[active]

  return (
    <div className="max-w-3xl mx-auto">
      {/* Toggle pill moderno */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white/5 rounded-2xl p-1 border border-white/10">
          {Object.values(speakers).map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-colors duration-200 ${
                active === s.id ? 'text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              {active === s.id && (
                <motion.span
                  layoutId="speaker-pill"
                  className="absolute inset-0 rounded-xl bg-cchia-teal"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">{s.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quote + contenido */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          {/* Comilla decorativa */}
          <span className="text-cchia-teal/20 text-8xl font-black leading-none block mb-2">"</span>

          <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed mb-8 -mt-6">
            {speaker.quote}
          </blockquote>

          <p className="text-white/40 text-sm leading-relaxed max-w-xl mx-auto mb-8 font-light">
            {speaker.extended}
          </p>

          {/* Avatar */}
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-5 py-3">
            <div className="w-9 h-9 rounded-xl bg-cchia-teal flex items-center justify-center text-white font-black text-sm flex-shrink-0">
              {speaker.name.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-black text-white text-sm">{speaker.name}</p>
              <p className="text-white/40 text-xs">{speaker.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
