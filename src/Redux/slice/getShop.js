import {createSlice} from '@reduxjs/toolkit';

const getShop = createSlice({
    name: 'myData',
    initialState: {
        data: [],
    },
    reducers: {
        fetchDataSuccess: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const {fetchDataSuccess} = getShop.actions;

export default getShop.reducer;
