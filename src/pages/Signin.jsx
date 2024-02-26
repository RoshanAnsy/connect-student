import React, { useState } from 'react';
import {Link,  useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import {login} from ".././service/operations/authApi";


const Signin = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const[formData,setFormData]=useState({
      email:"",
      password:"",
    })

    //plese set here showpassword or hide
    const [showPassword, setShowPassword] = useState(false)
    const {email,password}=formData;

    const handlerOnChange=(e)=>{
      setFormData((prev)=>({
        ...prev,
        [e.target.name]:e.target.value,
      }))
    }

    //handler summit function
    const handlerOnSummit=(e)=>{
      e.preventDefault()
      dispatch(login(email,password,navigate))
      console.log("signing data ::",formData);
    }

  
  return (
    <div className='flex flex-col  justify-center text-black  items-center ' > 
     <h3 className='font-bold' >SignIn to Connect S</h3>
    <form
      onSubmit={handlerOnSummit}
      className="mt-6 flex w-[400px] flex-col gap-y-4 bg-slate-200 rounded-md p-6 "
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handlerOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handlerOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-900">
            Forgot Password
          </p>
        </Link>
      </label>
      {/* <Link to={"/home"}   >  */}
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-cyan-800 py-[8px] px-[12px] font-sm text-white w-full"
      >
        Sign In
      </button>
      {/* </Link> */}
    </form>
    
    <div className='border p-4 border-white text-black  items-center mt-2 rounded-md' >
      <Link to={"/signup"} className='flex gap-2'>
        <p className=' text-gray-700' >New to Connect S</p>
        <button
        className=" rounded-[4px] bg-cyan-800 py-[4px] px-[12px] font-medium text-white border-r-8  "
        >
          Create an account?
        </button>
      </Link>
    </div>
    </div>
  )
};

export default Signin;
