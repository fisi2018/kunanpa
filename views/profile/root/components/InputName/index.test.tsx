import { fireEvent, render, screen } from '@testing-library/react'
import InputName from '.'
import { FormProviderMock } from './index.mock'

describe('InputName in CardProfile', () => {
    it('should render correctly', () => {
        const { getByRole } = render(
            <FormProviderMock>
                <InputName disabled={true} />
            </FormProviderMock>
        )
        const input = getByRole('textbox')
        expect(input).toBeInTheDocument()
    })
    it('should input have value typed', () => {
        render(
            <FormProviderMock>
                <InputName disabled={false} />
            </FormProviderMock>
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: 'Marco' } })
        expect(input).toHaveValue('Marco')
    })
})
