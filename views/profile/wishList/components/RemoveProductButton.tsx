import Loader from '@/components/common/Loader'
import { useBoolean } from '@/hooks'
import { deleteProductFromWishList } from '@/services/wish-list'
import { handleError, handleSuccess } from '@/utilities/handleErrors'
import { IconButton, Tooltip } from '@material-tailwind/react'
import { useSession } from 'next-auth/react'
import { MdRemove } from 'react-icons/md'
import { WishListItem } from '../types/models'
type Props={
    item:WishListItem
}
export default function RemoveProductButton ({ item }:Props) {
  const { data: session } = useSession()
  const { value: loading, toogle } = useBoolean(false)
  const handleClick = async () => {
    try {
      toogle()
      if (!session) throw new Error('Necesita iniciar sesión para remover un producto')
      const response = await deleteProductFromWishList(item._id.toString(), session.accessToken)
      handleSuccess(response.message)
    } catch (e) {
      const error = e as Error
      handleError(error.message)
    } finally {
      toogle()
    }
  }
  return (
      <div className=' absolute top-0 right-0 ' >
        {

    loading
      ? <Loader />
      : <Tooltip content="Remover" >
            <IconButton onClick={handleClick} color='red' variant='text' className='text-xl' size="lg" >
                <MdRemove />
            </IconButton>
        </Tooltip>
        }
    </div>

  )
}
