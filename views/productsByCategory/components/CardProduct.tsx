import type { Flower } from '@/types/models'
import Image from 'next/image'
import Link from 'next/link'
import { BsStarFill } from 'react-icons/bs'
import { MdKeyboardArrowRight } from 'react-icons/md'
import AddToWishListButton from './AddToWishListButton'
type Props={
  flower:Flower
}
export default function CardProduct ({ flower }:Props) {
  return (
        <div className='flex border border-gray-400 rounded-lg overflow-hidden items-center mb-8' >
                      <figure>
                        <Image width={200} height={200} src={flower.img} />
                      </figure>
                      <div className='flex justify-between flex-1 p-8' >
                      <div className='flex flex-col justify-between ' >
                        <div className='flex flex-col pb-4' >
                        <p className='text-xl font-bold max-w-xs ' >{flower.nombre}</p>
                        <p className='text-sm my-2 max-w-sm' >{flower.descripcion}</p>
                        <div className='flex' >
                          <span className='flex text-black mr-2' >
                          <BsStarFill/>
                          </span>
                          <span className='flex text-black mr-2' >
                          <BsStarFill/>
                          </span>
                          <span className='flex text-black mr-2 ' >
                          <BsStarFill/>
                          </span>
                          <span className='flex text-black' >
                          <BsStarFill/>
                          </span>
                        </div>
                        </div>
                        <ul className='text-gray-400 flex-1 flex flex-col justify-around' >
                          <li className='flex' >
                            <label htmlFor={flower._id + '-frescura'}>Frescura</label>
                            <p id={flower._id + '-frescura'} ><em className='text-red-700 ml-8 ' >New</em>(Aromáticas)</p>
                          </li>
                          <li className='flex' >
                            <label htmlFor={flower._id + '-tienda'}>Tienda</label>
                            <p className='ml-8' id={flower._id + '-tienda'} >Grocery Tarm Fields</p>
                          </li>
                          <li className='flex' >
                            <label htmlFor={flower._id + '-delivery'}>Delivery</label>
                            <p className='ml-8' id={flower._id + '-delivery'} >Toda la ciudad</p>
                          </li>
                          <li className='flex' >
                            <label htmlFor={flower._id + '-stock'}>Stock</label>
                            <p className='text-red-700 ml-8' id={flower._id + '-stock'} >{flower.stock}pcs</p>
                          </li>
                        </ul>
                      </div>
                      <div className='flex flex-col justify-between' >
                        <div className='flex flex-col' >
                        <p className='font-bold text-xl' >{flower.precioFinal.toFixed(2)} PEN</p>
                        <p className='line-through text-gray-400' >{flower.precioInicial.toFixed(2)} PEN</p>
                        </div>
                        <div className='flex flex-col text-gray-400' >
                          <p className='font-bold' >Free Shipping</p>
                          <p>Delivery in 1 day</p>
                        </div>
                        <div className='flex flex-col' >
                          <Link href={`/flores/${flower._id}`} >
                          <a className='bg-theme-a text-white font-bold p-2 rounded-lg flex items-center justify-around' >
                            Ver Detalles <span className='text-2xl flex' ><MdKeyboardArrowRight/></span>
                          </a>
                          </Link>
                          <div className='flex justify-center mt-2' >
                          <AddToWishListButton idFlor={flower._id} />
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
  )
}
