import { updateItems, addNewItem } from '../components/Container';

describe('Test updateItems function', () => {
  test('when clicking on an element, the function changes the checked value to the opposite', () => {
    const arrBefore = [{
      id: 'abc',
      checked: false,
    }];
    const arrAfter = [{
      id: 'abc',
      checked: true,
    }];
    expect(updateItems(arrBefore, 'abc')[0].checked)
      .toEqual(arrAfter[0].checked);
  });

  test('the length of the array does not change when the function is called', () => {
    const arrBefore = [];
    expect(updateItems(arrBefore, 'test'))
      .toHaveLength(0);
  });

  test('when the function is called, the structure of the array element does not change', () => {
    const arrBefore = [{ id: '1' }];
    expect(updateItems(arrBefore))
      .toContainEqual({ id: '1' });
  });
});

describe('Test submitForm function', () => {
  test('if, when calling the function, the element of the array of colors is selected to true, then the task element takes the color of this element', () => {
    const items = [];
    const colors = [{
      backgroundColor: '#ef666c',
      selected: true,
    },
    {
      backgroundColor: '#f171a2',
      selected: false,
    }];
    const itemBefore = {
      value: 'hello',
      checked: false,
      id: '1',
      color: '',
    };
    const expectedItem = {
      value: 'hello',
      checked: false,
      id: '1',
      color: '#ef666c',
    };
    expect(addNewItem(itemBefore, items, colors))
      .toContainEqual(expectedItem);
  });

  test('the function does not create an element into an array if there is no value', () => {
    const items = [{ a: 4 }];
    const colors = [{
      backgroundColor: '#ef666c',
      selected: true,
    }];
    const itemBefore = {
      value: '',
      checked: false,
      id: '1',
      color: '',
    };
    expect(JSON.stringify(addNewItem(itemBefore, [...items], colors)))
      .toEqual(JSON.stringify(items));
  });

  test('if there is no array of colors when the function is called, then the task color element will be gray', () => {
    const items = [];
    const colors = [];
    const itemBefore = {
      value: '1',
      checked: false,
      id: '1',
      color: '',
    };
    const itemAfter = {
      value: '1',
      checked: false,
      id: '1',
      color: 'grey',
    };
    expect(addNewItem(itemBefore, items, colors))
      .toContainEqual(itemAfter);
  });
});
