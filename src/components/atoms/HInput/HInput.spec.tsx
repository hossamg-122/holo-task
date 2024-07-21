import { render } from '@testing-library/react'

import { HInput } from '.'

const dummyCallBack = () => {}

describe('components > atoms > HInput', () => {
  it('renders an `input` element', () => {
    const { container } = render(<HInput value="Test value" onChange={dummyCallBack} id="test" />)
    const inputElement = container.getElementsByClassName('HInput')[0]
    expect(inputElement.tagName).toBe('INPUT')
  })

  it('renders an `input` element with value', () => {
    const { container } = render(<HInput value="Test value" id="test" onChange={dummyCallBack} />)
    const inputElement = container.getElementsByClassName('HInput')[0]
    expect(inputElement).toHaveValue('Test value')
  })

  it('renders the HInput component with the given label', () => {
    const { container } = render(
      <HInput label="TestLabel" id="test" value="Test value" onChange={dummyCallBack} />
    )
    const labelElement = container.getElementsByClassName('HLabel')[0]
    expect(labelElement).toHaveTextContent('TestLabel')
  })

  it('renders the HInput component with the given name', () => {
    const { container } = render(
      <HInput label="" id="test" value="Test value" onChange={dummyCallBack} name="testName" />
    )
    const inputElement = container.getElementsByClassName('HInput')[0]
    expect(inputElement).toHaveAttribute('name', 'testName')
  })
})
