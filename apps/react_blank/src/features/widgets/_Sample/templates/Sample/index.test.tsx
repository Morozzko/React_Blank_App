import { render } from '@testing-library/react'
import React from 'react'
import { dti } from '../../constants/data-testid'
import { name } from '../../constants/name'
import { Simple, dtiDictionary } from './index'

import '@app/localization'

const renderCount = 3
const Component = Simple
const componentName = 'Simple'
describe(`${name} ${componentName} Component`, () => {
  const renderSpy = jest.fn()
  beforeEach(() => {
    renderSpy.mock.calls.length = 0
  })

  it(`${name} ${componentName} will render the translated text`, () => {
    const { getByTestId } = render(<Component />)

    const divElement = getByTestId(`${dti}${dtiDictionary}`)
    expect(divElement).toBeInTheDocument()
    expect(divElement).toHaveTextContent('русский')
  })

  it(`should render ${name} ${componentName} only ${renderCount} times`, () => {
    const { rerender } = render(<Component />)
    const WrappedComponent = () => {
      renderSpy()

      return <Component />
    }

    rerender(<WrappedComponent />)
    rerender(<WrappedComponent />)
    rerender(<WrappedComponent />)

    expect(renderSpy.mock.calls.length).toBeLessThanOrEqual(renderCount)
  })
})
