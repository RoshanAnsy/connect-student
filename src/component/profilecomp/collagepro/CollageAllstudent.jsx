import React, { useEffect, useState } from 'react'
import {getAllCollageStudent} from "../../../service/operations/collageStudentApi";
const CollageAllstudent = () => {

  const[data,setData]=useState([]);
  
  const studentData=async ()=>{
      try{
        const resp=await getAllCollageStudent();
        console.log("all data are...",resp.student)
        setData(resp.student)
      }
      catch(err){
        console.log("error somthing in student function")
      }
  }

  useEffect(()=>{
    studentData()
},[])

  return (
    <div className='w-[90%] justify-center items-center mx-auto' >
      {
        data.map((item,index)=>(
          <div
          key={index} >
            <ul className='flex flex-row bg-white m-3 rounded-lg gap-8 justify-start text-black font-semibold mx-auto text-center p-2' >
              <li>
                <img src={item.image}  className='h-[35px] w-[50px] object-cover mx-auto rounded-[100%] ' />
              </li>
              <li>
                <p>{item.firstName} {item.lastName}  </p> 
              </li>
              <li>
                <p>{item.email} </p>
              </li>
              <li>
                <p> {`Account created date ${item.createdAt}`} </p>
              </li>
              <li>
                <p>{`Gender ${item.profile?.gender}`} </p>
              </li>
              <li>
                <p>{`Mo. Number ${item.profile?.number}`} </p>
              </li>
              <li>
                <p>{` Branch ${item.collageinfo?.branch}`} </p>
              </li>
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default CollageAllstudent;
