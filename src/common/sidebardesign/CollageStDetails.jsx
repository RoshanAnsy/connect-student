import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation,NavLink,matchPath } from 'react-router-dom';
const data=[
    {
        title:"sit all student",
        link:"/collage-student-details/all"
    },
    {
        title:"cse student",
        link:"/collage-student-details/cselink"
    },
    {
        title:"AIstudent",
        link:"/collage-student-details/ailink"
    },
    {
        title:"EE student",
        link:"/collage-student-details/eelink"
    },
    {
        title:"CE student",
        link:"/collage-student-details/celink"
    },
    {
        title:"ME student",
        link:"/collage-student-details/melink"
    },
   
   
];

const CollageStDetails = () => {
    
 
    const loaction=useLocation();
    const dispatch=useDispatch();

  //matching the link and current path 
  const matchRoute=(route)=>{
    return matchPath({path:route},loaction.pathname)
  }

  return (
    <div  >
    
      <div className=' border-gray-400 p-2  items-center border-r bg-white h-full'>
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
            <div  className='w-[220px] border text-center items-center gap-2 p-2 m-2 text-sm font-semibold rounded-lg hover:bg-gray-200 cursor-pointer' >
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

export default CollageStDetails;
