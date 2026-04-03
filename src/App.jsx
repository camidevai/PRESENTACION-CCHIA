import Header from './components/Header'
import Hero from './components/Hero'
import Definicion from './components/Definicion'
import Vision from './components/Vision'
import EjesEstrategicos from './components/EjesEstrategicos'
import Valores from './components/Valores'
import VocesDeLaCamara from './components/VocesDeLaCamara'
import QRSection from './components/QRSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. Hook de impacto */}
        <Hero />
        {/* 2. Definición y Propósito (mapa conceptual: nodo 1) */}
        <Definicion />
        {/* 3. Visión Estratégica (mapa conceptual: nodo 2) */}
        <Vision />
        {/* 4. Ejes Estratégicos (mapa conceptual: nodo 3, 4 ejes) */}
        <EjesEstrategicos />
        {/* 5. Valores Fundamentales (mapa conceptual: nodo 4) */}
        <Valores />
        {/* 6. Voces de la Cámara — discurso institucional */}
        <VocesDeLaCamara />
        {/* 7. CTA + QR */}
        <QRSection />
      </main>
      <Footer />
    </div>
  )
}
