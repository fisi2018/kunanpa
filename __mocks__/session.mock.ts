import type { Session } from 'next-auth'

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
