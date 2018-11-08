import axios from 'axios';
import { PLACES_API_PATH } from 'constants/apiPaths';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common = {
  Accept: 'application/json, application/xml, text/play, text/html, *.*',
  'Content-Type': 'application/json',
};

export const fetchCuisines = ({ radius }) => {
  console.log(PLACES_API_PATH);
  console.log(radius);
  return axios.get(`${PLACES_API_PATH}/`, { params: { radius: 500 } });
};
