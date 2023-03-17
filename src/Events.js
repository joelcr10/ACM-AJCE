// import linux from './srcImages/linux_workshop.png'

// const Events = () => {
//     return ( 
// //         <div>
// //             <div className="upcoming-events">

// //             </div>

// //             <div className="past-events">
// //             <h2 class="events-title">PAST EVENTS</h2>
// //             <div class ="cards">
// //                     <div class="card" data-description="card one">
// //                         <img src={linux} alt='img1' />
// //                         <h1>linux Workshop</h1>
// //                     </div>
// //                     <div class="card" data-description="card two">
// //                         <img src='https://picsum.photos/200?random=2' alt='img2' />
                        
// //                     </div>
// //                     <div class="card" data-description="card three" alt='img3'>
// //                         <img src='https://picsum.photos/200?random=3' />
                    
// //                     </div>
// //                     {/* <div class="card" data-description="card four" >
// //                         <img src='https://picsum.photos/200?random=4' alt='img4' />
                    
// //                     </div> */}
            
// //             </div>
// // <div class="modal_outer">
// //   <div class="modal_inner">
// //     <p>TEsting 123</p>
// //   </div>
// // </div>
// //             </div>
// //         </div>
// <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
// <div class="carousel-inner">
//   <div class="carousel-item active">
//     <div class="cards-wrapper">
//     <div class="card">
//       <img src={linux} class="card-img-top" alt="..."/>
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//     <div class="card d-none d-md-block">
//       <img src={linux} class="card-img-top" alt="..."/>
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//     <div class="card d-none d-md-block">
//       <img src={linux} class="card-img-top" alt="..."/>
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   </div>
//   </div>
//   <div class="carousel-item">
//     <div class="cards-wrapper">
//       <div class="card">
//         <img src={linux} class="card-img-top" alt="..."/>
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       <div class="card d-none d-md-block">
//         <img src={linux} class="card-img-top" alt="..."/>
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       <div class="card d-none d-md-block">
//         {/* <img src="..." class="card-img-top" alt="..."> */}
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div class="carousel-item">
//     <div class="cards-wrapper">
//       <div class="card">
//         {/* <img src="..." class="card-img-top" alt="..."> */}
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       <div class="card d-none d-md-block">
//         {/* <img src="..." class="card-img-top" alt="..."> */}
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       <div class="card d-none d-md-block">
//         {/* <img src={linux} class="card-img-top" alt="..."> */}
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span class="sr-only">Previous</span>
// </a>
// <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//   <span class="carousel-control-next-icon" aria-hidden="true"></span>
//   <span class="sr-only">Next</span>
// </a>
// </div>
//      );
// }
 
// export default Events;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><span className="cardText">Linux Workshop</span></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
