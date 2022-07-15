import Link from 'next/link'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { ResponseFlowers } from '../../types/data'

export default function FooterProducts ({ flowers }:{flowers:ResponseFlowers|null}) {
  return (
        <footer className='flex items-center justify-between col-span-full ' >
                  <nav className='flex items-center' >
                    <label className='text-sm mr-2' htmlFor="pages">Páginas:</label>
                    <ul id='pages' className='flex' >
                      {flowers
                        ? flowers.links.map((el, i) => (
                          el.url &&
                          <li className='ml-2' key={'page-' + i}>
                            <Link href={el.url.split('/').pop() === 'flores?page=1' ? '/arreglos-express/' : { pathname: '/arreglos-express/[page]', query: { page: el.url.split('/').pop() } }} >
                            <a className={el.active ? 'font-bold' : ''} >{el.label.includes('raquo') ? '>' : el.label.includes('laquo') ? '<' : el.label}</a>
                            </Link>
                          </li>
                        ))
                        : <p>0</p>
                      }
                    </ul>
                  </nav>
                  <button className='flex font-bold items-center p-3 rounded-lg text-white bg-theme-a' >
                    Mostrar más productos <span><MdKeyboardArrowDown/></span>
                  </button>
                  <article className='flex' >
                    <span className=' px-2 rounded-xl flex text-red-700 bg-theme-e font-bold' >{flowers && flowers.total}</span>
                    <p className='text-gray-400 ml-2' >Productos</p>
                  </article>
                </footer>
  )
}
