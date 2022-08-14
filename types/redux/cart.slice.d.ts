export interface ProductState{
    _id:number,
    name:string,
    price:number,
    quantity:number,
    img:string
}
export interface CartState{
    products:ProductState[],
    totalPrice:number,
    totalQuantity:number,
    active:boolean
}
