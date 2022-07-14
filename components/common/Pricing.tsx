export default function Pricing () {
  return (
        <div className='flex flex-col' >
                        <h2 className='font-bold text-2xl' >Precio</h2>
                        <article className='flex' >
                        <input className='rotate-180' type="range" name="" id="" />
                        <input className='bg-red-700' type="range" name="price" id="" />
                        </article>
                        <div className='flex justify-between ' >
                          <article className='flex flex-col' >
                            <label className='font-bold text-sm' htmlFor="min">Min</label>
                            <input className='w-20 rounded-xl ' type="number" name="min" />
                          </article>
                          <article className='flex flex-col' >
                            <label className='font-bold text-sm' htmlFor="max">Max</label>
                            <input className='w-20 rounded-xl ' type="number" name="max" />
                          </article>
                        </div>
                      </div>
  )
}
