import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import { Profile } from '../types/models'
type Props={
    profile:Profile
}
export default function CardProfile ({ profile }:Props) {
  return (
        <Card>
            <CardHeader>
                <Image width={200} height={200} src={profile.img} alt={profile.name} />
            </CardHeader>
            <CardBody className='grid gap-2 place-content-center' >
                <Typography className="text-center" variant="h6" >{profile.name}</Typography>
                <Typography className="text-center" variant="small" >{profile.email}</Typography>
            </CardBody>
            <CardFooter divider className='grid gap-2 place-content-center' >
                <Typography className="text-center" variant="small" >{profile.dni}</Typography>
                <Typography className="text-center" variant="small" >{profile.address}</Typography>
            </CardFooter>
        </Card>
  )
}
