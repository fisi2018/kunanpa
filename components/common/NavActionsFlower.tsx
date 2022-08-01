import { AiOutlineHeart } from 'react-icons/ai'
import { MdCompare } from 'react-icons/md'

export default function NavActionsFlower () {
  return (
        <nav className='flex my-8'>
                      <button className='flex items-center'>
                        <span className='flex text-red-700 text-xl' ><AiOutlineHeart/></span>
                        <p className='font-bold'>Agregar a mi lista de deseos</p>
                      </button>
                      <button className='flex items-center ml-8' >
                        <span className='flex text-red-700 text-xl' ><MdCompare/></span>
                        <p className='font-bold'>Comparar</p>
                      </button>
                    </nav>
  )
}
