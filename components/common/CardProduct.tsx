import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsStarFill } from 'react-icons/bs'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Flower } from '../../types/models'

export default function CardProduct ({ flower }:{flower:Flower}) {
  return (
        <div className='flex border border-gray-400 rounded-lg overflow-hidden items-center mb-8' >
                      <figcaption>
                        <Image width={200} height={200} src={flower.urlimagen} />
                      </figcaption>
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
                            <label htmlFor={flower.id + '-frescura'}>Frescura</label>
                            <p id={flower.id + '-frescura'} ><em className='text-red-700 ml-8 ' >New</em>(Aromáticas)</p>
                          </li>
                          <li className='flex' >
                            <label htmlFor={flower.id + '-tienda'}>Tienda</label>
                            <p className='ml-8' id={flower.id + '-tienda'} >Grocery Tarm Fields</p>
                          </li>
                          <li className='flex' >
                            <label htmlFor={flower.id + '-delivery'}>Delivery</label>
                            <p className='ml-8' id={flower.id + '-delivery'} >Toda la ciudad</p>
                          </li>
                          <li className='flex' >
                            <label htmlFor={flower.id + '-stock'}>Stock</label>
                            <p className='text-red-700 ml-8' id={flower.id + '-stock'} >{flower.stock}pcs</p>
                          </li>
                        </ul>
                      </div>
                      <div className='flex flex-col justify-between' >
                        <div className='flex flex-col' >
                        <p className='font-bold text-xl' >{flower.precioFinal} PEN</p>
                        <p className='line-through text-gray-400' >{flower.precioInicial}</p>
                        </div>
                        <div className='flex flex-col text-gray-400' >
                          <p className='font-bold' >Free Shipping</p>
                          <p>Delivery in 1 day</p>
                        </div>
                        <div className='flex flex-col' >
                          <button className='bg-theme-a text-white font-bold p-2 rounded-lg flex items-center justify-around' >Ver Detalles <span className='text-2xl flex' ><MdKeyboardArrowRight/></span></button>
                          <button className='bg-gray-100 font-bold flex items-center p-1 mt-4 rounded-lg' > <span className='mr-2' ><AiOutlineHeart /></span> Lista de Deseos</button>
                        </div>
                      </div>
                      </div>
                    </div>
  )
}
