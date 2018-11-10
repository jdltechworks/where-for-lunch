import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/conditionActionTypes';

const initialState = {
  radius: 500,
  categories: [],
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

      const toBeRemoved = categories.indexOf(payload, 0) !== -1;

      if (toBeRemoved) {
        return {
          ...state,
          categories: [
            ...categories.reduce((result, category, key) => {
              if (category !== payload) {
                result[key] = payload;
              }
              return result;
            }, []),
          ],
        };
      }

      return { ...state, categories: [...categories, payload] };
    },
  },
  initialState,
);

export default conditionReducer;
