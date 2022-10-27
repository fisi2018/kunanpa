import { useFormContext } from '@/hooks'
import { Input } from '@material-tailwind/react'
import type { UpdateUserForm } from '../../types/forms'
export default function InputName() {
    const {
        register,
        formState: { errors }
    } = useFormContext<UpdateUserForm>()
    return (
        <Input
            disabled
            label="Nombre"
            error={!!errors.name}
            {...register('name')}
        />
    )
}
