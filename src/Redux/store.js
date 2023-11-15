import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slice/authReducer";
import activationReduser from "./slice/activationReduser";
import UserSlice from "./slice/UserSlice";

export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            code: activationReduser,
            user: UserSlice,
        }
    }
)