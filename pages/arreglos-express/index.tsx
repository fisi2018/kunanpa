import { GetStaticProps } from 'next'
import Layout from '../../components/layout'
import { ResponseFlowers } from '../../types/data'
import { getFlowers } from '../../utils/fetcher'
import ListProducts from '../../components/common/ListProducts'
type Props={
  error:string,
  flowers:ResponseFlowers|null
}
export default function ArreglosExpress ({ error, flowers }:Props) {
  return (
        <Layout >
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
export const getStaticProps:GetStaticProps = async (_ctx) => {
  try {
    const flowers = await getFlowers()
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
