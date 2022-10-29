import { DataFlower } from '@/types/models'
import { ResponseFlowers } from '@/types/responses'

export const createFlowersAdapter = (response: ResponseFlowers): DataFlower => {
    return {
        flowers: response.data.map(flower => ({
            _id: flower.id,
            nombre: flower.nombre,
            descripcion: flower.descripcion,
            precioInicial: flower.precioInicial,
            precioFinal: flower.precioFinal,
            dscto: flower.descuento,
            stock: flower.stock,
            img: flower.urlimagen
        })),
        pages: response.links,
        total: response.total
    }
}
