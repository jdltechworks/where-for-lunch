import { handleActions } from 'redux-actions';
import * as types from '../actions/placeActionTypes';

export const initialState = {};
const placeReducer = handleActions(
  {
    [types.SET_DETAILS](state, action) {
      return { ...state, ...action.payload };
    },
  },
  initialState,
);

export default placeReducer;
