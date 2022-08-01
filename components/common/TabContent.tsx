import TableDistribution from './TableDistribution'

type Props={
    origen:string|null,
    contenido:string
}
export default function TabContent ({ origen, contenido }:Props) {
  return (
        <div className='py-8' >
                      <article>
                        <h3 className='font-semibold' >Orígenes</h3>
                        <p>{origen || 'Sin Detalles'}</p>
                      </article>
                      <article className='my-8' >
                        <h3 className='font-semibold' >Contenido</h3>
                        <p>{contenido}</p>
                      </article>
                      <article className='flex flex-col' >
                        <h3 className='font-semibold' >Distribución</h3>
                        <TableDistribution/>
                      </article>
                    </div>
  )
}
