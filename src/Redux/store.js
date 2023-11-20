import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slice/authReducer";
import activationReduser from "./slice/activationReduser";
import UserSlice from "./slice/UserSlice";
import myReducer from "./slice/mySlice"
import myData from "./slice/getShop"
export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            code: activationReduser,
            user: UserSlice,
            myData: myReducer,
            getData:myData
        }
    }
)