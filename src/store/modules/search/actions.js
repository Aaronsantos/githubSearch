import {
  SEARCH_USER,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  GET_USER_REPOS,
  GET_USER_REPOS_SUCCESS,
  GET_USER_REPOS_FAILURE,
  SET_USER_STARS_AMMOUNT
} from './constants'

export const searchUser = name => ({
  type: SEARCH_USER,
  payload: name
})

export const searchUserSuccess = data => ({
  type: SEARCH_USER_SUCCESS,
  payload: data
})

export const searchUserFailure = error => ({
  type: SEARCH_USER_FAILURE,
  payload: error
})

export const getUserRepos = name => ({
  type: GET_USER_REPOS,
  payload: name
})

export const getUserReposSuccess = data => ({
  type: GET_USER_REPOS_SUCCESS,
  payload: data
})

export const getUserReposFailure = error => ({
  type: GET_USER_REPOS_FAILURE,
  payload: error
})

export const setUserStarsAmmount = ammount => ({
  type: SET_USER_STARS_AMMOUNT,
  payload: ammount
})
