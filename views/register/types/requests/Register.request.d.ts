import { IFormRegister } from '../forms'

export type RegisterRequest=Omit<IFormRegister, 'terms'| 'repeatPassword'>
