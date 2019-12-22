import { all } from 'redux-saga/effects'

import searchSagas from './search/sagas'

export default function * rootSaga () {
  return yield all([searchSagas])
}
