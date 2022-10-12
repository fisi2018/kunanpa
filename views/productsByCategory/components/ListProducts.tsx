import NavAspectList from '@/components/common/NavAspectList'
import { Flower, FlowerPage } from '@/types/models'
import { Typography } from '@material-tailwind/react'
import AsideProducts from './AsideProducts'
import CardProduct from './CardProduct'
import FooterProducts from './FooterProducts'
import NavFilter from './NavFilter'
type Props={
  flowers:Flower[],
  pages:FlowerPage[],
  total:number,
  category:string,
  id:string
}
export default function ListProducts ({ flowers, total, category, id, pages }:Props) {
  return (
        <>
        <div className='flex pt-6 justify-between items-center' >
                <Typography variant="h2" className='capitalize ' >{category}</Typography>
                <NavAspectList total={total} />
              </div>
              <div className='py-6' >
                <NavFilter/>
              </div>
              <div className='mt-8 grid gap-4 min-h-screen grid-cols-4 grid-flow-row' >
                <AsideProducts/>
                <div className='col-end-5 col-start-2 row-start-1 row-end-6' >
                  {flowers.map((flower) => (
                    <CardProduct key={flower._id} flower={flower} />
                  ))
                  }
                </div>
                <FooterProducts total={total} category={category} id={id} flowerPages={pages} />
              </div>
        </>
  )
}
