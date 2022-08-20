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
  if (!form.nombres) { errors.nombres = 'Campo requerido' }
  if (!form.numTelefono) { errors.numTelefono = 'Campo requerido' } else if (form.numTelefono.toString().length !== 9) errors.numTelefono = 'Número inválido'
  if (!form.pais) { errors.pais = 'Campo requerido' } else if (form.pais !== 'Perú' && form.pais !== 'Peru' && form.pais !== 'perú' && form.pais !== 'peru') errors.pais = 'Por el momento solo operamos en Perú'

  return errors
}
