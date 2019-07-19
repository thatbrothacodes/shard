import * as types from '../actions/types';

const initialState = {
    items: [],
    error: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_OVERVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.GET_OVERVIEW_SUCCESS:
            return {
                ...state,
                items: action.data,
                loading: false
            }
        case types.GET_OVERVIEW_FAILURE:
            return {
                ...state,
                items: [],
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
}
