import { Textarea } from '@material-tailwind/react'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { IFormPayment } from '../types/forms'
type Props={
    register:UseFormRegister<IFormPayment>,
    errors:FieldErrorsImpl<IFormPayment>,
}
export function AditionalInfo ({ register, errors }:Props) {
  return (
        <div>
            <h2 className="font-bold text-xl" >Información adicional</h2>
            <article className="flex justify-between text-gray-500 text-sm py-2" >
                <p>¿Necesitas algo más? ¡Lo haremos por ti!</p>
                <p>Paso 2 de 3</p>
            </article>
            <Textarea error={!!errors.nota} {...register('nota')} label="Notas de pedido adicional" />
        </div>
  )
}
