import { createTitleAdapter } from '@/adapters'
import Layout from '@/components/layout'
import { getCategories } from '@/services/categories'
import { getFlowersByCategory } from '@/services/flowers'
import { Route } from '@/types/models'
import ListProducts from '@/views/productsByCategory/components/ListProducts'
import { Alert } from '@material-tailwind/react'
import useSWR from 'swr'
import { CardProductSkeleton } from './components/CardProduct/index.skeleton'

interface Props {
    category: string
}

export default function ProductsByCategoryView({ category }: Props) {
    const routes: Route[] = [
        {
            label: 'Inicio',
            path: '/'
        },
        {
            label: createTitleAdapter(category),
            path: '/' + category
        }
    ]
    console.log('route', category)
    const fetcher = async () => {
        try {
            const [categories, flowers] = await Promise.all([
                getCategories(),
                getFlowersByCategory(category.split('-').pop() as string)
            ])
            return {
                categories,
                flowers
            }
        } catch (e) {
            const error = e as Error
            throw Error(error.message)
        }
    }
    const { data, isValidating, error } = useSWR(
        '/categoriesAndFlowers' + '/' + category,
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
                {data ? (
                    <ListProducts
                        id={category.split('-').pop() as string}
                        category={
                            data.categories.find(
                                el =>
                                    el._id.toString() ===
                                    category.split('-').pop()
                            )?.name || ''
                        }
                        pages={data.flowers.pages}
                        total={data.flowers.total}
                        flowers={data.flowers.flowers}
                    />
                ) : (
                    <div className="grid grid-cols-1 gap-4 w-full">
                        {[1, 2, 3].map((_el, i) => (
                            <CardProductSkeleton key={'products' + '-' + i} />
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    )
}
