import React from 'react';
import icon1 from "./assets/img/Mask group (1).png";
import icon2 from "./assets/img/Mask group (2).png";
import icon3 from "./assets/img/Mask group.png";
import ChefImage from "./assets/img/chef.png";

const Testimonials = () => {
  return (
    <div className="flex py-20 px-10 md:px-20 lg:px-32 items-center justify-center">
      <div className="md:w-1/2">
        <img src={ChefImage} alt="chef" className="h-2/3 w-full" />
      </div>
      <div className="md:w-1/2 max-w-screen-xl mx-auto pl-20">
        <h1 className="text-xl text-orange-500 font-bold mb-4 Inter md:text-3xl lg:text-4xl">Testimonials</h1>
        <div className="text-center justify-center mb-10 md:mb-0">
          <p className="font-bold text-xl md:text-2xl">What our Customers say about us</p>
          <p className="text-base md:text-lg">
            “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
          </p>
        </div>
  <div className="flex justify-around">
  
  
  <div className="relative">
    <div className="absolute top-0 left-0 z-10">
      <img src={icon1} alt="Icon 1" className="w-32 h-32" />
    </div>
    <div className="absolute top-0 left-6 z-24">
      <img src={icon2} alt="Icon 2" className="w-32 h-32" />
    </div>
    <div className="absolute top-0 left-12 z-35">
      <img src={icon3} alt="Icon 3" className="w-32 h-32" />
    </div>
    
</div>


  
  </div>

  <div className='flex flex-col pt-2 text-center justify-center '>
            <p className="text-lg font-semibold ">Custom Feedback</p>
            <p className="text-lg">4.9 (18.6k reviews)</p>
  </div>
  
     
  </div>
  </div>
    
    

    
  );
}

export default Testimonials;