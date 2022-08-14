import { store } from '@/stateManagement/redux/store'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { SessionProvider } from '../config'
import '../styles/globals.css'
export default function MyApp ({ Component, pageProps: { session, ...pageProps } }:AppProps) {
  return (
    <SessionProvider session={session} >
      <Provider store={store} >
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
