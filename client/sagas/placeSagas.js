import { call, takeEvery, put, select } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
} from 'actions/placeActionTypes';

import { selectParams } from './selectors';

function* fetchPlace() {
  try {
    const params = yield select(selectParams);
    const places = yield call(getPlaceIds, params);
    const randomPlace = getRandom(places);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
}

export default placeSagas;
