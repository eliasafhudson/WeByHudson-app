export const slipeUp = (delay) => {
    return {
        initial: {
            y: -50,
            opacity:0
        },
        animate: {
            y:0,
            opacity:1,
            transition: {
                duration: 0.5,
                delay
            }
        }
    }   
}   

export const slipeInFromSide = (direction = 'left', delay) => {
    return {
        initial: {
            x: direction === 'left' ? -100 : 100,
            opacity:0
        },
        animate: {
            x:0,
            opacity:1,
            transition: {
                duration: 0.5,
                delay
            }
        }
    }   
}   

  // Smooth Scroll for all anchor links 
export const smoothScroll = (targetId) => {
     const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
}