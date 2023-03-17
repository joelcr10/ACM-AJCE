import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import linux from './srcImages/linux_workshop.png'

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
        <h1>PAST EVENTS</h1>
            {/* <hr id="about-line"></hr> */}
            <div id="about-line"></div>
            <p id="about-para">ACM AJCE Student Chapter promotes computer machinery through seminars, events, competitions and exhibitions.</p>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <div className="event-container">
                <div className="event-image" id="event-linux"></div>
                
                <div className="event-content" >
                    <h1>Linux Tools for Programmers</h1>
                    <span>17th December 2022</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                          culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>    
        </SwiperSlide>
        <SwiperSlide>
            <div className="event-container">
                <div className="event-image" id="event-python"></div>
                
                <div className="event-content" >
                    <h1>Python Workshop</h1>
                    <span>21, 22 & 23 November 2022</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                          culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event-container">
                <div className="event-image" id="event-retro"></div>
                
                <div className="event-content" >
                    <h1>Retrospective</h1>
                    <span>26 & 27 October 2022</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                          culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="event-container">
                <div className="event-image" id="event-quizardy"></div>
                
                <div className="event-content" >
                    <h1>Quizardy</h1>
                    <span>16th July 2022</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                          culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
