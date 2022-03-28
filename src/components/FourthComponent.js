import React from 'react'
import AssetsFourImage1 from '../AssetsFour/First.svg'
import AssetsFourImage2 from '../AssetsFour/Second.svg'
import AssetsFourImage3 from '../AssetsFour/Third.svg'
import backgroundImage from '../AssetsFour/Background.svg'
import RightSvg from '../AssetsFour/Right.svg'

export default function FourthComponent() {
  return (
    <>
   <div className="container flex flex-col lg:flex-row my-10 items-center">
     <div className="firstItem    sm:w-[610px] sm:h-[610px] w-[300px] my-3 h-auto mx-12 bg-[#F4EEEC]">
       <div className="innerCont top-0 my-4 mx-4  relative flex">
       <h1 className='font-bold text-[50px] relative top-14 left-16'>BIG SALE</h1> 
       <img src={backgroundImage} alt="" className='absolute top-0 flex -z-10' />
       </div>

       <img src={AssetsFourImage1} alt="" className='mx-auto my-[5rem]'  />


       
      
 </div>

     <div className="secondItem flex flex-col my-3">

       <div className="firstElem my-4 flex flex-col lg:flex-row items-center bg-[rgb(244,238,236)] lg:w-[610px] lg:h-[292px] ">
         <div>
        
         <p className='text-[50px] my-1 mx-4'>BIG SALE</p>
           
       <h1 className='text-[50px] my-1 font-bold text-[#7287BB] mx-4'>NEW ITEM</h1> 
      <div className="inner my-2 mx-4 flex flex-row">
        <img src={RightSvg} alt="" className='mx-1' />
        <p className='text-[16px] mx-4'>Shop Now</p>



      </div>
      </div>
      <div className="image -mt-[100px]">
        
      <img src={AssetsFourImage2} alt="" className='w-[283px] h-[363px] ' />
      </div>
       </div>
       <div className="secondElem my-2 flex flex-col lg:flex-row items-center bg-[#F4EEEC] lg:w-[610px] lg:h-[292px] ">
         <div>
       <img src={AssetsFourImage3} className="w-[293px] h-[206px]" alt="" />
         </div>
           
       <div>
        
        <p className='text-[50px] my-1 mx-4'>BIG SALE</p>
          
      <h1 className='text-[50px] my-1 font-bold text-[#7287BB] mx-4'>NEW ITEM</h1> 
     <div className="inner my-2 mx-4 flex flex-row">
       <img src={RightSvg} alt="" className='mx-1' />
       <p className='text-[16px] mx-4'>Shop Now</p>



     </div>
     </div>
    
       </div>
       

     </div>
   </div>

    </>
  )
}
