import {url} from "../../Api";
import {fetchDataSuccess} from "../slice/getShop";

export const getDate = (id) => async (dispatch) => {
    try {
        const response = await fetch(url + `/card/${id}`);
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
    } catch (error) {
    }
};

