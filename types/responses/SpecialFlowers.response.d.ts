export interface DataSpecialFlowerResponse{
    id:number,
    nombre:string,
    descripcion:string,
    precioFinal:number,
    precioInicial:number,
    descuento:number,
    stock:number,
    urlimagen:string,
}
export interface SpecialFlowersResponse {
    data:DataSpecialFlowerResponse[]|null
}
