import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<Home />)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
