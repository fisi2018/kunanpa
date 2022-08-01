export default function TableDistribution () {
  return (
        <table className=' my-4 divide-y' >
                          <thead>
                            <tr className='text-sm' >
                              <th className='text-left py-2' >Nombre</th>
                              <th className='text-left py-2' >Cantidad</th>
                              <th className='text-left py-2' >Peso Kg (aprox)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className='py-4' >Rosas</td>
                              <td className='py-4' >50 und</td>
                              <td className='py-4' >1.70Kg</td>
                            </tr>
                            <tr>
                              <td className='py-4' >Orquídeas</td>
                              <td className='py-4' >3 und</td>
                              <td className='py-4' >0.80Kg</td>
                            </tr>
                            <tr>
                              <td className='py-4' >Bombones</td>
                              <td className='py-4' >8 und</td>
                              <td className='py-4' >0.03Kg</td>
                            </tr>
                          </tbody>
                        </table>
  )
}
