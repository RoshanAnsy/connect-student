

const BASE_URL="http://127.0.0.1:4000/api/v1"
// const BASE_URL = process.env.REACT_APP_BASE_URL

//auth endpoint

export const endpoints={
    
    SENDOTP_API:BASE_URL+ "/auth/sendOTP",
    SIGNUP_API:BASE_URL+ "/auth/signUp",
    LOGIN_API:BASE_URL +"/auth/login",
    //checked working fine above function
    RESETPASSWORD_API:BASE_URL+"/auth/changePassword",
    //right now is not checked
    RESETPASSWORDTOKEN_API:BASE_URL + "/auth/reset-password-token",
    REFRESH_PAGE:BASE_URL+"/auth/refresh_page"
}

//profile endpoins

export const profileEndpoints={

    GET_USER_DETAILS_API: BASE_URL + "/profile/getAllUserDetails",
    UPDAGE_USER_PROFILE_API:BASE_URL +"/profile/updateProfile",
    UPDATE_COLLAGE_DETAILS_API:BASE_URL + "/profile/updateCollageDetails",
    
}
//collage api end points

export const collageEndpoints={
    GET_ALL_STUDENT_API:BASE_URL+"/profile/getAllStudent",
    GET_ALL_COLLAGE_PROFILE_API:BASE_URL + "/profile/getCollageDetails"
}
//post apiend[point]  verified

export const postendpoints={
    CREATEPOST_API:BASE_URL +"/post/createPost",
    GETALLPOST_API:BASE_URL + "/post/showAllPost",
    GETRATINGOFPOST_API:BASE_URL+ "/post/RatingAPost",
}

//settings page api
export const settingsEndpoints={
    UPDATE_PROFILE_PICTURE_API:BASE_URL + "/Profile/updateProfilePoto",
    UPDATE_PROFILE_API:BASE_URL +"/profile/updateProfile",

   // CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
}