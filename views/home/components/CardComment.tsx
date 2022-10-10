import Image from 'next/image'
import { IoMdQuote } from 'react-icons/io'
import { Comment } from '../types/models'

type Props={
    comment:Comment
}
export function CardComment ({ comment }:Props) {
  return (
        <div className='flex flex-col items-center relative border border-gray-200 rounded-lg p-4' >
            <span className='flex justify-center items-center text-xl text-gray-300' ><IoMdQuote/></span>
            <p>{comment.comment}</p>
            <p className='text-gray-400 text-sm my-4' >{comment.name}</p>
            {
                comment.img
                  ? <Image width={64} height={64} src={comment.img} />
                  : <span className='absolute -bottom-8 block w-12 h-12 bg-gray-200 rounded-full' >

                </span>
            }
        </div>
  )
}
