export const createTitleAdapter = (title:string):string => {
  const array = title.split('-')
  array.pop()
  return array.join(' ')
}
