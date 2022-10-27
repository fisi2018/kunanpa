import { Button } from '@material-tailwind/react'

export default function EditButton() {
    const handleClick = () => {
        console.log('click')
    }
    return <Button onClick={handleClick}>Editar</Button>
}
