import React from 'react';
import { shallow } from 'enzyme';
import Place from 'client/components/Place/Place';
import renderer from 'react-test-renderer';
import { Link, MemoryRouter } from "react-router-dom";

test('With Enzyme, Place component not render rating section when no rating passed over', () => {
  const place = { hehe: 'haha' };
  const wrapper = shallow(
    <MemoryRouter>
      <Place place={place} />
    </MemoryRouter>
  );
  const p = wrapper.find('.rating');
  expect(p.length).toBe(0);
});

test('With Jest snapshot, Place component renders rating section when present', () => {
  const place = { hehe: 'haha', rating: 3.5 };
  const placeComponent = renderer
    .create(
      <MemoryRouter>
        <Place place={place} />
      </MemoryRouter>
    )
    .toJSON();
  expect(placeComponent).toMatchSnapshot();
});
