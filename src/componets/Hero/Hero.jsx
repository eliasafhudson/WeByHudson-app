import React from 'react'
import Personaje from '../../assets/personaje.png'
import Fondo from '../../assets/Baner.png'
import {motion} from 'framer-motion'
import { slipeUp, slipeInFromSide} from '../../utility/animation'

    
function Hero() {

const bgImagen ={
      backgroundImage: `url(${Fondo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      position: 'relative',
    }


  return (
    <section className='w-full pt-25 bg-primary' >
      <div className='container grid grid-cols-1 
      sm:grid-cols-2 items-center space-y-2 py-12 
      sm:py-0 sm:h-[600px] mx-auto'>

        
        <div>
          <div className=' text-center sm:text-left mx-3 space-y-2 grid justify-items-center 
          sm:justify-items-start'>
            <motion.p 
          variants={slipeUp(0.4)}
          initial="initial"
          animate="animate" 
            className='inline-flex items-center gap-2 
            bg-secondary/5
            border border-secondary  text-secondary text-sm px-4 py-2 rounded-full w-fit mb-6 
            '>Bienvenidos a WeByHudson</motion.p>
            <motion.p 
          variants={slipeUp(0.3)}
          initial="initial"
          animate="animate" 
            className='text-4xl md:text-6xl font-bold text-green'>Diseñamos y 
            desarrollamos
            <span className="text-four"> páginas web profesionales </span></motion.p>
            <motion.p 
          variants={slipeUp(0.2)}
          initial="initial"
          animate="animate" 
            className='text-lg md:text-xl text-gray-400'>
              Que mejor forma de crecer en tu 
              negocio que una pagiana web 100% personalizada
            </motion.p>
            <motion.p 
            variants={slipeInFromSide('left', 0.6)}
          initial="initial"
          animate="animate" href="#"
            className='inline-block primary-btn !px-6 mx-auto'>
            <a
            className='inline-block !px-6 mx-auto'>
              Comenzemos
            </a></motion.p>
          </div>
        </div>    
              
        {/*contenedor de la imagen */} 
      <motion.div
          variants={slipeInFromSide('left', 0.5)}
          initial="initial"
          animate="animate"
          className='bg-five text-white text-sm 
          font-semibold px-6 py-3 rounded-lg '>
            {/* Tarjeta de código */}
          <div className="bg-[#0D1117] border border-[#30363D] rounded-xl p-5 w-72">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="font-mono text-xs leading-loose">
              <p className="text-[#8B949E]">{"// WeByHudson"}</p>
              <p><span className="text-[#79C0FF]">const </span><span className="text-[#E6EDF3]">web </span><span className="text-[#8B949E]">= </span><span className="text-[#FFA657]">{"{"}</span></p>
              <p className="pl-4"><span className="text-[#3FB950]">diseño</span><span className="text-[#8B949E]">: </span><span className="text-[#E6EDF3]">"moderno"</span><span className="text-[#8B949E]">,</span></p>
              <p className="pl-4"><span className="text-[#3FB950]">velocidad</span><span className="text-[#8B949E]">: </span><span className="text-[#E6EDF3]">"100/100"</span><span className="text-[#8B949E]">,</span></p>
              <p className="pl-4"><span className="text-[#3FB950]">seo</span><span className="text-[#8B949E]">: </span><span className="text-[#E6EDF3]">true</span><span className="text-[#8B949E]">,</span></p>
              <p className="pl-4"><span className="text-[#3FB950]">resultados</span><span className="text-[#8B949E]">: </span><span className="text-[#E6EDF3]">"garantizados"</span></p>
              <p>
                <span className="text-[#FFA657]">{"}"}</span>
                <span className="text-[#8B949E]">;</span>
                 <span className={`inline-block w-0.5 h-3.5 bg-[#2EA043] ml-0.5 align-middle transition-opacity animate-pulse`} />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero