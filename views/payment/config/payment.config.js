export const checkout = (publicKey, idPreference, container, label) => {
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
