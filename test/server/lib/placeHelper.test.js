import { shapeCategories } from 'server/lib/placeHelper';

describe('placeHelper', () => {
  it('should convert categories to string with commas', () => {
    const params = {
      categories: ['restaurant', 'filipino']
    };

    const categories = shapeCategories(params);

    expect(categories).toEqual('restaurant,filipino');
  });
  it('should return null if there are no categories', () => {
    const params = {
    };

    const categories = shapeCategories(params);

    expect(categories).toEqual(null);
  });
});
