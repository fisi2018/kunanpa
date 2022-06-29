import { signIn } from '../../config'
import { FcGoogle } from 'react-icons/fc'
import { BsTwitter } from 'react-icons/bs'
import Link from 'next/link'
export default function FormLogin () {
  return (
        <form className=' flex flex-col p-6 shadow-xl  rounded' >
            <p className='text-xl mb-6 text-center' >Inicio de sesión</p>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="email">Correo*</label>
                <input className='rounded-lg w-60 border-gray-400' name='email' type="email" />
            </article>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="password">Contraseña*</label>
                <input className='rounded-lg border-gray-400' name='password' type="password" />
            </article>
            <article className=' flex justify-end' >
            <Link href="/" >
                <a className='text-xs text-red-400 ' >¿Olvidaste tu contraseña?</a>
            </Link>
            </article>
            <button className='rounded-lg font-semibold my-4 py-3 bg-gray-900 text-white text-sm' type='submit' >Iniciar sesión</button>
            <article className='flex justify-center text-gray-300 items-center' >
                <hr className='w-20' />
                <p>o</p>
                <hr className='w-20' />
            </article>
            <span onClick={() => signIn('google')} className=' cursor-pointer flex mb-4 items-center rounded justify-around p-2 border-gray-300 border' >
                <FcGoogle/>
                <p>Continuar con Google</p>
            </span>
            <span onClick={() => signIn('twitter')} className=' cursor-pointer flex text-sky-500 items-center rounded justify-around p-2 border-gray-300 border' >
                <BsTwitter/>
                <p className='text-black' >Continuar con Twitter</p>
            </span>
        </form>
  )
}
