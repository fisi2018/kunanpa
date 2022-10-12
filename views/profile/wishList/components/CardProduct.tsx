import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import { WishListItem } from '../types/models'

type Props={
    item:WishListItem
}
export default function CardProduct ({ item }:Props) {
  return (
        <Card >
            <CardHeader>
                <Image loading='lazy' width={300} height={300} src={item.img} alt={item.nombre} />
                <Chip value={item.dscto} />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" >{item.nombre}</Typography>
            </CardBody>
            <CardFooter divider className='grid grid-cols-3' >
                <div className='flex flex-col' >
                    <Typography>{item.precioFinal}</Typography>
                    <Typography>{item.precioInicial}</Typography>
                </div>
                <Button>Ver Detalles</Button>
                <Button>Agregar</Button>
            </CardFooter>
        </Card>
  )
}
