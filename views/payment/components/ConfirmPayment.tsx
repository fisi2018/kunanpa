import Loader from '@/components/common/Loader'

type Props={
    loading:boolean
}
export function ConfirmPayment ({ loading }:Props) {
  return (
        <div>
            <h2 className="font-bold text-xl" >Realizar Pedido</h2>
            <article className="flex justify-between text-gray-500 text-sm py-2" >
                <p>Estamos llegando al final. ¡Solo unos pocos clics y su pedido está listo!</p>
                <p>Paso 3 de 3</p>
            </article>

            <article>
                {
                    loading
                      ? <Loader/>
                      : <button type="submit" className="bg-red-700 text-white font-bold rounded-lg py-2 px-4" >Completar orden</button>
                }
            </article>
        </div>
  )
}
