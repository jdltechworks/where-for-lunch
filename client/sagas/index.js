import { all } from 'redux-saga/effects';

import placeSagas from './placeSagas';
import { getCuisines } from './cuisinesSagas';

export default function* rootSagas() {
  yield all([
    placeSagas(),
    getCuisines(),
  ]);
}
