import { createTitleAdapter } from '@/adapters'
import Layout from '@/components/layout'
import { getCategories } from '@/services/categories'
import { getCategoryFlowersByPage } from '@/services/flowers'
import { Route } from '@/types/models'
import { Alert } from '@material-tailwind/react'
import useSWR from 'swr'
import { ListProducts } from '../components'

type Props = {
    category: string
    page: string
}
export default function ProductsByPageView({ category, page }: Props) {
    const routes: Route[] = [
        {
            label: 'Inicio',
            path: '/'
        },
        {
            label: createTitleAdapter(category),
            path: category
        }
    ]
    const fetcher = async () => {
        try {
            const [categories, list] = await Promise.all([
                getCategories(),
                getCategoryFlowersByPage(page)
            ])
            return {
                categories,
                list
            }
        } catch (e) {
            const error = e as Error
            throw Error(error.message)
        }
    }
    const { data, isValidating, error } = useSWR(
        '/categoriesAndFlowers' + '/' + category + '/' + page,
        fetcher
    )
    return (
        <Layout
            routes={routes}
            categories={data?.categories || []}
            isValidating={isValidating}
        >
            {error && <Alert color="red">{error.message}</Alert>}
            <section>
                <ListProducts
                    pages={data?.list.pages || []}
                    total={data?.list.total || 0}
                    category={createTitleAdapter(category)}
                    id={category.split('-').pop() || ''}
                    flowers={data?.list.flowers || []}
                />
            </section>
        </Layout>
    )
}
