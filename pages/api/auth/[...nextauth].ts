import NextAuth, { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'
import FacebookProvider from 'next-auth/providers/facebook'
import { FACEBOOK_ID, FACEBOOK_SECRET, GOOGLE_ID, GOOGLE_SECRET, TWITTER_ID, TWITTER_SECRET } from '../../../config'
import { ResponseLogin } from '../../../types/fetcher'
import { login } from '@/services/auth'
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET
    }),
    TwitterProvider({
      clientId: TWITTER_ID,
      clientSecret: TWITTER_SECRET,
      version: '2.0'
    }),
    FacebookProvider({
      clientId: FACEBOOK_ID,
      clientSecret: FACEBOOK_SECRET
    }),
    Credentials({
      name: 'credentials',
      type: 'credentials',
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      async authorize (credentials) {
        try {
          console.log('credentials', credentials)
          if (credentials == null) throw new Error('No se proporcionó las credenciales')
          const { email, password } = credentials
          const { token, user } = await login({ email, password }) as ResponseLogin
          return {
            token,
            email: user.email,
            avatar: user.avatar,
            nombre: user.nombre,
            dni: user.dni,
            id: user.id,
            direccion: user.direccion
          }
        } catch (err) {
          const error = err as Error
          throw new Error(error.message)
        }
      }
    })

    // ...add more providers here
  ],
  callbacks: {
    async jwt ({ user, token, account }) {
      if (user && account) {
        if (account.provider === 'credentials') {
          return {
            ...token,
            ...user,
            provider: 'credentials',
            accessToken: user.token
          }
        }
        return {
          nombre: token.name,
          email: token.email,
          avatar: token.picture,
          id: token.sub ? parseInt(token.sub) : token.sub
        }
      }
      return token
    },
    async session ({ session, token }) {
      const payload = token as {accessToken:string, provider?:string, id:number, direccion:string|null, dni:number|null, nombre:string, avatar:string, email:string}
      session.accessToken = payload.accessToken
      session.user = {
        ...session.user,
        id: payload.id,
        dni: payload.dni,
        direccion: payload.direccion,
        nombre: payload.nombre,
        email: payload.email,
        provider: payload.provider ? payload.provider : '',
        avatar: payload.avatar
      }
      console.log('session ', session)
      return session
    }
  }
}

export default NextAuth(authOptions)
