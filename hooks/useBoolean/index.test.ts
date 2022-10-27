import { act, renderHook } from '@testing-library/react'
import { useBoolean } from '.'

describe('useBoolean hook', () => {
    test('should return current value passed as initial value', () => {
        const { result } = renderHook(() => useBoolean(false))
        expect(result.current.value).toBe(false)
    })
    test('should change value with toggle method', () => {
        const { result } = renderHook(() => useBoolean(false))
        act(() => {
            result.current.toggle()
        })
        expect(result.current.value).toBe(true)
        act(() => {
            result.current.toggle()
        })
        expect(result.current.value).toBe(false)
    })
    test('should change value when use on and off methods', () => {
        const { result } = renderHook(() => useBoolean(false))
        act(() => {
            result.current.on()
        })
        expect(result.current.value).toBe(true)
        act(() => {
            result.current.off()
        })
        expect(result.current.value).toBe(false)
    })
})
