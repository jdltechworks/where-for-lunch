export function shapeCategories(params) {
  return params.categories ? params.categories.join(',') : null;
}

export function toSearchPlacesParams(params) {

  const categories = shapeCategories(params);

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
    coordinates: params.coordinates ? params.coordinates : null,
    address: params.location.display_address.join(', '),
    categories: params.categories ? params.categories.map(c => c.title) : null,
    reviewCount: params.review_count,

  };
  return result;
}
