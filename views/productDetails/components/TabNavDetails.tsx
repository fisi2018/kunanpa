export default function TabNavDetails () {
  return (
        <nav className='flex' >

                          <button className='flex py-4 flex-1 items-center font-bold text-lg border-b border-b-red-700' >
                            Descripción
                          </button>
                          <button className='flex py-4 flex-1 items-center justify-around font-bold text-lg' >
                            <p>Reseñas</p>
                            <span className='rounded-xl bg-theme-e text-red-700 font-semibold text-base px-2' >18</span>
                          </button>
                          <button className='flex-1 py-4 flex justify-around items-center font-bold text-lg' >
                            <p>Preguntas</p>
                            <span className='rounded-xl bg-theme-e text-red-700 font-semibold text-base px-2' >4</span>
                          </button>
                    </nav>
  )
}
