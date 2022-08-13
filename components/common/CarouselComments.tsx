import { IoIosArrowForward } from 'react-icons/io'
import { CardComment } from './CardComment'
type Props={
    comments:Array<{name:string, comment:string, img:string|null}>
}
export default function CarouselComments ({ comments }:Props) {
  return (
        <div className='flex flex-col ' >
            <article className='flex justify-between mb-8' >
            <h2 className='font-bold text-lg' >Nuestros clientes dicen</h2>
            <button className='flex items-center' >
                <p className='font-bold' >Ver más</p>
                <span className="flex text-red-700 ml-2 justify-center items-center " >
                    <IoIosArrowForward/>
                </span>
            </button>
            </article>
            <div className='flex overflow-hidden pb-8 ' >
                {comments.map((comment, i) => (
                    <div className='mx-2' key={comment.name + '-' + i} >
                        <CardComment comment={comment} />
                    </div>
                ))}
            </div>
        </div>
  )
}
