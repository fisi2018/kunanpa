import { Arreglo } from './Arreglo.model'

export interface PaymentBody{
    nombres:string,
    numTelefono:number,
    direccion:string,
    distrito:string,
    codigoPostal:number,
    pais:string,
    nota?:string,
    arreglos:Array<Arreglo>
    total:number
}
