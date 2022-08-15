import { FlowerDetails } from '@/types/models'
import { BsStarFill } from 'react-icons/bs'
import ContainerPricingFlower from './ContainerPricingFlower'
import GroupImages from './GroupImages'
import ListDetailsFlower from './ListDetailsFlower'
import NavActionsFlower from './NavActionsFlower'
import TabFlowerSection from './TabFlowerSection'
type Props={
    flower:FlowerDetails
}
export default function ProductDetailsSection ({ flower }:Props) {
  return (
       <section className='flex py-8' >
                <div>
                  <GroupImages idProduct={flower._id} dscto={flower.dscto} imgs={flower.imgs} />
                </div>
                <div className='flex flex-col px-8' >
                    <h1 className='font-bold text-3xl ' >{flower.nombre}</h1>
                    <div className='flex items-center py-4 ' >
                      <ul className='text-yellow-500 flex' >
                        <li >
                          <BsStarFill/>
                        </li>
                        <li className='ml-2' >
                          <BsStarFill/>
                        </li>
                        <li className='ml-2' >
                          <BsStarFill/>
                        </li>
                        <li className='ml-2' >
                          <BsStarFill/>
                        </li>
                      </ul>
                      <p className='text-gray-500 underline ml-4' >(1 customer review)</p>
                    </div>
                    <p>
                      {flower.descripcion}
                    </p>
                    <p>
                      {flower.detalles}
                    </p>
                    <ListDetailsFlower categories={flower.categorias} idFlower={flower._id} stock={flower.stock} />
                    <ContainerPricingFlower producto={flower} precioFinal={flower.precioFinal} precioInicial={flower.precioInicial} />
                    <NavActionsFlower/>
                    <TabFlowerSection contenido={flower.descripcion} origen={flower.detalles} />
                </div>
            </section>
  )
}
