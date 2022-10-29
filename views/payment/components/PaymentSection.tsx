import { useAppSelector, useBoolean } from '@/hooks'
import { selectCart } from '@/stateManagement/redux/slices'
import { handleError, handleSuccess } from '@/utilities/handleErrors'
import type { Session } from 'next-auth'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { createPaymentAdapter } from '../adapters'
import { makePayment } from '../services'
import { IFormPayment } from '../types/forms'
import { OrderPayment } from '../types/models'
import { paymentResolver } from '../validators'
import { AditionalInfo } from './AditionalInfo'
import Checkout from './Checkout'
import { ConfirmPayment } from './ConfirmPayment'
import { PaymentInfo } from './PaymentInfo'
import { ResumenPedido } from './ResumenPedido'
type Props = {
    data: Session
}
export function PaymentSection({ data }: Props) {
    const cart = useAppSelector(selectCart)
    const { value: loading, toggle } = useBoolean(false)
    const [response, setResponse] = useState<OrderPayment>({
        message: '',
        preferenceId: '',
        publicKey: '',
        redirect_url: ''
    })
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<IFormPayment>({
        resolver: paymentResolver
    })
    const onSubmit: SubmitHandler<IFormPayment> = async form => {
        if (response.preferenceId) return
        try {
            toggle()
            const response = await makePayment(
                {
                    ...form,
                    numTelefono: parseInt(form.numTelefono),
                    idCliente: data.user.id,
                    arreglos: cart.products.map(el => ({
                        idFlor: el._id,
                        cantidad: el.quantity,
                        costo: el.price
                    })),
                    total: cart.totalPrice * 1.18
                },
                data.accessToken
            )
            setResponse(createPaymentAdapter(response))
            handleSuccess(`
      ${response.message}
      Excelente solo debe realizar el pago para confirmar su pedido!
      `)
        } catch (e) {
            const error = e as Error
            handleError(error.message)
        } finally {
            toggle()
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="grid grid-cols-5 gap-6 grid-flow-row ">
                <div className="col-span-3 ">
                    <PaymentInfo
                        errors={errors}
                        register={register}
                        data={data}
                    />
                </div>
                <div className="col-span-2 row-span-5 ">
                    <ResumenPedido />
                </div>
                <div className="col-span-3 ">
                    <AditionalInfo
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className="col-span-3 ">
                    {response.preferenceId ? (
                        <Checkout orderPayment={response} />
                    ) : (
                        <ConfirmPayment loading={loading} />
                    )}
                </div>
            </section>
        </form>
    )
}
