import { Flower } from './Flower.model'
import { FlowerPage } from './FlowerPage.model'

export interface DataFlower{
    flowers:Flower[],
    pages:FlowerPage[],
    total:number
}
