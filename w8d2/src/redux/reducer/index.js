import { ADD_NEW_ELEMENT, LOGIN, LOGOUT } from "../actions";

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
export { userReducer, numberReducer };
