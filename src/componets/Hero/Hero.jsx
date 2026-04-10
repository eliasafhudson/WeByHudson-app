import React from 'react'
import Personaje from '../../assets/personaje.png'
import Fondo from '../../assets/Baner.png'
import {motion} from 'framer-motion'
import { slipeUp } from '../../utility/animation'

    
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
        <div>
          <img src={Personaje} alt="Personaje" className='w-[600px] h-auto ml-0 md:ml-10 '/>
        </div>

        {/* Texto */}
        <div>
          <h1 className='text-6xl  text-shadow-lg text-center md:pt-20 pb-12 md:pr-10 md:text-right  text-secondary '
          >Diseñamos y desarrollamos 
          páginas web profesionales</h1>
            <p className='text-primary text-left text-lg  px-5 md:px-0'>Que mejor forma de crecer en tu negocio que una página web 100% personalizada.</p> 
        <div className='flex justify-center pt-10'>
         <a href="" className='bg-primary py-3 px-15 rounded-xl text-white shadow-xl  hover:bg-green transition-all duration-300'>Empieza hoy</a>
        </div>
        </div>
      </div>
      <p></p>
    </section>
  )
}

export default Hero