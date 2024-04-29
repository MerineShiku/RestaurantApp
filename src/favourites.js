import React from 'react';
import category1 from "./assets/img/pngwing 3.png";
import category2 from "./assets/img/pngwing 4.png";
import category3 from "./assets/img/pngwing 6.png";
import category4 from "./assets/img/pngwing 7.png";



const Favourites = () => {
  return (
    
<>

<div>

<h6 className="text-orange-500 font-inter font-bold text-center text-base md:text-lg">Customer`s favourites</h6>

<h6 className=" font-inter font-semibold text-center text-xl md:text-2xl ">Popular Categories</h6>

</div>



<div className='flex align-between justify-between m-6'>

<div className=" rounded-lg m-4 bg-gray-100 p-3">
<img src={category1} alt="category 1" class="rounded p-2 "/>
<p>Main Dish</p>
<p>(38 dishes)</p>
</div>

<div className=" rounded-lg m-4 bg-gray-100 p-3 ">
<img src={category2} alt="category 2" class="rounded p-2 "/>
<p>Bittings</p>
<p>(10 dishes)</p>
</div>

<div className=" rounded-lg m-4 bg-gray-100 p-3">
<img src={category3} alt="category 3" class="rounded p-2 "/>

<p>Desserts</p>
<p>(8 dishes)</p>
</div>

<div className=" rounded-lg m-4 bg-gray-100 p-3">
<img src={category4} alt="category 4" class="rounded p-2 "/>
<p>Drinks</p>
<p>(22 dishes)</p>
</div>


</div>

</>
  )
  }
export default Favourites;


