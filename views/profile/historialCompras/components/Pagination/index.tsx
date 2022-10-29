import { Button } from '@material-tailwind/react'
import { Dispatch, SetStateAction } from 'react'
import { EnlaceResponse } from '../../types/responses'

type Props = {
    enlaces: EnlaceResponse[]
    setPage: Dispatch<SetStateAction<number>>
}
export default function Pagination({ enlaces, setPage }: Props) {
    return (
        <nav className="flex flex-row justify-center gap-2 items-center">
            {enlaces.map(enlace => {
                return (
                    <Button
                        onClick={() => setPage(parseInt(enlace.label))}
                        color="blue-gray"
                        variant={enlace.active ? 'gradient' : 'text'}
                        key={enlace.url}
                        className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
                    >
                        {enlace.label}
                    </Button>
                )
            })}
        </nav>
    )
}
