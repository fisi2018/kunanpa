import ProductDetailsView from '@/views/productDetails'
import { GetServerSideProps } from 'next'
export default ProductDetailsView

export const getServerSideProps: GetServerSideProps = async ctx => {
    try {
        const { idProduct } = ctx.params as { idProduct: string }
        return {
            props: {
                idProduct
            }
        }
    } catch (e) {
        const error = e as Error
        return {
            props: {
                error: error.message
            }
        }
    }
}
