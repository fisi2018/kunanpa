import { Dispatch, SetStateAction } from 'react'
import { HandlerChange } from '../events'
import { ErrorForm, ValidatorForm } from '../forms'

export type HookForm=<TypeForm, TypeValidationForm>(form:TypeForm, validation:ValidatorForm<TypeForm, TypeValidationForm>)=>{form:TypeForm, setForm:Dispatch<SetStateAction<TypeForm>>, loading:boolean, setLoading:Dispatch<SetStateAction<boolean>>, handleChange:HandlerChange, error:ErrorForm<TypeValidationForm>}
