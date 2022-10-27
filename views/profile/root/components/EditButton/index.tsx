import { Button } from '@material-tailwind/react'
type Props = {
    onClick: () => void
}
export default function EditButton({ onClick }: Props) {
    return <Button onClick={onClick}>Editar</Button>
}
