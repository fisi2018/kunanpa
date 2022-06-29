import { AppProps } from 'next/app'

export default function MyApp ({ Component, pageProps: { session, ...pageProps } }:AppProps) {
  return (
        <Component {...pageProps} />
  )
}
