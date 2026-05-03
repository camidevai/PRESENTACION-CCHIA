import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

const IMAGES = [
  '/Fotos/General/Sin fines de lucro Multi-actor A Impacto real-01.png',
  '/Fotos/General/Sin fines de lucro Multi-actor A Impacto real-02.png',
]

export default function LaCCHIA({ episode, goNext, goPrev, hasNext, hasPrev }) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]
  const [imgIdx, setImgIdx] = useState(0)

  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <div className="flex flex-col items-center justify-center gap-3 w-full min-h-full">

        {/* Título centrado — una línea */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <p className="text-xl sm:text-2xl font-black leading-tight">
            <span style={{ color: tk.text }}>Estamos ante un </span>
            <span style={{
              background: 'linear-gradient(120deg, #008996, #00c9b1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>cambio de paradigma.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{ width: '48px', height: '2px', background: '#008996', borderRadius: '2px', flexShrink: 0 }}
        />

        {/* Carrusel — wrapper con posición relativa para el botón siguiente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ position: 'relative', width: '100%', maxWidth: '820px', flexShrink: 1 }}
        >
          {/* Imagen */}
          <div
            style={{
              overflow: 'hidden',
              borderRadius: '20px',
              width: '100%',
              aspectRatio: '16/9',
              maxHeight: 'calc(100vh - 220px)',
              position: 'relative',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={imgIdx}
                src={IMAGES[imgIdx]}
                alt="CCHIA"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </AnimatePresence>

            {/* Botón anterior — sutil, sobre la imagen */}
            {imgIdx > 0 && (
              <button
                onClick={() => setImgIdx(i => i - 1)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '12px',
                  zIndex: 10,
                  background: 'rgba(0,0,0,0.35)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(4px)',
                }}
              >
                anterior
              </button>
            )}
          </div>

          {/* Botón siguiente — fuera del overflow, a la derecha */}
          {imgIdx < IMAGES.length - 1 && (
            <button
              onClick={() => setImgIdx(i => i + 1)}
              style={{
                position: 'absolute',
                right: '-52px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0,137,150,0.15)',
                border: '1px solid rgba(0,137,150,0.4)',
                color: '#00c9b1',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >›</button>
          )}
        </motion.div>

      </div>
    </EpisodeLayout>
  )
}
