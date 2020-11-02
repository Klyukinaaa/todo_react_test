import React from 'react';
import renderer from 'react-test-renderer';
import ItemColor from '../components/ItemColor';

test('renders correctly', () => {
  const color = {
    backgroundColor: '#ef666c',
    selected: true,
  }
  const tree = renderer
    .create(<ItemColor i={1} item={color} clickColor={() => void 0} click={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
