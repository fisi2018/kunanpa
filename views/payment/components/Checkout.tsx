import { useEffect } from 'react'
// import { checkout } from '../config'
import { OrderPayment } from '../types/models'

type Props={
    orderPayment:OrderPayment
}
export default function Checkout ({ orderPayment }:Props) {
  useEffect(() => {
    // checkout(orderPayment.publicKey, orderPayment.preferenceId, '#checkout-kunampa', 'Realizar Pago')
  }, [])
  return (
        <a href={orderPayment.redirect_url} target="_blank" rel="noreferrer" id="checkout-kunampa" >

        </a>
  )
}
