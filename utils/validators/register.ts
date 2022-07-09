import { REGEX_FORM } from '../../consts/regex'
import { ErrorForm, FormRegisterType, ValidatorForm } from '../../types/forms'

const validationRegister:ValidatorForm<FormRegisterType, Omit<FormRegisterType, 'direccion'>> = (form) => {
  const errors:ErrorForm<Omit<FormRegisterType, 'direccion'>> = {
    email: '',
    password: '',
    dni: '',
    nombre: ''
  }
  if (!form.email.trim()) {
    errors.email = 'Campo requerido'
  } else if (!REGEX_FORM.REGEX_EMAIl.test(form.email.trim())) errors.email = 'Email inválido'
  if (!form.password.trim()) {
    errors.password = 'Campo requerido'
  } else if (!REGEX_FORM.REGEX_PASSWORD.test(form.password.trim())) errors.password = 'Contraseña debe tener entre 8 y 16 caracteres'
  if (!form.nombre.trim()) {
    errors.nombre = 'Campo requerido'
  } else if (!REGEX_FORM.REGEX_NOMBRE.test(form.nombre.trim())) errors.nombre = 'Nombre inválido'
  if (form.dni && !REGEX_FORM.REGEX_DNI.test(form.dni.toString())) errors.dni = 'DNI inválido'
  return errors
}
export default validationRegister
