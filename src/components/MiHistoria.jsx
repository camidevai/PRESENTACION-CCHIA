import React, { useState } from 'react'
// speaker viene como prop desde App.jsx (definido en la pantalla de selección)
import { motion, AnimatePresence } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

const STORIES = {
  cami: [
    {
      title: 'Yo no era tecnológica',
      caption: 'El inicio',
      emoji: '🦷',
      accentColor: '#e07b52',
      dialog: 'Mi primer trabajo fue ser promotora afuera de una clínica dental.',
      dialogType: 'thought',
      bgAngle: '135deg',
      bgFrom: '#1a0e08',
      bgTo: '#2a1a0a',
      video: '/Videos/Camila/Yo no era tecnologia.mp4',
    },
    {
      title: 'Tomé una decisión incómoda',
      caption: 'El salto',
      emoji: '🎓',
      accentColor: '#c084fc',
      dialog: '¿Ingeniería en informática? No sé si puedo... pero lo voy a intentar.',
      dialogType: 'thought',
      bgAngle: '135deg',
      bgFrom: '#120a1a',
      bgTo: '#1e0e2e',
      video: '/Videos/Camila/Tome una decision incomoda.mp4',
    },
    {
      title: 'Encontré algo que me obsesionó',
      caption: 'El hiperfoco',
      emoji: '🤖',
      accentColor: '#00c9b1',
      dialog: 'La inteligencia artificial generativa... esto lo cambia TODO.',
      dialogType: 'speech',
      bgAngle: '135deg',
      bgFrom: '#001e1a',
      bgTo: '#003030',
      video: '/Videos/Camila/Encontre algo que me obsesiono.mp4',
    },
    {
      title: 'Compartí y todo cambió',
      caption: 'Las redes',
      emoji: '📱',
      accentColor: '#f472b6',
      dialog: '¡Prech! Si yo pude aprender esto, tú también puedes.',
      dialogType: 'speech',
      bgAngle: '135deg',
      bgFrom: '#1a0814',
      bgTo: '#2a0e20',
      video: '/Videos/Camila/Comparti y todo cambio.mp4',
    },
    {
      title: 'Construí algo más grande que yo',
      caption: 'El propósito',
      emoji: '🏗️',
      accentColor: '#008996',
      dialog: 'Fundé mi empresa, me uní a la CCHIA. Esto ya no es solo mío.',
      dialogType: 'speech',
      bgAngle: '135deg',
      bgFrom: '#001428',
      bgTo: '#002040',
      videos: [
        '/Videos/Camila/Construi algo más grande que yo uno.mp4',
        '/Videos/Camila/Construí algo más grande que yo dos.mp4',
      ],
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

function VideoThumbnail({ src, accentColor, isActive }) {
  const videoRef = React.useRef(null)

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    if (isActive) {
      v.play().catch(() => {})
    } else {
      v.pause()
      v.currentTime = 0
    }
  }, [isActive])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      defaultMuted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
      style={{ display: 'block' }}
    />
  )
}

function ComicPanel({ panel, index, isActive, onClick, tk }) {
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
        boxShadow: isActive ? `0 0 28px ${panel.accentColor}45` : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Video thumbnail */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: '1/1',
          background: `linear-gradient(${panel.bgAngle}, ${panel.bgFrom}, ${panel.bgTo})`,
        }}
      >
        {(panel.video || panel.videos) ? (
          <>
            <VideoThumbnail src={panel.videos?.[0] ?? panel.video} accentColor={panel.accentColor} isActive={isActive} />
            {/* Gradiente inferior */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.7) 100%)` }}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-3xl">{panel.emoji}</span>
          </div>
        )}

        {/* Caption */}
        <span
          className="absolute top-2.5 left-2.5 text-[9px] font-black tracking-widest uppercase z-10 px-1.5 py-0.5 rounded"
          style={{
            color: panel.accentColor,
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {panel.caption}
        </span>

        {/* Play icon (solo cuando inactivo) */}
        {!isActive && (
          <div
            className="absolute inset-0 flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-200"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: `${panel.accentColor}cc`, backdropFilter: 'blur(4px)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                <path d="M3 2l9 5-9 5V2z" />
              </svg>
            </div>
          </div>
        )}

        {/* Panel number */}
        <span
          className="absolute bottom-2 right-2 text-[10px] font-black tabular-nums z-10"
          style={{ color: tk.textFaint }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Título */}
      <div className="px-2.5 py-2" style={{ background: 'rgba(0,10,20,0.97)' }}>
        <p className="font-black text-[10px] leading-tight text-center" style={{ color: '#ffffff' }}>
          {panel.title}
        </p>
      </div>

      {/* Active bar */}
      {isActive && (
        <div className="h-0.5" style={{ background: panel.accentColor }} />
      )}
    </motion.div>
  )
}

const SPEAKER_INFO = {
  cami:   { name: 'Camila Bañares',  role: 'Vicepresidenta · CamiDevAI',        color: '#008996', photo: '/Fotos/Camila/Camila 1.png' },
  edison: { name: 'Edison Vásquez',  role: 'Presidente · Estrategia & Alianzas', color: '#4a90d9', photo: '/Fotos/Edison/edison 1.png' },
}

export default function MiHistoria({ episode, goNext, goPrev, hasNext, hasPrev, speaker = 'cami' }) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]
  const [panelIdx, setPanelIdx] = useState(0)
  const [playingPanelIdx, setPlayingPanelIdx] = useState(null)
  const story = STORIES[speaker] || STORIES.cami
  const active = story[panelIdx]
  const sp = SPEAKER_INFO[speaker] || SPEAKER_INFO.cami

  function handlePanelClick(i) {
    setPanelIdx(i)
    if (story[i].video || story[i].videos) {
      setPlayingPanelIdx(current => current === i ? null : i)
    } else {
      setPlayingPanelIdx(null)
    }
  }

  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      

      {/* Speaker badge */}
      <div
        className="inline-flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl mb-4 sm:mb-6"
        style={{ background: `${sp.color}12`, border: `1px solid ${sp.color}30` }}
      >
        <img
          src={sp.photo}
          alt={sp.name}
          style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }}
        />
        <div>
          <p className="font-bold text-sm leading-tight" style={{ color: tk.text }}>{sp.name}</p>
          <p className="text-xs" style={{ color: tk.textFaint }}>{sp.role}</p>
        </div>
      </div>

      {/* Comic grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-3 sm:mb-5">
        {story.map((panel, i) => (
          <ComicPanel
            key={`${speaker}-${i}`}
            panel={panel}
            index={i}
            isActive={playingPanelIdx === i}
            onClick={() => handlePanelClick(i)}
            tk={tk}
          />
        ))}
      </div>

      {/* Info del panel activo (sin video) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${speaker}-${panelIdx}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="p-5 rounded-2xl"
          style={{ background: `${active.accentColor}0d`, border: `1px solid ${active.accentColor}25` }}
        >
          <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-1" style={{ color: active.accentColor }}>
            {active.caption}
          </p>
          <h3 className="text-xl font-black leading-tight mb-2" style={{ color: tk.text }}>{active.title}</h3>
          <blockquote className="text-sm font-light leading-relaxed mb-2 italic" style={{ color: tk.textMuted }}>
            {active.dialogType === 'thought' ? '💭 ' : '💬 '}"{active.dialog}"
          </blockquote>
        </motion.div>
      </AnimatePresence>
    </EpisodeLayout>
  )
}
