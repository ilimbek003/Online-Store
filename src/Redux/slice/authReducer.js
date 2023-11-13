import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {url} from "../../Api"

const initialState = {
    user: null,
    error: null,
};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerSuccess(state, action) {
            state.user = action.payload;
        },
        registerFailure(state, action) {
            state.error = action.payload;
        },
    },
});

export const {registerStart, registerSuccess, registerFailure} = authReducer.actions;

export const registerUser = userData => async dispatch => {
    dispatch(registerStart());
    try {
        const response = await axios.post(url + '/auth/register/', userData);
        dispatch(registerSuccess(response.data));
    } catch (error) {
        dispatch(registerFailure(error.message));
    }
};

export default authReducer.reducer;
