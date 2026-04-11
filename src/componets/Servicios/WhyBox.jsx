import { image } from 'motion/react-client'
import React from 'react'
import velocidadImg from '../../assets/velocidad.jpg'

const Why =[
    {
    name: "Velocidad Optimizada",
    description: 
    "Webs que cargan en segundos. No pierdas clientes por lentitud.",
    image: velocidadImg,
    icon: "bi bi-speedometer2",
    bgcolor: "bg-green"
    },
     {
    name: "100% Responsive",
    description: 
    "Tu sitio se verá perfecto en celulares, tablets y computadoras.",
    image: velocidadImg,
    icon: "bi bi-tablet",
    bgcolor: "bg-green"
    },
     {
    name: "SEO Ready",
    description: 
    "Estructura optimizada para que Google te encuentre fácilmente.",
    image: velocidadImg,
    icon: "bi bi-search",
    bgcolor: "bg-green"
    },
     {
    name: "Diseño Único",
    description: 
    "Nada de plantillas aburridas. Diseños personalizados para tu marca.",
    image: velocidadImg,
    icon: "bi bi-palette-fill",
    bgcolor: "bg-green"
    }
]

const WhyBox = () => {
  return (
    <section id='why' className='my-10 container mx-auto'>
        <div className='grid grid-cols-1
        sm:grid-cols-2 gap-6 '>
            {Why.map(({name, description, 
            image, icon, bgcolor})=>(
                <div
                key={name}
                style={{ backgroundImage: `url(${image})` }}
                className={`${bgcolor} rounded-xl
                text-white bg-cover bg-center
                bg-no-repeat bg-blend-overlay`}
                >
                 <div className='p-3 md:p-5 
                 backdrop-blur-sm space-y-3 rounded-xl '>
                    <i className={`${icon} text-4xl`}></i>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p className='text-lg'>{description}</p>
                 </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default WhyBox
