import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import EpisodeLayout from './EpisodeLayout'

const BENEFICIOS = [
  { label: 'Acceso a conocimiento y comunidad',    num: '01' },
  { label: 'Alianzas estratégicas y networking',   num: '02' },
  { label: 'Voz en el debate público de IA',       num: '03' },
  { label: 'Conexión con redes internacionales',   num: '04' },
]

export default function Ecosistema({ episode, goNext, goPrev, hasNext, hasPrev }) {
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full">

        {/* ── Izquierda: texto ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 min-w-0"
        >
          {/* Tagline */}
          <p
            className="text-4xl sm:text-5xl font-black leading-tight mb-3"
            style={{
              background: 'linear-gradient(120deg, #008996, #00c9b1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Forma parte<br />del ecosistema.
          </p>
          <p className="text-white/40 text-base leading-relaxed mb-10 max-w-sm">
            CCHIA conecta a quienes construyen el futuro de la IA en Chile. Profesionales, empresas, academia y gobierno — hacia un mismo norte.
          </p>

          {/* Beneficios */}
          <div className="flex flex-col gap-3 mb-10">
            {BENEFICIOS.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.08 }}
                className="flex items-center gap-4 py-3 px-4 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderLeft: '3px solid #008996',
                }}
              >
                <span className="text-[#008996] font-black text-sm tabular-nums w-6 flex-shrink-0">{b.num}</span>
                <p className="text-white/70 text-sm font-medium">{b.label}</p>
              </motion.div>
            ))}
          </div>

          {/* URL */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/30 text-sm"
          >
            Visita{' '}
            <span style={{ color: '#00c9b1', fontWeight: 700, fontSize: '1rem' }}>cchia.cl</span>
            {' '}o escanea el código QR
          </motion.p>
        </motion.div>

        {/* ── Derecha: QR card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 flex justify-center"
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #000d1a 0%, #001824 100%)',
              border: '1px solid rgba(0,137,150,0.3)',
              borderRadius: '28px',
              padding: '40px 36px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
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
                borderRadius: '16px',
                padding: '16px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <QRCodeSVG
                value="https://cchia.cl"
                size={220}
                bgColor="#FFFFFF"
                fgColor="#003764"
                level="H"
                includeMargin={false}
              />
            </div>

            {/* URL label */}
            <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
              <p
                className="font-black text-lg tracking-wide"
                style={{
                  background: 'linear-gradient(120deg, #008996, #00c9b1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                cchia.cl
              </p>
              <p className="text-white/25 text-xs mt-1 tracking-widest uppercase">Cámara Chilena de IA</p>
            </div>
          </div>
        </motion.div>

      </div>
    </EpisodeLayout>
  )
}
