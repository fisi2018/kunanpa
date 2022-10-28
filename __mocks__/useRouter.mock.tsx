import { NextRouter } from 'next/router'

// eslint-disable-next-line no-undef
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

export function mockNextUseRouter(props: Partial<NextRouter>) {
    useRouter.mockImplementationOnce(() => ({
        ...props
    }))
}
