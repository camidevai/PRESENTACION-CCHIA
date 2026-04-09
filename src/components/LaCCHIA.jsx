import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'

export default function LaCCHIA({ episode, goNext, goPrev, hasNext, hasPrev }) {
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <div className="max-w-3xl">
        {/* Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <p className="text-4xl sm:text-5xl font-black text-white leading-tight mb-2">
            No estamos ante un
          </p>
          <p
            className="text-4xl sm:text-5xl font-black leading-tight mb-2"
            style={{ background: 'linear-gradient(120deg, #008996, #00c9b1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            cambio tecnológico.
          </p>
          <p className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Estamos ante un cambio de paradigma.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-12 h-0.5 mb-8"
          style={{ background: '#008996' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl"
        >
          CCHIA es la Cámara Chilena de Inteligencia Artificial. El sistema operativo del ecosistema de IA en Chile.
        </motion.p>

        {/* 3 pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: 'Sin fines de lucro', desc: 'Independencia e imparcialidad en todo lo que hacemos.', icon: '⚖️' },
            { label: 'Multi-actor', desc: 'Academia, industria, gobierno y sociedad civil unidos.', icon: '🤝' },
            { label: 'Impacto real', desc: 'Políticas, capacitación y alianzas que transforman Chile.', icon: '🚀' },
          ].map((p, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="text-2xl mb-3 block">{p.icon}</span>
              <h3 className="text-white font-bold text-sm mb-1">{p.label}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </EpisodeLayout>
  )
}
