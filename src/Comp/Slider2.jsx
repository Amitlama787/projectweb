import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {  Pagination,  } from 'swiper/modules';
import './Comp.css'


function Slider2() {
  return (
    <>
      <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-light">
                <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
 
        modules={[Pagination, ]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <p className='sliderfont'>" Incredible work on our website! The team's attention to detail and understanding of our brand was exceptional. Highly recommend their expertise."</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-3'>
                    <img className='slider-circle' src="https://mandalainfosys.com/wp-content/uploads/2024/03/simran-122x122-1.png" alt="" />

                    <div>
                        <h2>Simran Thapa</h2>
                        <p>CEO of EHR Pvt. Ltd</p>
                    </div>
                    </div>

                    <div>
                        <ul className='d-flex gap-3'>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                        </ul>
                    </div>
                    
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <p className='sliderfont'>" Incredible work on our website! The team's attention to detail and understanding of our brand was exceptional. Highly recommend their expertise."</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-3'>
                    <img className='slider-circle' src="https://mandalainfosys.com/wp-content/uploads/2024/03/simran-122x122-1.png" alt="" />

                    <div>
                        <h2>Simran Thapa</h2>
                        <p>CEO of EHR Pvt. Ltd</p>
                    </div>
                    </div>

                    <div>
                        <ul className='d-flex gap-3'>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                        </ul>
                    </div>
                    
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <p className='sliderfont'>" Incredible work on our website! The team's attention to detail and understanding of our brand was exceptional. Highly recommend their expertise."</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-3'>
                    <img className='slider-circle' src="https://mandalainfosys.com/wp-content/uploads/2024/03/simran-122x122-1.png" alt="" />

                    <div>
                        <h2>Simran Thapa</h2>
                        <p>CEO of EHR Pvt. Ltd</p>
                    </div>
                    </div>

                    <div>
                        <ul className='d-flex gap-3'>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                        </ul>
                    </div>
                    
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <p className='sliderfont'>" Incredible work on our website! The team's attention to detail and understanding of our brand was exceptional. Highly recommend their expertise."</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-3'>
                    <img className='slider-circle' src="https://mandalainfosys.com/wp-content/uploads/2024/03/simran-122x122-1.png" alt="" />

                    <div>
                        <h2>Simran Thapa</h2>
                        <p>CEO of EHR Pvt. Ltd</p>
                    </div>
                    </div>

                    <div>
                        <ul className='d-flex gap-3'>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                        </ul>
                    </div>
                    
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <p className='sliderfont'>" Incredible work on our website! The team's attention to detail and understanding of our brand was exceptional. Highly recommend their expertise."</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-3'>
                    <img className='slider-circle' src="https://mandalainfosys.com/wp-content/uploads/2024/03/simran-122x122-1.png" alt="" />

                    <div>
                        <h2>Simran Thapa</h2>
                        <p>CEO of EHR Pvt. Ltd</p>
                    </div>
                    </div>

                    <div>
                        <ul className='d-flex gap-3'>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                        </ul>
                    </div>
                    
                </div>
                </div>
        </SwiperSlide>
       
      </Swiper>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Slider2
