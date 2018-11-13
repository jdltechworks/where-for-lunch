import React from 'react'
import { mount } from 'enzyme';
import Checkbox from 'client/components/Checkbox';

const component = mount(
  <Checkbox name="test-name" label="Test name" checked={false} handleChange={() => {
    return 'I am called';
  }} />
);


describe('Checkbox', () => {
  it('should be checked if set to check', () => {
    component.setProps({ checked: true })
    expect(component.props().checked).toBe(true);
  });

  it('should have a name that matches the declared props name', () => {
    expect(component.props().name).toEqual('test-name');
  });

  it('should have a label that matches the declared props label', () => {
    expect(component.props().label).toEqual('Test name');
  });

  it('should be able to call a handleChange function', () => {
    expect(component.props().handleChange()).toEqual('I am called');
  });
});
