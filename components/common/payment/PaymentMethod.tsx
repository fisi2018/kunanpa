import { useForm } from '@/components/hooks/useForm'
import { validationCard } from '@/utilities/validators'
import { InputCard, InputPayment } from '../inputs'

export function PaymentMethod () {
  const { form, handleChange, setForm } = useForm({
    nroTarjeta: '',
    cvc: 0,
    fechaVencimiento: '2026-08'
  }, validationCard)
  return (<div>
         <h2 className="font-bold text-xl" >Método de Pago</h2>
            <article className="flex justify-between text-gray-500 text-sm py-2" >
                <p>Por favor ingrese su método de pago</p>
                <p>Paso 2 de 4</p>
            </article>
            <ul className="py-4 grid grid-cols-3 gap-4 " >
                <div className='' >
                <InputCard label="Número de tarjeta" handleChange={(e) => {
                  const { value } = e.target
                  if (/^[0-9-]*$/.test(value)) {
                    return setForm({
                      ...form,
                      nroTarjeta: value.split('').filter((el) => el !== '-').reduce((ac, val, i) => {
                        if (i % 4 === 0 && i !== 0) {
                          return ac + '-' + val
                        }
                        return ac + val
                      }, '')
                    })
                  }
                }
                } name="nroTarjeta" value={form.nroTarjeta} />
                </div>
                <div >
                <InputPayment label="Fecha de vencimiento" handleChange={handleChange} name="fechaVencimiento" type="month" value={form.fechaVencimiento} />
                </div>
                <div>
                <InputPayment max={3} label="CVC" handleChange={(e) => {
                  if (e.target.value.length <= 3) {
                    return setForm({
                      ...form,
                      cvc: parseInt(e.target.value)
                    })
                  }
                }} name="cvc" type="number" value={form.cvc} />
                </div>
            </ul>
    </div>)
}
