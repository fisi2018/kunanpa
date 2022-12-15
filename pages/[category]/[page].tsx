import { GetServerSideProps } from 'next'
import ProductsByPageView from '@/views/productsByCategory/productsByPage'
export default ProductsByPageView
export const getServerSideProps: GetServerSideProps = async ctx => {
    try {
        const { page, category } = ctx.params as {
            category: string
            page: string
        }
        return {
            props: {
                category,
                page
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
