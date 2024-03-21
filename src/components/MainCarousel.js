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
            naturalSlideHeight={isMobile ? 10 : 3.2}
            className="carousel-container" // Add a class for styling
            totalSlides={6} // The number of slides in the carousel

            // Add CSS media queries to adjust slide dimensions for different screen sizes
        >
        <Slider>
            <Slide index={0} className='about-game__item about-game__item_first'>
                <div className='slide'>
                    <img src={Images.Spirit1} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
                    <h3>Призрак</h3>
                    <p> Это твой самый распространенный противник</p>
                    <p> Никаких особенностей, они берут количеством</p>
                </div>
            </Slide>
            <Slide index={1} className='about-game__item'>
                <div className='slide'>
                    <img src={Images.Spirit2} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
                    <h3>Бешеный маньяк</h3>
                    <p> Будь всегда на чеку</p>
                    <p> Их низкая живучесть оправдана безумной скоростью</p>
                </div>
            </Slide>
            <Slide index={2} className='about-game__item'>
                <div className='slide'>
                    <img src={Images.Spirit6} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
                    <h3>Создание из плазмы</h3>
                    <p>Надеюсь ты взял с собой зонтик</p>
                    <p>Постарайся увернуться от их уничтожительных плевков эктоплазмы</p>
                </div>
            </Slide>
            <Slide index={3} className='about-game__item about-game__item_first'>
                <div className='slide'>
                    <img src={Images.Spirit4} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
                    <h3>Бронированный призрак</h3>
                    <p>Паро взять калибр покрупнее</p>
                    <p>Да, они медлительны, но тебе придется постараться, чтоб точно разделаться с ними</p>
                </div>
            </Slide>
            <Slide index={4} className='about-game__item'>
                <div className='slide'>
                    <img src={Images.Spirit5} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
                    <h3>Неминуемый</h3>
                    <p>Постарайся внимательно вглядываться во тьму</p>
                    <p>Подобных созданий ты сможешь заметить только вблизи</p>
                </div>
            </Slide>
            <Slide index={5} className='about-game__item'>
                <div className='slide'>
                    <img src={Images.Spirit3} className={"img_pixel"} alt='' height={isMobile ? '300px' : '400px'} />
                    <h3>Смерть</h3>
                    <p>Сама Смерть с косой уже вышла по твою душу</p>
                    <p>Это твой главнный противник, удачи тебе</p>
                </div>
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
    );}

export default Courusel;