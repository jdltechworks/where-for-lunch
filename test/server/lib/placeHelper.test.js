import { shapeCategories } from 'server/lib/placeHelper';

describe('placeHelper', () => {
  it('should remove a duplicate category and convert to string with commas', () => {
    const params = {
      categories: ['restaurant', 'filipino']
    };

    const categories = shapeCategories(['restaurant'], params);

    expect(categories).toEqual('restaurant,filipino');
  });
});
