
import React from 'react';
import heroImage from "./assets/img/hero-image.jpg";

const Hero = () => {
  return (
    
<div class=" flex py-20 px-10 md:px-20 lg:px-32 ">
  <div class="flex flex-col  max-w-screen-xl mx-auto item-center ">
   



    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 Inter"> Enjoy heartwarming <span style={{ color: '#39DB4A' }}>Food</span></h1>
    <div class=" mb-10 md:mb-0">
    
      <p class="text-base md:text-lg text-center text-justify pr-6"> Enjoy mouth watering dishes from all over the world.Lifetime experience with discovery with every culinary plate..</p>
    
      <button class=" bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-10">Order Now</button>
    
    
    </div>

    </div>
    

    
    
<div class="md:w-1/2">

<img src={heroImage} alt="hero" h-auto w-100 />

</div>
   
</div>
 

  )
  }
export default Hero;


