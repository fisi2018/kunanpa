import { FormProvider, useAppForm } from '@/hooks'
import { ReactNode } from 'react'
import { UpdateUserForm } from '../../types/forms'
import { updateUserResolver } from '../../validators'
type Props = {
    children?: ReactNode
}
export const FormProviderMock = ({ children }: Props) => {
    const formMethods = useAppForm<UpdateUserForm>({
        resolver: updateUserResolver,
        defaultValues: {
            name: 'John Doe'
        }
    })

    return <FormProvider {...formMethods}>{children}</FormProvider>
}
