import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react'
import NosotrosImg from '../../assets/nosotros.avif'

const stats = [
  { value: '+50', label: 'Proyectos entregados' },
  { value: '100%', label: 'Clientes satisfechos' },
  { value: '3+', label: 'Años de experiencia' },
]

const Form = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simula envío — reemplaza con tu lógica real (EmailJS, API, etc.)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contacto" className="px-4 py-20">
      <div ref={ref} className="container mx-auto max-w-6xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Quiénes somos ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <p className="inline-flex items-center gap-1.5 border border-secondary text-secondary bg-primary text-xs px-3 py-1 rounded-2xl w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-four" />
              QUIÉNES SOMOS
            </p>

            <h2 className="text-4xl font-bold text-green leading-tight">
              Somos <span className="text-four">WeByHudson</span>
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
                Somos un estudio creativo especializado en transformar ideas en experiencias digitales. 
                Nos apasiona ayudar a emprendedores y empresas a destacar en el mundo online mediante 
                soluciones web modernas, rápidas y seguras.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Trabajamos de forma cercana con cada cliente, entendiendo su negocio antes
              de escribir una sola línea de código. Transparencia, calidad y resultados
              son nuestra promesa.
            </p>

            {/* Imagen */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={NosotrosImg}
                alt="Equipo WeByHudson"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="bg-primary border border-white/8 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-four">{value}</p>
                  <p className="text-xs text-gray-400 mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Formulario ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="bg-primary border border-white/8 rounded-2xl p-8 shadow-xl shadow-black/20"
          >
            <h3 className="text-2xl font-bold text-green mb-2">Hablemos de tu proyecto</h3>
            <p className="text-sm text-gray-400 mb-8">
              Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-four/20 border border-four flex items-center justify-center">
                  <Send className="w-6 h-6 text-four" />
                </div>
                <h4 className="text-lg font-semibold text-green">¡Mensaje enviado!</h4>
                <p className="text-sm text-gray-400">Te contactaremos pronto.</p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-four hover:underline mt-2"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Nombre */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full bg-[#161B22] border border-white/10 text-green text-sm rounded-xl pl-10 pr-4 py-3 placeholder:text-gray-600 focus:outline-none focus:border-four/60 transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full bg-[#161B22] border border-white/10 text-green text-sm rounded-xl pl-10 pr-4 py-3 placeholder:text-gray-600 focus:outline-none focus:border-four/60 transition-colors duration-200"
                  />
                </div>

                {/* Teléfono */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Tu teléfono (opcional)"
                    className="w-full bg-[#161B22] border border-white/10 text-green text-sm rounded-xl pl-10 pr-4 py-3 placeholder:text-gray-600 focus:outline-none focus:border-four/60 transition-colors duration-200"
                  />
                </div>

                {/* Mensaje */}
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                    rows={4}
                    className="w-full bg-[#161B22] border border-white/10 text-green text-sm rounded-xl pl-10 pr-4 py-3 placeholder:text-gray-600 focus:outline-none focus:border-four/60 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full bg-four text-white font-semibold text-sm py-3 rounded-xl hover:bg-four/90 transition-all duration-300 disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  También puedes escribirnos directo por{' '}
                  <a
                    href="https://wa.me/50764478682"
                    target="_blank"
                    rel="noreferrer"
                    className="text-four hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Form
