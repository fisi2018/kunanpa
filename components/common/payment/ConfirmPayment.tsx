import Loader from '../Loader'

type Props={
    loading:boolean
}
export function ConfirmPayment ({ loading }:Props) {
  return (
        <div>
            <h2 className="font-bold text-xl" >Confirmación</h2>
            <article className="flex justify-between text-gray-500 text-sm py-2" >
                <p>Estamos llegando al final. ¡Solo unos pocos clics y su pedido está listo!</p>
                <p>Paso 4 de 4</p>
            </article>
            <ul className="py-4" >
                <li>
                    <div className="bg-gray-100 w-full rounded-lg p-2 border flex justify-between border-gray-300 " >
                        <article>
                            <p>Estoy de acuerdo con el envío de correos electrónicos de marketing y boletines</p>
                        </article>
                    </div>
                </li>
                <li className="mt-4" >
                    <div className="bg-gray-100 w-full rounded-lg p-2 border flex justify-between border-gray-300 " >
                        <article>
                            <p>Estoy de acuerdo con nuestros términos y condiciones y políticas de privacidad</p>
                        </article>
                    </div>
                </li>
            </ul>
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
