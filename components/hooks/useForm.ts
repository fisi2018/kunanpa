import { useState } from 'react'
import { HandlerChange } from '../../types/events'
import { HookForm } from '../../types/hooks'

export const useForm:HookForm = (initForm) => {
  const [form, setForm] = useState(initForm)
  const [loading, setLoading] = useState<boolean>(false)
  const handleChange:HandlerChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }
  return {
    form,
    setForm,
    loading,
    setLoading,
    handleChange
  }
}
