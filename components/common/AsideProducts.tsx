import Categories from './Categories'
import Pricing from './Pricing'
import Raiting from './Rating'
import Seassons from './Seassons'

export default function AsideProducts () {
  return (
        <aside className='row-span-5  flex flex-col ' >
                  <ul className='flex flex-col ' >
                    <li >
                      <Categories/>
                    </li>
                    <li className='mt-8' >
                      <Seassons/>
                    </li>
                    <li className='mt-8' >
                      <Raiting/>
                    </li>
                    <li className='mt-8' >
                      <Pricing/>
                    </li>
                    <li className='mt-8' >
                      <div className='flex py-4 justify-around'>
                        <button className='bg-theme-a text-white font-bold py-2 px-4 rounded-lg' >Aplicar</button>
                        <button className='font-bold text-gray-400' >Reiniciar</button>
                      </div>
                    </li>
                  </ul>
                </aside>
  )
}
