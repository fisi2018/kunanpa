import { SpecialFlower } from '@/types/models'
import Image from 'next/image'

type Props={
    product:SpecialFlower
}
export function CardSpecialProduct ({ product }:Props) {
  return (
        <div className='flex flex-col p-4 min-w-[15rem] max-w-[18rem] justify-between border border-gray-300 rounded-xl' >
            <figure className='relative flex justify-center' >
                {
                    product.descuento !== 0 &&
                    <span className='flex absolute bg-theme-e top-0 text-xs z-10 left-0 p-1 rounded-xl text-red-700 font-bold justify-center items-center'>-{product.descuento}%</span>

                }
                <Image width={150} height={150} src={product.img} alt={product.nombre} />
            </figure>
            <h3 className='font-bold text-lg' >{product.nombre}</h3>
            <p className='text-sm text-gray-500' >{product.descripcion}</p>
            <article className='flex items-center mt-4 justify-between ' >
                <div className='flex flex-col' >
                <p className='font-bold text-lg' >{product.precioFinal.toFixed(2)} PEN</p>
                {
                    product.precioInicial !== 0 &&
                <p className='text-sm text-gray-500 line-through ' >{product.precioInicial}</p>
                }
                </div>
                <button className='rounded-xl p-2 font-bold text-white bg-theme-a' >Comprar</button>
            </article>
        </div>
  )
}
