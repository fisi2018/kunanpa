export interface UserResponse{
    data:{
        id:number,
        email:string,
        nombre:string,
        avatar:string,
        dni:number|null,
        direccion:string|null
    }
}