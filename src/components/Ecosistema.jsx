import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import EpisodeLayout from './EpisodeLayout'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

const BENEFICIOS = [
  { label: 'Acceso a conocimiento y comunidad',    num: '01' },
  { label: 'Alianzas estratégicas y networking',   num: '02' },
  { label: 'Voz en el debate público de IA',       num: '03' },
  { label: 'Conexión con redes internacionales',   num: '04' },
]

export default function Ecosistema({ episode, goNext, goPrev, hasNext, hasPrev }) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center w-full h-full">

        {/* ── Izquierda: imagen ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 min-w-0 min-h-0 flex items-center justify-center"
          style={{ height: '100%', overflow: 'hidden' }}
        >
          <img
            src="/forma parte/forma parte.png"
            alt="Forma parte del ecosistema"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '16px',
            }}
          />
        </motion.div>

        {/* ── Derecha: QR card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 flex justify-center items-center"
          style={{ maxHeight: '100%' }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #000d1a 0%, #001824 100%)',
              border: '1px solid rgba(0,137,150,0.3)',
              borderRadius: 'clamp(16px, 2vw, 28px)',
              padding: 'clamp(16px, 3vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'clamp(12px, 2vw, 24px)',
              boxShadow: '0 0 60px rgba(0,137,150,0.12), 0 24px 48px rgba(0,0,0,0.4)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow behind QR */}
            <div style={{
              position: 'absolute',
              top: '30%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '180px', height: '180px',
              background: 'radial-gradient(ellipse, rgba(0,137,150,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* QR */}
            <div
              style={{
                background: 'white',
                borderRadius: 'clamp(12px, 1.5vw, 20px)',
                padding: 'clamp(12px, 1.5vw, 20px)',
                position: 'relative',
                zIndex: 1,
                width: 'clamp(140px, 25vw, 320px)',
              }}
            >
              <QRCodeSVG
                value="https://cchia.cl"
                size="100%"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                bgColor="#FFFFFF"
                fgColor="#003764"
                level="H"
                includeMargin={false}
              />
            </div>

            {/* URL label */}
            <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
              <p
                className="font-black tracking-wide"
                style={{
                  fontSize: 'clamp(14px, 1.5vw, 18px)',
                  background: 'linear-gradient(120deg, #008996, #00c9b1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                cchia.cl
              </p>
              <p className="text-xs mt-1 tracking-widest uppercase" style={{ color: tk.textFaint }}>Cámara Chilena de IA</p>
            </div>
          </div>
        </motion.div>

      </div>
    </EpisodeLayout>
  )
}
