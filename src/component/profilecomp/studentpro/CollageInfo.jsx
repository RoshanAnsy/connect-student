import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CollageInfo = () => {
  
  const {user}=useSelector((state)=>state.profile)
  
  return (
    <div>

      <di  className='text-black  gap-y-4 text-lg w-6/12'>
        <div className=' flex justify-between font-bold  shadow-lg items-center p-2  ' >
          <p>Collage Details</p>
          <NavLink 
              to={"/profile/updateform"}
          >
          <button 
           className=' px-4 border border-solid border-cyan-500 rounded-md  hover:bg-cyan-800 py-1 ' >update</button></NavLink>
        </div>
        {/* profile photo */}
        <div className='flex gap-2 text-black items-center m-4' >
        <img src={user?.image} alt='user_image' className='h-[50px] w-[50px] object-cover rounded-full place-content-center' />
      
          <p>{user?.firstName}</p>
        </div>
        <div className='flex justify-around gap-4 shadow-lg p-4 rounded-md ' >
          <div>
            
            <p>public Email</p>
            <p>University Name</p>
            <p>Collage Name</p>
            <p>Branch</p>
            <p>Year</p>
            <p>semester</p>
            <p>Rej No</p>
            <p>Roll No</p>
            

          </div>
          <div>
            <p>{user?.email}</p>
            <p>{user?.profile?.about}</p>
            
            <p>{user?.collageinfo?.collageName} </p>
            <p>{user?.collageinfo?.branch} </p>
            <p>{user?.collageinfo?.semester} </p>
            <p>{user?.collageinfo?.year} </p>
            
            <p>{user?.collageinfo?.rejno} </p>
            <p>{user?.collageinfo?.rollno} </p>
            

          </div>
         

        </div>

      </di>
    </div>
  )
}

export default CollageInfo; 
