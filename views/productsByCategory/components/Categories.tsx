export default function Categories () {
  return (
        <div className='flex flex-col' >
                      <h2 className='text-2xl font-bold' >Categorías</h2>
                      <ul className='flex flex-col ' >
                        <li className='flex mt-2 justify-between ' >
                          <p>Para hombre</p>
                          <span className='flex rounded-lg items-center font-bold text-sm px-2 bg-theme-e text-red-600' >
                            320
                          </span>
                        </li>
                        <li className='flex mt-2 justify-between '>
                          <p>Para mujer</p>
                          <span className='flex rounded-lg items-center font-bold text-sm px-2 bg-theme-e text-red-600' >
                            112
                          </span>
                        </li>
                        <li className='flex mt-2 justify-between '>
                          <p>Rosas</p>
                          <span className='flex rounded-lg items-center font-bold text-sm px-2 bg-theme-e text-red-600' >
                            32
                          </span>
                        </li>
                        <li className='flex mt-2 justify-between '>
                          <p>Girasoles</p>
                          <span className='flex rounded-lg items-center font-bold text-sm px-2 bg-theme-e text-red-600' >
                            48
                          </span>
                        </li>
                      </ul>
                      </div>
  )
}
