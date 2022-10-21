import { Estado } from '../../constants'

export interface Compra{
 _id:string,
 pedido:string,
 estado:Estado,
 fecha:Date,
 total:number
}
