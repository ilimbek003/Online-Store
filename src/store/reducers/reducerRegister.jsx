import { POST_RESPONSE } from "../Action/ActionRegister";
const intialState = {
  response: false,
};

const postReducer = (state = intialState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return {
        ...state,
        response: action.payload,
      };
    case POST_RESPONSE:
      return { ...state, response: action.payload };
    default:
      return state;
  }
};



export default postReducer;