import axios from 'axios';
import { put, takeLatest, all, call } from 'redux-saga/effects';

import { 
    GET_INSIGHTS_REQUEST, 
    GET_INSIGHTS_SUCCESS, 
    GET_INSIGHTS_FAILURE,
}  from './types';

export const getInsights = () => {
    return { type: GET_INSIGHTS_REQUEST };
}

function *requestGetInsights() {
    const { response, error } = yield call(() => {
        return axios.get('insights')
                .then(response => ({ response }))
                .catch(error => ({ error }));
    });

    if(response) {
        yield put({ type: GET_INSIGHTS_SUCCESS, data: response.data.rows });
    } else {
        yield put({ type: GET_INSIGHTS_FAILURE, error: error.toString() });
    }
};

function *watchGetInsights() {
    yield takeLatest(GET_INSIGHTS_REQUEST, requestGetInsights);
}

export default function *() {
    yield all([
        watchGetInsights()
    ]);
}
