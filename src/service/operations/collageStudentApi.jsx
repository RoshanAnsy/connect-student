import { apiConnector } from "../apiconnector";
import { collageEndpoints } from "../apis";

const {
    GET_ALL_STUDENT_API,GET_ALL_COLLAGE_PROFILE_API
}=collageEndpoints

export async function getAllCollageStudent(){

    try{
        const allstudent= await apiConnector("GET",GET_ALL_STUDENT_API);

        if(!allstudent){
            console.log("student are not avible")
        }
        console.log("all sudent api responce is ",allstudent)
        return allstudent.data;
    }
    catch(error){
        console.log(`getting error in fetching collage student details api ${error}`)
    }
}

//collage profile details api
export async function getCollageProfileDetails(token){
    try{
        const headers = {'Authorization': `Bearer ${token}`};
        const allCollageData=await apiConnector("GET",GET_ALL_COLLAGE_PROFILE_API,{},headers)

        if(!allCollageData){
            console.log("collage profile are not visibale")

        }
        return allCollageData.data;
    }
    catch(error){
        console.log(`getting error in fetching collage profile details api ${error}`)
    }
}