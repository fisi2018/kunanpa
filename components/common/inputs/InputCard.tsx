import { HandlerChange } from '@/types/events'

type Props={
    name:string,
    label:string,
    value:string,
    handleChange:HandlerChange,
}
export function InputCard ({ name, label, handleChange, value }:Props) {
  return (
            <article className="flex flex-col" >
                <label className="font-bold text-sm" htmlFor={name}>{label}</label>
                <input className="p-2 rounded-lg border border-gray-300" value={value} maxLength={19} onChange={handleChange} type="text" name={name} />
            </article>
  )
}
