import { getCategories } from '@/services/categories'
import type { Category } from '@/types/models'
import PaymentView from '@/views/payment'
import type { GetServerSideProps } from 'next'
import type { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
type Props={
    data:Session,
    categories:Category[]
}
export default function Payment ({ data, categories }:Props) {
  return (
        <PaymentView categories={categories} data={data} />
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const data = await getSession({ req: ctx.req })
    if (!data) throw new Error('Debe iniciar sesión para poder acceder a esta sección')
    const categories = await getCategories()
    return {
      props: {
        data,
        categories
      }
    }
  } catch (e) {
    const error = e as Error
    return {
      props: {
        error: error.message
      },
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}
