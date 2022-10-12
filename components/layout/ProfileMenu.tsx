import { logout } from '@/services/auth'
import { Avatar, Button, IconButton, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import type { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
type Props={
    session:Session
}
export default function ProfileMenu ({ session }:Props) {
  const handleLogout = async () => {
    try {
      if (!session) throw new Error('No iniciaste sesión')
      if (session.user.provider === 'credentials') {
        const response = await logout(session.accessToken)
        alert(response.message)
        return await signOut()
      }
      return await signOut()
    } catch (err) {
      const error = err as Error
      return alert(error.message)
    }
  }
  return (
        <Menu>
            <MenuHandler>
               <IconButton color='white' size='lg' variant='text' >
                <Avatar size='xs' variant='circular' src={session.user.avatar} alt={session.user.email} />
               </IconButton>
            </MenuHandler>
            <MenuList>
                <MenuItem className='flex' >
                <Link href="/profile/wish-list" >
                <a>Lista de Deseos</a>
                </Link>
                </MenuItem>
                <MenuItem>
                    <Button onClick={handleLogout} >Cerrar Sesión</Button>
                </MenuItem>
            </MenuList>
        </Menu>
  )
}
