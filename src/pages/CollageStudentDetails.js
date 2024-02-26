import React from 'react'
import Bottomlevel from '../common/bottombar/BottomLevel'
import { Outlet } from 'react-router'
import SideBar from '../common/sidebardesign/CollageStDetails'
const CollageStudentDetails = () => {
  return (
    <div className='h-screen w-full ' >

    
      <div className="flex flex-row h-screen w-full overflow-y-auto">
        <SideBar/>
        <div className="h-screen w-[80%]  mx-auto">
          
          <Outlet/>
        </div>
       
      </div>
  
     <Bottomlevel className="justify-bottom items-baseline"/>
    </div>
  )
}

export default CollageStudentDetails;
