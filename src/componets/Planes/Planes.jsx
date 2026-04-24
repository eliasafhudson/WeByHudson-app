import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Básico',
    price: '$199',
    billing: 'pago único',
    description: 'Ideal para empezar con presencia online profesional.',
    features: [
      'Diseño responsive',
      'SEO básico',
      'Hasta 5 páginas',
      'Formulario de contacto',
    ],
    highlighted: false,
    cta: 'Empezar',
  },
  {
    name: 'Profesional',
    price: '$349',
    billing: 'pago único',
    description: 'Para negocios que quieren destacar y crecer online.',
    features: [
      'Todo lo del plan Básico',
      'Hasta 15 páginas',
      'Blog integrado',
      'Optimización de velocidad',
      'Soporte 30 días',
    ],
    highlighted: true,
    cta: 'Elegir plan',
  },
  {
    name: 'Premium',
    price: '$599',
    billing: 'pago único',
    description: 'Solución completa para proyectos ambiciosos.',
    features: [
      'Todo lo del plan Profesional',
      'Páginas ilimitadas',
      'Tienda online',
      'Integraciones personalizadas',
      'Soporte 90 días',
    ],
    highlighted: false,
    cta: 'Contactar',
  },
]

const Planes = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="precios" className="px-4 py-20">
      {/* Header */}
      <div ref={ref} className="container flex flex-col items-center text-center mx-auto mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 border border-secondary text-secondary bg-primary text-xs px-3 py-1 rounded-2xl w-fit mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-four" />
          PLANES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold mb-3 text-green"
        >
          Planes claros,{' '}
          <span className="text-four">sin sorpresas</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-gray-300 max-w-md"
        >
          Elige el plan que se adapta a tu negocio. Todos incluyen diseño responsive y SEO básico.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative flex flex-col rounded-2xl p-8 shadow-lg ${
                plan.highlighted
                  ? 'bg-four text-white scale-105 shadow-four/30 shadow-xl'
                  : 'bg-primary border border-white/5 text-white hover:border-four/30'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-four text-xs font-bold px-4 py-1 rounded-full shadow">
                  Más popular
                </span>
              )}

              <h3 className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.highlighted ? 'text-white/70' : 'text-four'}`}>
                {plan.name}
              </h3>

              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-bold text-green">{plan.price}</span>
                <span className={`text-sm mb-1 ${plan.highlighted ? 'text-white/60' : 'text-gray-400'}`}>
                  /{plan.billing}
                </span>
              </div>

              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/80' : 'text-gray-400'}`}>
                {plan.description}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 shrink-0 ${plan.highlighted ? 'text-white' : 'text-four'}`} />
                    <span className={plan.highlighted ? 'text-white/90' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer ${
                  plan.highlighted ? 'bg-white text-four' : 'bg-four text-white'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Planes
