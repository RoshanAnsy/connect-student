import React from 'react'
import {data} from "../../data/AllStudent";
const AiStudent = () => {
  return (
    <div className='w-[80%] justify-center items-center mx-auto' >
    {
     data.map((item)=>(
       <div key={item.id} >
         <ul className='flex flex-row bg-white m-4 rounded-lg gap-8 justify-start text-black font-semibold mx-auto text-center' >
           <li>
             <img src={item.image}  className='h-[50px] w-[50px] rounded-full object-cover p-2 ' />
           </li>
           <li>
             <p>{item.name} </p> 
           </li>
           <li>
             <p>{item.email} </p>
           </li>
           <li>
             <p>{item.semster} </p>
           </li>
           
         </ul>
       </div>
     ))
    }
       </div>
  )
}

export default AiStudent;
