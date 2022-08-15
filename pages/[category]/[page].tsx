import { getCategoryFlowersByPage } from '@/services/flowers'
import { GetServerSideProps } from 'next'
import { createTitleAdapter } from '../../adapters'
import ListProducts from '../../components/common/ListProducts'
import Layout from '../../components/layout'
import { DataFlower } from '../../types/models'
type Props={
    data:DataFlower,
    category:string,
    id:string
}
export default function CategoryProductsByPage ({ category, id, data }:Props) {
  return (
       <Layout>
        <section>
            <ListProducts pages={data.pages} total={data.total} category={category} id={id} flowers={data.flowers} />
        </section>
       </Layout>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const { page, category } = ctx.params as {category:string, page:string}
    const data = await getCategoryFlowersByPage(page)
    return {
      props: {
        data,
        category: createTitleAdapter(category),
        id: category.split('-').pop()
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
