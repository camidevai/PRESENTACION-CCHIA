import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo con área de autonomía 3X = padding mínimo 24px cada lado */}
        <div className="px-6">
          <img
            src="/logo-cchia.png"
            alt="CCHIA - Cámara Chilena de Inteligencia Artificial"
            style={{ minWidth: '113px', height: 'auto', maxHeight: '56px' }}
            className="object-contain"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Propósito', href: '#mision' },
            { label: 'Visión', href: '#vision' },
            { label: 'Ejes', href: '#ejes' },
            { label: 'Valores', href: '#valores' },
            { label: 'Voces', href: '#voces' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-cchia-blue transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 bg-cchia-blue text-white text-sm font-semibold rounded-full hover:bg-cchia-teal transition-colors"
          >
            Únete
          </a>
        </nav>
      </div>
    </header>
  )
}
