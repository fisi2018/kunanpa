import Layout from '@/components/layout'
import { getCategories } from '@/services/categories'
import { getFlowerById } from '@/services/flowers'
import { Route } from '@/types/models'
import { ProductDetailsSection } from '@/views/productDetails/components/ProductDetailsSection'
import { Alert } from '@material-tailwind/react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { ProductDetailsSectionSkeleton } from './components/ProductDetailsSection/index.skeleton'

type Props = {
    idProduct: string
}
export default function ProductDetailsView({ idProduct }: Props) {
    const route = useRouter()
    const fetcher = async () => {
        try {
            const [categories, flower] = await Promise.all([
                getCategories(),
                getFlowerById(idProduct)
            ])
            return {
                categories,
                flower
            }
        } catch (e) {
            const error = e as Error
            throw Error(error.message)
        }
    }
    const { data, isValidating, error } = useSWR(
        '/flowerById' + '/' + idProduct,
        fetcher
    )
    const routes: Route[] = [
        {
            label: 'Inicio',
            path: '/'
        },
        {
            label: data?.flower.nombre || '',
            path: route.asPath
        }
    ]
    return (
        <Layout
            routes={routes}
            categories={data?.categories || []}
            isValidating={isValidating}
        >
            {error && <Alert color="red">{error.message}</Alert>}
            {data ? (
                <ProductDetailsSection flower={data.flower} />
            ) : (
                <ProductDetailsSectionSkeleton />
            )}
        </Layout>
    )
}
