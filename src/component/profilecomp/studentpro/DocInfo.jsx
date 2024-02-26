import React from 'react'
import { useSelector } from 'react-redux'


const DocInfo = () => {
  const token=useSelector((state)=>state.auth);
  
  return (
    <div className='text-black bg-red-700' >
      These are all my docoments
     
    </div>
  )
}

export default DocInfo
