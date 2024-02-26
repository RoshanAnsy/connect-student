import { toast } from "react-hot-toast";
import { setUser } from "../../dataHouse/slice/profileSlice";
import { apiConnector } from "../apiconnector";
import { settingsEndpoints } from "../apis";


const {
    UPDATE_PROFILE_PICTURE_API,
    UPDATE_PROFILE_API,
    CHANGE_PASSWORD_API
}=settingsEndpoints

//update profile picture
export function updateProfilePicture(token,formData){
    return async(dispatch)=>{
        const toastId=toast.loading("Loadding...")
        
        try{
            const responce=await apiConnector("PUT",UPDATE_PROFILE_PICTURE_API,
            formData,{
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            })

            console.log("UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
            responce)
            //validation of responce
            if(!responce.data.success){
                throw new Error(responce.data.message)
            }
            toast.success("Display Picture Updated Successfully");
            dispatch(setUser(responce.data.data))
        }
        catch(error){
            console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
            toast.error("Could Not Update Display Picture")
        }
        toast.dismiss(toastId);
    }
}

//update profile

export function updateProfile(token,formData){
    return async(dispatch)=>{
        const toastId=toast.loading("Loadding...")
        try{
            const responce=await apiConnector("PUT",UPDATE_PROFILE_API,formData,{
                Authorization: `Bearer ${token}`,
            })
            console.log("UPDATE_PROFILE_API API RESPONSE............", responce)
            //validation of responce
            if(!responce.data.success){
                throw new Error(responce.data.message)
            }

            //upadate image
            const userImage=responce.data.updateUserDetail.image?
            responce.data.updateUserDetail
             :`https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
            toast.success("Profile Updated Successfully")

        }
        catch(error){
            console.log("UPDATE_PROFILE_API API ERROR............", error)
            toast.error("Could Not Update Profile")
        }
        toast.dismiss(toastId)
    }
}

//change password 
export async function changePassword(token,formData){
    const toastId=toast.loading("Loadding...")
    try{
        const responce=await apiConnector("POST",CHANGE_PASSWORD_API,formData,{
            Authorization:`Bearer ${token}`
        })
        console.log("CHANGE_PASSWORD_API API RESPONSE............", response)
        //validatioin of responce
        if(!responce.data.success){
            throw new Error(responce.data.message)
        }
        toast.success("Password Changed Successfully")


    }
    catch(error){
        console.log("CHANGE_PASSWORD_API API ERROR............", error)
        toast.error(error.response.data.message)

    }
    toast.dismiss(toastId)
}