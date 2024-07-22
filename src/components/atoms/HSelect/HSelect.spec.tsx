// src/components/atoms/HSelect/HSelect.spec.tsx
import { render, screen } from '@testing-library/react'
import { HSelect } from './HSelect'
import '@testing-library/jest-dom'

describe('component > atoms > HSelect', () => {
  const mockOnChange = jest.fn()

  const defaultProps = {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3' }
    ],
    onChange: mockOnChange,
    id: 'select'
  }

  test('renders without crashing', () => {
    render(<HSelect {...defaultProps} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  test('renders label if provided', () => {
    render(<HSelect {...defaultProps} label="Test Label" />)
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
  })

  test('renders options correctly', () => {
    render(<HSelect {...defaultProps} />)
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(3)
    expect(options[0]).toHaveTextContent('Option 1')
    expect(options[1]).toHaveTextContent('Option 2')
    expect(options[1]).toBeDisabled()
    expect(options[2]).toHaveTextContent('Option 3')
  })

  test('renders placeholder if provided', () => {
    render(<HSelect {...defaultProps} placeholder="Select an option" />)
    expect(screen.getByRole('option', { name: 'Select an option' })).toBeInTheDocument()
  })

  test('applies error styling if hasError is true', () => {
    render(<HSelect {...defaultProps} hasError />)
    expect(screen.getByRole('combobox')).toHaveAttribute('data-error', 'true')
  })

  test('supports aria-label attribute', () => {
    render(<HSelect {...defaultProps} ariaLabel="Select options" />)
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-label', 'Select options')
  })

  test('renders options with aria-label if provided', () => {
    const optionsWithAria = [
      { label: 'Option 1', value: '1', ariaLabel: 'First Option' },
      { label: 'Option 2', value: '2' }
    ]
    render(<HSelect {...defaultProps} options={optionsWithAria} />)

    // Use document.querySelector to find the option
    const option1 = document.querySelector('option[value="1"]')
    expect(option1).toHaveAttribute('aria-label', 'First Option')
  })
})
