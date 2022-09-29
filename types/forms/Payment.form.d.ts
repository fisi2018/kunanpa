import { paymentSchema } from '@/utilities/validators'
import { InferType } from 'yup'

export interface ArregloForm{
    idFlor:number,
    cantidad:number,
    costo:number
}
export type IFormPayment=InferType<typeof paymentSchema>
export interface PaymentBody{
    nombres:string,
    numTelefono:number,
    direccion:string,
    distrito:string,
    codigoPostal:number,
    pais:string,
    nota?:string,
    arreglos:Array<ArregloForm>
    total:number
}
