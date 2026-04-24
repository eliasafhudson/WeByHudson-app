import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import ProcesosBox from './ProcesosBox'

const Procesos = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proceso">
      <div ref={ref} className="flex flex-col items-center text-center bg-primary py-12 px-4 mx-auto border-b  border-four">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-secondary text-secondary text-xs px-4 py-1 rounded-full w-fit mb-6"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-four" />
          PROCESO
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-3 text-green"
        >
          Así trabajamos contigo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-gray-400 max-w-md"
        >
          Un proceso claro y transparente de principio a fin. Sin sorpresas.
        </motion.p>
      </div>

      <div className="bg-[#0d1117] py-10">
        <ProcesosBox />
      </div>
    </section>
  )
}

export default Procesos
