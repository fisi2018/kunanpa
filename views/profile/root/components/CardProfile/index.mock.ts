import { UpdateUserForm } from '../../types/forms'
import { Profile } from '../../types/models'

export const PROFILE_MOCK: Profile = {
    _id: '3',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    dni: '70481019',
    address: '1234 Main Street',
    img: 'https://robohash.org/molestiasevenietnon.png?size=250x250&set=set4'
}
export const FORM_MOCK_VALID: UpdateUserForm = {
    name: 'John Doe',
    address: '1234 Main Street',
    dni: '70481019'
}
export const FORM_MOCK_INVALID: UpdateUserForm = {
    name: '',
    address: '',
    dni: '123456789'
}
