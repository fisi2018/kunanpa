import Profile from '@/views/profile/root'
import { getUserById } from '@/views/profile/root/services'
import { GetServerSideProps } from 'next'
// eslint-disable-next-line camelcase
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'
export default Profile
export const getServerSideProps: GetServerSideProps = async ctx => {
    try {
        const session = await unstable_getServerSession(
            ctx.req,
            ctx.res,
            authOptions
        )
        if (!session)
            throw new Error('Debes iniciar sesión para acceder a este recurso')
        const userById = await getUserById(
            { id: session.user.id.toString() },
            session.accessToken
        )
        return {
            props: {
                userById
            }
        }
    } catch (e) {
        const error = e as Error
        return {
            props: {
                message: error.message
            },
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
}
/* export const getStaticProps: GetStaticProps = async (_ctx) => {
  try {
    const categories = await getCategories()
    // get props from session
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
*/
