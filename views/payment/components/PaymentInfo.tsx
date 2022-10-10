import { Input } from '@material-tailwind/react'
import type { Session } from 'next-auth'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { IFormPayment } from '../types/forms'
type Props={
    data:Session,
    register:UseFormRegister<IFormPayment>,
    errors:FieldErrorsImpl<IFormPayment>,
}
export function PaymentInfo ({ errors, register }:Props) {
  return (
        <div>
            <h2 className="font-bold text-xl" >Información de Facturación</h2>
            <article className="flex justify-between text-gray-500 text-sm py-2" >
                <p>Por favor ingrese su información de facturación</p>
                <p>Paso 1 de 5</p>
            </article>
            <div className="grid grid-cols-2 gap-8 grid-flow-row " >
                <Input error={!!errors.nombres} {...register('nombres')} type="text" label='Nombres' />
                <Input label='Apellidos' type="text" />
                <Input label='Email' />
                <Input error={!!errors.numTelefono} {...register('numTelefono')} label='Teléfono' type="number" />
                <Input error={!!errors.direccion} {...register('direccion')} label="Dirección" type="text" />
                <Input error={!!errors.distrito} {...register('distrito')} label="Distrito / Ciudad" type="text" />
                <Input error={!!errors.pais} {...register('pais')} label='País' type="text" />
                <Input error={!!errors.codigoPostal} {...register('codigoPostal')} label='ZIP/Código Postal' type="number" />

            </div>
        </div>
  )
}
