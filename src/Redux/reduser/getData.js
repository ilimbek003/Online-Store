import axios from 'axios';
import { url } from '../../Api';
import { fetchDataSuccess } from '../slice/getShop';

export const getDate = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('tokens');
        const response = await axios.get(url + '/auth/user-info', {
            headers: {
                Authorization: `Token ${token}`,
            },
        }  );
        dispatch(fetchDataSuccess(response.data));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
