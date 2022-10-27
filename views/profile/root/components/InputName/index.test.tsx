import { render } from '@testing-library/react'
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
})
