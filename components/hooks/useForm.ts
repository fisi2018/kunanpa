import { useEffect, useState } from 'react'
import { HandlerChange } from '../../types/events'
import { HookForm } from '../../types/hooks'

export const useForm:HookForm = (initForm, validation) => {
  const [form, setForm] = useState(initForm)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(validation(initForm))
  useEffect(() => {
    setError(validation(form))
  }, [form])
  const handleChange:HandlerChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }
  return {
    form,
    error,
    setForm,
    loading,
    setLoading,
    handleChange
  }
}
