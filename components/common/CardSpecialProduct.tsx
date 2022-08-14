import { addNewProduct, addOneSameProduct, selectCart } from '@/stateManagement/redux/slices'
import { SpecialFlower } from '@/types/models'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import swal from 'sweetalert'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'

type Props={
    product:SpecialFlower
}
export function CardSpecialProduct ({ product }:Props) {
  const { data: session } = useSession()
  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()
  const handleClick = async () => {
    try {
      if (!session) throw new Error('Debe iniciar sesión para poder realizar una compra')
      const item = cart.products.find((item) => item._id === product._id)
      if (!item) return dispatch(addNewProduct({ _id: product._id, name: product.nombre, price: product.precioFinal, quantity: 1, img: product.img }))
      return dispatch(addOneSameProduct(product._id))
    } catch (e) {
      const error = e as Error
      return swal('Proceso Fallido', error.message, 'info')
    }
  }
  return (
        <div className='flex flex-col p-4 min-w-[15rem] max-w-[18rem] justify-between border border-gray-300 rounded-xl' >
            <figure className='relative flex justify-center' >
                {
                    product.descuento !== 0 &&
                    <span className='flex absolute bg-theme-e top-0 text-xs z-10 left-0 p-1 rounded-xl text-red-700 font-bold justify-center items-center'>-{product.descuento}%</span>

                }
                <Image width={150} height={150} src={product.img} alt={product.nombre} />
            </figure>
            <h3 className='font-bold text-lg' >{product.nombre}</h3>
            <p className='text-sm text-gray-500' >{product.descripcion}</p>
            <article className='flex items-center mt-4 justify-between ' >
                <div className='flex flex-col' >
                <p className='font-bold text-lg' >{product.precioFinal.toFixed(2)} PEN</p>
                {
                    product.precioInicial !== 0 &&
                <p className='text-sm text-gray-500 line-through ' >{product.precioInicial}</p>
                }
                </div>
                <button onClick={handleClick} className='rounded-xl p-2 font-bold text-white bg-theme-a' >Comprar</button>
            </article>
        </div>
  )
}
