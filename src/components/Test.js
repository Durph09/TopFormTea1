import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import tftlogo from '../components/assets/tftlogo.png'
import { Image } from 'react-bootstrap';

const ParallaxSection = () => {
  return (
    <div
 

>
  <Parallax speed={-10}>
    <div><p>YYYYYYYYY</p></div>
  </Parallax>

  <Parallax speed={10}>
    <div><p>YYYYYYYYY</p></div>
  </Parallax>
</div>
  );
};

export default ParallaxSection;