import { GET_APP_LAYOUT, SET_LOADING, APP_LAYOUT_ERROR } from '../actions/types';

const initialState = {
    layout: null,
    current: null,
    loading: false,
    error: null
};

export default(state = initialState, action) => {
    switch(action.type) {
        case GET_APP_LAYOUT:
            return {
                ...state,
                layout: action.payload,
                loading: false,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case APP_LAYOUT_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}