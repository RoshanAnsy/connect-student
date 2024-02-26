import React, { useEffect, useState } from 'react'
import InfiteScroll from 'react-infinite-scroll-component';
import PostDesign from './PostDesign';

import {getAllPost} from "../../service/operations/PostApi"
import { useSelector } from 'react-redux';


const InfiniteData = () => {
    const[dataSource,setdata]=useState([]);
    const token=useSelector(state=>state.auth.token)
    const getPost= async ()=>{
      try{
        const response= await getAllPost(token);
        setdata(response);
      }
      catch(error){
        console.log("enable to fetched data from backend")
      }}

    useEffect(()=>{
      getPost();
    },[])

  return (
    <div>
      <InfiteScroll 
      dataLength={dataSource.length}
      className='grid grid-cols-[36rem] justify-center scroll-smooth'>
      <PostDesign data={dataSource}/>
        </InfiteScroll>
    </div>
  )
}

export default InfiniteData;
