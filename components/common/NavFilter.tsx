import Chip from './Chip'

export default function NavFilter () {
  return (

                <ul>
                  <li className='flex' >
                    <div className='bg-gray-100 flex py-2 px-4 w-60 mr-2 rounded-xl border border-gray-400 justify-around items-center' >
                      <input className='text-red-500' name='firstFilter' type="radio" />
                      <label htmlFor="firstFilter">Filter text</label>
                      <input className='text-red-500' name='secondFilter' type="radio" />
                      <label htmlFor="secondFilter">Filter text</label>
                    </div>
                    <div className='flex bg-gray-100 border mr-2 border-gray-400 px-4 py-2 rounded-xl items-center' >
                      <input className="text-red-500 mr-2" type="checkbox" name="checkFiltre"/>
                      <label htmlFor="checkFiltre">Filtre</label>
                    </div>
                    <div className='flex bg-gray-100 border mr-2 border-gray-400 px-4 py-2 rounded-xl items-center' >
                      <input className="text-red-500 mr-2" type="checkbox" name="checkFiltre"/>
                      <label htmlFor="checkFiltre">Filtre</label>
                    </div>
                    <div className='flex bg-gray-100 border border-gray-400 px-4 py-2 rounded-xl items-center' >
                      <input className="text-red-500 mr-2" type="checkbox" name="checkFiltre"/>
                      <label htmlFor="checkFiltre">Filtre</label>
                      <p className='mx-2' >|</p>
                      <p className='font-bold text-sm' >Select</p>
                    </div>
                  </li>
                  <li className='flex items-center mt-4 ' >
                    <p className='text-gray-400 text-sm ' >Aplicar filtros:</p>
                    <ul className='flex ml-4' >
                      <li className='mr-2' >
                        <Chip text='Filtro seleccionado' />
                      </li>
                      <li>
                        <Chip text='filtro seleccionado' />
                      </li>
                    </ul>
                  </li>
                </ul>
  )
}
