import Link from 'next/link'
import { BiSearch, BiShoppingBag, BiUser } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import { useSession, signOut } from '../../config'
export default function Header () {
  const { data: session } = useSession()
  return (
        <header className="flex flex-col" >
            <div className="bg-red-700 text-white px-4" >
                <nav className="flex justify-between py-4" >
                    <ul className="flex text-sm " >
                        <li className="mr-4" >
                           <Link href="/" >
                           <a >Escríbenos</a>
                           </Link>
                        </li>
                        <li className="mr-4" >
                            <Link href="/" >
                            <a>+420 336 775 664</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" >
                            <a>info@kunanpa.com</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex text-sm" >
                        <li>
                            <Link href="/" >
                            <a >Blog</a>
                            </Link>
                        </li>
                        <li className="ml-4" >
                            <Link href="/" >
                            <a>Nosotros</a>
                            </Link>
                        </li>
                        <li className="ml-4" >
                            <Link href="/" >
                            <a >Locales</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                <nav className="flex justify-between py-8" >
                    <h1 className="uppercase text-2xl" >Kunanpa</h1>
                    <article className="flex" >
                        <button className="bg-white flex items-center rounded-l-xl text-black px-4 font-bold" >
                            <p>Toda la tienda</p>
                            <span className="flex ml-2 items-end text-red-700 font-black" >
                                <IoIosArrowDown fontWeight={'bolder'} />
                            </span>
                        </button>
                        <input className="border-gray-200 w-72" placeholder="Buscar Productos, categorías, ..." type="search" name="searcher" />
                        <span className="bg-white rounded-r-xl text-black items-center px-4 text-lg flex" >
                            <BiSearch/>
                        </span>
                    </article>
                    <ul className="flex text-2xl items-center" >
                        <li>
                            {
                                session
                                  ? <article className='flex items-center' >
                                    <p className='text-xs' >{session.user ? session.user.name : 'Anónimo'}</p>
                                    <figure className='w-8 h-8' >
                                        {session.user
                                          ? <img src={session.user.image as string} alt="" />
                                          : <p>Sin imagen</p>
                                        }
                                    </figure>
                                    <button className='text-xs ' onClick={() => signOut()} >Logout</button>
                                </article>
                                  : <Link href="/login" >
                            <a>
                               <BiUser/>
                            </a>
                            </Link>
                            }
                        </li>
                        <li className="ml-4" >
                            <button>
                                <BiShoppingBag/>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <nav className="bg-gray-800 text-white p-4" >
                <ul className="flex" >
                    <li className='mr-4' >
                        <button className='flex items-center' >
                            <p>Corazones</p>
                            <span className='flex text-red-700 text-sm ' >
                                <IoIosArrowDown/>
                            </span>
                        </button>
                    </li>
                    <li className='mr-4'>
                         <button className='flex items-center' >
                            <p>Arreglos express</p>
                            <span className='flex text-red-700 text-sm ' >
                                <IoIosArrowDown/>
                            </span>
                        </button>
                    </li>
                    <li className='mr-4' >
                        <button className='flex items-center' >
                            <p>Coronas</p>
                            <span className='flex text-red-700 text-sm ' >
                                <IoIosArrowDown/>
                            </span>
                        </button>
                    </li>
                    <li className='mr-4' >
                        <button className='flex items-center' >
                            <p>Cruces</p>
                            <span className='flex text-red-700 text-sm ' >
                                <IoIosArrowDown/>
                            </span>
                        </button>
                    </li>
                    <li className='mr-4' >
                        <button className='flex items-center' >
                            <p>Montos fúnebres</p>
                            <span className='flex text-red-700 text-sm ' >
                                <IoIosArrowDown/>
                            </span>
                        </button>
                    </li>
                    <li className='mr-4' >
                        <button className='flex items-center' >
                            <p>Montos</p>
                            <span className='flex text-red-700 text-sm ' >
                                <IoIosArrowDown/>
                            </span>
                        </button>
                    </li>
                    <li className='mr-4' >
                        <button className='flex items-center' >
                            <p>Para hombre</p>
                            <span className='flex text-red-700 text-sm ' >
                                <IoIosArrowDown/>
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className='flex items-center' >
                            <p>Para mujer</p>
                            <span className='flex text-red-700 text-sm ' >
                                <IoIosArrowDown/>
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
  )
}
