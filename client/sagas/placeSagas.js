import { call, select, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import { selectCondition } from 'sagas/selectors';
import {
  FETCH_PLACES,
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

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
  yield takeLatest(SET_CATEGORY, getPlacesWithCategories);
}

export default placeSagas;
