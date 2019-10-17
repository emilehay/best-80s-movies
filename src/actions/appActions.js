import { GET_APP_LAYOUT, SET_LOADING, APP_LAYOUT_ERROR, SET_SORT_ORDER } from './types';
import axios from 'axios';

//Get app layout & components from API
export const getAppLayout = () => async dispatch => {
    try {
        setLoading();

        const response = await axios.get('http://demo9595712.mockable.io/getTopFiveMovies');

        dispatch({
            type: GET_APP_LAYOUT,
            payload: response.data
        })

    } catch (error) {
        dispatch({
            type: APP_LAYOUT_ERROR,
            payload: error
        })
    }
}

//Set the sort order for movies
export const setSortOrder = (sortOrder) => {
    setLoading();

    return {
        type: SET_SORT_ORDER,
        payload: sortOrder
    };
}

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}