import { ValidatorForm } from '@/types/forms'

export const validationCard:ValidatorForm<{nroTarjeta:string, cvc:number, fechaVencimiento:string}, {
    nroTarjeta:string,
    cvc:number,
    fechaVencimiento:string
}> = (form) => {
  const errors = {
    nroTarjeta: '',
    cvc: '',
    fechaVencimiento: ''
  }
  if (!form.nroTarjeta) errors.nroTarjeta = 'Campo requerido'
  if (!form.cvc) {
    errors.cvc = 'Campo requerido'
  } else if (form.cvc.toString().length !== 3) errors.cvc = 'CVC inválido'
  if (!form.fechaVencimiento) { errors.fechaVencimiento = 'Campo requerido' } else if ((new Date(form.fechaVencimiento)).valueOf() < (new Date()).valueOf()) {
    errors.fechaVencimiento = 'Fecha inválida'
  }
  return errors
}
