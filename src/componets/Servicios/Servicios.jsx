import React from 'react'
import WhyBox from './WhyBox.jsx'

const Servicios = () => {
  return (
  <section className='py-11 w-full m-auto'>
    <div className='container flex flex-col items-center text-primary mx-auto'>
        <h1 className='inline block text-3xl font-bold 
        mb-3'>¿Por qué WebsByHudson?</h1>
        <p className='text-center'>
            No solo diseñamos paginas webs, creamos herramientas de crecimiento.
        </p>
    </div>
    {/* Cards */}
    <div>
        <WhyBox />
    </div>
  </section>
  )
}

export default Servicios
