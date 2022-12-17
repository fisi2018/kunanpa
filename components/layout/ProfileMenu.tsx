import { logout } from '@/services/auth'
import {
    Avatar,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList
} from '@material-tailwind/react'
import type { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import swal from 'sweetalert'
type Props = {
    session: Session
}
export default function ProfileMenu({ session }: Props) {
    const handleLogout = async () => {
        try {
            if (!session) throw new Error('No iniciaste sesión')
            if (session.user.provider === 'credentials') {
                const res = await swal({
                    title: 'Cerrar Sesión',
                    text: '¿Está seguro de cerrar sesión?',
                    icon: 'warning',
                    buttons: {
                        cancel: true,
                        confirm: true
                    }
                })
                if (!res) return
                const response = await logout(session.accessToken)
                console.log('response', response)
                return await signOut()
            }
            return await signOut()
        } catch (err) {
            const error = err as Error
            return swal('Ha ocurrido un error', error.message, 'error')
        }
    }
    return (
        <Menu>
            <MenuHandler>
                <IconButton
                    color="white"
                    size="lg"
                    variant="text"
                >
                    <Avatar
                        size="xs"
                        variant="circular"
                        src={session.user.avatar}
                        alt={session.user.nombre}
                    />
                </IconButton>
            </MenuHandler>
            <MenuList>
                <MenuItem>
                    <Link href="/profile">
                        <a>Mi Perfil</a>
                    </Link>
                </MenuItem>
                <MenuItem className="flex">
                    <Link href="/profile/historial-compras">
                        <a>Historial de Compras </a>
                    </Link>
                </MenuItem>
                <MenuItem className="flex">
                    <Link href="/profile/wish-list">
                        <a>Lista de Deseos</a>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Button onClick={handleLogout}>Cerrar Sesión</Button>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
