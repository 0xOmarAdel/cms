const dynamicSort = (property) => {
  return function (a, b) {
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result;
  };
};

export default dynamicSort;
