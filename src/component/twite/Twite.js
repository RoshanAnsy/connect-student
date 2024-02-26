import React from 'react'
import TwiteDesign from './TwiteDesign';
import { useDispatch, useSelector } from 'react-redux';
import { setClose } from '../../dataHouse/slice/authSlice';
const Twite = () => {
  
  const dispatch=useDispatch();
  // const {user}=useSelector((state)=>state.profile)
  const isOpen=useSelector((state)=>state.auth.isOpen)
  const handleClose=()=>{
    dispatch(setClose(true))
  }

  return (
    <>
      <div className='border bg-white relative rounded-t-xl' >
        <div className='flex gap-x-1 my-6 mx-4' >
         <div >
          {/* {
            user? (<img src={user?.image} className='h-[50px] w-[50px] rounded-full object-cover ' />):
            (<CgProfile size={30} className='mx-auto place-self-center w-[10%] text-gray-400' />)
          } */}
          
          </div>
          <button
          onClick={handleClose}
          className='w-full border rounded-3xl  p-3 text-left hover:bg-gray-100'
          >
            Post Your Thought 
          </button>
        
          
        </div>
          
      </div>
    <div> 
    {isOpen? (
      <TwiteDesign className="absolute"/>
    ):(<></>)}
    </div>
      
    
    </>
  )
}

export default Twite;
