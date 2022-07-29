import { HandlerChange } from '@/types/events'

type Props={
    name:string,
    type:string,
    handleChange:HandlerChange,
    value:string|number,
    error:string,
    label:string
}
export const InputCommon = ({ name, type, handleChange, value, error, label }:Props) => {
  return (
        <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor={name}>{label}</label>
                <input onChange={handleChange} value={value} className='rounded-lg w-60 border-gray-400' name={name} type={type} />
                {error && <p className='text-red-500 font-light text-sm' >{error}</p> }
            </article>
  )
}
