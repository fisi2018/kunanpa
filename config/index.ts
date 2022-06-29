export { getSession, SessionProvider, signIn, signOut, useSession } from 'next-auth/react'
export const GOOGLE_ID = process.env.GOOGLE_ID as string
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET as string
