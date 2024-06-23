import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Data';
import './Comp.css'


function Slider() {
  return (
    <>
      
    <section className=''>
    <Swiper
       slidesPerView={3}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
       
      }}
      breakpoints={{
        430: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
       
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
     
    
    
      
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
     
      {Slide.map((a)=>(
 <SwiperSlide> <img className='slide' src={a} width='100%' alt="" /> </SwiperSlide>
      ))}

    </Swiper>
    </section>
    </>
  )
}

export default Slider
