import { removeAllSameProducts } from '@/stateManagement/redux/slices'
import { ProductState } from '@/types/redux'
import Image from 'next/image'
import { BiHeart, BiStar } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { MdCompare } from 'react-icons/md'
import { useAppDispatch } from '../hooks/useAppDispatch'

type Props={
    producto:ProductState
}
export function CardPedido ({ producto }:Props) {
  const dispatch = useAppDispatch()
  return (
        <div className='grid grid-cols-4 gap-2 grid-flow-row p-2' >
            <div className='row-span-3 flex flex-col justify-between ' >
                <figure>
                    <Image width={128} height={128} src={producto.img} alt={producto.name} />
                </figure>
                <ul className="text-gray-400 text-sm flex-1 flex flex-col justify-around" >
                    <li>
                        <button className="flex items-center " >
                            <span className="text-red-700 flex mr-2 justify-center items-center" >
                        <BiHeart/>
                            </span>
                        <p>Deseados</p>
                        </button>
                    </li>
                    <li>
                        <button className='flex items-center  ' >
                            <span className='flex justify-center mr-2 items-center text-red-700 ' >
                        <MdCompare/>
                            </span>
                        <p>Comparar</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => dispatch(removeAllSameProducts(producto._id))} className='flex items-center ' >
                            <span className='flex items-center mr-2 justify-center text-gray-600' >
                                <IoMdClose/>
                            </span>
                        <p>Remover</p>
                        </button>
                    </li>
                </ul>
            </div>
            <div className='row-span-2 col-span-2 flex justify-between flex-col ' >
                <h3 className='font-bold text-base' >{producto.name}</h3>
                <article className='flex ' >
                    <label className='text-gray-500 mr-2 text-sm' htmlFor={producto._id + '-' + producto.name}>Granja: </label>
                    <p className='text-sm' id={producto._id + '-' + producto.name} >Tharamis Farm</p>
                </article>
                <article className='flex' >
                    <label className='text-gray-500 text-sm mr-2' htmlFor={producto._id + '-' + producto.name}>Frescura</label>
                    <p className='text-sm' id={producto._id + '-' + producto.name} >8 días</p>
                </article>
                <ul className='flex text-sm' >
                    <li>
                        <BiStar/>
                    </li>
                    <li>
                        <BiStar/>
                    </li>
                    <li>
                        <BiStar/>
                    </li>
                    <li> <BiStar/></li>
                </ul>
            </div>
            <div className='row-span-3 flex text-sm justify-center items-center ' >
                <p className='font-bold' >{producto.quantity}</p>
            </div>
            <div className='flex col-span-2 flex-col justify-between '>
                <p className='font-bold text-red-700 text-lg' >{producto.price.toFixed(2)} PEN</p>
                <p className='line-through text-sm text-gray-400' >{producto.initialPrice.toFixed(2)} PEN</p>
            </div>
        </div>
  )
}
