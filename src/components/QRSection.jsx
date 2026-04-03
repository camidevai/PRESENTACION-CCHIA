import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'

const QR_URL = 'https://cchia.cl'

export default function QRSection() {
  return (
    <section id="contacto" className="py-24 bg-cchia-blue">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-cchia-teal text-sm font-semibold tracking-widest-xl uppercase mb-4 block">
              Únete al ecosistema
            </span>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Sé parte del cambio de paradigma
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              CCHIA es la red que conecta a quienes construyen el futuro de la
              inteligencia artificial en Chile. Profesionales, empresas, academia y
              gobierno trabajando hacia un mismo norte.
            </p>
            <p className="text-white/50 leading-relaxed">
              Escanea el código QR o visita{' '}
              <span className="text-cchia-teal font-semibold">cchia.cl</span> para
              conocer cómo puedes sumarte.
            </p>
          </motion.div>

          {/* Right: QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* QR container con área de respeto y fondo blanco */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl inline-flex flex-col items-center gap-4">
              <QRCodeSVG
                value={QR_URL}
                size={200}
                bgColor="#FFFFFF"
                fgColor="#003764"
                level="H"
                includeMargin={false}
              />
              <div className="text-center">
                <p className="text-cchia-blue font-bold text-sm tracking-wide">
                  CÁMARA CHILENA DE IA
                </p>
                <p className="text-gray-400 text-xs mt-0.5">{QR_URL}</p>
              </div>
            </div>

            <p className="text-white/40 text-xs mt-4 text-center">
              Apunta tu cámara al código para acceder
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
