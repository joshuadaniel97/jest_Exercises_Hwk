const sum = (a, b) => a + b;

const isNumber = (value) => {
  if (parseInt(value)) {
    return true;
  }
  return false;
};

const createObject = (a, b) => {
  if (parseInt(a) && parseInt(b)) {
    return { one: a, two: b };
  }
};

const getErrorMessage = (code) => {
  if (code === 404) {
    return "Not found";
  }
  return "Unknown error";
};

const addShoppingListItem = (newItem) => {
  const shoppingList = ["diapers", "kleenex", "trash bags", "paper towels"];
  return [...shoppingList, newItem];
};

module.exports = { sum, isNumber, createObject, getErrorMessage, addShoppingListItem };
