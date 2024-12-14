import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { AI_PROMPT, SelectBudget, SelectTravellist } from '@/constants/options';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { chatSession } from '@/service/AIModal';
function Trip() {
  const [place,setplace]=useState();
  const[formdata,setform]=useState({
    noofday: '',
    location: '',
    budget: '',
    traveler: '',
  });
  const handleinput=(name,value)=>{
    if (name === 'noofday' && value > 5) {
      toast.error('Please enter a trip duration of 5 days or less.');
      return;
    }
setform({
  ...formdata,
  [name]:value
}
)
  }
useEffect(()=>{
console.log(formdata);

},[formdata])

const ongeneratetrip=async()=>{
  const { noofday, location, budget, traveler } = formdata;

  if (!noofday || !location || !budget || !traveler) {
    toast.error('Please fill in all the details.');
    return;
  }

  if (noofday > 5) {
    toast.error('Trip duration should be 5 days or less.');
    return;
  }
  const Final_prompt=AI_PROMPT.replace('{location}',formdata?.location?.label)
  .replace('{noofday}',formdata?.noofday)
  .replace('{traveler}',formdata?.traveler)
  .replace('{budget}',formdata?.budget )
  .replace('{totalDays}',formdata?.noofday)
  console.log(Final_prompt);
  const result =await chatSession.sendMessage(Final_prompt);
  console.log(result?.response?.text());
  
  
}
  return (
   <>
   <ToastContainer />
   <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
    <h2 className='font-bold text-3xl'>Any specific places you want to visit?</h2>
    <p className='mt-3 text-gray-500 text-xl'>Let us know what makes your dream trip perfect! Share a few details, and our intelligent trip planner will craft a personalized itinerary just for you.</p>
   
   <div className='mt-20 flex flex-col gap-7'>
    
    <div>
<h2 className='text-xl my-3 font-medium'>What is ur destination of ur choice</h2>
<GooglePlacesAutocomplete
      apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} selectProps={{
        place,
        onChange:(v)=>{setplace(v);handleinput('location',v);
        },placeholder: 'Search for your destination...',
      }}
    />
    </div>
   
<div>
<h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
<Input placeholder={'Enter the no'} type="number" onChange={(e)=>handleinput('noofday',e.target.value)} />

</div>

   </div>
   
   <div className='mt-9' >
   <h2 className='text-xl  my-3 font-medium'>What is Your Budget?</h2>
   <div className='grid grid-cols-3 gap-5 mt-5 '>{ SelectBudget.map((item,index)=>(
    <div key={index} onClick={()=>handleinput('budget',item.title)}
     className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formdata?.budget==item.title&&'shadow-lg border-black '}`}>
     
      <img src={item.icon} alt="" srcset="" />
      <h2 className='font-bold text-xl mt-1'>{item.title}</h2>
      <h2 className=' text-sm  text-gray-500'>{item.desc}</h2>
    </div>
   ))}</div>
   </div>

   <div className='mt-9' >
   <h2 className='text-xl  my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
   <div className='grid grid-cols-3 md:grid-cols-4 gap-5 mt-5 '>{ SelectTravellist.map((item,index)=>(
    <div key={index} onClick={()=>handleinput('traveler',item.people)}
     className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formdata?.traveler==item.people&&'shadow-lg border-black '}`}>
      <img src={item.icon} alt="" srcset="" />
      <h2 className='font-bold text-xl mt-1'>{item.title}</h2>
      <h2 className=' text-sm  text-gray-500'>{item.desc}</h2>
    </div>
   ))}</div>
   </div>
   
   <Button onClick={ongeneratetrip} className='mt-7 mb-6 bg-cyan-700'>Generate Trip</Button>
   </div>
   </>
  )
}

export default Trip

