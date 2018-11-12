import { call, takeEvery, takeLatest, put, select } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
  PLACE_BY_ID,
} from '../actions/placeActionTypes';

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

export function* getPlaceById({ payload }) {
  try {
    const place = yield call(getPlaceDetails, payload);
    yield put(placeActions.setDetails(place));
  } catch (e) {
    console.error('Error', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
  yield takeLatest(PLACE_BY_ID, getPlaceById);
}

export default placeSagas;
