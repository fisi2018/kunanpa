export interface ArregloForm{
    idFlor:number,
    cantidad:number,
    costo:number
}
export interface PaymentForm{
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
