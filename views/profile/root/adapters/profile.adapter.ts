import { Profile } from "../types/models";
import { UserResponse } from "../types/responses";

export const createProfileAdapter=(response:UserResponse):Profile=>{
    return{
        _id:response.data.id.toString(),
        address:response.data.direccion || "" ,
        dni:response.data.dni?response.data.dni.toString():"",
        email:response.data.email,
        img:response.data.avatar,
        name:response.data.nombre
    }
}