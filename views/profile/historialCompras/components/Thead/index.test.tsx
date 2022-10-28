import { render, screen } from '@testing-library/react'
import TableHead from '.'

describe('Table Heading', () => {
    it('should render correctly', () => {
        render(<TableHead />)
        const heading = screen.getByRole('row')
        expect(heading).toBeInTheDocument()
    })
})
