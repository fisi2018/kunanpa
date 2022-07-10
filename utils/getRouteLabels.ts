export default function getRouteLabels (routes:string):Array<{name:string, href:string}> {
  const array = routes.split('/')
  let route = ''
  return array.map((el, i) => {
    route = i === 0 ? route + el : route + '/' + el
    if (el === '') {
      return {
        name: 'Inicio',
        href: '/'
      }
    }
    return {
      name: formatName(el),
      href: route
    }
  })
}
function formatName (route:string):string {
  return route.replaceAll('-', ' ')
}
