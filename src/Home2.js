// Libraries
import React from 'react';
import Wrapper from "./components/wrapper";
import Subtitle from "./components/subtitle";
import Title from "./components/title";

// Components
import HeroSlider, {Slide,Nav,OverlayContainer,Overlay} from 'hero-slider';
import ajce4 from './srcImages/ajce4.png';
import ajce3 from './srcImages/ajce3.png';
import cc from "./srcImages/centre-complex.jpg";
import students from "./srcImages/students.jpg";
import lab from "./srcImages/lab.jpg";

export default function BasicSlider() {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      height="90vh"
      autoplay
      autoplayDuration='1000'
      style={{
        color: '#FFF',
        marginTop: '-20vh',
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        autoplayDuration: 2000,
        shouldSlideOnArrowKeypress: true,
        height: '90vmin',
        
      }}

      accessability={{
        shouldDisplayButtons: false,
      }}
    >
      <Overlay>
        <Wrapper>
          <Title><span id='hero-acm'>ACM</span> AJCE</Title>
          <Subtitle>
            ASSOCIATION OF COMPUTING AND MACHINERY
          </Subtitle>
        </Wrapper>
      </Overlay>
      <Slide
        // shouldRenderMask
        background={{
          backgroundImageSrc: ajce3,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundImageSizes: 'cover',
        }}
      />
      {/* <Slide
        // shouldRenderMask='true'
        label='This is the second slide'
        
        background={{
          backgroundImageSrc: cc,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      > 
  
      </Slide>*/}
      <Slide
        background={{
          backgroundImageSrc: students,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      {/* <Slide
        background={{
          backgroundImageSrc: lab,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      /> */}
      <Nav />
    </HeroSlider>
  );
}