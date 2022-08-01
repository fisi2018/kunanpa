import { FlowerResponse } from './Flower.response'

interface DataResponse extends Omit<FlowerResponse, 'urlimagen'> {
    imagenes:{urlImagen:string}[],
    detalles:string|null,
    categorias:Array<{id:number, nombre:string}>
}
export interface FlowerDetailsResponse{
    data:DataResponse
}
