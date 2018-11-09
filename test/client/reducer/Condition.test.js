import conditionReducer from 'client/reducers/conditionReducer';
import * as types from 'client/actions/conditionActionTypes';

let state = {
  radius: 500,
  categories: [],
};


describe('conditionReducer', () => {
  it('should return an initialState', () => {
    const initialReducer = conditionReducer(undefined, {})
    expect(initialReducer).toEqual(state);
  });

  it('should add a category', () => {
    let withCategoryPayload = conditionReducer(state, {
        type: types.SET_CATEGORY,
        payload: 'restaurant',
    });

    expect(withCategoryPayload).toEqual({
      radius: 500,
      categories: ['restaurant']
    });
  });

  it('should remove a category if a category is already in the array', () => {
    let hasCategoryState = {
      radius: 500,
      categories: ['restaurant']
    };
    const withDuplicate = conditionReducer(hasCategoryState, {
      type: types.SET_CATEGORY,
      payload: 'restaurant'
    });

    expect(withDuplicate).toEqual({
      radius: 500,
      categories: [],
    })
  })
});
