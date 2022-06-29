import { AppProps } from 'next/app'
import { SessionProvider } from '../config'
import '../styles/globals.css'
export default function MyApp ({ Component, pageProps: { session, ...pageProps } }:AppProps) {
  return (
    <SessionProvider session={session} >
        <Component {...pageProps} />
    </SessionProvider>
  )
}
