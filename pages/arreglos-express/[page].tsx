import { GetServerSideProps } from 'next'
import ListProducts from '../../components/common/ListProducts'
import Layout from '../../components/layout'
import { ResponseFlowers } from '../../types/data'
import { getFlowersPage } from '../../utils/fetcher'
type Props={
    flowers:ResponseFlowers|null,
    error:string
}
export default function ArreglosExpressPage ({ flowers, error }:Props) {
  return (
        <Layout>
            <section>
                {
                    flowers
                      ? <ListProducts flowers={flowers} />
                      : <p>{error}</p>
                }
            </section>
        </Layout>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const { page } = ctx.params as {page:string}
    const flowers = await getFlowersPage(page)
    return {
      props: {
        flowers
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
