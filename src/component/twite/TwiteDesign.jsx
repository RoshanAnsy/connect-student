import React, {useState } from 'react'
import { createPost } from '../../service/operations/PostApi'
import {MdCancel} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { setClose } from '../../dataHouse/slice/authSlice'

const TwiteDesign = () => {
  const token=useSelector((state)=>state.auth.token)
  
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const habdleClosed=()=>{
    dispatch(setClose(false))
  }
  
  const[postData,setpostData]=useState({desc:""})
  const [file, setfile] = useState({data:""})
  const {desc}=postData
  const {data}=file
  const handleOnchange1=(e)=>{
    
    setpostData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value,
    }  
    ))
  }
  const handleOnchange2=(e)=>{
    e.preventDefault()
    setfile(e.target.files[0])
  }
  
  //handle form submission
  const handlerOnSummit=(e)=>{
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', file)
    formData.append('desc', postData.desc)
    
    console.log("post data are here",postData.desc)
    if(!desc){
      toast.error(" description are required")
    }
    dispatch(createPost(formData,navigate,token))
    console.log("function calling seccess")
    setpostData({
      desc:"",
    })
    setfile({data:null})
  }
  

  
  return (
    <div  className=" mt-0 fixed inset-0 z-[1000]  justify-center items-center overflow-auto bg-opacity-10 backdrop-brightness-50"
    
     >
      <div className="w-5/12 mx-auto mt-20 rounded-t-xl border border-richblack-400 bg-richblack-800 p-2 bg-white ">

    
        <div className='flex justify-between gap-x-4 border-b p-1 items-center'>
          <div className='flex items-center gap-x-4' >
          {/* <img src={user?.image} className='h-[50px] w-[50px] rounded-full object-cover ' /> */}
          <p>Roshan</p>
          </div>
          <div  >
            <MdCancel className='text-2xl text-gray-300 hover:text-gray-600' onClick={habdleClosed}/>
          </div>

        </div>
        <form onSubmit={handlerOnSummit} >
          <div >
            <textarea 
            cols={30}
            rows={20}
            name="desc"
            value={desc}
            onChange={handleOnchange1}
            placeholder='share your thought'
            className='w-full m-2 p-4 font-mono border-b outline-none h-[200px]'
            // {...register}
            />
            
          </div>
          {/* file upload setion */}
          
            <div>
              <input
                type='file'
                accept="image/png, image/jpeg"
                name='file'
                multiple
                value={data}
                onChange={handleOnchange2}
                className=' border-none p-2 rounded-md outline-none'
            />
              
            </div>

            <button type='submit'
            className=' bg-gray-100 text-black text-sm  rounded font-semibold hover:bg-slate-200  p-2 px-6'
            >Post</button>
      
        </form>
      </div>
    </div>
  )
}
 
export default TwiteDesign;
