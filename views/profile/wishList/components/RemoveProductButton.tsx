import Loader from '@/components/common/Loader'
import { useBoolean } from '@/hooks'
import { deleteProductFromWishList } from '@/services/wish-list'
import { handleError, handleSuccess } from '@/utilities/handleErrors'
import { IconButton, Tooltip } from '@material-tailwind/react'
import { useSession } from 'next-auth/react'
import { MdRemove } from 'react-icons/md'
import { KeyedMutator } from 'swr'
import { WishListItem } from '../types/models'
type Props = {
    item: WishListItem
    mutate: KeyedMutator<WishListItem[]>
}
export default function RemoveProductButton({ item, mutate }: Props) {
    const { data: session } = useSession()
    const { value: loading, toggle } = useBoolean(false)
    const handleClick = async () => {
        try {
            toggle()
            if (!session)
                throw new Error(
                    'Necesita iniciar sesión para remover un producto'
                )
            const response = await deleteProductFromWishList(
                item._id.toString(),
                session.accessToken
            )
            handleSuccess(response.message)
            mutate()
        } catch (e) {
            const error = e as Error
            handleError(error.message)
        } finally {
            toggle()
        }
    }
    return (
        <div className=" absolute top-0 right-0 ">
            {loading ? (
                <Loader />
            ) : (
                <Tooltip content="Remover">
                    <IconButton
                        onClick={handleClick}
                        color="red"
                        variant="text"
                        className="text-xl"
                        size="lg"
                    >
                        <MdRemove />
                    </IconButton>
                </Tooltip>
            )}
        </div>
    )
}
