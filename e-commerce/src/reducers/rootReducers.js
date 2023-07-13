// rootReducer.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
// Importa otros reducers que tengas

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
