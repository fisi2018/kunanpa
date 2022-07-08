import FormRegister from '../components/common/FormRegister'
import Layout from '../components/layout'

export default function Login () {
  return (
        <Layout >
            <section className='p-4 flex flex-col items-center' >
                <FormRegister/>
            </section>
        </Layout>
  )
}
