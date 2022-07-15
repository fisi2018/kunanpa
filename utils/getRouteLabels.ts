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
  }).filter((el) => {
    if (!/^\[.{1,}\]$/i.test(el.name)) {
      return 1
    }
    return 0
  })
}
function formatName (route:string):string {
  return route.replaceAll('-', ' ')
}
