import { PaymentSection } from '@/components/common/payment'
import Layout from '@/components/layout'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
type Props={
    data:Session
}
export default function Payment ({ data }:Props) {
  return (
        <Layout>
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
    return {
      props: {
        data
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
