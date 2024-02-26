import React from 'react';
import { NavLink } from 'react-router-dom';

const CollageDropdown = ({setIsOpen}) => {

  const handle=()=>{
    setIsOpen(false)
  }
  return (
    <div className='w-[80%] justify-center items-center mx-auto' > 
   
      <div className='flex flex-col text-black font-bold fixed w-60 h-20 bg-white shadow-lg rounded-lg justify-center items-center' onClick={handle} >
        <NavLink to="collage" >Collage profile</NavLink>
        <NavLink to="collage-student-details" > All students</NavLink>
      </div>
    </div>
  )
}

export default CollageDropdown;
