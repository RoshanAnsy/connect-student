import React from 'react'
import { useDispatch } from 'react-redux';
import { RiCollageFill } from "react-icons/ri";
import { GiDodging } from "react-icons/gi";

import { useLocation,NavLink,matchPath } from 'react-router-dom';
const data=[
    {
        title:(<RiCollageFill/>),
        link:"/collage"
    },
    {
        title:(<GiDodging/>),
        link:"/collage/collage_profile"
    },
    
   
];

const CollageNavbar = () => {
    
 
    const loaction=useLocation();
    

  //matching the link and current path 
  const matchRoute=(route)=>{
    return matchPath({path:route},loaction.pathname)
  }

  return (
    <div className=' relative top-44  items-center justify-center z-12 ' >
    
      <div className=' fixed p-2  items-center shadow-lg rounded-lg py-4 mx-auto bg-white'>
        {
        data.map((item,index)=>(

          <NavLink to={item.link}
            className={`relative  text-sm font-medium  ${
                matchRoute(item.link)
                  ?  "bg-yellow-500 text-black bg-opacity-100" 
                  : "bg-opacity-0 text-black"
              } transition-all duration-200`}
              key={index}
            >
            <div  className=' border text-center items-center gap-2 p-2 m-2 text-sm font-semibold rounded-lg hover:bg-gray-200 cursor-pointer' >
              <span
                className={`absolute left-0 top-0 h-full w-[0.25rem] bg-yellow-500 ${
                    matchRoute(item.link) ? "opacity-100" : "opacity-0"
                  }`}
              ></span>
           
              <div className="  ">
                {/* Icon Goes Here */}
                {/* <Icon className="text-lg" />  */}
                <span>{item.title}</span>
              </div>
            </div>
            
          </NavLink>
            
        )
            
        )
       }
      </div> 
      
    </div>
  )
  
}

export default CollageNavbar;
