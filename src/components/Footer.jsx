export default function Footer() {
  return (
    <footer id="contacto" className="bg-cchia-blue border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo con área de autonomía 3X */}
          <div className="px-6">
            <img
              src="/logo-cchia.png"
              alt="CCHIA"
              style={{ minWidth: '113px', maxWidth: '180px', height: 'auto' }}
              className="object-contain brightness-0 invert"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Cámara Chilena de Inteligencia Artificial
            </p>
            <p className="text-white/30 text-xs mt-1">
              Todos los derechos reservados · Santiago, Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
