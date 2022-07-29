import { LIST_FOOTER, TAGS_DEMO } from '@/constants/static'
import Link from 'next/link'

export default function Footer () {
  return (
        <footer className="bg-gray-800 p-8" >
            <nav className="flex justify-between " >
                <ul className="text-sm font-light text-red-300">
                    <li className="mb-4" >
                        <h2 className="font-semibold text-xl text-white" >Contáctanos</h2>
                    </li>
                    {
                        LIST_FOOTER.LIST_CONTACT.map((li, i) => (
                            <li className="mb-4" key={li + '-' + i} >
                                <Link href="/" >
                                    <a className="capitalize" >{li}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="text-sm font-light text-red-300">
                    <li className="mb-4" >
                        <h2 className="font-semibold text-xl text-white" >Síguenos en</h2>
                    </li>
                    {
                        LIST_FOOTER.SOCIAL.map((li, i) => (
                            <li className="mb-4" key={li + '-' + i} >
                                <Link href="/" >
                                    <a className="capitalize" >{li}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="text-sm font-light text-red-300">
                    <li className="mb-4" >
                        <h2 className="font-semibold text-xl text-white" >Destacados</h2>
                    </li>
                    {
                        LIST_FOOTER.DESTACADO.map((li, i) => (
                            <li className="mb-4" key={li + '-' + i} >
                                <Link href="/" >
                                    <a className="capitalize" >{li}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="text-sm font-light text-red-300">
                    <li className="mb-4" >
                        <h2 className="font-semibold text-xl text-white" >Cuenta</h2>
                    </li>
                    {
                        LIST_FOOTER.ACCOUNT.map((li, i) => (
                            <li className="mb-4" key={li + '-' + i} >
                                <Link href="/" >
                                    <a className="capitalize" >{li}</a>
                                </Link>
                            </li>
                        ))
                    }
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
