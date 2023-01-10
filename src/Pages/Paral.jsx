import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react';
const Paral = () => {

  return (

    <div>
    <Parallax pages={4}>

    <ParallaxLayer
      offset={0}
      speed={1}
      factor={2}
      style={{
        backgroundImage: `url("https://github.com/fireship-io/skydiving-cat-parallax/blob/main/src/moon.png?raw=true")`,
        backgroundSize: 'cover',
      }}
    />
   
   <ParallaxLayer
   offset={2}
   speed={1}
   factor={4}
   style={{
    backgroundImage: `url("https://github.com/fireship-io/skydiving-cat-parallax/blob/main/src/land.png?raw=true")`,
    backgroundSize: 'cover',
   }}
   />

   <ParallaxLayer
   sticky={{
    start:0.9,
    end: 2.5
   }}
   >
    <img src="https://raw.githubusercontent.com/fireship-io/skydiving-cat-parallax/main/src/cat.gif"/>
   </ParallaxLayer>
    
    </Parallax>
    </div>
  )
}

export default Paral
