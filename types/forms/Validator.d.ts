import { ErrorForm } from '.'

export type ValidatorForm<Form, FormValidate> = (form:Form)=>ErrorForm<FormValidate>
