import { Chip, IconButton, Tooltip, Typography } from '@material-tailwind/react'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { Estado } from '../constants'
import { Compra } from '../types/models'

type Props={
    compras:Compra[]
}
export default function TableHistorialCompras ({ compras }:Props) {
  return (
      <table className="bg-white dark:bg-gray-800 w-full dark:divide-gray-600 divide-y mt-4" >
                <thead>
              <tr className="text-sm bg-gray-100 text-gray-800 2xl:text-lg dark:text-gray-400 dark:divide-gray-600 font-semibold divide-x" >
                    <th className='py-4 px-2'>
                        <Typography className="uppercase text-gray-500" variant="h6" >
                        ID
                        </Typography>
                        </th>
                    <th className='py-4 px-2'>
                        <Typography className="uppercase text-gray-500 " variant="h6" >
                            PEDIDO
                        </Typography>
                    </th>
                    <th className='py-4 px-2'>
                        <Typography className="uppercase text-gray-500" variant="h6" >
                            ESTADO
                        </Typography>
                    </th>
                    <th className='py-4 px-2'>
                        <Typography className="uppercase text-gray-500" variant="h6" >
                            Fecha
                        </Typography>
                    </th>
                    <th className='py-4 px-2'>
                        <Typography className="uppercase text-gray-500" variant="h6" >
                            Total
                        </Typography>
                    </th>
                    <th className='py-4 px-2'>
                        <Typography className="uppercase text-gray-500" variant="h6" >
                            Acciones
                        </Typography>
                    </th>
                    </tr>
                </thead>
          <tbody className="dark:divide-gray-600 divide-y" >
                    {
                        compras.map(item => (
                            <tr key={item._id} className="text-sm font-light 2xl:text-lg dark:divide-gray-600 dark:text-gray-400 divide-x" >
                                <td className='p-2 text-center' >
                                    <Typography className="text-gray-600" variant="paragraph" >{item._id}</Typography>
                                </td>
                                <td className='p-2 text-center' >
                                    <Typography className="text-gray-600" variant="paragraph" >{item.pedido}</Typography>
                                </td>
                                <td className='text-center p-2' >
                                    <Chip color={item.estado === Estado.Aprobado ? 'light-green' : item.estado === Estado.Finalizado ? 'gray' : 'orange'} value={item.estado} />
                                </td>
                                <td className='text-center p-2' >
                                    <Typography className="text-gray-600" variant="paragraph" >
                                        {item.fecha.toLocaleDateString()}
                                    </Typography>
                                </td>
                                <td className='text-center p-2' >
                                    <Typography className="text-gray-600" variant="paragraph" >
                                        {item.total.toFixed(2)} PEN
                                    </Typography>
                                </td>
                                <td className='grid grid-cols-2 place-items-center p-2 gap-2' >
                                    <Tooltip content="Editar" >
                                    <IconButton className='text-xl' variant='text' color='gray' >
                                        <BiEdit/>
                                    </IconButton>
                                    </Tooltip>
                                    <Tooltip content='Eliminar' >
                                    <IconButton className='text-xl' variant='text' color='gray' >
                                        <MdDelete/>
                                    </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
        </table>
  )
}
