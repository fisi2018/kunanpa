/* eslint-disable no-unused-vars */
import NextAuth from 'next-auth'
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      nombre:string,
      email:string,
      provider:string|null,
      dni:number|null,
      id:number,
      direccion:string|null,
      avatar:string
    }
    accessToken:string
  }
  // eslint-disable-next-line no-unused-vars
  interface User {
    token:string,
    nombre:string,
    provider:string|null,
    id:number,
    email:string,
    dni:number|null,
    direccion:string|null,
    avatar:string
  }

}
