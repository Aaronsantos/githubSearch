import { useSelector, useDispatch } from 'react-redux'

import useSearch from '../../hooks/useSearch'
import { searchUser as searchUserAction, getUserRepos as getUserReposAction } from '../../store/modules/search/actions'

jest.mock('react-redux')

const mockState = {
  search: {
    input: '',
    loading: false,
    error: null,
    result: {
      item: {},
      repos: {
        loading: false,
        list: [],
        error: null
      }
    }
  }
}

describe('useSearch custom hook', () => {
  it('Should return the search initial state', () => {
    useSelector.mockImplementation(cb => cb(mockState))
    const { search } = useSearch()
    expect(JSON.stringify(search)).toBe(JSON.stringify(mockState.search))
  })

  it('Should dispatch search action', () => {
    const dispatch = jest.fn()
    useDispatch.mockReturnValue(dispatch)

    const { searchUser, getUserRepos } = useSearch()
    searchUser('test')
    expect(dispatch).toBeCalledWith(searchUserAction('test'))
    getUserRepos('test')
    expect(dispatch).toBeCalledWith(getUserReposAction('test'))

  })
})
