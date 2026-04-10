import React,{useEffect, useState} from 'react'
import Logo from '../../assets/logo h.png'

const navbarlinks = [
  {id: 1, name: 'Inicio',Link: '/'},
  {id: 2, name: 'Precios',Link: '#'},
  {id: 3, name: 'FaQs',Link: '#'},
  {id: 4, name: 'Contactos',Link: '#'},
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
  <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-400 ${
      scrolled 
        ? 'bg-primary shadow-sm' 
        : 'bg-opacity-30 backdrop-blur-xl'
    }`}>      <div className='flex relative justify-between items-center md:px-15 md:py-6 py-4 px-3 md:bg-transparent bg-primary'> 

        {/* Logo navbar */}
        <div>
            <img src={Logo} alt="Logo" className='w-[200px] px-3 '/>
          </div>

        {/* Icono de menú para dispositivos móviles */}
        <button onClick={toggleMenu} className='md:hidden text-white text-2xl focus:outline-none'>
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
        <div className='hidden md:block'>
          <ul className='flex sm:space-x-15 space-x-2'>
            {navbarlinks.map((link) => (
              <li key={link.id} >
                <a className='text-secondary md:text-lg text-sm hover:text-secondary 
                py-9 hover:border-b-3  hover:border-secondary transition-all duration-100' 
                href={link.Link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
          
        {/* Botón de cotización para escritorio */}
        <div className='hidden md:block'>
          <ul className='flex space-x-2'> 
            <li className='bg-green px-4 py-2 md:mx-2 mx-10 rounded-lg hover:bg-emerald-900 transition-colors duration-300'>
              <a href="https://wa.me/50764478682" target="_blank" rel="noopener noreferrer" className='text-white text-center md:text-lg text-sm hover:text-secondary transition-colors duration-300'>
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