export const addItem = (list, newItem) => [newItem, ...list];

export const findItem = (list, id) => list.find(item => item.id === id);

export const removeItem = (list, id) => list.filter(item => item.id !== id);

export const updateItem = (list, updatedItem) => list.map(item => item.id === updatedItem.id ? updatedItem : item);

export const omit = (object, propList) => (
  Object.keys(object)
    .filter(key => !propList.includes(key))
    .reduce((hash, key) => ({ ...hash, [key]: object[key] }), {})
);

export const pick = (object, propList) => (
  Object.keys(object)
    .filter(key => propList.includes(key))
    .reduce((hash, key) => ({ ...hash, [key]: object[key] }), {})
);

export const textMatch = (search = '', target, fields) => {
  if (typeof target === 'string') {
    return target.toLowerCase().includes(search.toLowerCase());
  } else if (fields) {
    return !!Object.values(pick(target, fields))
      .find(value => value.toLowerCase().includes(search.toLowerCase()));
  } else {
    return true;
  }
};
