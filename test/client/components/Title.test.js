import React from 'react';
import Title from 'client/components/Title/Title';
import { mount } from 'enzyme';

const title = mount(<Title defaultName={'Where for lunch?'} />);

describe('Title', () => {
  it('should display the defaultName if there is not name', () => {
    expect(title.props().defaultName).toEqual('Where for lunch?');
  });
});
