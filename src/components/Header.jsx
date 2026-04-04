import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Propósito', href: '#mision' },
  { label: 'Visión', href: '#vision' },
  { label: 'Ejes', href: '#ejes' },
  { label: 'Valores', href: '#valores' },
  { label: 'Voces', href: '#voces' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: 'rgba(0,55,100,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo — área autonomía 3X → padding lateral 24px */}
        <div style={{ padding: '0 24px' }}>
          <img
            src="/logo-cchia.png"
            alt="CCHIA"
            style={{ height: '40px', width: 'auto', minWidth: '113px', filter: 'brightness(0) invert(1)' }}
            className="object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold text-white/50 hover:text-white transition-colors tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 bg-cchia-teal text-white text-xs font-bold rounded-xl hover:opacity-90 transition-opacity tracking-wide uppercase"
          >
            Únete
          </a>
        </nav>
      </div>
    </header>
  )
}
