import { render } from '@testing-library/react'
import React from 'react'
import { dti } from '../constants/data-testid'
import { name } from '../constants/name'
import { UI } from './index'

import '@app/localization'

const renderCount = 3

describe(`${name}UI Component`, () => {
  it('renders the translated text', () => {
    const { getByTestId } = render(<UI />)

    const divElement = getByTestId(`${dti}sample`)
    expect(divElement).toBeInTheDocument()
    expect(divElement).toHaveTextContent('русский')
  })

  it(`should render ${name} UI only ${renderCount}`, () => {
    const renderSpy = jest.fn()
    const { rerender, getByTestId } = render(<UI />)

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
