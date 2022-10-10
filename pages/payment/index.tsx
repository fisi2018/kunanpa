import { getCategories } from '@/services/categories'
import PaymentView from '@/views/payment'
import type { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

export default PaymentView
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
