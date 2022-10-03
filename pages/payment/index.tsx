import { PaymentSection } from '@/components/common/payment'
import Layout from '@/components/layout'
import { getCategories } from '@/services/categories'
import { Category, Route } from '@/types/models'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
type Props={
    data:Session,
    categories:Category[]
}
export default function Payment ({ data, categories }:Props) {
  const route = useRouter()
  const routes:Route[] = [{
    label: 'Inicio',
    path: '/'
  }, {
    label: 'Pago',
    path: route.pathname
  }]
  return (
        <Layout routes={routes} categories={categories} >
            <section className="min-h-screen p-4" >
                <PaymentSection data={data} />
            </section>
        </Layout>
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
