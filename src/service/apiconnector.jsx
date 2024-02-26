import axios from "axios";

export const axiosInstance=axios.create({});

export const apiConnector=(method,url,bodyData,headers,prams)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data:bodyData? bodyData:null,
        headers:headers?headers:null,
        prams:prams? prams:null,
    });
}