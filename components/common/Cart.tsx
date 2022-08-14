import { addOneSameProduct, clearCart, hideCart, removeAllSameProducts, removeOneProduct, selectCart, showCart } from '@/stateManagement/redux/slices'
import Image from 'next/image'
import { BiShoppingBag } from 'react-icons/bi'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'

export function Cart () {
  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    cart.active ? dispatch(hideCart()) : dispatch(showCart())
  }
  return (
    <div className='relative' >
        <button onClick={handleClick} className='flex relative p-2' >
                <span className='flex justify-center items-center' >
                     <BiShoppingBag/>
                </span>
                <span className=' absolute top-0 right-0 rounded-full block w-4 h-4 text-xs bg-gray-600 font-bold text-white' >
                    {cart.totalQuantity}
                </span>
        </button>
        <aside className={` ${cart.active ? 'max-h-auto py-4 ' : 'max-h-0'}  transition-all overflow-hidden duration-300 ease-in-out absolute px-2 top-full rounded-lg shadow-lg right-0 min-w-[20rem] bg-white text-gray-700 flex`} >
            <ul className='flex flex-col w-full' >
                {
                    cart.products.map((product) => (
                        <li className='flex w-full justify-between items-center text-sm' key={product._id} >
                            <figure>
                            <Image width={64} height={64} alt={product.name} src={product.img} />
                            </figure>
                            <article className='flex flex-col' >
                            <p className='font-bold' >{product.name}</p>
                            <div className='flex items-center' >
                                {product.quantity > 1 && <span onClick={() => dispatch(removeOneProduct(product._id))} className='bg-red-700 cursor-pointer flex text-white font-bold px-1 rounded-full' >-</span> }
                            <p>{product.quantity}</p>
                            <span onClick={() => dispatch(addOneSameProduct(product._id))} className='bg-red-700 cursor-pointer text-white rounded-full px-1 flex items-center justify-center font-bold ' >+</span>

                            </div>
                            <p>{product.price.toFixed(2)} PEN</p>
                            </article>
                            <article className='flex justify-center items-center' >
                                <button onClick={() => dispatch(removeAllSameProducts(product._id))} className='bg-red-700 text-white p-1 font-bold rounded-lg' >Remover</button>
                            </article>
                        </li>
                    ))
                }
                <li>
                    <p className='text-sm' >Total: {cart.totalPrice}</p>
                </li>
                <li>
                    <p className='text-sm' >Cantidad: {cart.totalQuantity}</p>
                </li>
                <li>
                    <button onClick={() => dispatch(clearCart())} className='bg-red-700 text-sm text-white font-bold rounded-lg p-2' >Limpiar carrito</button>
                </li>
            </ul>
        </aside>
    </div>
  )
}
