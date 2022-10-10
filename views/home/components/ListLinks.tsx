import Link from 'next/link'
import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { ItemCategory } from '../types/models'

type Props={
    title:string,
    name:string,
    items:Array<ItemCategory>
}
export function ListLinks ({ title, items, name }:Props) {
  const [show, setShow] = useState<boolean>(false)
  return (
        <aside className='flex flex-col' >
            <h2 className='font-bold text-lg mb-2' >{title}</h2>
            <ul>
                {show
                  ? items.map((item, i) => (
                    <li className='py-1' key={item.label + '-' + i} >
                        <Link href={item.href} >
                            <a className='text-red-600' >{item.label}</a>
                        </Link>
                    </li>
                  ))
                  : <li>
                    <ul>
                        {
                            items.slice(0, 5).map((item, i) => (
                                <li className='py-1' key={item.label + '-' + i} >
                                    <Link href={item.href} >
                                        <a className='text-red-700' >{item.label}</a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <button className='font-bold bg-gray-100 mt-4 p-2 flex items-center rounded-lg' onClick={() => setShow((prev) => !prev)}>
                        <p>Más {name}</p>
                        <span className='flex ml-2 justify-center items-center'>
                            <IoIosArrowForward/>
                        </span>
                    </button>
                </li>
            }
            </ul>
        </aside>
  )
}
