export type FormLoginType={
    email:string,
    password:string
}
export type FormRegisterType={
    email:string,
    password:string,
    nombre:string,
    dni:number,
    direccion:string,
    terms:boolean,
    repeatPassword:string
}
// eslint-disable-next-line no-unused-vars
export type ErrorForm<Form> = {[Property in keyof Form]:string}
export type ValidatorForm<Form, FormValidate> = (form:Form)=>ErrorForm<FormValidate>
