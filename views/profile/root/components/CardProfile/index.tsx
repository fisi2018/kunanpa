import { FormProvider, useAppForm } from '@/hooks'
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
    Typography
} from '@material-tailwind/react'
import Image from 'next/image'
import type { UpdateUserForm } from '../../types/forms'
import type { Profile } from '../../types/models'
import { updateUserResolver } from '../../validators'
import EditButton from '../EditButton'
import InputName from '../InputName'
type Props = {
    profile: Profile
}
export default function CardProfile({ profile }: Props) {
    const methods = useAppForm<UpdateUserForm>({
        resolver: updateUserResolver,
        defaultValues: {
            name: profile.name,
            address: profile.address,
            dni: profile.dni
        }
    })
    return (
        <FormProvider {...methods}>
            <form>
                <Card>
                    <CardHeader>
                        <Image
                            width={200}
                            height={200}
                            src={profile.img}
                            alt={profile.name}
                        />
                    </CardHeader>
                    <CardBody className="grid gap-2 place-content-center">
                        <InputName />
                        <Typography
                            className="text-center"
                            variant="small"
                        >
                            {profile.email}
                        </Typography>
                    </CardBody>
                    <CardFooter
                        divider
                        className="grid gap-2 place-content-center"
                    >
                        <Input
                            disabled
                            label="DNI"
                            error={!!methods.formState.errors.dni}
                            {...methods.register('dni')}
                        />
                        <Input
                            disabled
                            label="Dirección"
                            error={!!methods.formState.errors.address}
                            {...methods.register('address')}
                        />
                        <EditButton />
                    </CardFooter>
                </Card>
            </form>
        </FormProvider>
    )
}
