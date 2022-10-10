import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'
import type{ SubmitHandler } from 'react-hook-form'
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react'
import { BASE, signIn } from '@/config'
import Loader from '@/components/common/Loader'
import { loginResolver } from '../validators'
import type { IFormLogin } from '../types/forms'
import { useAppForm, useBoolean } from '@/components/hooks'

export default function FormLogin () {
  const { register, formState: { errors }, handleSubmit } = useAppForm<IFormLogin>({
    resolver: loginResolver
  })
  const { value: loading, toogle } = useBoolean(false)
  const onSubmit:SubmitHandler<IFormLogin> = async (form) => {
    toogle()
    await signIn('credentials', { email: form.email, password: form.password, callbackUrl: `${BASE}/` })
    toogle()
  }
  return (
        <form onSubmit={handleSubmit(onSubmit)} >
          <Card>
            <CardHeader className='p-2' >
              <Typography variant="h3" >Inicio de Sesión</Typography>
            </CardHeader>
            <CardBody className='grid gap-4' >
              <Input {...register('email')} error={!!errors.email} label="Correo" type="email" />
              <Input {...register('password')} error={!!errors.password} label="Contraseña" type="password" />
            <article className=' flex justify-end' >
            <Link href="/" >
                <a className='text-xs text-red-400 ' >¿Olvidaste tu contraseña?</a>
            </Link>
            </article>
            </CardBody>
            <CardFooter divider className='grid gap-4' >
            {
                loading
                  ? <article className='flex justify-center' >
                    <Loader/>
                </article>
                  : <Button fullWidth color='gray' variant='gradient' type='submit' >Iniciar sesión</Button>
            }
            <article className=' flex justify-center' >
              <p className='text-xs'>¿Aún no tienes una cuenta?.
                <Link href="/register" >
                    <a className='text-xs text-red-400 ' > Regístrate</a>
                </Link>
              </p>
            </article>
            <article className='flex justify-center text-gray-300 items-center' >
                <hr className='w-20' />
                <p className='mx-2'>o</p>
                <hr className='w-20' />
            </article>
            <span onClick={() => signIn('google')} className=' cursor-pointer flex items-center rounded justify-around p-2 border-gray-300 border' >
                <FcGoogle/>
                <p>Continuar con Google</p>
            </span>
            <span onClick={() => signIn('twitter')} className=' cursor-pointer flex text-sky-500 items-center rounded justify-around p-2 border-gray-300 border' >
                <BsTwitter/>
                <p className='text-black' >Continuar con Twitter</p>
            </span>
            <span onClick={() => signIn('facebook')} className=' cursor-pointer flex text-sky-700 items-center rounded justify-around p-2 border-gray-300 border' >
                <BsFacebook/>
                <p className='text-black' >Continuar con Facebook</p>
            </span>
            </CardFooter>
          </Card>
        </form>
  )
}
