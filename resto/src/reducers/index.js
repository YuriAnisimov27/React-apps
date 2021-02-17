const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false
      };
    case 'MENU_ERROR':
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: true
      };
    case 'ITEM_ADD_TO_CART':
      const id = action.payload;
      const item = state.menu.find(item => item.id === id);
      const newItem = {
        id: item.id,
        title: item.title,
        url: item.url,
        price: item.price,
      };

      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ]
      };
    case 'REMOVE_ITEM_FROM_CART':
      console.log(action.type)
      const idx = action.payload;
      const newItems = state.items.filter(item => item.id !== idx);

      return {
        ...state,
        items: newItems
      };
    default:
      return state;
  }
};

export default reducer;
