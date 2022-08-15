import { HandlerChange } from '@/types/events'
import { PaymentForm } from '@/types/forms'
import { Session } from 'next-auth'
import { Dispatch, SetStateAction } from 'react'
import { InputPayment } from '../inputs'
type Props={
    data:Session,
    form:PaymentForm,
    handleChange:HandlerChange,
    setForm:Dispatch<SetStateAction<PaymentForm>>
}
export function PaymentInfo ({ data, form, handleChange }:Props) {
  return (
        <div>
            <h2 className="font-bold text-xl" >Información de Facturación</h2>
            <article className="flex justify-between text-gray-500 text-sm py-2" >
                <p>Por favor ingrese su información de facturación</p>
                <p>Paso 1 de 5</p>
            </article>
            <div className="grid grid-cols-2 gap-8 grid-flow-row " >
                <InputPayment handleChange={handleChange} label="Nombres" name="nombres" type="text" value={form.nombres } />
                <InputPayment handleChange={() => {}} label="Apellidos" name="lastname" type="text" value={data.user.nombre.split(' ').pop() as string} />
                <InputPayment handleChange={() => {}} label="Email" name="email" value={data.user.email} type="email"/>
                <InputPayment handleChange={handleChange} label="Teléfono" name="numTelefono" value={form.numTelefono} type="number"/>
                <InputPayment handleChange={handleChange} label="Dirección" name="direccion" value={form.direccion} type="text"/>
                <InputPayment handleChange={handleChange} label="Distrito / Ciudad" name="distrito" value={form.distrito} type="text"/>
                <InputPayment handleChange={handleChange} label="País" name="pais" value={form.pais} type="text"/>
                <InputPayment handleChange={handleChange} label="ZIP/Código Postal" name="codigoPostal" value={form.codigoPostal} type="number"/>
            </div>
        </div>
  )
}
