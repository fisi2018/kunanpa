import { FormProvider, SubmitHandler, useAppForm, useBoolean } from '@/hooks'
import { handleError } from '@/utilities/handleErrors'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography
} from '@material-tailwind/react'
import Image from 'next/image'
import type { UpdateUserForm } from '../../types/forms'
import type { Profile } from '../../types/models'
import { updateUserResolver } from '../../validators'
import EditButton from '../EditButton'
import InputAddress from '../InputAddress'
import InputDni from '../InputDni'
import InputName from '../InputName'
type Props = {
    profile: Profile
}
export default function CardProfile({ profile }: Props) {
    const { value: isEditing, toogle } = useBoolean(false)
    const methods = useAppForm<UpdateUserForm>({
        resolver: updateUserResolver,
        defaultValues: {
            name: profile.name,
            address: profile.address,
            dni: profile.dni
        }
    })
    const onSubmit: SubmitHandler<UpdateUserForm> = form => {
        try {
            console.log('form', form)
        } catch (e) {
            const error = e as Error
            handleError(error.message)
        }
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                        <InputName disabled={!isEditing} />
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
                        <InputDni disabled={!isEditing} />
                        <InputAddress disabled={!isEditing} />
                        {isEditing ? (
                            <div>
                                <Button
                                    color="light-green"
                                    type="submit"
                                >
                                    Actualizar
                                </Button>
                                <Button
                                    onClick={() => {
                                        methods.reset()
                                        toogle()
                                    }}
                                    color="red"
                                >
                                    Cancelar
                                </Button>
                            </div>
                        ) : (
                            <EditButton onClick={toogle} />
                        )}
                    </CardFooter>
                </Card>
            </form>
        </FormProvider>
    )
}
