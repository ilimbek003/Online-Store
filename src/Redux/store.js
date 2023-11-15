import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slice/authReducer";
import activationReduser from "./slice/activationReduser";

export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            code: activationReduser,
        }
    }
)