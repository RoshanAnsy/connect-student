import {toast} from "react-hot-toast";
import { setLoding,setToken } from "../../dataHouse/slice/authSlice";
import { setUser } from "../../dataHouse/slice/profileSlice";
import {apiConnector} from "../apiconnector";
import { endpoints } from "../apis";
import Cookies from 'js-cookie';

const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSWORD_API,
    RESETPASSTOKEN_API
}=endpoints


export function sendotp(email,navigate){
    return async (dispatch)=>{
        const toastId=toast.loading("loading...")
        dispatch(setLoding(true));
        try{
            const response=await apiConnector("POST",SENDOTP_API,{
                email,
                checkUserPresent:true,
            })
            console.log("SENDOTP API RESPONSE.....",response);
            console.log(response.data.success);

            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("otp send successfully")
            navigate("/verify-email");

        }
        catch(error){
            console.log("SENDOTP API ERROR........",error)
            toast.error("could not send otp")
        }

        dispatch(setLoding(false))
        // toast.dismiss(toastId)
        toast.dismiss(toastId)
    }

}

//signup
export function signUp(
    firstName,
    lastName,
    email,
    password,
    conformPass,
    otp,
    navigate
){
    return async (dispatch)=>{
        const toastId=toast.loading("Loading...")
        dispatch(setLoding(true));

        try{
            const response=await apiConnector("POST",SIGNUP_API,{
            firstName,
            lastName,
            email,
            password,
            conformPass,
            otp,
            })

            console.log("signup api response .........",response)
            //validation
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("signup successfull")
            navigate("/login")

        }
        catch(error){
                console.log("signup api error....... ",error)
                toast.error("signup failed")
                navigate("/signup")
        }
        dispatch(setLoding(false))
        toast.dismiss(toastId)
    }
}

//login 
export function login(email,password,navigate){
    return async (dispatch)=>{
        const toastId=toast.loading("Loading...")
        dispatch(setLoding(true))

        try{
            const response=await apiConnector("POST",LOGIN_API,{
                email,
                password,
            })
            
            console.log("LOGIN API RESPONSE..............",response)

            // if(!response.data.success){
            //     throw new Error(response.data.message);
            // }
            
            if(response.data.token){
                toast.success("Login Succesfully")
                dispatch(setToken(response.data.token))
                const expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + 1);
                Cookies.set('token', response.data.token, { expires: expirationDate });
            }
            //localStorage.setItem("token",JSON.stringify(response.data.token))

            const userImage=response.data?.user?.image?
            response.data.user.image
            :`https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
            // const res=response.data.user
            // console.log("user deails a=is this",res)
            dispatch(setUser(response.data.user))
            // check your private routes
            navigate("/");
        }
        catch(error){
            console.log("LOGIN API ERROR............", error)
            // console.log(error.toJSON().message);
            toast.error("Login Failed")
            dispatch(setLoding(false))
            toast.dismiss(toastId)
        }
        
        
    }

}


//getpassword token
export function getPasswordToken(email,setEmailSend){
        return async (dispatch)=>{
            const toastId = toast.loading("Loading...")
            dispatch(setLoding(true))

            try{
                const response=await apiConnector("POST",RESETPASSTOKEN_API,{
                    email,
                })
                console.log("RESETPASSTOKEN RESPONSE............", response)
                
                if(!response.data.success){
                    throw new Error(response.data.message)
                }
                toast.success("Reset email send")
                setEmailSend(true)

            }
            catch(error){
                console.log("RESETPASSTOKEN ERROR............", error)
                toast.error("Failed To Send Reset Email")
            }
            toast.dismiss(toastId)
            dispatch(setLoding(false))
        }
}

//resetpassword

export function resetpassword(password,confirmPassword,token,navigate){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoding(true))

        try{
            const response=await apiConnector("POST",RESETPASSWORD_API,{
                password,
                confirmPassword,
                token
            })
            console.log("RESETPASSWORD RESPONSE............", response)
            //validation
            if(!response.data.success){
                throw new Error(resetpassword.data.message)
            }
            toast.success("password reset successfully")
            navigate("/login")
        }
        catch(error){
            console.log("RESETPASSWORD ERROR............", error)
            toast.error("Failed To Reset Password")
        }
        toast.dismiss(toastId)
        dispatch(setLoding(false))
    }
}

