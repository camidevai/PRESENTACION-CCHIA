import { motion } from 'framer-motion'
import { useTheme, TOKENS } from '../context/ThemeContext.jsx'

export default function EpisodeTitle({ lead, highlight }) {
  const { theme } = useTheme()
  const tk = TOKENS[theme]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-center w-full"
    >
      <p className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95] max-w-5xl mx-auto">
        {lead && <span style={{ color: tk.text }}>{lead} </span>}
        <span style={{
          background: 'linear-gradient(120deg, #008996, #00c9b1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>{highlight}</span>
      </p>
    </motion.div>
  )
}
