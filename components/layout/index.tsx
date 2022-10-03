import { Category, Route } from '@/types/models'
import { Breadcrumbs } from '@material-tailwind/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
type Props={
  children?:ReactNode,
  categories:Category[],
  routes:Route[]
}
export default function Layout ({ children, categories, routes }:Props) {
  return (
        <section>
            <Header categories={categories} />
            <main className='p-8' >
              <Breadcrumbs>
              {
                routes.map((route, i) => (
                  <Link key={route.label + '-' + i} href={route.path}>
                  <a className='capitalize' >
                    {route.label}
                    </a></Link>
                ))
              }
              </Breadcrumbs>

                {children}
            </main>
            <Footer/>
        </section>
  )
}
