import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Technologystack() {
  return (
    <>
      <section class="logo-slider">
        <div class="container">
          <h2>Complete 360° Technology Stack</h2>
          <p class="content-para">Our 360° tech stack empowers businesses with holistic, cutting-edge solutions. We combine advanced tools and technologies to deliver scalable, future-ready applications.</p>
          <Swiper
            className='technologyIcons'
            spaceBetween={20}
            slidesPerView={6}
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 }
            }}
          >
            <SwiperSlide className='technology-slide'>
              <img src="img/client-1.png" alt="" className='w-100' />
            </SwiperSlide>

            <SwiperSlide className='technology-slide'>
              <img src="img/client-2.png" alt="" className='w-100' />
            </SwiperSlide>

            <SwiperSlide className='technology-slide'>
              <img src="img/client-3.png" alt="" className='w-100' />
            </SwiperSlide>

            <SwiperSlide className='technology-slide'>
              <img src="img/client-4.png" alt="" className='w-100' />
            </SwiperSlide>

            <SwiperSlide className='technology-slide'>
              <img src="img/client-5.png" alt="" className='w-100' />
            </SwiperSlide>

            <SwiperSlide className='technology-slide'>
              <img src="img/client-6.png" alt="" className='w-100' />
            </SwiperSlide>

            <SwiperSlide className='technology-slide'>
              <img src="img/client-7.png" alt="" className='w-100' />
            </SwiperSlide>

            <SwiperSlide className='technology-slide'>
              <img src="img/client-8.png" alt="" className='w-100' />
            </SwiperSlide>

            <SwiperSlide className='technology-slide'>
              <img src="img/client-9.png" alt="" className='w-100' />
            </SwiperSlide>

            <SwiperSlide className='technology-slide'>
              <img src="img/client-10.png" alt="" className='w-100' />
            </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Technologystack