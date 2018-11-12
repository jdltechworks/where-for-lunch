import { put, call } from 'redux-saga/effects'
import { getPlaceById } from 'client/sagas/placeSagas';
import { getPlaceDetails } from 'client/services/placeApi';
import placeActions from 'client/actions/placeActions';

const id = '112sadfasdwq';
const gen = getPlaceById({ payload: id });

describe('getPlaceById', () => {
  it('should be able call a server request', () => {
    expect(gen.next().value).toEqual(call(getPlaceDetails, id));
  });

  it('should able to receive a server response', () => {
    expect(gen.next().value).toEqual(put(placeActions.setDetails()));
  });
})
