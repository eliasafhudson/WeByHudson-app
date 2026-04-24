import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

const services = [
  {
    name: 'Diseño web personalizado',
    description: 'Interfaces modernas, atractivas y enfocadas en convertir visitantes en clientes.',
    tag: 'UI / UX',
    icon: 'bi bi-palette-fill',
  },
  {
    name: 'Desarrollo React',
    description: 'Aplicaciones web rápidas, escalables y construidas con las últimas tecnologías.',
    tag: 'React · Tailwind',
    icon: 'bi bi-code-slash',
  },
  {
    name: 'Optimización SEO',
    description: 'Posiciona tu web en Google y atrae tráfico orgánico de calidad sin pagar anuncios.',
    tag: 'SEO · Performance',
    icon: 'bi bi-search',
  },
  {
    name: 'Tienda Online',
    description: 'E-commerce profesional con carrito, pagos seguros y gestión de productos.',
    tag: 'E-commerce',
    icon: 'bi bi-cart-fill',
  },
  {
    name: 'Landing Pages',
    description: 'Páginas de aterrizaje de alta conversión para tus campañas y productos.',
    tag: 'Mobile · Tablet',
    icon: 'bi bi-layers-fill',
  },
  {
    name: 'Mantenimiento',
    description: 'Soporte continuo, actualizaciones y mejoras para que tu web siempre funcione perfecto.',
    tag: 'Soporte 24/7',
    icon: 'bi bi-gear-fill',
  },
]

const WhyBox = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="my-10 container mx-auto px-4">
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ name, description, tag, icon }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-primary border border-white/5 rounded-xl p-6 flex flex-col gap-3 hover:border-four/30 hover:shadow-lg hover:shadow-four/5 transition-colors duration-300"
          >
            <i className={`${icon} text-lg flex items-center justify-center w-11 h-11 bg-secondary/20 text-four rounded-lg`} />
            <h3 className="text-lg font-bold text-green">{name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed flex-1">{description}</p>
            <span className="inline-flex items-center gap-1.5 text-four bg-secondary/20 text-xs px-2.5 py-1 rounded-2xl w-fit">
              {tag}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhyBox
