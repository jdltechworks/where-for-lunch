import React from 'react';
import Title from 'client/components/Title/Title';
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom";

const noTitle = mount(
  <Title defaultTitle={'Where for lunch?'} />
);

const withTitleAndUrl = mount(
  <MemoryRouter>
    <Title defaultTitle={'Where for lunch?'} title={'Burger King'} url={'/12312211'} />
  </MemoryRouter>
).find(Title)

describe('Title', () => {
  it('should display the defaultTitle if there is no title', () => {

    expect(noTitle.props().defaultTitle).toEqual('Where for lunch?');
  });

  it('should be able to display a link with a url when title', () => {
    expect(withTitleAndUrl.props().url).toEqual('/12312211');
    expect(withTitleAndUrl.props().title).toEqual('Burger King');
  });
});
