import React,{useEffect, useState} from 'react'
import Logo from '../../assets/logot.png'
import {smoothScroll} from '../../utility/animation'

const navbarlinks = [
  {id: 1, name: 'Servicios',Link: '#servicios'},
  {id: 2, name: 'Precios',Link: '#precios'},
  {id: 3, name: 'FaQs',Link: '#faqs'},
  {id: 4, name: 'Contactos',Link: '#contactos'},
]

const Navbar = () => {
      const[isOpem,SetIsOpen] = useState(false);
      const[scrolled,setScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
           setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
      }, []);

      const toggleMenu = () => {
        SetIsOpen(!isOpem);
      }

  return (
  <nav className={`fixed top-0 left-0 w-full z-10 transition-colors duration-400 ${
      scrolled 
        ? 'bg-primary shadow-lg' 
        : 'bg-five backdrop-blur-xl'
    }`}>      
    <div className='flex relative justify-between items-center md:px-10 md:py-6 py-4 px-3 md:bg-transparent bg-primary '> 

        {/* Logo navbar */}
        <div className='mr-auto'>
          <a href="/" className=' lg:flex items-center text-center space-x-2'>
            <img src={Logo} alt="Logo" className='w-[150px] px-3 mx-auto '/>
            <h1 className='text-1xl sm:text-3xl font-bold px-auto 
             text-secondary '> 
             <span className="text-white">We</span> 
             <span className="text-gray-400">By</span> 
            <span className="text-four">Hudson</span></h1></a>
          </div>

        {/* Icono de menú para dispositivos móviles */}
        <button onClick={toggleMenu} className='md:hidden text-green text-2xl focus:outline-none'>
           <svg className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                strokeWidth='0 0 24 24'
            >
              {isOpem ? ( <path 
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />  ): (
                <path 
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" /> )}
          </svg>
        </button>

        {/* Links navbar desktop */}
        <div className='hidden md:block px-auto mx-auto'>
          <ul className='flex lg:space-x-10 space-x-7 '>
            {navbarlinks.map((link) => (
              <li key={link.id} >
                <a
                  onClick={() => smoothScroll(link.Link.slice(1))}
                className='text-green lg:text-lg text-4sm hover:text-secondary 
                py-9 hover:border-b-3  hover:border-secondary transition-all duration-100' 
                href={link.Link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
          
        {/* Botón de cotización para escritorio */}
        <div className='hidden md:block mx-auto'>
          <ul className='flex space-x-2'> 
            <li className='px-4 py-2 md:mx-2 mx-10 rounded-lg border
             border-four/40 hover:bg-four/20 text-white transition-colors duration-300'>
              <a href="https://wa.me/50764478682" target="_blank" rel="noopener noreferrer"
               className=' text-center lg:text-lg text-sm '>
                Cotiza Tu Web
              </a>
            </li>
          </ul>
        </div>

        
        </div>
        <div className={`md:hidden absolute w-full bg-primary/90 ${isOpem ? "opacity-100 visible" : "opacity-0 invisible" } transition-opacity duration-300`}>
          {/* Menú desplegable para dispositivos móviles */}
          <ul className='flex flex-col px-4 py-2 '>
            {navbarlinks.map((link) => (
              <li key={link.id} className='py-2 text-center border-b border-secondary/20' >
                <a className='text-white hover:text-secondary transition-colors duration-300'
                href={link.Link} onClick={()=>sertIsOpen(false)}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  )
}

export default Navbar