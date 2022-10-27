import { cleanup, render, screen } from '@testing-library/react'
import CardProfile from './index'
import { PROFILE_MOCK } from './index.mock'
describe('CardProfile', () => {
    beforeEach(() => {
        render(<CardProfile profile={PROFILE_MOCK} />)
    })
    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
    })
    test('should render CardProfile', () => {
        const heading = screen.getByRole('img')
        expect(heading).toBeInTheDocument()
    })
    test('should render 3 inputs disabled', () => {
        const inputs = screen.getAllByRole('textbox')
        expect(inputs).toHaveLength(3)
        expect(inputs[0]).toBeDisabled()
        expect(inputs[1]).toBeDisabled()
        expect(inputs[2]).toBeDisabled()
    })
    test('should render edit button', () => {
        const button = screen.getByRole('button', {
            name: /editar/i
        })
        expect(button).toBeInTheDocument()
    })
})
