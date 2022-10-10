import TabContent from './TabContent'
import TabNavDetails from './TabNavDetails'

type Props={
    origen:string|null,
    contenido:string
}
export default function TabFlowerSection ({ origen, contenido }:Props) {
  return (
        <section className="flex flex-col" >
            <TabNavDetails/>
            <TabContent contenido={contenido} origen={origen} />
        </section>
  )
}
