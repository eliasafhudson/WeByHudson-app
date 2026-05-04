import CanvasBackground from '@/components/CanvasBackground'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Servicios from '@/components/Servicios/Servicios'
import Procesos from '@/components/Proceso/Procesos'
import Planes from '@/components/Planes/Planes'
import Faqs from '@/components/Faqs/Faqs'
import Form from '@/components/Form/Form'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <CanvasBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Servicios />
        <Procesos />
        <Planes />
        <Faqs />
        <Form />
        <Footer />
      </div>
    </div>
  )
}
