import { getCategories } from '@/services/categories'
import { Category } from '@/types/models'
import RegisterView from '@/views/register'
import { GetStaticProps } from 'next'
type Props={
  categories:Category[]
}

export default function Register ({ categories }:Props) {
  return (
        <RegisterView categories={categories} />
  )
}
export const getStaticProps:GetStaticProps = async (_ctx) => {
  try {
    const categories = await getCategories()
    return {
      props: {
        categories
      }
    }
  } catch (e) {
    const error = e as Error
    return {
      props: {
        message: error.message
      }
    }
  }
}
