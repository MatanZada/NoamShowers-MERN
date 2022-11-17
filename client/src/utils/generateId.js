const generateId = (arr) => {
  const operation = (item) => ({
    ...item,
    _id: Math.floor(100000 + Math.random() * 90000),
  });
  return arr.map(operation);
};

export default generateId;
