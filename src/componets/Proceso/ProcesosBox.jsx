import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { UserPlus, Brush, CodeXml, CheckCircle } from 'lucide-react'

const steps = [
  {
    id: '01',
    title: 'Reunión inicial',
    description: 'Entendemos tu negocio, objetivos y lo que necesitas en tu web.',
    icon: <UserPlus className="w-6 h-6 text-four" />,
  },
  {
    id: '02',
    title: 'Diseño',
    description: 'Creamos el diseño visual. Tú apruebas antes de programar.',
    icon: <Brush className="w-6 h-6 text-four" />,
  },
  {
    id: '03',
    title: 'Desarrollo',
    description: 'Programamos tu web con las mejores tecnologías del mercado.',
    icon: <CodeXml className="w-6 h-6 text-four" />,
  },
  {
    id: '04',
    title: 'Entrega',
    description: 'Lanzamos tu web y te entregamos todo listo para usar.',
    icon: <CheckCircle className="w-6 h-6 text-four" />,
  },
]

const ProcesosBox = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

          {/* Línea conectora */}
          <div className="hidden md:block absolute top-8 left-[12.5%] w-3/4 h-px bg-four/20 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              className="relative z-10 flex flex-col items-center text-center p-6"
            >
              {/* Círculo con icono */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center w-16 h-16 bg-[#0d1117] border-2 border-four rounded-full shadow-lg shadow-four/20 mb-6"
              >
                {step.icon}
              </motion.div>

              <span className="text-xs font-bold text-four uppercase tracking-widest mb-2">
                Paso {step.id}
              </span>
              <h3 className="text-lg font-semibold text-green mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcesosBox
