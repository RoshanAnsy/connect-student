import React from 'react'
import { useDispatch } from 'react-redux';
import { setcard } from '../../dataHouse/slice/idcardSlice';
import { changeside } from '../../dataHouse/slice/IdbackSideslice';
const IdButton = () => {

    const usedispatch=useDispatch();
    const clickHandle=()=>{
        usedispatch(setcard());
    }
    const backside=()=>{
        usedispatch(changeside());
    }
  return (

    <div>
       <div className='grid grid-cols-2 justify-around gap-4 mt-6 mb-2 text-black' >
       
      <button className='bg-cyan-800  py-2 px-3 text-sm rounded-lg text-white text-center hover:scale-105 '
      onClick={clickHandle}
       > close</button>
      <button className='bg-cyan-800  py-2 px-3 text-sm rounded-lg text-white text-center hover:scale-105 '
      onClick={backside}
      >back side</button>
      
    </div>
    </div>
  )};

export default IdButton;
