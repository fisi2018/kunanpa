import { useFormContext } from '@/hooks'
import { Input, Typography } from '@material-tailwind/react'
import type { UpdateUserForm } from '../../types/forms'
type Props = {
    disabled: boolean
}
export default function InputName({ disabled }: Props) {
    const {
        register,
        formState: { errors }
    } = useFormContext<UpdateUserForm>()
    return (
        <>
            <Input
                disabled={disabled}
                label="Nombre"
                error={!!errors.name}
                {...register('name')}
            />
            {errors.name ? (
                <Typography
                    color="red"
                    variant="small"
                >
                    {errors.name.message}
                </Typography>
            ) : (
                <></>
            )}
        </>
    )
}
