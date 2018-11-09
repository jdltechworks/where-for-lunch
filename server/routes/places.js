import { Router } from 'express';

<<<<<<< HEAD
import { searchPlaces } from 'services/yelp';

=======
import { searchPlaces, fetchPlaceById } from '../services/yelp';
>>>>>>> Adding place details page plus compoenent test
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
} from 'lib/placeHelper';

const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:id', async ({ params }, res) => {
  const data = await fetchPlaceById(params.id);

  res.send(data);
});

export default router;
