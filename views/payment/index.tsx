import Layout from '@/components/layout'
import { Category, Route } from '@/types/models'
import type { Session } from 'next-auth'
import { useRouter } from 'next/router'
import { PaymentSection } from './components'

type Props = {
    data: Session
    categories: Category[]
}
export default function PaymentView({ categories, data }: Props) {
    const route = useRouter()
    const routes: Route[] = [
        {
            label: 'Inicio',
            path: '/'
        },
        {
            label: 'Pago',
            path: route.pathname
        }
    ]
    return (
        <Layout
            routes={routes}
            categories={categories}
            isValidating={false}
        >
            <section className="min-h-screen p-4">
                <PaymentSection data={data} />
            </section>
        </Layout>
    )
}
