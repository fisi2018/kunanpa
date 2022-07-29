import { getCategories } from '@/services/categories'
import { getFlowersByCategory } from '@/services/flowers'
import { GetStaticPaths, GetStaticProps } from 'next'
import { createTitleAdapter } from '../../adapters'
import ListProducts from '../../components/common/ListProducts'
import Layout from '../../components/layout'
import { ResponseFlowers } from '../../types/models'
type Props={
    flowers:ResponseFlowers,
    category:string,
    id:string
}
export default function CategoryProducts ({ flowers, category, id }:Props) {
  return (
        <Layout>
            <section>
                <ListProducts id={id} category={category} flowers={flowers} />
            </section>
        </Layout>
  )
}
export const getStaticPaths:GetStaticPaths = async () => {
  const categories = await getCategories()
  const paths = categories.data.map((flower) => ({
    params: {
      category: flower.nombre.toLowerCase().replaceAll(' ', '-') + '-' + flower.id
    }
  }))
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps:GetStaticProps = async (ctx) => {
  try {
    const { category } = ctx.params as {category:string}
    const flowers = await getFlowersByCategory(category.split('-').pop() as string)
    return {
      props: {
        category: createTitleAdapter(category),
        flowers,
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
