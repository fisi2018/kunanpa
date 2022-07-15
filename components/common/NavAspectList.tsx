import { BsGrid1X2, BsListNested } from 'react-icons/bs'

export default function NavAspectList ({ total }:{total:number}) {
  return (
        <nav>
                  <ul className='flex text-sm' >
                    <li>
                      <button className='flex text-red-600 items-center ' >
                        <BsGrid1X2/>
                        <p className='text-black ml-2' >Gradilla</p>
                      </button>
                    </li>
                    <li className='ml-4' >
                      <button className='flex items-center text-gray-400 ' >
                        <BsListNested/>
                        <p className='ml-2' >Lista</p>
                      </button>
                    </li>
                    <li className='flex ml-4' >
                      <span className='flex px-2 rounded-lg bg-theme-e text-red-600 -tracking-widest font-bold  '> {total} </span>
                      <p className='text-gray-400 ml-2' >Productos</p>
                    </li>
                  </ul>
                </nav>
  )
}
