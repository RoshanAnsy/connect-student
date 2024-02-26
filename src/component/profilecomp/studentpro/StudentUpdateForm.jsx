import React from 'react';
import { useForm } from 'react-hook-form';
import { updateCollageDetails } from '../../../service/operations/profileApi';
import { useSelector } from 'react-redux';
const formdata=[
  {name:"universityName",id:"universityName",type:"text",label:"University Name"},
  {name:"collageName",id:"collageName",type:"text",label:"collage Name"},
  {name:"rejno",id:"number",type:"text",label:"rejno"},
  {name:"rollno",id:"rollno",type:"text",label:"rollno"},
  {name:"year",id:"year",type:"text",label:"Year"},
  {name:"semester",id:"semester",type:"text",label:"Semester"},
  {name:"branch",id:"branch",type:"text",label:"Branch"},
  {name:"fatherName",id:"fatherName",type:"text",label:"fatherName"},
  {name:"dist",id:"dist",type:"text",label:"Dist"},
  {name:"state",id:"state",type:"text",label:"State"},
  {name:"pincode",id:"pincode",type:"text",label:"pincode"},
  {name:"policeStations",id:"policeStations",type:"text",label:"Police Stations"},
  {name:"country",id:"country",type:"text",label:"Country"},
  {name:"bloodgroup",id:"bloodgroup",type:"text",label:"Bloodgroup"},
  
  
]
const StudentUpdateForm = () => {
  const token=useSelector((state)=>state.auth.token)

  const {
    register,
    handleSubmit,
    
  } = useForm();
  const styledata="flex text-xl text-start p-3 my-3 rounded-md"
  const onsummit=(data)=>{
    updateCollageDetails(data,token)
  }

  return (
    <div className=' flex shadow-md m-2 p-6  items-center justify-center  mx-auto  '>
    <form onSubmit={handleSubmit(onsummit)} className=' flex flex-col items-center justify-center' >
        <div className='grid grid-cols-2 gap-x-8 mb-12 '>
        {
            formdata.map((item,index)=>(
            <div key={index} >
                <label htmlFor={item.id} className=' font-semibold'> {item.label}</label>
                <input id={item.id} className={`${styledata}`}  type={item.type}  {...register(`${item.name}`)} />
            </div> ))
        }
        </div>
        
        <button type='submmit' className=' w-[12rem] border px-4 py-2 font-semibold rounded-md hover:bg-slate-50 '>Update</button>
        
    </form>
    </div>
  );
};

export default StudentUpdateForm;
