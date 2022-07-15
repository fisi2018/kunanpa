export interface Flower{
    id:number,
    nombre:string,
    descripcion:string,
    precioFinal:number,
    precioInicial:number,
    descuento:number,
    stock:number,
    urlimagen:string
}
export interface LinkPage{
    url:null|string,
    label:string,
    active:boolean
}
export interface Category{
    id:number,
    nombre:string
}
export interface ResponseFlowers{
    current_page:number,
    data:Array<Flower>,
    first_page_url:string,
    from:number,
    last_page:string,
    last_page_url:string,
    links:Array<LinkPage>,
    next_page_url:string|null,
    path:string,
    per_page:number,
    prev_page_url:null|string,
    to:number,
    total:number
}
