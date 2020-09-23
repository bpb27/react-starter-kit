export const addItem = (list, newItem) => [newItem, ...list];
export const removeItem = (list, id) => list.filter(item => item.id !== id);
export const updateItem = (list, updatedItem) => list.map(item => item.id === updateItem.id ? updatedItem : item);
