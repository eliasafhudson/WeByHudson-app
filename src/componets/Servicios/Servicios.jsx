import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import WhyBox from './WhyBox.jsx'

const Servicios = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="px-4 py-20">
      <div ref={ref} className="container flex flex-col items-center text-center text-green mx-auto mb-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 border border-secondary text-secondary bg-primary text-xs px-3 py-1 rounded-2xl w-fit mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-four" />
          SERVICIOS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold mb-3 text-green"
        >
          Todo lo que necesita<span className="text-four"> tu negocio</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-gray-300 max-w-md"
        >
          Soluciones completas de desarrollo web para llevar tu negocio al siguiente nivel.
        </motion.p>
      </div>

      <WhyBox />
    </section>
  )
}

export default Servicios
