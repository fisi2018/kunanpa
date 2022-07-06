import { Dispatch, SetStateAction } from 'react'
import { HandlerChange } from '../events'

export type HookForm=<TypeForm>(form:TypeForm)=>{form:TypeForm, setForm:Dispatch<SetStateAction<TypeForm>>, loading:boolean, setLoading:Dispatch<SetStateAction<boolean>>, handleChange:HandlerChange}
