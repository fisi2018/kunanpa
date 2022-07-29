import { Flower, LinkPage } from '.'

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
