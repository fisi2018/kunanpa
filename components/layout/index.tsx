import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout ({ children }:{children?:ReactNode}) {
  return (
        <section>
            <Header/>
            <main className='p-4' >
                {children}
            </main>
            <Footer/>
        </section>
  )
}
