import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {setSignupData} from "../dataHouse/slice/authSlice";
import { sendotp, signUp } from '.././service/operations/authApi';


const SignUp = () => {

const navigate=useNavigate();
const dispatch=useDispatch();

  const[formdata,setFormdata]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    conformPass:"",
   
  });
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  

  //destructureing and get data from form
  const {firstName,lastName,email,password,conformPass}=formdata


  //handle input fields when some value changed
  const changeHandler = (e) => {
    setFormdata((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  //handle for submission

  const summitHandler=(e)=>{
      e.preventDefault()
      console.log("signinup data",formdata)
      // if(password!==conformPass){
      //   toast.error("password dont matched ")
      //   return
      // }
      const signupData={ ...formdata}
      //setting signup data to state
      //to be used afterr otp verification
      dispatch(setSignupData(signupData))
      dispatch(sendotp(formdata.email,navigate));
      //reset the form
      setFormdata({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        conformPass:"",

      })

  }  

  return (
    
    <div className='flex flex-col justify-center items-center  gap-4 ' >
    {/* Form */}
    <h3 className='font-bold' >SignUp to Connect S</h3>
    <form onSubmit={summitHandler} className="flex flex-col  gap-y-4 justify-center items-cente bg-stone-200 p-4 rounded-md text-md">

      <div className="flex gap-x-4">
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            First Name <sup className="text-black">*</sup>
          </p>
          <input
            required
            type="text"
            name="firstName"
            value={firstName}
            onChange={changeHandler}
            placeholder="Enter first name"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] p-[8px] text-richblack-5"
          />
        </label>
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Last Name <sup >*</sup>
          </p>
          <input
            required
            type="text"
            name="lastName"
            value={lastName}
            onChange={changeHandler}
            placeholder="Enter last name"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] p-[8px] text-richblack-5"
          />
        </label>
      </div>
      <div className='flex justify-start' > 
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup>*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] p-[8px] text-richblack-5"
        />
      </label>
      </div>
      <div className="flex gap-x-4">
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Create Password <sup >*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Enter Password"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem]  p-[8px] text-richblack-5"
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
        </label>
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Confirm Password <sup >*</sup>
          </p>
          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            name="conformPass"
            value={conformPass}
            onChange={changeHandler}
            placeholder="Confirm Password"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem]  p-[8px] text-richblack-5"
          />
          <span
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 rounded-[8px] bg-cyan-800 py-[6px] px-[12px] font-medium text-white  "
      >
        Create Account
      </button>
    </form>
  </div>
  )
}

export default SignUp;
