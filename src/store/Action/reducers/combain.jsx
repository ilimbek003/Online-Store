import { combineReducers } from "redux";
import postReducer from "./reducersRegister";

export const rootReducer = combineReducers({
  post: postReducer,
  login: LoginReducer,
  post_forgot: postForgot,
  code: codeReducer,
});
  