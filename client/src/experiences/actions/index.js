import axios from 'axios';
import { put, takeLatest, all, call } from 'redux-saga/effects';

import { 
    GET_EXPERIENCES_REQUEST, 
    GET_EXPERIENCES_SUCCESS, 
    GET_EXPERIENCES_FAILURE,
}  from './types';

export const getExperiences = () => {
    return { type: GET_EXPERIENCES_REQUEST };
}

function *requestGetExperiences() {
    const { response, error } = yield call(() => {
        return axios.get('experiences')
                .then(response => ({ response }))
                .catch(error => ({ error }));
    });

    if(response) {
        yield put({ type: GET_EXPERIENCES_SUCCESS, data: response.data.rows });
    } else {
        yield put({ type: GET_EXPERIENCES_FAILURE, error: error.toString() });
    }
};

function *watchGetExperiences() {
    yield takeLatest(GET_EXPERIENCES_REQUEST, requestGetExperiences);
}

export default function *() {
    yield all([
        watchGetExperiences()
    ]);
}
