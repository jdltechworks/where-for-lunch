export function toSearchPlacesParams(params) {

  const categories = params.categories.join(',');
<<<<<<< HEAD

=======
  
>>>>>>> 1a48323f13ce656ee2a1c230770445df20148332
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
