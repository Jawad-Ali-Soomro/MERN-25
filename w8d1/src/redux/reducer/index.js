import { ADD_NEW_ELEMENT } from "../actions";

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

export default numberReducer;
