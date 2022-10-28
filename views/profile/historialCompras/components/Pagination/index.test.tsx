import { render, screen } from '@testing-library/react'
import Pagination from '.'
import { ENLACES_MOCK } from './index.mock'

describe('Pagination', () => {
    it('should render correctly', () => {
        render(
            <Pagination
                enlaces={ENLACES_MOCK}
                setPage={() => {}}
            />
        )
        const pagination = screen.getByRole('navigation')
        expect(pagination).toBeInTheDocument()
    })
})
