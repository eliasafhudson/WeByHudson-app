import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Logo from '../../assets/Logot.png'
import { smoothScroll } from '../../utility/animation'

const navbarLinks = [
  { id: 1, name: 'Servicios', href: '#servicios' },
  { id: 2, name: 'Precios',   href: '#precios'   },
  { id: 3, name: 'FAQs',   href: '#faqs'   },
  { id: 4, name: 'Contacto',  href: '#contacto'  },
]

const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-10 py-4 md:py-5">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo WeByHudson" className="w-10" />
          <span className="text-xl font-bold">
            <span className="text-white">We</span>
            <span className="text-gray-400">By</span>
            <span className="text-four">Hudson</span>
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(link.href);
                }}
                className="text-gray-300 hover:text-four text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-four transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/50764478682"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-four/50 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-four/20 hover:border-four transition-all duration-300"
        >
          Cotiza tu web
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green p-1 focus:outline-none"
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}

        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-primary/95 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navbarLinks.map((link) => (
                <li key={link.id}>
                  <a
                    
                    onClick={(e) => {
                      e.preventDefault();
                      // Ensure the element exists before scrolling
                      const target = document.querySelector(link.href);
                      if (target) {
                        smoothScroll(link.href);
                      } else {
                        // Fallback: native scroll to anchor
                        document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                      }
                      setIsOpen(false);
                    }}href={link.href}
                    className="block py-3 text-gray-300 hover:text-four border-b border-white/5 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="https://wa.me/50764478682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-four/50 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-four/20 transition-all duration-300"
                >
                  Cotiza tu web
                </a>
              </li>
            </ul>
          </motion.div>
        )}
    </motion.nav>
  )
}

export default Navbar
