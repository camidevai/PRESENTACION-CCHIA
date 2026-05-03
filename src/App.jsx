import { useState } from 'react'
import { useTheme, TOKENS } from './context/ThemeContext.jsx'
import { AnimatePresence, motion } from 'framer-motion'
import SpeakerSelect from './components/SpeakerSelect'
import Sidebar from './components/Sidebar'
import MiHistoria from './components/MiHistoria'
import LaCCHIA from './components/LaCCHIA'
import Definicion from './components/Definicion'
import Vision from './components/Vision'
import ComoLoHacemos from './components/ComoLoHacemos'
import EjesEstrategicos from './components/EjesEstrategicos'
import Ecosistema from './components/Ecosistema'

export const SECTIONS = [
  { id: 'mi-historia',  label: 'Mi historia',            ep: '00' },
  { id: 'la-cchia',     label: 'La CCHIA',                ep: '01' },
  { id: 'definicion',   label: 'Definición y Propósito',  ep: '02' },
  { id: 'vision',       label: 'Visión Estratégica',       ep: '03' },
  { id: 'como',         label: 'Cómo lo hacemos',          ep: '04' },
  { id: 'ejes',         label: 'Ejes Estratégicos',        ep: '05' },
  { id: 'ecosistema',   label: 'Únete al ecosistema',      ep: '06' },
]

const MAP = {
  'mi-historia': MiHistoria,
  'la-cchia':    LaCCHIA,
  'definicion':  Definicion,
  'vision':      Vision,
  'como':        ComoLoHacemos,
  'ejes':        EjesEstrategicos,
  'ecosistema':  Ecosistema,
}

export default function App() {
  const [speaker, setSpeaker]         = useState(null)   // null = pantalla de selección
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [active, setActive]           = useState('mi-historia')

  const idx    = SECTIONS.findIndex(s => s.id === active)
  const Comp   = MAP[active]
  const goNext = () => { if (idx < SECTIONS.length - 1) setActive(SECTIONS[idx + 1].id) }
  const goPrev = () => { if (idx > 0) setActive(SECTIONS[idx - 1].id) }

  // --- Pantalla de selección de speaker ---
  if (!speaker) {
    return (
      <AnimatePresence>
        <SpeakerSelect onSelect={setSpeaker} />
      </AnimatePresence>
    )
  }

  // --- Presentación ---
  const { theme } = useTheme()
  const tk = TOKENS[theme]
  return (
    <div data-theme={theme} className="flex h-screen overflow-hidden" style={{ background: tk.bg, transition: 'background 0.3s' }}>
      <Sidebar
        active={active}
        setActive={setActive}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(o => !o)}
        speaker={speaker}
        onChangeSpeaker={() => { setSpeaker(null); setActive('mi-historia') }}
      />

      <main className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-full"
          >
            <Comp
              episode={SECTIONS[idx]}
              goNext={goNext}
              goPrev={goPrev}
              hasNext={idx < SECTIONS.length - 1}
              hasPrev={idx > 0}
              speaker={speaker}
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
