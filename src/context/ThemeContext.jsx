import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

// Tokens por tema
export const TOKENS = {
  dark: {
    bg:          '#00101f',
    bgSidebar:   'rgba(0,12,26,0.99)',
    bgCard:      'rgba(255,255,255,0.04)',
    border:      'rgba(255,255,255,0.06)',
    borderCard:  'rgba(255,255,255,0.08)',
    text:        '#ffffff',
    textMuted:   'rgba(255,255,255,0.40)',
    textFaint:   'rgba(255,255,255,0.22)',
    divider:     'rgba(255,255,255,0.05)',
    navActive:   'rgba(0,137,150,0.15)',
    navBorder:   'rgba(0,137,150,0.25)',
    watermark:   0.2,
    logoFilter:  'brightness(0) invert(1)',
  },
  light: {
    bg:          '#EEF6F8',
    bgSidebar:   '#daeef2',
    bgCard:      '#ffffff',
    border:      'rgba(0,55,100,0.07)',
    borderCard:  'rgba(0,55,100,0.12)',
    text:        '#003764',
    textMuted:   '#2a5e88',
    textFaint:   '#4a7a9b',
    divider:     'rgba(0,55,100,0.10)',
    navActive:   'rgba(0,137,150,0.12)',
    navBorder:   'rgba(0,137,150,0.30)',
    watermark:   0.07,
    logoFilter:  'none',
  },
}
