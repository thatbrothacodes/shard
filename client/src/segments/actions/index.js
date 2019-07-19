import axios from 'axios';
import { put, takeLatest, all, call } from 'redux-saga/effects';

import { 
    GET_SEGMENTS_REQUEST, 
    GET_SEGMENTS_SUCCESS, 
    GET_SEGMENTS_FAILURE,
}  from './types';

export const getSegments = () => {
    return { type: GET_SEGMENTS_REQUEST };
}

function *requestGetSegments() {
    const { response, error } = yield call(() => {
        return axios.get('segments')
                .then(response => ({ response }))
                .catch(error => ({ error }));
    });

    if(response) {
        yield put({ type: GET_SEGMENTS_SUCCESS, data: response.data.rows });
    } else {
        yield put({ type: GET_SEGMENTS_FAILURE, error: error.toString() });
    }
};

function *watchGetSegments() {
    yield takeLatest(GET_SEGMENTS_REQUEST, requestGetSegments);
}

export default function *() {
    yield all([
        watchGetSegments()
    ]);
}
