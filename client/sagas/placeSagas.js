import { select, call, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import { selectCuisines } from 'sagas/selectors';
import {
  FETCH_PLACES,
  FETCH_CUISINES,
} from 'actions/placeActionTypes';

import {
  SET_LAT_LNG,
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

function* getCategoriesByAlias() {
  const cuisines = yield select(selectCuisines);
  console.log(cuisines);
  yield put({ type: FETCH_CUISINES, data: 'dummy_data' });
}


function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
  yield takeLatest(SET_LAT_LNG, getCategoriesByAlias);
}

export default placeSagas;
