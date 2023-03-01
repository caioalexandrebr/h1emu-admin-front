/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import Header from './index';

it('renders homepage unchanged', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
