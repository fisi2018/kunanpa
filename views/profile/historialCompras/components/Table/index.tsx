import { Chip, IconButton, Tooltip, Typography } from '@material-tailwind/react'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { Estado } from '../../constants'
import { Pedido } from '../../types/models'
import TableHead from '../Thead'

type Props = {
    compras: Pedido[]
}
export default function TableHistorialCompras({ compras }: Props) {
    return (
        <table className="bg-white dark:bg-gray-800 w-full dark:divide-gray-600 divide-y mt-4">
            <TableHead />
            <tbody className="dark:divide-gray-600 divide-y">
                {compras.map(item => (
                    <tr
                        key={item._id}
                        className="text-sm font-light 2xl:text-lg dark:divide-gray-600 dark:text-gray-400 divide-x"
                    >
                        <td className="p-2 text-center">
                            <Typography
                                className="text-gray-600"
                                variant="paragraph"
                            >
                                {item._id}
                            </Typography>
                        </td>
                        <td className="p-2 text-center">
                            <Typography
                                className="text-gray-600"
                                variant="paragraph"
                            >
                                {item.pedido}
                            </Typography>
                        </td>
                        <td className="text-center p-2">
                            <Chip
                                color={
                                    item.estado === Estado.Aprobado
                                        ? 'light-green'
                                        : item.estado === Estado.Finalizado
                                        ? 'gray'
                                        : 'orange'
                                }
                                value={item.estado}
                            />
                        </td>
                        <td className="text-center p-2">
                            <Typography
                                className="text-gray-600"
                                variant="paragraph"
                            >
                                {item.fechaCompra}
                            </Typography>
                        </td>
                        <td className="text-center p-2">
                            <Typography
                                className="text-gray-600"
                                variant="paragraph"
                            >
                                {item.costo.toFixed(2)} PEN
                            </Typography>
                        </td>
                        <td className="grid grid-cols-2 place-items-center p-2 gap-2">
                            <Tooltip content="Editar">
                                <IconButton
                                    className="text-xl"
                                    variant="text"
                                    color="gray"
                                >
                                    <BiEdit />
                                </IconButton>
                            </Tooltip>
                            <Tooltip content="Eliminar">
                                <IconButton
                                    className="text-xl"
                                    variant="text"
                                    color="gray"
                                >
                                    <MdDelete />
                                </IconButton>
                            </Tooltip>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
