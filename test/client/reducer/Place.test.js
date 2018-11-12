import placeReducer, { initialState } from 'client/reducers/placeReducer';
import placeActions from 'client/actions/placeActions';

const place = {
  cuisines: [
    {
      label: 'Barbeque',
      name: 'bbq',
    },
    {
      label: 'Japanese',
      name: 'japanese',
    },
    {
      label: 'Korean',
      name: 'korean',
    },
    {
      label: 'Filipino',
      name: 'filipino',
    },
    {
      label: 'Burgers',
      name: 'burgers',
    },
  ],
  rating: 4,
  phone: '+639301197713',
  id: 'Hy1JFONhP4dU5s7K0LDy3A',
  name: 'Perch Modern Kitchen + Bar',
  img: 'https://s3-media3.fl.yelpcdn.com/bphoto/DuQofr9tsAEhjY6GO1VEmg/o.jpg',
  distance: 691.5024419426251,
  address: 'Quimpo Boulevard, 2/F, Fes 13, Al Fresco, Felcris Centrale Mall, Poblacion District, Davao del Sur, Philippines',
  categories: [
    'Bars',
    'Filipino'
  ],
  reviewCount: 1
};

describe('placeReducer', () => {
  it('should be able to have values once called', () => {
    const initialReducer = placeReducer(undefined, {})
    expect(initialReducer).toEqual(initialState);
  });
  it('should render the correct details when action setDetails is used', () => {
    const reducer = placeReducer(initialState, placeActions.setDetails(place));

    expect(reducer).toEqual(place);
  });
});
