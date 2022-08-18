import Image from 'next/image'
import Link from 'next/link'
import { BiSearch, BiUser } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import { useSession, signOut } from '../../config'
import useSWR from 'swr'
import { getCategories } from '@/services/categories'
import { logout } from '@/services/auth'
import { Cart } from '../common/Cart'

export default function Header () {
  const { data: session } = useSession()
  const fetcher = () => getCategories().then((data) => data).catch((err) => {
    throw new Error('Proceso Fallido: ' + err.message)
  })
  const { data: categories } = useSWR('/', fetcher)
  const handleLogout = async () => {
    try {
      if (!session) throw new Error('No iniciaste sesión')
      if (session.user.provider === 'credentials') {
        const response = await logout(session.accessToken)
        alert(response.message)
        return await signOut()
      }
      return await signOut()
    } catch (err) {
      const error = err as Error
      return alert(error.message)
    }
  }
  return (
        <header className="flex flex-col" >
            <div className="bg-theme-a text-white px-4" >
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
                    <Link href="/" >
                        <a>
                    <h1 className="uppercase text-2xl" >Kunanpa</h1>
                        </a>
                    </Link>
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
                                    <p className='text-xs' >{session.user.nombre}</p>
                                    <figure className='w-8 mx-2 h-8 overflow-hidden rounded-full' >
                                        { session.user
                                          ? <Image width={250} height={250} src={session.user.avatar} alt="" />
                                          : <p>Sin imagen</p>
                                        }
                                    </figure>
                                    <button className='text-xs ' onClick={handleLogout} >Logout</button>
                                </article>
                                  : <Link href="/login" >
                            <a>
                               <BiUser/>
                            </a>
                            </Link>
                            }
                        </li>
                        <li className="ml-4" >
                            <Cart/>
                        </li>
                    </ul>
                </nav>
            </div>
            <nav className="bg-gray-800 text-white p-4" >
                <ul className="flex" >
                    {
                        categories && categories.map((el) => (
                            <li key={el._id} className='mr-4 flex items-center'>
                            <Link href={{
                              pathname: '/[category]',
                              query: {
                                category: el.name.toLowerCase().replaceAll(' ', '-') + '-' + el._id
                              }
                            }} >
                            <a>{el.name}</a>
                            </Link>
                            <span className='flex text-red-700 text-sm ' >
                                <IoIosArrowDown/>
                            </span>
                    </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
  )
}
