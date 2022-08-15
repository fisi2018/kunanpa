import { HandlerChange } from '@/types/events'

type Props={
    name:string,
    value:string,
    handleChange:HandlerChange,
    label:string,
    placeholder:string
}
export function InputTextAreaPayment ({ name, placeholder, value, label, handleChange }:Props) {
  return (
        <article className='flex flex-col mt-2' >
            <label className='font-bold text-sm' htmlFor={name}>{label}</label>
            <textarea placeholder={placeholder} className='p-2 resize-none my-2 rounded-lg border border-gray-300' value={value} onChange={handleChange} name={name} >
            </textarea>
        </article>
  )
}
