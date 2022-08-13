import { SpecialFlower } from '@/types/models'
import { CardSpecialProduct } from './CardSpecialProduct'

type Props={
    products:SpecialFlower[],
    nroProducts:number,
}
export function RowSpecialProducts ({ nroProducts, products }:Props) {
  return (
        <div className="flex justify-between w-full " >
            {products.slice(0, nroProducts).map((product) => (
                    <CardSpecialProduct key={product._id} product={product} />
            ))}
        </div>
  )
}
