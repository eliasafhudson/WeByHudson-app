import { motion } from 'framer-motion'
import { slipeUp, slipeInFromSide } from '../../utility/animation'
import { smoothScroll } from '../../utility/animation'

function Hero() {
  return (
    <section className="w-full pt-20 bg-primary">
      <div className="container grid grid-cols-1 sm:grid-cols-2 items-center gap-12 py-16 sm:py-0 sm:h-150 mx-auto px-4">

        {/* Texto */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
          <motion.p
            variants={slipeUp(0.2)}
            initial="initial"
            animate="animate"
            className="inline-flex items-center gap-2 bg-secondary/5 border border-secondary text-secondary text-sm px-4 py-2 rounded-full w-fit"
          >
            Bienvenidos a WeByHudson
          </motion.p>

          <motion.h1
            variants={slipeUp(0.35)}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-5xl font-bold text-green leading-tight"
          >
            Diseñamos y desarrollamos{' '}
            <span className="text-four">páginas web profesionales</span>
          </motion.h1>

          <motion.p
            variants={slipeUp(0.5)}
            initial="initial"
            animate="animate"
            className="text-sm md:text-lg text-gray-400 max-w-md"
          >
            La mejor forma de crecer en tu negocio es con una página web
            100% personalizada.
          </motion.p>

          <motion.div
            variants={slipeInFromSide('left', 0.65)}
            initial="initial"
            animate="animate"
            className="flex gap-4 pt-2"
          >
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); smoothScroll('#contacto') }}
              className="primary-btn px-6!"
            >
              Comenzamos
            </a>
            <a
              href="#precios"
              onClick={(e) => { e.preventDefault(); smoothScroll('#precios') }}
              className="primary-btn px-6! text-four font-bold"
            >
              Ver planes
            </a>
          </motion.div>
        </div>

        {/* Tarjeta de código */}
        <motion.div
          variants={slipeInFromSide('right', 0.5)}
          initial="initial"
          animate="animate"
          className="flex justify-center"
        >
          <div className="bg-primary border border-[#30363D] rounded-xl p-5 w-72 shadow-xl shadow-four/10">
            {/* Botones de ventana */}
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>

            {/* Código */}
            <div className="font-mono text-xs leading-loose">
              <p className="text-[#8B949E]">{'// WeByHudson'}</p>
              <p>
                <span className="text-[#79C0FF]">const </span>
                <span className="text-green">web </span>
                <span className="text-[#8B949E]">= </span>
                <span className="text-[#FFA657]">{'{'}</span>
              </p>
              <p className="pl-4">
                <span className="text-four">diseño</span>
                <span className="text-[#8B949E]">: </span>
                <span className="text-green">"moderno"</span>
                <span className="text-[#8B949E]">,</span>
              </p>
              <p className="pl-4">
                <span className="text-four">velocidad</span>
                <span className="text-[#8B949E]">: </span>
                <span className="text-green">"100/100"</span>
                <span className="text-[#8B949E]">,</span>
              </p>
              <p className="pl-4">
                <span className="text-four">seo</span>
                <span className="text-[#8B949E]">: </span>
                <span className="text-green">true</span>
                <span className="text-[#8B949E]">,</span>
              </p>
              <p className="pl-4">
                <span className="text-four">resultados</span>
                <span className="text-[#8B949E]">: </span>
                <span className="text-green">"garantizados"</span>
              </p>
              <p>
                <span className="text-[#FFA657]">{'}'}</span>
                <span className="text-[#8B949E]">;</span>
                <span className="inline-block w-0.5 h-3.5 bg-secondary ml-0.5 align-middle animate-pulse" />
              </p>
            </div>

            {/* Stats debajo del código */}
            <div className="mt-5 pt-4 border-t border-[#30363D] grid grid-cols-3 gap-2 text-center">
              {[
                { value: '+50', label: 'Proyectos' },
                { value: '100%', label: 'Responsive' },
                { value: '5★', label: 'Valoración' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-four font-bold text-sm">{value}</p>
                  <p className="text-[#8B949E] text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
