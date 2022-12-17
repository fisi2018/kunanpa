import { useAppDispatch, useAppSelector } from '@/hooks'
import {
    addNewProduct,
    addSameProduct,
    selectCart
} from '@/stateManagement/redux/slices'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from '@material-tailwind/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import swal from 'sweetalert'
import { SpecialFlower } from '../../types/models'

type Props = {
    product: SpecialFlower
}
export function CardSpecialProduct({ product }: Props) {
    const { data: session } = useSession()
    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch()
    const handleClick = async () => {
        try {
            if (!session)
                throw new Error(
                    'Debe iniciar sesión para poder realizar una compra'
                )
            const item = cart.products.find(item => item._id === product._id)
            if (!item) {
                dispatch(
                    addNewProduct({
                        _id: product._id,
                        name: product.nombre,
                        price: product.precioFinal,
                        quantity: 1,
                        img: product.img,
                        initialPrice: product.precioInicial
                    })
                )
                return swal(
                    'Producto agregado',
                    'A más productos, mayores serán tus descuentos',
                    'success'
                )
            }
            dispatch(
                addSameProduct({
                    _id: product._id,
                    img: product.img,
                    initialPrice: product.precioInicial,
                    name: product.nombre,
                    price: product.precioFinal,
                    quantity: 1
                })
            )
            return swal(
                'Producto agregado',
                'Recuerda que a más productos, mayores serán tus descuentos',
                'success'
            )
        } catch (e) {
            const error = e as Error
            return swal('Proceso Fallido', error.message, 'info')
        }
    }
    return (
        <Card className="self-center">
            <CardHeader>
                <figure className="relative flex justify-center">
                    {product.descuento !== 0 && (
                        <span className="flex absolute bg-theme-e top-0 text-xs z-10 left-0 p-1 rounded-xl text-red-700 font-bold justify-center items-center">
                            -{product.descuento}%
                        </span>
                    )}
                    <Image
                        width={150}
                        height={150}
                        src={product.img}
                        alt={product.nombre}
                    />
                </figure>
            </CardHeader>
            <CardBody>
                <h3 className="font-bold text-lg">{product.nombre}</h3>
                <p className="text-sm text-gray-500">{product.descripcion}</p>
            </CardBody>
            <CardFooter
                divider
                className="flex items-center  "
            >
                <article className="flex items-center justify-between w-full ">
                    <div className="flex flex-col">
                        <p className="font-bold text-lg">
                            {product.precioFinal.toFixed(2)} PEN
                        </p>
                        {product.precioInicial !== 0 && (
                            <p className="text-sm text-gray-500 line-through ">
                                {product.precioInicial.toFixed(2)} PEN
                            </p>
                        )}
                    </div>
                    <Button
                        onClick={handleClick}
                        color="red"
                        className="bg-theme-a"
                    >
                        Comprar
                    </Button>
                </article>
            </CardFooter>
        </Card>
    )
}
