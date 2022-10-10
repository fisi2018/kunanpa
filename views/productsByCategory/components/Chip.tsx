import { IoIosClose } from 'react-icons/io'

export default function Chip ({ text }:{text:string}) {
  return (
        <div className='bg-theme-e flex items-center rounded-xl px-1  text-red-600' >
                          <p className='text-xs capitalize font-bold' >{text}</p>
                          <button className='flex text-xl' >
                            <IoIosClose/>
                          </button>
        </div>
  )
}
