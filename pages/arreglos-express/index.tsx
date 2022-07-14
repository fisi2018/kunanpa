import Categories from '../../components/common/Categories'
import NavAspectList from '../../components/common/NavAspectList'
import NavFilter from '../../components/common/NavFilter'
import Pricing from '../../components/common/Pricing'
import Raiting from '../../components/common/Rating'
import Seassons from '../../components/common/Seassons'
import Layout from '../../components/layout'

export default function ArreglosExpress () {
  return (
        <Layout >
            <section>
              <div className='flex pt-6 justify-between items-center' >
                <h1 className='font-bold text-3xl' >Arreglos Express</h1>
                <NavAspectList/>
              </div>
              <div className='py-6' >
                <NavFilter/>
              </div>
              <div className='grid gap-4 min-h-screen grid-cols-4 grid-rows-6' >
                <aside className='row-span-5  flex flex-col ' >
                  <ul className='flex flex-col ' >
                    <li >
                      <Categories/>
                    </li>
                    <li>
                      <Seassons/>
                    </li>
                    <li>
                      <Raiting/>
                    </li>
                    <li>
                      <Pricing/>
                    </li>
                  </ul>
                </aside>
                <div className='col-end-5 col-start-2 row-start-1 row-end-6 bg-red-200' >

                </div>
                <footer className='bg-blue-200 col-span-full ' ></footer>
              </div>
            </section>
        </Layout>
  )
}
