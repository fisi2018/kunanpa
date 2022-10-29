import { FlowerDetails } from '@/types/models'
import { FlowerDetailsResponse } from '@/types/responses'

export const createFlowerDetailsAdapter = (
    response: FlowerDetailsResponse
): FlowerDetails => {
    return {
        _id: response.data.id,
        nombre: response.data.nombre,
        descripcion: response.data.descripcion,
        precioInicial: response.data.precioInicial,
        precioFinal: response.data.precioFinal,
        dscto: response.data.descuento,
        stock: response.data.stock,
        imgs: response.data.imagenes.map(img => ({ src: img.urlImagen })),
        categorias: response.data.categorias.map(category => ({
            _id: category.id,
            name: category.nombre
        })),
        detalles: response.data.detalles
    }
}
