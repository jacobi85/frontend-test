
export const arraySortByValue = (array, value) => {
  return array.sort((a, b) => {
    return a[value] - b[value];
  });
}

export const findItemIndexByName = (
  items,
  name
) => {
  return items.findIndex((item) => item.name === name);
};
