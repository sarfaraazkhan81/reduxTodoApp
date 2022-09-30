export const ItemsReducer = (state = [], action) => {
  if (action.type === "ITEMS") {
    return action.payload;
  }
  return state;
};

export const UiidReducer = (state = [], action) => {
  if (action.type === "UUID") {
    return;
  }
  return state;
};

export const EditItemReducer = (state = [], action) => {
  if (action.type === "EDIT_ITEM") {
    return action.type;
  }
  return state;
};

export const ItemReducer = (state = [], action) => {
  if (action.type === "ITEM") {
    return action;
  }
  return state;
};
