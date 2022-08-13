import { SpecialFlower } from '@/types/models'
import { CardSpecialProduct } from './CardSpecialProduct'

type Props={
    products:SpecialFlower[]
}
export function RowSpecialProducts ({ products }:Props) {
  return (
        <div className="flex justify-between w-full " >
            {products.slice(0, 3).map((product) => (
                <CardSpecialProduct product={product} key={product._id} />
            ))}
        </div>
  )
}
