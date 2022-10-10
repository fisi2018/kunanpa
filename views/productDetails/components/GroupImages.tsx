import Image from 'next/image'
import { ImageFlower } from '../types/models'
type Props={
    imgs:ImageFlower[],
    idProduct:number,
    dscto:number
}
export default function GroupImages ({ imgs, idProduct, dscto }:Props) {
  return (
        <div className='flex relative flex-col' >
            <div className='flex absolute z-30 top-4 left-0' >
                <span className='flex px-2 rounded-lg bg-theme-e font-bold text-red-700' >-{dscto}%</span>
                <span className='flex px-2 rounded-lg bg-theme-e font-bold text-red-700 ml-2'>Free shiping</span>
            </div>
            {imgs.map((img, i) => (
                <figure key={idProduct + '-' + i} >
                    <Image src={img.src} width={1000} height={1000} />
                </figure>
            ))}
        </div>
  )
}
