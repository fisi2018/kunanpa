import { useAppSelector, useBoolean } from '@/components/hooks'
import { selectCart } from '@/stateManagement/redux/slices'
import type { Session } from 'next-auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import swal from 'sweetalert'
import { makePayment } from '../services'
import { IFormPayment } from '../types/forms'
import { paymentResolver } from '../validators'
import { AditionalInfo } from './AditionalInfo'
import { ConfirmPayment } from './ConfirmPayment'
import { PaymentInfo } from './PaymentInfo'
import { PaymentMethod } from './PaymentMethod'
import { ResumenPedido } from './ResumenPedido'
type Props={
    data:Session
}
export function PaymentSection ({ data }:Props) {
  const cart = useAppSelector(selectCart)
  const { value: loading, toogle } = useBoolean(false)
  const { register, formState: { errors }, handleSubmit } = useForm<IFormPayment>({
    resolver: paymentResolver
  })
  const onSubmit:SubmitHandler<IFormPayment> = async (form) => {
    try {
      toogle()
      const response = await makePayment({
        ...form,
        numTelefono: parseInt(form.numTelefono),
        idCliente: data.user.id,
        arreglos: cart.products.map((el) => ({ idFlor: el._id, cantidad: el.quantity, costo: el.price })),
        total: cart.totalPrice * 1.18
      }, data.accessToken)
      toogle()
      swal('¡Listo!', response.message, 'success')
    } catch (e) {
      toogle()
      const error = e as Error
      swal('Error', error.message, 'error')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} >

        <section className='grid grid-cols-5 gap-6 grid-flow-row ' >
                    <div className='col-span-3 ' >
                        <PaymentInfo errors={errors} register={register} data={data} />
                    </div>
                    <div className='col-span-2 row-span-5 ' >
                        <ResumenPedido/>
                    </div>

                    <div className='col-span-3 ' >
                        <PaymentMethod/>
                    </div>
                    <div className='col-span-3 ' >
                        <AditionalInfo register={register} errors={errors} />
                    </div>
                    <div className='col-span-3 ' >
                        <ConfirmPayment loading={loading} />
                    </div>
                </section>
    </form>
  )
}
