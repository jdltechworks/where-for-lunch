import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/placeActionTypes';

const initialState = {
  cuisines: [
    'restaurant',
    'americantrad',
    'japanese',
    'korean',
    'filipino',
    'mexican',
  ],
};
const placeReducer = handleActions(
  {
    [actionTypes.SET_DETAILS](state, action) {
      return { ...state, ...action.payload };
    },
    [actionTypes.FETCH_CUISINES](state, action) {
      console.log(action);
      return { ...state };
    },
  },
  initialState,
);

export default placeReducer;
