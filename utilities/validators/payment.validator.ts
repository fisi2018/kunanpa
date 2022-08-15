import { ErrorForm, PaymentForm, ValidatorForm } from '@/types/forms'

export const validationPayment:ValidatorForm<PaymentForm, Omit<PaymentForm, 'arreglos'|'total'>> = (form) => {
  const errors:ErrorForm<Omit<PaymentForm, 'arreglos'|'total'>> = {
    codigoPostal: '',
    direccion: '',
    distrito: '',
    nombres: '',
    numTelefono: '',
    pais: '',
    nota: ''
  }
  if (!form.codigoPostal) errors.codigoPostal = 'Campo requerido'
  if (!form.direccion) errors.direccion = 'Campo requerido'
  if (!form.distrito) errors.distrito = 'Campo requerido'
  if (!form.nombres) errors.nombres = 'Campo requerido'
  if (!form.numTelefono) errors.numTelefono = 'Campo requerido'
  if (!form.pais) errors.pais = 'Campo requerido'

  return errors
}
