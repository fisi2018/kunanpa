import { ResponseFlowers } from '../../types/data'
import AsideProducts from './AsideProducts'
import CardProduct from './CardProduct'
import FooterProducts from './FooterProducts'
import NavAspectList from './NavAspectList'
import NavFilter from './NavFilter'

export default function ListProducts ({ flowers }:{flowers:ResponseFlowers}) {
  return (
        <>
        <div className='flex pt-6 justify-between items-center' >
                <h1 className='font-bold text-3xl' >Arreglos Express</h1>
                <NavAspectList total={flowers.total} />
              </div>
              <div className='py-6' >
                <NavFilter/>
              </div>
              <div className='mt-8 grid gap-4 min-h-screen grid-cols-4 grid-flow-row' >
                <AsideProducts/>
                <div className='col-end-5 col-start-2 row-start-1 row-end-6' >
                  {flowers.data.map((flower) => (
                    <CardProduct key={flower.id} flower={flower} />
                  ))
                  }
                </div>
                <FooterProducts flowers={flowers} />
              </div>
        </>
  )
}
