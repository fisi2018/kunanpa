
import { register } from '@/services/auth'
import { IFormRegister } from '@/types/forms'
import { registerResolver } from '@/utilities/validators'
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useBoolean } from '../hooks/useBoolean'
import Loader from './Loader'
const initValues:IFormRegister = {
  direccion: '',
  dni: '',
  email: '',
  nombre: '',
  password: '',
  repeatPassword: '',
  terms: true
}
export default function FormRegister () {
  const { push } = useRouter()
  const { register: registerInput, handleSubmit, formState: { errors } } = useForm<IFormRegister>({
    resolver: registerResolver,
    defaultValues: initValues
  })
  const { value: loading, toogle } = useBoolean(false)
  const onSubmit:SubmitHandler<IFormRegister> = async (form) => {
    try {
      toogle()
      const data = await register({
        direccion: form.direccion,
        dni: form.dni,
        nombre: form.nombre,
        email: form.email,
        password: form.password
      })
      alert(data.message)
      push('/login')
      toogle()
    } catch (err) {
      toogle()
      const error = err as Error
      alert(error.message)
    }
  }
  return (
        <form onSubmit={handleSubmit(onSubmit)} >
          <Card>
            <CardHeader className='p-4' >
              <Typography variant="h3" color="gray" textGradient >Crear una cuenta</Typography>
            </CardHeader>
            <CardBody className='grid gap-4' >
              <Input error={!!errors.nombre} {...registerInput('nombre')} label="Nombres" type="text" />
              <Input error={!!errors.dni} {...registerInput('dni')} label="DNI" type="number" />
              <Input error={!!errors.direccion} {...registerInput('direccion')} label="Dirección" type="text" />
              <Input error={!!errors.email} {...registerInput('email')} label="Email" type="email" />
              <Input error={!!errors.password} {...registerInput('password')} label="Contraseña" type="password" />
              <Input error={!!errors.repeatPassword} {...registerInput('repeatPassword')} label="Repetir contraseña" type="password" />
              <Checkbox color="red" {...registerInput('terms')} label='Acepto los términos y condiciones' />

            </CardBody>
            <CardFooter className='grid gap-4' divider >

            {
                loading
                  ? <article className='flex justify-center' >
                    <Loader/>
                </article>
                  : <Button fullWidth variant='gradient' color="blue-gray" type='submit' > Registrarse </Button>
            }

            <article className=' flex justify-center' >
                <p className='text-xs'>¿Ya tienes una cuenta?.
                    <Link href="/login" >
                        <a className='text-xs text-red-400 ' > Ingresa aquí</a>
                    </Link>
                </p>
            </article>
            </CardFooter>
          </Card>

        </form>
  )
}
