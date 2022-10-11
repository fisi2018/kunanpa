import { Button } from '@material-tailwind/react'
import Link from 'next/link'
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
    <Link target="_blank" href={orderPayment.redirect_url} passHref>
        <Button color='light-blue' >
            Realizar Pago
        </Button>
    </Link>
  )
}
