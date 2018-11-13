import { hasLatLong } from 'client/lib/utils';
 const coords = { latitude: 10000000, longitude: 100000232111 };
 describe('hasLatLong', () => {
  it('should return true if latlong exists', () => {
    expect(hasLatLong({coords})).toBe(true);
  });
});
