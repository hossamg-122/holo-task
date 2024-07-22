import { render, screen } from '@testing-library/react'
import { HHeading } from './HHeading'

describe('HHeading Component', () => {
  test('renders with correct heading level', () => {
    render(<HHeading level={1}>Heading Level 1</HHeading>)
    expect(screen.getByText('Heading Level 1')).toHaveProperty('tagName', 'H1')

    render(<HHeading level={3}>Heading Level 3</HHeading>)
    expect(screen.getByText('Heading Level 3')).toHaveProperty('tagName', 'H3')
  })

  test('renders with custom element using `as` prop', () => {
    render(
      <HHeading as="h2" level={4}>
        Custom Heading
      </HHeading>
    )
    expect(screen.getByText('Custom Heading')).toHaveProperty('tagName', 'H2')
  })

  test('applies the correct class names based on `level` prop', () => {
    render(<HHeading level={5}>Heading Level 5</HHeading>)
    const heading = screen.getByText('Heading Level 5')
    expect(heading).toHaveClass('HHeading Level5') // Adjust this based on the actual CSS class names
  })

  test('sets `data-test` attribute correctly', () => {
    render(
      <HHeading level={2} dataTest="test-id">
        Test Heading
      </HHeading>
    )
    expect(screen.getByText('Test Heading')).toHaveAttribute('data-test', 'test-id')
  })

  test('renders children correctly', () => {
    render(<HHeading level={6}>Child Content</HHeading>)
    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })
})
