import { useCallback, useState } from 'react'

export const useBoolean = (initValue:boolean) => {
  const [value, setValue] = useState<boolean>(initValue)
  const toogle = useCallback(() => {
    setValue(prev => !prev)
  }, [])
  return {
    value,
    toogle,
    setValue
  }
}
