import { image } from 'motion/react-client'
import React from 'react'
import velocidadImg from '../../assets/velocidad.jpg'

const Why =[
    {
    name: "Diseño web personalizado",
    description: 
    "Interfaces modernas, atractivas y enfocadas en convertir visitantes en clientes.",
    image: velocidadImg,
    icon: "bi bi-palette-fill",
    bgcolor: "bg-primary"
    },{
    name: "Desarrollo React",
    description: 
    "Aplicaciones web rápidas, escalables y construidas con las últimas tecnologías.",
    image: velocidadImg,
    icon: "bi bi-code-slash",
    bgcolor: "bg-primary"
    },
     {
    name: "Optimización SEO",
    description: 
    "Posiciona tu web en Google y atrae tráfico orgánico de calidad sin pagar anuncios.",
    image: velocidadImg,
    icon: "bi bi-search",
    bgcolor: "bg-primary"
    },
     {
    name: "Tienda Online",
    description: 
    "E-commerce profesional con carrito, pagos seguros y gestión de productos.",
    image: velocidadImg,
    icon: "bi bi-cart",
    bgcolor: "bg-primary"
    },
    {
    name: "Landing Pages",
    description: 
    "Páginas de aterrizaje de alta conversión para tus campañas y productos.",
    image: velocidadImg,
    icon: "bi bi-layers-fill",
    bgcolor: "bg-primary"
    },  
    {
    name: "Mantenimiento",
    description: 
    "Soporte continuo, actualizaciones y mejoras para que tu web siempre funcione perfecto.",
    image: velocidadImg,
    icon: "bi bi-gear-fill",
    bgcolor: "bg-primary"
    },
]

const WhyBox = () => {
  return (
    <section id='why' className='my-10 container mx-auto'>
        <div className='grid grid-cols-1
        sm:grid-cols-3 gap-6 '>
            {Why.map(({name, description, 
            image, icon, bgcolor})=>(
                <div
                key={name} 
                className={`${bgcolor} rounded-xl
                text-green/90 transition-all 
                hover:inset-shadow-sm hover: inset-shadow-secondary duration-300`}
                >
                 <div className='p-3 md:p-5 
                  space-y-3 rounded-xl h-full flex flex-col '>
                    <i className={`${icon} text-3xl text-center px-4 py-2 border border-green/90 bg-secondary/50 mr-auto rounded-lg`}></i>
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
