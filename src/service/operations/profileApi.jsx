import {toast} from "react-hot-toast";
import {apiConnector} from "../apiconnector";
import {profileEndpoints} from "../apis";
const { GET_USER_DETAILS_API,UPDAGE_USER_PROFILE_API,UPDATE_COLLAGE_DETAILS_API }=profileEndpoints


//get user details
export async function getUserDetails(token){

    try{
        const headers = {'Authorization': `Bearer ${token}`};
        const response=await apiConnector("GET",GET_USER_DETAILS_API,{},headers)
        // console.log("GET user deatils api responce .............",response);
        
        //validation
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        //get user image from responce
        // const userImage = response.data.image
        // ? response.data.image
        // : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
     return response.data;
    }
    catch(error){
        // dispatch(logout(navigate))
      console.log("GET_USER_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details")

    }
    // toast.dismiss(toastId);
    // dispatch(setLoading(false))
  //  }
}
//update profile details
export  async function updateProfileDetails(data,token){

  try{
    console.log(token,data)
    const headers = {'Authorization': `Bearer ${token}`};
    const userDetails=await apiConnector("put",UPDAGE_USER_PROFILE_API,data,headers);
    console.log("update successfully user data",userDetails)
  }catch(err){
    console.log("something is issue while upadating the user details",err.message)
  }
}
//update collage details
export  async function updateCollageDetails(data,token){

  try{
    console.log(token,data)
    const headers = {'Authorization': `Bearer ${token}`};
    const collageDetails=await apiConnector("put",UPDATE_COLLAGE_DETAILS_API,data,headers);
    console.log("update successfully user data",collageDetails)
  }catch(err){
    console.log("something is issue while upadating the collage details",err.message)
  }
}