import { useAppSelector } from '@/components/hooks/useAppSelector'
import { useForm } from '@/components/hooks/useForm'
import { makePayment } from '@/services/payment'
import { selectCart } from '@/stateManagement/redux/slices'
import { HandlerSubmit } from '@/types/events'
import { PaymentForm } from '@/types/forms'
import { validationPayment } from '@/utilities/validators'
import { Session } from 'next-auth'
import swal from 'sweetalert'
import { AditionalInfo } from './AditionalInfo'
import { ConfirmPayment } from './ConfirmPayment'
import { PaymentInfo } from './PaymentInfo'
import { PaymentMethod } from './PaymentMethod'
import { ResumenPedido } from './ResumenPedido'
type Props={
    data:Session
}
const initForm:PaymentForm = {
  nombres: '',
  numTelefono: 0,
  direccion: '',
  distrito: '',
  codigoPostal: 0,
  pais: '',
  arreglos: [],
  total: 0
}
export function PaymentSection ({ data }:Props) {
  const cart = useAppSelector(selectCart)
  const { form, handleChange, setForm, loading, setLoading } = useForm({
    ...initForm,
    nombres: data.user.nombre,
    direccion: data.user.direccion || '',
    arreglos: cart.products.map((el) => ({ idFlor: el._id, cantidad: el.quantity, costo: el.price })),
    total: cart.totalPrice * 1.18

  }, validationPayment)
  const handleSubmit:HandlerSubmit = async (e) => {
    try {
      setLoading(true)
      e.preventDefault()
      const response = await makePayment({ ...form, idCliente: data.user.id }, data.accessToken)
      setLoading(false)
      swal('¡Listo!', response.message, 'success')
    } catch (e) {
      setLoading(false)
      const error = e as Error
      swal('Error', error.message, 'error')
    }
  }
  return (
    <form onSubmit={handleSubmit} >

        <section className='grid grid-cols-5 gap-6 grid-flow-row ' >
                    <div className='col-span-3 ' >
                        <PaymentInfo form={form} setForm={setForm} handleChange={handleChange} data={data} />
                    </div>
                    <div className='col-span-2 row-span-5 ' >
                        <ResumenPedido/>
                    </div>

                    <div className='col-span-3 ' >
                        <PaymentMethod/>
                    </div>
                    <div className='col-span-3 ' >
                        <AditionalInfo form={form} handleChange={handleChange} />
                    </div>
                    <div className='col-span-3 ' >
                        <ConfirmPayment loading={loading} />
                    </div>
                </section>
    </form>
  )
}
