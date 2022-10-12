export interface WishListItemResponse{
    idFlor:number,
    nombre:string,
    precioFinal:number,
    descuento:number,
    precioInicial:number,
    urlimagen:string
}
export interface WishListResponse{
    data:WishListItemResponse[]
}
