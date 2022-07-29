import { getRouteLabels } from '@/utilities'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
type Props={
  children?:ReactNode
}
export default function Layout ({ children }:Props) {
  const { pathname } = useRouter()
  return (
        <section>
            <Header/>
            <main className='p-8' >
              <ul className='flex font-light capitalize ' >
                { pathname === '/'
                  ? <li>
                  <Link href="/" >
                  <a className='font-semibold' >Inicio</a>
                  </Link>
                </li>
                  : getRouteLabels(pathname).map((el, i, array) => (
                  <li className='flex' key={`labels-${i}`} >
                    {i !== 0 && <p className='mx-4' >/</p>}
                    <Link href={el.href} >
                    <a className={i === array.length - 1 ? 'font-semibold' : 'font-light'} >{el.name}</a>
                    </Link>
                  </li>
                  ))}
              </ul>
                {children}
            </main>
            <Footer/>
        </section>
  )
}
