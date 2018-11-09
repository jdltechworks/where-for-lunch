import { handleActions } from 'redux-actions';
import * as types from 'actions/placeActionTypes';

const initialState = {
  cuisines: [
    {
      label: 'Barbeque',
      name: 'bbq',
    },
    {
      label: 'Japanese',
      name: 'japanese',
    },
    {
      label: 'Korean',
      name: 'korean',
    },
    {
      label: 'Filipino',
      name: 'filipino',
    },
    {
      label: 'Burgers',
      name: 'burgers',
    },
  ],
};
const placeReducer = handleActions(
  {
    /**
     * I'm a hesitant to use this not adding a details
     * property in the state creating one at setplace action type
     */
    [types.SET_DETAILS](state, action) {
      return { ...state, ...action.payload };
    },
    [types.SET_PLACE](state, { payload }) {
      return {
        ...state,
        details: { ...payload },
      };
    },
  },
  initialState,
);

export default placeReducer;
