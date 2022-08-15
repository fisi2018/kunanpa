export function PaymentMethod () {
  return (<div>
         <h2 className="font-bold text-xl" >Método de Pago</h2>
            <article className="flex justify-between text-gray-500 text-sm py-2" >
                <p>Por favor ingrese su método de pago</p>
                <p>Paso 3 de 5</p>
            </article>
            <ul className="py-4" >
                <li >
                    <button className="bg-gray-100 w-full rounded-lg p-2 border flex justify-between border-gray-300 " >
                        <article>
                            <p>Tarjeta de crédito</p>
                        </article>

                        <article>
                            <p>Visa</p>
                        </article>
                    </button>
                </li>
                <li>
                    <button className="bg-gray-100 my-4 w-full rounded-lg p-2 border flex justify-between border-gray-300 " >
                        <article>
                            <p>Paypal</p>
                        </article>

                        <article>
                            <p>Paypal</p>
                        </article>
                    </button>
                </li>
                <li className="mt-4" >
                    <button className="bg-gray-100 w-full rounded-lg p-2 border flex justify-between border-gray-300 " >
                        <article>
                            <p>Bitcoin</p>
                        </article>

                        <article>
                            <p>Bitcoin</p>
                        </article>
                    </button>
                </li>
            </ul>
    </div>)
}
