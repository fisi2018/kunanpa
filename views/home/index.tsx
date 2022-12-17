import Layout from '@/components/layout'
import { getCategories } from '@/services/categories'
import { getSpecialFlowersByCategory } from '@/services/flowers'
import { Route } from '@/types/models'
import { Alert } from '@material-tailwind/react'
import useSWR from 'swr'
import { createSpecialFlowersAdapter } from './adapters'
import {
    BlockSpecialCategory,
    CarouselComments,
    ListLinks,
    RowSpecialProducts
} from './components'
import { CardSpecialProductSkeleton } from './components/CardSpecialProduct/index.skeleton'
import { ListLinksSkeleton } from './components/ListLinks/index.skeleton'
import { COMMENTS_DEMO } from './constants'

const routes: Route[] = [
    {
        label: 'Inicio',
        path: '/'
    }
]
export default function HomeView() {
    const fetcher = async () => {
        try {
            const [categories, masVendidos, exclusivos, classics] =
                await Promise.all([
                    getCategories(),
                    getSpecialFlowersByCategory(1),
                    getSpecialFlowersByCategory(2),
                    getSpecialFlowersByCategory(3)
                ])
            return {
                categories,
                masVendidos: createSpecialFlowersAdapter(masVendidos),
                exclusivos: createSpecialFlowersAdapter(exclusivos),
                classics: createSpecialFlowersAdapter(classics)
            }
        } catch (e) {
            const error = e as Error
            throw Error(error.message)
        }
    }
    const { data, error, isValidating } = useSWR(
        '/home/specialFlowers',
        fetcher
    )
    return (
        <Layout
            categories={data?.categories || []}
            isValidating={isValidating}
            routes={routes}
        >
            {error && <Alert color="red">{error.message}</Alert>}
            <section className="min-h-screen p-4 grid grid-cols-8 gap-y-16  ">
                <div className="flex col-span-2 ">
                    {data ? (
                        <ListLinks
                            name="categorias"
                            items={data.categories.map(el => ({
                                href:
                                    '/' +
                                    el.name.toLowerCase().replaceAll(' ', '-') +
                                    '-' +
                                    el._id +
                                    '/',
                                label: el.name
                            }))}
                            title="Categorías"
                        />
                    ) : (
                        <ListLinksSkeleton />
                    )}
                </div>
                <div className="flex p-2 col-span-3  ">
                    <BlockSpecialCategory
                        href="/"
                        title="Por el día de la madre"
                        slogan="Para la mujer que te dio la vida"
                    />
                </div>
                <div className="flex p-2 col-span-3  ">
                    <BlockSpecialCategory
                        href="/"
                        title="Por el día del padre"
                        slogan="Rememora sus enseñanzas"
                    />
                </div>
                <div className="flex col-span-2">
                    {data ? (
                        <ListLinks
                            name="productos"
                            items={data.categories.map(el => ({
                                href:
                                    '/' +
                                    el.name.toLowerCase().replaceAll(' ', '-') +
                                    '-' +
                                    el._id +
                                    '/',
                                label: el.name
                            }))}
                            title="Productos más vendidos"
                        />
                    ) : (
                        <ListLinksSkeleton />
                    )}
                </div>
                <div className="flex col-span-6">
                    {data ? (
                        <RowSpecialProducts
                            nroProducts={3}
                            products={data?.masVendidos || []}
                        />
                    ) : (
                        <div className="w-full grid grid-cols-3 gap-4 ">
                            {[1, 2, 3].map((_el, i) => (
                                <CardSpecialProductSkeleton
                                    key={'mas vendidos' + '-' + i}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex col-span-2">
                    {data ? (
                        <ListLinks
                            name="productos"
                            items={data.categories.map(el => ({
                                href:
                                    '/' +
                                    el.name.toLowerCase().replaceAll(' ', '-') +
                                    '-' +
                                    el._id +
                                    '/',
                                label: el.name
                            }))}
                            title="Arreglos exclusivos"
                        />
                    ) : (
                        <ListLinksSkeleton />
                    )}
                </div>
                <div className="flex col-span-6">
                    <RowSpecialProducts
                        nroProducts={3}
                        products={data?.exclusivos || []}
                    />
                </div>
            </section>
            <section className="py-4 flex my-8">
                <CarouselComments comments={COMMENTS_DEMO} />
            </section>
            <section className="flex flex-col">
                <h2 className="font-bold text-lg mb-8">Arreglos Clásicos</h2>
                <RowSpecialProducts
                    nroProducts={4}
                    products={data?.classics || []}
                />
            </section>
        </Layout>
    )
}
