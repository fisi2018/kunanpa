import { AppProps } from 'next/app'
import { SessionProvider } from '../config'
export default function MyApp ({ Component, pageProps: { session, ...pageProps } }:AppProps) {
  return (
    <SessionProvider session={session} >
        <Component {...pageProps} />
    </SessionProvider>
  )
}
