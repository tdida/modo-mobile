import React from 'react';
import { render } from 'enzyme';
import Agree from '..';

describe('Agree', () => {
  it('renders correctly', () => {
    const wrapper = render(<Agree>Default</Agree>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a simple checked agree', () => {
    const wrapper = render(<Agree value>Default</Agree>);
    expect(wrapper.hasClass('m-agree-checked')).toBe(true);
  });

  it('renders a disabled agree', () => {
    const wrapper = render(<Agree disabled>Default</Agree>);
    expect(wrapper.hasClass('m-agree-disabled')).toBe(true);
  });
});
