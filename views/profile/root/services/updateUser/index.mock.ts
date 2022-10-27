import { UpdateUserRequest } from '../../types/requests'
import { UpdateUserResponse } from '../../types/responses'

export const REQUEST_MOCK: UpdateUserRequest = {
    nombre: 'Marco Josué',
    avatar: 'https://robohash.org/autemquodvoluptatem.png?size=50x50&set=set1',
    dni: 70481019,
    direccion: 'Cercado de Lima',
    id: '7'
}
export const RESPONSE_MOCK: UpdateUserResponse = {
    message: 'Usuario actualizado correctamente'
}
