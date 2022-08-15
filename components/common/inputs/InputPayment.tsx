import { HandlerChange } from '@/types/events'

type Props={
    name:string,
    label:string,
    value:string|number,
    handleChange:HandlerChange,
    type:string
}
export function InputPayment ({ name, label, type, value, handleChange }:Props) {
  return (
        <article className='flex flex-col' >
            <label className='font-bold text-sm' htmlFor={name}>{label}</label>
            <input className='p-2 rounded-lg border border-gray-300' value={value} onChange={handleChange} name={name} type={type} />
        </article>
  )
}
