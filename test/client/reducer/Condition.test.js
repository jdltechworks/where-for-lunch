import conditionReducer from 'client/reducers/conditionReducer';
import * as types from 'client/actions/conditionActionTypes';
import actions from 'client/actions/conditionActions';
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
    const withCategoryPayload = conditionReducer(
      state,
      actions.setCategory('restaurant')
    );

    expect(withCategoryPayload).toEqual({
      radius: 500,
      categories: ['restaurant']
    });
  });

  it('should remove a category if a category is already in the array', () => {
    const hasCategoryState = {
      radius: 500,
      categories: ['restaurant']
    };
    const withDuplicate = conditionReducer(hasCategoryState, actions.setCategory('restaurant'));

    expect(withDuplicate).toEqual({
      radius: 500,
      categories: [],
    })
  })
});
