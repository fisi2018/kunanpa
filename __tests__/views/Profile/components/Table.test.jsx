import TableHistorialCompras from '@/views/profile/historialCompras/components/Table'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
describe('Tabla de Historial de compras', () => {
  beforeEach(() => {
    render(<TableHistorialCompras compras={[]} />)
  })
  it('should show a title', () => {
    const title = screen.getByText(/tabla de historial de compras/i)
    // expect(title).toBeInTheDocument()
  })
})
