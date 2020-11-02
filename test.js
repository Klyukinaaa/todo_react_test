const state = {
  items: [{
    id: '123',
    checked: false,
    data: 'Some Todo',
  },
  {
    id: '1234',
    checked: false,
    data: 'Complete TODO List',
  },
  {
    id: '12356',
    checked: false,
    data: 'Data',
  }],
};

function changeState(id) {
  const { items } = state;
  const newItems = [...items];

  const item = state.items.find((el) => el.id === id);
  if (item) {
    item.checked = !item.checked;
  }
  state.items = newItems;
}

changeState('1234');

console.log(state);
