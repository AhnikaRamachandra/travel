import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import Trip from '@/trip'
function Hero() {
  return (
    <>
    <div className='relative' >
        
     <img className='object-cover w-full h-96' src="/image1.jpg" alt="" srcset="" />
     <h1 className='text-center absolute inset-0 flex items-center text-white md:text-3xl  justify-center' >Revolutionize the way you travel with personalized itineraries crafted by AI.</h1>
</div>

<div className='sm:px-10 md:px-32 lg:px-56 xl:px-12 px-6 mt-10'>
    <h2 className='font-bold text-3xl'>Tailored Travel at Your Fingertips</h2>
    <h4 className='mt-3 text-gray-500 text-xl'>Unlock the perfect travel experience with a personal AI trip planner that curates custom itineraries designed around your unique interests and budget. Wherever you dream of going, we’ll help you get there effortlessly</h4>
    <Link to={'/trip'}> <Button className=' md:px-8 sm:px-60 mt-5  bg-cyan-700'>Get started</Button>
    </Link>
   
  </div>

<div className='flex flex-col items-center md:flex-row md:justify-evenly   mt-7  p-4 md:p-0  '>
<div className="mb-5 md:mb-0 max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/image2.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

<div className="mb-5 md:mb-0 max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/image3.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

<div className="mb-5 md:mb-0 max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/image4.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

</div>


</>
  )
}

export default Hero
