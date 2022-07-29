
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HandlerSubmit } from '../../types/events'
import { FormRegisterType } from '../../types/forms'
import { register } from '../../utilities/fetcher'
import validationRegister from '../../utilities/validators/register'
import { useForm } from '../hooks/useForm'
import Loader from './Loader'
const initForm:FormRegisterType = {
  email: '',
  password: '',
  direccion: '',
  dni: 0,
  nombre: '',
  terms: false,
  repeatPassword: ''
}
export default function FormRegister () {
  const { push } = useRouter()
  const { form, error, setForm, loading, setLoading, handleChange } = useForm(initForm, validationRegister)
  const handleSubmit:HandlerSubmit = async (e) => {
    e.preventDefault()
    if (error.dni || error.email || error.nombre || error.password || error.repeatPassword || error.terms) return alert('Formulario inválido')
    try {
      setLoading(true)
      const data = await register({
        direccion: form.direccion,
        dni: form.dni,
        nombre: form.nombre,
        email: form.email,
        password: form.password
      })
      alert(data.message)
      push('/login')
      setLoading(false)
    } catch (err) {
      const error = err as Error
      alert(error.message)
    }
  }
  return (
        <form onSubmit={handleSubmit} className='flex flex-col p-6 shadow-xl rounded' >
            <p className='text-xl mb-6 text-center' >Crear una cuenta</p>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="nombre">Nombre*</label>
                <input onChange={handleChange} value={form.nombre} className='rounded-lg w-60 border-gray-400' name='nombre' type="text" />
                {error.nombre && <p className='text-red-500 font-light text-sm' >{error.nombre}</p> }
            </article>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="dni">DNI</label>
                <input onChange={handleChange} value={form.dni} className='rounded-lg w-60 border-gray-400' name='dni' type="number" />
                {error.dni && <p className='text-red-500 font-light text-sm' >{error.dni}</p> }
            </article>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="direccion">Dirección</label>
                <input onChange={handleChange} value={form.direccion} className='rounded-lg w-60 border-gray-400' name='direccion' type="text" />
            </article>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="email">Correo*</label>
                <input onChange={handleChange} value={form.email} className='rounded-lg w-60 border-gray-400' name='email' type="email" />
                {error.email && <p className='text-red-500 font-light text-sm' >{error.email}</p> }
            </article>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="password">Contraseña*</label>
                <input value={form.password} onChange={handleChange} className='rounded-lg border-gray-400' name='password' type="password" />
                {error.password && <p className='text-red-500 font-light text-sm' >{error.password}</p> }
            </article>
            <article className='flex flex-col mb-4' >
                <label className='font-semibold text-sm text-gray-400' htmlFor="repeatPassword">Repita la contraseña*</label>
                <input onChange={handleChange} value={form.repeatPassword} className='rounded-lg border-gray-400' name='repeatPassword' type="password" />
                {error.repeatPassword && <p className='text-red-500 font-light text-sm' >{error.repeatPassword}</p> }
            </article>

            <article className='flex flex-col mb-4' >
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input onChange={(e) => setForm({ ...form, terms: e.target.checked })} checked={form.terms} id="terms" name="terms" type="checkbox" className="focus:ring-red-400 h-4 w-4 text-red-400 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">Acepto los
                            <Link href="/" >
                                <a className='text-xs text-red-400 ' > terminos y condiciones.</a>
                            </Link>
                        </label>
                    </div>
                </div>
                {error.terms && <p className='text-red-500 font-light text-xs' >{error.terms}</p> }
            </article>
            {
                loading
                  ? <article className='flex justify-center' >
                    <Loader/>
                </article>
                  : <button className='rounded-lg font-semibold my-4 py-3 bg-gray-900 text-white text-sm' type='submit' > Registrase </button>
            }

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
