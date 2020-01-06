import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import SearchPage from '../../pages/Search'
import mockstate from '../__mocks__/state.json'
import useSearch from '../../hooks/useSearch'

const history = createMemoryHistory()
const renderWithRouter = node => render(
  <Router history={history} >
    <SearchPage />
  </Router>
)

const mockSearchUser = jest.fn()
jest.mock('../../hooks/useSearch')
useSearch.mockImplementation(() => ({ search: mockstate, searchUser: mockSearchUser }))

describe('Search Page', () => {
  it('Search page renders without crashing', () => {
    renderWithRouter(<SearchPage />)
  })

  it('SearchHeader should redirect to gived search', () => {
    renderWithRouter(<SearchPage />)
    expect(mockSearchUser).toBeCalled()
  })
})
