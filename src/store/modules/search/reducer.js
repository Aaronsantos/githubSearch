import {
  SEARCH_USER,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  GET_USER_REPOS,
  GET_USER_REPOS_SUCCESS,
  GET_USER_REPOS_FAILURE
} from './constants'

const initialState = {
  input: '',
  loading: false,
  error: null,
  result: {
    item: null,
    repos: {
      loading: false,
      list: [],
      error: null
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER:
      return ({
        ...state,
        input: action.payload,
        loading: true
      })
    case SEARCH_USER_SUCCESS:
      return ({
        ...state,
        loading: false,
        result: {
          ...state.result,
          item: action.payload
        }
      })
    case SEARCH_USER_FAILURE:
      return ({
        ...state,
        loading: false,
        error: action.payload
      })
    case GET_USER_REPOS:
      return ({
        ...state,
        result: {
          ...state.result,
          repos: {
            ...state.result.repos,
            loading: true
          }
        }
      })
    case GET_USER_REPOS_SUCCESS:
      return ({
        ...state,
        result: {
          ...state.result,
          repos: {
            ...state.result.repos,
            loading: false,
            list: action.payload
          }
        }
      })
    case GET_USER_REPOS_FAILURE:
      return ({
        ...state,
        result: {
          ...state.result,
          repos: {
            ...state.result.repos,
            loading: false,
            error: action.payload
          }
        }
      })
  }
  return state
}

export default reducer
