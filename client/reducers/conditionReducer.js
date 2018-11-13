import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/conditionActionTypes';

const initialState = {
  radius: 500,
  categories: [],
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
const conditionReducer = handleActions(
  {
    [actionTypes.SET_RADIUS](state, action) {
      return { ...state, radius: action.payload };
    },
    [actionTypes.SET_LAT_LNG](state, action) {
      const { latitude, longitude } = action.payload;
      return { ...state, latitude, longitude };
    },
    [actionTypes.SET_CATEGORY](state, { payload }) {
      const { categories } = state;
      // if category does not exist
      if (categories.indexOf(payload, 0) === -1) {
        return { ...state, categories: [...categories, payload] };
      }

      return {
        ...state,
        categories: [...categories.filter(category => category !== payload)],
      };
    },
  },
  initialState,
);

export default conditionReducer;
