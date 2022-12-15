import ProductsByCategoryView from '@/views/productsByCategory'
import { GetServerSideProps } from 'next'

export default ProductsByCategoryView

export const getServerSideProps: GetServerSideProps = async ctx => {
    try {
        const { category } = ctx.params as { category: string }
        return {
            props: {
                category
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
