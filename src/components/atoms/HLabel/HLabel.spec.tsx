// src/components/atoms/HLabel/HLabel.spec.tsx
import { render } from '@testing-library/react'
import { HLabel } from './HLabel'

describe('components > atoms > HLabel', () => {
  it('renders a `label` element', () => {
    const labelText = 'Test Label'
    const { container } = render(<HLabel>{labelText}</HLabel>)
    const labelElement = container.getElementsByClassName('HLabel')[0]
    expect(labelElement.tagName).toBe('LABEL')
    expect(labelElement).toHaveTextContent(labelText)
  })
})
