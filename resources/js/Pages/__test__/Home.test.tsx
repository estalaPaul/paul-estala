import Home from '../Home'
import { render } from '@testing-library/react'

test('Homepage renders correctly', () => {
    const { getByText } = render(<Home years='22' />)

    getByText('Hey there!')
})
