export const shapeCategories = (defaultValue, params) => {
  let categories = defaultValue.length > 0 ? defaultValue : ['all'];

  if (params.hasOwnProperty('categories')) {
    const mergedCategories = [
      ...categories,
      ...params.categories
    ];

    //Remove unique elements
    categories = [...(new Set(mergedCategories))].join(',');
    return categories;
  }

  return categories.join(',');
};

export function toSearchPlacesParams(params) {

  const categories = shapeCategories(['restaurant'], params);

  const result = {
    term: 'food',
    latitude: params.latitude,
    longitude: params.longitude,
    radius: params.radius,
    limit: 50,
    categories,
    open_now: true,
  };
  return result;
}

export function fromSearchPlacesParams(params) {
  const result = {
    rating: params.rating,
    price: params.price,
    phone: params.phone,
    id: params.id,
    name: params.name,
    img: params.image_url,
    distance: params.distance,
    address: params.location.display_address.join(', '),
    categories: params.categories ? params.categories.map(c => c.title) : null,
    reviewCount: params.review_count,
  };
  return result;
}
