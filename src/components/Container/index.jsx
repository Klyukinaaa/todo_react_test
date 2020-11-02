import React from 'react';
import ItemsList from '../ItemsList';
import InputForm from '../InputForm';

// eslint-disable-next-line import/prefer-default-export
export function updateItems(items, id) {
  const newItems = [...items];
  const item = items.find((el) => el.id === id);
  if (item) {
    item.checked = !item.checked;
  }
  return newItems;
}

export function addNewItem(currentItem, items, colors) {
  const newItem = currentItem;
  let activeColor;
  if (colors && colors.length) {
    const newColors = [...colors];
    const activeCheckbox = newColors.find((item) => item.selected);
    activeColor = activeCheckbox
      ? activeCheckbox.backgroundColor
      : newColors[Math.floor(Math.random() * 3)]
        .backgroundColor;
  } else {
    activeColor = 'grey';
  }
  if (newItem.value !== '') {
    const newItems = [...items, newItem];
    newItem.color = activeColor;
    return newItems;
  }
  return items;
}

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      colors: [
        {
          backgroundColor: '#ef666c',
          selected: false,

        },
        {
          backgroundColor: '#f171a2',
          selected: false,

        },
        {
          backgroundColor: '#8f6ac8',
          selected: false,

        },
        {
          backgroundColor: '#5eb1f3',
          selected: false,

        },
        {
          backgroundColor: '#68d8e3',
          selected: false,

        },
        {
          backgroundColor: '#fde087',
          selected: false,

        },
      ],
      currentItem: {
        value: '',
        checked: false,
        id: '',
        color: '',
      },
    };
    this.handleChange = this.handleChange.bind(this); // создает новую функцию, с новым контекстом
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleClickColor = this.handleClickColor.bind(this);
  }

  handleClickColor(i) {
    const { colors } = this.state;
    const newColors = [...colors];
    this.setState({
      colors: newColors.map((item, index) => {
        const newItem = item;
        newItem.selected = i === index;
        return newItem;
      }),
    });
  }

  handleChange(event) {
    this.setState({
      currentItem: {
        value: event.target.value,
        checked: false,
        id: Date.now(),
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { currentItem, items, colors } = this.state;
    this.setState({
      items: addNewItem(currentItem, items, colors),
      currentItem: {
        value: '',
        checked: false,
        id: '',
      },
    });
  }

  handleCheck(id) {
    const { items } = this.state;
    this.setState({
      items: updateItems(items, id),
    });
  }

  render() {
    const { currentItem, items, colors } = this.state;
    return (
      <div id="container">
        <div className="page">
          <ItemsList
            handleCheck={this.handleCheck}
            items={items}
          />
          <InputForm
            handleSubmit={this.handleSubmit}
            inputValue={currentItem.value}
            onChange={this.handleChange}
            colors={colors}
            handleClickColor={this.handleClickColor}
          />
        </div>
      </div>
    );
  }
}
