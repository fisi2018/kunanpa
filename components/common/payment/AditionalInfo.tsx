import { HandlerChange } from '@/types/events'
import { PaymentForm } from '@/types/forms'
import { InputTextAreaPayment } from '../inputs'
type Props={
    form:PaymentForm,
    handleChange:HandlerChange,
}
export function AditionalInfo ({ form, handleChange }:Props) {
  return (
        <div>
            <h2 className="font-bold text-xl" >Información adicional</h2>
            <article className="flex justify-between text-gray-500 text-sm py-2" >
                <p>¿Necesitas algo más? ¡Lo haremos por ti!</p>
                <p>Paso 4 de 5</p>
            </article>
            <InputTextAreaPayment handleChange={handleChange} label="Notas de pedido adicional" name="nota" value={form.nota || ''} placeholder="¿Necesita un día de entrega específico? ¿Enviar un regalo? Digamos..." />
        </div>
  )
}
