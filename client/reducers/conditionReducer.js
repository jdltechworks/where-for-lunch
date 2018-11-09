import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/conditionActionTypes';

const initialState = {
  radius: 500,
  categories: ['restaurant'],
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
      const index = categories.indexOf(payload, 0);

      if (index !== -1) {
        return {
          ...state,
          categories: [
            ...categories.reduce((acc, category, i) => {
              if (category !== payload) {
                acc[i] = category;
              }
              return acc;
            }, []),
          ],
        };
      }
      return { ...state, categories: [...state.categories, payload] };
    },
  },
  initialState,
);

export default conditionReducer;
