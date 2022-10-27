import { useFormContext } from '@/hooks'
import { Input } from '@material-tailwind/react'
import type { UpdateUserForm } from '../../types/forms'
type Props = {
    disabled: boolean
}
export default function InputAddress({ disabled }: Props) {
    const {
        register,
        formState: { errors }
    } = useFormContext<UpdateUserForm>()
    return (
        <Input
            label="Dirección"
            disabled={disabled}
            {...register('address')}
            error={!!errors.address}
        />
    )
}
