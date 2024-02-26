import React from 'react'
import { useLocation,NavLink,matchPath } from 'react-router-dom';
const data=[
    {title:"Basic Details",link:"/profile/infolink"},
    {title:"collage Details",link:"/profile/collageinfo",},
    {title:"DOC", link:"/profile/docinfo" }];


const ProfileSideBar = () => {
  const loaction=useLocation();
  
  //matching the link and current path 
  const matchRoute=(route)=>{
    return matchPath({path:route},loaction.pathname)
  }

  return (
    <div>
      <div className=' border-gray-400 p-2 items-center border-r bg-white min-h-full'>
        { data.map((item,index)=>(
          <NavLink to={item.link}
            className={`relative text-sm font-medium ${
                matchRoute(item.link)
                  ? " text-black bg-opacity-100"
                  : "bg-opacity-0 text-richblack-300"
              } transition-all duration-200`} key={index}>
            <div  className='w-[220px] border border-gray-400 text-center items-center gap-2 p-2 m-2 text-sm font-semibold rounded-lg hover:bg-gray-200 cursor-pointer' >
              <span
                className={`absolute left-0 top-0 h-full w-[0.25rem] bg-yellow-500 ${
                    matchRoute(item.link) ? "opacity-100" : "opacity-0"}`}> 
              </span>
              <div className="  ">
                {/* Icon Goes Here */}
                {/* <Icon className="text-lg" />  */}
                <span>{item.title}</span>
              </div>
            </div>
          </NavLink>
         )) }
      </div> 
    </div>
  )
}

export default ProfileSideBar;

