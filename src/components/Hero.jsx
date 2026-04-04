import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen mesh-bg flex items-center justify-center relative overflow-hidden pt-20">

      {/* Orb teal decorativo — dentro de paleta */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,137,150,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto gap-7 w-full">

        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-cchia-teal/30 text-cchia-teal bg-cchia-teal/10">
            <span className="w-1.5 h-1.5 rounded-full bg-cchia-teal animate-pulse" />
            Cámara Chilena de Inteligencia Artificial
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <img
            src="/logo-cchia.png"
            alt="CCHIA"
            style={{
              width: '100%',
              maxWidth: '280px',
              minWidth: '113px',
              height: 'auto',
              filter: 'brightness(0) invert(1)',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Hook — ultra bold display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-1"
        >
          <p className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
            No estamos ante un
          </p>
          <p className="text-3xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight text-gradient">
            cambio tecnológico.
          </p>
          <p className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
            Estamos ante un cambio
          </p>
          <p className="text-3xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight text-gradient">
            de paradigma.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-10 h-px bg-cchia-teal/50"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-white/50 text-base md:text-lg max-w-md leading-relaxed font-light"
        >
          El sistema operativo del ecosistema de IA en Chile.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#mision"
            className="px-7 py-3.5 bg-cchia-teal text-white font-bold rounded-xl hover:opacity-90 transition-all text-sm tracking-wide"
          >
            Conoce la misión
          </a>
          <a
            href="#voces"
            className="px-7 py-3.5 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm tracking-wide"
          >
            Escucha a la Cámara
          </a>
        </motion.div>

      </div>
    </section>
  )
}
