import { ValidatorForm } from '@/types/forms'

export const validationCard:ValidatorForm<{nroTarjeta:string, cvc:number, fechaVencimiento:string}, {
    nroTarjeta:string,
    cvc:number,
    fechaVencimiento:string
}> = (_form) => {
  const errors = {
    nroTarjeta: '',
    cvc: '',
    fechaVencimiento: ''
  }
  return errors
}
