export interface ResponseLogin{
    token:string,
    user:{
        id:number,
        email:string,
        nombre:string,
        avatar:string,
        dni:number|null,
        direccion:string|null
    }
}
export type FetcherAuth<Response> =(token:string)=>Promise<Response| Error>
export type FetcherWithBody<Form, Response> =(form:Form)=>Promise<Response| Error>
