import { Category, Route } from '@/types/models'
import { Breadcrumbs } from '@material-tailwind/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
type Props = {
    children?: ReactNode
    routes: Route[]
    categories: Category[]
    isValidating: boolean
}
export default function Layout({
    children,
    routes,
    categories,
    isValidating
}: Props) {
    return (
        <section>
            <Header
                categories={categories}
                isValidating={isValidating}
            />
            <main className="p-8">
                <Breadcrumbs>
                    {routes.map((route, i) => (
                        <Link
                            key={route.label + '-' + i}
                            href={route.path}
                        >
                            <a className="capitalize">{route.label}</a>
                        </Link>
                    ))}
                </Breadcrumbs>

                {children}
            </main>
            <Footer />
        </section>
    )
}
