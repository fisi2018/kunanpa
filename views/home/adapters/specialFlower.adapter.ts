import { SpecialFlowersResponse } from '@/types/responses'
import { SpecialFlower } from '../types/models'

export const createSpecialFlowersAdapter = (response:SpecialFlowersResponse):SpecialFlower[] => {
  return response.data
    ? response.data.map((specialFlower) => ({
      _id: specialFlower.id,
      nombre: specialFlower.nombre,
      descripcion: specialFlower.descripcion,
      precioFinal: specialFlower.precioFinal,
      precioInicial: specialFlower.precioInicial,
      descuento: specialFlower.descuento,
      stock: specialFlower.stock,
      img: specialFlower.urlimagen
    }))
    : []
}
