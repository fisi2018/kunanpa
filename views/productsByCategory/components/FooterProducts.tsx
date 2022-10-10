import { FlowerPage } from '@/types/models'
import Link from 'next/link'
import { MdKeyboardArrowDown } from 'react-icons/md'
type Props={
    flowerPages:FlowerPage[],
    total:number,
    category:string,
    id:string
}
export default function FooterProducts ({ total, flowerPages, category, id }:Props) {
  return (
        <footer className='flex items-center justify-between col-span-full ' >
                  <nav className='flex items-center' >
                    <label className='text-sm mr-2' htmlFor="pages">Páginas:</label>
                    <ul id='pages' className='flex' >
                      {flowerPages.map((el, i) => (
                        el.url &&
                          <li className='ml-2' key={'page-' + i}>
                            <Link href={el.url.split('/').pop() === id + '?page=1' ? '/' + (category + ' ' + id).replaceAll(' ', '-') : { pathname: '/' + (category + ' ' + id).replaceAll(' ', '-') + '/[page]', query: { page: el.url.split('/').pop() } }} >
                            <a className={el.active ? 'font-bold' : ''} >{el.label.includes('raquo') ? '>' : el.label.includes('laquo') ? '<' : el.label}</a>
                            </Link>
                          </li>
                      ))
                      }
                    </ul>
                  </nav>
                  <button className='flex font-bold items-center p-3 rounded-lg text-white bg-theme-a' >
                    Mostrar más productos <span><MdKeyboardArrowDown/></span>
                  </button>
                  <article className='flex' >
                    <span className=' px-2 rounded-xl flex text-red-700 bg-theme-e font-bold' >{total}</span>
                    <p className='text-gray-400 ml-2' >Productos</p>
                  </article>
                </footer>
  )
}
