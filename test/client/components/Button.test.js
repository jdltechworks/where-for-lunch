import React from 'react';
import { shallow } from 'enzyme';

import Button from 'client/components/Button'

const component = shallow(<Button />);

describe('Button', () => {

  it('should be false by default', () => {

    expect(component.props().disabled).toBe(false)

  });

  it('should be disabled if set to disabled', () => {

    const disabled = component.setProps({ disabled: true });

    expect(disabled.props().disabled).toBe(true)

  });

});
