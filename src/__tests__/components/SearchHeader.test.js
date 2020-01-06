import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'

import SearchHeader from '../../components/SearchHeader'
import history from '../../routes/history'

describe('SearchHeader Component', () => {
  it('SearchHeader renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SearchHeader />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('SearchHeader renders with value passed by props', () => {
    const { getByDisplayValue } = render(<SearchHeader value='test' />)
    expect(getByDisplayValue('test')).toHaveValue('test')
  })

  it('SearchHeader should redirect to gived search', () => {
    history.push = jest.fn()
    const { getByTestId, getByDisplayValue } = render(<SearchHeader value='test' />)
    fireEvent.change(getByDisplayValue('test'), { target: { value: 'newValue' } })
    fireEvent.submit(getByTestId('search-form'))
    expect(history.push).toBeCalledWith('/search/newValue')
  })

  it('Searchheader should render in row layout', () => {
    const { getByTestId } = render(<SearchHeader rowLayout />)
    expect(getByTestId('search-header-container')).toHaveStyle(`
      flex-direction: row;
    `)
  })
})
