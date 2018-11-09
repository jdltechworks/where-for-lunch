import { call, select, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { getPlaceIds, getPlaceDetails } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import { selectCondition } from 'sagas/selectors';
import {
  FETCH_PLACES,
  PLACE_BY_ID,
} from 'actions/placeActionTypes';

import {
  SET_CATEGORY,
} from 'actions/conditionActionTypes';

function* fetchPlace(action) {
  try {
    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* getPlacesWithCategories() {
  try {
    const condition = yield select(selectCondition);
    const places = yield call(getPlaceIds, condition);
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
  yield takeLatest(SET_CATEGORY, getPlacesWithCategories);
  yield takeLatest(PLACE_BY_ID, getPlaceById);
}

export default placeSagas;
