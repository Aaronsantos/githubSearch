import { all, call, put, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'
import * as types from './constants'
import * as services from './services'

import errorMessages from '../../../util/errorMessages'

export function * searchUser ({ payload }) {
  try {
    const userResult = yield call(services.getUserByName, payload)
    yield put(actions.searchUserSuccess(userResult))
    yield put(actions.getUserRepos(payload))
  } catch (error) {
    if (error.response.status === 404) {
      yield put(actions.searchUserFailure(errorMessages.userNotFound))
    } else {
      yield put(actions.searchUserFailure(errorMessages.commonError))
    }
  }
}

export function * getUserRepos ({ payload }) {
  try {
    const repos = yield call(services.getUserRepos, payload)
    yield put(actions.getUserReposSuccess(repos))

    const starsAmmount = repos.reduce(
      (ammount, repo) => {
        return ammount + repo.stargazers_count
      }, 0)

    yield put(actions.setUserStarsAmmount(starsAmmount))
  } catch (error) {
    console.error(error)
    yield put(actions.getUserReposFailure(errorMessages.commonError))
  }
}

function * watchSearchUser () {
  return yield takeLatest(types.SEARCH_USER, searchUser)
}

function * watchGetUserRepos () {
  yield takeLatest(types.GET_USER_REPOS, getUserRepos)
}

export default all([
  watchSearchUser(),
  watchGetUserRepos()
])
