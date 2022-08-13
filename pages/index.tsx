import { createSpecialFlowersAdapter } from '@/adapters/flowers/specialFlower.adapter'
import { BlockSpecialCategory } from '@/components/common/BlockSpecialCategory'
import { ListLinks } from '@/components/common/ListLinks'
import { RowSpecialProducts } from '@/components/common/RowSpecialProducts'
import { getCategories } from '@/services/categories'
import { getSpecialFlowersByCategory } from '@/services/flowers'
import { Category } from '@/types/models'
import { SpecialFlowersResponse } from '@/types/responses'
import { GetStaticProps } from 'next'
import Layout from '../components/layout'
type Props={
  categories:Category[],
  specialFlowersCategory1:SpecialFlowersResponse,
  specialFlowersCategory2:SpecialFlowersResponse
}
export default function Home ({ categories, specialFlowersCategory1, specialFlowersCategory2 }:Props) {
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
              <RowSpecialProducts products={createSpecialFlowersAdapter(specialFlowersCategory1)} />
            </div>
            <div className='flex col-span-2' >
            <ListLinks name="productos" items={categories.map((el) => (
              { href: '/' + el.name.toLowerCase().replaceAll(' ', '-') + '-' + el._id + '/', label: el.name }
            ))} title='Arreglos exclusivos' />
            </div>
            <div className='flex col-span-6' >
              <RowSpecialProducts products={createSpecialFlowersAdapter(specialFlowersCategory2)} />
            </div>
        </section>
    </Layout>
  )
}
export const getStaticProps:GetStaticProps = async (_ctx) => {
  try {
    const [categories, specialFlowersCategory1, specialFlowersCategory2] = await Promise.all([getCategories(), getSpecialFlowersByCategory(1), getSpecialFlowersByCategory(2)])

    return {
      props: {
        categories,
        specialFlowersCategory1,
        specialFlowersCategory2
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
