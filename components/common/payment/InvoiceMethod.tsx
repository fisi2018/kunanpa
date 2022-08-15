export function InvoiceMethod () {
  return (
        <div>
            <h2 className="font-bold text-xl" >Método de Facturación</h2>
            <article className="flex justify-between text-gray-500 text-sm py-2" >
                <p>Por favor ingrese su método de facturación</p>
                <p>Paso 2 de 5</p>
            </article>
            <ul className="py-4" >
                <li>
                    <button className="bg-gray-100 w-full rounded-lg p-2 border flex justify-between border-gray-300 " >
                        <article>
                            <p>Fedex</p>
                        </article>
                        <article className="flex" >
                            <p>+32 USD</p>
                            <p>Additional price</p>
                        </article>
                        <article>
                            <p>Fedex</p>
                        </article>
                    </button>
                </li>
                <li className="mt-4" >
                    <button className="bg-gray-100 w-full rounded-lg p-2 border flex justify-between border-gray-300 " >
                        <article>
                            <p>DHL</p>
                        </article>
                        <article className="flex" >
                            <p>+15 USD</p>
                            <p>Additional price</p>
                        </article>
                        <article>
                            <p>DHL</p>
                        </article>
                    </button>
                </li>
            </ul>
        </div>
  )
}
