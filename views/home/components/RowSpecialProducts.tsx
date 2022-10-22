import { CardSpecialProduct } from './CardSpecialProduct'
import { SpecialFlower } from '../types/models'

type Props={
    products:SpecialFlower[],
    nroProducts:number,
}
export function RowSpecialProducts ({ nroProducts, products }:Props) {
  return (
        <div className="grid grid-cols-auto gap-4 w-full " >
            {products.slice(0, nroProducts).map((product) => (
                    <CardSpecialProduct key={product._id} product={product} />
            ))}
        </div>
  )
}
