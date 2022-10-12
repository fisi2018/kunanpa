import Loader from '@/components/common/Loader'
import { useBoolean } from '@/hooks'
import { addProductToWishList } from '@/services/wish-list'
import { handleError, handleSuccess } from '@/utilities/handleErrors'
import { IconButton, Tooltip } from '@material-tailwind/react'
import { useSession } from 'next-auth/react'
import { AiOutlineHeart } from 'react-icons/ai'
type Props={
    idFlor:number
}
export default function AddToWishListButton ({ idFlor }:Props) {
  const { value: loading, toogle } = useBoolean(false)
  const { data: session } = useSession()
  const handleClick = async () => {
    try {
      if (!session) throw new Error('Debes estar logeado para usar esta funcionalidad')
      toogle()
      const response = await addProductToWishList(idFlor, session.accessToken)
      handleSuccess(response.message)
    } catch (e) {
      const error = e as Error
      handleError(error.message)
    } finally {
      toogle()
    }
  }
  return (
    loading
      ? <Loader/>
      : <Tooltip content="Agregar a Lista de Deseos" >
            <IconButton onClick={handleClick} size='lg' variant='text' color='red' className='text-red-700 text-xl' >
                <AiOutlineHeart />
            </IconButton>
        </Tooltip>
  )
}
