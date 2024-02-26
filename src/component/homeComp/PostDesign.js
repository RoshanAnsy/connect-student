import React from "react";
import mountain from "../../asects/image/mountain.jpg";
import { CiHeart } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { BiRepost } from "react-icons/bi";
import { useSelector,useDispatch } from "react-redux";
import RatingAPost from "../../service/operations/PostApi";



const PostDesign = ({data}) => {

    // const[like,setLike]=useState(false);
    // const[lcount,setlcount]=useState(null);
    const dispatch=useDispatch();
    const token=useSelector((state)=>state.auth.token)
    const user_id=useSelector((state)=>state.profile)
    
    
    const handle=(like,dislike,share,postId)=>{
      if(like){
        // setLike(false);
        // setlcount(like-1);
        dispatch(RatingAPost(like-1,dislike,share,postId,token))
      }
      else{
        // setLike(true);
        // setlcount(like+1);
        dispatch(RatingAPost(like+1,dislike,share,postId,token))
      }
     
    }

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div className="flex-row justify-center  shadow-sm hover:shadow-2xl  p-2 w-full  rounded-sm mb-2 bg-white " key={index}>

            <div className="flex  mb-2 border-b p-[0.40rem] mx-4  ">
              <div className="flex gap-2 w-[75%]  ">
                <div className="item-center" >
                  <img src={item.instructor?.image} alt='user_image' className="w-[2.7rem] h-[2.7rem] object-cover place-self-center place-items-center rounded-full"  />
            
                </div>
                <div className="flex flex-col gap-y-[0rem] text-[0.9rem] font-[1rem]">
                <p className=" font-semibold">{item.instructor?.firstName} </p>
                <p className=" text-[0.7rem] " >{new Date(item.date).toISOString().split('T')[0]} </p>
                </div>
              </div>
              <div className="flex gap-2 justify-end place-items-center items-center w-[15%]">
                <p>sit</p>
                <div className="flex gap-x-4 items-center ">
                <img src={mountain} className="w-[1.2rem] h-[1.2rem] object-cover place-self-center place-items-center rounded-full" alt= ".." />
                 
                  <HiOutlineDotsHorizontal size={20} />
                </div>
              </div>
              
            </div>

            <div className=" justify-start ml-6" >
              <h2 className="text-start text-xl text-yellow-800 font-semibold mb-2" > {item.Title}</h2>
              <p className="text-sm text-black text-start mb-1" > {item.description} </p>
              <>
              {
                item.thumbnail ? (<img src={item.thumbnail} alt='..'  className="h-[280px] w-full mx-auto rounded-sm m-2 object-cover"/>)
                :(" ")
              }
              </>
            </div>

            <div className="flex justify-end gap-x-20 p-2  mt-4 mx-4 items-center">
              <p className="flex gap-2">
                {item?.ratingOfPost.length >0?( item?.ratingOfPost.map((item1,index)=>(
                  <div key={index}>{
                  item1.user===user_id? 
                  
                 ( <FcLike size={20}  onClick={() => handle(item.like,item.dislike,item.share,item._id)}   className=" transition-colors "/>)
                 :(<CiHeart size={20} onClick={() => handle(item.like,item.dislike,item.share,item._id)}/>)
                  }</div>
                ))):(<CiHeart size={20} onClick={() => handle(item.like,item.dislike,item.share,item._id)}/>)
                 
                }
                {item.like} 
              </p>
              
              <p><BiRepost size={22}/></p>
              <p className="flex gap-2 items-center">
                 <CiShare1 size={18}/> 102
              </p>
              <p className=" items-center"><BsBookmark size={15}/></p>
            </div>
          </div>
         );
       })} 
    </div>
  );
};

export default PostDesign;
