// cartReducer.js
const initialState = {
  items: [],
  // Otros campos de estado del carrito
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        const updatedItems = state.items.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });
        return { ...state, items: updatedItems };
      } else {
        // Si el producto no está en el carrito, agregarlo con la cantidad seleccionada
        const newItem = { ...product, quantity };
        console.log(newItem);
        return { ...state, items: [...state.items, newItem] };
      }
    }

    case "REMOVE_FROM_CART": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, items: updatedItems };
    }

    default:
      return state;
  }
};

export default cartReducer;
