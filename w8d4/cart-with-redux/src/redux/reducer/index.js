import {
  ADD_NEW_ELEMENT,
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_FROM_CART,
  INCREMENT_TO_CART,
  LOGIN,
  LOGOUT,
  REMOVE_FROM_CART,
} from "../actions";

const initialState = [1, 2, 3];
const numberReducer = (state = initialState, action) => {
  console.log("actions", action);
  switch (
    action.type // ADD_NEW_ELEMENT
  ) {
    case ADD_NEW_ELEMENT:
      return [...state, state.length + 1];
  }
  return state;
};
const userInitialState = {};
const userReducer = (state = userInitialState, action) => {
  switch (
    action.type // LOGIN, LOGOUT
  ) {
    case LOGIN:
      console.log("payload from ", action.payload);
      console.log("in Login");
      return { ...state, loginUser: action.payload };
    case LOGOUT:
      console.log("in Logout");
      delete state["loginUser"];
      console.log("after logout", state);
      return { ...state };
  }
  return state;
};
const cartInitialValue = {};
const cartReducer = (state = cartInitialValue, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {};
    case REMOVE_FROM_CART: {
      const { id } = action.payload;
      const updatedCart = { ...state };
      delete updatedCart[id];
      return updatedCart;
    }

    case ADD_TO_CART: {
      const { id, name, price } = action.payload;
      return { ...state, [id]: { id, name, price, qty: 1 } };
    }
    case DECREMENT_FROM_CART: {
      const { id } = action.payload;
      const updatedCart = { ...state };
      if (updatedCart[id].qty > 1) {
        const product = updatedCart[id];
        product.qty--;
      } else {
        delete updatedCart[id];
      }
      return { ...updatedCart };
    }
    case INCREMENT_TO_CART: {
      const { id } = action.payload;
      const updatedCart = { ...state };
      const product = updatedCart[id];
      product.qty++;
      return { ...updatedCart };
    }
  }
  return state;
};
export { userReducer, numberReducer, cartReducer };
