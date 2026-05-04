import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

function SuccessStory() {
    return (
        <>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                loop={true}
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 }
                }}
            >
                <SwiperSlide>
                    <div className="item">
                        <div className="col">
                            <img src="img/slide-1.jpg" alt="" className="w-100 main-img" />
                        </div>
                        <div className="col-2">
                            <h3>FARS (Faculty Activity Reporting System):</h3>
                            <ul className="tags">
                                <li className="bg-1">Education</li>
                                <li className="bg-2">UI/UX Design</li>
                                <li className="bg-3">React Native</li>
                                <li className="bg-4">Figma</li>
                            </ul>
                            <p>We empower educational institutions with robust, easy-to-use mobile platforms that support:</p>
                            <ul className="list">
                                <li>Online learning and virtual classrooms</li>
                                <li>Student performance tracking</li>
                                <li>Attendance and timetable management</li>
                                <li>Teacher-parent communication portals</li>
                            </ul>
                            <a href="#" className="readmoreBtn">Know More</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item">
                        <div className="col">
                            <img src="img/slide-2.jpg" alt="" className="w-100 main-img" />
                        </div>
                        <div className="col-2">
                            <h3>Maharashtra Badminton Association</h3>
                            <ul className="tags">
                                <li className="bg-1">Sports</li>
                                <li className="bg-2">UI/UX Design</li>
                                <li className="bg-3">React Native</li>
                                <li className="bg-4">Flutter</li>
                                <li className="bg-2">Figma</li>
                            </ul>
                            <p>Application of on-line badminton entry system, entry mailing, entry verification, entry removal.</p>

                            <p>It is the unique system that offers badminton players the best ways to send and withdraw their entries at all approved tournaments, including district, state, whole, international tournament tournaments. </p>
                            <a href="#" className="readmoreBtn">Know More</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item">
                        <div className="col">
                            <img src="img/slide-3.jpg" alt="" className="w-100 main-img" />
                        </div>
                        <div className="col-2">
                            <h3>ICAD Parent App</h3>
                            <ul className="tags">
                                <li className="bg-1">Education</li>
                                <li className="bg-2">UI/UX Design</li>
                                <li className="bg-3">React Native</li>
                                <li className="bg-4">Flutter</li>
                                <li className="bg-2">Figma</li>
                            </ul>
                            <p>We empower educational institutions with robust, easy-to-use mobile platforms that support: </p>
                            <ul className="list">
                                <li>Online learning and virtual classrooms</li>
                                <li>Student performance tracking</li>
                                <li>Attendance and timetable management</li>
                                <li>Teacher-parent communication portals</li>
                            </ul>
                            <a href="#" className="readmoreBtn">Know More</a>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            

        </>
    )
}

export default SuccessStory