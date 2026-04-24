import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Cuánto tiempo tarda en estar lista mi web?',
    a: 'Dependiendo del plan, entre 7 y 21 días hábiles. Siempre te mantenemos informado del progreso en cada etapa.',
  },
  {
    q: '¿Necesito saber de tecnología?',
    a: 'Para nada. Nosotros nos encargamos de todo. Solo necesitas tener claro qué quieres para tu negocio.',
  },
  {
    q: '¿Qué pasa si no me gusta el diseño?',
    a: 'Incluimos hasta 3 rondas de revisiones sin costo adicional hasta que estés 100% satisfecho con el resultado.',
  },
  {
    q: '¿El precio incluye hosting y dominio?',
    a: 'El hosting y dominio son costos aparte, pero te asesoramos en las mejores opciones según tu presupuesto y necesidades.',
  },
  {
    q: '¿Pueden hacer cambios después de entregar?',
    a: 'Sí, ofrecemos planes de mantenimiento mensual o puedes contratarnos por cambios puntuales cuando los necesites.',
  },
  {
    q: '¿Mi web va a funcionar en celulares?',
    a: 'Absolutamente. Todas nuestras webs son 100% responsive y están optimizadas para móviles, tablets y escritorio.',
  },
]

const FaqItem = ({ q, a, index, inView }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
        open ? 'border-four/50 bg-primary' : 'border-white/8 bg-primary hover:border-white/20'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer"
      >
        <span className={`text-sm md:text-base font-medium transition-colors duration-200 ${open ? 'text-four' : 'text-green'}`}>
          {q}
        </span>
        <span className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
          open ? 'border-four bg-four/10 text-four rotate-0' : 'border-white/20 text-gray-400'
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Faqs = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faqs" className="px-4 py-20 bg-five">
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <div ref={ref} className="flex flex-col items-center text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 border border-secondary text-secondary bg-primary text-xs px-3 py-1 rounded-2xl w-fit mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-four" />
            FAQS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-3 text-green"
          >
            ¿Tienes <span className="text-four">dudas?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-gray-300 max-w-md"
          >
            Estas son las preguntas que más nos hacen. Si la tuya no está aquí, escríbenos.
          </motion.p>
        </div>

        {/* Acordeón */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-400 mb-4">¿No encontraste lo que buscabas?</p>
          <a
            href="https://wa.me/50764478682"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-four/50 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-four/20 hover:border-four transition-all duration-300"
          >
            Escríbenos por WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Faqs
