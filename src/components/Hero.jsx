import { motion } from 'framer-motion'

const phrases = [
  { text: 'No estamos ante un cambio tecnológico.', teal: false },
  { text: 'Estamos ante un cambio de paradigma.', teal: true },
]

export default function Hero() {
  return (
    <section className="min-h-screen bg-cchia-blue flex items-center justify-center relative overflow-hidden pt-20">

      {/* Radial glow sutil — solo teal, dentro de paleta */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 35%, rgba(0,137,150,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Stack central — todo con gap uniforme */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto gap-8 w-full">

        {/* LOGO — dominante pero proporcional: 300px desktop, fluid mobile */}
        {/* Área de autonomía 3X → padding 48px lados, 32px arriba/abajo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ padding: 0 }}
        >
          <img
            src="/logo-cchia.png"
            alt="CCHIA — Cámara Chilena de Inteligencia Artificial"
            style={{
              width: '100%',
              maxWidth: '300px',
              minWidth: '113px',
              height: 'auto',
              filter: 'brightness(0) invert(1)',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Divisor teal */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-12 h-px bg-cchia-teal"
          style={{ marginTop: '-16px' }}
        />

        {/* Hook — ahora a la misma escala visual que el logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {phrases.map(({ text, teal }, i) => (
            <p
              key={i}
              className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
                teal ? 'text-cchia-teal' : 'text-white'
              }`}
            >
              {text}
            </p>
          ))}
        </motion.div>

        {/* Subheadline — escala intermedia */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-white/60 text-base md:text-lg max-w-lg leading-relaxed font-light"
        >
          El sistema operativo del ecosistema de inteligencia artificial en Chile.
        </motion.p>

        {/* CTAs — tamaño consistente con el texto */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#mision"
            className="px-8 py-4 bg-cchia-teal text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-base"
          >
            Conoce nuestra misión
          </a>
          <a
            href="#voces"
            className="px-8 py-4 border-2 border-white/25 text-white font-semibold rounded-full hover:border-white/50 transition-colors text-base"
          >
            Escucha a la Cámara
          </a>
        </motion.div>

      </div>
    </section>
  )
}
