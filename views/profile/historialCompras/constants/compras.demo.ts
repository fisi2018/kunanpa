import { Compra } from '../types/models'
import { Estado } from './estado.enum'

export const COMPRAS_DEMO:Compra[] = [
  {
    _id: '1',
    estado: Estado.Aprobado,
    fecha: new Date(),
    pedido: 'Marco',
    total: 300
  }, {
    _id: '2',
    estado: Estado.Pendiente,
    fecha: new Date(),
    pedido: 'Jairo',
    total: 278
  }, {
    _id: '3',
    estado: Estado.Finalizado,
    fecha: new Date(),
    pedido: 'Merly',
    total: 315
  }, {
    _id: '4',
    estado: Estado.Aprobado,
    fecha: new Date(),
    pedido: 'Carlos',
    total: 250
  }
]
