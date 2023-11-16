import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../Api";

const initialState = {
  code: null,
  error: null,
  loading: false,
  message: "",
};

const activationReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerStart(state) {
      state.loading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.code = action.payload;
      state.message = action.payload.message;
      state.phone = action.payload.phone;
    },
    registerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  activationReducer.actions;

export const registerCode = (userData) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const response = await axios.post(
      url + "/auth/verify-phone",
      userData
    );
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export default activationReducer.reducer;
