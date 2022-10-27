import { kunanpaV2 } from '@/config'
import { FetcherAuthWithBody } from '@/types/fetcher'
import { handleErrorResponse } from '@/utilities/handleErrors'
import { UpdateUserRequest } from '../../types/requests'
import { UpdateUserResponse } from '../../types/responses'

export const updateUser: FetcherAuthWithBody<
    UpdateUserRequest,
    UpdateUserResponse
> = async (body, token) => {
    try {
        const { data } = await kunanpaV2.put<UpdateUserResponse>(
            `/persona/${body.id}`,
            {
                nombre: body.nombre,
                avatar: body.avatar,
                dni: body.dni,
                direccion: body.direccion
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return data
    } catch (e) {
        console.log('error', e)
        throw handleErrorResponse(e)
    }
}
