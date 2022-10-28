import type { Session } from 'next-auth'
const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
export const mockSession: Session = {
    accessToken: 'accessToken',
    expires: '1h',
    user: {
        email: 'john.doe@gmail.com',
        avatar: 'https://robohash.org/autemvoluptatemvoluptatem.png?size=50x50&set=set1',
        direccion: 'Lima',
        dni: 707481019,
        id: 7,
        nombre: 'John Doe',
        provider: 'credentials'
    }
}
export const mockUseSession = (props: {
    data: Partial<Session>
    status: 'loading' | 'authenticated' | 'unauthenticated'
}) => {
    useSession.mockImplementationOnce(() => ({
        ...props
    }))
}
