import { getCategories } from '@/services/categories'
import { Category } from '@/types/models'
import LoginView from '@/views/login'
import { GetStaticProps } from 'next'
type Props={
  categories:Category[]
}

export default function Login ({ categories }:Props) {
  return (
        <LoginView categories={categories} />
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
