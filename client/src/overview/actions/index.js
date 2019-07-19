import axios from 'axios';
import { put, takeLatest, all, call } from 'redux-saga/effects';

import { 
    GET_OVERVIEW_REQUEST, 
    GET_OVERVIEW_SUCCESS, 
    GET_OVERVIEW_FAILURE,
}  from './types';

export const getOverview = () => {
    return { type: GET_OVERVIEW_REQUEST };
}

function *requestGetOverview() {
    const { response, error } = yield call(() => {
        return axios.get('overview')
                .then(response => ({ response }))
                .catch(error => ({ error }));
    });

    if(response) {
        yield put({ type: GET_OVERVIEW_SUCCESS, data: response.data.rows });
    } else {
        yield put({ type: GET_OVERVIEW_FAILURE, error: error.toString() });
    }
};

function *watchGetOverview() {
    yield takeLatest(GET_OVERVIEW_REQUEST, requestGetOverview);
}

export default function *() {
    yield all([
        watchGetOverview()
    ]);
}
