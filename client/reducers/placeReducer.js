import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/placeActionTypes';

const initialState = {
  cuisines: [
    {
      display: 'Barbeque',
      value: 'bbq',
    },
    {
      display: 'Japanese',
      value: 'japanese',
    },
    {
      display: 'Korean',
      value: 'korean',
    },
    {
      display: 'Filipino',
      value: 'filipino',
    },
    {
      display: 'Burgers',
      value: 'burgers',
    },
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
