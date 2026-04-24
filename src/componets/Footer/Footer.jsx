import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import Logo from '../../assets/Logot.png'
import { smoothScroll } from '../../utility/animation'

const footerLinks = {
  Servicios: [
    { label: 'Diseño Web',    href: '#servicios' },
    { label: 'E-commerce',    href: '#servicios' },
    { label: 'SEO',           href: '#servicios' },
    { label: 'Mantenimiento', href: '#servicios' },
  ],
  Empresa: [
    { label: 'Inicio',    href: '#' },
    { label: 'Nosotros',  href: '#nosotros' },
    { label: 'Precios',   href: '#precios' },
    { label: 'Proceso',   href: '#proceso' },
  ],
}

const social = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn',  href: 'https://linkedin.com'  },
  { label: 'GitHub',    href: 'https://github.com'    },
]

const Footer = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer ref={ref} className="bg-primary text-white pt-16 px-6 md:px-10 pb-8 font-mono border-t border-white/5">
      <div className="container mx-auto">

        {/* Grid principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12"
        >
          {/* Marca */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src={Logo} alt="Logo WeByHudson" className="w-10" />
              <span className="text-xl font-bold">
                <span className="text-white">We</span>
                <span className="text-gray-400">By</span>
                <span className="text-four">Hudson</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Creamos páginas web profesionales que generan resultados reales para tu negocio.
            </p>
          </div>

          {/* Links de secciones */}
          {Object.entries(footerLinks).map(([section, links], si) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + si * 0.08 }}
              className="flex flex-col gap-2"
            >
              <p className="text-white font-semibold mb-1">{section}</p>
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); smoothScroll(href) }}
                  className="text-gray-400 text-sm hover:text-four transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </motion.div>
          ))}

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-col gap-2"
          >
            <p className="text-white font-semibold mb-1">Contacto</p>
            <a
              href="mailto:hola@webyhudson.com"
              className="text-gray-400 text-sm hover:text-four transition-colors duration-200"
            >
              📧 hola@webyhudson.com
            </a>
            <a
              href="https://wa.me/50764478682"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 text-sm hover:text-four transition-colors duration-200"
            >
              WhatsApp
            </a>
            <span className="text-gray-400 text-sm">Panamá</span>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-500">
            © 2025 WeByHudson. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {social.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 text-sm border border-gray-700 px-3 py-1 rounded-md hover:border-four hover:text-four transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer
