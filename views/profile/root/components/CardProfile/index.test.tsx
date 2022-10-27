import { cleanup, fireEvent, render, screen } from '@testing-library/react'
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
        const inputsText = screen.getAllByRole('textbox')
        const inputDni = screen.getByRole('spinbutton')
        expect(inputsText).toHaveLength(2)
        expect(inputsText[0]).toBeDisabled()
        expect(inputsText[1]).toBeDisabled()
        expect(inputDni).toBeDisabled()
    })
    test('should render edit button', () => {
        const button = screen.getByRole('button', {
            name: /editar/i
        })
        expect(button).toBeInTheDocument()
    })
    test('should enable inputs when edit button is clicked and hide editar button', () => {
        const button = screen.getByRole('button', {
            name: /editar/i
        })
        fireEvent.click(button)
        const inputsText = screen.getAllByRole('textbox')
        const inputDni = screen.getByRole('spinbutton')
        expect(inputsText[0]).not.toBeDisabled()
        expect(inputsText[1]).not.toBeDisabled()
        expect(inputDni).not.toBeDisabled()
        expect(button).not.toBeInTheDocument()
    })
})
