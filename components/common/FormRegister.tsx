
import Link from 'next/link'
import Loader from './Loader'

export default function FormRegister () {
  return (
        <form action="#" className='flex flex-col p-6 shadow-xl rounded' >
            <p className='text-xl mb-6 text-center' >Crear una cuenta</p>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="email">Nombre*</label>
                <input className='rounded-lg w-60 border-gray-400' name='name' type="text" />
            </article>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="email">Correo*</label>
                <input className='rounded-lg w-60 border-gray-400' name='email' type="email" />
            </article>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="password">Contraseña*</label>
                <input className='rounded-lg border-gray-400' name='password' type="password" />
            </article>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="password">Repita la contraseña*</label>
                <input className='rounded-lg border-gray-400' name='password-repeat' type="password" />
            </article>

            <article className='flex flex-col mb-4' >
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="comments" name="comments" type="checkbox" className="focus:ring-red-400 h-4 w-4 text-red-400 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">Acepto los
                            <Link href="/" >
                                <a className='text-xs text-red-400 ' > terminos y condiciones.</a>
                            </Link>
                        </label>
                    </div>
                </div>
            </article>


            <button className='rounded-lg font-semibold my-4 py-3 bg-gray-900 text-white text-sm' type='submit' > Registrase </button>


            <article className=' flex justify-center' >
                <p className='text-xs'>¿Ya tienes una cuenta?. 
                    <Link href="/login" >
                        <a className='text-xs text-red-400 ' > Ingresa aquí</a>
                    </Link>
                </p>
            </article>

        </form>
  )
}
