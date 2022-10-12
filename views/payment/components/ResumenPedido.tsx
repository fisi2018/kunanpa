import { useAppSelector } from '@/hooks'
import { selectCart } from '@/stateManagement/redux/slices'
import { CardPedido } from '../../../components/common/CardPedido'

export function ResumenPedido () {
  const cart = useAppSelector(selectCart)
  return (
        <aside className="border flex flex-col  border-gray-300 rounded-lg px-2 py-6" >
            <h2 className="font-bold text-xl" >Resumen</h2>
            <p className="text-gray-400 text-sm" >El precio puede cambiar según el método de envío</p>
            <ul className='divide-y' >
                {
                    cart.products.map((product) => (
                        <li className='py-4' key={product._id} >
                        <CardPedido producto={product} />
                        </li>
                    ))
                }
                <li className='py-4' >
                    <div className='flex flex-col font-bold text-sm' >
                        <article className='flex justify-between' >
                            <p>Subtotal</p>
                            <p>{cart.totalPrice.toFixed(2)} PEN</p>
                        </article>
                        <article className='flex justify-between my-4' >
                            <p>I.G.V</p>
                            <p>18% {(cart.totalPrice * 0.18).toFixed(2)} PEN</p>
                        </article>
                        <article className='flex justify-between' >
                            <p>Envío</p>
                            <p>0 PEN</p>
                        </article>
                    </div>
                </li>
            </ul>
            <div className='flex justify-between items-center' >
                <article className='flex flex-col text-sm' >
                    <p className='font-bold' >Orden total</p>
                    <p className='text-red-600' >Entrega máxima Julio, 12, 2022</p>
                </article>
                <p className='font-bold text-red-700 text-xl' >{(cart.totalPrice * 1.18).toFixed(2)} PEN</p>
            </div>
        </aside>
  )
}
