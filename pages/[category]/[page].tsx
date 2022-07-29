import { getFlowersPage } from '@/services/flowers'
import { GetServerSideProps } from 'next'
import { createTitleAdapter } from '../../adapters'
import ListProducts from '../../components/common/ListProducts'
import Layout from '../../components/layout'
import { ResponseFlowers } from '../../types/models'
type Props={
    flowers:ResponseFlowers,
    category:string,
    id:string
}
export default function CategoryProductsByPage ({ category, id, flowers }:Props) {
  return (
       <Layout>
        <section>
            <ListProducts category={category} id={id} flowers={flowers} />
        </section>
       </Layout>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const { page, category } = ctx.params as {category:string, page:string}
    const flowers = await getFlowersPage(page)
    return {
      props: {
        flowers,
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
