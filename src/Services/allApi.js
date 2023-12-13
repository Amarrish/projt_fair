import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";


// register
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASEURL}/user/register`,user,"")
}

// loginapi
export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${BASEURL}/user/login`,user,"")
}