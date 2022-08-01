import { Category } from './Category.model'
import { Flower } from './Flower.model'

export interface FlowerDetails extends Omit<Flower, 'img'>{
    imgs:{src:string}[],
    detalles:string|null,
    categorias:Category[]
}
