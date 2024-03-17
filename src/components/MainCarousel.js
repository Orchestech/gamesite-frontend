import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import * as Images from './image';
import { useState, useEffect } from 'react';



function Courusel () {

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
      });
    
      useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          });
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const isMobile = dimensions.width <= 768;

    return (
    <CarouselProvider
            // Set initial slide dimensions
            naturalSlideWidth={isMobile ? 10 : 8}
            naturalSlideHeight={isMobile ? 10 : 4}
            className="carousel-container" // Add a class for styling
            totalSlides={6} // The number of slides in the carousel

            // Add CSS media queries to adjust slide dimensions for different screen sizes
        >
        <Slider>
            <Slide index={0} className='about-game__item about-game__item_first'>
                <img src={Images.Spirit1} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
            </Slide>
            <Slide index={1} className='about-game__item'>
                <img src={Images.Spirit2} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
            </Slide>
            <Slide index={2} className='about-game__item'>
                <img src={Images.Spirit3} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
            </Slide>
            <Slide index={3} className='about-game__item about-game__item_first'>
                <img src={Images.Spirit4} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
            </Slide>
            <Slide index={4} className='about-game__item'>
                <img src={Images.Spirit5} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
            </Slide>
            <Slide index={5} className='about-game__item'>
                <img src={Images.Spirit6} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
            </Slide>
        </Slider>
        {!isMobile && (
            <>
                <ButtonBack className="carousel-button">
                    Предыдущий
                </ButtonBack>
                <ButtonNext className="carousel-button">
                    Следующий
                </ButtonNext>
            </>
        )}
      </CarouselProvider>
    );
}export default Courusel;