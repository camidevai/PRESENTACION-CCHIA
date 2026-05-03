import { motion } from 'framer-motion'
import EpisodeLayout from './EpisodeLayout'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

export default function Vision({ episode, goNext, goPrev, hasNext, hasPrev }) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]
  return (
    <EpisodeLayout episode={episode} goNext={goNext} goPrev={goPrev} hasNext={hasNext} hasPrev={hasPrev}>
      <div className="flex flex-col items-center justify-center gap-3 w-full min-h-full">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{ width: '48px', height: '2px', background: '#008996', borderRadius: '2px', flexShrink: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ position: 'relative', width: '100%', maxWidth: '820px', flexShrink: 1 }}
        >
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
            <img
              src="/Vision Estrategica/Visión Estratégica.png"
              alt="Visión Estratégica"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </div>
        </motion.div>

      </div>
    </EpisodeLayout>
  )
}
