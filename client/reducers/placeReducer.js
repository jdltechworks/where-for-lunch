import { handleActions } from 'redux-actions';
import * as types from '../actions/placeActionTypes';

const initialState = {};
const placeReducer = handleActions(
  {
    [types.SET_DETAILS](state, action) {
      return { ...state, ...action.payload };
    },
  },
  initialState,
);

export default placeReducer;
