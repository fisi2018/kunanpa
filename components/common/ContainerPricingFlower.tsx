import { addNewProduct, addSameProduct, selectCart } from '@/stateManagement/redux/slices'
import { FlowerDetails } from '@/types/models'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import swal from 'sweetalert'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'

type Props={
    precioInicial:number,
    precioFinal:number,
    producto:FlowerDetails
}
export default function ContainerPricingFlower ({ producto, precioInicial, precioFinal }:Props) {
  const { data: session } = useSession()
  const [quantity, setQuantity] = useState<number>(1)
  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()
  const handleClick = async () => {
    try {
      if (!session) throw new Error('Debe iniciar sesión para poder realizar una compra')
      const item = cart.products.find((item) => item._id === producto._id)
      if (!item) {
        dispatch(addNewProduct({ _id: producto._id, name: producto.nombre, price: producto.precioFinal, quantity, img: producto.imgs[0].src, initialPrice: producto.precioInicial }))
        return swal('Producto agregado', 'A más productos, mayores serán tus descuentos', 'success')
      }
      dispatch(addSameProduct({
        _id: producto._id,
        img: producto.imgs[0].src,
        initialPrice: producto.precioInicial,
        name: producto.nombre,
        price: producto.precioFinal,
        quantity
      }))
      return swal('Producto agregado', 'A más productos, mayores serán tus descuentos', 'success')
    } catch (e) {
      const error = e as Error
      return swal('Proceso Fallido', error.message, 'info')
    }
  }
  return (
        <div className='flex border border-gray-300 p-4 rounded-lg ' >
                      <div className='flex flex-col' >
                        <p className='font-bold text-red-700 text-2xl' >{precioFinal.toFixed(2)} PEN</p>
                        <p className='text-gray-500 line-through text-sm' >{precioInicial.toFixed(2)} PEN</p>
                      </div>
                      <div className='flex items-center flex-1 justify-around' >
                        <div className='bg-gray-100 flex rounded-xl p-2 text-lg border border-gray-400' >
                          <span className='flex justify-center items-center' >{quantity}</span>
                          <span className='mx-4 flex items-center' >|</span>
                          <span className='flex font-bold items-center' >Pcs</span>
                          <div className='flex flex-col ml-2' >
                            <button onClick={() => setQuantity((prev) => prev + 1)} className='flex cursor-pointer hover:bg-red-700 rounded-full hover:text-white transition-color duration-300 ease-in-out font-bold items-center' ><IoIosArrowUp/></button>
                            <button onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : 1)} className='flex hover:bg-red-700 rounded-full hover:text-white transition-color duration-300 ease-in-out cursor-pointer font-bold items-center' ><IoIosArrowDown/></button>
                          </div>
                        </div>
                        <button onClick={handleClick} className='bg-theme-a text-white font-bold text-lg rounded-xl p-2' >+ Agregar</button>
                      </div>
                    </div>
  )
}
