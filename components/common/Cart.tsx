import { hideCart, selectCart, showCart } from '@/stateManagement/redux/slices'
import { IconButton } from '@material-tailwind/react'
import Link from 'next/link'
import { BiShoppingBag } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { CardPedido } from './CardPedido'
// Cart Component
export function Cart() {
    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch()
    const handleClick = () => {
        cart.active ? dispatch(hideCart()) : dispatch(showCart())
    }
    return (
        <div className="relative">
            <IconButton
                color="white"
                variant="text"
                size="lg"
                onClick={handleClick}
                className="flex relative "
            >
                <>
                    <span className="flex justify-center items-center">
                        <BiShoppingBag size={24} />
                    </span>
                    <span className=" absolute -top-2 -right-2 rounded-full block w-4 h-4 text-xs bg-gray-600 font-bold text-white">
                        {cart.totalQuantity}
                    </span>
                </>
            </IconButton>
            <aside
                className={` ${
                    cart.active ? 'max-h-auto py-2 ' : 'max-h-0'
                }  transition-all overflow-hidden duration-300 ease-in-out absolute px-4 top-full rounded-lg shadow-lg right-0 min-w-[24rem] z-20 bg-white text-gray-700 flex flex-col`}
            >
                <article className="flex justify-between py-2">
                    <h3 className="font-bold text-xl">Carrito de Compra</h3>
                    <button
                        onClick={() => dispatch(hideCart())}
                        className="flex justify-center items-center"
                    >
                        <span className="flex text-lg justify-center items-center">
                            <MdClose />
                        </span>
                    </button>
                </article>
                <ul className="flex flex-col w-full divide-y">
                    {cart.products.map(product => (
                        <li
                            className="flex py-2 "
                            key={product._id}
                        >
                            <CardPedido producto={product} />
                        </li>
                    ))}
                    <li>
                        <article className="flex flex-col py-4 ">
                            <p className="text-sm font-bold mb-2 ">Subtotal</p>
                            <p className="text-xl font-bold">
                                {cart.totalPrice.toFixed(2)} PEN
                            </p>
                        </article>
                    </li>
                    <li className="py-4">
                        <article className="flex justify-between items-center">
                            <Link href="/">
                                <a className="font-bold text-base">
                                    Continuar comprando
                                </a>
                            </Link>
                            {cart.products.length > 0 && (
                                <Link href="/payment">
                                    <a className="bg-red-700 text-white text-sm font-bold p-2 rounded-lg">
                                        Ir a pagar
                                    </a>
                                </Link>
                            )}
                        </article>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
