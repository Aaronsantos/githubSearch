import { runSaga } from 'redux-saga'
import MockAdapter from 'axios-mock-adapter'

import api from '../../../util/api'
import { searchUser, getUserRepos } from '../../../store/modules/search/sagas'
import * as actions from './../../../store/modules/search/actions'
import mockUserData from '../../__mocks__/user.json'
import mockReposData from '../../__mocks__/repos.json'
import errorMessages from '../../../util/errorMessages'

const apiMock = new MockAdapter(api)

describe('Search sagas', () => {
  it('Should be able to fetch user data', async () => {
    const dispatch = jest.fn()

    apiMock.onGet('/users/test').replyOnce(200, mockUserData)

    await runSaga({ dispatch }, searchUser, actions.searchUser('test')).toPromise()
    expect(dispatch).toHaveBeenCalledWith(actions.searchUserSuccess(mockUserData))
  })

  it('Should be able to fetch user repos', async () => {
    const dispatch = jest.fn()

    apiMock.onGet('/users/test/repos').replyOnce(200, mockReposData)

    await runSaga({ dispatch }, getUserRepos, actions.getUserRepos('test')).toPromise()
    expect(dispatch).toHaveBeenCalledWith(actions.getUserReposSuccess(mockReposData))
  })

  it('Should dispatch error action for not found', async () => {
    const dispatch = jest.fn()

    apiMock.onGet('/users/test').replyOnce(404)

    await runSaga({ dispatch }, searchUser, actions.searchUser('test')).toPromise()
    expect(dispatch).toHaveBeenCalledWith(actions.searchUserFailure(errorMessages.userNotFound))
  })

  it('Should dispatch Common error action for internal server error', async () => {
    const dispatch = jest.fn()

    apiMock.onGet('/users/test').replyOnce(500)

    await runSaga({ dispatch }, searchUser, actions.searchUser('test')).toPromise()
    expect(dispatch).toHaveBeenCalledWith(actions.searchUserFailure(errorMessages.commonError))
  })
})
