import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'
import { GOOGLE_ID, GOOGLE_SECRET, TWITTER_ID, TWITTER_SECRET } from '../../../config'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET
    }),
    TwitterProvider({
      clientId: TWITTER_ID,
      clientSecret: TWITTER_SECRET,
      version: '2.0'
    })

    // ...add more providers here
  ]
})
