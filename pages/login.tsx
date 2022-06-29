import FormLogin from '../components/common/FormLogin'
import Layout from '../components/layout'

export default function Login () {
  return (
        <Layout >
            <section className='min-h-screen p-4 flex flex-col items-center' >
                <FormLogin/>
            </section>
        </Layout>
  )
}
