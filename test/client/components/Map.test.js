import React from 'react';
import { mount } from 'enzyme';

import Map from 'client/components/Map';

const coordinates = {
  longitude: 125.61530880000001,
  latitude: 7.1041023999999995,
}

const component = mount(<Map coordinates={coordinates} />);

describe('Map', () => {
  it('should have a coordinates props when rendered', () => {
    expect(component.prop('coordinates')).toEqual(coordinates);
  });

  it('should have a declared ref for gmaps', () => {
    expect(component.ref('current')).toBeDefined;
  });
});
