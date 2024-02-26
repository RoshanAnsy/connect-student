import React from 'react';
import CollagePage from '../component/collage/CollagePage';
import { useSelector } from 'react-redux';
import Bottomlevel from "../common/bottombar/BottomLevel";
import CollageNavbar from '../common/sidebardesign/CollageNavbar';
import { Outlet } from 'react-router-dom'
import SideBar from  '../common/sidebardesign/CollageNavbar'
const Collage = () => {
  
const studentdetail=useSelector((state)=>state.Collagee);
console.log(studentdetail);
  return (
    // <div  >
    // {/* {
    //   studentdetail ? (<StudentData/>):
    //   (<CollagePage/> &&
    //   <CollageFacalities/>)
    // } */}
    // {/* <StudentData/> */}
    // <CollageNavbar/>
    // {/* <CollagePage/> */}
    // <Bottomlevel/>
    // </div>
    <div className='h-screen  w-full mx-auto' >

      <div className="flex flex-row  min-h-screen w-full">
        <SideBar />
        <div className="mx-auto">
          <Outlet/>
        </div>
       
      </div>
  
     <Bottomlevel className="justify-bottom items-baseline"/>
    </div>
  )
}

export default Collage;
