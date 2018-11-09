export const shapeCategories = (params) => {
  let categories = ['restaurant'];

  if (params.hasOwnProperty('categories')) {
    const mergedCategories = [
      ...categories,
      ...params.categories
    ];

    //Remove unique elements
    categories = [...(new Set(mergedCategories))].join(',');
  }

  return categories;
};
