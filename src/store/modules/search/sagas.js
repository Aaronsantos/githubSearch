import { all, call, put, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'
import * as types from './constants'
import * as services from './services'

import errorMessages from '../../../util/errorMessages'

function * searchUser ({ payload }) {
  try {
    const userResult = yield call(services.getUserByName, payload)
    if (userResult.length === 0) {
      yield put(actions.searchUserFailure(errorMessages.userNotFound))
    } else {
      yield put(actions.searchUserSuccess(userResult))
    }
  } catch (error) {
    if (error.response.code === 404) {
      yield put(actions.searchUserFailure(errorMessages.userNotFound))
    } else {
      yield put(actions.searchUserFailure(errorMessages.commonError))
    }
  }
}

function * getUserRepos ({ payload }) {
  try {
    const repos = yield call(services.getUserRepos, payload)
    yield put(actions.getUserReposSuccess(repos))
  } catch (error) {
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
