export default function Seassons () {
  return (
        <div className='flex flex-col' >
                        <h2 className='font-bold text-2xl' >Temporada</h2>
                        <article className='flex items-center mt-2' >
                          <input className='text-red-700 mr-4 ' type="checkbox" name="winter" id="" />
                          <label htmlFor="winter">Invierno</label>
                        </article>
                        <article className='flex items-center mt-2' >
                          <input className='text-red-700 mr-4 ' type="checkbox" name="spring" id="" />
                          <label htmlFor="spring">Primavera</label>
                        </article>
                        <article className='flex items-center mt-2' >
                          <input className='text-red-700 mr-4 ' type="checkbox" name="summer" id="" />
                          <label htmlFor="summer">Verano</label>
                        </article>
                        <article className='flex items-center mt-2' >
                          <input className='text-red-700 mr-4 ' type="checkbox" name="fallen" id="" />
                          <label htmlFor="fallen">Otoño</label>
                        </article>
                      </div>
  )
}
