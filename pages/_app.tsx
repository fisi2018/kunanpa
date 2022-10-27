import { store } from '@/stateManagement/redux/store'
import { ThemeProvider } from '@material-tailwind/react'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../styles/globals.css'
function MyApp({
    Component,
    pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) {
    return (
        <SessionProvider session={session}>
            <ThemeProvider>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        </SessionProvider>
    )
}
export default MyApp
