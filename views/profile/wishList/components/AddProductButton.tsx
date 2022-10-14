import { useAppDispatch, useAppSelector } from '@/hooks'
import { addNewProduct, addSameProduct, selectCart } from '@/stateManagement/redux/slices'
import { handleSuccess } from '@/utilities/handleErrors'
import { IconButton, Tooltip } from '@material-tailwind/react'
import { BsCart } from 'react-icons/bs'
import { WishListItem } from '../types/models'
type Props={
    product:WishListItem
}
export default function AddProductButton ({ product }:Props) {
  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    const item = cart.products.find((item) => item._id === product._id)
    if (!item) {
      dispatch(addNewProduct({ _id: product._id, name: product.nombre, price: product.precioFinal, quantity: 1, img: product.img, initialPrice: product.precioInicial }))
      return handleSuccess('Producto agregado al carrito exitosamente')
    }
    dispatch(addSameProduct({
      _id: product._id,
      img: product.img,
      initialPrice: product.precioInicial,
      name: product.nombre,
      price: product.precioFinal,
      quantity: 1
    }))
    return handleSuccess('Producto agregado al carrito exitosamente')
  }
  return (
        <Tooltip content="Agregar" >
            <IconButton onClick={handleClick} color='light-green' variant='text' className='text-xl' size='lg' >
                <BsCart />
            </IconButton>
        </Tooltip>
  )
}
