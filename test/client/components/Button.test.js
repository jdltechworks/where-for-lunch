import React from 'react';
import { shallow } from 'enzyme';

import Button from 'client/components/Button'

const component = shallow(<Button />);

describe('Button', () => {

  it('should not be disabled by default', () => {

    expect(component.props().disabled).toBe(false);

  });

  it('should be disabled if set to true', () => {

    const disabled = component.setProps({ disabled: true });

    expect(disabled.props().disabled).toBe(true);

  });

  it('should not be disabled if set to false', () => {

    const disabled = component.setProps({ disabled: false });

    expect(disabled.props().disabled).toBe(false);

  });

});
