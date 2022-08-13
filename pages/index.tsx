import { createSpecialFlowersAdapter } from '@/adapters/flowers/specialFlower.adapter'
import { BlockSpecialCategory } from '@/components/common/BlockSpecialCategory'
import CarouselComments from '@/components/common/CarouselComments'
import { ListLinks } from '@/components/common/ListLinks'
import { RowSpecialProducts } from '@/components/common/RowSpecialProducts'
import { COMMENTS_DEMO } from '@/constants/static/comments'
import { getCategories } from '@/services/categories'
import { getSpecialFlowersByCategory } from '@/services/flowers'
import { Category } from '@/types/models'
import { SpecialFlowersResponse } from '@/types/responses'
import { GetStaticProps } from 'next'
import Layout from '../components/layout'
type Props={
  categories:Category[],
  clasicos:SpecialFlowersResponse,
  masVendidos:SpecialFlowersResponse,
  exclusivos:SpecialFlowersResponse,
}
export default function Home ({ categories, clasicos, masVendidos, exclusivos }:Props) {
  return (
    <Layout >
        <section className='min-h-screen p-4 grid grid-cols-8 gap-y-16 auto-rows-auto ' >
          <div className='flex col-span-2 '>
            <ListLinks name="categorias" items={categories.map((el) => (
              { href: '/' + el.name.toLowerCase().replaceAll(' ', '-') + '-' + el._id + '/', label: el.name }
            ))} title='Categorías' />
          </div>
            <div className='flex p-2 col-start-3 col-end-6 ' >
            <BlockSpecialCategory href='/' title='Por el día de la madre' slogan='Para la mujer que te dio la vida' />
            </div>
            <div className='flex p-2 col-start-6 col-end-9 ' >
              <BlockSpecialCategory href='/' title='Por el día del padre' slogan='Rememora sus enseñanzas' />
            </div>
            <div className='flex col-span-2' >
            <ListLinks name="productos" items={categories.map((el) => (
              { href: '/' + el.name.toLowerCase().replaceAll(' ', '-') + '-' + el._id + '/', label: el.name }
            ))} title='Productos más vendidos' />
            </div>
            <div className='flex col-span-6' >
              <RowSpecialProducts nroProducts={3} products={createSpecialFlowersAdapter(masVendidos)} />
            </div>
            <div className='flex col-span-2' >
            <ListLinks name="productos" items={categories.map((el) => (
              { href: '/' + el.name.toLowerCase().replaceAll(' ', '-') + '-' + el._id + '/', label: el.name }
            ))} title='Arreglos exclusivos' />
            </div>
            <div className='flex col-span-6' >
              <RowSpecialProducts nroProducts={3} products={createSpecialFlowersAdapter(exclusivos)} />
            </div>
        </section>
        <section className='py-4 flex my-8' >
              <CarouselComments comments={COMMENTS_DEMO} />
        </section>
        <section className='flex flex-col' >
          <h2 className='font-bold text-lg mb-8' >Arreglos Clásicos</h2>
              <RowSpecialProducts nroProducts={4} products={createSpecialFlowersAdapter(clasicos)} />
        </section>
    </Layout>
  )
}
export const getStaticProps:GetStaticProps = async (_ctx) => {
  try {
    const [categories, masVendidos, exclusivos, clasicos] = await Promise.all([getCategories(), getSpecialFlowersByCategory(1), getSpecialFlowersByCategory(2), getSpecialFlowersByCategory(3)])

    return {
      props: {
        categories,
        masVendidos,
        clasicos,
        exclusivos
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      }
    }
  }
}
