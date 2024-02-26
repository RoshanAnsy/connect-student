import React from 'react'
import sit from '../../asects/image/sit.png';
import { useSelector } from 'react-redux';
const IdCardDesign = () => {
  const user_details=useSelector((state=>state.profile.user))
  console.log("from id card",user_details)

  return (
    <div className='flex-row gap-y-6 mb-6' > 
    <div className='flex-row gap-y-2 rounded-lg bg-white shadow-md' >
     <div className='flex w-full  text-sm text-white font-semibold text-center gap-y-2 bg-sky-600 rounded-sm p-1 justify-center items-center' >
      <img src={sit} alt='...' sizes={10} className='h-10 shadow-lg rounded-full mx-auto min-w-[10%] mx-w-[20%]' />
      <p className='w-[80%] text-start'>{user_details?.collageinfo?.collageName}</p>
     </div>
     <div className='flex-row text-sm text-black text-center' >
     <p>ID No :-SIT/CSE/20/16</p>
     <img alt='user_image' src={user_details?.image} className='flex justify-center h-16 w-16 mx-auto shadow-md rounded-full object-cover m-1'/>
     </div>
     <div className='flex-row justify-start text-sm text-blue-800 text-start ml-4' >

      <p className='text-lg text-red-800 font-semibold ' >{user_details?.firstName}</p>
      <p>s/o:{user_details?.collageinfo?.fatherName}</p>
      <p>Rej.No:-{user_details?.collageinfo?.rejno}</p>
      <p>Roll No:-{user_details?.collageinfo?.rollno}</p>
      <p>branch:-{user_details?.collageinfo?.branch}</p>
      <p>D.O.V:-{new Date(user_details?.profile?.dob).toISOString().split('T')[0]}</p>
     </div>
     <div className='flex justify-between text-start text-red-800 font-medium ml-4 mr-4' >
     <p>Blood Group:-{user_details?.collageinfo?.bloodgroup}</p>
     <p className='text-sm text-blue-950' >principal Sign</p>
     </div>
     <div className='bg-red-800 h-2 w-full bottom-0 mt-2 mb-4' >

     </div>
    </div>
   
    </div>
  )
}

export default IdCardDesign;
