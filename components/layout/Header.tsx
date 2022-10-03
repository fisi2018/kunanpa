import Image from 'next/image'
import Link from 'next/link'
import { BiSearch, BiUser } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import { useSession, signOut } from '../../config'
import { logout } from '@/services/auth'
import { Cart } from '../common/Cart'
import { Button, IconButton, Input, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import { Category } from '@/types/models'
type Props={
    categories:Category[]
}
export default function Header ({ categories }:Props) {
  const { data: session } = useSession()
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
                    <Typography variant="h1" textGradient className="uppercase text-white text-3xl " >Kunanpa</Typography>
                        </a>
                    </Link>
                    <article className="grid grid-cols-2 gap-2 " >
                        <Menu>
                            <MenuHandler>
                        <Button color="white" size='sm' className=" flex justify-between self-center justify-self-center items-center  font-bold" >
                            <Typography variant="small" >Toda la tienda</Typography>
                                  <span className="flex ml-2 items-end  text-red-700 font-black" >
                                      <IoIosArrowDown fontWeight={'bolder'} />
                                  </span>
                        </Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem>Lista de Deseos</MenuItem>
                            </MenuList>
                        </Menu>
                        <div className='flex  items-center bg-white p-4 rounded-lg ' >
                        <Input color="pink" variant='standard' className=' bg-white ' size='lg' label='Buscar Producto' type="search" icon={<BiSearch size={20} />} />
                        </div>
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
                                <IconButton size='lg' color='white' variant='text' >
                               <BiUser size={24} />
                                </IconButton>
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
            <nav className="bg-gray-800 text-white p-2" >
                <ul className="flex" >
                    {
                        categories.map((el) => (
                            <li key={el._id} className=' flex items-center'>
                                <Menu>
                                    <MenuHandler>
                                        <Button color='white' variant='text' className='flex items-center ' >
                                            <Typography variant="small" >{el.name}</Typography>
                                            <span className='flex text-red-700 text-sm ' >
                                                <IoIosArrowDown />
                                            </span>
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className='flex' >

                            <Link href={{
                              pathname: '/[category]',
                              query: {
                                category: el.name.toLowerCase().replaceAll(' ', '-') + '-' + el._id
                              }
                            }} >
                            <a className=' flex-1  ' >Ver Productos</a>
                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>

                    </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
  )
}
