import React from 'react'
import Bottomlevel from "../common/bottombar/BottomLevel"
import SideBar from  '../common/sidebardesign/ProfileSideBar'
import { Outlet } from 'react-router-dom'


const Profile = () => {
 
  return (
    

    <div className='h-screen w-full mx-auto' >

      <div className="flex flex-row min-h-screen w-full">
        <SideBar />
        <div className="min-h-screen w-[60%]  mx-auto">
          <Outlet/>
        </div>
       
      </div>
  
     <Bottomlevel className="justify-bottom items-baseline"/>
    </div>
  )
}

export default Profile;
