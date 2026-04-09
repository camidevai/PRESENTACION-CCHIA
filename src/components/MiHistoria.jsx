import { useState } from 'react'
// speaker viene como prop desde App.jsx (definido en la pantalla de selección)
import { motion, AnimatePresence } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'

const STORIES = {
  cami: [
    {
      title: 'Yo no era tecnológica',
      caption: 'El inicio',
      emoji: '🦷',
      accentColor: '#e07b52',
      dialog: 'Mi primer trabajo fue ser promotora afuera de una clínica dental.',
      dialogType: 'thought',
      narrative: 'Camila no nació en el mundo tech. Antes de la IA, antes del código, antes de todo — estaba parada en la vereda repartiendo folletos.',
      bgAngle: '135deg',
      bgFrom: '#1a0e08',
      bgTo: '#2a1a0a',
      img: null, // agregar imagen aquí: '/historia-cami/01-no-era-tech.png'
    },
    {
      title: 'Tomé una decisión incómoda',
      caption: 'El salto',
      emoji: '🎓',
      accentColor: '#c084fc',
      dialog: '¿Ingeniería en informática? No sé si puedo... pero lo voy a intentar.',
      dialogType: 'thought',
      narrative: 'Estudió Ingeniería en Informática con mención en Ciberseguridad. Fue incómodo, fue difícil, pero fue la decisión que lo cambió todo.',
      bgAngle: '135deg',
      bgFrom: '#120a1a',
      bgTo: '#1e0e2e',
      img: null, // agregar imagen aquí: '/historia-cami/02-decision-incomoda.png'
    },
    {
      title: 'Encontré algo que me obsesionó',
      caption: 'El hiperfoco',
      emoji: '🤖',
      accentColor: '#00c9b1',
      dialog: 'La inteligencia artificial generativa... esto lo cambia TODO.',
      dialogType: 'speech',
      narrative: 'Tiene TDAH y cuando algo le llama la atención, entra en hiperfoco total. La IA generativa fue ese algo. Hizo un posgrado, se certificó, no paró.',
      bgAngle: '135deg',
      bgFrom: '#001e1a',
      bgTo: '#003030',
      img: null, // agregar imagen aquí: '/historia-cami/03-obsesion.png'
    },
    {
      title: 'Compartí y todo cambió',
      caption: 'Las redes',
      emoji: '📱',
      accentColor: '#f472b6',
      dialog: '¡Prech! Si yo pude aprender esto, tú también puedes.',
      dialogType: 'speech',
      narrative: 'Empezó a subir videos todos los días. Hoy tiene más de 470.000 seguidores. Es "la chica que dice prech" — y democratiza la IA un video a la vez.',
      bgAngle: '135deg',
      bgFrom: '#1a0814',
      bgTo: '#2a0e20',
      img: null, // agregar imagen aquí: '/historia-cami/04-redes.png'
    },
    {
      title: 'Construí algo más grande que yo',
      caption: 'El propósito',
      emoji: '🏗️',
      accentColor: '#008996',
      dialog: 'Fundé mi empresa, me uní a la CCHIA. Esto ya no es solo mío.',
      dialogType: 'speech',
      narrative: 'CEO y fundadora de su empresa de software. Socia de la Cámara Chilena de IA. Certificada por Chile Valora. Lo que empezó en una clínica dental llegó acá.',
      bgAngle: '135deg',
      bgFrom: '#001428',
      bgTo: '#002040',
      img: null, // agregar imagen aquí: '/historia-cami/05-construi.png'
    },
  ],
  edison: [
    {
      caption: 'Chile, 2020',
      emoji: '🌟',
      accentColor: '#6b9ed4',
      dialog: 'Chile puede ser más que un espectador en la revolución IA.',
      dialogType: 'thought',
      narrative: 'Un estratega con visión de largo plazo, observando la brecha entre el potencial y la realidad.',
      bgAngle: '135deg',
      bgFrom: '#0a1628',
      bgTo: '#0d2040',
    },
    {
      caption: 'La brecha',
      emoji: '📊',
      accentColor: '#8080d0',
      dialog: '¿Cómo articulamos academia, industria y gobierno?',
      dialogType: 'thought',
      narrative: 'La industria avanzaba en silos. El ecosistema necesitaba infraestructura.',
      bgAngle: '135deg',
      bgFrom: '#100a20',
      bgTo: '#1a1030',
    },
    {
      caption: 'La decisión',
      emoji: '⚡',
      accentColor: '#00c9b1',
      dialog: '¡Necesitamos el sistema operativo del ecosistema!',
      dialogType: 'speech',
      narrative: 'La respuesta estaba en crear la infraestructura articuladora que faltaba.',
      bgAngle: '135deg',
      bgFrom: '#002020',
      bgTo: '#003535',
    },
    {
      caption: 'La construcción',
      emoji: '🏗️',
      accentColor: '#4a7ab5',
      dialog: 'No estamos ante un cambio tecnológico, sino de paradigma.',
      dialogType: 'speech',
      narrative: 'Alianza por alianza. Política por política. Ecosistema por ecosistema.',
      bgAngle: '135deg',
      bgFrom: '#0a1528',
      bgTo: '#0d1e38',
    },
    {
      caption: 'El legado',
      emoji: '🏆',
      accentColor: '#008996',
      dialog: 'Chile tiene la oportunidad de ser el referente latinoamericano de IA responsable.',
      dialogType: 'speech',
      narrative: 'CCHIA: el nexo que conecta, articula y potencia el futuro tecnológico de Chile.',
      bgAngle: '135deg',
      bgFrom: '#001428',
      bgTo: '#002040',
    },
  ],
}

function ComicPanel({ panel, index, isActive, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onClick={onClick}
      className="cursor-pointer flex flex-col overflow-hidden"
      style={{
        borderRadius: '14px',
        border: isActive
          ? `2px solid ${panel.accentColor}`
          : '2px solid rgba(255,255,255,0.08)',
        boxShadow: isActive ? `0 0 24px ${panel.accentColor}35` : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Panel art — imagen si existe, sino arte abstracto */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          height: panel.img ? 'auto' : '128px',
          background: `linear-gradient(${panel.bgAngle}, ${panel.bgFrom}, ${panel.bgTo})`,
        }}
      >
        {panel.img ? (
          <>
            <img
              src={panel.img}
              alt={panel.title}
              className="w-full h-auto object-cover"
              style={{ maxHeight: '180px', objectPosition: 'center top' }}
            />
            {/* Gradiente sobre la imagen */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to bottom, transparent 50%, ${panel.bgTo} 100%)` }}
            />
          </>
        ) : (
          <>
            {/* Arte decorativo placeholder */}
            <div style={{
              position: 'absolute', top: '18%', left: '14%',
              width: '50px', height: '50px', borderRadius: '50%',
              background: `${panel.accentColor}18`,
              border: `2px solid ${panel.accentColor}28`,
            }} />
            <div style={{
              position: 'absolute', bottom: '22%', right: '18%',
              width: '36px', height: '36px', borderRadius: '8px',
              background: `${panel.accentColor}12`, transform: 'rotate(20deg)',
              border: `1px solid ${panel.accentColor}20`,
            }} />
            <span className="text-3xl relative z-10">{panel.emoji}</span>
          </>
        )}

        {/* Caption */}
        <span
          className="absolute top-2.5 left-3 text-[10px] font-black tracking-widest uppercase z-10"
          style={{ color: panel.accentColor, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
        >
          {panel.caption}
        </span>
        {/* Panel number */}
        <span
          className="absolute bottom-2 right-3 text-[10px] font-black tabular-nums z-10"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Título + dialog */}
      <div className="p-3 flex-1" style={{ background: 'rgba(0,20,40,0.95)' }}>
        {/* Título del panel */}
        <p className="text-white font-black text-[11px] leading-tight mb-2">
          {panel.title}
        </p>
        <div
          className="p-2.5 mb-2"
          style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: panel.dialogType === 'thought' ? '12px 12px 12px 3px' : '12px 12px 3px 12px',
            border: `1px solid ${panel.accentColor}25`,
          }}
        >
          <p className="text-white/75 text-[11px] leading-relaxed">
            {panel.dialogType === 'thought' ? '💭 ' : '💬 '}
            <em>"{panel.dialog}"</em>
          </p>
        </div>
      </div>

      {/* Active bar */}
      {isActive && (
        <div className="h-0.5" style={{ background: panel.accentColor }} />
      )}
    </motion.div>
  )
}

const SPEAKER_INFO = {
  cami:   { name: 'Camila Bañares',  role: 'Vicepresidenta · CamiDevAI',        color: '#008996', emoji: '👩‍💻' },
  edison: { name: 'Edison Vásquez',  role: 'Presidente · Estrategia & Alianzas', color: '#4a90d9', emoji: '🎯'  },
}

export default function MiHistoria({ episode, goNext, goPrev, hasNext, hasPrev, speaker = 'cami' }) {
  const [panelIdx, setPanelIdx] = useState(0)
  const story = STORIES[speaker] || STORIES.cami
  const active = story[panelIdx]
  const sp = SPEAKER_INFO[speaker] || SPEAKER_INFO.cami

  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <p className="text-white/40 text-base leading-relaxed max-w-2xl mb-8">
        Antes de hablar de la Cámara, hay una historia que la hizo posible.
      </p>

      {/* Speaker badge */}
      <div
        className="inline-flex items-center gap-3 px-4 py-3 rounded-xl mb-8"
        style={{ background: `${sp.color}12`, border: `1px solid ${sp.color}30` }}
      >
        <span className="text-xl">{sp.emoji}</span>
        <div>
          <p className="text-white font-bold text-sm leading-tight">{sp.name}</p>
          <p className="text-white/35 text-xs">{sp.role}</p>
        </div>
      </div>

      {/* Comic grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {story.map((panel, i) => (
          <ComicPanel
            key={`${speaker}-${i}`}
            panel={panel}
            index={i}
            isActive={panelIdx === i}
            onClick={() => setPanelIdx(i)}
          />
        ))}
      </div>

      {/* Expanded detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${speaker}-${panelIdx}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="p-6 rounded-2xl flex items-start gap-4"
          style={{ background: `${active.accentColor}10`, border: `1px solid ${active.accentColor}25` }}
        >
          <span className="text-4xl flex-shrink-0">{active.emoji}</span>
          <div>
            <p
              className="text-[10px] font-black tracking-[0.25em] uppercase mb-1"
              style={{ color: active.accentColor }}
            >
              {active.caption}
            </p>
            <h3 className="text-white text-xl font-black leading-tight mb-3">
              {active.title}
            </h3>
            <blockquote className="text-white/80 text-base font-light leading-relaxed mb-3 italic">
              "{active.dialog}"
            </blockquote>
            <p className="text-white/45 text-sm leading-relaxed">{active.narrative}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </EpisodeLayout>
  )
}
