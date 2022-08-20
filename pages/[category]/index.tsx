import { getCategories } from '@/services/categories'
import { getFlowersByCategory } from '@/services/flowers'
import { DataFlower } from '@/types/models'
import { GetStaticPaths, GetStaticProps } from 'next'
import { createTitleAdapter } from '../../adapters'
import ListProducts from '../../components/common/ListProducts'
import Layout from '../../components/layout'
type Props={
    data:DataFlower,
    category:string,
    id:string
}
export default function CategoryProducts ({ data, category, id }:Props) {
  return (
        <Layout>
            <section>
                <ListProducts id={id} category={category} pages={data.pages} total={data.total} flowers={data.flowers} />
            </section>
        </Layout>
  )
}
export const getStaticPaths:GetStaticPaths = async () => {
  const categories = await getCategories()
  const paths = categories.map((category) => ({
    params: {
      category: category.name.toLowerCase().replaceAll(' ', '-') + '-' + category._id
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
    const data = await getFlowersByCategory(category.split('-').pop() as string)
    return {
      props: {
        category: createTitleAdapter(category),
        data,
        id: category.split('-').pop()
      },
      revalidate: 10
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      },
      revalidate: 10
    }
  }
}
