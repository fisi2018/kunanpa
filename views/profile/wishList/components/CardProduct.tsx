import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import { KeyedMutator } from 'swr'
import { WishListItem } from '../types/models'
import AddProductButton from './AddProductButton'
import RemoveProductButton from './RemoveProductButton'

type Props={
    item:WishListItem,
    mutate: KeyedMutator<WishListItem[]>
}
export default function CardProduct ({ item, mutate }:Props) {
  return (
        <Card className="flex flex-row p-4" >
            <CardHeader className='relative' >
                <Image loading='lazy' width={300} height={300} src={item.img} alt={item.nombre} />
                <Chip color='red' variant='gradient' className='absolute top-2 right-0' value={item.dscto + '%'} />
            </CardHeader>
            <CardBody className='gap-4 grid grid-cols-1 place-items-center ' >
                <Typography variant="h5" color="blue-gray" textGradient >{item.nombre}</Typography>
                <div className='flex flex-col items-center ' >
                    <Typography variant="h6" >S/.{item.precioFinal.toFixed(2)}</Typography>
                    <Typography className="line-through text-gray-500 " variant="small" >S/.{item.precioInicial.toFixed(2)}</Typography>
                </div>
            </CardBody>
            <CardFooter divider className='grid relative grid-cols-1 gap-4 place-items-center place-content-center ' >
                <Link href={'/flores/' + item._id} passHref >
                <Button color='red' variant='gradient' >Ver Detalles</Button>
                </Link>
                <AddProductButton product={item} />
                <RemoveProductButton mutate={mutate} item={item} />
            </CardFooter>
        </Card>
  )
}
