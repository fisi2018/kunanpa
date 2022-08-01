import { FlowerPage } from '../models'
import { FlowerResponse } from './Flower.response'

export interface ResponseFlowers{
    current_page:number,
    data:Array<FlowerResponse>,
    first_page_url:string,
    from:number,
    last_page:string,
    last_page_url:string,
    links:Array<FlowerPage>,
    next_page_url:string|null,
    path:string,
    per_page:number,
    prev_page_url:null|string,
    to:number,
    total:number
}
