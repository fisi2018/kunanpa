import { getCategories } from '@/services/categories'
import { GetStaticProps } from 'next'

export default function AllFlowers() {
    return (
        <section>
            <h1>All Flowers</h1>
        </section>
    )
}
export const getStaticProps: GetStaticProps = async _ctx => {
    try {
        const categories = await getCategories()
        return {
            props: {
                categories
            }
        }
    } catch (e) {
        const error = e as Error
        return {
            props: {
                message: error.message
            }
        }
    }
}
