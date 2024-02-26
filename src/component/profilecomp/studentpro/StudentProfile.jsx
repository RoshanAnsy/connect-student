import React from 'react';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';

const StudentProfile = () => {
  const user=useSelector((state)=>state.profile.user)
  console.log("form profiel page",user)

  return (
    <div>
      <di  className='text-black  gap-y-4 text-lg '>
        <div className=' flex justify-between font-bold  shadow-lg items-center p-2  ' >
          <p>Basics Details</p>
          <NavLink 
              to={"/profile/updateprofile"}
          >
          <button 
           className=' px-4 border border-solid border-cyan-500 rounded-md  hover:bg-cyan-800 py-1 ' >update</button></NavLink>
        </div>
        {/* profile photo */}
        <div className='flex gap-2 text-black items-center m-4' >
        <img src={user?.image} alt='user_image' className='h-[50px] w-[50px] object-cover rounded-full place-content-center' />
        
          <p>{user?.firstName}</p>
        </div>
        <div className='flex justify-around gap-4 border shadow-lg rounded-md p-4  ' >
          <div>
            <p>Mobile number</p>
            <p>Email</p>
            <p>University Name</p>
            <p>Collage Name</p>
          </div>
          <div>
           
            <p>+91{user?.profile?.number} </p>
            <p>{user?.email}</p>
            <p>{user?.collageinfo?.universityName}</p>
            <p>{user?.collageinfo?.collageName}</p>

          </div>

        </div>

      </di>
    </div>
  )
}

export default StudentProfile;
