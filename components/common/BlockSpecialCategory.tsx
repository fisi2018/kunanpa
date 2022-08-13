import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

type Props={
    title:string,
    slogan:string,
    href:string,
}
export function BlockSpecialCategory ({ title, slogan, href }:Props) {
  return (
    <div className="p-8 bg-theme-e rounded-lg flex flex-col items-start justify-between w-full" >
        <article className='flex flex-col' >
        <p className='text-red-700 text-sm font-bold' >{slogan}</p>
      <h2 className='font-bold text-lg' >{title}</h2>
        </article>
        <Link href={href} >
            <a className="border-2 rounded-lg p-1 border-red-600 flex items-center justify-center" >
                <p className='font-bold' >Ofertas especiales</p>
                <span className='flex ml-4 text-red-600 justify-center items-center' >
                    <IoIosArrowForward/>
                </span>
            </a>
        </Link>
    </div>
  )
}
