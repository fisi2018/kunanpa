import { ChangeEvent, FormEvent } from 'react'

export type HandlerChange=(e:ChangeEvent<HTMLInputElement>)=>void
export type HandlerSubmit=(e:FormEvent<HTMLFormElement>)=>void
