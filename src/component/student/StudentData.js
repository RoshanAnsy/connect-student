import React from 'react'
import CollageFacalities from '../collage/CollageFacalities';
import CollagePage from '../collage/CollagePage';
const list=[
  "roshan", "roshan","roshan","roshan","roshan","roshan","roshan","roshan","roshan","roshan","roshan", "roshan","roshan","roshan","roshan","roshan","roshan","roshan","roshan","roshan",
];
const StudentData = () => {
  return (
    <div className='text-black w-full flex flex-row overflow-x-scroll ' >
      
       {
        list.map((item,index)=>(
         <li className='px-12' >
          {item}
         </li>
        ))
       }
     
   
     
     
    </div>
  )
}

export default StudentData;
