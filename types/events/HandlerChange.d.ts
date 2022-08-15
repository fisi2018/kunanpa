import { ChangeEvent } from 'react'

export type HandlerChange=(e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>)=>void
