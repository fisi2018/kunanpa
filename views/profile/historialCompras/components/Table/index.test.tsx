import { render, screen } from '@testing-library/react'
import TableHistorialCompras from '.'
import { PEDIDOS_MOCK } from './index.mock'

describe('TableHistorialCompras', () => {
    it('should render correctly', () => {
        render(<TableHistorialCompras compras={PEDIDOS_MOCK} />)
        const table = screen.getByRole('table')
        expect(table).toBeInTheDocument()
    })
})
