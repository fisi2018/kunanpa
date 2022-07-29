import { TAGS_DEMO } from '@/constants/static'
import Link from 'next/link'

export default function Footer () {
  return (
        <footer className="bg-gray-800 p-8" >
            <nav className="flex justify-between " >
                <ul className="text-sm font-light text-red-300">
                    <li className="mb-4" >
                        <h2 className="font-semibold text-xl text-white" >Contáctanos</h2>
                    </li>
                    <li className="mb-4" >
                        <Link href="/" >
                        <a className="" >About Us</a>
                        </Link>
                    </li>
                    <li className="mb-4" >
                         <Link href="/" >
                        <a className="" >Careers</a>
                        </Link>
                    </li>
                    <li className="mb-4" >
                         <Link href="/" >
                        <a className="" >Press Releases</a>
                        </Link>
                    </li>
                    <li>
                         <Link href="/" >
                        <a className="" >Blog</a>
                        </Link>
                    </li>
                </ul>
                <ul className="text-sm font-light text-red-300">
                    <li className="mb-4" >
                        <h2 className="font-semibold text-xl text-white" >Síguenos en</h2>
                    </li>
                    <li className="mb-4" >
                        <Link href="/" >
                        <a className="" >Facebook</a>
                        </Link>
                    </li>
                    <li className="mb-4" >
                         <Link href="/" >
                        <a className="" >Twitter</a>
                        </Link>
                    </li>
                    <li className="mb-4" >
                         <Link href="/" >
                        <a className="" >Instagram</a>
                        </Link>
                    </li>
                    <li className="mb-4" >
                         <Link href="/" >
                        <a className="" >Youtube</a>
                        </Link>
                    </li>
                    <li>
                         <Link href="/" >
                        <a className="" >LinkedIn</a>
                        </Link>
                    </li>
                </ul>
                <ul className="text-sm font-light text-red-300">
                    <li className="mb-4" >
                        <h2 className="font-semibold text-xl text-white" >Destacados</h2>
                    </li>
                    <li className="mb-4" >
                        <Link href="/" >
                        <a className="" >Become an Affiliate</a>
                        </Link>
                    </li>
                    <li className="mb-4" >
                         <Link href="/" >
                        <a className="" >Advertise your product</a>
                        </Link>
                    </li>
                    <li >
                         <Link href="/" >
                        <a className="" >Sell on Market</a>
                        </Link>
                    </li>
                </ul>
                <ul className="text-sm font-light text-red-300">
                    <li className="mb-4" >
                        <h2 className="font-semibold text-xl text-white" >Cuenta</h2>
                    </li>
                    <li className="mb-4" >
                        <Link href="/" >
                        <a className="" >Your account</a>
                        </Link>
                    </li>
                    <li className="mb-4" >
                         <Link href="/" >
                        <a className="" >Returns Centre</a>
                        </Link>
                    </li>
                    <li className="mb-4" >
                         <Link href="/" >
                        <a className="" >100 % purchase protection</a>
                        </Link>
                    </li>
                    <li className="mb-4" >
                         <Link href="/" >
                        <a className="" >Chat with us</a>
                        </Link>
                    </li>
                    <li >
                         <Link href="/" >
                        <a className="" >Help</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className='mt-8' >
                <h2 className='font-semibold mb-4 text-white text-xl' >Product tags</h2>
                <ul className='flex flex-wrap ' >
                    {TAGS_DEMO.map((tag, i) => (
                    <li className='mr-4 mt-4' key={i} >
                        <span className='flex items-center rounded-xl py-1 px-3 bg-white' >
                            <p className='font-semibold text-sm ' >{tag}</p>
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
            <article className='flex justify-center pt-8' >
                <p className='text-white' >Copyright © 2022 Kunanpa</p>
            </article>
        </footer>
  )
}
