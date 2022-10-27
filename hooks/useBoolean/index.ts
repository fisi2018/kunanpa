import { useCallback, useState } from 'react'

export const useBoolean = (initValue: boolean) => {
    const [value, setValue] = useState<boolean>(initValue)
    const toggle = useCallback(() => {
        setValue(prev => !prev)
    }, [])
    const on = () => setValue(true)
    const off = () => setValue(false)
    return {
        value,
        toggle,
        on,
        off
    }
}
