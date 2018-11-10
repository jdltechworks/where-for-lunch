import { categoriesToString } from 'client/lib/utils';

describe('categoriesToString', () => {
  it('should format an array of object categories to string categories with a comma', () => {
    const categories = [
      {
        alias: 'filipino',
        name: 'Filipino'
      },
      {
        alias: 'chinese',
        name: 'chinese'
      }
    ];

    const formattedCategories = categoriesToString(categories);

    expect(formattedCategories).toEqual('filipino,chinese');
  });
});
