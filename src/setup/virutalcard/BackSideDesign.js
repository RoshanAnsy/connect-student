import React from 'react';
import sit from '../../asects/image/sit.png';
import { useSelector } from 'react-redux';

const BackSideDesign = () => {
  const user_details=useSelector((state=>state.profile.user))
  console.log("from id card",user_details)
  return (
    <div>
    <div className='flex-row gap-y-2 rounded-lg bg-white shadow-md' >
    <div className='flex w-full  text-sm text-white font-semibold text-center gap-y-2 bg-sky-600 rounded-sm p-1 justify-center items-center' >
      <img src={sit} alt='user_image' sizes={10} className='h-10 shadow-lg rounded-full mx-auto min-w-[10%] mx-w-[20%]' />
      <p className='w-[80%] text-start'>{user_details?.collageinfo?.collageName}</p>
     </div>
     <div className='flex-row text-sm text-black text-center' >
     <p>ID No :-SIT/CSE/20/16</p>
     </div>

     <div className='flex-row justify-start text-sm text-blue-800 text-start ml-4' >

      <p className='text-lg text-red-800 font-semibold ' >Card Validity:-August-2024</p>
     
      <p>Address:-sitamarhi</p>
      <p>Ps:-{user_details?.collageinfo?.policeStations}</p>
      <p>dis:-{user_details?.collageinfo?.dist}</p>
      <p>State:-{user_details?.collageinfo?.state}</p>
      <p>pin code:-{user_details?.collageinfo?.pincode}</p>
     </div>
     <div className='flex justify-between text-start text-red-800 font-medium ml-4 mr-4 mb-4' >
     <p>Blood Group:-{user_details?.collageinfo?.bloodgroup}</p>
     <p className='text-sm text-blue-950' >principal Sign</p>
     </div>
    </div>
    </div>

     )};

export default BackSideDesign;
