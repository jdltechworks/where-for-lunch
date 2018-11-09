import React from 'react';
import { mount } from 'enzyme';

import Details from 'client/components/Details';

const component = mount(
  <Details info={{
    categories: [{
      alias: 'seveneleven',
      name: 'cookie'
    }],
    location: {
      display_address: ['x', 'y', 'z']
    },
    name: '7-Eleven',
    phone: '1234123',
  }} />
)

describe('Details', () => {
  it('should have an info props', () => {
    expect(component.props().info).toBeDefined;
  });
  it('should have a rendered children', () => {
    const expected = {
      categories: [{
        alias: 'seveneleven',
        name: 'cookie'
      }],
      location: {
        display_address: ['x', 'y', 'z']
      },
      name: '7-Eleven',
      phone: '1234123',
    };
    expect(component.props().info).toEqual(expected);
  });
});
