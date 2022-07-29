import { HandlerChange } from '@/types/events'

type Props={
    name:string,
    type:string,
    handleChange:HandlerChange,
    value:string|number,
    label:string
}
export const InputOptional = ({ name, type, handleChange, value, label }:Props) => {
  return (
        <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor={name}>{label}</label>
                <input onChange={handleChange} value={value} className='rounded-lg w-60 border-gray-400' name={name} type={type} />
            </article>
  )
}
