import React from 'react';
import salad1 from "./assets/img/Egg salad.png";
import salad2 from "./assets/img/Fattoush salad.png";
import salad3 from "./assets/img/Vegetable salad.png";

const Special = () => {
  return (
    
<>

<h6 className=" text-left ml-6 text-orange-500 font-inter font-bold text-base md:text-lg"> Special Dishes </h6>

<h6 className=" text-left ml-6 font-inter font-bold text-lg md:text-2xl"> Standout Dishes</h6>
<h6 className=" text-left ml-6 font-inter font-bold text-lg md:text-2xl "> From Our Menu</h6>
<div className='flex align-between justify-between m-6'>

<div className=" rounded-lg m-4 bg-gray-100 p-3">
<img src={salad1} alt="salad 1" class="rounded p-2 "/>
<p>Main Dish</p>
<p>(38 dishes)</p>
</div>

<div className=" rounded-lg m-4 bg-gray-100 p-3 ">
<img src={salad2} alt="salad 2" class="rounded p-2 "/>
<p>Bittings</p>
<p>(10 dishes)</p>
</div>

<div className=" rounded-lg m-4 bg-gray-100 p-3">
<img src={salad3} alt="salad 3" class="rounded p-2 "/>

<p>Desserts</p>
<p>(8 dishes)</p>
</div>


</div>
</>
  )
  }
export default Special;


