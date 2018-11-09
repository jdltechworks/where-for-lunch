import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds, getPlaceDetailsd } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
  PLACE_BY_ID,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* getPlaceById({ payload }) {
  try {
    const place = yield call(getPlaceDetails, payload);
    yield put(placeActions.setPlace(place));
  } catch (e) {
    console.error('Error', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
  yield takeLatest(PLACE_BY_ID, getPlaceById);
}

export default placeSagas;
