import { render } from '@testing-library/react'
import React from 'react'
import { dti } from '../constants/data-testid'
import { name } from '../constants/name'
import { dtiDictionary, UI } from './index'

import '@app/localization'

const renderCount = 3

describe(`${name} UI Component`, () => {
  const renderSpy = jest.fn()
  beforeEach(() => {
    renderSpy.mock.calls.length = 0
  })

  it(`${name} UI will render the translated text`, () => {
    const { getByTestId } = render(<UI />)

    const divElement = getByTestId(`${dti}${dtiDictionary.mainDiv}`)
    expect(divElement).toBeInTheDocument()
    expect(divElement).toHaveTextContent('русский')
  })

  it(`should render ${name} UI only ${renderCount} times`, () => {
    const { rerender } = render(<UI />)
    const WrappedComponent = () => {
      renderSpy()

      return <UI />
    }

    rerender(<WrappedComponent />)
    rerender(<WrappedComponent />)
    rerender(<WrappedComponent />)

    expect(renderSpy.mock.calls.length).toBeLessThanOrEqual(renderCount)
  })
})
