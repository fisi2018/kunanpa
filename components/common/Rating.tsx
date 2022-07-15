import { BsStarFill } from 'react-icons/bs'

export default function Raiting () {
  return (
        <div className='flex flex-col' >
                        <h2 className='font-bold text-2xl' >Clasificación</h2>
                        <article className='flex mt-3 ' >
                          <input className='text-red-700 mr-2' type="checkbox" name="perfect" id="" />
                          <div className='flex' >
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          <span className='flex text-yellow-500' >
                            <BsStarFill/>
                          </span>
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          </div>
                        </article>
                        <article className='flex mt-3 ' >
                          <input className='text-red-700 mr-2' type="checkbox" name="perfect" id="" />
                          <div className='flex' >
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          <span className='flex text-yellow-500' >
                            <BsStarFill/>
                          </span>
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          </div>
                        </article>
                        <article className='flex mt-3 ' >
                          <input className='text-red-700 mr-2' type="checkbox" name="perfect" id="" />
                          <div className='flex' >
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          <span className='flex text-yellow-500' >
                            <BsStarFill/>
                          </span>
                          </div>
                        </article>
                        <article className='flex mt-3 ' >
                          <input className='text-red-700 mr-2' type="checkbox" name="perfect" id="" />
                          <div className='flex' >
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          </div>
                        </article>
                        <article className='flex mt-3 ' >
                          <input className='text-red-700 mr-2' type="checkbox" name="perfect" id="" />
                          <div className='flex' >
                          <span className='flex text-yellow-500 ' >
                            <BsStarFill/>
                          </span>
                          </div>
                        </article>
                      </div>
  )
}
