export { getSession, SessionProvider, signIn, signOut, useSession } from 'next-auth/react'
export const GOOGLE_ID = process.env.GOOGLE_ID as string
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET as string
export const TWITTER_ID = process.env.TWITTER_ID as string
export const TWITTER_SECRET = process.env.TWITTER_SECRET as string
export const API = process.env.API_URL as string
export const BASE = process.env.BASE_URL as string
