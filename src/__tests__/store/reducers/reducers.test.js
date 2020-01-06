import reducer, { initialState } from '../../../store/modules/search/reducer'
import * as actions from '../../../store/modules/search/actions'
import mockUser from '../../__mocks__/user.json'
import mockRepos from '../../__mocks__/repos.json'

describe('Search Reducer', () => {
  it('SEARCH_USER', () => {
    const state = reducer(initialState, actions.searchUser('test'))

    const newState = {
      ...initialState,
      loading: true,
      input: 'test',
      error: null
    }
    expect(state).toStrictEqual(newState)
  })
  it('SEARCH_USER_SUCCESS', () => {
    const state = reducer(initialState, actions.searchUserSuccess(mockUser))

    const newState = {
      ...initialState,
      loading: false,
      result: {
        ...initialState.result,
        item: mockUser
      }
    }
    expect(state).toStrictEqual(newState)
  })
  it('SEARCH_USER_FAILURE', () => {
    const state = reducer(initialState, actions.searchUserFailure('testError'))

    const newState = {
      ...initialState,
      loading: false,
      error: 'testError'
    }
    expect(state).toStrictEqual(newState)
  })
  it('GET_USER_REPOS', () => {
    const state = reducer(initialState, actions.getUserRepos('test'))

    const newState = {
      ...initialState,
      result: {
        ...initialState.result,
        repos: {
          ...initialState.result.repos,
          loading: true
        }
      }
    }
    expect(state).toStrictEqual(newState)
  })
  it('GET_USER_REPOS_SUCCESS', () => {
    const state = reducer(initialState, actions.getUserReposSuccess(mockRepos))

    const newState = {
      ...state,
      result: {
        ...state.result,
        repos: {
          ...state.result.repos,
          loading: false,
          list: mockRepos
        }
      }
    }
    expect(state).toStrictEqual(newState)
  })
  it('GET_USER_REPOS_FAILURE', () => {
    const state = reducer(initialState, actions.getUserReposFailure('testError'))

    const newState = {
      ...initialState,
      result: {
        ...initialState.result,
        repos: {
          ...initialState.result.repos,
          loading: false,
          error: 'testError'
        }
      }
    }
    expect(state).toStrictEqual(newState)
  })
  it('SET_USER_STARS_AMMOUNT', () => {
    const state = reducer(initialState, actions.setUserStarsAmmount(5))

    const newState = {
      ...initialState,
      result: {
        ...initialState.result,
        item: {
          ...initialState.result.item,
          stars: 5
        }
      }
    }
    expect(state).toStrictEqual(newState)
  })
})
