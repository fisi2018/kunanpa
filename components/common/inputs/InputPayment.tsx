import { HandlerChange } from '@/types/events'

type Props={
    name:string,
    label:string,
    value:string|number,
    handleChange:HandlerChange,
    type:string,
    max?:number,
}
export function InputPayment ({ name, label, type, value, handleChange, max }:Props) {
  return (
        <article className='flex flex-col' >
            <label className='font-bold text-sm' htmlFor={name}>{label}</label>
            <input maxLength={max} className='p-2 rounded-lg border border-gray-300' value={value} onChange={handleChange} name={name} type={type} />
        </article>
  )
}
