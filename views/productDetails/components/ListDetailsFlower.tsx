import { Category } from '@/types/models'

type Props={
    idFlower:number,
    categories:Category[],
    stock:number,
}
export default function ListDetailsFlower ({ idFlower, categories, stock }:Props) {
  return (
        <div className='flex py-8 justify-between' >
                      <ul className='flex flex-col' >
                        <li className='flex' >
                          <label className='text-gray-500 mr-4' htmlFor={idFlower + '-sku'}>SKU:</label>
                          <p id={idFlower + '-sku'} >76645</p>
                        </li>
                        <li className='flex' >
                          <label className='text-gray-500 mr-4' htmlFor={idFlower + '-categories'}>Categorías:</label>
                          <p id={idFlower + '-categories'} >{categories.map((category) => category.name).join(', ')}</p>
                        </li>
                        <li className='flex' >
                          <label className='text-gray-500 mr-4' htmlFor={idFlower + '-stock'}>Stock:</label>
                          <p id={idFlower + '-stock'} >{stock}</p>
                        </li>
                        <li className='flex' >
                          <label className='text-gray-500 mr-4' htmlFor={idFlower + '-granja'}>Granja:</label>
                          <p id={idFlower + '-granja'} >Grocery Tarm Fields</p>
                        </li>
                      </ul>
                      <ul className='flex flex-col'>
                        <li className='flex' >
                          <label className='text-gray-500 mr-4' htmlFor={idFlower + '-frescura'}>Frescura:</label>
                          <p id={idFlower + '-frescura'} >8 días</p>
                        </li>
                        <li className='flex' >
                          <label className='text-gray-500 mr-4' htmlFor={idFlower + '-buyby'}>Buy by:</label>
                          <p id={idFlower + '-buyby'} >pcs,kg,box,pack</p>
                        </li>
                        <li className='flex' >
                          <label className='text-gray-500 mr-4' htmlFor={idFlower + '-delivery'}>Delivery:</label>
                          <p id={idFlower + '-delivery'} >en 3 days</p>
                        </li>
                        <li className='flex' >
                          <label className='text-gray-500 mr-4' htmlFor={idFlower + '-deiveryarea'}>Delivery area:</label>
                          <p id={idFlower + '-deliveryarea'} >Toda la ciudad</p>
                        </li>
                      </ul>
                    </div>
  )
}
