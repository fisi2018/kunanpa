import { FormProvider, useAppForm } from '@/hooks'
import { ReactNode } from 'react'
import { UpdateUserForm } from '../../types/forms'
type Props = {
    children?: ReactNode
}
export const FormProviderMock = ({ children }: Props) => {
    const formMethods = useAppForm<UpdateUserForm>()

    return <FormProvider {...formMethods}>{children}</FormProvider>
}
