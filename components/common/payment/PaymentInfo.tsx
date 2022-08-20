import { HandlerChange } from '@/types/events'
import { ErrorForm, PaymentForm } from '@/types/forms'
import { Session } from 'next-auth'
import { Dispatch, SetStateAction } from 'react'
import { InputPayment } from '../inputs'
type Props={
    data:Session,
    form:PaymentForm,
    handleChange:HandlerChange,
    setForm:Dispatch<SetStateAction<PaymentForm>>
    error:ErrorForm<Omit<PaymentForm, 'arreglos' | 'total'>>
}
export function PaymentInfo ({ data, form, handleChange, error }:Props) {
  return (
        <div>
            <h2 className="font-bold text-xl" >Información de Facturación</h2>
            <article className="flex justify-between text-gray-500 text-sm py-2" >
                <p>Por favor ingrese su información de facturación</p>
                <p>Paso 1 de 5</p>
            </article>
            <div className="grid grid-cols-2 gap-8 grid-flow-row " >
                <div className='flex flex-col' >
                <InputPayment handleChange={handleChange} label="Nombres" name="nombres" type="text" value={form.nombres } />
                {error.nombres && <p className="text-red-500 text-xs" >{error.nombres}</p>}
                </div>
                <InputPayment handleChange={() => {}} label="Apellidos" name="lastname" type="text" value={data.user.nombre.split(' ').pop() as string} />
                <InputPayment handleChange={() => {}} label="Email" name="email" value={data.user.email} type="email"/>
                <div className='flex flex-col' >
                <InputPayment handleChange={handleChange} label="Teléfono" name="numTelefono" value={form.numTelefono} type="number"/>
                {error.numTelefono && <p className="text-red-500 text-xs" >{error.numTelefono}</p>}
                </div>
                <div className='flex flex-col' >
                <InputPayment handleChange={handleChange} label="Dirección" name="direccion" value={form.direccion} type="text"/>
                {error.direccion && <p className="text-red-500 text-xs" >{error.direccion}</p>}
                </div>
                <div className='flex flex-col' >
                <InputPayment handleChange={handleChange} label="Distrito / Ciudad" name="distrito" value={form.distrito} type="text"/>
                {error.distrito && <p className="text-red-500 text-xs" >{error.distrito}</p>}
                </div>
                <div className='flex flex-col' >
                <InputPayment handleChange={handleChange} label="País" name="pais" value={form.pais} type="text"/>
                {error.pais && <p className="text-red-500 text-xs" >{error.pais}</p>}
                </div>
                <div className='flex flex-col' >
                <InputPayment handleChange={handleChange} label="ZIP/Código Postal" name="codigoPostal" value={form.codigoPostal} type="number"/>
                {error.codigoPostal && <p className="text-red-500 text-xs" >{error.codigoPostal}</p>}
                </div>
            </div>
        </div>
  )
}
