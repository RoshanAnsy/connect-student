import React from 'react'
import IdCardDesign from './IdCardDesign';
import { useSelector, } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setcard } from '../../dataHouse/slice/idcardSlice';
import IdButton from './IdButton';
import BackSideDesign from './BackSideDesign';
const VirutalId = () => {
const idcarddata=useSelector((state)=>state.virtualIdCard);
const idcardBackside=useSelector((state)=>state.idbackside);
// console.log(idcardBackside);

const usedispatch=useDispatch();

const clickHandle=()=>{
  usedispatch(setcard());
}

  return (
    <div >
     {
      idcarddata ? ( <div> <div>
       { idcardBackside ? (<BackSideDesign/>):(
       <div>
       <IdCardDesign/>
       
       </div>
       )
       }
      </div>
      <IdButton/>
      </div>

       ):
      (<button  className='flex justify-center w-full bg-white text-black text-sm text-center rounded-t-xl border font-semibold hover:bg-slate-200 hover:scale-105 cursor-pointer p-2'
      onClick={clickHandle}
       >virutal ID card</button>)
     }

      
    </div>
  )
}

export default VirutalId;
