export const checkout = (publicKey:string, idPreference:string, container:string, label:string) => {
  // eslint-disable-next-line no-undef
  const mp = new MercadoPago(publicKey, {
    locale: 'es-PE'
  })

  mp.checkout({
    preference: {
      id: idPreference
    },
    render: {
      container,
      label
    }
  })
}
