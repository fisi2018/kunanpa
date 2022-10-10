import { Flower } from '@/types/models'
import { FlowerPage } from './FlowerPage.model'

export interface DataFlower{
    flowers:Flower[],
    pages:FlowerPage[],
    total:number
}
