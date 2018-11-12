import React from 'react';
import { mount } from 'enzyme';

import Image from 'client/components/Image/Image';
const src = 'https://s3-media2.fl.yelpcdn.com/bphoto/akvvY6hfie4hfcSfFTxjqQ/o.jpg';
const component = mount(
  <Image src={src} />
);

describe('Image', () => {
  it('should have an src props', () => {
    expect(component.props().src).toEqual(src);
  });
});
