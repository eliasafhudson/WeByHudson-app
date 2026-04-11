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
    <section style={bgImagen}  className='w-full pt-25' >
      <div className='container grid grid-cols-1 
      sm:grid-cols-2 items-center space-y-2 py-12 
      sm:py-0 sm:h-[600px] mx-auto'>
          {/*contenedor de la imagen */}
        <motion.div
          variants={slipeInFromSide('left', 0.5)}
          initial="initial"
          animate="animate"
          className='flex justify-center items-center'>
            <motion.img 
            animate={{ y: [0, -15, 0] }}
            transition={{
             duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
      }} 
            src={Personaje} alt="Personaje" 
            className='w-full md:max-w-lg mx-auto' />
        </motion.div>
        <div>
          <div className=' text-center sm:text-right mx-3 space-y-2 grid justify-items-center 
          sm:justify-items-start'>
            <motion.p 
          variants={slipeUp(0.4)}
          initial="initial"
          animate="animate" 
            className='uppercase 
            text-primary w-full'>Bienvenidos a Webyhudson</motion.p>
            <motion.p 
          variants={slipeUp(0.3)}
          initial="initial"
          animate="animate" 
            className='text-4xl md:text-6xl font-bold text-secondary/95'>Diseñamos y 
            desarrollamos páginas web profesionales</motion.p>
            <motion.p 
          variants={slipeUp(0.2)}
          initial="initial"
          animate="animate" 
            className='text-lg md:text-xl text-gray-600'>
              Que mejor forma de crecer en tu 
              negocio que una pagiana web 100% personalizada
            </motion.p>
            <motion.a
        variants={slipeInFromSide('right', 0.6)}
          initial="initial"
          animate="animate" href="#" 
            className='inline-block primary-btn !px-6 mx-auto'>
              Comenzemos
            </motion.a>
          </div>
        </div> 
      
      </div>
    </section>
  )
}

export default Hero