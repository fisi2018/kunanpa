import { WishListItem } from '../types/models'
import { WishListItemResponse, WishListResponse } from '../types/responses'

export const createWishListItemAdapter = (response:WishListItemResponse):WishListItem => {
  return {
    _id: response.idFlor,
    dscto: response.descuento,
    img: response.urlimagen,
    nombre: response.nombre,
    precioFinal: response.precioFinal,
    precioInicial: response.precioInicial
  }
}
export const createWishListAdapter = (response:WishListResponse):WishListItem[] => {
  return response.data.map(createWishListItemAdapter)
}
