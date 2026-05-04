import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Clientarea() {
  return (
    <>
      <section className="client-area">
        <div className="container text-center">
          <h2>Serving Clients in India & Worldwide</h2>
          <p className="content-para">With a strong presence in India and clients across the globe, we bring tailored solutions to diverse businesses. Our track record speaks of trust, quality, and measurable results.</p>
          <div className="inner">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              modules={[Autoplay]}
              autoplay={{ delay: 2000 }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 }
              }}
            >
              <SwiperSlide className='client-slide'>
                <img src="img/client/client-1.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-2.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-3.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-4.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-5.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-6.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-7.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-8.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-9.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-10.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-11.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-12.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-13.png" alt="" className='w-100' />
              </SwiperSlide>

              <SwiperSlide className='client-slide'>
                <img src="img/client/client-14.png" alt="" className='w-100' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Clientarea