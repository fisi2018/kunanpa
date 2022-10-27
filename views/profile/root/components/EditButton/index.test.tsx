import { render } from '@testing-library/react'
import EditButton from '.'

describe('EditButton in CardProfile', () => {
    it('should render correctly', () => {
        const { getByRole } = render(<EditButton onClick={() => {}} />)
        const button = getByRole('button', {
            name: /editar/i
        })
        expect(button).toBeInTheDocument()
    })
})
