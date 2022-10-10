import { getCategories } from '@/services/categories'
import { getSpecialFlowersByCategory } from '@/services/flowers'
import { Category } from '@/types/models'
import { SpecialFlowersResponse } from '@/types/responses'
import HomeView from '@/views/home'
import { GetStaticProps } from 'next'
type Props={
  categories:Category[],
  classics:SpecialFlowersResponse,
  masVendidos:SpecialFlowersResponse,
  exclusivos:SpecialFlowersResponse,
}
export default function Home ({ categories, classics, masVendidos, exclusivos }:Props) {
  return (
    <HomeView categories={categories} classics={classics} exclusivos={exclusivos} masVendidos={masVendidos} />
  )
}
export const getStaticProps:GetStaticProps = async (_ctx) => {
  try {
    const [categories, masVendidos, exclusivos, classics] = await Promise.all([getCategories(), getSpecialFlowersByCategory(1), getSpecialFlowersByCategory(2), getSpecialFlowersByCategory(3)])

    return {
      props: {
        categories,
        masVendidos,
        classics,
        exclusivos
      },
      revalidate: 10
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
