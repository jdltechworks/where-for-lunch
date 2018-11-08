import { put, call, select } from 'redux-saga/effects';
import { fetchCuisines } from 'services/cuisinesApi';
import {
  FETCH_CUISINES,
} from 'actions/placeActionTypes';
/**
 * Get cuisines for now just limit to 15
 */


const getConditions = ({ condition }) => {
  return condition;
};


export function* getCuisines() {
  const params = yield select(getConditions);
  const { data } = yield call(fetchCuisines, { params });
  console.log(data);
  yield put({ type: FETCH_CUISINES, data });
}
