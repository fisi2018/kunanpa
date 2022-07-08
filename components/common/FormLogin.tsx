import { BASE, signIn } from '../../config'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'
import { FormLoginType } from '../../types/forms'
import { useForm } from '../hooks/useForm'
import { HandlerSubmit } from '../../types/events'
import Loader from './Loader'
const initForm:FormLoginType = {
  email: '',
  password: ''
}
export default function FormLogin () {
  const { form, handleChange, loading, setLoading } = useForm(initForm)
  const handleSubmit:HandlerSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await signIn('credentials', { email: form.email, password: form.password, callbackUrl: `${BASE}/` })
    setLoading(false)
  }
  return (
        <form onSubmit={handleSubmit} className=' flex flex-col p-6 shadow-xl  rounded' >
            <p className='text-xl mb-6 text-center' >Inicio de sesión</p>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="email">Correo*</label>
                <input onChange={handleChange} value={form.email} className='rounded-lg w-60 border-gray-400' name='email' type="email" />
            </article>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="password">Contraseña*</label>
                <input onChange={handleChange} value={form.password} className='rounded-lg border-gray-400' name='password' type="password" />
            </article>
            <article className=' flex justify-end' >
            <Link href="/" >
                <a className='text-xs text-red-400 ' >¿Olvidaste tu contraseña?</a>
            </Link>
            </article>
            {
                loading
                  ? <article className='flex justify-center' >
                    <Loader/>
                </article>
                  : <button className='rounded-lg font-semibold my-4 py-3 bg-gray-900 text-white text-sm' type='submit' >Iniciar sesión</button>
            }
            <article className=' flex justify-center mb-3' >
              <p className='text-xs'>¿Aún no tienes una cuenta?. 
                <Link href="/register" >
                    <a className='text-xs text-red-400 ' > Registrate</a>
                </Link>
              </p>
            </article>
            <article className='flex justify-center text-gray-300 items-center mb-3' >
                <hr className='w-20' />
                <p className='mx-2'>o</p>
                <hr className='w-20' />
            </article>
            <span onClick={() => signIn('google')} className=' cursor-pointer flex mb-4 items-center rounded justify-around p-2 border-gray-300 border' >
                <FcGoogle/>
                <p>Continuar con Google</p>
            </span>
            <span onClick={() => signIn('twitter')} className=' cursor-pointer flex mb-4 text-sky-500 items-center rounded justify-around p-2 border-gray-300 border' >
                <BsTwitter/>
                <p className='text-black' >Continuar con Twitter</p>
            </span>
            <span onClick={() => signIn('facebook')} className=' cursor-pointer flex text-sky-700 items-center rounded justify-around p-2 border-gray-300 border' >
                <BsFacebook/>
                <p className='text-black' >Continuar con Facebook</p>
            </span>
        </form>
  )
}
