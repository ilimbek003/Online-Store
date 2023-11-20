import axios from 'axios';
import {url} from '../../Api';
import {fetchDataSuccess} from '../slice/getShop';
import {useState} from "react";

export const getDate = () => async (dispatch) => {
    const [local, setLocal] = useState(localStorage.getItem("token"))


    const headers = {
        Authorization: `Token ${local}`
    }
    try {
        const response = await axios.get(url + '/auth/user-info', {headers});
        dispatch(fetchDataSuccess(response.data));
    } catch (error) {
    }
};
