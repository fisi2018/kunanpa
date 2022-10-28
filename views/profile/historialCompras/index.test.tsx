/* eslint-disable jest/no-mocks-import */
import {
    LayoutMock,
    mockNextUseRouter,
    mockSession,
    mockUseSession
} from '@/__mocks__'
import { render, screen } from '@testing-library/react'
import HistorialCompras from '.'
jest.mock('@/components/layout', () => LayoutMock)
describe('Historial Compras Page', () => {
    it('should render correctly title and table', async () => {
        mockUseSession({
            data: mockSession,
            status: 'authenticated'
        })
        mockNextUseRouter({
            route: '/profile/historial-compras'
        })
        render(<HistorialCompras categories={[]} />)
        const title = screen.getByRole('heading', {
            name: /historial de compras/i
        })
        const table = screen.getByRole('table')
        expect(title).toBeInTheDocument()
        expect(table).toBeInTheDocument()
    })
})
