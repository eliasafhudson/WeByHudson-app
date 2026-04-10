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
    <section style={bgImagen} className='h-screen w-full flex absolute items-center justify-center '>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-20'>

     {/* Contenido del Hero */}
           {/* Imagen */}
        <motion.div
          variants={slipeInFromSide('left', 0.5)}
          initial="initial"
          animate="animate"
          className='flex justify-center items-center'
        >
          <motion.img 
            animate={{ y: [0, -15, 0] }}
            transition={{
             duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
      }}
          src={Personaje} alt="Personaje" className='w-[85%] sm:w-[600px] h-auto ml-0 md:ml-10 align-center'/>
        </motion.div>

        {/* Texto */}
        <div>
          <motion.h1 
          variants={slipeUp(0.2)}
          initial="initial"
          animate="animate"
          className='md:text-6xl text-5xl text-shadow-lg text-center md:pt-20 md:pr-10 md:text-right  text-secondary '
          >Diseñamos y desarrollamos 
          páginas web profesionales</motion.h1>
            <motion.p 
            variants={slipeUp(0.3)}
            initial="initial"
            animate="animate"
            className='text-primary text-left sm:text-lg md:py-12 py-3 px-5 md:px-0  '>Que mejor forma de crecer en tu negocio que una página web 100% personalizada.
            </motion.p> 
        <motion.div 
        variants={slipeUp(0.5)}
          initial="initial"
          animate="animate"
        className='flex justify-center gap-4'>
         <a 
          
         href="" className='bg-primary sm:py-3 py-1 px-15 sm:text-sm  rounded-xl text-white shadow-xl  hover:bg-green transition-all duration-300'>Empieza hoy</a>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero