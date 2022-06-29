import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import TwitterProvider from 'next-auth/providers/twitter'
// import { GOOGLE_ID, GOOGLE_SECRET } from '../../../config'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '952782410899-5udrlamp23ma4r5f2g1s8ulr2junmvve.apps.googleusercontent.com',
      clientSecret: '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'
    }),
    GithubProvider({
      clientId: '98ab2eb8751376b911a5',
      clientSecret: 'a5b038ed302436da13d468f880406c0b1d05d307'
    }),
    TwitterProvider({
      clientId: 'Szc5amM3OU1GLXBwQmFXRS1rbHc6MTpjaQ',
      clientSecret: 'R2BkNxKyQy9B_05hjbhyGd53pVQ6thh0l_JDbF74YjWJuSN-9y',
      version: '2.0'
    })

    // ...add more providers here
  ]
})
