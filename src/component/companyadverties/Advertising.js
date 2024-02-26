import React from 'react'
import mountain from '../../asects/image/mountain.jpg';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
const Advertising = () => {
  return (
    <div className='flex-row border shadow-sm text-black text-start mb-4 text-sm '>
      <div className='text-center flex-row text-black' >
        <img src={mountain} className='flex mx-auto rounded-sm ' ></img>
        <span className='text-2xl text-center z-10 mx-auto font-bold from-inherit ' >SWP</span>
        <p>
            Indian company
        </p>
      </div>
      <div className='flex-row h-auto p-2 w-full  mt-6 justify-center' >
      <p className='mb-2' >Location:SIT Sitamarhi</p>
        <p>Stay with Privacy is a forward-thinking company dedicated to providing privacy-focused 
        solutions for individuals and organizations in the digital age.
        With an increasing emphasis on data security and personal privacy, 
        Stay with Privacy offers a range of products and services designed to 
        safeguard sensitive information and protect online identities.</p>

        
      </div>
      <div className='flex justify-around border p-2 ' >
      <AiOutlineLinkedin size={30} className='flex text-green-900 hover:scale-110' />
      <AiFillGithub size={30} className='hover:scale-110' />
      </div>
    </div>
  )
}

export default Advertising
