import { kunanpa } from "@/config"
import { FetcherAuthWithBody } from "@/types/fetcher"
import { handleErrorResponse } from "@/utilities/handleErrors"
import { GetUserRequest } from "../types/requests"
import { UserResponse } from "../types/responses"

export const getUserById:FetcherAuthWithBody<GetUserRequest,UserResponse> =async(body,token)=>{
    try{
        const {data}=await kunanpa.get<UserResponse>(`/user/${body.id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        console.log("response getuserbyid",data)
        return data
    }catch(e){
        throw handleErrorResponse(e)
    }
}