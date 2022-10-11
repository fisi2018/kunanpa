import { useEffect } from 'react'
import { checkout } from '../config'
import { OrderPayment } from '../types/models'

type Props={
    orderPayment:OrderPayment
}
export default function Checkout ({ orderPayment }:Props) {
  useEffect(() => {
    checkout(orderPayment.publicKey, orderPayment.preferenceId, '#checkout-kunampa', 'Realizar Pago')
  }, [])
  return (
        <div id="checkout-kunampa" >

        </div>
  )
}
