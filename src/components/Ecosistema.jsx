import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import EpisodeLayout from './EpisodeLayout'

export default function Ecosistema({ episode, goNext, goPrev, hasNext, hasPrev }) {
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
            CCHIA es la red que conecta a quienes construyen el futuro de la inteligencia artificial en Chile. Profesionales, empresas, academia y gobierno trabajando hacia un mismo norte.
          </p>

          <div className="space-y-3 mb-8">
            {[
              '🎓 Acceso a conocimiento y comunidad',
              '🤝 Alianzas estratégicas y networking',
              '📣 Voz en el debate público de IA',
              '🌎 Conexión con redes internacionales',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-white/35 text-sm">
            Escanea el código o visita{' '}
            <span style={{ color: '#008996', fontWeight: 700 }}>cchia.cl</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-3xl p-8 inline-flex flex-col items-center gap-4">
            <QRCodeSVG
              value="https://cchia.cl"
              size={180}
              bgColor="#FFFFFF"
              fgColor="#003764"
              level="H"
              includeMargin={false}
            />
            <div className="text-center">
              <p className="text-[#003764] font-bold text-xs tracking-wide">CÁMARA CHILENA DE IA</p>
              <p className="text-gray-400 text-xs mt-0.5">cchia.cl</p>
            </div>
          </div>
        </motion.div>
      </div>
    </EpisodeLayout>
  )
}
